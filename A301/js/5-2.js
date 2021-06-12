

var date_regex = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;

// var testDate = "42/12/21"

// if (date_regex.test(testDate)) {
//     console.log("OK");
// }

let name = prompt("Please enter the full name");

let dateOfBirth;

do {
    dateOfBirth = prompt("Please enter the date of birth");

    if (date_regex.test(dateOfBirth) == false) {
        alert("Date of birth is fomat dd/mm/yyyy");
        continue;
    }

    break;
} while (true);



let gender = prompt("please enter the gender")

// var parts ='2014-04-03'.split('-');
// var mydate = new Date(parts[0], parts[1] - 1, parts[2]); 
// console.log(mydate.toDateString());

let age = (new Date()).getFullYear() - Number.parseInt(dateOfBirth.split("/")[2]);


alert("Hello " + name + " Your age is: " + age  );