var diller = [getCard()];
var player1 = [getCard(), getCard()];

alert(getStatus());

if (getSumOfCards(player1) == 21)
	alert('Выигрыш');
else
{
	do
	{
		if (prompt('Взять еще одну карту? да/нет') == 'да' && getSumOfCards(player1) < 21)
		{
			player1.push(getCard());
			alert(getStatus());
		}
		else
		{
			alert('Недобор, сумма карт равна ' + getSumOfCards(player1) + '. Игрок отказался взять карту');
			break;
		}
	}
	while (getSumOfCards(player1) < 21)
	
	if (getSumOfCards(player1) > 21)
	{
		alert('Перебор: Сумма карт равна ' + getSumOfCards(player1));
	}
}

function getCard()
{
	var cards = [
		'6',
		'7',
		'8',
		'9',
		'10',
		'J',
		'Q',
		'K',
		'A'];
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
		if (arr[i] != 'A')
		{
			if (arr[i] == 'J' || arr[i] == 'Q' || arr[i] == 'K')
			{
				count = count + 10;
			}
			else
			{
				count = count + parseInt(arr[i]);
			}
		}
	}
	for (var i = 0; i < arr.length; i++)
	{
		if (arr[i] == 'A')
		{
			if (count > 10)
				count = count + 1;
			else
				count = count + 11;
		}
	}
	return count;
}


