
import {AiOutlineShoppingCart} from "react-icons/ai"

function App() {
  return (
    <div className="flex justify-center bg-rose-50">
<div className="grid md:grid-cols-2 sm:grid-cols-1 py-10">
  <div className="hidden md:inline-block" >
    <img className="rounded-l-lg" src="/image-product-desktop.jpg" width={350} />
    
  </div>
  <div className="md:hidden">
    <img className="rounded-t-lg" src="/image-product-mobile.jpg" width={350} />
    
  </div>
  <div>
    <div className="  p-5 border bg-white md:hidden">
          <p className="text-sm text-gray-500 pb-1">PERFUME</p>
          <p className="text-4xl pb-3 font-New">Gabrielle Essence<br/> Eau De Parfum</p>
          <p className="text-gray-500 ">A floral, solar and voluptuous <br/>interpretation composed by Olivier <br/>Polge, Perfumer-Creator for the House of <br/>CHANEL.</p>
        <div className="flex pt-5 space-x-5 pb-2">
          <h1 className="text-3xl text-emerald-700/90 font-New">$149.99</h1>
          <p className="text-sm  text-gray-500 pt-2 line-through">$169.99</p>
        </div>
        <div className="bg-emerald-700/90 flex justify-center p-2 rounded-lg my-2 hover:bg-green-900">
          <button className="flex  text-white p-1">
            <p className="pt-1 mr-2"><AiOutlineShoppingCart/></p>
            <p>Add to Cart</p> 
            </button>
        </div>
        </div>
        <div className=" hidden md:inline-block p-7 border bg-white rounded-r-lg">
          <p className="text-lg text-gray-500 pt-1 pb-1">PERFUME</p>
          <p className="text-5xl pt-2 pb-5 font-New">Gabrielle <br/>Essence Eau <br/> De Parfum</p>
          <p className="text-gray-500 text-xl">A floral, solar and voluptuous <br/>interpretation composed by <br/>Olivier Polge, Perfumer-Creator <br/>for the House of CHANEL.</p>
        <div className="flex pt-5 space-x-5 pl-1 pb-2">
          <h1 className="text-4xl text-emerald-700/90 font-New">$149.99</h1>
          <p className="text-lg  text-gray-500 pt-2 line-through">$169.99</p>
        </div>
        <div className="bg-emerald-700/90 flex justify-center p-2 rounded-lg my-4 mx-3 hover:bg-green-900">
          <button className="flex  text-white p-1">
            <p className="pt-1 mr-2"><AiOutlineShoppingCart/></p>
            <p>Add to Cart</p> 
            </button>
            
        </div>
        
        </div>
        
       
        
      </div>
      <div>
  </div>

</div>



  
    </div>
  );
}

export default App;
