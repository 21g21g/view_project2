<script setup>
import { provide, ref } from "vue";
//composables are reusable functions that encapsulate stateful logic and functionality using the Composition API like custom hooks in react js.

const theme=ref("light")
const toggleTheme=()=>{
    theme.value=theme.value==="light"?"dark":"light"
    provide("theme",theme)
    provide("toggleTheme",toggleTheme)

}
</script>
<template>
    <slot></slot>
</template>