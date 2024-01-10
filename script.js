const choices=["rock","paper","scissor"];
const  playerdisplay=document.getElementById("playerdisplay");
const  computerdisplay=document.getElementById("computerdisplay");
const resultdisplay=document.getElementById("resultdisplay");

function playgame(choice){
    let random=Math.floor(Math.random()*3);
    let computer =choices[random];

    //WE CAN MAKE THIS CODE BETTER BY SWITCH CASE

    if(computer===choice){

        playerdisplay.textContent="PLAYER: "+choice;
        computerdisplay.textContent="COMPUTER: "+computer;
        resultdisplay.textContent="TIE";

    }
    if(computer==="rock"&&choice==="paper"){

        playerdisplay.textContent="PLAYER: "+choice;
        computerdisplay.textContent="COMPUTER: "+computer;
        resultdisplay.textContent="YOU WIN";

    }
    if(computer==="paper"&&choice==="scissor"){

        playerdisplay.textContent="PLAYER: "+choice;
        computerdisplay.textContent="COMPUTER: "+computer;
        resultdisplay.textContent="YOU WIN";

    }
    if(computer==="rock"&&choice==="scissor"){

        playerdisplay.textContent="PLAYER: "+choice;
        computerdisplay.textContent="COMPUTER: "+computer;
        resultdisplay.textContent="YOU LOOSE";

    }

  
    if(choice==="rock"&&computer==="paper"){

        playerdisplay.textContent="PLAYER: "+choice;
        computerdisplay.textContent="COMPUTER: "+computer;
        resultdisplay.textContent="YOU LOOSE";

    }
    if(choice==="paper"&&computer==="scissor"){

        playerdisplay.textContent="PLAYER: "+choice;
        computerdisplay.textContent="COMPUTER: "+computer;
        resultdisplay.textContent="YOU LOOSE";

    }
    if(choice==="rock"&&computer==="scissor"){

        playerdisplay.textContent="PLAYER: "+choice;
        computerdisplay.textContent="COMPUTER: "+computer;
        resultdisplay.textContent="YOU WIN";

    }

   
  


    
}
