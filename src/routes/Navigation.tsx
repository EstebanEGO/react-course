import { BrowserRouter, Navigate, NavLink, Route, Routes } from "react-router-dom"
import { 
    FormikAbstraction, FormikBasicPage, FormikComponents, 
    FormikYupPage, RegisterPage, DynamicForm
} from "../03-forms/pages";


import logo from "../logo.svg";
import { RegisterFormikPage } from '../03-forms/pages/RegisterFormikPage';

export const Navigation = () => {
    return (
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={ logo }/>
                    <ul>
                        <li>
                            <NavLink to={ '/' } className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Shopping</NavLink>                                                 
                        </li>
                        <li>
                            <NavLink to={ '/register' } className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Register Page</NavLink>                                                 
                        </li>
                        <li>
                            <NavLink to={ '/formik-basic' } className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Formik basic</NavLink>                                                 
                        </li>
                        <li>
                            <NavLink to={ '/formik-yup' } className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Formik Yup</NavLink>                                                 
                        </li>
                        <li>
                            <NavLink to={ '/formik-components' } className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Formik Components</NavLink>                                                 
                        </li>
                        <li>
                            <NavLink to={ '/formik-abstraction' } className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Formik Abstraction</NavLink>                                                 
                        </li>
                        <li>
                            <NavLink to={ '/formik-register' } className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Formik Register</NavLink>                                                 
                        </li>
                        <li>
                            <NavLink to={ '/dynamic-form' } className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Dynamic Form</NavLink>                                                 
                        </li>
                    </ul>
                </nav>     
                <Routes>
                    <Route path={ '/formik-basic' } element={ <FormikBasicPage /> }/>    
                    <Route path={ '/formik-yup' } element={ <FormikYupPage /> }/>    
                    <Route path={ '/formik-components' } element={ <FormikComponents /> }/>    
                    <Route path={ '/formik-abstraction' } element={ <FormikAbstraction /> }/>    
                    <Route path={ '/formik-register' } element={ <RegisterFormikPage /> }/>                        
                    <Route path={ '/dynamic-form' } element={ <DynamicForm /> }/>    
                    <Route path={ '/' } element={ <h1>Home</h1> }/>    
                    <Route path={ '/register' } element={ <RegisterPage /> }/>    
                    <Route path="/*" element={ <Navigate to={ '/' } replace/> }/>    
                </Routes>           
            </div>
        </BrowserRouter>
    )
}