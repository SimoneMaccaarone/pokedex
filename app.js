console.log('Hello Pokemon')

let actualPage;


loadNextPage();

//  ----- Previous & Next Pages -----
function loadNextPage() {
    PokeService.getNextPokemon(actualPage).then(pokemonPage => { //Next data from DB //Call for use datas from DB
        actualPage = pokemonPage;
        console.log(actualPage)
    });
}

function loadPreviousPage(){
    PokeService.getPreviousPokemon(actualPage).then(pokemonPage=>{
        actualPage= pokemonPage;
        console.log(actualPage);
    })
}