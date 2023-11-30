const testP =document.getElementById("testP")

testP.innerText = "超酷的拉"

//storage

//Json.Stringify
//Json.parse

let dog = {
    name: "可口可樂",
    type :"臘腸",
    age : 2
}

localStorage.setItem("dog",JSON.stringify(dog))
console.log(JSON.stringify(dog))
console.log(typeof(JSON.stringify(dog)))

let obj = localStorage.getItem("dog")
console.log(JSON.parse(obj))