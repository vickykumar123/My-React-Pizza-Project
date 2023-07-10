import Pizza from "./Pizza.js";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];
export default function Menu() {
  const pizzas = pizzaData;
  //   const pizzas = [];
  const pizzaLength = pizzas.length;

  return (
    <main className="menu">
      <h2>Pizza Menu</h2>
      {pizzaLength > 0 ? (
        <>
          <p>
            World Class authentic Italic Pizza for You. Made by Great Master
            Chefs
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We are still working on menu, Please come back later!!!</p>
      )}

      {/* <Pizza
            name="Pizza Spinaci"
            photoName="../pizzas/spinaci.jpg"
            ingredients="Tomato, mozarella, ham, aragula, and burrata cheese"
            price={12} //for keeping it as integers
          />
          <Pizza
            name="Pizza Salamin"
            photoName="../pizzas/salamino.jpg"
            ingredients="Tomato, mozarella, ham, aragula, and burrata cheese"
            price={15}
          /> */}
    </main>
  );
}
