// Lib
import { RouterProvider } from "react-router-dom"

// Router
import { router } from "./routes/AppRoutes"

// CSS
import './style/index.css'
import './style/global.css'
import './style/variables.css'

export function App() {
    return (
        <RouterProvider router={router} />
    )
}