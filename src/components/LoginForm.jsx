import React, { Component, useEffect, useState } from "react";

const LoginForm = () => {
  const [userForm, setUserForm] = useState({
    name: "",
    email: "",
    gender: "Other",
    PhoneNumber: "",
    password: "",
  });

 const [errorData, setErrorData] = useState({
    name: "",
    email: "",
    gender: "",
    phoneNumber: "",
    password: "",
  });

 function errorHandler(str,id){
    switch(id){
        case "email":{
         console.log(id)
          
            let regForAt=/[@]/g
            let regForAtBeginning=/^[@]/g
            let res1=str.match(regForAt)
            let res2=regForAtBeginning.test(str)
            console.log(res1,res2)
            if(res1==null || res2==true ){
             setErrorData({ ...errorData, email: "invalid email as it not contain @ or email should not start with @"})
               } else{
               setErrorData({ ...errorData, email: ""})
                      }
            break;   
        }
        

         case "username":{
           console.log(id)
            let regForNumOrAlpha=/^([\w\s]+)$/
            let regForNumeric=/\d/ 
            let refForAlpha=/[A-Z]/i
            let res1=regForNumOrAlpha.test(str)
            let res2=regForNumeric.test(str)
            let res3=refForAlpha.test(str)
            console.log(res1 , res2 , res3)
            if(res1 ==false || res2 ==false ||res3 ==false){
                setErrorData({ ...errorData, name: "invalid name as it is not alphanumeric"}) 
            } else{
                 setErrorData({ ...errorData, name: ""})
            }
            break;
         }
         
         case "gender":{
           console.log(id)

       
            break;
         }

         case "phoneNumber":{
           console.log(id)
           let regOnlyDigit=/^[\d]{10}$/
        
            regOnlyDigit.test(str) != true ?   setErrorData({ ...errorData, phoneNumber: "Must be 10 digits only"}) :  setErrorData({ ...errorData, phoneNumber: ""})
       
            break;
         }

        case "password":{
          console.log(id)
          let regForPassword=/^(?=.*\w*)(?=.*[@#$%^&+=]*).{6}$/
      //(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z])(?=.*[#@$%&])[\w+#$!]{6}
          regForPassword.test(str) != true ? setErrorData({ ...errorData, password: "Must be 6 characters only with atleast one capital letter/s,small letter/s,special symbols and digits "}) :  setErrorData({ ...errorData, password: ""})

          console.log(errorData)
          console.log(userForm)
          
          break;
        }
     }
           
         
  }

  
  function handleClick(e) {
   
   console.log( errorData)
   if(errorData.name !== "" || errorData.email == "" ||errorData.phoneNumber !== "" || errorData.password !== "" ){
    }

}

  return (
    <div>
      <section>
        <label htmlFor="username">Name</label>
        <input
          type="text "
          id="username"
          data-testid="name"
             onChange={(event) =>{
            errorHandler(event.target.value,event.target.id )

            setUserForm({ ...userForm, name: event.target.value })
          }
          }
        />
{   errorData.name && <div style={{color: "red"}}> {errorData.name}</div>}
      </section>

      <section>
        <label htmlFor="email">Email</label>
       <input
          type="email "
          id="email"
          data-testid="email"
          onChange={(event) =>{
            errorHandler(event.target.value,event.target.id )

            setUserForm({ ...userForm, email: event.target.value })
          }
          }
        />
{   errorData.email && <div style={{color: "red"}}> {errorData.email}</div>}
      </section>

      <section>
        <label>Gender</label>
        <select
          value={userForm.gender}
          id="gender"
          data-testid='gender'
          onChange={(event) =>{
              errorHandler(event.target.value,event.target.id)
            setUserForm({ ...userForm, gender: event.target.value })
          }
            
          }
        >
          <option value="Male">Male</option>
          <option value="female">Female</option>
          <option value="Other">Other</option>
        </select>
        {   errorData.gender && <div style={{color: "red"}}> {errorData.gender}</div>}
      </section>

      <section>
        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          type="number"

          id="phoneNumber"
          data-testid="phoneNumber'"
          onChange={(event) =>{
            errorHandler(event.target.value,event.target.id)
            setUserForm({ ...userForm, phoneNumber: event.target.value })

          }
          }
        />
         {   errorData.phoneNumber && <div style={{color: "red"}}> {errorData.phoneNumber}</div>}
      </section>

      <section>
        <label htmlFor="password">password</label>
        <input
          type="password"
          id="password"
          data-testid="password'"

          onChange={(event) =>{
            errorHandler(event.target.value,event.target.id)

            setUserForm({ ...userForm, password: event.target.value })
          }

            
          }
        />
  {   errorData.password && <div style={{color: "red"}}> {errorData.password}</div>}
      </section>
      <section>
        <input data-testid='submit' type="submit" value="Submit" onClick={handleClick} 

disabled={!(userForm.name.length && userForm.email.length&&userForm.password.length&&userForm.phoneNumber.length&&userForm.gender.length)}

       />
      </section>
    </div>
  );
};

export default LoginForm;
