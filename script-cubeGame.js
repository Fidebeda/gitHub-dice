let totalScorePlayer0 = document.querySelector("#totalScorePlayer0")
let totalScorePlayer1 = document.querySelector("#totalScorePlayer1")
let currentScorePlayer0 = document.querySelector("#currentScorePlayer0")
let currentScorePlayer1 = document.querySelector("#currentScorePlayer1")


let ourCube = document.querySelector("#ourCube")

ourCube.style.display = "none"

var totalScore, roundScore, activePlayer, dice, playgame;

newStart();



let paragraph = document.createElement("p")
paragraph.textContent = ""

let buttonRoll = document.querySelector(".roll")


buttonRoll.addEventListener("click", function(){
    if(playgame){
        let diceResult = Math.ceil(Math.random()*6)
    console.log(diceResult)
    ourCube.src = "img/" + diceResult + ".jpg"
    ourCube.style.display = "block"
    paragraph.textContent = ""

    if(diceResult !== 1 ){
    roundScore = roundScore + diceResult

    document.querySelector("#currentScorePlayer" + activePlayer).textContent = roundScore

    }   else{
        nextPlayer()
        

    }

    if(diceResult === 1){
        
        paragraph.textContent = "YOU LOSE!"
        document.querySelector(".field").appendChild(paragraph)
    }

    }
    

    
})



// funkce na přepínání mezi hráči pokud jim padne 1 a také pokud kliknou na keep

function nextPlayer(){
    if(activePlayer === 0){
        activePlayer = 1
    } else {
        activePlayer = 0
    } 

    roundScore = 0
    currentScorePlayer0.textContent = 0
    currentScorePlayer1.textContent = 0

    // ourCube.style.display = "none"

    document.querySelector(".player0").classList.toggle("active")
    document.querySelector(".player1").classList.toggle("active")
    
}


let hold = document.querySelector(".hold")
hold.addEventListener("click", function(){
    if(playgame){
        totalScore[activePlayer] = totalScore[activePlayer] + roundScore
    document.querySelector("#totalScorePlayer" + activePlayer).textContent = totalScore[activePlayer]
    if(totalScore[activePlayer]>=30){
        document.querySelector("#name" + activePlayer).textContent = "WINNER"
        ourCube.style.display = "none"
        playgame = false
    }   else{
        
        nextPlayer()
        

    }

    }
    
    
})

function newStart(){
    totalScore = [0,0]
    roundScore = 0
    activePlayer = 0
    playgame = true

    totalScorePlayer0.textContent = 0
    totalScorePlayer1.textContent = 0
    currentScorePlayer0.textContent = 0
    currentScorePlayer1.textContent = 0

    ourCube.style.display = "none"

    document.querySelector("#name0").textContent = "1.player score"
    document.querySelector("#name1").textContent = "2.player score"

    document.querySelector(".player0").classList.add("active")
    document.querySelector(".player1").classList.remove("active")

}

let again = document.querySelector(".again")
again.addEventListener("click", newStart)






