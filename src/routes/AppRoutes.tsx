// Lib 
import { createBrowserRouter } from "react-router-dom";

// Components
import { MainLayOut } from "../layout/MainLayout";
import { PageNumber } from "../components/PageNumber/PageNumber";
import { TodosOsProdutos } from "../pages/Products/TodosOsProdutos/TodosOsProdutos";
import { Camisetas } from "../pages/Products/Camisetas/Camisetas";
import { Canecas } from "../pages/Products/Canecas/Canecas";
import { ViewProduct } from "../pages/ViewProduct/ViewProduct";
import { ViewPayment } from "../pages/ViewPayment/ViewPayment/ViewPayment";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayOut />,
        children: [{
            path: "/",
            element: (
                <>

                    <PageNumber />
                    <TodosOsProdutos />
                    <PageNumber />
                </>
            )
        }, {
            path: ":id",
            element: <ViewProduct />
        }, {
            path: "payment",
            element: <ViewPayment />
        }, {
            path: "camisetas",
            element: <Camisetas />,
        }, {
            path: "camisetas/:id",
            element: <ViewProduct />,
        }, {
            path: "canecas",
            element: <Canecas />,
        }, {
            path: "canecas/:id",
            element: <ViewProduct />,
        }],
    } , 
]);