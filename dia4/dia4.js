var boxes = [
	{ l: 3, w: 3, h: 3 },
	{ l: 2, w: 2, h: 2 },
	{ l: 1, w: 1, h: 1 },
];

console.log(fitsInOneBox(boxes));

function fitsInOneBox(boxes) {
	let fit = true;

	boxes
		.sort((a, b) => a.l - b.l)
		.reduce((firstBox, currentBox) => {
			if (
				firstBox.l >= currentBox.l ||
				firstBox.w >= currentBox.w ||
				firstBox.h >= currentBox.h
			) {
				fit = false;
			}
			return currentBox;
		});

	return fit;
}
