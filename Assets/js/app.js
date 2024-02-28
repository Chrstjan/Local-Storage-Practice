localStorage.setItem("name", "Bob");
// localStorage.removeItem("name");
console.log(localStorage.getItem("name"));

sessionStorage.setItem("name", "John");
//sessionStorage.setItem("name", "Joe");
console.log(sessionStorage.getItem("name"));

document.cookie = "name=Chr; expires=" + new Date(9999, 0, 1).toUTCString();
document.cookie =
  "lastName=smith; expires=" + new Date(9999, 0, 1).toUTCString();

console.log(document.cookie);

let myObject = {
  name: "John",
  age: 56,
};

let myObj_seriallized = JSON.stringify(myObject);
console.log(myObj_seriallized);

localStorage.setItem("myObj", myObj_seriallized);
// console.log(localStorage.getItem("myObj"));

let myObj_deseriallized = JSON.parse(localStorage.getItem("myObj"));

console.log(myObj_deseriallized);
