import useInput from '../hooks/use-input';

const BasicForm = (props) => {
	const {
		value: enteredFirstName,
		isValid: enteredFirstNameIsValid,
		hasError: firstNameInputHasError,
		valueChangeHandler: firstNameChangeHandler,
		inputBlurHandler: firstNameBlurHandler,
		reset: resetFirstNameInput,
	} = useInput((value) => value.trim() !== '');

	const {
		value: enteredLastName,
		isValid: enteredLastNameIsValid,
		hasError: lastNameInputHasError,
		valueChangeHandler: lastNameChangeHandler,
		inputBlurHandler: lastNameBlurHandler,
		reset: resetLastNameInput,
	} = useInput((value) => value.trim() !== '');

	const {
		value: enteredEmail,
		isValid: enteredEmailIsValid,
		hasError: emailInputHasError,
		valueChangeHandler: emailChangeHandler,
		inputBlurHandler: emailBlurHandler,
		reset: resetEmailInput,
	} = useInput(
		(value) => value.trim() !== '' && value.includes('@') && value.includes('.')
	);

	let formIsValid = false;

	if (
		enteredFirstNameIsValid &&
		enteredLastNameIsValid &&
		enteredEmailIsValid
	) {
		formIsValid = true;
	}

	const formSubmissionHandler = (event) => {
		event.preventDefault();

		if (
			!enteredFirstNameIsValid ||
			!enteredLastNameIsValid ||
			!enteredEmailIsValid
		) {
			return;
		}

		// useState()
		console.log(enteredFirstName);
		console.log(enteredLastName);
		console.log(enteredEmail);

		resetFirstNameInput();
		resetLastNameInput();
		resetEmailInput();
	};

	const firstNameInputClasses = !firstNameInputHasError
		? 'form-control'
		: 'form-control invalid';

	const lastNameInputClasses = !lastNameInputHasError
		? 'form-control'
		: 'form-control invalid';

	const emailInputClasses = !emailInputHasError
		? 'form-control'
		: 'form-control invalid';

	return (
		<form onSubmit={formSubmissionHandler}>
			<div className="control-group">
				<div className={firstNameInputClasses}>
					<label htmlFor="name">First Name</label>
					<input
						type="text"
						id="name"
						onChange={firstNameChangeHandler}
						onBlur={firstNameBlurHandler}
					/>
				</div>
				<div className={lastNameInputClasses}>
					<label htmlFor="name">Last Name</label>
					<input
						type="text"
						id="name"
						onChange={lastNameChangeHandler}
						onBlur={lastNameBlurHandler}
					/>
				</div>
			</div>
			<div className={emailInputClasses}>
				<label htmlFor="name">E-Mail Address</label>
				<input
					type="text"
					id="name"
					onChange={emailChangeHandler}
					onBlur={emailBlurHandler}
				/>
			</div>
			<div className="form-actions">
				<button disabled={!formIsValid}>Submit</button>
			</div>
		</form>
	);
};

export default BasicForm;
