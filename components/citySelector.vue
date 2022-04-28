<template>
  <div class="centered">
    <p>Selected {{ selected }}</p>
    <b-field label="Choose a city">
      <b-autocomplete
        :data="filteredDataArray"
        clearable
        :loading="loading"
        v-model="name"
        @select="(option) => (selected = Cities[option])"
      >
        <template #empty>No results found</template></b-autocomplete
      >
    </b-field>
  </div>
</template>

<script>
export default {
  name: 'citySelector',
  methods: {
    async handleChange() {
      this.loading = true
      const res = await this.$axios.$get(
        `http://127.0.0.1:8000/nowcast?lat=${this.selected.lat}&lon=${this.selected.lon}`
      )
      this.$store.commit('forecast/update', res)
      this.loading = false
    },
  },
  data() {
    return {
      Cities: {
        Oslo: { lat: 59.9139, lon: 10.7522 },
        Bergen: { lat: 60.3913, lon: 5.3221 },
        Trondheim: { lat: 63.4305, lon: 10.3951 },
        Stavanger: { lat: 58.97, lon: 5.7331 },
        Kristiansand: { lat: 58.1599, lon: 8.0182 },
      },
      selected: undefined,
      name: '',
      loading: false,
    }
  },
  watch: {
    selected(newSelected, oldSelected) {
      if (newSelected) {
        this.handleChange()
      }
    },
  },
  computed: {
    filteredDataArray() {
      return Object.keys(this.Cities).filter((option) => {
        return (
          option.toString().toLowerCase().indexOf(this.name.toLowerCase()) >= 0
        )
      })
    },
  },
}
</script>

<style>
.centered {
  position: absolute;
  left: 50%;
  top: 25%;
  transform: translate(-50%, -50%);
  padding: 1ch;
}
</style>