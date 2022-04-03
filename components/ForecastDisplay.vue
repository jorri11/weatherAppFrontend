<template>
  <div @click="f" v-if="forecastDetails">
    Temperatur: {{ forecastDetails.air_temperature }}
    {{ forecastUnits.air_temperature }}
  </div>
</template>

<script>
export default {
  name: 'forecastDisplay',
  computed: {
    forecastDetails() {
      if (this.$store.state.forecast.nowcast === undefined) {
        return undefined
      }
      return this.$store.state.forecast.nowcast.forecast.data.instant.details
    },
    forecastUnits() {
      if (this.$store.state.forecast.nowcast === undefined) {
        return undefined
      }
      return this.$store.state.forecast.nowcast.units
    },
  },
  methods: {
    f(e) {
      console.log(this.$store.state.forecast)
    },
  },
}
</script>

<style>
</style>