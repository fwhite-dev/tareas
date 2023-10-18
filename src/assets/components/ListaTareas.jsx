/* eslint-disable react/prop-types */
import { Tarea } from './Tarea'


export const ListaTareas = ({ tareas, setTareas }) => {

    const toggleCompletada = (id) => {

        setTareas(tareas.map((tarea) => {
            if (tarea.id === id) {
                return { ...tarea, completada: !tarea.completada }
            }
            return tarea
        }))
    }

    return (
        <ul>
            {tareas.length > 0 ?
                tareas.map((tarea) => {
                    return <Tarea key={tarea.id}
                        tarea={tarea}
                        toggleCompletada={toggleCompletada}
                    />
                })
                : <div className="lista-tareas__mensaje">No hay tareas agregadas</div>
            }
        </ul>
    )

}