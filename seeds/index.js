require('../config/database')
const Cart = require('../models/cart')
const Quote = require('../models/quote')

const store = [
	{
		quantity: 1,
		author: 'plato',
		image:
			'https://i0.wp.com/merionwest.com/wp-content/uploads/plato.jpg?resize=960%2C389&ssl=1',
		quote:
			'Music is a moral law. It gives soul to the universe, wings to the mind, flight to the imagination, and charm and gaiety to life and to everything.',
		price: 5
	},
	{
		quantity: 4,
		author: 'Allen Ginsberg',
		image:
			'https://longreadsblog.files.wordpress.com/2015/03/allen_ginsberg_675-2.jpg?w=1680',
		quote: `“Strange now to think of you, gone without corsets & eyes, while I walk on
		the sunny pavement of Greenwich Village.
		downtown Manhattan, clear winter noon, and I've been up all night, talking,
		talking, reading the Kaddish aloud, listening to Ray Charles blues
		shout blind on the phonograph”`,
		price: 5
	},
	{
		quantity: 1,
		author: 'plato',
		image:
			'https://i0.wp.com/merionwest.com/wp-content/uploads/plato.jpg?resize=960%2C389&ssl=1',
		quote:
			'Music is a moral law. It gives soul to the universe, wings to the mind, flight to the imagination, and charm and gaiety to life and to everything.',
		price: 5
	},
	{
		quantity: 1,
		author: 'plato',
		image:
			'https://i0.wp.com/merionwest.com/wp-content/uploads/plato.jpg?resize=960%2C389&ssl=1',
		quote:
			'Music is a moral law. It gives soul to the universe, wings to the mind, flight to the imagination, and charm and gaiety to life and to everything.',
		price: 5
	},
	{
		quantity: 1,
		author: 'plato',
		image:
			'https://i0.wp.com/merionwest.com/wp-content/uploads/plato.jpg?resize=960%2C389&ssl=1',
		quote:
			'Music is a moral law. It gives soul to the universe, wings to the mind, flight to the imagination, and charm and gaiety to life and to everything.',
		price: 5
	},
	{
		quantity: 1,
		author: 'plato',
		image:
			'https://i0.wp.com/merionwest.com/wp-content/uploads/plato.jpg?resize=960%2C389&ssl=1',
		quote:
			'Music is a moral law. It gives soul to the universe, wings to the mind, flight to the imagination, and charm and gaiety to life and to everything.',
		price: 5
	},
	{
		quantity: 1,
		author: 'plato',
		image:
			'https://i0.wp.com/merionwest.com/wp-content/uploads/plato.jpg?resize=960%2C389&ssl=1',
		quote:
			'Music is a moral law. It gives soul to the universe, wings to the mind, flight to the imagination, and charm and gaiety to life and to everything.',
		price: 5
	},
	{
		quantity: 1,
		author: 'plato',
		image:
			'https://i0.wp.com/merionwest.com/wp-content/uploads/plato.jpg?resize=960%2C389&ssl=1',
		quote:
			'Music is a moral law. It gives soul to the universe, wings to the mind, flight to the imagination, and charm and gaiety to life and to everything.',
		price: 5
	},
	{
		quantity: 1,
		author: 'plato',
		image:
			'https://i0.wp.com/merionwest.com/wp-content/uploads/plato.jpg?resize=960%2C389&ssl=1',
		quote:
			'Music is a moral law. It gives soul to the universe, wings to the mind, flight to the imagination, and charm and gaiety to life and to everything.',
		price: 5
	},
	{
		quantity: 1,
		author: 'plato',
		image:
			'https://i0.wp.com/merionwest.com/wp-content/uploads/plato.jpg?resize=960%2C389&ssl=1',
		quote:
			'Music is a moral law. It gives soul to the universe, wings to the mind, flight to the imagination, and charm and gaiety to life and to everything.',
		price: 5
	}
]

const cart = [
	{
		quantity: 4,
		author: 'Allen Ginsberg',
		image:
			'https://longreadsblog.files.wordpress.com/2015/03/allen_ginsberg_675-2.jpg?w=1680',
		quote: `“Strange now to think of you, gone without corsets & eyes, 
		while I walk on 
		the sunny pavement of Greenwich Village. 
		downtown Manhattan, clear winter noon, and I've been up all night, talking,
		talking, reading the Kaddish aloud, listening to Ray Charles blues
		shout blind on the phonograph” `,
		price: 5
	}
]

async function seed(seedArray, doc) {
	let Doc = doc
	seedArray.forEach(async (item, index) => {
		try {
			const newSeed = new Doc({ ...item })
			const savedSeed = await newSeed.save()
			console.log(`item no : ${index} successfully seeded!
                ${savedSeed}
                `)
			return '\nSUCCESS'
		} catch (error) {
			throw new Error(error)
		}
	})
}

seed(cart, Cart)
seed(store, Quote)
