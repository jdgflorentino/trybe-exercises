const num = (apostado, sorteado) => sorteado === apostado;

const sorteio = (apostado, callback) => {

const sorteado = Math.floor(Math.random() * 5) + 1;
	 
return callback(apostado, sorteado)? 'Parabéns' : 'Tente novamente';
}

console.log(sorteio(3, num));

