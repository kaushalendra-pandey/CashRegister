let mainAmount = document.getElementById("main-amount")
let paidAmount = document.getElementById("paid-amount")
let alert = document.getElementById("alert-text")
let denominations = [2000,500,200,100,50,20,10,5,2,1]
let ans = []
let tableData = document.querySelectorAll("td")
console.log(tableData)


const formAnswer = (amountToReturn) => {
    for(let i = 0 ; i<denominations.length; i++) {
        let numOfNotes = Math.trunc(amountToReturn / denominations[i])
        amountToReturn %= denominations[i]
        
        if(numOfNotes > 0){
            tableData[i].innerHTML = numOfNotes
            tableData[i].style.backgroundColor = "aqua"
        }
        
    }    
}

const solve = () => {
    alert.innerHTML = ""

    if(!paidAmount.value || !mainAmount.value) {
        alert.innerHTML = "All fields are required"
        return
    }

    for(let i = 0; i<tableData.length;i++){
        tableData[i].style.backgroundColor = "white"
        tableData[i].innerHTML = 0
    }
    
    amountToReturn = paidAmount.value - mainAmount.value
    if(amountToReturn < 0) {
        alert.innerHTML = "Dhandha aise nhi chalta!"
        return
    }
    formAnswer(amountToReturn)
    window.scrollTo(0,document.body.scrollHeight)
}