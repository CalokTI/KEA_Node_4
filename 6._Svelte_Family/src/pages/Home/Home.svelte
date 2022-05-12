<script>
import Child from "../../components/Child/Child.svelte";
import Parent from "../../components/Parent/Parent.svelte";

import { supermarket } from "../../store/supermarket.js";

console.log($supermarket);

const parents = [
    {
        id: 0,
        name:"Gertrude"
    },
    {
        id: 1,
        name:"Monica"
    }
];

const children = [
    {
        id: 0,
        name: "junior",
        isGirl: false,
        stereotype: "bright",
    },
    {
        id: 1,
        name: "Gertrude Junior",
        isGirl: true,
        stereotype: "",
    },
    {
        id: 2,
        name: "Karen",
        isGirl: true,
        stereotype: "blackSheep",
    },
]

function handleFamilyMeeting(name) {
    console.log("A family meeting has been called by", name);
}

</script>
<h1>Welcome to the home of the Svelte Family</h1>


{#each parents as parent (parent.id)}
    <Parent onCallMeeting={handleFamilyMeeting} name={parent.name} />
{/each}

{#each children as child (child.id)}
    <Child onCallMeeting={handleFamilyMeeting} name={child.name} isGirl={child.isGirl} stereotype={child.stereotype}/>
{/each}

<h3>Online portal to the supermarket</h3>


<div>{JSON.stringify($supermarket, null, 4)}</div>

<style>
    h1 {
        color: orangered;
    }
</style>