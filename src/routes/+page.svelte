<script>
  import { goto } from '$app/navigation';

// @ts-nocheck
        export let data;
        const goTo = () => {
                goto('/login')
        }
</script>

<div class="flex flex-col justify-center items-center h-[100vh] p-4">
        <div class="text-center">
                <h1 class="text-sm">{data.message} and Welcome to VoiceBook...</h1>
                <button on:click={goTo} class=" text-lg font-extrabold ">Start</button>
        </div>
</div>

