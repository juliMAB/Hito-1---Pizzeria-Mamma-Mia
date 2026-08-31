import { useState } from 'react'
import { Navbar, Home, Footer } from './components'

function App() {
  const [cart, setCart] = useState([])

  const addToCart = (pizza) => {
    setCart([...cart, pizza])
  }

  const clearCart = () => {
    setCart([])
  }

  const total = cart.reduce((sum, pizza) => sum + pizza.price, 0)

  return (
    <div className="container-fluid">
      <Navbar total={total} cartCount={cart.length} onClearCart={clearCart} />
      <Home onAdd={addToCart} />
      <Footer />
    </div>
  )
}

export default App