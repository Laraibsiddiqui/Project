import React, { useState } from 'react'
import "./Index.css"


const params = [
    { name: "Red", number: 10, isChecked: true },
    { name: "Yellow", number: 12, isChecked: false },
    { name: "Orange", number: 17, isChecked: false },
    { name: "Green", number: 20, isChecked: false },
    { name: "Blue", number: 22, isChecked: false },
    { name: "Purple", number: 13, isChecked: false },
    { name: "Pink", number: 15, isChecked: false },
    { name: "Gray", number: 25, isChecked: false },
    { name: "Black", number: 30, isChecked: false },
    { name: "Maroon", number: 27, isChecked: false },
    { name: "Sky", number: 40, isChecked: false }
]



const Box = () => {

    const [data, setdata] = useState(params)



    const btn = () => {
        const selectedData = data.filter(val => val.isChecked)
        if (selectedData.length > 2) {
            console.log(selectedData.map(el => el.number), selectedData)
            // alert("total score " + selectedData.map(el => el.number).reduce((a, b) => (a + b), 0))

        } else {
            alert("please selected atleast 3 checkbox")
        }



    }

    const handleClick = async (isCheck, index) => {
        let newArr = data


        if (isCheck) {
            const checkLenght = data.filter(val => val.isChecked).length
            console.log( checkLenght)
            if (checkLenght < 3) {
                newArr[index].isChecked = isCheck
                await setdata([])
                setdata(newArr)
            } else {
                alert('Please uncheck')
            }
        } else {

            newArr[index].isChecked = isCheck
            await setdata([])
            setdata(newArr)
        }


    }



    return (


        <div className='Box'>

            <div>
                <h1>Choose any Three colors:</h1>
                {data.map((val, i) => {
                    return (
                        <div>
                            <input onClick={(e) => handleClick(e.target.checked, i)} checked={val.isChecked} type="checkbox" value={val.name} />
                            <label for="scales">{val.name}</label>
                        </div>
                    )
                })}
                <div>
                    <input type="button" onClick={btn} value="done" />
                </div>
            </div>
        </div>
    )
}
export default Box;