import Menu from "./Menu.js";
import Footer from "./Footer.js";

export default function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.in</h1>;
    </header>
  );
}
