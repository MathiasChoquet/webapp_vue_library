<script setup>
import Author from './components/Author.vue';
import Book from './components/Book.vue';
import HelloWorld from './components/HelloWorld.vue';
</script>

<template>
  <Book class="generic-component"/>
  <main>
    <Author class="generic-component"/>
  </main>
  <div class="generic-component">
    <HelloWorld />
  </div>
</template>