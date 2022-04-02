<template>
  <div>
    <label for="cities">Choose a city</label>
    <select name="cities" @change="handleChange">
      <option value="oslo">Oslo</option>
      <option value="bergen">Bergen</option>
      <option value="stavanger">Stavanger</option>
      <option value="trondheim">Trondheim</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'citySelector',
  methods: {
    async handleChange(e) {
      console.log(e.target.value)
      const res = await this.$axios.$get(
        'http://127.0.0.1:8000/nowcast?lat=60.3913&lon=5.3221'
      )
      console.log(res)
    },
  },
}
</script>

<style>
</style>