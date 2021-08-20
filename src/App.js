import './App.css';
import Header from "./Components/Header";
import {BrowserRouter}  from 'react-router-dom';
import {Switch,Route} from 'react-router-dom';
import  Home from './Components/Home';
import Cart from './Components/Cart';
function App() {
  return (
    <BrowserRouter>
       <Header/>
       <div>
         <Route path ="/" exact>
         <Home/>
         </Route>
         <Route path ="/cart" exact>
         <Cart/>
         </Route>
       </div>
     </BrowserRouter>
   
  );
}

export default App;
