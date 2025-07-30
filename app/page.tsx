import "../style/homePage.scss";
import Desktop from "../components/desktop";
import Moblie from "../components/mobile";

export default function Home() {
  return (
    <div>
      <div className="desktop-container">
        <Desktop />
      </div>
      <div className="mobile-container">
        <Moblie />
      </div>
    </div>
  );
}
