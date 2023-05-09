<script>
  import SelectJob from "./SelectJob.svelte";
import UploadFile from "./UploadFile.svelte";

    $: step = 1;

</script>
<form class="flex flex-col items-center h-[100vh] justify-evenly" action="/pages">
    <h1 class="font-bold">REGISTER PAGE</h1>
    <div class="flex flex-col p-1 h-[50%]">
        {#if step === 1}
            <input class="border p-2 my-2" type="text" name=""  placeholder="Username" >
            <small class="text-red-500">Error</small>
            <input class="border p-2 my-2" type="text" name=""  placeholder="Email" >
            <small class="text-red-500">Error</small>
            <input class="border p-2 my-2" type="text" name=""  placeholder="Password" >
            <small class="text-red-500">Error</small>
            <input class="border p-2 my-2" type="text" name=""  placeholder="Re-Password" >
            <small class="text-red-500">Errors</small>
        {:else if step === 2}
            <UploadFile />
        {:else if step === 3}
            <SelectJob />
        {/if}
    </div>
    <div>
        <button class="bg-indigo-500 {step === 3 && 'bg-lime-700'} px-28 " type="{step < 4 ? 'button': 'submit'}" on:click={()=> step < 4 && step++}>{step < 3 ? 'NEXT': 'SUBMIT'}</button>
        <p class="text-center text-xs my-2">Already have an account! <a href="/login"><b>LOGIN</b></a></p>
    </div>
</form>