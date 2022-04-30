<template>
  <div class="centered">
    <city-selector />
    <forecast-display />
  </div>
</template>

<script>
import citySelector from '~/components/citySelector.vue'
import ForecastDisplay from '~/components/ForecastDisplay.vue'
export default {
  components: { citySelector, ForecastDisplay },
  name: 'IndexPage',
}
</script>

<style scoped>
.centered {
  position: absolute;
  left: 50%;
  top: 25%;
  transform: translate(-50%, -50%);
  padding: 1ch;
}
</style>