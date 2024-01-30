import logo from './logo.svg';


document.body.insertAdjacentHTML(`
<div class="App">
	<header class="App-header">
		<img src={logo} class="App-logo" alt="logo" />
		<p>Edit src/App.js and save to reload.</p>
		<a
		className="App-link"
		href="https://reactjs.org"
		target="_blank"
		rel="noopener noreferrer">Learn React </a>
		<p>{new Date().getFullYear()}</p>
	</header>
</div>
`);
