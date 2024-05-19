<script setup>
import { ref,reactive } from "vue";

const awesome=ref(true)
const show=ref(true)
const isError=ref(true)

const good=reactive({
    beautiful:true

})
const toggleController=()=>{
    awesome.value=!awesome.value
}
const goodController=()=>{
    good.beautiful=!good.beautiful
}
const showController=()=>{
    show.value=!show.value

}
const changeColor=()=>{
    isError.value=!isError.value
}
// const roleController=()=>{


// }
</script>
<template>
    <h3 v-if="awesome">you are awesome</h3>
    <h3 v-if="!awesome">you are not awesome</h3>
    <button class="bg-orange-700 rounded-md" @click="toggleController">toggle</button>
    <h3 v-if="good.beautiful">you are good</h3>
    <h3 v-if="!good.beautiful">you are not ugly</h3>
    <button class="bg-orange-950 rounded-md" @click="goodController">say good</button>
    <h1 v-show="show">show this button</h1>
    <button @click="showController" class="text-zinc-200 bg-lime-500 rounded-md">show</button>
    <h1 :class="{'error':isError,'success':!isError}">display this error</h1>
    <button @click="changeColor" class="rounded-md bg-teal-300">change color</button>
   
    <!-- <h3 v-else>you are not awesome</h3> -->
</template>
<style scoped>
.error{
    background-color: blueviolet;
}
.success{
    background-color: blue;
}

</style>