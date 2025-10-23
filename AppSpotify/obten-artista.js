async function obtenerArtistaFijo(nombreArtista) {
    const URL=  "https://api.spotify.com/v1/artists/06HL4z0CvFAxyc27GXpf02"
    
    const args ={
        method: 'GET',
        headers: {
        Authorization: 
            "Bearer BQBlDZ_85NDMS-PAj8GlZalHiQcG80jiVQE2NgPtNekzLqusfjUnqKS0jLm4DHoteXzig7Zfn_e_th_PQst7Y2_3KNByOVgICQnfytD7j_hoz9uSh2E2sVfJ6tJPuErezu6UXny-oQk"
        },  
    }

    /* ocultamos la card en lo que se obtiene la informacion del artista */
    const card = document.getElementById("cardArtista");
    card.style.display = "none";
    try{
        const response = await fetch(URL, args);
        const data = await response.json();
        document.getElementById("card-title").innerHTML= data.name;
        document.getElementById("CoverImageTaylor").src= data.images[0].url;
        document.getElementById("LinkTaylor").href= data.external_urls.spotify;
        document.getElementById("Body").innerHTML= data.followers.total; 
        
        card.style.display = "block";

    }catch(error){
        console.error("Error al obtener el artista:", error);
        alert("Hubo un error al cargar la información del artista.");
    }

    
}