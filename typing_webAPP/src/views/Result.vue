<script setup lang="ts">
import { inject, type Ref } from 'vue';

const Question=inject<string>("Question");
const UserName=inject<string>("UserName");
const timeResult=inject("timeResult") as Ref<number[]>;
const correctResult=inject("correctResult") as Ref<boolean[]>;
const numQuestion=timeResult.value.length;
interface allResultInter {
    isCorrect:boolean;
    time:number;
}
const allResult= new Map<number,allResultInter>();
for(let key:number=1;key<=numQuestion;key++){
    allResult.set(key,{isCorrect:correctResult.value[key-1],time:timeResult.value[key-1]});
}

const formatIsCorrect=(key:number):string=>{
    const isCorrect=allResult.get(key)?.isCorrect;
    let CorrectPrint:string;
    if(isCorrect==true){
        CorrectPrint="◯";
    }else if(isCorrect==false){
        CorrectPrint="✕";
    }else{
        CorrectPrint="";
    }
    return CorrectPrint;
}
const formatTime=(key:number,decimalPlace:number):(number|string)=>{
    const time=allResult.get(key)?.time;
    const temp=10**decimalPlace;
    if(time!=undefined){
        return Math.round(time*temp)/temp;
    }else{
        return "";
    }
}
</script>
<template>
    <h2>結果</h2>
    <section>
        <p>ユーザー名：{{ UserName }}</p>
        <p>設問：{{ Question }}</p>
    </section>
    <table>
        <tr><th>Question</th><th>◯/✕</th><th>time(ms)</th></tr>
        <tr v-for=" key in numQuestion"><td>{{ key }}</td><td>{{ formatIsCorrect(key) }}</td><td>{{ formatTime(key,2) }}</td></tr>
    </table>
    <button>TOPへ</button>
</template>
<style scoped>
*{
    font-size: 35px;
}
h2{
    padding-left: 10px;
    padding-top: 10px;
    font-size: 50px;
}
section{
    margin-top: 30px;
    margin-left: 20px;
}
table{
    margin: 30px auto 0 auto;
}
table,table *{
    border-collapse: collapse;
    text-align: center;
    padding: 10px 30px 10px 30px;
    border-left: 1px solid rgb(0, 140, 255);
    border-right: 1px solid rgb(0, 140, 255);
}
th{
    background-color: rgb(22, 150, 255);
    color: aliceblue;
}
tr:nth-child(even) {
	background: #ededed;
}

tr:nth-child(odd) {
	background: #ffffff;
}
button{
    display: block;
    margin: 50px auto;
    width: 35vw;
    font-size: xx-large;
}
</style>