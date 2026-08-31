import CardPizza from './CardPizza'
import pizzas from '../data/pizzas'

const Home = ({ onAdd }) => {
  return (
    <div className="container">
      {/* Banner */}
      <div className="row mb-5">
        <div className="col-12">
          <div className="card bg-dark text-white">
            <img 
              src={pizzas[0].img} 
              className="card-img banner-img" 
              alt="Pizza" 
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
        {pizzas.map((pizza) => (
          <CardPizza
            key={pizza.id}
            pizza={pizza}
            onAdd={onAdd}
          />
        ))}
      </div>
    </div>
  )
}

export default Home