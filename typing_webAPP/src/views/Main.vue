<script setup lang="ts">
import { ref, watch } from 'vue';
const typingStrList1:string[]=["bunnka","zyouhou","gakubu"];
const typingStrList2:string[]=["doshisha","daigaku"];
const userTyping=ref("");
let typingStr_split:string[];
let isUserTypingCorrect:boolean;

typingStr_split=typingStrList1[0].split("");
const inputKeyboard=(keyObj:KeyboardEvent):void=>{
    userTyping.value+=keyObj.key;

}
document.addEventListener("keypress",inputKeyboard);

watch(userTyping,()=>{
    if(userTyping.value.length==typingStr_split.length){
        if(userTyping.value==typingStrList1[0]){
            isUserTypingCorrect=true;
        }else{
            isUserTypingCorrect=false;
        }
        console.log(isUserTypingCorrect);
        document.removeEventListener("keypress",inputKeyboard);
    }
})


</script>
<template>
    <section>
        <ul class="question">
            <li v-for="str in typingStr_split" v-bind:id="str">{{ str }}</li>
        </ul>
        <ul class="answer">
            <li v-for="str in userTyping" v-bind:id="'user'+str">{{ str }}</li>
        </ul>
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
}
.question{
    top: 20vh;
}
.answer{
    top:40vh;
    color: blue;
}
</style>