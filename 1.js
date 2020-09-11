// Часть I Задание 1

function plus(n){
    let action = []
    for(let i = 0; i <= n - 1; i++){
        action[i] = i;
    }
    console.log(action)
}
    plus(4)

//Задание 2

function pri(n1 , n2 , n3) {
    if (n1 % n2 % n3 == 0 ) 
    
        console.log('true');
        else console.log ('false');
    } 
    pri(8, 2, 3)
    pri(1, 5, 7)

   //Задание 3

   function capitalize(str) {
    if (str && typeof(str) === "string") {
        str = str.split(" ");    
        for (var i = 0, x = str.length; i < x; i++) {
            if (str[i]) {
                str[i] = str[i][0].toUpperCase() + str[i].substr(1);
            }
        }
        return str.join(" ");
    } else {
        return str;
    }
}
console.log(capitalize("denis duminskiy"))

// Часть II Задание 1

function text() {
    let p1 = document.getElementById('text__input').value;
    let p2 = document.getElementById('text__inbox');
    p2.innerHTML = p1;
}