import ReactDOM from "react-dom/client";
import { HeaderComponent } from "./src/Header";
import { BodyComponent } from "./src/BodyComponent";

const AppLayout = () => {
  return (
    <div className="app">
      <HeaderComponent />
      <BodyComponent />
      {/* <Footer /> */}
    </div>
  );
};
const rootEllemet = ReactDOM.createRoot(document.getElementById("root"));

rootEllemet.render(<AppLayout />);
