function more(){
	var div = document.getElementById('content');
	var button = document.getElementById('more');
	div.removeChild(button);

	var iframe = document.createElement('iframe');
	div = document.getElementById('content');
	iframe.src = 'https://baike.baidu.com/item/%E6%B1%9F%E6%B3%BD%E6%B0%91/115299'
	iframe.width = 800;
	iframe.height = 600;
	div.appendChild(iframe);
}