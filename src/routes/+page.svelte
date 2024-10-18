<script lang="ts">
	import type { PageData } from "./$types";

	const cdnBase = "https://brawlstars.inbox.supercell.com";

	let time = new Date(Date.now()).toTimeString().split(" ")[0];

	export let data: PageData;
	let event = data.event;
</script>

<h1>{event.title} (campaign: {event.targeting.campaignId})</h1>
<p>as of {time} Local Time</p>
<p>{event.tracker.progress}%</p>

<h1>milestones</h1>

{#each event.milestones as milestone}
	<img src={`${cdnBase}${milestone.image.small.path}`} alt="" />
	<p>{milestone.progress}% is {milestone.label}</p>
	<p>complete: {milestone.unlocked}</p>
{/each}
