const Navbar = ({ total }) => {
  return (
    <header className="bg-dark text-white py-4 mb-4">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-8">
            <h1 className="display-4 mb-0">🍕 Pizzería Mamma Mía!</h1>
            <p className="lead mb-0">¡Tenemos las mejores pizzas que podrás encontrar!</p>
          </div>
          <div className="col-md-4 text-md-end">
            <button className="btn btn-outline-light btn-lg">
              🛒 Total: ${total.toLocaleString()}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar