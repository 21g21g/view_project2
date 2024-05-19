<script setup>
import { ref,reactive, computed} from "vue"
defineProps({
    name:"gebagebagebagea"
})
const counts=reactive({
     count:0,
     names:["gebeyhuaseesga"]
})

const state=reactive({
    firstName:"eyuel",
    lastName:"kassahun",
})

// const fullName=computed(()=>{
//     return `${state.firstName} ${state.lastName}` 
// })
const fullName=`${state.firstName } ${state.lastName}`
console.log(fullName)
let numm=ref(1)
const mult=(a,b)=>{
    return a*b

}
const add=(a,b)=>{
    return a+b
}
const sub=(a,b)=>{
    return a-b
}
const display=()=>{
    console.log("gebeyehu assega")
}
const increment=()=>{
   counts.count++
   counts.names.push('tinishua assega')
   numm.value++
}
</script>
<template>
<div>
    <h1 class="text-7xl">{{mult(2,3)}}</h1>
    <h1 class="text-5xl">{{add(4,5)}}</h1>
    <h1 class="text-4xl">{{sub(10,5)}}</h1>
    
    <h3>{{counts.count}}</h3>
    <h3>{{numm}}</h3>
    <h3>{{counts.names}}</h3>
    
    
    <button class="bg-amber-200" @click="name='alemu'">change name</button>
    <button @click="increment()">increase</button>
    </div>
    
</template>