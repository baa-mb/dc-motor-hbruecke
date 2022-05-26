input.onButtonPressed(Button.A, function () {
    lauf = 1
})
input.onButtonPressed(Button.B, function () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
    lauf = 0
})
let lauf = 0
basic.showIcon(IconNames.Heart)
let wert = 300
lauf = 0
basic.forever(function () {
    if (lauf == 1) {
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.analogWritePin(AnalogPin.P0, 850)
        basic.pause(20000)
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.pause(8000)
        wert += 200
        wert = wert % 1024
    }
    serial.writeLine("" + (wert))
})
