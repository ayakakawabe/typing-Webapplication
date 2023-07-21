<script setup lang="ts">
import { useRouter } from 'vue-router';
import { inject } from 'vue';

const QuestionList:string[]=inject("QuestionList") as string[];
const selectQuestion=inject<string>("Question");
const userName=inject<string>("UserName");

const router=useRouter();
const startClick=():void=>{
    router.push("./main");
};
</script>
<template>
    <h2>Top</h2>
    <section>
        <select v-model="selectQuestion">
            <option v-for="Q in QuestionList">{{ Q }}</option>
        </select>
        <input v-model="userName">
    </section>
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
section{
    position: relative;
    top: 37vh;
}
section *{
    display: block;
    font-size: xx-large;
    margin: auto;
    margin-bottom: 20px;
    background-color: rgb(245, 244, 244);
}
button{
    display: block;
    margin: auto;
    position: relative;
    top: 43vh;
    width: 35vw;
    height: 7vh;
    font-size: xx-large;
    color: aliceblue;
    background-color: rgb(44, 44, 44);
}
</style>