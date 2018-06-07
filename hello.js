let money,
    name,
    time,
    price
   /* function start() {
    	money = prompt('Ваш бюджет');
    	while ( isNaN(money) || money == '' || money = null ) {
    		money = prompt('Ваш бюджет?');    		
    	}
    	name = prompt('название вашего магазина?').toUpperCase();
    	time = 21;
    	};*/
    //start();
    let mainList = {
    	budget : money,
    	shopName : name,
    	shopGoods : [],
    	employers : {},
    	open : false,
    	discount : false,
    	shopItems : [],
         chooseGoods: function chooseGoods() {        // Товар
	       for (let i = 0;i<5;i++) {
		let a = prompt('Какой тип товаров продаем?');
		if ((typeof(a)) === 'string' && (typeof(a)) != null && a!='') {
			console.log('Все верно');
			mainList.shopGoods[i] = a;
		} else {
			i = i - 1;
		}
	}
},
       workTime : function workTime(time) {         //Время
if (time<0) {
	console.log('Не  может быть');
} else if (time>8 && time<20) {
	console.log('Время работать');
	mainList.open = true;
} else if ( time < 24 ) {
	console.log('Слишком поздно');
} else  {
	console.log('В сутках 24 часа');
}
},  
        adiscount : function adiscount() {
		if (discount == 'true') {
			price = (price*100)/80;
		}
	}, 
	    hireEmployers : function hireEmployers() {
	 for (let m; m < 4; m++) {
		let m1 = prompt('Имя сотрудника') 
			if((typeof(m1)) === 'string') {
				mainList.employers[m] = m1;

			} else {
				m = m-1;
			}
		}
	},
	    dayBudget : function dayBudget() {
	alert('Бюджет на день' + money/30 )
}, 
        chooseShopItems : function chooseShopItems() {
        	let items = prompt('Перечислите через запятую товары','');
        	while (items == '' || (typeof(items)==null)) {
        		items = prompt('Перечислите через запятую товары','');
        	}
        	mainList.shopItems = items.split(',');
        	mainList.shopItems.push(prompt('Еще товары',''));
        	mainList.shopItems.sort();
        	mainList.shopItems.forEach(function(item,i,arr) {
        		
        		alert('У нас вы можете приобрести:' + i + ' ' + item);
        	})

        }
        chooseShopItems();

} 
for (let key in mainList) {
	console.log('Наш магазин влючает в себя: ' + key);
}






/* let i = 0;
do {
	let m = prompt('Какой тип товаров продаем?','Ничего');
	while(m == 'Ничего' || m == '') {
		m = prompt('Какой тип товаров продаем?','Ничего');
	};
	
	mainList.shopGoods[i] = m;
	i++;
} 

 let i = 0;
while ( i<5) {
	let m = prompt('Какой тип товаров продаем?','Ничего');
	while(m == 'Ничего' || m == '') {
		m = prompt('Какой тип товаров продаем?','Ничего');
	};
	
	mainList.shopGoods[i] = m;
	i++;

}; 
alert (money/30);*/

//workTime(18);






