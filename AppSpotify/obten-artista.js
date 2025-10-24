/*definimos nuestra variable token pues la usaremos para ambas funciones */
const args = {
  method: "GET",
  headers: {
    Authorization: "Bearer BQCpvPWM4x6_Z-798GadPaxLYreIk6VYq8-PP9pS-1SZ0SL7WUN8ch2GAG98Az1okZB0tOHg2N2WUFNxmccU_h60cb2bDmpebhNycD_-8Jbe4r890RRipddRJwgWv0ZPt1nY_u3LYLE"
  }
};


/** funcion asincrona para obtener un artista (Taylor Swift) **/
async function obtenerArtistaFijo() {
    const URL=  "https://api.spotify.com/v1/artists/06HL4z0CvFAxyc27GXpf02"
    /* ocultamos la card en lo que se obtiene la informacion del artista */
    const card = document.getElementById("cardArtista");
    card.style.display = "none";
    try{
        const response = await fetch(URL, args);
        const data = await response.json();
        /*llenamos la card con la informacion del artista */
        document.getElementById("card-title").innerHTML= data.name;
        document.getElementById("CoverImageTaylor").src= data.images[0].url;
        document.getElementById("LinkTaylor").href= data.external_urls.spotify;
        document.getElementById("Body").innerHTML= data.followers.total; 
        
        card.style.display = "block";
    
    }catch(error){
        /*mensaje de error en caso de que no se pueda obtener la informacion */
        console.error("Error al obtener el artista:", error);
        alert("Hubo un error al cargar la información del artista.");
    }

    
}

/** funcion para obtener las top tracks de un artista **/
async function obtenerTopTracks(artistId, market = "MX") {
  /*construimos el endpoint de spotify */
  const URL = `https://api.spotify.com/v1/artists/${artistId}/top-tracks?market=${market}`;
  const box = document.getElementById("topTracks");
  box.innerHTML = "";

  try {
    const r = await fetch(URL, args);
    const data = await r.json();
    /*obtenemos la informacion de las canciones (si no hay entonces queda vacio nuestro arreglo) */
    const tracks = data.tracks || [];

    /* se hace una card por cada cancion */
    /*obtenemos la informacion de la cancion: imagen, nombre, album, artista y opcion para abrir cancion en spotify */
    box.innerHTML = tracks.map(t => `
      <div class="col-12 col-sm-6 col-lg-4">
        <div class="card h-100">
          <img class="card-img-top" src="${t.album?.images?.[1]?.url || t.album?.images?.[0]?.url || ""}"> 
          <div class="card-body">
            <h6 class="card-title mb-2">${t.name}</h6>
            <p class="card-text mb-2">
              <strong>Álbum:</strong> ${t.album?.name ?? "N/A"}<br>
              <strong>Artistas:</strong> ${(t.artists||[]).map(a=>a.name).join(", ") || "N/A"}
            </p>
            <a class="btn btn-sm btn-success w-100" target="_blank" rel="noopener"
               href="${t.external_urls?.spotify || "#"}">Abrir en Spotify</a>
            ${t.preview_url ? `<audio class="mt-2" controls src="${t.preview_url}" style="width:100%"></audio>` : ""}
          </div>
        </div>
      </div>
    `).join("");

  } catch (e) {     /*mandamos un mensaje de error en caso de no poder obtener la informacion */
    alert("Error al obtener las canciones mas escuchadas del artista.");
  }

}