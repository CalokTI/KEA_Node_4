<script>
    export let name;
    export let isGirl = false;
    export let stereotype = "";
    export let onCallMeeting;

    import { supermarket } from "../../store/supermarket.js";

    function eatCereal() {
        supermarket.update((storeValue) => {
            if (storeValue.cereal > 0) {
                storeValue.cereal -= 1;
            }
        });
    }
</script>

<h3
    on:click={onCallMeeting(name)}
    class:girl={isGirl}
    class={stereotype || "no-stereotype"}
>
    Hi, I'm {name} and a svelte child
</h3>
<div class="cereal">Cereal: {$supermarket.cereal}</div>
<button on:click={eatCereal}>Consume sugar, gain rush</button>

<style>
    h3 {
        color: blue;
    }
    .girl {
        color: pink;
    }
    .bright {
        background-color: gold;
        border-radius: 5px;
    }
    .blackSheep {
        background-color: black;
    }
    .cereal {
        color: yellow;
    }
</style>
