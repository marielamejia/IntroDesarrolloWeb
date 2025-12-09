
const Profile = ({url, textoAlt}) =>{
   if(!url){
    return null; 
   } 
    
   return<img src={url} alt={textoAlt}></img>
}; 

export default Profile; 