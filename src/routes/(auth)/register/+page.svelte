<script>
// @ts-nocheck

  import { goto } from "$app/navigation";

// @ts-nocheck

import SelectJob from "./SelectJob.svelte";
// import UploadFile from "./UploadFile.svelte";
 $: step = 1;
    $: name = '';
    $: email = '';
    $: password = '';
    $: image = '';
    $: job = '';
// @ts-nocheck

    /**
   * @type {any}
   */
    let file;
  /**
   * @type {string | null}
   */
  let imageUrl;
  $: fileUploadError =  ''

   /**
   * @param {{ preventDefault: () => void; dataTransfer: { files: Iterable<any> | ArrayLike<any>; }; }} event
   */
   function handleDrop(event) {
    event.preventDefault();
    file = Array.from(event.dataTransfer.files);
    typeCheck(file[0])
     imageUrl = URL.createObjectURL(file[0]);
  }

  /**
   * @param {{ target: { files: any[]; }; }} event
   */
  function handleFileInput(event) {
    file = event.target.files[0];
    typeCheck(file);  
    imageUrl = URL.createObjectURL(file);
    image = imageUrl;
  }

  /**
   * @param {Blob | null} file
   */
  function typeCheck(file) {
     const reader = new FileReader();
    reader.onload = () => {
      const arrayBuffer = reader.result;
      // @ts-ignore
      const uint8Array = new Uint8Array(arrayBuffer);
      const blob = new Blob([uint8Array]);
      const fileReader = new FileReader();
      
      fileReader.onloadend = () => {
        // @ts-ignore
        const arr = (new Uint8Array(fileReader.result)).subarray(0, 4);
        let header = '';
        for (let i = 0; i < arr.length; i++) {
          header += arr[i].toString(16);
        }
        let type = '';
        switch (header) {
          case '89504e47':
            type = 'image/png';
            break;
          case '47494638':
            type = 'image/gif';
            break;
          case 'ffd8ffe0':
          case 'ffd8ffe1':
          case 'ffd8ffe2':
            type = 'image/jpeg';
            break;
          default:
            type = '';
            break;
        }
        if (!type) {
            file = null;
            imageUrl = null;
            return fileUploadError = 'Invalid file type. Please select a valid image file.';
        }
      };
      
      fileReader.readAsArrayBuffer(blob);

    };
    // @ts-ignore
    reader.readAsArrayBuffer(file); 
    // dispatcher('profile', file)
    // image = file
  }
    // @ts-ignore
    const handleJob = (e) => {
        job = e.detail
    }
    // @ts-ignore
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name)
        formData.append('email', email)
        formData.append('password', password)
        formData.append('job', job)
        formData.append("file", image) // imageUrl

    let headersList = {
        'Authorization': 'Bearer mytoken',
        'API-Key': 'myapikey',
        "Accept": "*/*",
        "User-Agent": "svelte app (http://localhost:5173/register)",
    }

    let response = await fetch("http://localhost:3030/user/register", { 
        method: "POST",
        body: formData,
        headers: headersList
    });
        if (response.status == 200) {
            const result = await response.json();
            goto('/pages')
            console.log(result);
        } else {
            const err = await response.json();
            console.log(err);
        }
    }


</script>
<form class="flex flex-col items-center h-[100vh] justify-evenly" on:submit={handleSubmit} enctype="multipart/form-data" method="post" >
    <h1 class="font-bold">REGISTER PAGE</h1>
    <div class="flex flex-col p-1 h-[50%]">
        {#if step === 1}
            <input class="border p-2 my-2" type="text" name=""  placeholder="Username" on:change={(e) => name = e.target.value} >
            <small class="text-red-500">Error</small>
            <input class="border p-2 my-2" type="text" name=""  placeholder="Email" on:change={(e) => email = e.target.value} >
            <small class="text-red-500">Error</small>
            <input class="border p-2 my-2" type="text" name=""  placeholder="Password" on:change={(e) => password = e.target.value} >
            <small class="text-red-500">Error</small>
            <input class="border p-2 my-2" type="text" name=""  placeholder="Re-Password" >
            <small class="text-red-500">Errors</small>
        {:else if step === 2}
            <div class="flex flex-col items-center">
                    <!-- svelte-ignore a11y-missing-attribute -->
                <div class=" relative w-40" on:drop={handleDrop} on:dragover={event => event.preventDefault()}>
                    <p class="hidden md:inline-block text-center text-xs ">Drag and drop a file here or click the button to select a file.</p>
                    <img class="rounded-full border w-40 h-40 object-cover bg-slate-300 " src={imageUrl && imageUrl} />
                    <div class="w-10 h-10 rounded-full bg-indigo-600 absolute right-0 bottom-1 ">
                        <div class="relative"> <span class=" absolute top-2 left-4 text-white font-bold text-xl">+</span></div>
                        <input class="opacity-0 w-10 h-10 " type="file" name="profile" on:change={handleFileInput}>
                    </div>
                </div>
                    <h2>UPLOAD YOUR PROFILE PICTURE</h2>
                    {#if fileUploadError}
                        <small class="text-red-500">{fileUploadError}</small>
                    {/if}
            </div>
        {:else if step === 3}
            <SelectJob on:job={handleJob}/>
        {/if}
    </div>
    <div>
        <button class="bg-indigo-500 {step === 3 && 'bg-lime-700'} px-28 " type="{step < 4 ? 'button': 'submit'}" on:click={()=> step < 4 && step++}>{step < 3 ? 'NEXT': 'SUBMIT'}</button>
        <p class="text-center text-xs my-2">Already have an account! <a href="/login"><b>LOGIN</b></a></p>
    </div>
</form>


