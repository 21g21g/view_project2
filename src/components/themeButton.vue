<script setup>
import { inject } from "vue";
const theme=inject("theme")
const toggleTheme=inject("toggleTheme")
</script>
<template>
    <div :class="{'bg-slate-100':theme.value===light, 'bg-black':theme.value===black}">
        <button @click="toggleTheme">toogle</button>

    </div>
</template>