// import './first_form.css'

// const FirstForm=(props)=>{
   
   
  
//     console.log(props.FormNo);
//     let display="block";
//     if(props.FormNo?.includes(1)){
//         console.log("yes");
//        display="none";
//     }
//     let validUserName = false;
//     let validEmail = false;
//     let validPassword = false;
//     let validConfirmPassword = false;
//     let passwordValue='';
//     let username=''

//     const validateUsername = (e) => {
        
     
        
//         const usernameEl=e.target;
//         const min = 3,max = 25;
//         username = usernameEl.value.trim();
    
//         if (!isRequired(username)) {
//             showError(usernameEl, 'Username cannot be blank.');
//             validUserName = false;
//         } else if (!isBetween(username.length, min, max)) {
//             showError(usernameEl, `Username must be between ${min} and ${max} characters.`)
//             validUserName = false;
//         } else {
//             showSuccess(usernameEl);
//             validUserName = true;
//         }
//         if(validUserName && validEmail && validPassword && validConfirmPassword) {
//             e.target.parentElement.parentElement.querySelector("#submitBtn").removeAttribute("disabled");
//         }
//     };
    
    
//     const validateEmail = (e) => {

//         const emailEl=e.target;
//         const email = emailEl.value.trim();

//         if (!isRequired(email)) {
//             showError(emailEl, 'Email cannot be blank.');
//             validEmail = false;
//         } else if (!isEmailValid(email)) {
//             showError(emailEl, 'Email is not valid.')
//             validEmail = false;
//         } else {
//             showSuccess(emailEl);
//             validEmail = true;
//         }
//         if(validUserName && validEmail && validPassword && validConfirmPassword) {
//             e.target.parentElement.parentElement.querySelector("#submitBtn").removeAttribute("disabled");
//         }
//     };
    
//     const validatePassword = (e) => {
//         const passwordEl = e.target;
//         const password = passwordEl.value.trim();
    
//         if (!isRequired(password)) {
//             showError(passwordEl, 'Password cannot be blank.');
//             validPassword = false;
//         } else if (!isPasswordSecure(password)) {
//             showError(passwordEl, 'Password must has at least 8 characters that include at least 1 lowercase etc.');
//             validPassword = false;
//         } else {
//             showSuccess(passwordEl);
//             passwordValue=password;
//             validPassword = true;
//         }
//         if(validUserName && validEmail && validPassword && validConfirmPassword) {
//             e.target.parentElement.parentElement.querySelector("#submitBtn").removeAttribute("disabled");
//         }
//     };
    
//     const validateConfirmPassword = (e) => {

//         const confirmPasswordEl=e.target;
//         const confirmPassword = confirmPasswordEl.value.trim();
//         // console.log(passwordValue);
//         const password = passwordValue.trim();
    
//         if (!isRequired(confirmPassword)) {
//             showError(confirmPasswordEl, 'Please enter the password again');
//             validConfirmPassword=false;
//         } else if (password !== confirmPassword) {
//             showError(confirmPasswordEl, 'The password does not match');
//             validConfirmPassword=false;
//         } else {
//             showSuccess(confirmPasswordEl);
//             validConfirmPassword = true;
//         }
//          if(validUserName && validEmail && validPassword && validConfirmPassword) {
//             e.target.parentElement.parentElement.querySelector("#submitBtn").removeAttribute("disabled");
//         }
//     };
    
//     const isEmailValid = (email) => {
//         const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//         return re.test(email);
//     };
    
//     const isPasswordSecure = (password) => {
//         const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
//         return re.test(password);
//     };
    
//     const isRequired = value => value === '' ? false : true;
//     const isBetween = (length, min, max) => length < min || length > max ? false : true;
    
    
//     const showError = (input, message) => {
//         const formField = input.parentElement;
//         formField.classList.remove('success');
//         formField.classList.add('error');
//         const error = formField.querySelector('small');
//         error.textContent = message;
//     };
    
//     const showSuccess = (input) => {
//         const formField = input.parentElement;
//         formField.classList.remove('error');
//         formField.classList.add('success');
//         const error = formField.querySelector('small');
//         error.textContent = '';
//     }
    
    
//   function firstFormValidatation(e){
//         e.preventDefault();
        

//         props.getFormNumber([1,3])
      
//         // let isUsernameValid = validUserName,
//         //     isEmailValid = validEmail,
//         //     isPasswordValid = validPassword,
//         //     isConfirmPasswordValid = validConfirmPassword
    
//         // let isFormValid = isUsernameValid &&
//         //     isEmailValid &&
//         //     isPasswordValid &&
//         //     isConfirmPasswordValid;
    
   
//         // if (isFormValid) {
//         //     // alert('Login Successfully');
          
//         //     localStorage.setItem('username', username)
//         //     console.log(username);

//         //     // return(
//         //     //     <>
//         //     //          <Routes>
//         //     //             <Route path='Home' element={
//         //     //                <ProtectedRoute user={username}>
//         //     //                  <Home/>
//         //     //                </ProtectedRoute>
//         //     //             }>
//         //     //             </Route>
//         //     //          </Routes>
//         //     //     </>
//         //     // )
//         // //    navigate('/Home')
//         // }
//         // else{
//         //     alert('please fill the form according to given instructions');
//         // }
//   }
    
   
//     return(
//         <div   >
//     <form className="form" id='first-form' style={{display: `${display}`}} onSubmit={firstFormValidatation}>
//       <div className="title">First Form</div>
//       <div className="subtitle">Let's create your account!</div>
//       <div className="input-container ic1">
//         <input id="firstname" className="input" type="text" onChange={validateUsername} placeholder="Name"/>
//         {/* <div className="cut"></div>
//         <label for="firstname" className="placeholder">Name</label> */}
//         <small></small>
//       </div>
//       <div className="input-container ic2">
//         <input id="lastname" className="input" onChange={validateEmail} type="email" placeholder="Email " />
//         {/* <div className="cut"></div>
//         <label for="lastname" className="placeholder">Email</label> */}
//         <small></small>
//       </div>
//       <div className="input-container ic2">
//         <input id="email" className="input" onChange={validatePassword} type="password" placeholder="Password " />
//         {/* <div className="cut cut-short"></div>
//         <label for="email" className="placeholder">Password</label> */}
//         <small style={{fontSize:'10px'}}></small>
//       </div>

//       <div className="input-container ic2">
//         <input id="email" className="input" onChange={validateConfirmPassword} type="password" placeholder="Confirm Password " />
//         {/* <div className="cut cut-short"></div>
//         <label for="email" className="placeholder">Confirm Password</label> */}
//         <small></small>
//       </div>

//       <button disabled id='submitBtn' type="text" className="submit">submit</button>
//     </form>
//     </div>
//     )
// }
// export default FirstForm;

import './firstForm.css';
import { Button, Form, Input} from 'antd';
import { useState } from 'react';
import React from 'react';

const FirstForm = (props) => {
 
      let display="block";
    if(props.FormNo?.includes(1)){
        // console.log("yes");
       display="none";
    }
  
  const onFinish = (values) => {
    console.log(values);
    props.setData(values)
    props.getFormNumber([1,3])
  };
  const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
  const shouldShowError = true;

  const emailRigex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const fieldError='password does not match the criteria';


  const [btndisabled, setbtndisabled] = useState(true);
  const onValuesChange = (changedValues, allValues) => {
    // console.log(allValues);
    // console.log(allValues.fullName.length>=3);
    // console.log(emailRigex.test(allValues.email));
    // console.log(re.test(allValues.password));
    // console.log(allValues.confirmPassword===allValues.password);
    // console.log(allValues.confirmPassword!==undefined);
    // console.log(allValues.password!==undefined);
    // console.log(allValues.password!=='');
    // console.log(allValues.confirmPassword!=='');

    const condition1=allValues.fullName.length>=3;
    const condition2=emailRigex.test(allValues.email);
    const condition3=re.test(allValues.password)
    const condition4=allValues.confirmPassword===allValues.password;
    const condition5=allValues.confirmPassword!==undefined;
    const condition6=allValues.password!==undefined
    const condition7=allValues.password!==''
    const condition8=allValues.confirmPassword!==''

    // console.log(condition1, condition2, condition3, condition4, condition5, condition6, condition7, condition8);
    // console.log(allValues.fullName.lenght>=3 && emailRigex.test(allValues.email) && re.test(allValues.password) && (allValues.confirmPassword===allValues.password) && allValues.confirmPassword!==undefined && allValues.password!==undefined && allValues.password!=='' && allValues.confirmPassword!=='');

    if (condition1&& condition2&& condition3&& condition4&& condition5&& condition6&& condition7&& condition8) {
        // alert('true');
      setbtndisabled(false);
    } else {
      setbtndisabled(true);
    }
    console.log(allValues);
  };

  return (
    <div className="">
      <header className="">
        <Form
          autoComplete="off"
          labelCol={{ span: 10 }}
          wrapperCol={{ span: 14 }}
          onFinish={onFinish}
          onFinishFailed={(error) => {
            console.log({ error });
          }}
          onValuesChange={onValuesChange}
          style={{display:`${display}`}}
        >
          <Form.Item
            name="fullName"
            label="Full Name"
            rules={[
              {
                required: true,
                message: "Please enter your name",
              },
              { whitespace: true },
              { min: 3 },
            ]}
            hasFeedback
          >
            <Input placeholder="Type your name" />
          </Form.Item>

          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                required: true,
                message: "Please enter your email",
              },
              { type: "email", message: "Please enter a valid email" },
            ]}
            hasFeedback
          >
            <Input placeholder="Type your email" />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            help={shouldShowError ? fieldError : ''}
            // validateStatus={shouldShowError ? 'error' : ''}
            rules={[
              {
                required:true,
              },
              { min: 6 },
              {
                validator: (_, value) =>
                  value && re.test(value)
                    ? Promise.resolve()
                    : Promise.reject("Password does not match criteria."),
              },
            ]}
            hasFeedback
          >
            <Input.Password placeholder="Type your password" />
          </Form.Item>

          <Form.Item
            name="confirmPassword"
            label="Confirm Password"
            dependencies={["password"]}
            rules={[
              {
                required: true,
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    "The two passwords that you entered does not match."
                  );
                },
              }),
            ]}
            hasFeedback
          >
            <Input.Password placeholder="Confirm your password" />
          </Form.Item>
          
          <Form.Item wrapperCol={{ span: 15 }} style={{marginLeft:"21%"}}>
            <Button disabled={btndisabled} block type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>
        </Form>
      </header>
    </div>
  );
};
export default FirstForm;