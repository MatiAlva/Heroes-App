import { renderHook } from "@testing-library/react"
import { act } from "react-dom/test-utils"
import { useForm } from "../../../src/heroes/hooks/useForm"


describe('Pruebas en useForm', () => {

    const initialForm = {
        name: 'Matias',
    }

    test('Debe de regresar los valores por defecto', () => {

        const { result } = renderHook(() => useForm(initialForm))
        // console.log(result.current)

        expect(result.current).toEqual({
            name: initialForm.name,
            formState: initialForm,
            onResetForm: expect.any(Function),
            onInputChange: expect.any(Function)
        })
    })



    test('Debe de cambiar el nombre del formulario', () => {

        const newValue = 'Juan'
        const { result } = renderHook(() => useForm(initialForm))
        const { onInputChange } = result.current

        act(() => {
            onInputChange({ target: { name: 'name', value: newValue } })
        })

        expect(result.current.name).toBe(newValue)
        expect(result.current.formState.name).toBe(newValue)

    })

    test('Debe de realizar el reset del formulario', () => {

        const newValue = 'Juan'
        const { result } = renderHook(() => useForm(initialForm))
        const { onInputChange, onResetForm } = result.current

        act(() => {
            onInputChange({ target: { name: 'name', value: newValue } })
            onResetForm()
        })

        expect(result.current.name).toBe(initialForm.name)
        expect(result.current.formState.name).toBe(initialForm.name)

    })

})