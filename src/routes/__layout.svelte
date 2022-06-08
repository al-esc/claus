<script>
	import "../app.css";

	const lazy = async (node) => {
		const resp = await fetch('/bg.webp');
		const blob = await resp.blob();
		let reader = new FileReader();
		reader.readAsDataURL(blob);
		reader.onload = () => {
          node.style.backgroundImage = "url('/bg.webp')";
          node.style.opacity = "1";
		}

		return {
			destroy(){}
		};
	}
</script>
<div class="h-screen bg-amber-50">
	<div
		use:lazy
		class="h-screen py-48 md:py-36 bg-center bg-invite bg-no-repeat opacity-0 transition-all duration-1000"
	>
		<div class="container mx-auto p-6 md:p-16 flex">
			<div class="max-w-5xl mx-auto p-5">
				<slot />
			</div>
		</div>
	</div>
</div>
<svelte:head>
  <title>Alex & Claus</title>
</svelte:head>
