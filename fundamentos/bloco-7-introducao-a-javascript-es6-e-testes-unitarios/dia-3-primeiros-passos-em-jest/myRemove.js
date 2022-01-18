function myRemove(arr,item){
	let newArr=[];

	for (let i=0;i<arr.length;i++){
		if(item !==arr[i]){
			newArr.push(arr[i]);
		}
	}
	return newArr;
}
module.exports=myRemove;