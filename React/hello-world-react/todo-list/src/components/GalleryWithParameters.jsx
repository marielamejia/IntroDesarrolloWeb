import Profile from "./ProfileWithParameters"; 

const Gallery = ()=>{
    return (
    <section>
        <h1>Científicas importantes</h1>
        <Profile 
            url={"https://content-historia.nationalgeographic.com.es/medio/2022/03/29/marie-curie_f45f6f98_550x799.jpg"} 
            textoAlt={"Marie Curie"}
            />
        <Profile 
            url={"https://content-historia.nationalgeographic.com.es/medio/2022/03/29/marie-curie_f45f6f98_550x799.jpg"} 
            textoAlt={"Marie Curie"}
            />
        <Profile 
            url={"https://content-historia.nationalgeographic.com.es/medio/2022/03/29/marie-curie_f45f6f98_550x799.jpg"} 
            textoAlt={"Marie Curie"}
        />
    </section>
    ); 
}; 

export default Gallery; 