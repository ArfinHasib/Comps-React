import { useState, useEffect } from 'react';

function useCounter(initialCount) {
	const [count, setCount] = useState(initialCount);

	useEffect(() => {}, [count]);

	const Increment = () => {
		setCount(count + 1);
	};

	return {
		count,
		Increment,
	};
}

export default useCounter;
