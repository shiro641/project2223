<template>
  <div id="app">
    <router-view></router-view>
    <v-tour name="myTour" :steps="steps"></v-tour>
  </div>
</template>

<script>
  export default {
    name: 'app',
    mounted(){
    },
    data(){
      return {
        steps: [
          {
            target: '#export',  // We're using document.querySelector() under the hood
            header: {
              title: 'Get Started',
            },
            content: `Discover <strong>Vue Tour</strong>!`
          }
        ],
      }
    }
  }
</script>

