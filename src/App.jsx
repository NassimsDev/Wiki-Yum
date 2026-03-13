import { RouterProvider } from "react-router-dom";
import { router } from "./router";

function App() {
    return (
        // Active les routes définies dans router.jsx
        <RouterProvider router={router} />
    );
}

export default App;
