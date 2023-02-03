import './App.css';
import Product from './components/Product';
import products from './components/products.json';
import './css/main.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
            {products.map((product)=> 
        <Product key={product.prodid} name={product.title} cat={product.category} price={product.price}/>
      )}
        </div>
      </div>
    </div>
  );
}

export default App;
