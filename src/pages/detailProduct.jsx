import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getDetailProduct } from '../services/product.service'

export const  DetailProductPage = () => {
    const {id} = useParams()
    const [product, setProduct] = useState({})

    useEffect(() => {
        getDetailProduct(id, (data) => {
            setProduct(data)
        })
    }, [id])
    console.log(product)
  return (
    <>
        <div className="">
            <div className="">Detail product : {id}</div>
        </div>
    </>
  )
}

export default DetailProductPage

