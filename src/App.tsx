
import './App.css'
import NavBarHome from './components/nav-bar'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css" 
import getArticleAPI from './data/get-article-API'
import MainComponent from './components/main-component'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  getArticleAPI()

  return (
    <>
    <BrowserRouter>
     <header>
      <NavBarHome />
     </header>
     <Routes>
     
      <Route path="/" element={<MainComponent/>} />
      {/* <Route path="/details" element={<MainComponent/>} /> */}
      <Route path="*" element={<h1>404</h1>} />
    </Routes>
     <footer>

     </footer>
    </BrowserRouter>
    </>
  )
}

export default App
