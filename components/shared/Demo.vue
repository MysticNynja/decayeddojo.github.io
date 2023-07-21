<template>
	<div class="demo">
		<h1>vue-plyr demo.</h1>
		<h3>
			sources can be found at
			<a href="https://github.com/redxtech/vue-plyr/tree/master/examples">
				github.com/redxtech/vue-plyr</a
			>
		</h3>
		<div class="components">
			<vue-plyr-audio src="https://anchor.fm/s/562e5760/podcast/play/31078362/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2021-3-9%2F99f0b189-02aa-0425-4bfc-ae470dc66687.mp3"/>
		</div>
	</div>
</template>

<script>
	import VuePlyrVideo from './video'
	import VuePlyrAudio from './audio'
	import Youtube from './youtube'
	import YoutubeNp from './youtube-np'

	export default {
		name: 'Demo',
		components: {
			VuePlyrVideo,
			VuePlyrAudio,
			Youtube,
			YoutubeNp,
		}
	}
</script>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');

	.demo {
		font-family: 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #273849;
		margin: 0 auto;
		padding: 0 2rem;
	}

	.components > div {
		margin: 2rem 0;
	}

	h1 {
		font-size: 3rem;
		margin-bottom: 0;
	}

	h3 {
		margin-top: 0;
		margin-bottom: 2rem;
	}
</style>