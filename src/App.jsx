import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./assets/pages/HomePage";
import InfoPage from "./assets/pages/InfoPage";
import ProdottiPage from "./assets/pages/ProdottiPage";
import DefaultLayout from "./assets/layouts/DefaultLayout";
import DettaglioProdottoPage from "./assets/pages/DettaglioProdottoPage";
function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/info" element={<InfoPage />} />
          <Route path="/prodotti" >
            <Route index element={<ProdottiPage />} />
            <Route path=":id" element={<DettaglioProdottoPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter >
  )
}

export default App
