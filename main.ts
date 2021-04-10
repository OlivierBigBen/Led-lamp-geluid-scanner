let instel = 0
let strip = neopixel.create(DigitalPin.P1, 30, NeoPixelMode.RGB)
let _4digit = grove.createDisplay(DigitalPin.P2, DigitalPin.P16)
basic.forever(function () {
    _4digit.show(instel)
})
basic.forever(function () {
    instel = pins.map(
    pins.analogReadPin(AnalogPin.P0),
    0,
    1013,
    1,
    100
    )
    strip.showBarGraph(1, instel)
})
