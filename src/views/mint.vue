<template>
  <div>
    <div>
        <mt-header title="标题过长会隐藏后面的内容啊哈哈哈哈" fixed>
            <router-link to="/" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
    </div>
    <div class="content">
    <mt-popup
        v-model="popupVisible"
        popup-transition="popup-fade">
        ...
        </mt-popup>
    </div>
    <div>
        <mt-tabbar v-model="selected" fixed >
            <mt-tab-item id="外卖" @click="upPage">
                <img slot="icon" src="../assets/logo.png">
                外卖
            </mt-tab-item>
            <mt-tab-item id="订单">
                <img slot="icon" src="../assets/logo.png">
                订单
            </mt-tab-item>
            <mt-tab-item id="发现">
                <img slot="icon" src="../assets/logo.png">
                发现
            </mt-tab-item>
            <mt-tab-item id="我的">
                <img slot="icon" src="../assets/logo.png">
                我的
            </mt-tab-item>
        </mt-tabbar>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            selected:'',
            popupVisible:false
        }
    },
    watch:{
        selected(oldVal,newVal){
            console.log(oldVal);
            console.log(newVal);
        }
    },
    mounted(){
        this.MessageBox({
            title: '提示',
            message: '确定执行此操作?',
            showCancelButton: true
        }).then(action => {
            if(action == 'confirm'){
                this.Indicator.open({
                    text: '加载中...',
                    spinnerType: 'fading-circle'
                });
                setTimeout(()=>{
                    this.Indicator.close();
                },5000)
            }
        });
    },
    methods:{
        upPage(){
            this.popupVisible = true
        }
    }
}
</script>

<style>
    .mint-header{
        background-color: antiquewhite;
    }
    .content{
        width: 100%;
        height: 800px;
        /* background: red; */
    }
    .popup{
        background: red;
        width: 100%;
        height: 300px;
    }
</style>