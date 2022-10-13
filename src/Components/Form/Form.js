import React, { useEffect, useState } from 'react';
import './Index.css'
import swal from 'sweetalert';
import Home from '../Header/Home';


export const Form = () => {

    // const [password, setPassword] = useState("");

    // const initialvalues = {}

    // const [formValues, setFormValues] = useState()
    // const [formErrors, setformErrors] = useState({});
    // const [Issubmit, setIsubmit] = useState(false)


    // const sweet = () => {
    //     swal({
    //         title: "Wrong!",
    //         text: "Please fill the form!",
    //         icon: "error",
    //     });
    // }




    // useEffect(() => {
    //     localStorage.setItem('items', JSON.stringify(items));
    // }, [items]);



    // const handleOnChange = (e) => {

    //     const { name, value } = e.target;
    //     setFormValues({ ...formValues, [name]: value });
    //     console.log(formValues)
    // }

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     setformErrors(validate(formValues));
    //     setIsubmit(true)
    // }

    // useEffect(() => {

    //     console.log(formErrors)
    //     if (Object.keys(formErrors).length === 0 && Issubmit) {
    //         console.log(formValues)
    //     }
    // }, [formErrors])

    // const validate = (values) => {
    //     const errors = {};
    //     const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;


    //     if (!values.username && !values.email && !values.password) {
    //         sweet()
    //     }





    //     if (!values.username) {
    //         errors.username = "Username is required"
    //         // sweet()
    //     } else if (!values.username) {
    //         swal({
    //             title: "Something Went Wrong!",
    //             text: "Check Your Username!",
    //             icon: "error",
    //         });
    //     }

    //     if (!values.email) {
    //         errors.email = "Email is required"
    //     } else if (!regEx.test(values.email)) {
    //         errors.email = "Enter a valid email"
    //         swal({
    //             title: "Enter a valid email!",
    //             text: "Check Your Email!",
    //             icon: "error",
    //         });
    //     }

    //     if (!values.password) {
    //         errors.password = "Password is required"

    //     } else if (values.password.length < 4) {
    //         errors.password = "Password must be greater then 4"
    //         swal({
    //             title: "Something went wrong!",
    //             text: "Password must be greater then 4!",
    //             icon: "error",
    //         });
    //     } else if (values.password.length > 10) {
    //         errors.password = "Password must be less then 10"
    //     }
    //     return errors
    // }


    // const buttons = () => {
    //     if (!mail && !password) {
    //       // alert("plzz enter email and password")
    //     } else if (mail && password) {
    //       setScreen(true)
    //       setPassword("")
    //       setMail("")
    //     }
    //   }


    const [userName, setUserName] = useState('')
    console.log("🚀 ~ file: Form.js ~ line 119 ~ Form ~ userName", userName)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [screen, setScreen] = useState(false);


    const payload = {
        username: userName, email: email, password: password
    }


    const handleSubmit = () => {


        const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;

        if (!userName) {
            swal({
                title: "Wrong!",
                text: "user name is required!",
                icon: "error",
            });
        }
        else if (!regEx.test(email)) {
            swal({
                title: "Enter a valid email!",
                text: "Check Your Email!",
                icon: "error",
            });
        }
        else if (!email) {
            swal({
                title: "Wrong!",
                text: "Email is required!",
                icon: "error",
            });
        } else if (!password) {
            swal({
                title: "Wrong!",
                text: "Password is required!",
                icon: "error",
            });
        } else {
            handleSuccess()
            swal({
                title: "Wrong!",
                text: "Password is required!",
                icon: "error",
            });
            setScreen(true)
        }

    }

    const handleSuccess = () => {
        localStorage.setItem('name', userName)
        localStorage.setItem('email', email)
        localStorage.setItem('password', password)


    }

    return (
        <>

            {!screen ?

                <div className='Form'>
                    <form className='Cform' >

                        <div className='user-box'>
                            <input className='Input' type="text" placeholder="username" name='username'
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                            />
                            <label>Username</label>
                        </div>
                        {/* <p className="message">username</p> */}

                        <div className='user-box'>
                            <input className="Input"
                                type="text"
                                name="email"
                                placeholder="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <label>Email</label>

                        </div>
                        {/* <p className="message">email</p> */}

                        <div className='user-box'>
                            <input className='Input' type="password" name='password' placeholder="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <label>Password</label>
                        </div>
                        {/* <p className="message">password</p> */}

                        <p onClick={handleSubmit}>Submit</p>


                    </form>

                </div>
                :
                <Home />

            }

        </>
    )
}


export default Form;
