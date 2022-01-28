const myRemove = require('./myRemove.js');

describe('teste da função', ()=>{
	it('retorno do array sem o item', ()=>{
		expect(myRemove([1,2,3,4],3)).toEqual([1,2,4]);
		expect(myRemove([1,2,3,4],3)).not.toEqual([1,2,3,4]);
		expect(myRemove([1,2,3,4],5)).toEqual([1,2,3,4]);
	});
});