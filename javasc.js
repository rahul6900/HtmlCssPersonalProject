function sub() {

let x = document.getElementById("i").value;
let y = document.getElementById("in").value;

let z =document.getElementById("inp").value;
let a =document.getElementById("inpu").value;

let flag =1;


if(x==""){

document.getElementById("p").innerHTML="User name is empty";
flag=0;

}



else if( x.length <3){

    document.getElementById("p").innerHTML="User name is required min 3 char";
    flag=0;


}

else{

    document.getElementById("p").innerHTML="";

    
}


if(y==""){

    document.getElementById("p1").innerHTML="Email name is empty";
    flag=0;
    
    }
    else if( y.length <10){
    
        document.getElementById("p1").innerHTML="Email  is required min 10 char";
        flag=0;
    
    
    }
    else{

        document.getElementById("p1").innerHTML="";
    
    
    }


    if(z==""){

        document.getElementById("p2").innerHTML="phone number is empty";
        
        flag=0;
        }
        else if( z.length <10){
        
            document.getElementById("p2").innerHTML="Phone number  is required min 10 char";
            flag=0;
        
        
        }
        else{

            document.getElementById("p2").innerHTML="";
        
        
        }


        if(a==""){

            document.getElementById("p3").innerHTML="message box is empty";
            
            flag=0;
            }
            else if( a. trim().split(" ").length <5){
            
              
                document.getElementById("p3").innerHTML=" Message required min 5 words ";
                flag=0;
            
            
            
            }

            else{

                document.getElementById("p3").innerHTML="";
            
            
            }

if(flag){

return true;


}
else{ 
    return false;

}
}