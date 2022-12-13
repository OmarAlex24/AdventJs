const packOfGifts = ['game', 'videoconsole', 'computer'];
const reindeers = [
	'midudev',
	'pheralb',
	'codingwithdani',
	'carlosble',
	'blasco',
	'facundocapua',
	'madeval',
	'memxd',
];

// pack weights 4 + 4 + 4 = 12
// reindeers can carry (2 * 6) + (2 * 6) = 24

distributeGifts(packOfGifts, reindeers); // 2

function distributeGifts(packOfGifts, reindeers) {
	var giftsWeight = 0;
	var reindeersMax = 0;

	packOfGifts.forEach((element) => {
		giftsWeight += element.length;
	});

	reindeers.forEach((element) => {
		reindeersMax += element.length * 2;
	});

	console.log(giftsWeight, reindeersMax);

	return Math.floor(reindeersMax / giftsWeight);
}
