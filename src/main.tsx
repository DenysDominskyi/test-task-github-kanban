import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { store } from "./store/store.ts";
import { Provider } from "react-redux";
import { Provider as ChackraProvider }  from "@/components/ui/provider"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <ChackraProvider>
        <App />
      </ChackraProvider>
    </Provider>
  </StrictMode>
);
