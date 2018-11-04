Object.assign(Sphere.Game, {
	name: "Eggbertx's Challenge",
	author: "Eggbertx",
	summary: "A port of Chip's Challenge to the Sphere game engine ",
	version: 2,
	apiLevel: 1,
	resolution: "480x320",
	main: "bin/game.mjs",
	fullScreen: false,
});

install('@/bin', files('src/*.mjs', true));
install('@/lib', files('lib/*.mjs', true));
install('@/images', files('images/*.png', false));
install('@/sounds', files('sounds/*.wav', true));
install('@/sounds', files('sounds/*.WAV', true));
install('@/sounds', files('sounds/*.ogg', true));
install('@/sounds', files('sounds/*.OGG', true));
install('@/music', files('music/*.OGG', true));
install('@/music', files('music/*.ogg', true));
install('@/', files('CHIPS.DAT'));
install('@/', files('images/icon.png'));
