import React, { useState } from 'react'
import './Index.css'

const Dice = () => {

  const [Score, Setscore] = useState(0)
  const [Score2, Setscore2] = useState(0)
  const [Score3, Setscore3] = useState(0)
  const [Score4, Setscore4] = useState(0)
  const [Screen, SetScreen] = useState(false)




  const players = () => {


    const player1 = Math.floor(Math.random() * 6) + 1;
    // console.log(player1)


    if (player1 == 6) {

      Setscore((prev) => prev + player1)
      SetScreen(true)
      // console.log(Score)
    }
    else if (Score) {

      Setscore((prev) => prev + player1)
      console.log(player1, Score)

    }
    if (Score >= 50) {

      Setscore(null)
      alert('Player 1 is winner')

    } else if (Score === Score2) {

      Setscore2(0)
    } else if (Score === Score3) {

      Setscore3(0)
    } else if (Score === Score4) {

      Setscore4(0)
    }



  }

  const players2 = () => {

    const player2 = Math.floor(Math.random() * 6) + 1;
    console.log('player2', player2)


    if (player2 == 6) {

      Setscore2((prev) => prev + player2)
      // console.log(Score2)
    } else if (Score2) {

      Setscore2((prev) => prev + player2)
      console.log(player2, Score2)

    }

    if (Score3 >= 50) {

      Setscore2(null)
      alert('Player 1 is winner')

    } else if (Score2 === Score) {

      Setscore(0)
    } else if (Score2 === Score3) {

      Setscore3(0)
    } else if (Score2 === Score4) {

      Setscore4(0)
    }

  }

  const players3 = () => {

    const player3 = Math.floor(Math.random() * 6) + 1;


    if (player3 == 6) {

      Setscore3((prev) => prev + player3)
      // console.log(Score2)
    } else if (Score3) {

      Setscore3((prev) => prev + player3)
      console.log(player3, Score3)

    }

    if (Score3 >= 50) {

      Setscore3(null)
      alert('Player 1 is winner')

    } else if (Score3 === Score) {

      Setscore(0)
    } else if (Score3 === Score2) {

      Setscore3(0)
    } else if (Score3 === Score4) {

      Setscore4(0)
    }

  }
  const players4 = () => {

    const player4 = Math.floor(Math.random() * 6) + 1;


    if (player4 == 6) {

      Setscore4((prev) => prev + player4)
      // console.log(Score2)
    } else if (Score2) {

      Setscore4((prev) => prev + player4)
      console.log(player4, Score4)

    }

    if (Score4 >= 50) {

      Setscore4(null)
      alert('Player 1 is winner')

    } else if (Score4 === Score) {

      Setscore(0)
    } else if (Score4 === Score2) {

      Setscore3(0)
    } else if (Score4 === Score3) {

      Setscore4(0)
    }

  }


  // const Allplayers = () => {


  //   if(Score == Score2 || Score == Score3 || Score == Score4  ){
  //     alert('player 1 loss')
  //   }
  // }



  return (



    <div className='Mice'>

      <div className='UP'>

        <div className='Mice1'>

          <div className='One'>
            <button onClick={players}>Player1</button>
          </div>
          <div className='Two'>
            {Score}
          </div>


        </div>
        <div className='Mice2'>

          <div className='Three'>

            <button onClick={players2}>Player2</button>
          </div>
          <div className='Four'>

            {Score2}
          </div>


        </div>

      </div>
      <div className='Bech'>
        <div className='Roll'>

          <div class="side side-1"></div>
          <div class="side side-2"></div>
          <div class="side side-3"></div>
          <div class="side side-4"></div>
          <div class="side side-5"></div>
          <div class="side side-6"></div>

        </div>
      </div>
      <div className='Down'>

        <div className='Mice3'>

          <div className='Five'>

            {Score3}

          </div>
          <div className='Six'>

            <button onClick={players3}>Player3</button>

          </div>


        </div>
        <div className='Mice4'>

          <div className='Seven'>

            {Score4}
          </div>
          <div className='Eight'>
            <button onClick={players4}>Player4</button>

          </div>


        </div>

      </div>










    </div>
  )
}

export default Dice