<script setup lang="ts">
const worker = new Worker(new URL('./worker.ts', import.meta.url))

worker.addEventListener("message", (e) => {
	console.log(e.data)
})

worker.postMessage("Greeting from main.ts");
</script>

<template>
	<main class="page">
		worker的使用
	</main>
</template>

<style>

</style>