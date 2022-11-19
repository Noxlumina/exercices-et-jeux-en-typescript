// Vous disposez d'une liste de nombre.
// Triez la liste du plus petit au plus grand

console.log("---tri de liste---")

const nombres: number[] = [12, 25, 5, 7, 6, -5];
console.log(`avant le tri ${nombres}`);
nombres.sort((a, b) => {
    return a - b;
});
console.log(`après le tri ${nombres}`);