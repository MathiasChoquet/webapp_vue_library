import axios from 'axios';

const AbsoluteApiUrl = 'http://localhost:8087/library/book'; // URL de l'API REST
const ReversApiUrl = '/restbackend/library/book'; // URL de l'API REST reverse proxy

class BookService {
    getBooks(){
        return axios.get(ReversApiUrl);
    }
}

export default new BookService();