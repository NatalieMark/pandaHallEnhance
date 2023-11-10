console.log("Test Test!!")
let discounts = document.querySelectorAll(".discount")
var discountArray = Array.prototype.slice.call(discounts, 0);

//const element = document.createElement("button")
//element.innerText = "test knap"
//names[0].appendChild(element)

function comparefn(a, b){
    let discountPercentageA = a.innerHTML
    discountPercentageA = parseInt(discountPercentageA.slice(0,-1))

    let discountPercentageB = b.innerHTML
    discountPercentageB = parseInt(discountPercentageB.slice(0,-1))

    if (discountPercentageA < discountPercentageB){
        return -1
    } else if (discountPercentageA > discountPercentageB){
        return 1
    } else return 0

}

var sortedList = discountArray.sort(comparefn)
console.log(sortedList.innerHTML)

//names.forEach(name => name.innerText = 'Hej Matematik')
