export default function Footer() {
  const hours = new Date().getHours();
  console.log(hours);
  const openHour = 12;
  const closeHour = 22;
  const printMessage = hours >= openHour && hours <= closeHour;

  //   ? "We're Open Currently, till 10pm"
  //   : "Sorry :(, We closed Currently till tommorrow 12pm";
  console.log(printMessage);
  //   if (hours >= openHour && hours <= closeHour) {
  //     printMessage = "We're Open Currently, till 10pm";
  //   } else {
  //     printMessage = "Sorry :(, We closed Currendly till tommorrow 12pm";
  //   }
  return (
    <footer className="footer">
      {printMessage ? (
        <div className="order">
          <p>
            We are open currently untill 10pm. Please visit store or Order
            online
          </p>
          <button className="btn">Order Now</button>
        </div>
      ) : (
        <p>Sorry :(, We closed Currently till tommorrow 12pm</p>
      )}
    </footer>
  );
}
