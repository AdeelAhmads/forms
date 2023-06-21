// import './first_form.css';

import { Button, Form, Radio,Checkbox, DatePicker } from 'antd';
import React from 'react';
import { useState } from 'react';


const SecondForm=(props)=>{

    console.log(props.FormNo);
    let display="block";
    if(props.FormNo?.includes(2)){
        console.log("yes");
       display="none";
    }
    
    function secondFormValidatation(values){

        // e.preventDefault();
        // e.target.style.visibility="hidden";
        // console.log(value);
        props.setData(values);
        props.getFormNumber([1,2])
        // console.log(document?.querySelector('#third_form'));
        

    }


    const [btndisabled, setbtndisabled] = useState(true);
  const onValuesChange = (changedValues, allValues) => {
  

   console.log(allValues);
   

    // console.log(condition1, condition2, condition3, condition4, condition5, condition6, condition7, condition8);
    // console.log(allValues.fullName.lenght>=3 && emailRigex.test(allValues.email) && re.test(allValues.password) && (allValues.confirmPassword===allValues.password) && allValues.confirmPassword!==undefined && allValues.password!==undefined && allValues.password!=='' && allValues.confirmPassword!=='');

    const condition1=allValues.role;
    const condition2=allValues.Responsibility;
    const condition3=allValues.dob
    if (condition1 && condition2 && condition3) {
        // alert('true');
      setbtndisabled(false);
    } else {
      setbtndisabled(true);
    }
    // console.log(allValues);
  };

    const plainOptions = ['A','B','C'];

    return(
        <div >

    <Form
          autoComplete="off"
          labelCol={{ span: 10 }}
          wrapperCol={{ span: 14 }}
          onFinish={secondFormValidatation}
          onFinishFailed={(error) => {
            console.log({ error });
          }
        
        }
        onValuesChange={onValuesChange}
          style={{display:`${display}`}}
        >



             <Form.Item
            name="role"
            label="Role"
            rules={[
              {
                required: true,
                message: "Please select your role",
              },
             
            ]}
            hasFeedback
           
          > 
           <Radio.Group  style={{display:'flex'}} >
                <Radio checked value={1}>Worker</Radio>
                <Radio value={2}>Supervisor</Radio>
            </Radio.Group>

          </Form.Item>
           

          <Form.Item
            name="Responsibility"
            label="Responsibility"
            rules={[
              {
                required: true,
                message: "Please select at least one role",
              },
             
            ]}
            hasFeedback
           
          > 

            <Checkbox.Group  style={{marginTop:"10px"}} options={plainOptions} />

          </Form.Item>

            <Form.Item
            name="dob"
            label="Date of Birth"
            rules={[
              {
                required: true,
                message: "Please provide your date of birth",
              },
            ]}
            hasFeedback
          >
            <DatePicker
              style={{ width: "100%" }}
              picker="date"
              placeholder="Chose date of birth"
            required
            />
          </Form.Item>


        <Form.Item wrapperCol={{ span: 15 }} style={{marginTop:"10px", marginLeft:'107px'}}>
            <Button disabled={btndisabled} block type="primary" htmlType="submit">
              Register
            </Button>
            
        </Form.Item>
            
    </Form>
    {/* <form className="form" id='second-form' onSubmit={secondFormValidatation} style={{display:`${display}`}} >
      <div className="title" >Second Form</div>
      <div className="subtitle">Let's create your account!</div>
      <div className="input-container ic1">
        <input id="firstname" className="input" type="text" placeholder=" " />
        <div className="cut"></div>
        <label for="firstname" className="placeholder">First name</label>
      </div>
      <div className="input-container ic2">
        <input id="lastname" className="input" type="text" placeholder=" " />
        <div className="cut"></div>
        <label for="lastname" className="placeholder">Last name</label>
      </div>
      <div className="input-container ic2">
        <input id="email" className="input" type="text" placeholder=" " />
        <div className="cut cut-short"></div>
        <label for="email" className="placeholder">Email</label>
      </div>
      <button type="text" className="submit">submit</button>
    </form> */}
    </div>
    )
}
export default SecondForm;