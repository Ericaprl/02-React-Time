import { Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home/Home"
import { History } from "./pages/History/History"
import { DefaultLayout } from "./layouts/DefaultLayout"

export  function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout/>}>
            <Route path="/" element={<Home/>} />
            <Route path="/history" element={<History />} />
            </Route>

            {/* Para criar uma rota com admin tabem onde vai ter admin diferente coisas
            <Route path="/admin" element={<DefaultLayoutAdmin/>}>
            <Route path="/admin" element={<Home/>} />
            <Route path="/admin/history" element={<History />} />
            </Route> */}

        </Routes>
    )
  }
  