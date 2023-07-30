<script>
  import { goto } from "$app/navigation";
    import math from "$lib/math.jpg"
    // console.log(math);
</script>
<div class="fixed top-0 left-0 w-[100vw] h-[100vh]">
    <div class=" bg-slate-500 h-{40}">
        <img src="{math}" alt="">
        <small><i>OnTime editing picture for couches</i></small>
    </div>
    <div class="py-8 px-2 ">
        <div class=" bg-slate-300 absolute px-2 mt-4 rounded-lg">I think the following is wrong</div>
        <div class="bg-blue-300 absolute right-3 mt-14 px-2 rounded-lg">there is no point <br> that it is wrong</div>
    </div>
    <div class=" bg-slate-200  w-[100vw] h-10 absolute bottom-0 flex justify-around ">
       <span class="py-2 text-slate-400">write your text here...</span> 
       <span class="rounded-lg px-2 py-2 bg-slate-500">Send</span>
    </div>
    <span on:click={()=> goto('')} class="bg-blue-300 p-1 fixed">
        🔙
    </span>
</div>
   