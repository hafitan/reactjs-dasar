import Komp from '../src/belajar/componentProps'
function App() {
  return (
    // simbol <> = fragment sebagai parent dari suatu komponen
    <>
      <div className="flex flex-col justify-center items-center min-h-screen">
        <Komp />
      </div>
    </>
  )
}

export default App
