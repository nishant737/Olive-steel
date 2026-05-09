import { useState, useCallback } from 'react'
import SplashScreen from './SplashScreen'
import Hero from './Hero'

function App() {
  const [showSplash, setShowSplash] = useState(true)
  const handleSplashDone = useCallback(() => setShowSplash(false), [])

  return (
    <>
      {showSplash && <SplashScreen onDone={handleSplashDone} />}
      <Hero />
    </>
  )
}

export default App
