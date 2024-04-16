import { describe, it, expect } from 'vitest';
import {
	generateRandomNumbers,
	formatDateTimeForNigeria,
} from '../../utilities/helpers';

// Test suite for generateRandomNumbers function
describe('generateRandomNumbers function', () => {
	// Test to check if the function returns an array
	it('should return an array of random numbers within the specified range', () => {
		const result = generateRandomNumbers(25);
		expect(Array.isArray(result)).toBeTruthy(); // Check if the result is an array
		expect(result.length).toBe(5); // Check if the array length is as expected
		result.forEach((num) => {
			expect(num).toBeGreaterThanOrEqual(0); // Check if each number is greater than or equal to 0
			expect(num).toBeLessThan(25); // Check if each number is less than 25
		});
	});

	// Test to check if the function returns correct number of random numbers
	it('should return an array of specified length', () => {
		const result = generateRandomNumbers(10);
		expect(result.length).toBe(5); // Check if the array length is always 5
	});
});

// Test suite for formatDateTimeForNigeria function
describe('formatDateTimeForNigeria function', () => {
	// Test to check if the function returns a string
	it('should return a formatted date and time string', () => {
		const result = formatDateTimeForNigeria(new Date());
		expect(typeof result).toBe('string'); // Check if the result is a string
	});

	// Test to check if the function returns correct format for date and time
	it('should return a string in the format "Mon, Jan 01, 2022, 12:00 AM"', () => {
		const mockDate = new Date('2022-01-01T00:00:00');
		const result = formatDateTimeForNigeria(mockDate);
		expect(result).toBe('Sat, 1 Jan 2022, 0:00 am'); // Check if the format matches the expected format
	});

	// Test to check if the function returns default format if date parameter is not provided
	it('should return current date and time in the default format if date parameter is not provided', () => {
		const result = formatDateTimeForNigeria();
		const currentDate = new Date();
		const expected = Intl.DateTimeFormat('en-NG', {
			year: 'numeric',
			month: 'short',
			day: 'numeric',
			weekday: 'short',
			hour: 'numeric',
			minute: 'numeric',
			hour12: true,
		}).format(currentDate);
		expect(result).toBe(expected); // Check if the result matches the expected format
	});
});
