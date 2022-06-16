<template>
<div>
  <div style="display: flex;">
    <img v-for="image in home.images" :key="image" :src="image" width="200" height="150"/>
  </div>
  {{ home.title }}<br/>
  ${{ home.pricePerNight }} / night<br/>
  <img src="/images/marker.svg" width="20" height="20"/>{{ home.location.address }} {{ home.location.city }} {{ home.location.state }} {{ home.location.country }}<br />
  <img src="/images/star.svg" width="20" height="20"/>{{ home.reviewValue }}<br/>
  {{ home.guests }} guests, {{ home.bedrooms }} rooms, {{ home.beds }} beds, {{ home.bathrooms }} baths<br/>
  <p>{{ home.description }}</p>
  <div style="height:800px;width:800px" ref="map"></div>
  <div v-for="review in reviews" :key="review.objectId">
    <img :src="review.reviewer.image" /><br/>
    {{ review.reviewer.name }}<br/>
    {{ formatDate(review.date) }}<br/>
    <ShortText :text="review.comment" :target="150"/><br/>
  </div>
  <img :src="user.image"/>
  {{ user.name }}<br/>
  {{ formatDate(user.joined) }}<br/>
  {{ user.reviewCount }}<br/>
  {{ user.description }}
</div>
</template>

<script>
export default {
  async asyncData({ error, params, $dataApi }) {
    const homeResponse = await $dataApi.getHome(params.id);
    if (!homeResponse.ok) {
      return error({ statusCode: homeResponse.status, message: homeResponse.statusText });
    }

    const reviewResponse = await $dataApi.getReviewsByHomeId(params.id);
    if (!reviewResponse.ok) {
      return error({ statusCode: reviewResponse.status, message: reviewResponse.statusText });
    }

    const userResponse = await $dataApi.getUsersByHomeId(params.id);
    if (!userResponse.ok) {
      return error({ statusCode: userResponse.status, message: userResponse.statusText });
    }

    return {
      home: homeResponse.json,
      reviews: reviewResponse.json.hits,
      user: userResponse.json.hits[0]
    };
  },
  head() {
    return {
      title: this.home.title
    };
  },
  mounted() {
    this.$maps.showMap(this.$refs.map, this.home._geoloc.lat, this.home._geoloc.lng);
  },
  methods: {
    formatDate(dateStr) {
      const date = new Date(dateStr);

      return date.toLocaleDateString(undefined, { month: 'long', year: 'numeric' });

    }
  }
};
</script>
