<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" @click="clickToust">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'


import { Toast } from 'mint-ui';

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data(){
    return{
      msg:'ranshizahng'
    }
  },
  mounted(){

    console.log(sessionStorage.getItem('key'));
    

  },
  methods:{
    clickToust(msg){
      Toast(msg)
    }
  }
  
  
}
</script>
