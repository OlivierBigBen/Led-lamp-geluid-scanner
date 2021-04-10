input.onButtonPressed(Button.A, function () {
    stand = 0
    basic.showIcon(IconNames.SmallDiamond)
})
input.onButtonPressed(Button.B, function () {
    stand = 1
    basic.showIcon(IconNames.EigthNote)
})
let instel = 0
let stand = 0
let strip = neopixel.create(DigitalPin.P1, 30, NeoPixelMode.RGB)
let _4digit = grove.createDisplay(DigitalPin.P2, DigitalPin.P16)
stand = 0
basic.showIcon(IconNames.SmallDiamond)
basic.forever(function () {
    _4digit.show(instel)
})
basic.forever(function () {
    if (stand == 0) {
        instel = pins.map(
        pins.analogReadPin(AnalogPin.P0),
        0,
        1013,
        0,
        255
        )
    } else if (stand == 1) {
        instel = input.soundLevel()
    } else {
    	
    }
    strip.showBarGraph(instel, 255)
})
