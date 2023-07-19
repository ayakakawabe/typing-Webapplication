<script setup lang="ts">
import { useRouter } from 'vue-router';
const router=useRouter();
const startClick=():void=>{
    console.log("click");
    router.push("./main");
};
</script>
<template>
    <h2>Top</h2>
    <button v-on:click="startClick">スタート</button>
</template>
<style scoped>
*{
    text-align: center;
}
h2{
    font-size: 70px;
    position:relative;
    top: 30vh;
}
button{
    display: block;
    margin: auto;
    position: relative;
    top: 40vh;
    width: 35vw;
    height: 7vh;
    font-size: xx-large;
}
</style>