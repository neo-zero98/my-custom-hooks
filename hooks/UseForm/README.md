#UseForm

Ejemplo de UseForm:
```
const initialForm = {
    name: '',
    email: '',
    password:''
}
 const [values, handleInputChange, reset] = useForm(initialForm);
```