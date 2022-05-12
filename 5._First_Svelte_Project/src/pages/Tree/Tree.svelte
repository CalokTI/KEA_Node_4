<script>
    import Apple from "../Tree/Apple.svelte";

    const apples = [
        "🍏",
        "🍎",
        "🍏",
        "🍎",
        "🍏",
        "🍎",
        "🍏",
        "🍎",
        "🍏",
        "🍎",
        "🍌",
        "🍐",
        "🍒"
    ];

    function pickAnApple(farmerName) {
        console.log(farmerName, "picked an apple");
        apples.pop();
        apples = apples;
    }
</script>

<div id="tree">
    {#each apples as apple}
        <Apple {apple} />
    {/each}
</div>
<div id="trunk">
    <button on:click={() => pickAnApple("John Wayne")}>Pick an apple</button>
</div>

<style>
    #tree {
        display: flex;
        align-items: center;

        padding: 20px;
        background-color: green;
        border-radius: 50%;
        height: 400px;
        width: 400px;
        margin: 0 auto;
    }
    #trunk {
        background-color: brown;
        width: 80px;
        height: 120px;
        margin: 0 auto;
    }
    button {
        color: aliceblue;
        background-color: brown;
    }
</style>
