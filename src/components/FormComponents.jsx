import '../styles/form.css';

/**
 * Renders an input field component.
 *
 * @param {string} name - The name attribute for the input field.
 * @param {string} label - The label text for the input field.
 * @param {string} value - The current value of the input field.
 * @param {string} type - The type of the input field (default is 'text').
 * @param {string} error - Any error message related to the input field.
 * @param {function} handleChange - The function to handle input changes.
 * @param {boolean} required - Indicates if the input field is required (default is false).
 * @return {JSX.Element} The input field component.
 */
export const InputField = ({
	name,
	label,
	value,
	type = 'text',
	error,
	handleChange,
	required = false,
}) => {
	return (
		<div className='field'>
			<label>
				<span>
					{label} <strong>*</strong>
				</span>
				<input
					type={type}
					name={name}
					value={value}
					onChange={handleChange}
					required={required}
				/>
			</label>
			{error && <p>{error}</p>}
		</div>
	);
};

/**
 * Renders a message field component.
 *
 * @param {string} name - The name attribute for the message field.
 * @param {string} value - The current value of the message field.
 * @param {string} label - The label text for the message field.
 * @param {string} error - Any error message related to the message field.
 * @param {function} handleChange - The function to handle message changes.
 * @param {boolean} required - Indicates if the message field is required (default is false).
 */
export const MessageField = ({
	name,
	value,
	label,
	error,
	handleChange,
	required = false,
}) => {
	return (
		<div className='field'>
			<label>
				<span>
					{label} <strong>*</strong>
				</span>
				<textarea
					name={name}
					value={value}
					onChange={handleChange}
					required={required}
				/>
			</label>
			{error && <p>{error}</p>}
		</div>
	);
};

/**
 * Renders a submit button component.
 *
 * @param {string} label - The label text for the button.
 * @return {JSX.Element} The submit button component.
 */
export const SubmitButton = ({ label }) => {
	return (
		<button type='submit' className='submit'>
			{label}
		</button>
	);
};
