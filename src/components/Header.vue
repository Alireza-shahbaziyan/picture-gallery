<template>
    <header class=" w-full h-96 overflow-hidden bg-cover bg-center bg-fixed">
        <div
            class="text-xl
             font-serif bg-none 
               md:w-1/3s w-full h-full 
                flex flex-col items-center md:justify-center justify-center mx-4">
            <div class="text-9xl text-center w-full uppercase Logo TS text-teal-50">
                نگارخانه
            </div>
        </div>
    </header>
</template>

<script>

export default {
    name: "Header",
    data() {
        return {
            aniName: "demon slayer",
        };
    },
}
</script>
<style scoped>
header {
    border-radius: 0 0 85% 85% / 30%;
    background-image: url('https://upload.wikimedia.org/wikipedia/commons/6/67/Hafezieh_pillar_detail.jpg');
}
</style>