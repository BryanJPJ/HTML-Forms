function displayData () {
    const userName = document.getElementById("uname").value;
    const userEmail = document.getElementById("uemail").value;
    const userAge = document.getElementById("uage").value;
    let optionSelected = document.getElementById("uoptions");
    let textOption = optionSelected.options[optionSelected.selectedIndex].text;
    let boxChecks = document.querySelectorAll(".valueCheck");
    let mensaje = document.getElementById("mensaje").value;

    function checkRadio (){
        let radioOption1 = document.getElementById("radio1").checked;
        let showText1 = document.getElementById("radio1").value;
        let radioOption2= document.getElementById("radio2").checked;
        let showText2 = document.getElementById("radio2").value;
        let radioOption3 = document.getElementById("radio3").checked;
        let showText3 = document.getElementById("radio3").value;
       if(radioOption1 === true){
        console.log("Opcion escogida: " + showText1);
       }
       if(radioOption2 === true){
        console.log("Opcion escogida: " + showText2);
       }
       if(radioOption3 === true){
        console.log("Opcion escogida: " + showText3);
       }
    }
    function checkBox() {
       boxChecks.forEach((element)=>{
        if (element.checked == true) {
            console.log("Lenguajes y Frameworks conocidos: " + element.value);
        }
       });
    }

    console.log("Nombre: " + userName);
    console.log("Email: " + userEmail);
    console.log("Edad: " + userAge);
    console.log("Opcion Escogida: " + textOption);
    console.log(checkRadio());
    console.log(checkBox());
    console.log("Mensaje que quiere imprimir: " + mensaje);

}
