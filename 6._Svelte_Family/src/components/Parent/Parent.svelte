<script>
    export let name;
    export let onCallMeeting;

</script>

<h2 on:click={onCallMeeting(name)} >Hi, I'm {name} and a svelte parent</h2>


<style>
    h2 {
        color: green;
    }
</style>