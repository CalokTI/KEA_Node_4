<script>
import Nametag from "../../components/Nametag.svelte";

let john={
    name:"John", 
    age:"4", 
    address:"home"}

</script>

<div>
    <!-- svelte-ignore a11y-mouse-events-have-key-events -->
    <h1 id="dog" on:mouseover={() => console.log("Woof")}>🐱‍🐉</h1>

    <Nametag nametagInfo={john}></Nametag>
</div>

<style>

</style>