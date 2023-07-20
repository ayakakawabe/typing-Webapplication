<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';

const router=useRouter();

const typingQuestionList1:string[]=["bunnka","zyouhou","gakubu"];
const typingQuestionList2:string[]=["doshisha","daigaku"];
const userTyping=ref<string>("");
let typingQuestion_split:string[];
let isUserTypingCorrect:boolean;
const printresult=ref<string>("");
const isShowBtn=ref<boolean>(false);
const nowQestion=ref<number>(0);
const btnName=ref<string>("");

let typingStart:number;
let typingEnd:number;
let typingTime:number[]=[];

let typingUserResult:boolean[]=[];

const addUserTyping=(keyObj:KeyboardEvent):void=>{
    userTyping.value+=keyObj.key;
};
typingQuestion_split=typingQuestionList1[nowQestion.value].split("");
const inputUserTyping=():void=>{
    typingStart=performance.now();
    document.addEventListener("keypress",addUserTyping);
}
inputUserTyping();
watch(userTyping,():void=>{
    if(userTyping.value.length==typingQuestion_split.length){
        typingEnd=performance.now();
        typingTime.push(typingEnd-typingStart);
        if(userTyping.value==typingQuestionList1[nowQestion.value]){
            isUserTypingCorrect=true;
            printresult.value="正解";
        }else{
            isUserTypingCorrect=false;
            printresult.value="不正解";
        }
        typingUserResult.push(isUserTypingCorrect);
        document.removeEventListener("keypress",addUserTyping);
    }
})
watch(printresult,():void=>{
    if(printresult.value=="正解"||printresult.value=="不正解"){
        isShowBtn.value=true;
        if(nowQestion.value<typingQuestionList1.length-1){
            btnName.value="次へ";
        }else if(nowQestion.value==typingQuestionList1.length-1){
            btnName.value="終了";
        }
    }
})

const clickbtn=():void=>{
    nowQestion.value+=1;
    isShowBtn.value=false;
    printresult.value="";
    if(nowQestion.value==typingQuestionList1.length){
        router.push("/main/result");
        console.log(typingTime);
        console.log(typingUserResult);
    }
};

watch(nowQestion,():void=>{
    if(nowQestion.value<typingQuestionList1.length){
        typingQuestion_split=typingQuestionList1[nowQestion.value].split("");
        userTyping.value="";
        inputUserTyping();
    }
})
</script>
<template>
    <section>
        <div id="q_a">
            <ul class="question">
                <li v-for="str in typingQuestion_split" v-bind:id="str">{{ str }}</li>
            </ul>
            <ul class="answer">
                <li v-for="str in userTyping" v-bind:id="'user'+str">{{ str }}</li>
            </ul>
        </div>
        <p class="result">{{ printresult }}</p>
        <div id="next">
            <button class="nextbtn" v-show="isShowBtn" v-on:click="clickbtn">{{ btnName }}</button>
        </div>
        <p>{{ nowQestion }}</p>
    </section>
</template>

<style scoped>
section{
    height: 100%;
}
#q_a{
    width: 100%;
    height: 65vh;
}
li{
    list-style: none;
    font-size: 90px;
    font-weight: bold;
    padding: 20px;
}
ul{
    display: flex;
    justify-content: center;
    padding: 150px 60px 30px 60px;
    width: 100%;
}
.answer{
    padding-top: 0;
    color: blue;
}
.result{
    text-align: center;
    font-size: 55px;
    font-weight: bold;
    color: red;
    padding-top: 15px;
}
#next,#finish{
    text-align: center;
    height: 50px;
}
.nextbtn{
    display: block;
    margin: auto;
    width: 35vw;
    height: 100%;
    font-size: xx-large;
    margin-top: 25px;
}
</style>