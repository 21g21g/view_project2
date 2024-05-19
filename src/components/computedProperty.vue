<script setup>
import { computed, ref } from "vue"
const employ=['employ1','employ2']
const personAge=ref(18)
const num1=ref(30)
const num2=ref(25)
let sum=num1.value+num2.value
    sum=20

const computeds=computed(()=>{
        return employ.length>0?"NO":"YES"

})
const personsAge=computed(()=>{
    return personAge.value<=18?"MINOR":"ADULT"
})
// let sum=computed(()=>{
//     num1.value+num2.value
// })
//i donot understand computed property please explain it in detail
</script>
<template>
    <h2>{{employ.length>0?"yes":"no"}}</h2>
    <h2>{{computeds}}</h2>
    <h3>{{sum}}</h3>
    <h4>{{personsAge}}</h4>
</template>