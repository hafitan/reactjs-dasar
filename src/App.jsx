import Komp from '../src/belajar/componentProps'
import Counter from './belajar/lifeCycle/Counter'
import Login from './components/organism/Login'
import Register from './components/organism/Register'
import AuthLayout from './components/template/AuthLayout'
function App() {
  return (
    // simbol <> = fragment sebagai parent dari suatu komponen
    <>
      {/* <div className="flex flex-col justify-center items-center min-h-screen"> */}
        {/* <Komp></Komp> */}
        {/* <Login/> */}
        {/* <AuthLayout title='Login' desc='silahkan isi'>
          <Login />
        </AuthLayout>
        <AuthLayout title='Register' desc='silahkan isi'>
          <Register />
        </AuthLayout>
      </div> */}
      <Counter />
    </>
  )
}

export default App

