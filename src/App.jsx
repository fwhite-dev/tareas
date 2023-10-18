import { FormularioTareas } from "./assets/components/FormularioTareas"
import { Header } from "./assets/components/Header"
import { useState } from "react"
import { ListaTareas } from "./assets/components/ListaTareas"


function App() {

  const [tareas, setTareas] = useState(
    [

    ]
  )

  console.log(tareas)

  return (
    <>
      <div className="contenedor">
        <Header />
        <FormularioTareas tareas={tareas} setTareas={setTareas} />
        <ListaTareas tareas={tareas} setTareas={setTareas} />
      </div>
    </>
  )
}

export default App
