import axios from 'axios';

const AbsoluteApiUrl = 'http://localhost:8087/library/author_SQL'; // URL de l'API REST
const ReversApiUrl = '/restbackend/library/author_SQL'; // URL de l'API REST reverse proxy

class AuthorService {
    getAuthors(title){
        return axios.get(ReversApiUrl,{params: {'title':title}});
    }
}

export default new AuthorService();