function makebubble(){ var clutter = "";
for(var i = 1 ; i <= 152; i++){
    var rn = Math.floor(Math.random()*10)
    clutter += `<div id="bubble">${rn}</div>`;
}
document.querySelector("#pbtom").innerHTML=clutter;}

var timer = 60;
function runtimer(){
    setInterval(function(){
        if(timer > 0){
        timer--;
        document.querySelector("#timerval").textContent=timer;}
        else(
            document.querySelector("#pbtom").innerHTML=` <h> END GAME </h>`

        )
    }, 1000);

}
var rn;
function hit(){
    rn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent=rn;
}
var score = 0 ;
function incscore(){
    score += 10;
    document.querySelector("#scoreval") . textContent = score;
}

document.querySelector("#pbtom")
.addEventListener("click" ,function (dets) {
    var Bubblenumber= (Number(dets.target.textContent));
    if( Bubblenumber == rn){
        incscore();
        hit();
        makebubble();
    }
});
main:
makebubble();
runtimer();
hit();

