<template>
    <div>
        <h1>login component msg = {{msg}}</h1>
    </div>
</template>
<script>
export default {
    data(){ //注意：组件中的data必须是function
        return{
            msg:'123'
        }
    },
    methods:{
        show(){
            console.log('show')
        }
    }
}
</script>
<style>

</style>
