<template>
  <div id="app">
    <router-link to="/">Home</router-link> |
    <router-view />
    
  </div>
</template>

<script>

import { mapState } from 'vuex'
export default {
  name: 'App',
 
    created() {
      this.$store.dispatch('loadProducts');
      this.$store.dispatch('loadBag');
    },
    computed: mapState([
      'productsInBag'

    ]),
  
}
</script>
