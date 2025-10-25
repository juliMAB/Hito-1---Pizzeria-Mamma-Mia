import { useState } from 'react'
import { formatPrice } from '../utils/formatters'

const Navbar = () => {
  const total = 25000;
  const [token, setToken] = useState(false);

  const toggleToken = () => {
    setToken(!token);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
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
              <button className="btn btn-outline-light me-2">
                🍕 Home
              </button>
            </div>
            
            {/* Right side buttons */}
            <div className="navbar-nav">
              {token ? (
                <>
                  <button className="btn btn-outline-light me-2">
                    🔓 Profile
                  </button>
                  <button className="btn btn-outline-light me-2">
                    🔒 Logout
                  </button>
                </>
              ) : (
                <>
                  <button className="btn btn-outline-light me-2">
                    🔐 Login
                  </button>
                  <button className="btn btn-outline-light me-2">
                    🔐 Register
                  </button>
                </>
              )}
              <button className="btn btn-outline-info">
                🛒 Total: {formatPrice(total)}
              </button>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Demo button to toggle token state */}
      <div className="container mt-2 mb-3">
        <div className="alert alert-info d-flex justify-content-between align-items-center">
          <span>
            <strong>Demo:</strong> Estado actual del token: 
            <span className={`badge ${token ? 'bg-success' : 'bg-danger'} ms-2`}>
              {token ? 'Logueado' : 'No logueado'}
            </span>
          </span>
          <button 
            className="btn btn-sm btn-outline-primary"
            onClick={toggleToken}
          >
            {token ? 'Simular Logout' : 'Simular Login'}
          </button>
        </div>
      </div>
    </>
  )
}

export default Navbar