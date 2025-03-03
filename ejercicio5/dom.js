// Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html 
// que imprima cada uno de los albums.

const albums = [
    "De Mysteriis Dom Sathanas",
    "Reign of Blood",
    "Ride the Lightning",
    "Painkiller",
    "Iron Fist",
];

let ulAlbums = document.createElement("ul");

for (const album of albums) {
    let liAlbum = document.createElement("li");
    liAlbum.innerHTML = album;
    ulAlbums.appendChild(liAlbum);
}

document.body.appendChild(ulAlbums);

console.log('Lista de albumes: ', ulAlbums);
