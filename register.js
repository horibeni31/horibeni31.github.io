console.log("Register.js");
//atob(location.hash.substring(1))





function FormCheck(){
    console.log("Checking form results...");
    //document.getElementById("errorMessage").innerHTML = "Form checked";
    document.getElementById("errorMessage").innerHTML = atob(location.hash.substring(1));
    console.log(atob(location.hash.substring(1)));
}