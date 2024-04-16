/**
 * Generates an array of random numbers within a specified range.
 *
 * @param {number} arrLength - The length of the desired range for random number generation.
 * @return {array} An array of random numbers within the specified range.
 */
export const generateRandomNumbers = (arrLength) => {
	// Create an empty array to store the random numbers
	const randomNumbers = [];

	// Loop for the desired number of elements
	for (let i = 0; i < 5; i++) {
		// Generate a random decimal between 0 (inclusive) and 1 (exclusive)
		const randomNumber = Math.random();

		// Multiply the random number by the desired range (25)
		// and use Math.floor to get an integer between 0 and 24 (inclusive)
		const numberInRange = Math.floor(randomNumber * arrLength);

		// Push the random number into the array
		randomNumbers.push(numberInRange);
	}

    // console.log(randomNumbers);

	// Return the array of random numbers
	return randomNumbers;
};

/**
 * Formats a date and time object according to the Nigerian locale (en-NG).
 *
 * @param {Date} date - The date and time object to format, defaults to the current date and time if not provided.
 * @return {string} The formatted date and time string in the specified format.
 */
export const formatDateTimeForNigeria = (date) => {
	const input = date ? new Date(date) : new Date();
	// Get the current date object
	const options = {
		year: 'numeric',
		month: 'short',
		day: 'numeric',
		weekday: 'short',
		hour: 'numeric',
		minute: 'numeric',
		hour12: true, // Use 12-hour format
	};

	// Format the date according to Nigerian locale (en-NG)
	const formatter = new Intl.DateTimeFormat('en-NG', options);
	const formattedDateTime = formatter.format(input);

	// Return the formatted date time string
	return formattedDateTime;
};
