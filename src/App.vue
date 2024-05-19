<script setup>
import { provide, ref, watch } from "vue";

import { Icon } from '@iconify/vue';

const count=ref(0)
const numbers=ref(23)
const user=ref({
  fName:"userfiratname",
  lName:"userlname",
  userId:1201767,
})
const countIncrease=()=>{
  count.value++
}
watch(count,(newValue,oldValue)=>{
  //takes two main arguments:
// Expression (or Getter): This specifies the reactive data property or expression you want to watch for changes. It can be a simple property name, a nested object property accessed using dot notation, or a function (getter) that returns the value to be watched.
// Callback Function: This function defines the logic you want to execute whenever the watched expression's value changes. It receives two arguments:
// NewValue: The new value of the watched expression after the change.
// OldValue (Optional): The previous value of the watched expression before the change (available by default, but you can opt out by setting it to undefined).
  console.log(`the value is changed from ${oldValue} to ${newValue}`)
})
// import HelloWorld from './components/HelloWorld.vue'
// import computedProperty from "./components/computedProperty.vue"
// import addVue from "./components/addVue.vue"
// import coddingChallenge from "./components/codingChallenge.vue"
// import conditionalRenderingVue from "./components/conditionalRendering.vue";
// import listRendering from "./components/listRendering.vue"
// import vmodelBinding from "./components/vmodelBinding.vue"

import parrentSlot from "./components/parrentSlot.vue"
// import passingPropsVue from "./components/passingProps.vue";
import mainBody from "./components/project1/mainBody.vue";
import navBar from "./components/project1/navBar.vue";
import footerDisplay from "./components/project1/footerDisplay.vue"
import GraphQl from "./pages/GraphQl.vue";
provide('gebeyehu',"i am handsome")
console.log(count)
provide('num',count)
const add=(a,b,c)=>{
  return a*b+c
}


//In Vue 3, slots are a feature that allows you to define placeholders within a component's template where content can be injected from the parent component. This content can include text, HTML elements, or even other Vue components. Slots enable flexible and reusable component design by providing a way to customize the structure and behavior of components based on the needs of the parent component.

//Key Concepts of Slots in Vue 3:
//Slot Definition:
//Slots are defined within a child component's template using <slot> elements.
//<slot> elements act as placeholders where content from the parent component can be inserted.
</script>

<template>
<!-- reactivity,ref and computed are the main for vue-->
  <!-- <div> -->
    <!-- <h1 class="text-orange-500" >gebeyehu assega</h1> -->
    <!-- <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a> -->
    <!-- <h2>{{add(2,3,4)}}</h2>
    <addVue/>
  </div>
  <HelloWorld test="assega"  />
  <coddingChallenge/>
  <computedProperty/>
  <conditionalRenderingVue/>
  <listRendering/>
  <vmodelBinding/>
  <parrentSlot/>
  <passingPropsVue :number="numbers" :user="user"/> -->
   <div class="flex flex-col"> 
    <!-- <div class="flex items-start justify-end"><navBar/></div>
     <div class="flex justify-center items-center"> <mainBody/></div>
      <div class="flex justify-start items-end"><footerDisplay /></div> -->
      

     
   <GraphQl/>
    
   </div> 
    <!-- <parrentSlot/>
    <h1>{{count}}</h1>
    <button @click="countIncrease" class="bg-orange-950 text-slate-200">increase</button> -->
<div>
  <!-- <ul>
    <li>
      <router-link to="/">home</router-link>
    </li>
    <li>
      <router-link to="/about">about</router-link>
    </li>
    <li>
      <router-link to="/adwdfc">notfound</router-link>
    </li>
  </ul>
  <router-view></router-view> -->
  </div>    

</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em hsla(237, 100%, 70%, 0.667));
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
