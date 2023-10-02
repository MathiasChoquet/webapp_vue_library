<script setup>
import { onMounted, reactive } from 'vue';
import BookService from "../services/BookService.js";

  const data = reactive({
    books: []});

  function searchBooks() {
        data.books = [];   
        BookService.getBooks()
        .then((response) => {
            data.books = response.data;
            console.log(response);
        }).catch(error => {
            console.error(error);
        });
    }

    onMounted(() => {
        searchBooks();
  });

</script>

<template>
    <div>
        <h1>Book titles</h1>
        <div>
            <ul v-for="(item,index) in data.books" :key="index">
                <li>{{ item }}</li>
            </ul>
        </div>
    </div>
</template>
