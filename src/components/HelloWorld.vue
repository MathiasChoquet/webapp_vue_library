<script setup>
import { reactive } from 'vue';
  // data
  const data = reactive({books: [], authors: null}); 
  // functions
    function helloWorld() {
        data.books = ['hello', 'world'];   
  }
</script>

<template>
    <div>
    <button @click="helloWorld">Hello world</button> <!-- button -->
        <div v-for="(item,index) in data.books" :key="index"> <!-- loop on books using index -->
                <span>{{ item }}</span> 
         </div>
   </div>
</template>
