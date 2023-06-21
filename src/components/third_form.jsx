import './first_form.css';
import { Button, Form, Input, } from 'antd';
import { useState } from 'react';
const ThirdForm=(props)=>{


    console.log(props.FormNo);
    let display="block";
    if(props.FormNo?.includes(3)){
        console.log("yes");
       display="none";
    }
    
    function thirdFormValidatation(values){

       
        props.setData(values);
        // e.preventDefault();
        // e.target.style.visibility="hidden";

        // props.getFormNumber([1,2])
        props.getFormNumber([1,2,"submit"])
        alert("submited");
        // console.log(document?.querySelector('#third_form'));
        

    }
    const [btndisabled, setbtndisabled] = useState(true);
  const onValuesChange = (changedValues, allValues) => {
  

   console.log(allValues);
   

    // console.log(condition1, condition2, condition3, condition4, condition5, condition6, condition7, condition8);
    // console.log(allValues.fullName.lenght>=3 && emailRigex.test(allValues.email) && re.test(allValues.password) && (allValues.confirmPassword===allValues.password) && allValues.confirmPassword!==undefined && allValues.password!==undefined && allValues.password!=='' && allValues.confirmPassword!=='');
    const urlPattern = /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
    const condition1=urlPattern.test(allValues.website);
    const condition2=allValues.comapany?.length>20;
    const condition3=allValues.companyH?.length>20;
    // console.log(condition1);
    // console.log(condition2);
    // console.log(condition3);
    if (condition1 && condition2 && condition3) {
        // alert('true');
      setbtndisabled(false);
    } else {
      setbtndisabled(true);
    }
    // console.log(allValues);
  };


     const {TextArea}=Input;

    return(
        <Form
        autoComplete="off"
        labelCol={{ span: 10 }}
        wrapperCol={{ span: 14 }}
        onFinish={thirdFormValidatation}
        onFinishFailed={(error) => {
          console.log({ error });
        }}
        onValuesChange={onValuesChange}
        style={{display:`${display}`}}
      >

        <Form.Item
            name="website"
            label=""
            rules={[{ required:true, type: "url", message: "Please enter a valid url" }]}
            hasFeedback
          >
            <Input addonBefore="http://" style={{width:"500px"}} placeholder="Add your website url" />
          </Form.Item>


          <Form.Item
            name="comapany"
            label=""
            rules={[{ required:true, message: "Please enter what does your company do" }]}
            hasFeedback
          >
            <TextArea rows={4} style={{width:"500px"}} placeholder="What does your company do" required  />
          </Form.Item>

          <Form.Item
            name="companyH"
            label=""
            rules={[{ required:true, message: "Please enter How does your company do" }]}
            hasFeedback
          >
               <TextArea rows={4} style={{width:"500px"}} placeholder="How does your company do" required />
          </Form.Item>
          
          <Form.Item wrapperCol={{ span: 15 }} style={{marginTop:"10px",marginLeft:'50px'}}>
            <Button disabled={btndisabled} block type="primary" htmlType="submit">
              Register
            </Button>
            
        </Form.Item>
        </Form>
    )
}
export default ThirdForm;