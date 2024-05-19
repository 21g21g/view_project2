<script setup>
import { ref } from "vue"
import emitLogic from "./emitLogic.vue"
const counter=ref(0)
const handleController=(amount)=>{
    counter.value=+amount

}
</script>
<template>
<h1>{{counter}}</h1>
    <emitLogic @increase="handleController"/>
</template>