<script>
  import { slide } from 'svelte/transition';
  import { sineOut } from 'svelte/easing';
  let rsvp = true;
  $: label = rsvp ? "Confirm prezenta la nunta" : "Nu pot veni la nunta";
  $: disabled = !rsvp;
  let guest = false;
</script>
<form
	class="mt-0 md:mt-10 font-body italic text-xl md:text-2xl flex flex-col"
	transition:slide={{duration: 250, easing: sineOut}}
>
	<div class="flex flex-row md:gap-x-5 flex-wrap mb-1 md:mb-3">
		<div class="w-full md:w-auto">
			<label for="first_name" class="block">Prenume</label>
			<input id="first_name" type="text" name="first_name" class="w-full md:w-auto rounded border-primary">
		</div>
		<div class="w-full md:w-auto">
			<label for="last_name" class="block">Nume</label>
			<input id="last_name" type="text" name="last_name" class="w-full md:w-auto rounded border-primary">
		</div>
	</div>
	<label for="additional_guest" class="flex relative items-center cursor-pointer mb-1 md:mb-3">
		<input type="checkbox" value="" bind:checked={guest} id="additional_guest" {disabled} class="sr-only peer">
		<div class="w-11 h-6 bg-blue-200 peer-disabled:bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-1 md:after:top-1.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
		<span class="ml-3 peer-disabled:text-gray-400 peer-disabled:line-through">
			Veniti insotit?
		</span>
	</label>
	{#if (guest && rsvp)}
		<div class="flex flex-row md:gap-x-5 flex-wrap mb-1 md:mb-3" transition:slide={{duration: 250, easing: sineOut}}>
			<div class="w-full md:w-auto">
				<label for="first_name_guest" class="block">Prenume</label>
				<input
						id="first_name_guest"
						type="text"
						name="first_name_guest"
						class="rounded border-primary w-full md:w-auto"
				>
			</div>
			<div class="w-full md:w-auto">
				<label for="last_name_guest" class="block">Nume</label>
				<input
						id="last_name_guest"
						type="text"
						name="last_name_guest"
						class="rounded border-primary w-full md:w-auto"
				>
			</div>
		</div>
	{/if}
	<label for="child" class="flex relative items-center cursor-pointer mb-1 md:mb-10">
		<input type="checkbox" value="" id="child" {disabled} class="sr-only peer">
		<div class="w-11 h-6 bg-blue-200 peer-disabled:bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-1 md:after:top-1.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
		<span class="ml-3 peer-disabled:text-gray-400 peer-disabled:line-through">
			Veniti insotit de copil /copii?
		</span>
	</label>
	<label for="rsvp" class="flex relative items-center cursor-pointer mb-3 md:mb-8">
		<input type="checkbox" value="" id="rsvp" bind:checked={rsvp} class="sr-only peer">
		<div class="w-11 h-6 bg-red-500 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-1 md:after:top-1.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
		<span class="ml-3">{label}</span>
	</label>
	<button class="mx-auto w-1/2 text-center py-2 font-semibold text-xl bg-secondary text-white rounded-md shadow-sm hover:-translate-y-1 hover:scale-110 hover:bg-primary ease-in-out delay-50 duration-300">
		RSVP
	</button>
</form>
