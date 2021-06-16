let users = [
    { id: 1, first_name: "Eamon", last_name: "Harhoff", email: "eharhoff0@imageshack.us", gender: "Male", age: 40, salary: 18888 },
    { id: 2, first_name: "Laney", last_name: "Whittam", email: "lwhittam1@issuu.com", gender: "Female", age: 20, salary: 15018 },
    { id: 3, first_name: "Lynett", last_name: "Twinberrow", email: "ltwinberrow2@gov.uk", gender: "Female", age: 20, salary: 13343 },
    { id: 4, first_name: "Lyn", last_name: "berrow", email: "ltwirow2@gov.uk", gender: "Male", age: 20, salary: 13343 }
  ];

//array.filter()  
  
let filterByGenderAndAge = users.filter((ele) => {
    return ele.gender === "Male" && ele.age < 40;
})

console.log(filterByGenderAndAge);

console.log("--------------");

//array.reduce() 
let AverageAge = users.reduce((sum, ele) => {
    let newSum = sum + ele.age
    return newSum;
},0)/users.length

console.log(AverageAge);

console.log("--------------");

//array.map()

let listOfName = users.map((ele)=>{
    return ele.first_name + " " + ele.last_name;
})

console.log(listOfName);

console.log("--------------");

//array.find()

let findByAge = users.find((ele) => {
    return ele.age === 20 ;
})

console.log(findByAge);

console.log("--------------");