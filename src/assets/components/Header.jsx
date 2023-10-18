import { FaEyeSlash } from "react-icons/fa6";
import { FaEye } from "react-icons/fa6";


export const Header = ({ mostrarCompletadas, setMostrarCompletadas }) => {

    const toggleCompletadas = () => {
        setMostrarCompletadas(!mostrarCompletadas)
    }

    return (
        <div className="header">
            <h1 id='header__titulo' className="text-[24px] font-[400]">Lista de tareas</h1>
            {mostrarCompletadas ?
                <button id="header__boton" className="bg-[#004c92] text-[16px] text-white border-none cursor-pointer py-1 px-2 rounded flex items-center" onClick={() => toggleCompletadas()}>
                    No mostar completadas
                    <FaEyeSlash id="header__icono-boton" className="text-[14px] m-2" />
                </button>
                :
                <button id="header__boton" className="bg-[#004c92] text-[16px] text-white border-none cursor-pointer py-1 px-2 rounded flex items-center" onClick={() => toggleCompletadas()}>
                    Mostrar completadas
                    <FaEye id="header__icono-boton" className="text-[14px] m-2" />
                </button>
            }
        </div>
    )
}
