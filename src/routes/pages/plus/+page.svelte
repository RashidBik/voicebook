<script>
// @ts-nocheck
import {Howl, Howler} from 'howler';
// import MusicPlayer from "../MusicPlayer.svelte";
/**
* @type {HTMLVideoElement | null}
*/
let video = null;
/**
* @type {HTMLCanvasElement | null}
*/

    let canvas = null;
    $: camera = false;
    $: addVoice = false;
    $: background = 'gray';
    $: imageUrl = '';
    $: capturing = false;
    $: recording = false;
    $: title = '';
    $: richText = '';
    $: audioUrl = '';
    let mediaRecorder = null;
    let chunks = [];
    let bgUrl = '';

    let sound = new Howl({
    src: [audioUrl]
    });


// Plays the audio
    function playSound() {
        sound.play();
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {background, imageUrl, title, richText, audioUrl, bgUrl};
        const formData = new FormData();
        formData.append('background', background)
        formData.append('imageUrl', imageUrl)
        formData.append('title', title)
        formData.append('richText', richText)
        formData.append("audioUrl", audioUrl) 
        formData.append("bgUrl", bgUrl)
        let headersList = {
            'Authorization': 'Bearer mytoken',
            'API-Key': 'myapikey',
            "Accept": "*/*",
            "User-Agent": "svelte app (http://localhost:5173/contents)",
        }
        const response = await fetch('http://localhost:3030/contents',{ 
            method: "POST",
            body: formData,
            headers: headersList
        })
        if (response.status == 200) {
            const result = await response.json();
            // goto('/pages')
            console.log(result);
        } else {
            const err = await response.json();
            console.log(err);
        }
    }
    

    const handleChange = (/** @type {{ preventDefault: () => void; target: { files: any[]; }; }} */ ev) => {
        ev.preventDefault();
        let file = ev.target.files[0];
        imageUrl = URL.createObjectURL(file)
    }

    const handleBackground = (ev) => {
        ev.preventDefault();
        let file = ev.target.files[0];
        bgUrl = URL.createObjectURL(file)
    }
    
    function startCamera() {
        camera = true;
        navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            // @ts-ignore
            video.srcObject = stream;
            // @ts-ignore
            video.play();
        })
        .catch(err => {
            camera = false;
            console.log("An error occurred: " + err);
        });
    }

    function captureImage() {
        capturing = true;
        // @ts-ignore
        canvas.getContext('2d').drawImage(video, 0, 0, 640, 420);
        // @ts-ignore
        imageUrl = canvas.toDataURL('image/png'); 
        setTimeout(() => {
            camera = false;
        }, 2000);      
    }

    function startRecording() {
        recording = true;
        navigator.mediaDevices.getUserMedia({ audio: true })
        .then(stream => {
            mediaRecorder = new MediaRecorder(stream);
            mediaRecorder.start();
            mediaRecorder.ondataavailable = e => {
            chunks.push(e.data);
            };
        })
        .catch(err => {
            console.log("An error occurred: " + err);
        });
    }

    function stopRecording() {
        recording = false;
        mediaRecorder.stop();
        mediaRecorder.onstop = () => {
        let blob = new Blob(chunks, { type: 'audio/ogg; codecs=opus' });
        audioUrl = URL.createObjectURL(blob);
        };
    }
    function voiceGallery (ev){
        ev.preventDefault();
        let file = ev.target.files[0];
        audioUrl = URL.createObjectURL(file)
        console.log(audioUrl);
    }
</script>

<div class="p-4">
   {#if !camera}
     <form action="" enctype="multipart/form">
        <div class="border-gray-400 border-2 flex p-2 rounded !bg-cover bg-center " style="background-color: {background}; background: url('{bgUrl}') ">
            <div class="w-[55%] h-40">
                <textarea class=" bg-transparent focus:outline-none min-h-full max-h-full w-full" on:change={(e)=> richText = e.target.value} id="" placeholder="Write your text here" ></textarea>
            </div>
            <div class="w-[45%] flex flex-col justify-center items-center">
                <div class="rounded-full w-20 h-20 flex justify-center items-center border !bg-cover bg-center object-cover " style="background: url('{imageUrl}')" >
                    <button type="button" class="text-gray-300" on:click={()=> addVoice = !addVoice}>{addVoice ? "Cancel" : "Add"}</button>
                </div>
                {#if addVoice}
                    <audio src={audioUrl} controls />
                    <input class="w-[80%] bg-transparent !focus:border-none px-2" type="text" on:change={(e)=> title = e.target.value} name="title" placeholder="Title">
                    <div class="flex justify-evenly bg-[#00000022] px-2 w-[80%]">
                        <input type="file" on:change={handleChange} name="imageFile" />
                        <button type="button" on:click={startCamera}>📷</button>
                        <input type="file" on:change={voiceGallery} name="voice"/>
                        <button type="button" on:click={()=> !recording ? startRecording() : stopRecording()}>
                            {recording ? "⏺️":"🎙️"}
                        </button>
                    </div>
                {/if}
            </div>
        </div>
        <div class="flex space-x-1 p-8">
            <div class="bg-[#111] text-white w-14 h-8 flex justify-center items-center " type="button" >first</div>
            <div class="bg-[#111] text-white w-14 h-8 flex justify-center items-center " type="button">second</div>
            <div class="bg-[#111] text-white w-14 h-8 flex justify-center items-center " type="button" >third</div>
        </div>
        <div class="flex justify-around p-8">
            <input type="file" on:change={handleBackground} name="bgImage" />
            <div class="bg-[#3a3b3911] w-20 h-14 flex justify-center items-center rounded">+</div>
            <button class="bg-[#3a3b3911] w-20 h-14 flex justify-center items-center rounded bg-lime-100" type="button" on:click={()=> background = 'green'}>red</button>
            <button class="bg-[#3a3b3911] w-20 h-14 flex justify-center items-center rounded bg-yellow-700" type="button" on:click={()=> background = 'yellow'}>yellow</button>
            <button class="bg-[#3a3b3911] w-20 h-14 flex justify-center items-center rounded bg-purple-300" type="button" on:click={()=> background = 'pink'}>another</button>
        </div>
        <div class="flex justify-center items-center">
            <input class="border rounded px-8 py-1 bg-blue-400" on:click={handleSubmit} type="submit" value="Post It">
        </div>
    </form>
    {:else}
        <div class="w-full h-full flex flex-col">
            <div class="w-full relative">
                <!-- svelte-ignore a11y-media-has-caption -->
                <canvas class="bg-yellow-400 w-full h-full border-2  absolute z-{capturing ? '': '30'}" bind:this={canvas} ></canvas>
                <!-- svelte-ignore a11y-media-has-caption -->
                <video class=" absolute" bind:this={video} width="640" height="480"></video>
            </div>
            <div class="w-full bg-slate-900 py-3 flex justify-center items-center z-20">
                <button class="text-2xl ring-2 rounded-full" type="button" on:click={captureImage}>🔴</button>
            </div>
        </div>
   {/if}
</div>

<button type="button" on:click={playSound}>playSound</button>