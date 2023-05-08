<script>
  import SelectJob from "./SelectJob.svelte";
import UploadFile from "./UploadFile.svelte";

    $: step = 1;

</script>
<form class="flex flex-col items-center h-[100vh] justify-evenly" action="">
    <h1 class="font-bold">REGISTER PAGE</h1>
    <div class="flex flex-col p-1 h-[60%]">
        {#if step === 1}
                <input class="border p-2 my-2" type="text" placeholder="Username" >
                <small class="text-red-500">Error</small>
                <input class="border p-2 my-2" type="text" name=""  placeholder="Email" >
                <small class="text-red-500">Error</small>
                <input class="border p-2 my-2" type="text" name=""  placeholder="Password" >
                <small class="text-red-500">Error</small>
                <input class="border p-2 my-2" type="text" placeholder="Re-Password" >
                <small class="text-red-500">Errors</small>
        {:else if step === 2}
            <UploadFile/>
        {:else if step === 3}
            <SelectJob />            
        {/if}
    </div>
    <button class="bg-indigo-500 px-28 " type="{step < 3 ? 'button': 'submit'}" on:click={()=> step++}>{step < 3 ? 'NEXT': 'SUBMIT'}</button>
</form>