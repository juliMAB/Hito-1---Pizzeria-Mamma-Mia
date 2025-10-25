import { useState } from 'react'
import { Navbar, Home, Footer } from './components'

function App() {
  const [total] = useState(25000)

  return (
    <div className="container-fluid">
      <Navbar total={total} />
      <Home />
      <Footer />
    </div>
  )
}

export default App