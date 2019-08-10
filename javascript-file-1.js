var isPlaying=true,value,user_score=0,rival_score=0,rival_value;
//-----------------------------------BEFORE GAME STARTS--------------------------------------
document.getElementById('roll').style.display='none';
document.getElementById('dice-pic1').style.display='none';
document.getElementById('dice-pic2').style.display='none';
document.getElementById('score-0').textContent='0';
document.getElementById('score-1').textContent='0';
//--------------------------------NEW GAME MOUSE-OVER CODE----------------------------------
document.getElementById('new-game').addEventListener('mouseover',function(){
		document.getElementById('new-game').style.backgroundColor='green';
	});
	document.getElementById('new-game').addEventListener('mouseout',function(){
		document.getElementById('new-game').style.backgroundColor='white';
});
//----------------------------------------AFTER GAME STARTS--------------------------------
document.getElementById('new-game').addEventListener('click',function(){
//---------------------------------BACKGROUND MUSIC CODE -----------------------------------
	if(isPlaying==true){
		document.getElementById('gaana').play();
		document.getElementById('new-game').textContent='Stop Game.';
		document.getElementById('new-game').onclick=function(){
			location.reload();	
		};	
	//---------------------------------ROLL DICE ONCLICK CODE------------------------------------
		var rollbtn = document.getElementById('roll');
		rollbtn.onmouseover=function(){
			rollbtn.style.backgroundColor='darkcyan';
		};
		rollbtn.onmouseout=function(){
			rollbtn.style.backgroundColor='beige';
		};
		
			rollbtn.addEventListener('click',user);
			rollbtn.addEventListener('click',rival);
		
	//--------------------------------------------------------------------------------------------

		document.getElementById('roll').style.display='block';
		document.getElementById('dice-pic1').style.display='block';
		document.getElementById('dice-pic2').style.display='block';
	//--------------------------------------------------------------------------------------------
		function user(){
			value = Math.floor(Math.random()*6)+1;
			document.getElementById('dice-img1').src='game-images/dice-'+value+'.png';
			user_score=user_score + value;
			document.getElementById('score-0').innerHTML=user_score;
			if(user_score>=40){
				if(user_score>rival_score){
					document.getElementById('score-0').style.fontSize='30px';
					document.getElementById('score-0').textContent='YOU WON';
					endGame();
				}
				else{
					document.getElementById('score-1').style.fontSize='30px';
					document.getElementById('score-1').textContent='RIVAL WON';
					endGame();
				}
			}	
		};

		function rival(){
			rival_value = Math.floor(Math.random()*6)+1;
			document.getElementById('dice-img2').src='game-images/dice-'+rival_value+'.png';
			rival_score=rival_score + rival_value;
			document.getElementById('score-1').innerHTML=rival_score;
			if(rival_score>=40){
				if(rival_score>user_score){
					document.getElementById('score-1').style.fontSize='30px';
					document.getElementById('score-1').textContent='RIVAL WON';
					endGame();
				}
				else{
					document.getElementById('score-0').style.fontSize='30px';
					document.getElementById('score-0').textContent='YOU WON';
					endGame();
				}
			}	
		};
		function endGame(){
			document.getElementById('roll').style.display='none';
			document.getElementById('gaana').pause();
		}
	}
});