import React, { useEffect, useState } from 'react'
import CardProduct from '../components/organism/CardProduct'
import Navabr from '../components/template/Navbar'
import Button from '../components/atom/Button'
import { getProduct } from '../services/product.service'
import { getUsername } from '../services/auth.service'

// const data = [
//   {
//     id: 1,
//     name: 'new name',
//     image: "public/images/merry.jpg",
//     desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex ab sit deleniti nisi voluptas architecto rerum hic et magni?',
//     harga: '15000000'
//   },
//   {
//     id: 2,
//     name: 'new name 1',
//     image: "public/images/merry.jpg",
//     desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex ab sit deleniti nisi voluptas architecto rerum hic et magni?',
//     harga: '12000000'
//   },
// ]


export default function ProductPage() {

  // state / useState = data/penyimpanan/memori yang dipake buat menghandle/menangani komponen yang berubah2
  const [data, setData] = useState([])
  const [cart, setCart] = useState([])
  const [totalPrice, setTotalPrice] = useState([])
  const [username, setUsername] = useState([])

  useEffect(() => {
    const token = localStorage.getItem('token')
    // cek token, klo ga ada token bakal diarahin ke login
    if(token) {
      setUsername(getUsername(token))
    }else{
      window.location.href = '/'
    }
  }, [])

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem('cart')) || [])
  }, [])

  useEffect(() => {
    if(data.length > 0 && cart.length > 0){
      const sum = cart.reduce((acc, item) => {
        const products = data.find((products) => products.id == item.id)
        console.log('ini item', item)
        return acc + products.price * item.qty
      }, 0)
      setTotalPrice(sum)
      // opsional: ubah data json ke string karna localstorage cuma bisa nyimpen data string
      localStorage.setItem('cart', JSON.stringify(cart))
    }
  }, [cart, data])

  const handleAddToCart = (id) => {
    // setCart([
    // cara manual ngeSet/definisiin data ke dalam state
    // ...cart,
    // {
    //   // name: 'new name',
    //   // qty: 1,
    // }
    // ])
    if (cart.find((item) => item.id === id)) {
      // dia akan mapping dan membongkar itemnya
      setCart(cart.map((item) => (item.id === id ? { ...item, qty: item.qty + 1 } : item)))
    } else {
      // kalo datanya cuma 1 maka cma akan di set satu
      setCart([...cart, { id, qty: 1 }])
    }
  }

  
  // get data using useEffect
  useEffect(() => {
    getProduct ((data) => {
      setData(data)
    })
  }, [])



  const [logout, setLogout] = useState(false)

  return (
    <>
      {logout && (
        <div className="flex justify-center items-center absolute w-full h-screen z-50 bg-black/50">
          <CardProduct>
            <CardProduct.Body>
              <div className="flex flex-col justify-center items-center">
                <div className="flex justify-start items-center border-b py-2 px-4 w-full">
                  <h1 className="text-lg font-bold">alert</h1>
                </div>
                <div className="flex flex-col justify-center items-center py-2 px-4">
                  <div className="flex justify-center items-center text-center w-full p-2">
                    <h1 className='text-md font-semibold'>Apakah anda ingin keluar?</h1>
                  </div>
                  <div className="flex gap-x-4">
                    <Button onClick={() => {setLogout(false)}}>No</Button>
                    <Button onClick={() => {
                      // localStorage.removeItem('token')  //hapus di localstorage sesuai key
                      localStorage.clear() //hapus di localstorage semuanya
                      window.location.href = '/'
                    }}>Yes</Button>
                  </div>
                </div>
              </div>
            </CardProduct.Body>
          </CardProduct>
        </div>
      )}
      <Navabr onClick={() => {setLogout(true)}} username={username} />

      <div className="flex  mt-10">
        <div className="flex flex-wrap h-full gap-6 w-full">
          <div className="grid grid-cols-2 gap-20">
            {data.length > 0 &&
              data.map((product) => (
                <CardProduct key={product.id}>
                  <CardProduct.Header id={product.id} image={product.image} />
                  <CardProduct.Body title={product.title}>
                      {product.description}
                  </CardProduct.Body>
                  <CardProduct.Footer harga={product.price} id={product.id} handleAddToCart={handleAddToCart} />
                </CardProduct>
              ))
            }
          </div>
        </div>
        <div className=" flex flex-col  items-center text-center py-8 px-5">
          <h1>cart</h1>
          {/* <ul>
              {cart.map((item) => (
                <li key={item.id}></li>
              ))}
            </ul> */}
          <table className="border px-2 py-4 rounded-xl border-separate border-spacing-x-5 max-w-full">
            <thead className=''>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody className='w-full'>
              {data.length > 0 &&
                cart.map((item) => {
                  // mencari id dalam var data, kalo id yang di data sama dengan id yang ada di cart maka ambil product nya
                  const datas = data.find((data) => data.id === item.id);
                  if(!datas){
                    // console.log('data tidak ada')
                    return null
                  }
                  // const total = item.qty * datas.harga;
                  // console.log(total)
                  return (
                    <tr key={item.id}>
                      <td>{datas.title}</td>
                      <td>{datas.price}</td>
                      <td>{item.qty}</td>
                      <td>{item.qty * datas.price}</td>
                    </tr>
                  )
                })
                
              }              
            <tr className='w-full  font-bold'>
                <td className='' colSpan={3}>Total price: </td>
                <td className=''>{totalPrice}</td>
              </tr>   
            </tbody>  
                   
          </table>
        </div>
      </div>
    </>
  )
}
