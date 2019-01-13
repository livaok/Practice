function getRandomInt(min, max)
{
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

alert(getRandomInt(0, 100));


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
	return cards[getRandomInt(0, cards.length - 1)]; x
}

var diler = [getCard()];
var player1 = [getCard(), getCard(), getCard()];

alert('Дилер: ' + diler.join(' ') + ' Игрок 1: ' + player1.join(' '));

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
alert('Сумма карт равна ' + getSumOfCards(player1));

