import React, { useState, useEffect } from "react";
import './Index.css'


// Spliting
// destucturing


const Fetch = () => {

  const [data, setData] = useState([])
  const [allDataa, setAllData] = useState(false)
  const [allId, setIdData] = useState(false)
  const [allTitle, setTitleData] = useState(false)
  const [Changedata, setChangeData] = useState('')
  const [IdFind, SetIdFind] = useState('')
  const [TitleFind, SetTitleFind] = useState('')


  useEffect(() => {
    getData()
  }, [])


  const getData = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => setData(json))
  }

  // console.log(data)


  const renderBox = () => (
    data.map((val) => <div className="box">
      {renderItem(val)}
    </div>)
  )

  const renderItem = (val) => {
    const { completed, id, title, userId: userGrad } = val

    return <ul>
      <li>{id}</li>
      <li>{userGrad}</li>
      <li>{title}</li>
    </ul>

  }
  const Searching = () => {

    const SearchId = data.filter(val => val.id == Changedata)
    const SearchTitle = data.filter((val) => (val.title.includes(Changedata)))


    if (SearchId) {

      SetIdFind(
        SearchId.map((val) => <div className="box">
          {renderItem(val)}
        </div>)
      )
      // console.log('Search By ID', IdFind)
    }
    
   if (SearchTitle) {
      SetTitleFind(
        SearchTitle.map((val) => <div className="box">
          {renderItem(val)}
        </div>))
      // console.log('Search By Title', TitleFind)
    }
  }



  const RenderId = () => (IdFind)
  const RenderTitle = () => (TitleFind)





  const Onchange = (e) => {
    setChangeData(e.target.value)
  }
  // console.log(Changedata)



  const allData = () => {
    setAllData(true)
    setIdData(false)
    setTitleData(false)


  }
  const IdData = () => {
    setIdData(true)
    setAllData(false)
    setTitleData(false)


  }

  const TitleData = () => {
    setTitleData(true)
    setIdData(false)
    setAllData(false)

  }




  // console.log()





  return (

    <div className="Fetch">

      <div className="TypeOne">

        <div className="Search-Box">

          {/* {allDataa && <input type={'text'} Onchange={Onchange} placeholder="Search Here" />} */}



          {allId &&
            <div className="Part1">

              <input type={'text'} onChange={Onchange} placeholder="Search Here By Title" />
              <button  onClick={Searching} >Button</button>

            </div>}

          {allTitle &&
            <div className="Part1">

              <input type={'text'} onChange={Onchange} placeholder="Search Here By Title" />
              <button  onClick={Searching} >Button</button>

            </div>}



        </div>

        <div className="Search-Box2">

          <button onClick={allData} className={allDataa ? "searchBtnTwo" : "searchBtnOne"}   >All</button>
          <button onClick={IdData} className={allId ? "searchBtnTwo" : "searchBtnOne"} >ID</button>
          <button onClick={TitleData} className={allTitle ? "searchBtnTwo" : "searchBtnOne"} >Title</button>

        </div>

      </div>

      <div className="TypeTwo">

        {allDataa && renderBox()}
        {allId && RenderId()}
        {allTitle && RenderTitle()}

      </div>



    </div>



  )
}

export default Fetch;