import axios from 'axios';

const apiUrl = import.meta.env.VITE_LIBRARY_API_URL; // URL de l'API REST

class AuthorService {
    getAuthorsByTitle(title){
        return axios.get(apiUrl + "author_SQL",{params: {'title':title}});
    }
    getAuthors(){
        return axios.get(apiUrl + "author");
    }
}

export default new AuthorService();