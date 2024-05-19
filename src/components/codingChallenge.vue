<script setup>
import { reactive } from "vue";

const person=reactive({name:"habtamu",lName:"fentahun"})
const changeName=()=>{
    person.name="hailelulbaye"
}
</script>
<template>
<div class="flex flex-row ">
    <div class="flex flex-col w-2/3">
         <h1>{{person.name}}</h1>
    <h1>{{person.lName}}</h1></div>
   
    <button class="bg-orange-800 text-gray-100 rounded-md w-1/3" @click="changeName">change name</button></div>
    
</template>