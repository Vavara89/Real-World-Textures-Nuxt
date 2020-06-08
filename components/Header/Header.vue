<template>
	<header class="header">
		<div class="header-inner">
			<div class="header-logo"><Logo :logo="logo" /></div>
			<div class="header-search">
				<input type="text" name="s" placeholder="Search" autocomplete="off">
				<select>
					<option>Textures</option>
					<option>Models</option>
					<option>Hdris</option>
					<option>Brands</option>
				</select>
			</div>
			<div class="header-nav">
				<div class="header-left-nav">
					<ul class="header-left-menu">
						<li><a href>Textures</a></li>
						<li><a href>Models</a></li>
						<li><a href>Hdris</a></li>
						<li><a href>Brands</a></li>
					</ul>
				</div>
				<div class="header-right-nav">
					<ul class="header-right-menu">
						<li><a href>About</a></li>
						<li><a href>Services</a></li>
						<li><a href>Pricing</a></li>
						<li><a href>Log In</a></li>
						<li class="header-button"><a href>Sign Up</a></li>
					</ul>
				</div>
			</div>
		</div>
	</header>
</template>

<script>
import Logo from "@/components/Logos/Logo";

export default {
	name: "Header",
	components: {
		Logo
	},
	data() {
		return {
			logo: {
				link: "/",
				image: {
					url: "_nuxt/assets/img/logo.png",
					alt: "Logo"
				}
			}
		}
	}
};
</script>