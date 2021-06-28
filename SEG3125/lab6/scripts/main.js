// Some functions, especially the validating, was learned from the TAs code.
// TA's example: https://github.com/RyanMatte/Lab5_Starter/blob/8a36fa653e5b44bb9edef1b3e58c276288565a2b/scripts/service.js

// Array of availability of vets
var availability = [
    {
        name: "Paige Willis",
        daysOfWeek: [1,2,3,5],
    },
    {
        name: "Sandra Petroff",
        daysOfWeek: [2,3,4,6],
    },
    {
        name: "Rob Kartes",
        daysOfWeek: [1,4,5,6],
    }
];

var saveServices;
var saveProfessional;
var saveDate;
var saveTime;
var savePetName;
var savePetAnimal;
var saveName;
var savePhone;
var saveEmail;
var saveCreditCard;


// Validates the phone number given
function validatePhoneNumber(){
    let txtPhone = $( "#phone" ).val();
    let regex = /^\(\d{3}\)[\s-]\d{3}[-]\d{4}$/;
    return regex.test(txtPhone);
}

function validCreditCardNumber(){
    let txtCCNum = $( "#creditCard" ).val();
    let regex = /^\d{4}\s\d{4}\s\d{4}\s\d{4}$/;
    return regex.test(txtCCNum);
}

// Restricts the available dates in the date picker
// Getting select's value, learned from: https://freakyjolly.com/demo/getDropDownValue_JavaScript_jQuery.html
// Disabling weekdays learn from https://forum.jquery.com/topic/datepicker-disabling-mondays
function restrictDates(day) {
    let chosenPro = $( "#sltProfessional" ).val();
 
    for(var i = 0; i < availability.length; i++){
        if (availability[i].name == chosenPro) {
            break;
        }
    }
    // Restricting days the professional is unavailable
    if (day.getDay() === 0){
        return [false];
    } else if ( i >= 0 && i < availability.length ){
        if (availability[i].daysOfWeek.indexOf(day.getDay()) === -1){
            return [false];
        }
    }
    return [true];
}

function mySubmit(){

    saveServices = $( "#sltService" ).val();
    saveProfessional = $( "#sltProfessional" ).val();
    saveDate = $( "#datepicker" ).val();
    saveTime = $( "#time" ).val();
    savePetName = $( "#txtPetName" ).val();
    savePetAnimal = $( "#txtAnimal" ).val();
    saveName = $( "#txtName" ).val();
    savePhone = $( "#phone" ).val();
    saveEmail = $( "#email" ).val();
    saveCreditCard = $( "#creditCard" ).val();

    console.log("Try to clear");
    $( "#sltService" ).val("");
    $( "#sltProfessional" ).val("");
    $( "#datepicker" ).val("");
    $( "#time" ).val("");
    $( "#txtPetName" ).val("");
    $( "#txtAnimal" ).val("");
    $( "#txtName" ).val("");
    $( "#phone" ).val("");
    $( "#email" ).val("");
    $( "#creditCard" ).val("");

    $( "#appointmentModal" ).modal('hide');

    $( "#cfmService" ).text(saveServices);
    $( "#cfmProfessional" ).text(saveProfessional);
    $( "#cfmDate" ).text(saveDate);
    $( "#cfmTime" ).text(saveTime);
    $( "#cfmPetName" ).text(savePetName);
    $( "#cfmAnimal" ).text(savePetAnimal);
    $( "#cfmName" ).text(saveName);
    $( "#cfmPhone" ).text(savePhone);
    $( "#cfmEmail" ).text(saveEmail);

    $( "#confirmationModal" ).modal('show');

}

// JQuery listening starts
$( document ).ready(function(){
    console.log("Document ready.");

    $( "#sltProfessional" ).on("change", function(){
        $( "#datepicker" ).val("");
    })
    
    // validate dates
    $( "#datepicker" ).datepicker({
        dateFormat: 'dd-mm-yy',
        minDate: new Date(),
        maxDate: "+6M",
        beforeShowDay: restrictDates
    });

    // validate phone number
    $( "#phone" ).on("change", function(){
        if (validatePhoneNumber()){ // If valid
            $( "#phone" ).removeClass("error");
        } else { // If invalid
            alert("ALERT - The phone number is in the wrong format. The expected format is: (###) ###-####. Please try again!");
            $( "#phone" ).val("");
            $( "#phone" ).addClass("error");
        }
    });

    // validate credit card number
    $( "#creditCard" ).on("change", function(){
        if (validCreditCardNumber()){ // If valid
            $( "#creditCard" ).removeClass("error");
        } else { // If invalid
            alert("ALERT - The credit card number is in the wrong format. The expected format is: #### #### #### ####. Please try again!");
            $( "#creditCard" ).val("");
            $( "#creditCard" ).addClass("error");
        }
    })
});

