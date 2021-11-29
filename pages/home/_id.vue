<template>
<div>{{ home.title }}</div>
</template>

<script>
import homes from '~/data/homes.json';

export default {
  data() {
    return {
      home: {}
    }
  },
  created() {
    this.home = homes.find((home) => home.objectID === this.$route.params.id);
  }
};
</script>