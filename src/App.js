import './App.css';  
import Navbar from './Components/Navbar';  
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import ProductList from './Components/ProductList';
import ProductDetails from './Components/ProductDetails';

function App() {
  return (
    <div className="App"> 
      <Router>
        <Navbar /> 
        <Switch> 
          <Route exact path="/"> <ProductList /></Route> 
          <Route path="/product/:id"><ProductDetails /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
