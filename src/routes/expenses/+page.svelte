<script>

	import Button from '../../lib/Button.svelte';

	export  let form = {		
		message: "Form data inputs are empty",
		data: {
			expense: null,
			amount: null,
			description: null,
			date: null,
		}
	};

	$: console.log(form);
	
</script>

<svelte:window/>

<svelte:head>
	<title>Expenses</title>
	<meta name="description" content="Expenses" />
</svelte:head>

<h1 class="visually-hidden">Expenses</h1>

<form method="POST">
	
	<!-- action="?/enter" -->

	<input type="text" name="expense" placeholder="Expense" value={form?.data.expense || ""}/>
	&nbsp;
	<input type="text" name="amount" placeholder="Amount" value={form?.data.amount || ""}/>
	&nbsp;
	<input type="text" name="description" placeholder="Description" value={form?.data.description || ""}/>
	&nbsp;
	<input type="date" name="date" placeholder="Date" value={form?.data.date || ""}/>
	&nbsp;
	<Button type="submit">Capture</Button>

</form>

<div class="paragraph">

	<p>{form?.message || ""}</p>
	<p>{form?.data.expense || ""}</p>
	<p>{form?.data.amount || ""}</p>
	<p>{form?.data.description || ""}</p>
	<p>{form?.data.date || ""}</p>

	<br>
	<br>
	<br>

	<p>Use a for each loop to display data from database here</p>

</div>
	

<div class="anchor">
	<a class="getting-started" href="/expenses/getting-started">Getting Started</a>
</div>

<style>

	form {
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
	}

	form input {
		width: 150px;
	}

	.paragraph {
		margin-top: 15%;
		text-align: center;
		width: 100%;
		height: 100%;
	}

	.anchor {
		margin-top: 30%;
		text-align: center;
		width: 100%;
		height: 100%;
	}

	.getting-started {
		color: var(--color-text);
	}

	.getting-started::before {
		content: 'i';
		display: inline-block;
		font-size: 0.8em;
		font-weight: 900;
		width: 1em;
		height: 1em;
		padding: 0.2em;
		line-height: 1;
		border: 1.5px solid var(--color-text);
		border-radius: 50%;
		text-align: center;
		margin: 0 0.5em 0 0;
		position: relative;
		top: -0.05em;
	}

	@keyframes wiggle {
		0% {
			transform: translateX(0);
		}
		10% {
			transform: translateX(-2px);
		}
		30% {
			transform: translateX(4px);
		}
		50% {
			transform: translateX(-6px);
		}
		70% {
			transform: translateX(+4px);
		}
		90% {
			transform: translateX(-2px);
		}
		100% {
			transform: translateX(0);
		}
	}

</style>
