function validate(){
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if(username=="riyaz" && password=="9361")
    {
     window.location.href="Jmc Web.html";    
    }
    else{
        alert("login faild");
    }
}