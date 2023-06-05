import {
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from "react-router-dom";
import App from "./App";
import Descobrir from "./Descobrir";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/">
          <Route index element={<App />} />
          <Route path="descobrir" element={<Descobrir />} />
        </Route>
      )
);