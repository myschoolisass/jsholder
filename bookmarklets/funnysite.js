
javascript:(function(){var elems=document.getElementsByTagName("*");
for(var i = 0; i<elems.length;i++)
{
	elems[i].style.fontFamily="Comic Sans MS";
	elems[i].style.fontSize=Math.random()*75+"px";
	elems[i].style.color='#'+Math.random().toString(16).slice(2, 8);
	elems[i].style.backgroundColor='#'+Math.random().toString(16).slice(2,8)}})();
document.onclick=function(){(function(){var d=0;setInterval(function(){document.body.style['-webkit-transform']= 'rotate('+ d +'deg)';d+=1},100)}());};