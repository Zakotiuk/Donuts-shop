import axios from "axios";

export default class DonutsServices{
    static async getDonuts(){
        let donuts = [{
            "name": "Simple",
            "img": "https://i.pinimg.com/564x/d4/66/36/d4663666d5cb48b91c8f6dbffbbbe373.jpg",
            "price": "30 UAH",
            "composition": "No tasty, simple dough",
            "category": "simple"
        },{
            "name": "Salty",
            "img": "https://i.pinimg.com/564x/13/32/57/133257ca125c8f648874c55347764ce2.jpg",
            "price": "30 UAH",
            "composition": "Salty, without decoration",
            "category": "simple"
        },
        {
            "name": "Sweet",
            "img": "https://i.pinimg.com/236x/fd/32/83/fd3283a99707dd12ff32f7e4de4a88fb.jpg",
            "price": "30 UAH",
            "composition": "Sweet, without decoration",
            "category": "simple"
        },
        {
            "name": "Pink with petals",
            "img": "https://i.pinimg.com/564x/5d/ee/04/5dee04f1cee19cfcc94a968401767dfc.jpg",
            "price": "50 UAH",
            "composition": "Sweet, with raspberry taste",
            "category": "glazed"
        },
        {
            "name": "White with becon",
            "img": "https://i.pinimg.com/564x/06/25/3e/06253ea3e106ae01403fce64af3c3293.jpg",
            "price": "55 UAH",
            "composition": "Salty, with becon",
            "category": "glazed"
        },
        {
            "name": "Beige with seeds",
            "img": "https://i.pinimg.com/564x/44/cb/7f/44cb7f86f4594fbd020266b08c642d37.jpg",
            "price": "50 UAH",
            "composition": "Sweet, with seeds and shavings",
            "category": "glazed"
        },
        {
            "name": "White with lemon",
            "img": "https://i.pinimg.com/564x/e9/e2/08/e9e208b47959c70f8ead5be05793726f.jpg",
            "price": "45 UAH",
            "composition": "Sweet and sour with lemon, with becon",
            "category": "glazed"
        },
        {
            "name": "Dark with marshmallow",
            "img": "https://i.pinimg.com/564x/a8/5f/5e/a85f5eb65b2314f683a1a42c41c55a2f.jpg",
            "price": "55 UAH",
            "composition": "Sweet, chocolate with marshmallow",
            "category": "glazed"
        },
        {
            "name": "Red Velvet",
            "img": "https://i.pinimg.com/564x/97/20/e9/9720e9e708c97322077adee8369bbe25.jpg",
            "price": "50 UAH",
            "composition": "Sweet, your favourite red velvet tasty",
            "category": "glazed"
        },
        {
            "name": "White with pretzels",
            "img": "https://i.pinimg.com/564x/24/2b/2b/242b2baaaec29a13141cb2f87f65504e.jpg",
            "price": "55 UAH",
            "composition": "Salty, caramel and chocolate",
            "category": "glazed"
        },
        {
            "name": "Colorful with flakes",
            "img": "https://i.pinimg.com/564x/0f/eb/3e/0feb3e48a225e19c4a20aa575a2d75b8.jpg",
            "price": "60 UAH",
            "composition": "Sweet and colorful",
            "category": "patyes"
        },
        {
            "name": "Colorful with caramels",
            "img": "https://i.pinimg.com/564x/f9/08/f6/f908f607565ae38dd03ca5feb2fde645.jpg",
            "price": "65 UAH",
            "composition": "Sweet and colorful",
            "category": "patyes"
        },
        {
            "name": "Pink with gold",
            "img": "https://i.pinimg.com/564x/a0/65/64/a065647c4c279321e3cde40578303a7c.jpg",
            "price": "60 UAH",
            "composition": "Sweet with gold",
            "category": "patyes"
        },
        {
            "name": "Bunny",
            "img": "https://i.pinimg.com/564x/48/24/ae/4824ae71365c06eade1d82babda38884.jpg",
            "price": "55 UAH",
            "composition": "Sweet and pretty",
            "category": "patyes"
        },
        {
            "name": "Quity frog",
            "img": "https://i.pinimg.com/564x/cd/1c/95/cd1c95314aa08da0bab7d6f8cb402fa1.jpg",
            "price": "55 UAH",
            "composition": "Sweet and pretty",
            "category": "patyes"
        },
        {
            "name": "White boho styles",
            "img": "https://i.pinimg.com/564x/5d/33/ec/5d33ecf1d3a8796266f6bb1f70cb0a4d.jpg",
            "price": "55 UAH",
            "composition": "Sweet and stylish",
            "category": "patyes"
        }]
        return donuts;
    }
}