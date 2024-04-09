import '../styles/form.css';

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
