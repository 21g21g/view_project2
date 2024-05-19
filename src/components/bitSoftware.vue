<script setup>
import { inject } from "vue"

defineProps({
    lName:String
})
const message=inject('gebeyehu')
const numbers=inject('num')
</script>

<template>
<div><h1>{{lName}}</h1>
    <h2>{{message}}</h2>   
     <h3>{{numbers}}</h3>
</div>
    
</template>