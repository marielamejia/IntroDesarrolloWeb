async function obtenerArtistaFijo(nombreArtista) {
    const URL=  "https://api.spotify.com/v1/artists/4Z8W4fKeB5YxbusRsdQVPb"
    
    const args ={
        method: 'GET',
        headers: {
        Authorization: 
            "Bearer BQBTrXJvRrhZBNGBJjXWsAk0Cn37bOR6ydp4IACub4rOdvxqFTs_bxMcshpJjuek0OZH9RpmME_Yc4uPlg8czSj1sz7DftrwNVJscYqDlHr7QuNb2Zrpgy-_jegP_yXGjYWJrrirPoE"
        }, 
    };


    const response = await fetch(URL, args);
    console.log(response);
}