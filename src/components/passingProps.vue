<script setup>
defineProps({
    number:Number,
    user:{}
})
</script>
<template>
    <h1>{{number}}</h1>
    <h3>{{user.lName}}</h3>
    <h3>{{user.fName}}</h3>
    <h3>{{user.userId}}</h3>
</template>