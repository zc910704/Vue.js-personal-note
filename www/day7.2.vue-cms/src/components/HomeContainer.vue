<template>
    <div>
        <!-- 輪播圖需要手動設置css高度 -->
        <mt-swipe :auto="4000">
            <mt-swipe-item>1</mt-swipe-item>
            <mt-swipe-item>2</mt-swipe-item>
            <mt-swipe-item>3</mt-swipe-item>
        </mt-swipe>
    </div>
</template>
<script>
export default {};
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
</style>
