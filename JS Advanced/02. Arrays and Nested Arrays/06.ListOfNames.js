function sortNames(names){
    names.sort();

    for (let i = 1; i <= names.length; i++) {
        console.log(`${i}. ${names[i-1]}`);    
    }
}

sortNames(["John", "Bob", "Christina", "Ema"]);