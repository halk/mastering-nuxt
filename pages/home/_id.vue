<template>
  <div class="app-container">
    <property-gallery :images="home.images"/>
    <property-details :home="home"/>
    <property-description :home="home"/>
    <property-map :home="home"/>
    <property-reviews :reviews="reviews"/>
    <property-host :user="user"/>
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
  }
};
</script>
