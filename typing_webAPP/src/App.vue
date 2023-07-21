<script setup lang="ts">
import { ref,provide } from "vue";

const QuestionList:string[]=["Q1","Q2","Q3"];
const selectQuestion=ref<string>(QuestionList[0]);
const userName=ref<string>("user name");
const timeReslt=ref<number[]>([]);
const correctResult=ref<boolean[]>([]);

provide("QuestionList",QuestionList);
provide("Question",selectQuestion);
provide("UserName",userName);
provide("timeResult",timeReslt);
provide("correctResult",correctResult);
</script>

<template>
  <header>
    <h1>タイピング問題</h1>
  </header>
  <main>
    <RouterView/>
  </main>
</template>
<style>
main{
    width: 100%;
    height: 90vh;
  }
header{
  background-color:rgb(220, 220, 220);
  height: 10vh;
}
h1{
  font-size: 6vh;
}
</style>