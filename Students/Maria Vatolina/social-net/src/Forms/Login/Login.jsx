import React from 'react'
import { Field, reduxForm } from 'redux-form'

const LoginForm = (props) => {
   return (
      <form onSubmit={props.handleSubmit}>
         <div>
            <Field placeholder={'Login'} name={'login'} component={'input'} type="text"/>
         </div>
         <div>            
            <Field placeholder={'Password'} name={'Password'} component={'input'} type="text"/>
         </div>
         <div>
            <Field name={'RememberMe'} component={'input'} type="checkbox"/> Remember me
         </div>
         <div>
            <button>Login</button>
         </div>
      </form>
   )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = () => {
   const onSubmit = (formData) => {
      console.log(formData);
   }
   return <div>
      <h1>LOGIN</h1>
      <LoginReduxForm
       onSubmit={onSubmit}
       />
   </div>
}
export default Login


 