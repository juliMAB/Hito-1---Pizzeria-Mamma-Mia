import pizzaNapolitana from '../assets/pizza-napolitana.jpg'
import pizzaEspanola from '../assets/pizza-espanola.jpg'
import pizzaPepperoni from '../assets/pizza-pepperoni.jpg'

const pizzas = [
  {
    id: 1,
    name: 'Napolitana',
    price: 5950,
    ingredients: ['mozzarella', 'tomates', 'jamón', 'orégano'],
    img: pizzaNapolitana,
  },
  {
    id: 2,
    name: 'Española',
    price: 6950,
    ingredients: ['mozzarella', 'gorgonzola', 'parmesano', 'provolone'],
    img: pizzaEspanola,
  },
  {
    id: 3,
    name: 'Pepperoni',
    price: 6950,
    ingredients: ['mozzarella', 'pepperoni', 'orégano'],
    img: pizzaPepperoni,
  },
]

export default pizzas