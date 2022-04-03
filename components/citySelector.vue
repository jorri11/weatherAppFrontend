<template>
  <div>
    <label for="cities">Choose a city</label>
    <select name="cities" v-model="selected" @change="handleChange">
      <option v-for="(value, key) in Cities" :key="key" :value="value">
        {{ key }}
      </option>
    </select>
    <!--<div>
      {{ selected }}
    </div>-->
  </div>
</template>

<script>
export default {
  name: 'citySelector',
  methods: {
    async handleChange(e) {
      const res = await this.$axios.$get(
        `http://127.0.0.1:8000/nowcast?lat=${this.selected.lat}&lon=${this.selected.lon}`
      )
      this.$store.commit('forecast/update', res)
    },
  },
  data() {
    return {
      Cities: {
        Oslo: { lat: 60.3913, lon: 5.3221 },
        Trondheim: { lat: 63.4305, lon: 10.3951 },
      },
      selected: undefined,
    }
  },
}
</script>

<style>
</style>