var player1: number;
var player2: number;
document.getElementById("mainBtn").onclick = function MainGame()
{
    //Pick random number
    randomNumber();
    //Function for player1
    P1();
    //Function for player2
    P2();
    //Results for both numbers
    WhosWinner();
}

function P1(): void
{
    var imageString: string = "./assets/dice"+this.player1+".png";
    document.getElementById("player1").setAttribute("src",imageString);
}

function P2(): void
{
    var imageString: string = "./assets/dice"+this.player2+".png";
    document.getElementById("player2").setAttribute("src",imageString);
}

function WhosWinner():void
{
    if(this.player1 > this.player2)
    {
        document.getElementById("mainTitle").innerHTML = "Dice on the left win";
    }
    else if(this.player2 > this.player1)
    {
        document.getElementById("mainTitle").innerHTML= "Dice on the right win";
    }
    else if(this.player1 == this.player2)
    {
        document.getElementById("mainTitle").innerHTML = "Draw"
    }
}

function randomNumber():void
{
    this.player1 = Math.floor(Math.random()*6)+1;
    this.player2 = Math.floor(Math.random()*6)+1;
}