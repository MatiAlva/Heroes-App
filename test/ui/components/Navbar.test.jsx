import { fireEvent, render, screen } from "@testing-library/react"
import { MemoryRouter, useNavigate } from "react-router-dom"
import { AuthContext, AuthProvider } from "../../../src/auth"
import { Navbar } from "../../../src/ui"

const mockUsernavigate = jest.fn()

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockUsernavigate
}))

describe('Pruebas en <Navbar />', () => {

    const constextValue = {
        logged: true,
        user: {
            name: 'Matias'
        },
        logout: jest.fn()
    }

    beforeEach(() => jest.clearAllMocks())

    test('Debe de motrar el nombre del usuario', () => {
        render(
            <AuthContext.Provider value={constextValue}>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        )
        screen.debug()
        expect(screen.getByText('Matias')).toBeTruthy()
    })

    test('Debe de llamar el loggout y navigate cuando se hace click en el boton', () => {

        render(
            <AuthContext.Provider value={constextValue}>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        )

        const logoutButn = screen.getByLabelText('btn')
        fireEvent.click(logoutButn)

        expect(constextValue.logout).toHaveBeenCalled()
        expect(mockUsernavigate).toHaveBeenCalledWith("/login", { "replace": true })

    })
})
