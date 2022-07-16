import { Formik, Form } from 'formik';
import { MySelect, MyTextInput } from '../components';
import * as Yup from 'yup';
import formJson from '../data/custom-form.json';

const initialValues: { [ key:string ]: any } = {};
const requiredFields: { [ key:string ]: any } = {};

for ( const input of formJson ) {
    initialValues[ input.name ] = input.value;
    if ( !input.validations) continue;
    
    let schema = Yup.string();
    for ( const rule of input.validations ) {
        if ( rule.type === 'required' ) {
            schema = schema.required( 'Texto Requerido' );
        }

        if ( rule.type === 'minLength' ) {
            schema = schema.min( (rule as any).value || 2, 'Este campo debe tener mas de 5 caracteres' );
        }

        if ( rule.type === 'email' ) {
            schema = schema.email( 'Formato invalido' );
        }
    }
    requiredFields[ input.name ] = schema;
}

const validationSchema = Yup.object({ ...requiredFields });

export const DynamicForm = () => {
  return (
    <div>
        <h1>Dynamic Form</h1>

        <Formik
            initialValues={ initialValues }
            onSubmit={ values => {
                console.log( values );
            } }
            validationSchema={ validationSchema }
        >
            {
                ( formik ) => (
                    <Form noValidate>
                        {
                            formJson.map( ({ type, name, label, options }) => {
                                if ( type === 'select' ) {
                                    return <MySelect
                                        key={ name }
                                        name={ name }
                                        label={ label }
                                    >
                                        <option value="">Select an option</option>
                                        {
                                            options?.map( ( { id, label } ) => (
                                                <option 
                                                    key={ id } 
                                                    value={ id }
                                                >
                                                    { label }
                                                </option>
                                            ))
                                        }
                                    </MySelect>
                                }
                                return <MyTextInput 
                                    key={ name } 
                                    type={ type as any } 
                                    name={ name } 
                                    label={ label }
                                />
                            })
                        }
                        <button type="submit">Create</button>
                    </Form>                    
                )
            }
        </Formik>
    </div>
  )
}
