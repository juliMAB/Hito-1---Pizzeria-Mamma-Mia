import { formatPrice } from '../utils/formatters'

const CardPizza = ({ pizza, onAdd }) => {
  const { name, price, ingredients, img } = pizza

  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow">
        <img 
          src={img} 
          className="card-img-top pizza-img" 
          alt={name}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title border-bottom pb-2">Pizza {name}</h5>
          <div className="mb-3">
            <h6 className="text-muted mb-2">🍕 Ingredientes:</h6>
            <ul className="list-unstyled">
              {ingredients.map((ingredient) => (
                <li key={ingredient} className="text-capitalize">
                  <small>• {ingredient}</small>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-auto">
            <div className="d-flex justify-content-between align-items-center">
              <h4 className="text-success mb-0">
                Precio: {formatPrice(price)}
              </h4>
            </div>
            <div className="d-flex gap-2 mt-3">
              <button type="button" className="btn btn-outline-dark btn-sm flex-fill">
                👀 Ver Más
              </button>
              <button
                type="button"
                className="btn btn-dark btn-sm flex-fill"
                onClick={() => onAdd(pizza)}
              >
                🛒 Añadir
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardPizza