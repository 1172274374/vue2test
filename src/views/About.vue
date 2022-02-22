<template>
  <div @click="changeMsg" ref="box">
    {{msg}}
  </div>
</template>

<script>
export default {

  data(){
    return {
      msg:'123'
    }
  },

  beforeCreate(){
    console.log('2');
  },
  created(){
    console.log('3');
  },
  beforeMounted(){
    console.log('4');
  },
  beforeUpdata(){
    console.log('5');
  },
  updataed(){
    console.log('6');
  },
  beforeDestroy(){
    console.log('7');
  },
  destroyed(){
    console.log('8');
  },

  watch:{
    msg(oldValue,newValue){
      console.log(oldValue,newValue);
    }
  },
  

  mounted(){

    console.log('1');

  

  },
  methods:{
    changeMsg(){
      this.msg = '321'
      console.log(this.$refs.box.innerText);
      this.$nextTick(()=>{
        console.log(this.$refs.box.innerText);
      })
    }
  }
}
</script>

<style>

</style>