<template>
    <div>
        <mt-button type = "danger" icon = 'more'>default</mt-button>
        <mt-button type = "default" size = "large" @click = "show">toast</mt-button>
        <mt-button type = "primary" size = "small">small</mt-button>
       <!--  <mybtn>mybtn</mybtn> -->
    </div>
</template>

<script>
//css组件默认直接导入，JS组件默认按需导入,组件中只需要引入按需引用的部分，全局引用的放在main.js中
import { Toast } from 'mint-ui'

export default {
    data(){
        return {
            toastinstant:null //放到组件data，可以在show方法外访问
        }
    },
    created(){
        this.getList();
    },
    methods: {
        getList(){
            this.show()
            setTimeout(() => { //有作用域问题,使用时注意
                this.toastinstant.close()
            }, 3000);
        },
         show(){
        // Toast('提示信息')
        this.toastinstant = Toast({
            message:'提示信息',
            position:'top',
            duration:'3000',
            iconClass:'glyphicon glyphicon-heart'
        })
    }
    }
   
}
</script>

<style >
.mint-toast-icon{
    color: red !important;
}

</style>

/* important 可以为css元素提权 */