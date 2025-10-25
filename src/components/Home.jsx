import CardPizza from './CardPizza'

const Home = () => {
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
        <CardPizza
          name="Napolitana"
          price={5950}
          ingredients={["mozzarella", "tomates", "jamón", "orégano"]}
          img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c"
        />
        <CardPizza
          name="Española"
          price={6950}
          ingredients={["mozzarella", "gorgonzola", "parmesano", "provolone"]}
          img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab"
        />
        <CardPizza
          name="Pepperoni"
          price={6950}
          ingredients={["mozzarella", "pepperoni", "orégano"]}
          img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-ac54-90f6c31eb3e3"
        />
      </div>
    </div>
  )
}

export default Home