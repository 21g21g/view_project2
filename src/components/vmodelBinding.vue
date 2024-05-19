<script setup>
import { computed, ref } from "vue"
//te difference between we use :value="name" and v-model="name" in input form is the former is only used for one-way binding(you are using one-way data binding (:value) to set the initial value of the input field to the current value of name. However, this approach does not create two-way binding, and changes made in the input field will not update the name variable automatically.) and the next is used for two-way binding(This binds the input value directly to the name variable, allowing changes in the input field to update the name variable and vice versa.)
//and when we use :value="name" we must use @input like onchange in react to trigger the change and but in v-model we cannot use it.
const name=ref(" ")
const isChecked=ref(false)
const password=ref('')
let passwordStrength=computed(()=>{
    if(password.value.length===0){
        return "week"
    }
    else if(password.value.length>=8){
        return "Strength"
    }
    else{
        return "This is not a password"
    }
})
const handleSubmit=()=>{
    console.log(name.value)

}

const handleInput=(event)=>{
    name.value=event.target.value

}

</script>
<template>
<form @submit.prevent="handleSubmit"> <input class="border-4 border-zinc-950 p-1 m-3" type="text" placeholder="pleace enter name" :value="name" @input="handleInput"/>
    <h1>{{name}}</h1>
    <button type="submit" >bind</button></form>
    <input type="checkbox" v-model="isChecked"/>
    <p>{{isChecked}}</p>
    <input type="password" placeholder="enter your passsword" v-model="password"/>
       <p>{{passwordStrength}}</p>
   
</template>
