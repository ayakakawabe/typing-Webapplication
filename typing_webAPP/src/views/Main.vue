<script setup lang="ts">
import { ref } from 'vue';
const typingStrList1:string[]=["bunnka","zyouhou","gakubu"];
const typingStrList2:string[]=["doshisha","daigaku"];
const userTyping=ref("");
let typingStr_split:string[];
typingStr_split=typingStrList1[0].split("");

const typing_oneWord=(nowTypingIndex:number):boolean=>{
    let isSame=false;
    const isTypingKeyCorrect=(keyObj:KeyboardEvent):void=>{
    const nowTypingStr:string=typingStr_split[nowTypingIndex];
    const nowTyping_li=document.getElementById(nowTypingStr) as HTMLElement;
    if(keyObj.key==nowTypingStr){
        console.log(nowTypingStr);
        nowTyping_li.style.color="blue";
        isSame=true;
    }
    };
    return isSame;
};

const typing_oneSentenece=():void=>{
    let i=-1;
    let isCorrect=true;
    while(isCorrect==true){
        i+=1;
        isCorrect=typing_oneWord(i);
    }
};

//typing_oneWord(1);

const inputKeyboard=(keyObj:KeyboardEvent):void=>{
    userTyping.value+=keyObj.key;
}
document.addEventListener("keypress",inputKeyboard);


</script>
<template>
    <section>
        <ul>
            <li v-for="str in typingStr_split" v-bind:id="str">{{ str }}</li>
        </ul>
        <p>{{ userTyping[0] }}</p>
    </section>
</template>

<style scoped>
li{
    list-style: none;
    font-size: 90px;
    font-weight: bold;
    padding: 20px;
}
ul{
    display: flex;
    justify-content: center;
    padding: 50px;
    width: 100%;
    position: absolute;
    top: 35vh;
}
</style>