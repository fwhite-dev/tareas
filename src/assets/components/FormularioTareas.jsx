/* eslint-disable react/prop-types */

import { FaRegSquarePlus } from "react-icons/fa6";

import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";

export const FormularioTareas = ({ tareas, setTareas }) => {
    const [inputTarea, setInputTarea] = useState('')

    const handleInput = (e) => {
        setInputTarea(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setTareas(
            [
                ...tareas,
                {
                    id: uuidv4(),
                    texto: inputTarea,
                    completada: false
                }
            ]
        );
    }

    return (
        <form className="fomulario-tareas" onSubmit={handleSubmit}>
            <input type='text'
                placeholder='Escribe una tarea'
                className="fomulario-tareas input"
                value={inputTarea}
                onChange={handleInput}

            />
            <button type='submit' className="absolute right-[48px] " >
                <FaRegSquarePlus className="text-green-500 text-[25px]" />
            </button>

        </form>
    )
}
