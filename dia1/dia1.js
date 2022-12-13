const gifts = ['cat', 'game', 'socks'];
const wrapped = wrapping(gifts);

console.log(wrapped);

function wrapping(gifts) {
	let wrapped = gifts.map(function (element) {
		return `${'*'.repeat(
			element.length + 2
		)}\n*${element}*\n${'*'.repeat(element.length + 2)}`;
	});
	return wrapped;
}
