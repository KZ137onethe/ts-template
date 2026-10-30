const worker = new Worker(new URL('./worker.ts', import.meta.url))

worker.addEventListener("message", (e) => {
	console.log(e.data)
})

worker.postMessage("Greeting from main.ts")
