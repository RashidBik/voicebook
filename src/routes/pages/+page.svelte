<script>
  import Card from "./Card.svelte";

</script>

<!-- TODO..... `the icons must be like youtube header which changes every time` -->
<div class="flex flex-col w-full">
    <div class="flex">
        <section class="grid space-x-2 scroll-my-96 grid-rows-1 grid-flow-col !overflow-scroll w-[100vw] p-2 shadow ">
            <div class=" flex justify-center items-center text-fuchsia-50 w-12 h-12 rounded-full bg-lime-900">all</div>
            <div class=" flex justify-center items-center text-fuchsia-50 w-12 h-12 rounded-full bg-red-900">music</div>
            <div class=" flex justify-center items-center text-fuchsia-50 w-12 h-12 rounded-full bg-indigo-900">book</div>
            <div class=" flex justify-center items-center text-fuchsia-50 w-12 h-12 rounded-full bg-yellow-900">news</div>
            <div class=" flex justify-center items-center text-fuchsia-50 w-12 h-12 rounded-full bg-green-900">lesson</div>
            <div class=" flex justify-center items-center text-fuchsia-50 w-12 h-12 rounded-full bg-blue-900"></div>
            <div class=" flex justify-center items-center text-fuchsia-50 w-12 h-12 rounded-full bg-pink-900"></div>
            <div class=" flex justify-center items-center text-fuchsia-50 w-12 h-12 rounded-full bg-gray-900"></div>
            <div class=" flex justify-center items-center text-fuchsia-50 w-12 h-12 rounded-full bg-lime-900"></div>
            <div class=" flex justify-center items-center text-fuchsia-50 w-12 h-12 rounded-full bg-lime-900"></div>
            <div class=" flex justify-center items-center text-fuchsia-50 w-12 h-12 rounded-full bg-lime-900"></div>
        </section>
        <div class=" self-center px-3">
            ⏯️
        </div>
    </div>
    <main class="h-[100vh] overflow-y-auto">
        <Card />
    </main>
</div>
