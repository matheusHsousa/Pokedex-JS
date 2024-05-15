document.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    buscarPokemon();
  }
});


function buscarPokemon() {
  var pokemonName = document.getElementById("pokemon-name").value;
  pokemonName = pokemonName.toLowerCase();

  var request = new XMLHttpRequest();
  var spinner = document.getElementById("spinner");

  document.getElementById("spinner").classList.remove("spinner-hidden");

  request.open("GET", "https://pokeapi.co/api/v2/pokemon/" + pokemonName);
  request.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      var pokemonInfo = JSON.parse(this.responseText);
      var html = "";
      document.getElementById("spinner").classList.add("spinner-hidden");
      document.getElementById("fosco").classList.add("banana-none");

      html += "<h2 class='font123'>" + pokemonInfo.name + "</h2>";
      html +=
        "<img class='imgPokemon' src='" +
        pokemonInfo.sprites.front_default +
        "' alt='" +
        pokemonInfo.name +
        "'>";
      html +=
        "<p><strong>Tipo:</strong> " + pokemonInfo.types[0].type.name + "</p>";
      html +=
        "<p><strong>Habilidades:</strong> " +
        pokemonInfo.abilities
          .map(function (a) {
            return a.ability.name;
          })
          .join(", ") +
        "</p>";
      html += "<p><strong>Altura:</strong> " + pokemonInfo.height + " m</p>";
      html += "<p><strong>Peso:</strong> " + pokemonInfo.weight + " kg</p>";
      document.getElementById("pokemon-info").innerHTML = html;
    } else if (this.readyState === 4) {
      document.getElementById("spinner").classList.add("spinner-hidden");

      document.getElementById("pokemon-info").innerHTML =
        "<p>Pokemon não encontrado.</p>";

    }
  };
  request.send();
}



// function buscarBaga() {
//   var bagaName = document.getElementById("baga-name").value;
//   var request = new XMLHttpRequest();

//   request.open("GET", "https://pokeapi.co/api/v2/berry/" + bagaName);
//   request.onreadystatechange = function () {
//     if (this.readyState === 4 && this.status === 200) {
//       var bagaInfo = JSON.parse(this.responseText);
//       var html = "";
//       html += "<h2>" + bagaInfo.name + "</h2>";

//       document.getElementById("baga-info").innerHTML = html;
//     } else if (this.readyState === 4) {
//       document.getElementById("baga-info").innerHTML =
//         "<p>Baga estagou man</p>";
//     }
//   };
//   request.send();
// }
