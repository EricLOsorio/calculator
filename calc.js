window.onload=(function(){
  var numberKeys=document.getElementsByClassName("nums");
  var total=document.getElementById("total");
  var functions=document.getElementsByClassName("functions");
  var logic=document.getElementsByClassName("logic");
  var fraction=document.getElementsByClassName("fraction");


  var display=document.getElementById("display");
  j=0;
  k=0;


for(var n=0; n<functions.length;n++){
    functions[n].addEventListener('click',function(event){
       display.value="Feature coming soon!";
    });
};

for(var o=0; o<logic.length;o++){
    logic[o].addEventListener('click',function(event){
       display.value="Feature coming soon!";
    });
};

for(var p=0; p<fraction.length;p++){
    fraction[p].addEventListener('click',function(event){
       display.value="Feature coming soon!";
    });
}




  for(var i=0; i<numberKeys.length;i++){
  	var tempStr="";
  	var str="";
  	   var tempOper="";
    var numOnly="";
    var numOper="";
    var outputStr="";
    var theDisplay="";
    var flag=null;

  	numberKeys[i].addEventListener('click',function(event){

      var theCode=(this.innerHTML).charCodeAt();


      if(this.innerHTML!=Number(this.innerHTML) && this.innerHTML!="." &&
          theCode!==177 && this.innerHTML!=="DEL" && this.innerHTML!=="C"){
          if((theDisplay[theDisplay.length-1]==Number(theDisplay[theDisplay.length-1])||
            theDisplay[theDisplay.length-1]==".") && theCode!==247){
            theDisplay=theDisplay+this.innerHTML;
        
            j=theDisplay.length-1;
             k=j;  

          } else if(theCode===247){
             if (theDisplay[theDisplay.length-1]==Number(theDisplay[theDisplay.length-1]) ||
              theDisplay[theDisplay.length-1]=="."){
                 theDisplay=theDisplay+"/";
                 j=theDisplay.length-1;
                 k=j; 
            } else {
              var newDisplay="";
              for(var n=0;n<theDisplay.length-1;n++){
               newDisplay=newDisplay+theDisplay[n];
          };  
             theDisplay=newDisplay+"/";  

          };              
              
           } else {
              var newDisplay="";
              for(var n=0;n<theDisplay.length-1;n++){
               newDisplay=newDisplay+theDisplay[n];
          };  
             theDisplay=newDisplay+this.innerHTML;  

          };
      } else if (this.innerHTML=="."){
             if((theDisplay.substr(k)).indexOf(".")<0){
              if(theDisplay[theDisplay.length-1]!=Number(theDisplay[theDisplay.length-1])){
               theDisplay=theDisplay+"0.";

               j=theDisplay.length-1;
             } else theDisplay=theDisplay+".";
              

               j=theDisplay.length-1;              

             };
            
      } else if(this.innerHTML==Number(this.innerHTML)){
            theDisplay=theDisplay+this.innerHTML;
               j=theDisplay.length-1;

      } else if(theCode===177){
            var frontDisplay="";
             numOnly=theDisplay.substr(k+1);
             if(!numOnly){
              theDisplay=theDisplay+"-";

               j=theDisplay.length-1;            
             } else {
                for (var m=0;m<k+1;m++){
                  frontDisplay=frontDisplay+theDisplay[m];
                 }; 
                 if(numOnly[0]==="-"){
                  numOnly=numOnly.substr(1);

               j=theDisplay.length-1;                  

                 } else{  
                  numOnly="-"+numOnly;

               j=theDisplay.length-1;                  

                 } 
                 theDisplay=frontDisplay+numOnly;
               } //else


        } else if (this.innerHTML==="DEL") {
          var newDisplay="";
          for(var n=0;n<theDisplay.length-1;n++){
            newDisplay=newDisplay+theDisplay[n];
          };
          j-=1;
          theDisplay=newDisplay;
          if(theDisplay[theDisplay.length-1]!=Number(theDisplay[theDisplay.length-1]) &&
            theDisplay[theDisplay.length-1]!="."){
            if(theDisplay[theDisplay.length-2]!=Number(theDisplay[theDisplay.length-1]) &&
               theDisplay[theDisplay.length-2]!="."){
               k=j-1;
            } else k=j;
          };
        } else if(this.innerHTML==="C") {
          theDisplay="";
        };
      

         display.value=theDisplay;
  	}); 

      total.addEventListener('click',function(event){

         var answer=display.value;
         display.value=eval(answer);
         theDisplay=eval(answer).toString();
      });

  };





}(window.console));