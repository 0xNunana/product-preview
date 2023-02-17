
import {AiOutlineShoppingCart} from "react-icons/ai"

function App() {
  return (
    <div className="flex justify-center bg-rose-50">
      <div className="w-100">
        <div className="p-10">
          <img className="rounded-t-lg" src="/image-product-mobile.jpg" width={350}/>
        <div className="p-5 border bg-white">
          <p>PERFUME</p>
          <p className="text-4xl pb-3 font-semibold">Gabrielle Essence<br/> Eau De Parfum</p>
          <p className="text-gray-400 ">A floral, solar and voluptuous <br/>interpretation composed by Olivier <br/>Polge, Perfumer-Creator for the House of <br/>CHANEL.</p>
        <div className="flex pt-5 space-x-5 pb-2">
          <h1 className="text-3xl">$149.99</h1>
          <p className="text-sm pt-2 line-through">$169.99</p>
        </div>
        
        </div>
        
        </div>
        
          
       
        
      </div>
    </div>
  );
}

export default App;
