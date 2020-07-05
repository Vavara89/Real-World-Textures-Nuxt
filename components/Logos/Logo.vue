<template>
	<a class="logo__link" :href="logo.link" v-if="logo.link">
		<img class="logo__img" :src="logo.image.url" :alt="logo.image.alt" />
	</a>
	<img v-else class="logo__img" :src="logo.image.url" :alt="logo.image.alt" />
</template>

<script>
export default {
	name: "Logo",
	props: {
		logo: {
			type: Object,
			required: true
		}
	}
};
</script>