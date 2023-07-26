<script setup lang="ts">
import { ref, watch,inject, type Ref } from 'vue';
import { useRouter } from 'vue-router';

const router=useRouter();
const selectQuestion=inject("Question") as Ref<string>;

const typingQuestionLists= new Map<string,[string[],string[]]>();
typingQuestionLists.set("Q1",[["チャンピオン","ビーチボール","国語辞典","都道府県","父の威厳","犬の散歩","不思議ちゃん","私語厳禁"],["tyannpion","bi-tibo-ru","kokugozitenn","todouhukenn","titinoigenn","inunosannpo","husigityann","sigogennkinn"]]);
typingQuestionLists.set("Q2",[["美少年","味が薄い","色鉛筆","図書委員","送りバント","羊の群れ","トランペット","クラリネット"],["bisyounenn","azigausui","iroennpitu","tosyoiinn","okuribannto","hituzinomure","torannpetto","kurarinetto"]]);
typingQuestionLists.set("Q3",[["ドレスアップ","カスタネット","四季折々","万華鏡","大河ドラマ","電子辞書","うっとりする","ひっぱりばこ"],["doresuappu","kasutanetto","sikioriori","manngekyou","taigadorama","dennsizisyo","uttorisuru","hipparidako"]]);

const nowQuestionList_JP_romaji=typingQuestionLists.get(selectQuestion.value) as Array<string[]>;
const nowQuestionList:string[]=nowQuestionList_JP_romaji[1] as string[];
const nowQuestionList_JP=nowQuestionList_JP_romaji[0] as string[];

const userTyping=ref<string>("");
let typingQuestion_split:string[];
let typingQuestion_JP:string;
let isUserTypingCorrect:boolean;
const printresult=ref<string>("");
const isShowBtn=ref<boolean>(false);
const nowQestion=ref<number>(0);
const btnName=ref<string>("");

let typingStart:number;
let typingEnd:number;
let typingTime=inject("timeResult") as Ref<number[]>;

let typingUserResult=inject("correctResult") as Ref<boolean[]>;

const addUserTyping=(keyObj:KeyboardEvent):void=>{
    const inputKey:string=keyObj.key;
    if(inputKey.match(/^[0-9a-zA-Z]{1}$/) || inputKey=="-"){
        userTyping.value+=inputKey;
    }
};
typingQuestion_split=nowQuestionList[nowQestion.value].split("");
typingQuestion_JP=nowQuestionList_JP[nowQestion.value];

const inputUserTyping=():void=>{
    typingStart=performance.now();
    document.addEventListener("keydown",addUserTyping);
}
inputUserTyping();
watch(userTyping,():void=>{
    if(userTyping.value.length==typingQuestion_split.length){
        typingEnd=performance.now();
        typingTime.value.push(typingEnd-typingStart);
        if(userTyping.value==nowQuestionList[nowQestion.value]){
            isUserTypingCorrect=true;
            printresult.value="正解";
        }else{
            isUserTypingCorrect=false;
            printresult.value="不正解";
        }
        typingUserResult.value.push(isUserTypingCorrect);
        document.removeEventListener("keydown",addUserTyping);
    }
})
watch(printresult,():void=>{
    if(printresult.value=="正解"||printresult.value=="不正解"){
        isShowBtn.value=true;
        if(nowQestion.value<nowQuestionList.length-1){
            btnName.value="次へ";
        }else if(nowQestion.value==nowQuestionList.length-1){
            btnName.value="終了";
        }
    }
})

const clickbtn=():void=>{
    nowQestion.value+=1;
    isShowBtn.value=false;
    printresult.value="";
    if(nowQestion.value==nowQuestionList.length){
        router.push("/main/result");
    }
};

watch(nowQestion,():void=>{
    if(nowQestion.value<nowQuestionList.length){
        typingQuestion_split=nowQuestionList[nowQestion.value].split("");
        typingQuestion_JP=nowQuestionList_JP[nowQestion.value];
        userTyping.value="";
        inputUserTyping();
    }
})
</script>
<template>
    <section>
        <div id="q_a">
            <p>{{ typingQuestion_JP }}</p>
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
    </section>
</template>

<style scoped>
section{
    height: 100%;
}
#q_a{
    width: 100%;
    height: 60vh;
}
#q_a p{
    text-align: center;
    font-size: 85px;
    font-weight: bold;
    padding-top: 70px;
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
    padding: 00px 60px 0 60px;
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
    padding-top: 40px;
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