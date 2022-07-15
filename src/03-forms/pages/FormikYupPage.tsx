import { useFormik } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';

export const FormikYupPage = () => {

    const { 
        errors, touched, 
        handleSubmit, getFieldProps
    } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: ''
        },
        onSubmit: values => {
            console.log( values );
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                        .max( 15, 'Debe tener 15 caractares o menos' )
                        .required( 'Requerido' ),
            lastName: Yup.string()
                        .max( 10, 'Debe tener 10 caracteres' )
                        .required( 'Requerido' ),
            email: Yup.string()
                    .email( 'Formato del correo es invalido' )
                    .required( 'Requerido' )
        })
    });

  return (
    <div>
        <h1>Formik Yup Tutorial</h1>
        <form noValidate onSubmit={ handleSubmit }>
            <label htmlFor="firstName">First name</label>
            <input 
                type="text" 
                { ...getFieldProps( 'firstName' ) }
            />
            { touched.firstName && errors.firstName && <span>{ errors.firstName }</span> }
            <label htmlFor="lastName">Last name</label>
            <input 
                type="text" 
                { ...getFieldProps( 'lastName' ) }
            />
            { touched.lastName && errors.lastName && <span>{ errors.lastName }</span> }
            <label htmlFor="email">Email</label>
            <input 
                type="email" 
                { ...getFieldProps( 'email' ) }                
            />
            { touched.email && errors.email && <span>{ errors.email }</span> }            
            <button type="submit">Create</button>
        </form>
    </div>
  )
}
