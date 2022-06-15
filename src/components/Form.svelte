<script>
  import { slide } from 'svelte/transition';
  import { sineOut } from 'svelte/easing';
  let rsvp = true;
  let submitted = false;
  let submit;
  $: label = rsvp ? "Confirm prezenta la nunta" : "Nu pot veni la nunta";
  $: disabled = !rsvp;
  let guest = false;
  const submission = () => {
	  submitted = true;
	  submit.innerHTML = 'Multumim!';
  }
</script>
<form
	class="mt-0 md:mt-10 font-body italic text-xl md:text-2xl flex flex-col"
	name="gform"
	id="gform"
	enctype="text/plain"
	action="https://docs.google.com/forms/d/e/1FAIpQLSdFqn5tyBByuC7v2959K9-XtEPkLmrxTuPuwzD0br57a9Tvcw/formResponse?"
	target="hidden_iframe"
	transition:slide={{duration: 250, easing: sineOut}}
	on:submit={submission}
>
	<div class="flex flex-row md:gap-x-5 flex-wrap mb-1 md:mb-3">
		<div class="w-full md:w-auto">
			<label for="entry.981892795" class="block">Prenume</label>
			<input id="entry.981892795" type="text" name="entry.981892795" class="w-full md:w-auto rounded border-primary">
		</div>
		<div class="w-full md:w-auto">
			<label for="entry.2029562691" class="block">Nume</label>
			<input id="entry.2029562691" type="text" name="entry.2029562691" class="w-full md:w-auto rounded border-primary">
		</div>
	</div>
	<label for="entry.1485738860" class="flex relative items-center cursor-pointer mb-1 md:mb-3">
		<input type="checkbox" value="Da" bind:checked={guest} id="entry.1485738860" name="entry.1485738860" {disabled} class="sr-only peer">
		<div class="w-11 h-6 bg-blue-200 peer-disabled:bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-1 md:after:top-1.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
		<span class="ml-3 peer-disabled:text-gray-400 peer-disabled:line-through">
			Veniti insotit?
		</span>
	</label>
	{#if (guest && rsvp)}
		<div class="flex flex-row md:gap-x-5 flex-wrap mb-1 md:mb-3" transition:slide={{duration: 250, easing: sineOut}}>
			<div class="w-full md:w-auto">
				<label for="entry.259805132" class="block">Prenume</label>
				<input
						id="entry.259805132"
						type="text"
						name="entry.259805132"
						class="rounded border-primary w-full md:w-auto"
				>
			</div>
			<div class="w-full md:w-auto">
				<label for="entry.55142918" class="block">Nume</label>
				<input
						id="entry.55142918"
						type="text"
						name="entry.55142918"
						class="rounded border-primary w-full md:w-auto"
				>
			</div>
		</div>
	{/if}
	<label for="entry.1810396359" class="flex relative items-center cursor-pointer mb-1 md:mb-10">
		<input type="checkbox" value="Da" id="entry.1810396359" name="entry.1810396359" {disabled} class="sr-only peer">
		<div class="w-11 h-6 bg-blue-200 peer-disabled:bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-1 md:after:top-1.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
		<span class="ml-3 peer-disabled:text-gray-400 peer-disabled:line-through">
			Veniti insotit de copil /copii?
		</span>
	</label>
	<label for="entry.723592693" class="flex relative items-center cursor-pointer mb-3 md:mb-8">
		<input type="checkbox" value="Da" id="entry.723592693" name="entry.723592693" bind:checked={rsvp} class="sr-only peer">
		<div class="w-11 h-6 bg-red-500 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-1 md:after:top-1.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
		<span class="ml-3">{label}</span>
	</label>
	<button
		class="mx-auto w-1/2 text-center py-2 font-semibold text-xl bg-secondary text-white rounded-md shadow-sm hover:-translate-y-1 hover:scale-110 hover:bg-primary ease-in-out delay-50 duration-300"
		bind:this={submit}
	>
		RSVP
	</button>
</form>
<iframe title="no-reload" name="hidden_iframe" id="hidden_iframe" style="display:none;" onload="if (submitted) return;"></iframe>
