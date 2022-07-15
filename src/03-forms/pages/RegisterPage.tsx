import { FormEvent } from 'react';
import { useForm } from '../hooks/useForm';
import '../styles/styles.css';

export const RegisterPage = () => {

    const { formData, name, email, password1, password2, onChange, resetForm, isValidEmail } = useForm({
        name: '',
        email: '',
        password1: '',
        password2: ''
    });

    const onSubmit = ( event: FormEvent<HTMLFormElement> ) => {
        event.preventDefault();
    }

    return (
        <div>
            <h1>Register</h1>

            <form noValidate onSubmit={ onSubmit }>
                <input 
                    type="text" 
                    placeholder="Name"
                    value={ name }
                    name="name"
                    className={ `${ name.trim().length <= 0 && 'has-error' }` }                
                    onChange={ onChange }                        
                />
                { name.trim().length <= 0 && <span>Este campo es necesario</span> }
                <input 
                    type="email" 
                    placeholder="Email"
                    value={ email }
                    name="email"
                    className={ `${ !isValidEmail( email ) && 'has-error' }` }                
                    onChange={ onChange }                    
                />
                { !isValidEmail( email ) && <span>No es un email valido</span> }
                <input 
                    type="password" 
                    placeholder="Password"
                    value={ password1 }
                    name="password1"
                    onChange={ onChange }                    
                />
                { password1.trim().length <= 0 && <span>Este campo es necesario</span> }
                { password1.trim().length < 6 && password1.trim().length > 6 && <span>La contraseña debe tener 6 letras</span> }
                <input 
                    type="password" 
                    placeholder="Repeat password"
                    value={ password2 }
                    name="password2"
                    onChange={ onChange }                    
                />
                { password2.trim().length <= 0 && <span>Este campo es necesario</span> }
                { password2.trim().length > 0 && password1 !== password2 && <span>Las contraseñas deben de ser iguales</span> }
                <button type="submit">Create</button>
                <button type="button" onClick={ resetForm }>Reset</button>
            </form>
        </div>
    )
}
