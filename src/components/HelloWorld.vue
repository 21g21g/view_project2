<script setup>
import { ref,inject } from 'vue'
import bitSoftware from "./bitSoftware.vue"
defineProps(
  
  {
    test:String,
    
    }
)

// const count = ref(0)
const num2=inject("num")
//passing data to the child
//fallthorugh attribute
//in vue we use provide and inject concept like redux in react
//cuba metricss what is it
</script>

<template>
  <!-- <h1>{{ msg }}</h1> -->

  <div >
    <h1>{{test}} the number is </h1>
    <div class=" bg-red-900 mt-0">
      <ul class="flex justify-end gap-2">
        <li>Gmail</li>
        <li>misloch</li>
        <li><button class="bg-sky-600 text-white p-1 w-10 h-8">giba</button></li>
      </ul>
      
  </div>
  <div class="flex-col justify-center items-center">
    <div class="flex justify-center">
      <img src="../assets/go.JPG"/>
      </div>
   
   <div class=" flex justify-center rounded-md border-solid border-2 border-l-indigo-200   md:w-80 sm:w-full sm:ml-1 md:ml-48 mt-6">
    <h1>alemu</h1>
   </div>
  </div>
  <div>
     <h1>mihretie</h1>
  </div>
  <div>
    <bitSoftware lName="dagnachew"/>
    <h2>{{num2}}</h2>
  </div>
    </div>
    
    <!-- <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p> -->
  
  

  <!-- <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p> -->
  <!-- <p>
    Install
    <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p> -->
</template>

<style scoped>
/* .read-the-docs {
  color: #888;
} */
</style>
