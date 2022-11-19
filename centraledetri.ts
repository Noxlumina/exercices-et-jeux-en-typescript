// Vous disposez d'une liste de nombre.
// Triez la liste du plus petit au plus grand

const nombres : number[] = [12, 25, 5, 7, 6, -5];
nombres.sort((a,b)=>{
return a - b;
});
console.log(nombres);