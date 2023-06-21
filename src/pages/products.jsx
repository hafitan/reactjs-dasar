import React, { useState } from 'react'
import CardProduct from '../components/organism/CardProduct'
import Navabr from '../components/template/Navbar'
import Button from '../components/atom/Button'

const data = [
  {
    id: 1,
    name: 'new name',
    image: "public/images/merry.jpg",
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex ab sit deleniti nisi voluptas architecto rerum hic et magni?',
    harga: '15000000'
  },
  {
    id: 2,
    name: 'new name 1',
    image: "public/images/merry.jpg",
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex ab sit deleniti nisi voluptas architecto rerum hic et magni?',
    harga: '12000000'
  },
]

export default function ProductPage() {
  // state / useState = data/penyimpanan/memori yang dipake buat menghandle/menangani komponen yang berubah2
  const [cart, setCart] = useState([
    {
      // id: 1,
      // qty: 1
    }
  ])

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
                      localStorage.removeItem('email')
                      localStorage.removeItem('password')
                      window.location.href = '/'
                    }}>Yes</Button>
                  </div>
                </div>
              </div>
            </CardProduct.Body>
          </CardProduct>
        </div>
      )}
      <Navabr onClick={() => {setLogout(true)}} />

      <div className="flex justify-center">
        <div className="flex justify-center items-center min-h-screen gap-6 w-4/6 px-6">
          {data.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header image={product.image} />
              <CardProduct.Body title={product.name}>
                {product.desc}
              </CardProduct.Body>
              <CardProduct.Footer harga={product.harga} id={product.id} handleAddToCart={handleAddToCart} />
            </CardProduct>
          ))}
        </div>
        <div className="w-2/6 py-8 px-5">
          <h1>cart</h1>
          {/* <ul>
              {cart.map((item) => (
                <li key={item.id}></li>
              ))}
            </ul> */}
          <table className="border px-2 py-4 rounded-xl border-separate border-spacing-x-5">
            <thead className=''>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Total</th>
              </tr>
             
            </thead>
            <tbody>
              {cart.map((item) => {
                // mencari id dalam var data, kalo id yang di data sama dengan id yang ada di cart maka ambil product nya
                const datas = data.find((data) => data.id === item.id);
                if(!datas){
                  console.log('data tidak ada')
                  return null
                }
                const total = item.qty * datas.harga;
                console.log(total)
                return (
                  <tr key={item.id}>
                    <td>{datas.name}</td>
                    <td>{datas.harga}</td>
                    <td>{item.qty}</td>
                    <td>{item.qty * datas.harga}</td>
                  </tr>
                )
              })
              }
            </tbody>            
          </table>
          <table>
            <thead>
              {cart.map((i) => {                
                <tr>
                  <th>Jumlah total</th>
                  <th></th>
                </tr>
              })}
            </thead>
          </table>
        </div>
      </div>
    </>
  )
}
