<template>
	<div>
		<div class="nav-spacer is-hidden-mobile"
		     :class="{ 
			 	'is-home': state == 'home',
			 	'is-normal': state == 'normal'
			 }">
	    </div>
		<nav class="navbar"
		     role="navigation" 
		     aria-label="main navigation">
		    <div class="container">
				<div class="navbar-brand">
					<a class="" href="/">
						<img src="http://via.placeholder.com/250x53">
					</a>

					<button class="button navbar-burger">
						<span></span>
						<span></span>
						<span></span>
					</button>
				</div>
			</div>
		</nav>
	</div>
</template>

<script>
	export default {
		props: ['state']
	}
</script>

<style lang="scss">
	.navbar-burger {
		border: none;
		& span {
			margin: 0;
		}
	}

	.is-home {
		margin-top: 2.5em;
		margin-left: .5em;
	}

	.is-normal {
		margin-top: 1em;
	}
</style>