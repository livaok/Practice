var cards   = ['6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
var diller  = [getCard()];
var player1 = [getCard(), getCard()];

alert(getStatus());

var currentSumm = getSumOfCards(player1);
var currentSumOfDil = getSumOfCards(diller);
if (currentSumm === 21)
{
	alert('Выигрыш');
}
else
{
	while (currentSumm < 21)
	{
		if (prompt('Взять еще одну карту? да/нет') === 'да')
		{
			player1.push(getCard());
			alert(getStatus());
			currentSumm = getSumOfCards(player1);
		}
		
		/* if (currentSumm > 21)
		{
			alert('Перебор: Сумма карт равна ' + currentSumm);
			break;
		}
		
		if (currentSumm == 21)
		{
			alert('Выигрыш');
			break;
		}
		*/
			while (currentSumOfDil < 17)
			{
				diller.push(getCard());
				currentSumOfDil = getSumOfCards(diller);
			}
		
			if (currentSumOfDil === 21)
			{
				alert('У дилера блэкджек ' + getStatus());
			}
			else if (currentSumOfDil > 21)
			{
				alert('У дилера перебор ' + getStatus());
			}
			else if (currentSumOfDil < currentSumm)
			{
				alert('Игрок 1 выиграл ' + getStatus());
			}
			else if (currentSumOfDil === currentSumm)
			{
				alert('Ничья' + getStatus());
			}
			else
			{
				alert('Игрок 1 проиграл ' + getStatus());
			}
	}
}
	
	function getCard()
	{
		return cards[getRandomInt(0, cards.length - 1)];
	}
	
	function getRandomInt(min, max)
	{
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	
	function getStatus()
	{
		return ('Дилер: ' + diller.join(' ') + '. ' + 'Игрок 1: ' + player1.join(' ') + '.');
	}
	
	function getSumOfCards(arr)
	{
		var count = 0;
		for (var i = 0; i < arr.length; i++)
		{
			var elem = arr[i];
			if (elem != 'A')
			{
				if (elem == 'J' || elem == 'Q' || elem == 'K')
				{
					count += 10;
				}
				else
				{
					count += parseInt(elem);
				}
			}
			else
			{
				if (count > 10)
				{
					count++;
				}
				else
				{
					count += 11;
				}
			}
		}
		
		return count;
	}



