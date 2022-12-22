import { render } from "@testing-library/react"
import { authReducer } from "../../../src/auth/context/authReducer"
import { types } from "../../../src/auth/types/types"

describe('Prueba en <authReducer />', () => {

    test('Debe de retornar el estado por defecto', () => {

        const state = authReducer({ logged: false }, {})

        expect(state).toEqual({ logged: false })

    })

    test('Debe de (login) llamar el login autenticar y establecer el user', () => {
        const action = {
            type: types.login,
            payload: {
                name: 'Juan',
                id: '123'
            }
        }

        const state = authReducer({ logged: false }, action)
        expect(state).toEqual({
            logged: true,
            user: action.payload
        })
    })


    test('Debe de (logout) borrar el name del usuario y logged el false', () => {
        const state = {
            logged: true,
            user: { id: '123', name: 'Juan' }
        }

        const action = {
            type: types.logout
        }

        const newState = authReducer(state, action)
        // console.log(newState)
        expect(newState).toEqual({ logged: false })
    })
})