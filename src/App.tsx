import './App.css'
import UserForm from './components/UserForm'

function App() {

  return (
    <main className='h-full w-full flex flex-col justify-center items-center'>
      <div className='flex flex-row justify-between items-center'>
        <img className='w-80 absolute left-0' src="/images/logo.png" alt="" />
        <h1>Simulador Interno</h1>
      </div>
      <UserForm />
    </main>
  )
}

export default App
