import React from 'react'
import Navbar from './component/Navbar'
import HOME from './component/Home'
import { ReactLenis } from 'lenis/react'

const App = () => {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        duration: 1.2,
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        smoothTouch: true,
        touchMultiplier: 2,
      }}
    >
      <div>
        <Navbar />
        <HOME />
      </div>
    </ReactLenis>
  )
}

export default App