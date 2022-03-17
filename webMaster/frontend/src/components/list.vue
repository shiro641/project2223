<template>
  <div>
    <div :style="{display: 'flex', flexDirection: 'column', justifyContent: 'space-between',width: parseInt(listWidth)+'px', height: parseInt(listHeight)+'px'}">
      <div v-for="n in parseInt(listNum)" :id="'list'+n" style="display: flex; flex-grow: 1;justify-content: center;align-items: center;border-bottom:1px solid #D8D8D8">
          list{{n}}
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "test",
        props: {
          listNum: {
            type: Number,
            default: '4'
          },
          listHeight:{
            type: Number,
            default: '500'
          },
          listWidth:{
            type: Number,
            default: '100'
          }
        },
        data(){
          return{
          }
        }
    }
</script>

<style scoped>

</style>