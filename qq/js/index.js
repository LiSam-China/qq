window.onload = function(){
	// alert(1321);
	// 获取图片列表元素对象
	let list = document.getElementById('list');
	
	let lis = document.getElementById('container').getElementsByTagName('li');
	
	let img = document.getElementById('list').getElementsByTagName('a');

	let new_lis =document.getElementById('container');
	let auto;

	let status = false;
	let index = 1;

	play();
	function animation(offset){
		status = true;
		let timer = 596;		//动画总时长
		// let offset = -596;
		let over_left = parseFloat(list.style.left) + offset;	
		let interval = 29.8;		//每帧的时长间隔
		let speed = offset/(timer/interval);//每一帧移动的距离
   		

		function go(){
			let left = parseFloat(list.style.left);
			let new_left = left + speed;
			list.style.left = new_left + 'px';
			if(speed<0 && new_left > over_left){
				setTimeout(go,interval);
			}else{					
				// list.style.left = over_left;
				// 无缝轮播
				if(over_left>-596){
					list.style.left = -2384+'px';
				};
				if(over_left<-2384){
					list.style.left = -596+'px';
				};
				status = false;
			}
		}
		go();
	}
	// 当鼠标移动到轮播图中，停止自动轮播
	// for(let i=0; i<lis.length; i++){
	// 	lis[i].onmouseover = function(){
	// 		clearInterval(auto);
	// 		lis[i].onmouseout = function(){
	// 			play();
	// 		}
	// 	}
	// }

	 for(let i=0; i<lis.length; i++){
        lis[i].onmouseover = function(){
        	// clearInterval(auto);
            if(!status){
	            let new_index = this.getAttribute('index')*1;
	            // console.log(new_index);
	            let offset = (index - new_index)*596;
	            index = new_index;      //目标索引替换原索引
	            animation(offset); 
	            showDot();
        	}
        }
    }

    
	new_lis.onmouseover=function(){
		clearInterval(auto);
	}
	new_lis.onmouseout=function(){
		play();
	}
	
	function play(){
		auto =  setInterval(function(){
			if (index<5) {
				console.log(index);
				animation(-596);
				showDot();
				index += 1;
			}else{
				index = 1;
			}
		},3000);
	}
	//封装显示当前焦点图函数
	function showDot(){
		for(let i=0; i<lis.length; i++){
			lis[i].className = '';
		}
		lis[index-1].className = 'on';
	}

// 中部第四个区块
	
	let indexss = 1;
	// 获取原点焦点元素
	let fourLi = document.getElementById('fourAa1').getElementsByTagName('li');
	// 获取图片焦点元素
	let fourAa = document.getElementById('fourAa').getElementsByTagName('li');
	// 获取大图显示焦点
	let fourAb = document.getElementById('fourAb').getElementsByTagName('img');
	// 获取
	let fourAa1 = document.getElementById('fourAa1');
	let fourAa2 = document.getElementById('fourAa');

	let auto1;
	

	// 定义鼠标划过
	let statuss = true;
	four();
	clear();
	function four(){
		for(let i=0; i<fourLi.length; i++){
			fourLi[i].onmouseover = function(){
				let new_index = this.getAttribute('index');
				indexss = new_index;
				showDot1();
				showDot2();
			}
		}
	} 
	fourAa1.onmouseover = function(){
		clearInterval(auto1);
	}
	fourAa1.onmouseout = function(){
		clear();
	}
	fourAa2.onmouseover = function(){
		clearInterval(auto1);
	}
	fourAa2.onmouseout = function(){
		clear();
	}
	function showDot1(){
		for(let i=0; i<fourLi.length; i++){
			fourLi[i].className = '';
		}
		fourLi[indexss-1].className = "fourLi";
	}


	// let index = 1;
	for(let i=0; i<fourAa.length; i++){
		fourAa[i].onmouseover = function(){
			let new_index = this.getAttribute('index')*1;
			indexss = new_index;
			// console.log(indexss);
			showDot2();
			showDot1();
		}	
	}

	function showDot2(){
		for(let i=0; i<fourAa.length; i++){
			fourAb[i].className = '';
		}	
		fourAb[indexss-1].className = 'opaci';	
	}


	function clear(){ 
		auto1 = setInterval(function(){
		// status = true;
			indexss++;
			if(indexss<5){
				showDot2();
				showDot1();
			}else{
				indexss = 0;
			}
			// statuss = false;
		},1000)
	}

}