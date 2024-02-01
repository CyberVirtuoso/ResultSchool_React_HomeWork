import logo from './logo.svg';
import './App.css';
import React, { createElement } from 'react';

function App()
{
	return React.createElement(
		"div",
		{
			className: 'App'
		},
		React.createElement(
			'header',
			{
				className: 'App-header'
			},
			React.createElement(
			'image',
				{
					src: logo,
					className: 'App-logo',
					alt: 'Logo'
				}
			),
			React.createElement(
				'p',
				{},
				'Edit',
				createElement(
					'code',
					'src/App.js'
				),
				'and save to reload'
			),
			React.createElement(
				'a',
				{
					className: 'App-link',
					href: 'https://reactjs.org',
					target: '_blank',
					rel: 'nopener noreferrer'
				},
				'Learn React'
			),
			React.createElement(
				'p',
				`${new Date().getFullYear()}`
			)
		)
	);
}

export default App;
