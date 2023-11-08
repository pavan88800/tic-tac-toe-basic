(function() {
  const container = document.getElementById("container")
  const state = {
    board : [],
    playerX:"X",
    playerO:"O",
    currentPlayer: "X",
    winner : false
  }
  container.addEventListener("click",  (e) => handleClick(e))

  const createBoard = () => {
    for(let i = 0; i < 3; i++){
      state.board.push(new Array(3).fill({isClicked:null}))
   }
    displayGrid()
  }
  createBoard()
  
  console.log(state.board)
 


  // function handle
  function displayGrid () {
    let html = ``
    state.board.forEach((row, i) => {
      row.forEach((col, j) => { 
        html += `<div data-i=${i}  data-j=${j} class="cell"><p>${col.isClicked === null ? "" : col.isClicked}</p></div>`
      })
    })
    container.innerHTML = html
  }


  function handleClick (e) {
    if(state.winner){
       return 
    }
    const {i,j} = e.target.dataset

    const copyBoard = JSON.parse(JSON.stringify([...state.board]))

    if(copyBoard[i][j].isClicked === null){
      copyBoard[i][j].isClicked = state.currentPlayer
      state.board = copyBoard
      if(winnerLogic(i,j, state.currentPlayer)) {
    }
      state.currentPlayer === state.playerX ? state.currentPlayer =  state.playerO : state.currentPlayer =  state.playerX
    }
    displayGrid()
  }


  function winnerLogic (i,j, currentPlayer) {
    const copyBoard = JSON.parse(JSON.stringify([...state.board]))

     //row 
     if(copyBoard[i][0].isClicked === currentPlayer && copyBoard[i][1].isClicked === currentPlayer  && copyBoard[i][2].isClicked === currentPlayer) {
      state.winner = true
      console.log("row")
      return true
    }

    // col
    if(copyBoard[0][j].isClicked === currentPlayer && copyBoard[1][j].isClicked === currentPlayer  && copyBoard[2][j].isClicked === currentPlayer) {
      console.log("win")
      state.winner = true
      return true
    }
     
   

    // diagnal
    if(copyBoard[0][0].isClicked === currentPlayer && copyBoard[1][1].isClicked === currentPlayer  && copyBoard[2][2].isClicked === currentPlayer) {
      state.winner = true
      return true
    }

      // diagnal
      if(copyBoard[0][2].isClicked === currentPlayer && copyBoard[1][1].isClicked === currentPlayer  && copyBoard[2][0].isClicked === currentPlayer) {
        state.winner = true
        console.log("win")
        return true
      }
    return false
  }

})() ;
 



