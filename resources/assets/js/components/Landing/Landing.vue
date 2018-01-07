<template>
	<div>
		<section class="hero is-fullheight">
			<app-navigation state="home"></app-navigation>
			<div class="hero-body">
				<div class="container">
					<h1 class="title">
						
					</h1>
					<h2 class="subtitle">
						
					</h2>
				</div>
			</div>
		</section>

		<section class="hero is-primary is-fullheight">
			<div class="hero-body">
				<div class="container">
					<h1 class="title">
						Hello
					</h1>
					<h2 class="subtitle">
						
					</h2>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
	import Navigation from '../Common/Navigation';

	export default {
		components: {
			appNavigation: Navigation
		},

		mounted() {
			document.title = 'The Best Professional Screen Casting Definitions for many Development Languages'
		}
	}
</script>

<style>
	
</style>