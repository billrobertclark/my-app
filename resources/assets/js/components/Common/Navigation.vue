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
					<a class="logo" href="/">
						<img src="/img/logo.png">
					</a>

					<button class="button navbar-burger"
							@click="menuActive = !menuActive">
						<span></span>
						<span></span>
						<span></span>
					</button>
				</div>
				<div class="navbar-menu is-hidden-tablet"
				     :class="{ 'is-active': menuActive }">
				    <div class="search search-mobile field has-addons">
				    	<div class="control">
				    		<input class="input" type="text" placeholder="Whatc'ha want to learn?">
				    	</div>
				    	<div class="control">
				    		<a class="button is-info">
				    			Search
				    		</a>
				    	</div>
				    </div>
					<div class="navbar-item">
						<a href="#">SERIES</a>
					</div>
					<div class="navbar-item">
						<a href="#">CASTS</a>
					</div>
					<div class="navbar-item">
						<a href="#">TOOLS</a>
					</div>
					<div class="navbar-item">
						<a href="#">DISCUSS</a>
					</div>
				</div>
				<div class="navbar-start is-hidden-touch">
					<div class="search search-desktop field has-addons">
						<div class="control">
							<input class="input" type="text" placeholder="Whatc'ha want to learn?">
						</div>
						<div class="control">
							<a class="button is-info">
								Search
							</a>
						</div>
					</div>
				</div>
			</div>
		</nav>
	</div>
</template>

<script>
	export default {
		props: ['state'],
		data() {
			return {
				menuActive: false
			}
		}
}
</script>

<style lang="scss">
	.navbar-burger.button {
		border: none;
		height: 5rem;
		& span {
			margin: 0;
		}
		&:active {
			background: green;
		}
		&:focus {
			background: none;
			box-shadow: none;
		}
		&:hover {
			background: none;
		}
	}

	.navbar-menu {
		box-shadow: 0 3px 5px 0 #c1c1c1;
		border-top: 1px solid #cdcdcd;
		& > div.navbar-item {
			margin: 1em 1.5em 1em 1.5em;
			padding-left: 1em;
			border-bottom: 1px solid #cdcdcd;
		}
		& > div.navbar-item:last-child {
			border-bottom: none;
		}
	}

	.navbar-start {
		flex-grow: 1;
	}

	.search {
		&.field.has-addons {
			width: 100% !important;
		}
		& .control .input[type="text"] {
			margin: 0;
			border-radius: 20px 0 0 20px !important;
			border-right: none;
			font-size: 1.3em;
			font-weight: bold;
		}
		& .control:nth-child(2) {
			border: solid 2px #cdcdcd;
			border-left: none;
			border-radius: 0 20px 20px 0;
			& .button {
				height: 95%;
				margin: 1px 1px 1px 0;
				border-radius: 4px 17px 17px 4px !important;
			}
		}
		&-desktop {
			padding: 1em 2em;
			& .control:first-child {
				width: 70%;
			}
		}
		&-mobile {
			padding: 1em 5%;
			& .control:first-child {
				flex-grow: 1;
			}
		}
	}

	.logo {
		margin: 15px 0px 0px 10px;
	}

	.is-home {
		margin-top: 2.5em;
		margin-left: .5em;
	}

	.is-normal {
		margin-top: 1em;
	}
</style>