<script>
	import { getContext } from 'svelte';
	import { TABS } from './Tabs.svelte';
	export let classes = 'border';

	const tab = {};
	const { registerTab, selectTab, selectedTab } = getContext(TABS);
	registerTab(tab);
</script>

<button
	type="button"
	class="inline-flex items-center py-2 px-4 text-sm font-medium text-white bg-transparent {classes} border-white hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
	class:selected="{$selectedTab === tab}"
	on:click="{() => selectTab(tab)}"
>
	<slot></slot>
</button>
