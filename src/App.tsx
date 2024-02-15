
import './App.css'
import NavBarHome from './components/nav-bar'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css" 
import getArticleAPI from './data/get-article-API'
import MainComponent from './components/main-component'

function App() {
  getArticleAPI()

  return (
    <>
     <header>
      <NavBarHome />
     </header>
     <main>
    <MainComponent />
    </main>
     <footer>

     </footer>
    </>
  )
}

export default App
