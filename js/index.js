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
		'V',
		'Q',
		'K',
		'T'];
	return cards[getRandomInt(0, cards.length - 1)];
}

var diler = [getCard()];
var player1 = [getCard(), getCard()];

alert('Дилер: ' + diler.join(' ') + ' Игрок 1: ' + player1.join(' '));

function getSumOfCards(arr)
{
	var count = 0;
	for (var i = 0; i < arr.length; i++)
	{
		if (isNaN(arr[i]))
		{
			if (arr[i] == 'V' || arr[i] == 'Q' || arr[i] == 'K')
			{
				count = count + 10;
			}
			else
			{
				count = count + 11;
			}
		}
		else if (6 <= arr[i] <= 10)
		{
			count = count + parseInt(arr[i]);
		}
	}
	return count;
}
alert(getSumOfCards(diler));
alert(getSumOfCards(player1));

