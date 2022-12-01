import react, { useState } from 'react'
import Chitchat from '../styles/icons/chitchat'
import Notification from '../components/notification/Notification'
import Button from '../components/button/Button'

export default function Home() {

  const [darkMode, setDarkMode] = useState(false) 

  const handleMode = () => {
    console.log('click')
    document.documentElement.classList.toggle('dark')
    setDarkMode(!darkMode)
  }

  return (<>
    {/* <Notification/> */}
    <p className="text-white text-2xl pb-12">{darkMode ? 'Dark Mode On' : 'Light Mode On'}</p>
    <Button color='primary' onClick={handleMode}>{darkMode ? 'Change to Light Mode' : 'Change to Dark Mode'}</Button>
    <Button color='secondary' onClick={handleMode}>{darkMode ? 'Change to Light Mode' : 'Change to Dark Mode'}</Button>
  </>)
}