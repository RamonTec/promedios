<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script >
export default {
  name: 'App',
  created () {
    this.$q.addressbarColor.set('#25292e')
  }
}
</script>
