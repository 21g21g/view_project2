<script setup>
import  gql  from 'graphql-tag';
import { useQuery } from '@vue/apollo-composable';
const {final}=useQuery(
    gql`
    query{
        countries{
            name
        }
    }`
)
</script>
<template>
    <div v-for="country in final?.countries || []" :key="country">
        <p>{{country.ame}}</p>
    </div>
   
</template>