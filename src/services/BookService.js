import axios from 'axios';

const apiUrl = 'http://localhost:8087/library/book'; // URL de l'API REST

class BookService {
    getBooks(){
        return axios.get(apiUrl);
    }
}

export default new BookService();