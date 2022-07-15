import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { MyCheckbox, MySelect, MyTextInput } from '../components';

import '../styles/styles.css';

export const FormikAbstraction = () => {

  return (
    <div>
        <h1>Formik Abstraction Tutorial</h1>

        <Formik 
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                terms: false,
                jobType: ''
            }}
            onSubmit={ values => {
                console.log( values );
            }}
            validationSchema={
                Yup.object({
                    firstName: Yup.string()
                                .max( 15, 'Debe tener 15 caractares o menos' )
                                .required( 'Requerido' ),
                    lastName: Yup.string()
                                .max( 10, 'Debe tener 10 caracteres' )
                                .required( 'Requerido' ),
                    email: Yup.string()
                            .email( 'Formato del correo es invalido' )
                            .required( 'Requerido' ),
                    terms: Yup.boolean()
                            .oneOf( [ true ], 'Debe aceptar los terminos y condiciones' ),
                    jobType: Yup.string()
                                .required( 'Requerido' )
                })
            }
        >
            {
                formik => (
                    <Form>
                        <MyTextInput label='First Name' name='firstName' placeholder='First name'/>
                        
                        <MyTextInput label='Last Name' name='lastName'/>

                        <MyTextInput label='Email' name='email' type='email'/>
                        
                        <MySelect label='Job Type' name="jobType" >
                            <option value="">Pick something</option>
                            <option value="developer">Developer</option>
                            <option value="ux">UX</option>
                            <option value="it-senior">IT Senior</option>
                        </MySelect>

                        <MyCheckbox label='Terms and conditions' name='terms' />                        

                        <button type="submit">Create</button>
                    </Form>
                )
            }
        </Formik>        
    </div>
  )
}
