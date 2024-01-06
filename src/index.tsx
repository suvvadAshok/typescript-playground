import { createRoot } from "react-dom/client";
import invariant from "tiny-invariant";
import { App } from "./App";

declare const module: {
  hot: {
    accept: () => void;
  };
};

if (module.hot) {
  module.hot.accept();
}

const rootElement = document.getElementById("root");
invariant(rootElement, "root element undefined");

const root = createRoot(rootElement);

root.render(<App />);
