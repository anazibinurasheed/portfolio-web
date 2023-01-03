
function validation(){
    let btn;

    var name=document.getElementById("name").value.trim();
    var email=document.getElementById("email").value.trim();
    var phone=document.getElementById("phone").value.trim();
    var message=document.getElementById("Message").value.trim();


    if(name=="" || email=="" || phone=="" || message=="")
    {
        alert('Please fill all fields');
        btn=false;
    }
    
    return btn;
}