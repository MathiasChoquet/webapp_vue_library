import axios from 'axios';

const apiUrl = 'http://localhost:8087/library/author_SQL'; // URL de l'API REST

class BookService {
    getAuthors(title){
        return axios.get(apiUrl,{params: {'title':title}});
    }
}

export default new BookService();