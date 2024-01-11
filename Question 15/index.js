var amt = document.getElementById("amt");
var h1amt = document.getElementById("num1");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2")
var in1 = document.getElementById("in1");
var in2 = document.getElementById("in2");
var in3 = document.getElementById("in3");
var in4 = document.getElementById("in4");
var in5 = document.getElementById("in5");
var in6 = document.getElementById("in6");
var in7 = document.getElementById("in7");
var in8 = document.getElementById("in8");
document.getElementById("mid").style.display="none";
in1.disabled=true
in2.disabled="true"
in3.disabled="true"
in4.disabled="true"
function chance() {
    var a= amt.value;
    if (amt.value=="") {
        alert("value is not present in input box")
        in1.disabled="disabled"
    }
    else
    {
        amt.style.display="none"
        btn1.style.margin="0 0 0 50px"
        h1amt.style.display="flex"
        h1amt.style.color="white"
        h1amt.innerText=`${a} Rs`
       
        in1.disabled=""
        in2.disabled=""
        in3.disabled=""
        in4.disabled=""
    }
}
var num;
var c=1;
document.getElementById("lower").style.display="none"
fa= document.getElementById("fa");
function gen() {
    var a= amt.value;
    if(in1.value=="" || in2.value=="" || in3.value=="" || in4.value=="")
    {
        alert("lottray nimber is not feiled")
    
    }else{
        document.getElementById("lower").style.display="flex"
        document.getElementById("mid").style.display="block";
        var t = setInterval(()=>{
            num = Math.floor(Math.random()*9)
            if (c==1) {
                in5.value=num 
                if (in1.value==in5.value) {
                    a=a*10;
                    fa.innerText=`${a}Rs`
                    console.log(a);
                }
                c=c+1;
                
            }else if (c==2) {
                in6.value=num 
                if (in2.value==in6.value) {
                    a=a*10;
                    fa.innerText=`${a}Rs`
                    console.log(a);
                }
                c=c+1;
               
            }else if (c==3) {
                in7.value=num 
                if (in3.value==in7.value) {
                    a=a*10;
                    fa.innerText=`${a}Rs`
                    console.log(a);
                }
                c=c+1;
               
            }else if (c==4) {
                in8.value=num 
                if (in4.value==in8.value) {
                    a=a*10;
                    fa.innerText=`${a} Rs`
                    console.log(a);
                }
                clearInterval(t)
            }
        },1000)     
        
    }
}