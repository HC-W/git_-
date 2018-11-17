<template>
    <div>
        <div v-for="(item,index) in AllTopic" :key="index">
            {{item.good}} === {{item.title | fn}}
        </div>
        <!-- {{$store.getters.CnodeGood}} -->
        <!-- {{AllTopic}} -->
        <!-- 新的玩法 vuex getters -->
        <div>

        </div>
        <div v-if="$store.state.Cnode.loading">
            <wang-loading></wang-loading>
        </div>
    </div>
</template>

<script>
import Loading from "./loading.vue";
export default {
  components: {
    "wang-loading": Loading
  },
  created() {
    this.$store.dispatch("Cnode/AllTopic");
  },
  computed: {
    AllTopic() {
        return this.$store.getters['Cnode/CnodeGood']
      // if(this.$store.state.AllTopic.data){
      //    return this.$store.state.AllTopic.data.filter((item)=>{
      //        return item.good
      //     })
      // }else{
      //     return this.$store.state.AllTopic
      // }
    }
  },
//   局部过滤器
//   filters: {
//       fn(arg) {
//           console.log(arg)
//           return '你真的是96的？'
//       }
//   }
};
</script>

<style>
</style>