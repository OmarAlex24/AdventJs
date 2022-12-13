const year = 2023;
const holidays = ['01/06', '04/01', '12/25']; // format MM/DD

// 01/06 is January 6, Thursday. Count.
// 04/01 is April 1, Friday. Count.
// 12/25 is December 25, Sunday. Do not count.

function countHours(year, holidays) {
	let counterExtraHours = 0;

	holidays.forEach((element) => {
		let date = new Date(element + '/' + year);
		console.log(date);

		let numDay = date.getDay();
		console.log(numDay);

		if (numDay === 0 || numDay === 6) {
			return null;
		}
		if (year % 4 !== 0 && date === '02/29') {
			return null;
		}

		counterExtraHours++;
	});

	return counterExtraHours * 2;
}

countHours(year, holidays); // 2 days -> 4 extra hours in the year
