import { FormularioTareas } from "./assets/components/FormularioTareas"
import { Header } from "./assets/components/Header"
import { useState } from "react"
import { ListaTareas } from "./assets/components/ListaTareas"


function App() {

  const [tareas, setTareas] = useState(
    [

    ]
  )

  const [mostrarCompletadas, setMostrarCompletadas] = useState(false)

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
