OLED.init(128, 64)
smarthome.crashSensorSetup(DigitalPin.P1)
basic.forever(function () {
    if (smarthome.crashSensor()) {
        OLED.writeStringNewLine("Your house is safe")
    } else {
        OLED.writeStringNewLine("Intruder Detected")
        music.startMelody(music.builtInMelody(Melodies.Ringtone), MelodyOptions.Once)
    }
})
