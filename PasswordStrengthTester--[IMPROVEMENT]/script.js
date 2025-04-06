const information = document.querySelector(".information")
const password = document.querySelector(".password")
const range = document.querySelector(".range")
const number = document.querySelector(".num")


password.addEventListener("input",(e)=>{
    const insertedPass = password.value;
    range.value=insertedPass.length
    console.log(range.value);
    number.innerHTML = insertedPass.length;
    checker(insertedPass);
})

function checker(insertedPass){
    let suggestions=[]
    suggestions.push(uppercase(insertedPass))
    suggestions.push(lowercase(insertedPass))
    suggestions.push(numbers(insertedPass))
    suggestions.push(symbols(insertedPass))
    suggestions = suggestions.filter(Boolean);
    information.innerText=suggestions.join("\n")
}

function uppercase(insertedPass){
    return samecheck(insertedPass,/[A-Z]/g,"uppercase");
}
function lowercase(insertedPass){
  return  samecheck(insertedPass,/[a-z]/g,"lowercase");
}
function numbers(insertedPass){
    return   samecheck(insertedPass,/[0-9]/g,"numbers")
}
function symbols(insertedPass){
    return  samecheck(insertedPass,/[^A-Za-z0-9]/g,"symbols")
}
function samecheck(insertedPass,regX,type){
// console.log(uppercase)
const matches = insertedPass.match(regX) || []

    if (matches==0){
        return `Your password has no ${type}`
    }
    if(matches.length<=2){
        return `Your password could use more ${type}`
      
    }
  else{
    return `✅ Good amount of ${type}`;
  }
}