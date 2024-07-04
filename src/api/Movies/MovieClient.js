export default class MovieClient {
    constructor(axios){
        this.axios = axios
    }

    async getMovies(){
        const res = await this.axios.get("collections/movies/records/");
        console.log(res.data);
        return res.data;
    }
}


