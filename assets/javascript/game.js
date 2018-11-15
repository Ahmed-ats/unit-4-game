


var wins = 0;
var loses = 0; 




// generate a random number between 19-120
var computerRandomNumber = 0; 
$("#shown-random-number").text(computerRandomNumber);

var userTotal = 0;
$("#score").text(userTotal);  

var number1 = 0; 
var number2 = 0; 
var number3 = 0; 
var number4 = 0; 


    function reset() {
        
         number1 = Math.floor((Math.random() * 12) + 1); 
         number2 = Math.floor((Math.random() * 12) + 1); 
         number3 = Math.floor((Math.random() * 12) + 1); 
         number4 = Math.floor((Math.random() * 12) + 1); 
        computerRandomNumber = Math.floor((Math.random() * (120 - 19)) + 19);
        $("#shown-random-number").text(computerRandomNumber); 
        userTotal = 0; 
        $("#score").text(userTotal)
       
    }
    reset();


    $("#img1").on ('click', function() {
        
        userTotal += number1; 
        console.log(number1); 
        $("#score").text(userTotal); 
        
    if (userTotal === computerRandomNumber) {
        wins ++ ;
        // alert(" You Win!");
        $("#win-text").text("Wins:" + wins) ;
        
        reset();
    }

    else if (userTotal > computerRandomNumber) {
        loses ++ ;
        $("#lose-text").text("Loses:" + loses) ;
        reset(); 
        // alert(" You Lost!");
        
    }
   
    }); 


    $("#img2").on ('click', function() {
        
        userTotal += number2; 
        console.log(number2); 
        $("#score").text(userTotal); 
        
    if (userTotal === computerRandomNumber) {
        wins ++ ;
        $("#win-text").text("Wins:" + wins) ;
        reset();
        alert(" You Win!"); 
       
        
    }

    else if (userTotal > computerRandomNumber) {
        loses ++ ;
        $("#lose-text").text("Loses:" + loses) ;
        reset();
        alert(" You Lost!");
        
      
    }
   
    }); 

    
    $("#img3").on ('click', function() {
          
        userTotal += number3; 
        console.log(number3); 
        $("#score").text(userTotal); 

    if (userTotal === computerRandomNumber) {
        wins ++ ;
        $("#win-text").text("Wins:" + wins) ;
        alert(" You Win!");
        reset();
    }

    else if (userTotal > computerRandomNumber) {
        loses ++ ;
        $("#lose-text").text("Loses:" + loses) ;
        alert(" You Lost!");
        reset();
    
    }
   
    }); 

    
    $("#img4").on ('click', function() {
        
        userTotal += number4; 
        console.log(number4); 
        $("#score").text(userTotal); 
 
    if (userTotal === computerRandomNumber) {
        wins ++ ;
        $("#win-text").text("Wins:" + wins) ;
        alert(" You Win!"); 
        reset();

    }

    else if (userTotal > computerRandomNumber) {
        loses ++ ;
        $("#lose-text").text("Loses:" + loses) ;
        alert(" You Lost!");
        reset();
    
    }
   
    }); 

    
    
    
    






