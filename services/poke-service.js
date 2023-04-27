class Pokeservice {

    static POKE_URL = 'https://pokeapi.co/api/v2/pokemon';  // link DataBase (DB)

    //               STATIC
    //  ----- Previous & Next Pages -----
    // Call for GET the datas from DB
     static getNextPokemon(page) { 
        if (page && page.next !== null) {
            return fetch(page.next).then(resp => resp.json());
        }
        else
            return fetch(this.POKE_URL).then(resp => resp.json());
    }

    static getPreviousPokemon(page) {
        if (page === undefined || page === null) {
            return fetch(this.POKE_URL).then(resp => resp.json())
        } else if (page.previous !== null) {
            return fetch(page.previous).then(resp => resp.json())
        } else {
            return fetch(this.POKE_URL + `/?offset=${page.count / 20 - 1}&limit=1`).then(resp => resp.json())
        }
    }
}



