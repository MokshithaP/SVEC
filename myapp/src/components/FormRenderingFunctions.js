import React,{useState}from 'react'

export default function FormRenderingFunctions() {
    let initialdata={
        uname:"",
        pword:"",
        email:""
    }
     let [values,updateValues]=useState(initialdata);
    const changeUserName=(event)=>{
        updateValues({
         ...values, uname:event.target.value

        })

      }
    const changePassword=(event)=>{
        updateValues({
        ...values, pword:event.target.value
        })

    }
        const changeEmail=(event)=>{
            updateValues({
            ...values, email:event.target.value
            })

      }
      const submitUserData=(event)=>{
            event.preventDefault()
            console.log(`${values.uname} ${values.pword} ${values.email}`)

      }

    return (
        
        <div >
        <form onSubmit={submitUserData} method="get">
          <input type="text" placeholder='entername' value={values.uname}
          
                onChange={changeUserName}
          />

          <br/>
          <input type="password" value={values.pword} 
             
             onChange={changePassword}
          />
          <br/>
          <input type="text" value={values.email} 
             
             onChange={changeEmail}
          />
          <br/>
 
          <button type="submit">Login</button>


        </form>

    </div>
    )
    }