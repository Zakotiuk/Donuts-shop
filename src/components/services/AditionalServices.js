export default class AditionalServices{
    static async getRules(){
        let partner_rules = [
            {
                "name": "Choose types of donuts",
                "points": [
                    "we have different toppings",
                    "the design is chosen individually",
                    "choose a donut size",
                    "the box is also important"
                ]
            },
            {
                "name": "Make a delivery",
                "points": [
                    "enter personal data",
                    "choose a convenient delivery type",
                    "we provide free delivery from UAH 500",
                    "wait for your order"
                ]
            },
            {
                "name": "Enjoy!",
                "points": [
                    "we use only natural dyes",
                    "the taste is absolutely original and unique",
                    "the box can be recycled",
                    "don't eat your fingers!)"
                ]
            }
        ];
        return partner_rules;
    }

    static async getContatcts(){
        let contacts = [
            {
                "name": "email",
                "info": "donuts2015@gmail.com"
            },
            {
                "name": "telephone",
                "info": "+38097554315"
            },
            {
                "name": "address",
                "info": "Kyiv, st. Sobornostii 230. Ukraine, 036782"
            }
        ];
        return contacts;
    }

    static async getCategories(){
        let categories =  [
            {
                "name": "all",
                "img" : "https://i.pinimg.com/236x/5b/df/db/5bdfdbfd21e86dc67323ef916dd15cf9.jpg"
            },
            {
                "name": "simple",
                "img" : "https://i.pinimg.com/564x/53/05/0c/53050c5d1cead282481a81352eb9167c.jpg"
            },
            {
                "name": "glazed",
                "img" : "https://i.pinimg.com/564x/66/17/1c/66171cb19731bb8ea1255402a99d19ee.jpg"
            },
            {
                "name": "patyes",
                "img" : "https://i.pinimg.com/564x/0e/ae/ee/0eaeee79037e00d6e96ac4e59e40fef6.jpg"
            },
            {
                "name": "special",
                "img" : "https://i.pinimg.com/564x/08/24/61/082461cbb493c8d439b23158c6afa04f.jpg"
            }
        ]
        return categories;
    }
}