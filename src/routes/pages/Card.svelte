<script>
    import Icon from '@iconify/svelte';
   let imageUrl = '';
const handleChange = (ev) => {
    ev.preventDefault();
    let file = ev.target.files[0];
    imageUrl = URL.createObjectURL(file)
}
</script>
<div class="h-72 w-[100vw] my-3 p-2 shadow relative">
    <header class="flex absolute  w-[96%] pr-8  z-20">
        <div class="h-10 w-10 rounded-full bg-gray-100 border-t-2 border-l-2 border-gray-400 object-cover flex justify-center items-center">👸</div>
        <div class=" px-2">
            <small>00:23</small>
          
            <h4 class="font-bold bg-slate-50">Unknown <span class="bg-red-500">🎵</span><span class=" text-transparent">jo</span></h4>
        </div>
        <div class=" flex ml-auto">
            <p class=" animate-ping">🤪</p>
            <p class=" animate-bounce">🤣</p>
            <p class=" animate-pulse">🥵</p>
            <p class="">😄</p>
            <p class="">👋</p>
        </div>
    </header>
    <div class="w-full px-3 h-52 translate-y-[23px] ">
        <div class="ring-1 ring-[#eee] w-full h-full flex p-1 pt-6 rounded-xl bg-cover bg-center" style="background-image: url('{imageUrl}')">
            <p class="w-[60%] h-full overflow-y-auto px-2 py-3 text-sm bg-[#ffffff47] selection:bg-slate-800 selection:text-slate-200 selection:mix-blend-multiply ">Lorem Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis veniam debitis temporibus. Illo placeat pariatur fugit architecto dicta quas nostrum ut dolores cumque repellendus, aliquid ab harum eum suscipit vero. ipsum dolor sit amet consectetur, adipisicing elit. Expedita deserunt molestiae minima consequatur quidem facilis asperiores ut, nisi cum, totam aliquam ratione facere rerum quae. Vitae in adipisci accusantium. A?</p>
            <div class="flex flex-col justify-center items-center p-2 w-[40%]">
                <img class="w-20 h-20 object-cover rounded-full bg-yellow-800 ring ring-red-800" src="" alt="">
                <input class=" absolute" type="file" name="" id="" on:change={handleChange}>
                <small class="text-xs bg-[#ffffff47]">00:00  00:00</small>
                <p>Title</p>
                <div class="w-full h-8 mt-auto bg-[#eeeeee47] ring-1 flex justify-evenly items-center">
                    <Icon class="text-blck text-lg" icon="material-symbols:share-outline" />
                    <Icon class="text-blck text-lg" icon="ic:file-download" />
                    <Icon class="text-blck text-lg" icon="ph:chat-circle-dots-fill" />
                    <Icon class="text-blck text-lg" icon="material-symbols:add-reaction-outline" /> 
                </div>
            </div>
        </div>
    </div>
    <footer class=" translate-y-[23px] flex justify-between">
        <div class="flex space-x-1 p-2">
            <div class=" flex -space-x-3">
                <!-- <Icon class="" icon="mdi:account-multiple-plus" /> -->
                <span>🧑‍🦰</span>
                <span>🤴</span>
                <span>👸</span>
            </div>
            <span class="text-[10px] pt-1">You Ali and 23 others</span>
        </div>
   
        <p class="p-1">1 of 3</p>
        <div class="p-2  w-[40%]">
            <button class="w-full rounded-full bg-gradient-to-r from-transparent via-slate-100 to-slate-300 h-6 flex justify-end px-2 py-1 ">
                <Icon class="swipe" icon="ph:hand-swipe-right-duotone" />    
            </button>
        </div>
    </footer>
</div>
