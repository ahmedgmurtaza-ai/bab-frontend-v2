import { createRoot } from "react-dom/client";
import "./style.css";
import { Header, Counter, Button } from "@repo/ui";

const App = () => (
  <div>
    <Header title="Bank AlBilad FE Starter" />
    <Button size="large">helloworld</Button>
    <div className="card">
      <Counter />
    </div>
  </div>
);

createRoot(document.getElementById("app")!).render(<App />);
