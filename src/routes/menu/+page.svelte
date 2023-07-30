<script>

  import { goto } from "$app/navigation";

</script>
<div class="flex justify-between px-2">
    <span>🔙</span>
    <div on:click={()=> goto('')}>🕸️ Setting</div>
</div>