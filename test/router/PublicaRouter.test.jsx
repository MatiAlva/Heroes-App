import { render, screen } from "@testing-library/react"
import { MemoryRouter, Route, Routes } from "react-router-dom"
import { AuthContext } from "../../src/auth"
import { PublicaRouter } from "../../src/router/PublicaRouter"

describe('Pruebas en <PublicaRouter />', () => {

    test('Debe de mostrar el children si no esta autenticado', () => {

        const contextValue = {
            logged: false
        }

        render(
            <AuthContext.Provider value={contextValue}>
                <PublicaRouter>
                    <h1>Ruta Publica</h1>
                </PublicaRouter>
            </AuthContext.Provider>
        )
        screen.debug()
        expect(screen.getByText('Ruta Publica')).toBeTruthy()
    })

    test('Debe de navegar si esta autenticado', () => {

        const contextValue = {
            logged: true,
            user: {
                id: 123,
                name: 'MATUTE'
            }
        }

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/login']}> {/*Ruta en la que me encuentro*/}
                    <Routes>
                        <Route path="/login" element={
                            <PublicaRouter>
                                <h1>Ruta Publica</h1>
                            </PublicaRouter>
                        } />
                        <Route path="/marvel" element={<h1>Pagina Marvel</h1>} />
                    </Routes>
                </MemoryRouter>
            </AuthContext.Provider>
        )
        screen.debug()
        expect(screen.getByText('Pagina Marvel')).toBeTruthy()
    })
})