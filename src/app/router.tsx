import { createBrowserRouter } from "react-router-dom";
import { MainPage } from "../pages/MainPage/MainPage";
import { PalettePage } from "../pages/PalettePage/PalettePage";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/palette",
    element: <PalettePage />,
  },
]);
