<script>
    import Icon from '@iconify/svelte';

    $: active = 'home'
</script>
<div>
    <header class="flex justify-between p-3">
        <ul class="flex space-x-3">
            <li class="flex font-bold">VoiceBook</li>
            <Icon icon="material-symbols:search" />
        </ul>
        <ul class="flex space-x-3">
            <Icon icon="ion:earth" />
            <Icon class="text-xl" icon="tabler:menu-2" />
        </ul>
    </header>
    <div class="flex justify-evenly p-2 shadow items-baseline  ">
        <a class="{active === 'home' && "shadow"} shadow-black" on:click={()=> active = 'home'} href="/pages">
            <Icon class="text-lg" icon="oi:list-rich" />
        </a>
        <a class="{active === 'table' && 'shadow'} shadow-black" on:click={()=> active = 'table'} href="/pages/table">
            <Icon class="text-lg" icon="bi:grid-3x3-gap-fill" />
        </a>
        <a class="{active === 'lock' && 'shadow'} shadow-black" on:click={()=> active = 'lock'} href="/pages/lock">
            <Icon class="text-lg" icon="material-symbols:lock" />
        </a>
        <a class="{active === 'plus' && 'shadow'} shadow-black" on:click={()=> active = 'plus'} href="/pages/plus">
            <Icon class="text-2xl" icon="mdi:plus-thick" />
        </a>
        <a class="{active === 'profile' && 'shadow'} shadow-black" on:click={()=> active = 'profile'} href="/pages/profile">
            <Icon  class="text-2xl" icon="mdi:user" />
        </a>
    </div>
</div>
<slot/>