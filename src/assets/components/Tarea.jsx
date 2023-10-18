/* eslint-disable react/prop-types */
import { AiOutlineCheckSquare } from "react-icons/ai";
import { AiOutlineBorder } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";
import { AiOutlineEdit } from "react-icons/ai";
import { useState } from "react";


export const Tarea = ({ tarea, toggleCompletada }) => {

    const [editar, setEditar] = useState(false)
    const [nuevaTarea, setNuevaTarea] = useState(tarea.texto)

    const handleSubmit = (e) => {
        e.preventDefault();
        setEditar(false)
    }

    return (
        <div className="w-[90%] m-auto pt-3">
            <li className="flex justify-between">
                <div className="flex">
                    <div onClick={() => toggleCompletada(tarea.id)}>
                        {tarea.completada ?
                            <AiOutlineCheckSquare className="text-[25px] ml-[10px]"
                            />
                            :
                            <AiOutlineBorder className="text-[25px] ml-[10px]" />
                        }
                    </div>
                    <div className="ml-3">
                        {editar ?
                            <form onSubmit={handleSubmit}  >
                                <input type="text"
                                    className="border-b-2 border-black"
                                    value={nuevaTarea}
                                    onChange={(e) => setNuevaTarea(e.target.value)}

                                />
                                <button>
                                    Actualizar
                                </button>
                            </form>
                            : tarea.texto
                        }
                    </div>
                </div>
                <div className="flex">
                    <AiOutlineEdit onClick={() => setEditar(!editar)} className="text-[25px] ml-[10px]" />
                    <AiOutlineDelete className="text-[25px] ml-[10px]" />
                </div>
            </li>
        </div>
    )
}
