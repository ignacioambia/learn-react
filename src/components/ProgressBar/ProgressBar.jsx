import React, {useContext} from 'react';
import './ProgressBar.css';
import {ThemeContext} from '../../App';


export default function ProgressBar({progress}){
	const theme = useContext(ThemeContext);
	console.log('theme is: ', theme);
	return (<div className="progress-bar">
		<div style={{...theme, width: progress + '%'}} className="progress"></div>
	</div>);
}