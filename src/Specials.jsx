import greekSalad from './assets/icons_assets/greek salad.jpg';
import bruchetta from './assets/icons_assets/bruchetta.svg';
import lemonDessert from './assets/icons_assets/lemon dessert.jpg';

function Specials() {
    const meals = [
        {
            id: 1,
            title: "Greek Salad",
            price: "$12.99",
            description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
            image: greekSalad
        },
        {
            id: 2,
            title: "Bruchetta",
            price: "$5.99",
            description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
            image: bruchetta
        },
        {
            id: 3,
            title: "Lemon Dessert",
            price: "$5.00",
            description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
            image: lemonDessert
        }
    ];

    return (
        <section className="specials">
            <div className="specials-header">
                <h1>This week's specials!</h1>
                <button>Online Menu</button>
            </div>
            <div className="specials-cards">
                {meals.map(meal => (
                    <div key={meal.id} className="card">
                        <img src={meal.image} alt={meal.title} />
                        <div className="card-content">
                            <h3>{meal.title} <span>{meal.price}</span></h3>
                            <p>{meal.description}</p>
                            <button>Order a delivery</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Specials;