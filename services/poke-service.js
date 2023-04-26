class PokeService {

    static POKE_URL = 'https://pokeapi.co/api/v2/pokemon';  // link DataBase (DB)

//               STATIC
//  ----- Previous & Next Pages -----
    static getNextPokemon(page) { // Call for GET the datas from DB
        if (page === undefined) {
            return fetch(this.POKE_URL).then(resp => resp.json());
        } else {
            return fetch(page.next).then(resp => resp.json());
        }
    }

    static getPreviousPokemon(page) {
        if (page === undefined) {
            return fetch(this.POKE_URL).then(resp=>resp.json());
        }else{
            return fetch(page.previous).then(resp => resp.json());
        }
    }
















}
