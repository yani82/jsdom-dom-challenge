let i =-1;
let j = 0; 
const counterTimer = document.getElementById("counter")
const minusButton = document.getElementById("minus");
const plusButton = document.getElementById("plus");
const heartButton = document.getElementById("heart");
const pauseButton = document.getElementById("pause");
const interval = setInterval(increment, 1000);
function increment(){
    i++;
    counterTimer.textContent = i;
    j = 0; 
}
increment();

minusButton.addEventListener("click", function() {
    i--;
}); 

plusButton.addEventListener("click", function() {
    i++;
});

document.getElementById("heart").addEventListener("click", function(){
    j++; 
    const li = document.createElement("li"); 
    const node = document.createTextNode(i + "has been liked" + j + "time(s).")
    const likes = document.querySelector('.likes')
    const lastLike = document.querySelector('.likes').lastChild 
    li.appendChild(node);
    if(j>1){
        lastLike.replaceWith(li)
    } else {
        likes.appendChild(li);
    }
}); 

document.getElementById("pause").addEventListener("click", function(){
    if(document.querySelector('#pause').innerText == "pause") {
        clearInterval(interval)
        document.querySelector('#pause').innerText = "resume" 
        document.getElementById("minus").disabled = true; 
        document.getElementById("plus").disabled = true; 
        document.getElementById("heart").disabled = true; 
        document.getElementById("submit").disabled = true; 
    } else {
        // debugger; 
        interval = setInterval(increment, 1000);
        document.querySelector('#pause').innerText = "pause"
        document.getElementById("minus").disabled = false; 
        document.getElementById("plus").disabled = false; 
        document.getElementById("heart").disabled = false; 
        document.getElementById("submit").disabled = false; 
    }
});

document.getElementById("submit").addEventListener("click", function(event){
    event.preventDefault(); 
    var comment = document.querySelector('input#comment-input').value 
    var commentsList = document.querySelector('.comments')
    var p = document.createElement("p");
    var node = document.createTextNode(comment) 
    p.appendChild(node); 
    commentsList.appendChild(p);
    document.querySelector('input#comment-input').value = ''
}); 