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
</div>
</template>

<script>
import homes from '~/data/homes.json';

export default {
  data() {
    return {
      home: {}
    }
  },
  head() {
    return {
      title: this.home.title
    };
  },
  created() {
    this.home = homes.find((home) => home.objectID === this.$route.params.id);
  }
};
</script>