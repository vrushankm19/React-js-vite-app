import React,{useState,useEffect} from 'react';
import { add } from '../Redux/Cartslice';
import { useDispatch, useSelector } from 'react-redux';
import { fetchproducts } from '../Redux/ProductSlice'; 
import { STATUSES } from '../Redux/ProductSlice';

const Home = () => {
  // const [products,setProducts] = useState([]);
  const dispatch = useDispatch();
  const {data:products,status} = useSelector((state)=>state.product)

  useEffect(() => {
    dispatch(fetchproducts());
  },[]);
  
  const handleadd = (product) => {
    dispatch(add(product));
  }

  if(status === STATUSES.LOADING){
    return <h2>Loading...</h2>
  }

  return (
    <div className='container'>
        <div className='mt-4'>
            <h1>Home</h1>
        </div>
      <div className='row'>
          {
            products.map((product) => (
                <div className='col-md-3 mt-4' key={product.id}>
                  <div className='card'>
                    <img className='card-img-top w-50 mx-auto' src={product.image} alt="img" />
                    <div className='card-body'>
                      <h4>{product.title}</h4>
                      <h5>{product.price}</h5>
                      <button className='btn btn-primary w-100' onClick={()=>handleadd(product)}>Add TO Cart</button>
                    </div>
                  </div>
                </div>
            ))
          }
      </div>
    </div>
  )
}

export default Home