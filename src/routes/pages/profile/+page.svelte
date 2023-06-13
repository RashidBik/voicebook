<script>
    export let data;
    let {result} = data;
    console.log(result.posts);
</script>
<div>
    <h1>Profile</h1>
    <p>{result?.name}</p>
    <p>{result?.job}</p>
    <p>{result?.password}</p>
    <p>{result?.email}</p>
    <div>
        {#each result?.posts as post }
            <p>{post.title}</p>
            <!-- <img src="{post.imageUrl}" alt="{post.imageUrl}"> -->
            <p>{post.imageUrl}</p>
            <p>{post.background}</p>
            <p>{post.richText}</p>
            <p>{post.audioUrl}</p>
            <p>{post.bgUrl}</p>
        {/each}
    </div>
</div>

