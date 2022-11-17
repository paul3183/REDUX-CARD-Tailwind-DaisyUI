import { useEffect, useState } from 'react'
import './App.css'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { increment } from './store/slices/counter.slice'
import { change } from './store/slices/user.slice'


function App() {

  // modo dark:
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  const changeTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }


  const dispatch = useDispatch();
  // counter:
  const [count, setCount] = useState("");
  const counter = useSelector(state => state.counter)

  const incrementCounter = () => {
    dispatch(increment(count));
  }
  // user:
  const [users, setUsers] = useState("");
  const user = useSelector(state => state.user)

  const changeName = () => {
    dispatch(change(users));
  }

  return (
    <div className="App dark:bg-neutral-content flex items-center h-screen justify-center flex-col gap-5 text-center">
      {/* counter */}
      <div className='dark:text-secondary text-primary' >
        <label className="swap swap-rotate">

          <input type="checkbox" onChange={changeTheme} />


          <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

          <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

        </label>
      </div>

      <h1 className='text-6xl dark:text-neutral-focus text-neutral-content font-bold'>{counter}</h1>
      <input className='input input-bordered input-primary w-full max-w-xs text-center' type="text" value={count} onChange={(e) => setCount(e.target.value)} />
      <button className='btn glass dark:text-neutral-focus text-neutral-content' onClick={incrementCounter}>increment</button>
      {/* user: */}
      <h2 className='text-6xl dark:text-neutral-focus text-neutral-content font-bold'>{user}</h2>
      <input className='input input-bordered input-primary w-full max-w-xs text-center' type="text" value={users} onChange={({ target }) => setUsers(target.value)} />
      <button className='btn glass dark:text-neutral-focus text-neutral-content' onClick={changeName}>Change-Name</button>
      <footer className='absolute bottom-0 mb-5'>
        <h1 className='dark:text-neutral-focus text-neutral-content font-bold'>Developer</h1>
        <p className='dark:text-neutral-focus text-neutral-content font-bold'>Paul Martin Ruiz Guardia</p>
      </footer>
    </div>
  )
}

export default App
