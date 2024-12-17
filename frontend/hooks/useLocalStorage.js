import { useState } from "react";

export function useLocalStorage(key, value) {
    const [v, setV] = useState(() => {
        const initial = localStorage.getItem(key)
        return initial ? JSON.parse(initial) : value
    })
    const setValuesLS = value => {
        setV(value)
        localStorage.setItem(key, JSON. stringify(value))
    }
    return [v, setValuesLS]
}