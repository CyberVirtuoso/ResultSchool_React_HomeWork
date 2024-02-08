import { useState } from 'react';
import styles from './App.module.css'

const App = () => {
	const NUMS = [0,1,2,3,4,5,6,7,8,9];
	const[operand1, setOperand1] = useState(null);
	const[operand2, setOperand2] = useState(null);
	const[operator, setOperator] = useState(null);
	const[result, setResult] = useState(null);

	//callback набора числа
	const btnClick = (event) =>{
		const number = event.target.innerText
		if(!operator)
		{
			setOperand1((updatedValue) => operand1 ? updatedValue + number : number);
		}
		else
		{
			setOperand2((updatedValue) => operand2 ? updatedValue + number : number);
		}
	}

	//callback очистки ввода
	const btnClear = () =>{
		setOperand1(null);
		setOperator(null);
		setOperand2(null);
		setResult(null);
	}


	//callback нажатия операторов
	const btnOperator = (event) =>{
		switch (event.target.innerText) {
			case '+':
				setOperator('+')
				break;
			case '-':
				setOperator('-')
				break;
			case  '=':
				if(operand2)
				{
					switch (operator){
						case '+':
							setResult(`${Number(operand1)+Number(operand2)}`)
							break;
						case '-':
							setResult(`${Number(operand1)-Number(operand2)}`)
							break;
						default:
							break;
					}
				}
				break;
			default:
				break;
		}
	}


	return (
		<>
			<div>
				<div className={styles.inputBlock}>
					{/*<input className={styles.input} type="text" value={inputString} readOnly={true} />*/}
					<p className={styles.input}>{`${operand1 ? operand1:''}${operator? operator:''}${operand2?operand2:''}${result? '=':''}`}<span className={result?styles.greenText:styles.whiteText}>{`${result? result:''}`}</span></p>
					<button onClick={btnClear} className={styles.clearBtn}>C</button>
				</div>
				<div className={styles.keyBoard}>
					{NUMS.map((num) => (
						<button onClick={btnClick} className={styles.btn} key={num}>{num}</button>
					))}
					<button onClick={btnOperator} className={styles.btn}>+</button>
					<button onClick={btnOperator} className={styles.btn}>-</button>
					<button onClick={btnOperator} className={styles.btn}>=</button>
				</div>
			</div>
		</>
	)
}

export default App
