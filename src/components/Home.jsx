import CardPizza from './CardPizza'
import pizzaNapolitana from '../assets/pizza-napolitana.jpg'
import pizzaEspanola from '../assets/pizza-espanola.jpg'
import pizzaPepperoni from '../assets/pizza-pepperoni.jpg'

const Home = () => {
  return (
    <div className="container">
      {/* Banner */}
      <div className="row mb-5">
        <div className="col-12">
          <div className="card bg-dark text-white">
            <img 
              src={pizzaNapolitana} 
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
        <CardPizza
          name="Napolitana"
          price={5950}
          ingredients={["mozzarella", "tomates", "jamón", "orégano"]}
          img={pizzaNapolitana}
        />
        <CardPizza
          name="Española"
          price={6950}
          ingredients={["mozzarella", "gorgonzola", "parmesano", "provolone"]}
          img={pizzaEspanola}
        />
        <CardPizza
          name="Pepperoni"
          price={6950}
          ingredients={["mozzarella", "pepperoni", "orégano"]}
          img={pizzaPepperoni}
        />
      </div>
    </div>
  )
}

export default Home