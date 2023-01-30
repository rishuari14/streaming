import React from 'react';
import axios from 'axios';
import { useContext } from 'react';
 import { Context } from "../../utils/context";
import  {useEffect, useState} from "react";
// import GoogleLogin from "react-google-login";
// import { gapi } from "gapi-script";
import "./Login.scss"

const Login = () => {
  const { user,setUser } =useContext(Context);
  const[newUser,setNewUser] = useState(false)
  const[name,setName] = useState('')
  const[password,setPassword] = useState('')
  const[mobileno,setMobileno] = useState('')
  const[email,setEmail] = useState('')


  var data2 = JSON.stringify({
    "name":name,
    "email":email,
    "phone":mobileno,
    "password":password
})

    const gettest = async() => {
      var config = {
        method: 'post',
        url: 'http://localhost:4000/api/v1/users/register',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data2
      };
      const  data1  = await axios(config)
    
          
      setUser(data1.data)
          console.log(user)
          
  
  };



    const [popupStyle, showPopup] = useState("hide")

    const popup = () => {
        showPopup("login-popup")
        setTimeout(() => showPopup("hide"), 3000)
    }

    const onSuccess = e => {
        alert("User signed in")
        console.log(e)
    }

    const onFailure = e => {
        alert("User sign in Failed")
        console.log(e)
    }

    return (
      <div className="page">
        <div className="cover">
            <h1>{newUser ? "REGISTER":"LOGIN"}</h1>
            <input type="text" placeholder="email" onChange={(e)=>setEmail(e.target.value)} />
            <input type="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)} />
          {newUser &&  <input type="text" placeholder="Userid" onChange={(e)=>setName(e.target.value)} />}
          {newUser &&  <input type="text" placeholder="mobileno" onChange={(e)=>setMobileno(e.target.value)} />}

            <div className="login-btn" onClick={gettest}>{newUser ?"REGISTER":"LOGIN"}</div>

            <p className="text" onClick={()=>setNewUser(!newUser)} >{newUser ? "Login":"Register"}</p>
        </div>
        </div>
    )
}

export default Login

// const Login = () => {
//     const [formData, setFormData] = useState({
//       email: '',
//       password: '',
//     });
  
//     const { email, password } = formData;
  
//     const handleChange = (e) => {
//       setFormData({ ...formData, [e.target.name]: e.target.value });
//     }
  
//     const handleSubmit = async (e) => {
//       e.preventDefault();
//       try {
//         const res = await axios.post('/api/users/login', { email, password });
//         console.log(res.data);
//       } catch (err) {
//         console.log(err.response.data);
//       }
//     }
  
//     return (
//       <div>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={email}
//             onChange={handleChange}
//           />
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={password}
//             onChange={handleChange}
//           />
//           <input type="submit" value="Login" />
//         </form>
//       </div>
//     );
//   };


//   export default Login