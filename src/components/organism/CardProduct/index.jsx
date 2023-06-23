import React from 'react'
import Button from '../../atom/Button'
import { Link } from 'react-router-dom'
import { addToCart } from '../../../redux/slices/cartSlice'
import { useDispatch } from 'react-redux'

export default function CardProduct(props) {
    const { children } = props
    return (
        <>
            <div className="h-fit rounded-lg bg-gradient-to-r from-violet-500 via-blue-500 to-sky-500 p-1 shadow-xl">
                <div className="w-full h-fit max-w-xs bg-white rounded-lg">{children}</div>
            </div>
        </>
    )
}

const Header = (props) => {
    const { image, id } = props
    return (
        <div className="flex justify-center items-center p-4">
            <Link to={`/products/${id}`}>
                <img src={image} alt="gambar" className="rounded-t-lg w-[150px] h-[150px] " />
            </Link>
        </div>
    )
}

const Body = (props) => {
    const { title, children } = props
    return (
        <>
            <div className="px-5 h-60">
                <h5 className=" font-bold text-slate-900 text-3xl truncate">{title}</h5>
                <p className="mt-3 h-44 overflow-hidden text-slate-300 text-xs text-justify">{children}</p>
            </div>
        </>
    )
}

const Footer = (props) => {
    const { price, id, handleToCart } = props
    const dispatch = useDispatch()
    return (
        <>
            <div className="flex justify-center items-center">
                <p>harga : {price}</p>
            </div>
            <div className=" px-4 mt-2">
                <button color='bg-blue-500 ' onClick={() => dispatch(addToCart({ id, qty: 1 }))} className='w-full mb-2 rounded-lg text-white p-2 bg-blue-600'>Add to Cart</button>
            </div>
        </>
    )
}

CardProduct.Header = Header
CardProduct.Body = Body
CardProduct.Footer = Footer