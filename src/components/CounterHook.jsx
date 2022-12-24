import React, {useState, useContext} from 'react';
import {ThemeContext} from '../App.js';
import ProgressBar from './ProgressBar/ProgressBar';

export default function CounterHook({defaultValue}){
	const [state, setState] = useState({defaultValue});
	const style = useContext(ThemeContext);
	console.log('theme is: ', ThemeContext, style);
	return (<>
		<button style={style}  onClick={()=>setState({defaultValue: state.defaultValue -1})}>-</button>
		{state.defaultValue}
		<button style={style} onClick={()=>setState({defaultValue: state.defaultValue +1})}>+</button>
		<ProgressBar progress={10}/>
		</>)
}