<template>
    <div>
        <!-- 輪播圖需要手動設置css高度 -->
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for = "item in images" :key="item.enddate">
                <img :src="item.url" alt="lunbotu" >
            </mt-swipe-item>
        </mt-swipe>

         <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-home"></span>
		                    <div class="mui-media-body">Home</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-email"></span>
		                    <div class="mui-media-body">Email</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-chatbubble"></span>
		                    <div class="mui-media-body">Chat</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-location"></span>
		                    <div class="mui-media-body">location</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-search"></span>
		                    <div class="mui-media-body">Search</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-phone"></span>
		                    <div class="mui-media-body">Phone</div></a></li>
		        </ul> 
    </div>
</template>
<script>
import { Toast } from 'mint-ui'
export default {
    data(){
        return {
            images : []
        }
    },
    methods:{
        getImages(){
            this.$http.jsonp("http://bing.ioliu.cn/v1",{'w': 400, 'h': 240}).then(
                res=>{
                    console.log(res.body);
                    if(res.body.status.code === 200){
                        this.images.push(res.body.data)
                        Toast('ok')
                    }else{
                        Toast('fail to get pic')
                    }
                }
            )
        }
    },
    created(){
        this.getImages()
    }
};
</script>
<style scoped>
.mint-swipe{
    height: 300px;
}
.mint-swipe-item:nth-child(1){
    background-color: red;
}
.mint-swipe-item:nth-child(2){
    background-color: grey;
}
.mint-swipe-item:nth-child(3){
    background-color: yellow;
}
img{
    width: 100%;
    height: 100%;
}
</style>
