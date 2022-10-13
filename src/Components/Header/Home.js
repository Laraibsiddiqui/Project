import React, { useState } from "react";
import './Index.css';
// import { Link ,useHistory } from 'react-router-dom';

// import { CgSearchFound, CgShoppingCart, CgMenu } from "react-icons/cg";
import moment from "moment";
import Form from "../Form/Form";
import { Navigate } from "react-router-dom";



function Home() {

    const [screen, setScreen] = useState(false);
    // const history = useHistory()

    const logout = () => {
        localStorage.clear()
        // history.push('/Form')
    }

    return (
<>

        <div className="Header">
 

            <header className="header">

                <a href="#" className="logo">
                    <img src="https://tse2.mm.bing.net/th?id=OIP.F-bE2cG72uwvWV5lUK7RRAHaHa&pid=Api&P=0" />
                </a>

                <nav className="navbar">

                    <a href="#home">home</a>
                    <a href="#about">about</a>
                    <a href="menu">menu</a>
                    <a href="#product">product</a>
                    <a href="#review">review</a>
                    <a href="#blogs">blogs</a>

                </nav>

                <div className="icons">

                    <div class="dropdown">
                        <button class="dropbtn">Dropdown</button>

                        
                        <div class="dropdown-content">

                            <a onClick={logout} >Log out</a>
                        </div>
                        

                    </div>


                        {/* <p>{moment().format('DD, MM, YY')}</p> */}

                    {/* <div id="search-btn"></div>
            <div id="cart-button"></div>
            <div id="menu"></div> */}
                </div>

                <div className="search-form">
                    {/* <input type="search" id="search-box" placeholder="Search Here..."/>
            <label form="search-box" className="fas fa-search"></label> */}
                </div>

            </header>
            <main className="main">



            </main>

        </div>

            

            </>
    )
}


export default Home;