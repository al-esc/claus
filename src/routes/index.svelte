<script>
</script>

<h1 class="text-4xl sm:text-5xl md:text-7xl font-bold text-center text-blue font-heading">Alex & Claus</h1>
<h2 class="text-4xl sm:text-5xl md:text-7xl font-bold text-center text-blue font-heading">Wedding Invitation</h2>
<form class="mt-8 md:mt-20 font-body italic text-xl md:text-2xl mx-auto">
	<div class="flex flex-row gap-x-10 gap-y-5 flex-wrap justify-center mb-3">
		<div>
			<label for="first_name" class="block ml-3">First Name</label>
			<input id="first_name" type="text" name="first_name" class="rounded border-purple">
		</div>
		<div>
			<label for="last_name" class="block ml-3">Last Name</label>
			<input id="last_name" type="text" name="last_name" class="rounded border-purple">
		</div>
	</div>
	<div class="text-center sm:text-left">
		<input type="checkbox" name="additional_guest" id="additional_guest" class="text-purple rounded" />
		<label for="additional_guest" class="align-middle">Are you bringing a +1 guest?</label>
	</div>
	<div class="text-center sm:text-left">
		<input type="checkbox" name="child" id="child" class="text-purple rounded" />
		<label for="child" class="align-middle">Are you bringing a child?</label>
	</div>
</form>
