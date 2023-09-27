<script>
import BookService from "../services/BookService.js";

export default{
    data(){
        return {
                titleForAuthors:"",
                authors: ''
            }
        },
    methods:{
        searchAuthor() {
            BookService.getAuthors(this.titleForAuthors)
            .then((response) => {
                this.authors = response.data;
                console.log(response);
            }).catch(error => {
                console.error(error);
            });
        }
    }
}
</script>

<template>
    <div>
        <h1>Authors</h1>
        <div>
            <h2>get authors by title</h2>
            <h3>Formulaire</h3>
            <label for="titleForAuthors">Author name : </label>
            <input  type="text" id="titleForAuthors" v-model="titleForAuthors">
            <button @click="searchAuthor">Search Author</button>
            <div v-if="authors.length > 0">
                <h3>Réponse</h3>
                <span>{{ authors }}</span>                
            </div>
        </div>
    </div>
</template>