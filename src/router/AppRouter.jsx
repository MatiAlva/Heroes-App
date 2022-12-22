import { Route, Routes } from "react-router-dom"
import { LoginPage } from "../auth"
import { HeroesRoutes, } from "../heroes"
import { PrivadaRouter } from "./PrivadaRouter"
import { PublicaRouter } from "./PublicaRouter"

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/login" element={
                    <PublicaRouter>
                        <LoginPage />
                    </PublicaRouter>}
                />

                <Route path="/*" element={
                    <PrivadaRouter>
                        <HeroesRoutes />
                    </PrivadaRouter>}
                />
            </Routes>
        </>
    )
}
