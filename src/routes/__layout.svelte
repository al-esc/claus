<script>
	import "../app.css";
</script>
<div
	class="h-full bg-amber-50 bg-center bg-container md:bg-invite bg-no-repeat absolute top-0 left-0 w-full -z-10 bg-invite-mobile"
></div>
<div class="flex">
	<div class="max-w-5xl mx-auto px-14 md:px-5 pt-14 md:pt-80">
		<slot />
	</div>
</div>
<svelte:head>
  <title>Alex & Claus Wedding</title>
</svelte:head>
