// var url = "https://pokeapi.co/api/v2/pokemon?limit=20"

// fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
// .then((res) => {
//     return res.json();
// })
// .then((data) => {
//     console.log(data)
// })
// .catch((error) => {console.log(error)})

// axios.get(url+'/1')
// .then((data) => console.log(data.data))
// .catch((error) => console.log('error: '+error))

$.getJSON('https://pokeapi.co/api/v2/pokemon?limit=20', function(data) {
    let results = data.results;
    console.log(data)
    $.each(results, function(i, data) {
        $('#daftar-character').append('<div class="col-md-4"><div class="card mb-3"><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/'+ i +'.png" class="card-img-top"><div class="card-body"><h5 class="card-title">' + data.name + '</h5><p class="card-text">' + data.url + '</p></div></div></div>')
    })
});