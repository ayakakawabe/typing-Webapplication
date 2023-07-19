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