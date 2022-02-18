import logoImg from "../img/bin-ance_logo.png";
import creditImg from "../img/credit.png";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <img alt="bin-ance" src={logoImg} className="header__logo-img" />
      <img
        alt="powered by the Binance API"
        src={creditImg}
        className="header__credit-img"
      />
    </header>
  );
}
