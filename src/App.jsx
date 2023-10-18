import { FormularioTareas } from "./assets/components/FormularioTareas"
import { Header } from "./assets/components/Header"
import { useState, useEffect } from "react"
import { ListaTareas } from "./assets/components/ListaTareas"


function App() {

  const tareasGuardadas = localStorage.getItem('tareas')
    ?
    JSON.parse(localStorage.getItem('tareas'))
    : []

  const [tareas, setTareas] = useState(tareasGuardadas)

  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas))
  }, [tareas])

  const [mostrarCompletadas, setMostrarCompletadas] = useState(true)

  return (
    <>
      <div className="contenedor">
        <Header
          mostrarCompletadas={mostrarCompletadas}
          setMostrarCompletadas={setMostrarCompletadas}
        />
        <FormularioTareas tareas={tareas} setTareas={setTareas} />
        <ListaTareas
          tareas={tareas}
          setTareas={setTareas}
          mostrarCompletadas={mostrarCompletadas}
        />
      </div>
    </>
  )
}

export default App
