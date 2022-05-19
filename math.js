function pythagore_function(cote1,cote2,cote3)  {
    console.log ("rentrer dans pythagore_function")
    
    var cotes = [parseInt(cote1),parseInt(cote2),parseInt(cote3)]
    console.log("les cotés avant sort()")
    console.log(cotes)
    cotes.sort(function(a, b) {
      return a - b;
    })
    console.log("les cotés après sort()")
    console.log(cotes)
    console.log("Plus grand cote:")
    console.log(cotes[2])
    
    if(cotes[2]**2 == cotes[1]**2 + cotes[0]**2){
    alert("ce triangle est rectangle")
    }
    else{
      alert("ce triangle n'est pas rectangle")
    }
}

function PairOuImpaire(chiffre) {
alert("luv chiken")
}