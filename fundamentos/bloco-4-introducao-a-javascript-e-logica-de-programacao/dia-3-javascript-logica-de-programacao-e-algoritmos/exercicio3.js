let n = 5;
let ast = '*';
let resultado = '';
let posicao = n;



for (let i = 0; i < n; i += 1) {
    for (let l = 0; l <= n; l += 1) {
        if (l < posicao) {
            resultado = resultado + ' ';
        } else {
            resultado = resultado + ast;
        }
    }

    console.log(resultado);
    resultado = '';
    posicao -= 1;

}