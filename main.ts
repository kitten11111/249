let light2 = 0
input.onButtonPressed(Button.A, function () {
    music.rest(music.beat(BeatFraction.Sixteenth))
    light2 = input.lightLevel()
    if (light2 < 25) {
        music.ringTone(262)
    } else if (light2 < 50) {
        music.ringTone(294)
    } else if (light2 < 100) {
        music.ringTone(330)
    } else if (light2 < 150) {
        music.ringTone(349)
    } else if (light2 < 180) {
        music.ringTone(392)
    } else {
        music.ringTone(440)
    }
})
