import React from 'react'
import './Index.css'




const Ludo = () => {


    const random =  Math.floor(Math.random() * 6) +1 ;


   
    
    console.log('random', random)
       



    return (

        <div className='Ludo'>
            


            <div className='Ludo-board'>

            </div>




        </div >
    )
}

export default Ludo;