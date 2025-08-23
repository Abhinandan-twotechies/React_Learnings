import { use, useEffect, useState } from 'react'
import './App.css'
import { useSelector } from 'react-redux'
import { fetchProductsRequest } from './redux/reducers/productReducer'
import { useDispatch } from 'react-redux'



function App() {
  const [count, setCount] = useState(0)

  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  console.log("Products from store:", products);

  useEffect(() => {
    dispatch(fetchProductsRequest());
  }, []);


  return (
    <>
      <header className='w-full bg-gray-300 text-center text-black border border-red-50 p-4 font-bold  sticky top-0 z-10 flex justify-between'>
        <div className='w-[20%] boreder border-black item-center'>
          <p className='text-xl'>Ecom Store</p>
        </div>
        <div className='w-[20%] flex justify-between item-center'>
          <p>Home</p>
          <p>About</p>
          <p>Contact</p>
          <p>FAQ'S</p>
        </div>
        <div className='w-[20%]'>
          <p>Cart - 0</p>
        </div>
      </header>
      <div className='bg-gray-200 p-2 flex flex-wrap justify-center min-h-screen'>
        {products ? products.map((product) => {
          return (
            <div key={product.id} className='border border-gray-400 rounded-lg m-4 p-4 bg-white max-w-[20%] min-w-[300px]'>
              <img src={product.image} alt={product.title} className='w-50 h-50 object-contain' />
              <h2 className='font-bold'>{product.title}</h2>
              <div className='max-h-[100px] overflow-hidden mt-1- mb-2'>
                <p className='text-gray-500'>{product.description.slice(0, 200)}</p>
              </div>

              <div className='flex justify-between items-center mt-2 border p-2  '>
                <p className='font-bold'>Price :  ${product.price}</p>
                <button className='border px-4 py-1'>Add to cart</button>
              </div>
            </div>
          )
        }) : 'No products found'}
      </div>


    </>
  )
}

export default App
