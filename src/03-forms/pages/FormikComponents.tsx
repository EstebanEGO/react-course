import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';

export const FormikComponents = () => {

  return (
    <div>
        <h1>Formik Components Tutorial</h1>

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
                        <label htmlFor="firstName">First name</label>
                        <Field name="firstName" type="text" />
                        <ErrorMessage name="firstName" component="span" />
                        
                        <label htmlFor="lastName">Last name</label>
                        <Field name="lastName" type="text" />
                        <ErrorMessage name="lastName" component="span" />

                        <label htmlFor="email">Email</label>
                        <Field name="email" type="text" />
                        <ErrorMessage name="email" component="span" />

                        <label htmlFor="jobType">Job Type</label>
                        <Field name="jobType" as="select" >
                            <option value="">Pick something</option>
                            <option value="developer">Developer</option>
                            <option value="ux">UX</option>
                            <option value="it-senior">IT Senior</option>
                        </Field>
                        <ErrorMessage name="jobType" component="span" />

                        <label>
                            <Field name="terms" type="checkbox" />
                            Terms and conditions
                        </label>                        
                        <ErrorMessage name="terms" component="span" />

                        <button type="submit">Create</button>
                    </Form>
                )
            }
        </Formik>        
    </div>
  )
}
