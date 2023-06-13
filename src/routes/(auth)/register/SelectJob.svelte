<script>
// @ts-nocheck

  import { createEventDispatcher } from "svelte";

const dispatcher = createEventDispatcher()
const handleChange = (/** @type {{ value: any; }} */ e) => {
    dispatcher('job', e.target.value)
}
</script>
<div class="flex flex-col justify-center items-center">
    <h2 class="font-bold">WHAT'S YOUR JOB?</h2>
    <span class="text-xs text-center ">if you tell about your job it will help <br> you find co_workers</span>
    <select class="w-40 p-2 my-6" name="job" on:change={handleChange}>
        <option value="">🙅</option>
        <option value="web">web</option>
        <option value="eng">Eng</option>
    </select>
</div>