import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { MyCheckbox, MySelect, MyTextInput } from '../components';
import '../styles/styles.css';

export const RegisterFormikPage = () => {

    return (
        <div>
            <h1>Register Formik Page</h1>

            <Formik 
                initialValues={{
                    name: '',                    
                    email: '',
                    password1: '',
                    password2: ''
                }}
                onSubmit={ values => {
                    console.log( values );
                }}
                validationSchema={
                    Yup.object({
                        name: Yup.string()
                                    .max( 15, 'Debe tener 15 caractares o menos' )
                                    .min( 2, 'Debe tener minimo 2 caracteres' )
                                    .required( 'Requerido' ),
                        email: Yup.string()
                                .email( 'Formato del correo es invalido' )
                                .required( 'Requerido' ),
                        password1: Yup.string()
                                    .min( 6, 'Debe tener minimo 6 carateres' )
                                    .required(),
                        password2: Yup.string()
                                    .min( 6, 'Debe tener minimo 6 carateres' )
                                    .oneOf([ Yup.ref( 'password1' ) ], 'Las contraseñas no son iguales')
                                    .required( 'Requerido' )
                    })
                }
            >
                {
                    ( { handleReset } ) => (
                        <Form>
                            <MyTextInput label='Full name' name='name' placeholder='Full name'/>

                            <MyTextInput label='Email' name='email' type='email'/>
                            
                            <MyTextInput label='Password' name='password1' type='password'/>

                            <MyTextInput label='Repeat Password' name='password2' type='password'/>                    

                            <button type="submit">Register</button>
                            <button type="button" onClick={ handleReset }>Reset</button>
                        </Form>
                    )
                }
            </Formik>            
        </div>
    )
}
