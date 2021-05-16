//Solution #1: Using transition-property and transition-duration

const inputBar = document.getElementById('userInput')
const progressBar = document.getElementById('progressBar')
const theRunButton = document.getElementById('runButton')
const PROGRESS_BAR_MILISECONDS = 10

inputBar.addEventListener('keyup', updateProgressBar )
theRunButton.addEventListener('click', incrementToCompletion)

//This runs when the user clicks the enter key inside the input bar. 
function updateProgressBar(event) {
    
    if(event.keyCode === 13) {
        startingPercentage = getUserInput()

        if(startingPercentage === -1) {
            setErrorMessage()
            theRunButton.disabled = true
            
        } else {
            progressBar.style["transition-duration"] = "0ms"
            clearErrorMessage()
            updateProgressBarWidth(startingPercentage)
            theRunButton.disabled = false
        }
    }
} 

//This runs when the user clicks on the 'Run' button.
function incrementToCompletion(){
    
    let startingPercentage = getUserInput()
    updateProgressBarWidth(startingPercentage)
    
    let difference = 100 - startingPercentage
    let totalAnimationTime = `${difference * PROGRESS_BAR_MILISECONDS}ms`
    
    setTimeout(function() {
        progressBar.style["transition-property"] = "width"
        progressBar.style["transition-duration"] = totalAnimationTime
        progressBar.style.width = "100%"
        
    }, 0)

    theRunButton.disabled = true
}

//This function gets the user's input and validates it.
function getUserInput() {
    let num = inputBar.value === "" ? 0 : Number(inputBar.value)
    if(isNaN(num) || num < 0 || num > 100) {
        return -1
    }
    return num
}

//This function sets the updated progress bar's width.
function updateProgressBarWidth(percent){
    progressBar.style.width = `${percent}%`
}
//This function sets the error message for invalid inputs.
function setErrorMessage() {
    document.querySelector('#h2Invalid').innerText = "Your input must be a valid number from 0 to 100."
}
//This function clears the error message.
function clearErrorMessage() {
    document.querySelector('#h2Invalid').innerText = ""
}


//Solution #2: Using setInterval() and clearInterval()
// const inputBar = document.getElementById('userInput')
// const progressBar = document.getElementById('progressBar')
// const theRunButton = document.getElementById('runButton')
// const PROGRESS_BAR_MILISECONDS = 10


// inputBar.addEventListener('keyup', updateProgressBar )
// theRunButton.addEventListener('click', incrementToCompletion)


// //This runs when the user clicks the enter key inside the input bar. 
// function updateProgressBar(event) {
    
//     if(event.keyCode === 13) {
//         startingPercentage = getUserInput()
        
//         if(startingPercentage === -1) {
//             setErrorMessage()
//             theRunButton.disabled = true
            
//         } else {
//             clearErrorMessage()
//             updateProgressBarWidth(startingPercentage)
//             theRunButton.disabled = false
            
//         }
//     } 
// } 

// //This runs when the user clicks on the 'Run' button.
// function incrementToCompletion() {
    
//     let startingPercentage = getUserInput()

//     let barTimer = setInterval(function() {
//         startingPercentage++
        
//         if(startingPercentage > 100) {
//             clearInterval(barTimer)
            
//         } else {
//             updateProgressBarWidth(startingPercentage)
//         }
        
//     }, PROGRESS_BAR_MILISECONDS) 
// }

// //This function gets the user's input and validates it.
// function getUserInput() {
    
//     let num = inputBar.value === "" ? 0 : Number(inputBar.value)
    
//     if(isNaN(num) || num < 0 || num > 100) {
//         return -1
//     }
//     return num
// }

// //This function sets the error message for invalid inputs.
// function setErrorMessage() {
//     document.querySelector('#h2Invalid').innerText = "Your input must be a valid number from 0 to 100."
// }

// //This function clears the error message.
// function clearErrorMessage() {
//     document.querySelector('#h2Invalid').innerText = ""
// }

// //This function sets the updated progress bar's width.
// function updateProgressBarWidth(percent){
//     progressBar.style.width = `${percent}%`
// }












