<script>
	import { title } from "../stores/global.js";
  import "../app.css";
</script>

<div class="max-w-5xl mx-auto p-5">
  <slot />
</div>

<svelte:head>
  <title>{$title}</title>
</svelte:head>
