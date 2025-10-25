const Home = () => {
  const pizzas = [
    {
      name: "Pizza Napolitana",
      ingredients: ["mozzarella", "tomates", "jamón", "orégano"],
      price: 5950,
      img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c"
    },
    {
      name: "Pizza Española",
      ingredients: ["mozzarella", "gorgonzola", "parmesano", "provolone"],
      price: 6950,
      img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab"
    },
    {
      name: "Pizza Pepperoni",
      ingredients: ["mozzarella", "pepperoni", "orégano"],
      price: 6950,
      img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-ac54-90f6c31eb3e3"
    }
  ]

  return (
    <div className="container">
      {/* Banner */}
      <div className="row mb-5">
        <div className="col-12">
          <div className="card bg-dark text-white">
            <img 
              src="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c" 
              className="card-img" 
              alt="Pizza" 
              style={{height: '400px', objectFit: 'cover', opacity: '0.7'}}
            />
            <div className="card-img-overlay d-flex align-items-center justify-content-center">
              <div className="text-center">
                <h2 className="card-title display-3 fw-bold">¡Pizzería Mamma Mía!</h2>
                <p className="card-text fs-4">¡Tenemos las mejores pizzas que podrás encontrar!</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pizzas Grid */}
      <div className="row">
        {pizzas.map((pizza, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card h-100 shadow">
              <img 
                src={pizza.img} 
                className="card-img-top" 
                alt={pizza.name}
                style={{height: '250px', objectFit: 'cover'}}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title border-bottom pb-2">{pizza.name}</h5>
                <div className="mb-3">
                  <h6 className="text-muted mb-2">🍕 Ingredientes:</h6>
                  <ul className="list-unstyled">
                    {pizza.ingredients.map((ingredient, i) => (
                      <li key={i} className="text-capitalize">
                        <small>• {ingredient}</small>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-auto">
                  <div className="d-flex justify-content-between align-items-center">
                    <h4 className="text-success mb-0">
                      Precio: ${pizza.price.toLocaleString()}
                    </h4>
                  </div>
                  <div className="d-flex gap-2 mt-3">
                    <button className="btn btn-outline-dark btn-sm flex-fill">
                      👀 Ver Más
                    </button>
                    <button className="btn btn-dark btn-sm flex-fill">
                      🛒 Añadir
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home