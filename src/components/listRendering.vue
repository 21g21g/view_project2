<script setup>
import { reactive, ref } from "vue"
const names=ref([
    'geb','dsds','dsdde','dede','ededed'
])
const tasks=reactive([{
    name:"software",
    status:"pending",
},
{
    name:"computer science",
    status:"completed",
},
{
    name:"mechanical",
    status:"progress",
}
])
</script>
<template>
<div class="flex flex-col"><ul>
    <li v-for="name in names" :key="name">{{name}}</li>

</ul>

<ul>
    <li v-for="task in tasks" :key="task" >
        <h2 v-if="task.status==='pending'">{{task.name}}</h2>
    </li>
</ul>
</div>

    
</template>
