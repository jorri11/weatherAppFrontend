<template>
  <div>
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
