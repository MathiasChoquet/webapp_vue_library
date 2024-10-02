<script setup>
import { reactive, ref } from 'vue';
import AuthorService from "../services/AuthorService.js";

  const data = reactive({
    titleForAuthors:"",
    authors: null});

  const variantcolor = ref("blue");
// 
  const searchAuthor = () => {
        variantcolor.value = "black";
        data.authors = null;   
        AuthorService.getAuthorsByTitle(data.titleForAuthors)
        .then((response) => {
            data.authors = response.data;
            console.log(response);
            variantcolor.value = "red";
        }).catch(error => {
            console.error(error);
        });
    }

</script>

<template>
    <div>
        <h1>Authors</h1>
        <div>
            <h2>get authors by title</h2>
            <h3>Formulaire</h3>
            <label for="titleForAuthors">Author name : </label>
            <input  type="text" id="titleForAuthors" v-model="data.titleForAuthors">
            <button @click="searchAuthor">Search Author</button>
            <div v-if="data.authors != null">
                <h3>Réponse</h3>
                <span v-if="data.authors.length == 0">Aucun Résultat</span>                
                <span :style="{ color: variantcolor }">{{ data.authors }}</span>                

            </div>
        </div>
    </div>
</template>