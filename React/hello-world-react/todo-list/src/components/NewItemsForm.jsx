import { useEffect, useState } from "react";

export const NewItemsForm = (props) => {

    //ambas deben tener el mismo nombre pero la segunda que será la funcion debe tener un "set" al inicio
    const [tarea, setTarea] = useState("");
    
    const nuevaTareaAgregar = () =>{ {/*no necesitamos parametros porque vamos a trabajar con el contenido de abajo*/}
        props.setTareas(
            [...props.tareas,{id:props.tareas.length+1, completado: false, texto:tarea}]
        ) 
        setTarea("")
    }

    const handleOnChangeInput = (nuevoValor) => {
        setTarea(nuevoValor.target.value); 
    }

    return(
        <div>
        {/*AGREGAMOS ESTE CODIGO PARA EL CAMBIO 3 DE LA TAREA*/}
            <p style={{margin:0}}>Ingresa el nombre de tu tarea:</p>
            <input id="nuevaTarea" type="text" value={tarea} onChange={(nuevoValor)=> handleOnChangeInput(nuevoValor)}></input> {/*ponemos id para agarrar contenido y agregarlo a la lista*/}
            <button onClick={() => nuevaTareaAgregar()}  style={{marginLeft:15,marginRight:15, backgroundColor:"white", color: "black"}}>Agregar tarea</button>
        </div>
    );
}; 
export default NewItemsForm;