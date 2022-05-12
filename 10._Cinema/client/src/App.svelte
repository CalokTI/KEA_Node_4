<script>
	import { onMount } from "svelte";
	import { baseURL } from "./store/generalStore.js";

	let movies;

	onMount(async () => {
		const response = await fetch ($baseURL + "/movies");
		const { data } = await response.json();
		movies = data;
	})
</script>

<main>
	<h1>Hello!</h1>
	{$baseURL}
	<h1>{JSON.stringify(movies)}</h1>
	
</main>

<footer> ©{new Date().getFullYear()}</footer>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
		min-height: calc(100vh - 60px);
	}
	footer {
		background-color: #ff3e00;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>