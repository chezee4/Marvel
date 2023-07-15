class MarvelService {
   _apiBase = "https://gateway.marvel.com:443/v1/public/";
   _apiKey = "apikey=1806f6861cfe6371b3d43b87e07228f2";
    getResource = async (url) => {
        let res = await fetch(url);

        if(!res.ok){
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);  
        }

        return await res.json();
    }

    getAllCharacters = () => {
        return this.getResource(`${this._apiBase}characters?limit=9&offset=210&${this._apiKey}`)
    }

    getCharacter = (id) => {
        return this.getResource(`${this._apiBase}characters/${id}?limit=9&offset=210&${this._apiKey}`)
    }
}


export default MarvelService;