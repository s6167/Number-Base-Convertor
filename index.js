function convert(){
    let from = document.getElementById("select1").value;
    let to = document.getElementById("select2").value;

    let input=  document.getElementById("input1").value;

    

    //-----------------Decimal to all-------------------------
    if(from=="Decimal" && to=="Binary"){
        input = +input;
        ans = input.toString(2);
        
    }
    else if(from=="Decimal" && to=="Octal"){
        input = +input;
        ans = input.toString(8)
        
    }
    else if(from=="Decimal" && to=="HexaDecimal"){
        input = +input;
        ans =input.toString(16)
       
    }
    else if(from=="Decimal" && to=="Decimal"){
        ans = +input;
        
    }
    //------------------Hexadecimal to all---------------------------
    else if(from=="HexaDecimal" && to=="Decimal"){
        ans = parseInt(input, 16)
        s  
    }
    else if(from=="HexaDecimal" && to=="Binary"){
        ans = parseInt(input, 16).toString(2)
        
    }
    else if(from=="HexaDecimal" && to=="Octal"){
        ans =parseInt(input,16).toString(8)
        
    }
    else if(from=="HexaDecimal" && to=="HexaDecimal"){
        ans=input
        
    }
    //--------------Binary to All--------------------------------
    else if(from=="Binary" && to =="Decimal"){
        ans = parseInt(input, 2)
        
    }
    else if(from=="Binary" && to =="HexaDecimal"){
        ans = parseInt(input, 2).toString(16)
        
    }
    else if(from=="Binary" && to =="Octal"){
        ans = parseInt(input, 2).toString(8)
        
    }
    else if(from=="Binary" && to =="Binary"){
        ans = input
        
    }
    //-------------------Octal to All--------------
    else if(from=="Octal" && to =="Decimal"){
        ans = parseInt(input, 8)
        
    }
    else if(from=="Octal" && to =="HexaDecimal"){
        ans = parseInt(input, 8).toString(16)
        
    }
    else if(from=="Octal" && to =="Binary"){
        ans = parseInt(input, 8).toString(2)
        
    }
    else if(from=="Octal" && to =="Octal"){
        ans=input
    }

    if(isNaN(ans)){
        // console.log("Enter Current Value:" + ans)
        ans= "Invalid Input"
        document.getElementById("output").classList.add("invalidOutput")
        document.getElementById("output").innerHTML = "Output: "+ans
    }
    else{
        
        document.getElementById("output").classList.remove("invalidOutput")
        document.getElementById("output").classList.add("valid")
        document.getElementById("output").innerHTML = "Output: "+ans
    }

    document.getElementById("output").focus()
}

function swap(){
    let from = document.getElementById("select1").value;
    let to = document.getElementById("select2").value;

    document.getElementById("select1").value=to
    document.getElementById("select2").value=from

    let from2 = document.getElementById("select1").value
    document.getElementById("label").innerText = "Enter "+from2 +" Number"
}

function changed(){
    
    let from = document.getElementById("select1").value
    document.getElementById("label").innerText = "Enter "+from +" Number"
    document.getElementById("input1").value=""
    document.getElementById("input2").value=""
}

let from = document.getElementById("select1").value
document.getElementById("label").innerText = "Enter "+from +" Number"