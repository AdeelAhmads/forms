
import FirstForm from "./first_form";
import SecondForm from "./second_form";
import ThirdForm from "./third_form";
import './mainPage.css';
import { useState } from "react";

const MainPage=()=>{
   
    const [HideFormNo, setHideFormNo]=useState([2,3]);
    
   console.log(HideFormNo);

   function hideForm(formNumber){
          
            console.log(formNumber);

         setHideFormNo(formNumber);
   }

   const [firstFormData,setFirstFormData]=useState({});
   const [secondFormData,setSecondFormData]=useState({});
   const [thirdFormData,setThirdFormData]=useState({});
   console.log('Data Outside');

   
  

   if(HideFormNo.includes(1)&&HideFormNo.includes(2)&& HideFormNo.includes("submit")){
       
        console.log("total data: ");
      const totalData =[firstFormData,secondFormData,thirdFormData]
        // console.log(firstFormData);
        // console.log(secondFormData);
        // console.log(thirdFormData)
        console.log(totalData);

   }
  
 
    return(
        <div id="main">
              <FirstForm setData={setFirstFormData} FormNo={HideFormNo} getFormNumber={hideForm}/>
              <SecondForm setData={setSecondFormData}  FormNo={HideFormNo} getFormNumber={hideForm}/>
              <ThirdForm setData={setThirdFormData}  FormNo={HideFormNo} getFormNumber={hideForm}/>
        </div>
    )
}
export default MainPage;