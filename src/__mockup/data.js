import { v4 as uuidv4 } from 'uuid';

export const categories = [
    {
        id: uuidv4(),
        name: 'Postres',
        icon: 'cake',
        type: 'dessert',
        active: true,
    },
    {
        id: uuidv4(),
        name: 'Bebidas',
        icon: 'glass2',
        type: 'drink',
        active: false,
    },
    {
        id: uuidv4(),
        name: 'Empanadas',
        icon: 'spoon-knife',
        type: 'meal',
        active: false,
    },
    {
        id: uuidv4(),
        name: 'Pizzas',
        icon: 'local_pizza',
        type: 'meal',
        active: false,
    }
];

export const products = [
    {
        id: uuidv4(),
        name: 'Almendrado',
        price: 350,
        type: 'dessert'
    },
    {
        id: uuidv4(),
        name: 'Bombones',
        price: 500,
        type: 'dessert'
    },
    {
        id: uuidv4(),
        name: 'Chocotorta',
        price: 720,
        type: 'dessert'
    },
    {
        id: uuidv4(),
        name: 'Helado',
        price: 400,
        type: 'dessert'
    }
];