// 公共js
function public(){
	let tenxun =  document.getElementsByClassName('charts');
	// let indexs =1;
	for(let j=0; j<tenxun.length; j++){
		let liss = document.getElementsByClassName('charts')[j].getElementsByTagName('li');
		for(let i=0; i<liss.length; i++){
			liss[i].onmouseover = function(){
				let indexs = this.getAttribute('index');
				// console.log(liss);
				for(i=0;i<liss.length;i++){
					liss[i].className = '';
				}
				liss[indexs-1].className = 'NBA';	//当index为10时；lis下标为9
			}		
		}
	}
}
public();