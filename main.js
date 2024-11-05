// Función para calcular la suma de resistencias en serie
function sumResistance(resistances) {
    const totalResistance = resistances.reduce((acc, res) => acc + Math.abs(res), 0);
    return `${totalResistance} ohmios`;
}

// Ejemplos de uso para sumResistance
console.log(sumResistance([-1, 5, 6, 3])); 
console.log(sumResistance([14, 3.5, 6])); 
console.log(sumResistance([8, 15, 100])); 

// Función para dividir un número en dos mitades
function numDiv(num) {
    const half = num / 2;
    return [Math.floor(half), Math.ceil(half)];
}

// Ejemplos de uso para numDiv
console.log(numDiv(4)); 
console.log(numDiv(10)); 

// Función para encontrar el nombre de una sociedad secreta
function secretName(members) {
    return members.map(name => name[0].toUpperCase()).sort().join('');
}

// Ejemplos de uso para secretName
console.log(secretName(["Esperanza", "Franco", "Nia"]));
console.log(secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel'])); 
console.log(secretName(['Harry', 'Ron', 'Hermione'])); 

// Función para mostrar el estado en línea de una lista de usuarios
function onlineStatus(users) { 
    const len = users.length;
    if (len === 0) return 'Nadie está en línea';
    if (len === 1) return `${users[0]} está en línea`;
    if (len === 2) return `${users[0]} y ${users[1]} están en línea`;
    return `${users[0]}, ${users[1]} y ${len - 2} más en línea`;
}

// Ejemplos de uso para onlineStatus
console.log(onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer'])); 

// Función para crear una matriz de múltiplos
function arrayMultiplos(numero, longitud) {
    return Array.from({ length: longitud }, (_, i) => numero * (i + 1));
}

// Ejemplos de uso para arrayMultiplos
console.log(arrayMultiplos(2, 10)); 
console.log(arrayMultiplos(17, 6)); 

// Función para determinar si una matriz es positivamente dominante
function positiveDom(arr) {
    const positives = arr.filter(num => num > 0).length;
    return positives > arr.length / 2;
}

// Ejemplos de uso para positiveDom
console.log(positiveDom([-1, -3, -5, 4, 6767])); 
console.log(positiveDom([1, -2, 3, -4, 5])); 

// Función para calcular el promedio antípoda
function antipodeAverage(arr) {
    const half = Math.floor(arr.length / 2);
    const firstHalf = arr.slice(0, half);
    const secondHalf = arr.slice(-half).reverse();
    return firstHalf.map((num, i) => (num + secondHalf[i]) / 2);
}

// Ejemplos de uso para antipodeAverage
console.log(antipodeAverage([1, 2, 3, 5, 22, 6])); 
console.log(antipodeAverage([1, 2, 3, 4, 5, 6])); 
console.log(antipodeAverage([1, 2, 3, 4, 5])); 
