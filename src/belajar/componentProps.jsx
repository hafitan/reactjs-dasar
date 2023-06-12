

// nested component = komponen dalam komponen

function Button() {
    return <button className="h-10 px-6 font-semibold rounded-md bg-blue-400 text-black">button</button>
}

// pake cara anon function
const Button2 = (props) => {
    const { text = "..." } = props
    return <button className={`h-10 px-6 font-semibold rounded-md bg-pink-400 ${props.color} text-white`}>{text}</button>
}

const Button3 = (props) => {
    const { text = "...", children } = props
    return <button className={`h-10 px-6 font-semibold rounded-md bg-pink-400 ${props.color} text-white`}>{children}</button>
}

const componentProps = (props) => {
    const {textColor, text} = props
    return (
        <>
            <div className="flex justify-center items-center mb-8 mt-10">
                <h1 className='text-5xl font-bold text-center text-red-400'>hello world</h1>
            </div>
            <div className="flex justify-center items-center gap-x-3">
                <button className="h-10 px-6 font-semibold rounded-md bg-[#a68886] text-white">button</button>
                <button className="h-10 px-6 font-semibold rounded-md bg-gray-300 text-black">button</button>
                <Button />
                <Button2 text="login" />
                <Button2 color="bg-violet-200" />
                <Button3 color="bg-yellow-300">
                    Logout <span>Bro</span>
                </Button3>
            </div>
        </>
    )
}

export default componentProps;
