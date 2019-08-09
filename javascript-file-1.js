document.getElementById('new-game').addEventListener('click',function(){
//---------------------------------BACKGROUND MUSIC CODE -----------------------------------
	document.getElementById('gaana').play();
	document.getElementById('new-game').textContent='Stop Game.';
	document.getElementById('new-game').onclick=function(){
		location.reload();	
	};

//--------------------------------NEW GAME MOUSE-OVER CODE----------------------------------
	document.getElementById('new-game').addEventListener('mouseover',function(){
		document.getElementById('new-game').style.backgroundColor='green';
	});
	document.getElementById('new-game').addEventListener('mouseout',function(){
		document.getElementById('new-game').style.backgroundColor='white';
	});
//---------------------------------ROLL DICE ONCLICK CODE------------------------------------
	var rollbtn = document.getElementById('roll');
	rollbtn.onclick=function(){
		var value = Math.floor(Math.random()*6)+1;
		alert(value);
	}
});