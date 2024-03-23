import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { DataContext } from './contextProvider/Context'
import "bootstrap/dist/css/bootstrap.min.css"




ReactDOM.createRoot(document.getElementById('root')!).render(
  <DataContext>
  <BrowserRouter>
    <App/>
  </BrowserRouter>
  </DataContext>
   
  
)
