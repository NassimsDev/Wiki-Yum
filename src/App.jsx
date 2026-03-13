import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { DesktopBanner } from "./components/DesktopBanner/DesktopBanner.jsx";

function App() {
    return (
        <>
            <DesktopBanner />
            <RouterProvider router={router} />
        </>
    );
}

export default App;
