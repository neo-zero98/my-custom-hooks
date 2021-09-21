import { useState } from "react"


export const useForm = (initialState={}) => {
    const [values, setValue] = useState(initialState)
    
    const reset = () => {
        setValue(initialState);
    }

    const handleInputChange = (e) => {
        setValue({
            ...values,
            [e.target.name]: e.target.value
        });
    }

    return [values, handleInputChange, reset]
}
