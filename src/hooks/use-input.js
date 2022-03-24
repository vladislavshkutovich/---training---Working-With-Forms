import { useReducer } from 'react';

const initialInputState = {
	value: '',
	isTouched: false,
};

const inputStateReducer = (state, action) => {
	if (action.type === 'INPUT') {
		return { value: action.value, isTouched: state.isTouched };
	}
	if (action.type === 'BLUR') {
		return { isTouched: true, value: state.value };
	}
	if (action.type === 'RESET') {
		return { isTouched: false, value: '' };
	}
	return initialInputState;
};

const useInput = (validateValueFn) => {
	const [inputState, dispatchFn] = useReducer(
		inputStateReducer,
		initialInputState
	);

	const valueIsValid = validateValueFn(inputState.value);
	const hasError = !valueIsValid && inputState.isTouched;

	const valueChangeHandler = (event) => {
		dispatchFn({ type: 'INPUT', value: event.target.value });
	};
	const inputBlurHandler = () => {
		dispatchFn({ type: 'BLUR' });
	};

	const reset = () => {
		dispatchFn({ type: 'RESET' });
	};

	return {
		value: inputState.value,
		isValid: valueIsValid,
		hasError,
		valueChangeHandler,
		inputBlurHandler,
		reset,
	};
};

export default useInput;
