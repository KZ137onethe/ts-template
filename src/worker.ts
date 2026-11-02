self.addEventListener("message", (e) => {
	console.log(e.data)

	self.postMessage("Greeting from worker.ts")
});