import { useState } from 'react'
import { formatPrice } from '../utils/formatters'

const Navbar = ({ total, cartCount, onClearCart }) => {
  const [token, setToken] = useState(false)

  const handleAuthClick = () => {
    setToken(!token)
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
      <div className="container">
        {/* Brand */}
        <span className="navbar-brand mb-0 h1">🍕 Pizzería Mamma Mía!</span>

        {/* Toggle button for mobile */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation items */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav me-auto">
            <button type="button" className="btn btn-outline-light me-2">
              🍕 Home
            </button>
          </div>

          {/* Right side buttons */}
          <div className="navbar-nav">
            {token ? (
              <>
                <button type="button" className="btn btn-outline-light me-2">
                  🔓 Profile
                </button>
                <button
                  type="button"
                  className="btn btn-outline-light me-2"
                  onClick={handleAuthClick}
                >
                  🔒 Logout
                </button>
              </>
            ) : (
              <button
                type="button"
                className="btn btn-outline-light me-2"
                onClick={handleAuthClick}
              >
                🔐 Login
              </button>
            )}
            <div className="d-flex align-items-center gap-2">
              <button type="button" className="btn btn-outline-info">
                🛒 Total: {formatPrice(total)} ({cartCount})
              </button>
              {cartCount > 0 && (
                <button
                  type="button"
                  className="btn btn-outline-danger btn-sm"
                  onClick={onClearCart}
                >
                  Vaciar
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar