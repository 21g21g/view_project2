<script setup>
import childSlot from "./childSlot.vue";
</script>
<template>
    <childSlot>
        <template v-slot:header>
            <h1>this is header</h1>

        </template>
        <template v-slot:main>
            <h1>this is main</h1>
        </template>
        <template v-slot:footer>
            <h1>this is footer</h1>
        </template>
    </childSlot>
</template>