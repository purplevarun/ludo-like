document.getElementById('new-game').addEventListener('click',function(){
	document.getElementById('gaana').play();
	document.getElementById('new-game').textContent='Stop Game.';
	document.getElementById('new-game').onclick=function(){
		location.reload();	
	};
});
document.getElementById('new-game').addEventListener('mouseover',function(){
	document.getElementById('new-game').style.backgroundColor='green';
});
document.getElementById('new-game').addEventListener('mouseout',function(){
	document.getElementById('new-game').style.backgroundColor='white';
});