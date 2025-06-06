import CountBtn from '@/components/CountBtn'
import ReactSVG from '@/assets/react.svg'
import './styles/globals.css'
function App() {
  return (
    <main className='flex flex-col items-center justify-center h-screen'>
      <div className='flex flex-col items-center gap-y-4'>
        <div className='inline-flex items-center gap-x-4'>
          <img src={ReactSVG} alt='React Logo' className='w-32' />
          <span className='text-6xl'>+</span>
          <img src={'/vite.svg'} alt='Vite Logo' className='w-32' />
        </div>
        <p>
          <CountBtn />
        </p>
      </div>
    </main>
  )
}

export default App
