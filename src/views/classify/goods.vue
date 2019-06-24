<template>
    <div class="goods">
      <hreaderBack :titleData="headerData"></hreaderBack>
    </div>
</template>

<script>
  import  hreaderBack from  "@/components/headerBack"
    export default {
        name: "goods",
      data(){
          return {
            headerData:{
              titleName:"商品详情",
              showForm:false
            },

          }
      },
      components:{
        hreaderBack
      }

    }
</script>

<style scoped>

</style>
