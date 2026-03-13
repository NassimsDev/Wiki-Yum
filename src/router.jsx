// Associe chaque URL à sa page
import { createBrowserRouter } from "react-router-dom"
import { BoxPage } from "./pages/BoxPage/BoxPage"
import { MenuPage } from "./pages/MenuPage/MenuPage"
import { ZoomPage } from "./pages/ZoomPage/ZoomPage"
import { MealPage } from "./pages/MealPage/MealPage"
import { QuizPage } from "./pages/QuizPage/QuizPage"

export const router = createBrowserRouter([
  { path: "/box", element: <BoxPage /> },
  { path: "/menu/:box", element: <MenuPage /> },
  { path: "/zoom/:box/:course", element: <ZoomPage /> },
  { path: "/meal/:box/:course", element: <MealPage /> },
  { path: "/quiz/:box/:course", element: <QuizPage /> },
])
