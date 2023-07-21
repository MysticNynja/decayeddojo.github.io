<template>
	<div>
		<h2>audio player</h2>
		<vue-plyr ref="plyr" :options="playerOptions">
			<audio controls>
				<source :src="src" type="audio/mp3"/>
			</audio>
		</vue-plyr>
	</div>
</template>

<script>
    export default {
        data () {
            return {
                playerOptions: {
                    controls: `
						<div class="plyr__controls">
							<button type="button" class="plyr__control" aria-label="Play, {title}" data-plyr="play">
								<svg class="icon--pressed" role="presentation"><use xlink:href="#plyr-pause"></use></svg>
								<svg class="icon--not-pressed" role="presentation"><use xlink:href="#plyr-play"></use></svg>
								<span class="label--pressed plyr__tooltip" role="tooltip">Pause</span>
								<span class="label--not-pressed plyr__tooltip" role="tooltip">Play</span>
							</button>
							<div class="plyr__progress">
								<input data-plyr="seek" type="range" min="0" max="100" step="0.01" value="0" aria-label="Seek">
								<progress class="plyr__progress__buffer" min="0" max="100" value="0">% buffered</progress>
								<span role="tooltip" class="plyr__tooltip">00:00</span>
							</div>
							<div class="plyr__time plyr__time--current" aria-label="Current time">00:00</div>
							<div class="plyr__time plyr__time--duration" aria-label="Duration">00:00</div>
							<button type="button" class="plyr__control" aria-label="Mute" data-plyr="mute">
								<svg class="icon--pressed" role="presentation"><use xlink:href="#plyr-muted"></use></svg>
								<svg class="icon--not-pressed" role="presentation"><use xlink:href="#plyr-volume"></use></svg>
								<span class="label--pressed plyr__tooltip" role="tooltip">Unmute</span>
								<span class="label--not-pressed plyr__tooltip" role="tooltip">Mute</span>
							</button>
							<div class="plyr__volume">
								<input data-plyr="volume" type="range" min="0" max="1" step="0.05" value="1" autocomplete="off" aria-label="Volume">
							</div>	
						</div>
						`
                }
            }
        },
		props:{
			src: String
		},
        computed: {
            player () {
                return this.$refs.plyr.player
            }
        }
    }
</script>