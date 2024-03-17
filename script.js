function getColor(){
    // let randonNumber= Math.random();
    let randonNumber = Math.floor(Math.random() * 16777215);
    let randomColor = "#" + randonNumber.toString(16);
    console.log(randonNumber, randomColor);
    document.body.style.backgroundColor = randomColor;
    document.getElementById("color-code").innerHTML = randomColor;
    // for automatically copy the color code using clipboard evenets
    navigator.clipboard.writeText(randomColor);
     
    
}
document.getElementById("btn").addEventListener("click",getColor);
// initial call the function
getColor();