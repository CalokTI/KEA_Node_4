<script>
	import UserRegistration from "./pages/userRegistration/UserRegistration.svelte";

	import { onMount } from "svelte";

	import { Wave } from "svelte-loading-spinners";
	import Colors from "./pages/userRegistration/Colors/colors.svelte";

	let username;
	onMount(async () => {
		const response = await fetch("/api/fetchuser");
		const { data } = await response.json();
		console.log("username is", data);
		username = data;
	});
</script>

{#if username === false}
	<div id="loading"><Wave /></div>
{:else if username}
	<div>Hello {username}</div>
	<Colors />
{:else}
	<UserRegistration />
{/if}

<main />

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	#loading {
		min-height: 100vh;
		min-width: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
