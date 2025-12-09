import { useEffect, useState } from "react";
import NewItemsForm from "./NewItemsForm";

//=====================================================================================================
//La idea es que hagan lo siguiente:
// 1. Cambia la lógica de la función cambiaTareaPorId, de modo que use .map en lugar de .filter y .sort.
// 2. Cambia la forma en la que se llama cambiaValor  dentro del componente ListItem. Esto sólo debería 
//      llamarse en el onChange (remueve el evento onClick).
// 3. Añade un nuevo botón y un campo de input, para que cuando se le de click (si el texto no es vacío), 
//      se añada una nueva tarea a la lista. Esto encapsulalo en un componente llamado NewItemsForm que se 
//      use en el componente de TodoList, entre el título y el map de las tareas.
//=====================================================================================================

// Componente para representar un ítem de la lista
// Creado como funcion con declaración clásica
//====================================================================================================
//                                        CAMBIO TAREA 2) 
//====================================================================================================
function ListItem({ id, completado, texto, cambiaValor }) {
  return (
    <li>
      <input
        className="form-check-input"
        type="checkbox"
        checked={completado}
        id={`check-${id}`}
        // Cuando se le da click al elemento, se llama a la función cambiaValor pasada como prop
        // Lo correcto sería usar onChange en lugar de onClick para inputs de tipo checkbox
        onChange={() => cambiaValor()}              //PRIMER CAMBIO PARA USAR ONCHANGE
      />
      <span>{texto}</span>
    </li>
  );
}



// Componente principal de la lista de tareas
// Creado como función con expresión de función flecha
export const TodoList = () => {
  // Estado para las tareas. Se usa useState para manejar la variable de estado 'tareas'
  // El usar useState permite que se recuerde el valor entre renderizados y que al cambiar el valor
  // se vuelva a renderizar el componente
  const [tareas, setTareas] = useState([
    { id: 1, completado: true, texto: "Aprender HTML" },
    { id: 2, completado: false, texto: "Aprender CSS" },
    
  ]);

  // Estado para la última hora de cambios
  const [ultimaHoraDeCambios, setUltimaHoraDeCambios] = useState("");


  // Efecto secundario para actualizar la última hora de cambios cuando las tareas cambian
  useEffect(() => {
    const cambio = new Date().toLocaleTimeString();
    setUltimaHoraDeCambios(cambio);
  }, [tareas]);

  // Función para cambiar el estado de una tarea por su ID
  // Lo correcto sería usar un map en lugar de find y filter para evitar mutaciones directas
  //====================================================================================================
  //                                        CAMBIO TAREA 1) 
  //====================================================================================================
  const cambiaTareaPorId = (id) => {            //RECIBIMOS COMO PARAMETRO EL ID QUE QUEREMOS CAMBIAR
    setTareas((arregloPrevio) =>                //LLAMAMOS AL ACTUALIZADOR DE ESTADO SETTAREAS (LE PASAMOS LA FUNCION DONDE VIENE EL VALOR ACTUAL DE TAREAS)
        arregloPrevio.map((item) =>             //RECORREMOS CADA ELEMENTO DEL ARREGLO 
            item.id === id                      // SI EL ID DEL ITEM ES IGUAL AL ID QUE RECIBIMOS ENTONCES LO QUEREMOS MODIFICAR
                ? { ...item, completado: !item.completado }             //PARTE QUE SE EJECTUA CUANDO SE CUMPLE LA CONDICION ANTERIOR (NO SE MODIFICA EL ITEM ORIGINAL, SE CREA UNA COPIA CON EL CAMBIO QUE SE HIZO)
                : item                      //CUANDO NO SE CUMPLE LA CONDICION REGRESAMOS EL ITEM COMO ESTABA 
        )
    );
};


  return (
    <>
      <div>
        <h1>Todo list</h1>
        
        <NewItemsForm
          tareas={tareas}
          setTareas={setTareas}
        />
        
        {tareas.map((tarea) => (
          
          <ListItem
            key={tarea.id}
            id={tarea.id}
            completado={tarea.completado}
            texto={tarea.texto}
            cambiaValor={() => cambiaTareaPorId(tarea.id)}
            />
        ))}
        </div>
      <div>Ultimo cambio: {ultimaHoraDeCambios}</div>
    </>
  );
};

export default TodoList;