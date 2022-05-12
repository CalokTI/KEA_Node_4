<script>
	export let name;

	import Tree from "./pages/Tree/Tree.svelte";
	import Profile from "./pages/Profile/Profile.svelte";
	import Dog from "./pages/Dog/Dog.svelte";

</script>

<main>
	<h1>Hello {name}!</h1>
	<Profile name={name} />
	<Profile name={"Anders"} />

	<Tree />

	<Dog />
</main>

<style>
	main {
		background-color: aquamarine;
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
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