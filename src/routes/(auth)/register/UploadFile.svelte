<script>
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

   function handleDrop(event) {
    event.preventDefault();
    file = Array.from(event.dataTransfer.files);
    typeCheck(file[0])
     imageUrl = URL.createObjectURL(file[0]);
  }

  function handleFileInput(event) {
    file = event.target.files[0];
    typeCheck(file);    
    imageUrl = URL.createObjectURL(file);
  }

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
    reader.readAsArrayBuffer(file); 
  }
</script>

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


