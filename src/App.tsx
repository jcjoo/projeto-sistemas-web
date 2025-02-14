import './App.css'
import { Turma } from './pages/turma/Turma'

function Content() {
  return <div className='h-96 overflow-auto'>
    {[...new Array(1000)].map((item, i) =>
      <p key={item} className={i % 2 === 0 ? 'bg-slate-300' : 'bg-slate-100'}> Bolo {i} </p>
    )}
  </div >
}

function App() {
  return (
    <>
      <Turma></Turma>
      <Content />
    </>
  )
}

export default App
