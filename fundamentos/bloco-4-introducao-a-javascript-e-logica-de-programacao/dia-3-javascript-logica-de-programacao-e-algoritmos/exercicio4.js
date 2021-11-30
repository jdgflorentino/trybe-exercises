let n = 51;
let ast = "*";
let resultado = "";
let meio = (n + 1) / 2;
let esquerda = meio;
let direita = meio;

if (n > 1 && n % 2 !== 0) {
    for (let i = 0; i <= meio; i += 1) {
        for (let l = 0; l <= n; l += 1) {
            if (l > esquerda && l < direita) {
                resultado = resultado + ast;
            } else {
                resultado = resultado + " ";
            }
        }
        console.log(resultado);
        resultado = "";
        direita += 1;
        esquerda -= 1;
    }
} else {
    console.log("Escolha um número maior que 1 e que seja impar!!");
}