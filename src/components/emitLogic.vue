<script setup>
//emit contain two arguments the first is the name of the event and the second is payload(data to be send)
//emit(eventName,payload)
// there are three ways to use emit in vue,1.inline
const handleIncrease=()=>{
    emit("increase",3)
}

</script>
<template>
    <button @click="handleIncrease">increase</button>
</template>