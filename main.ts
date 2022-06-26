input.onButtonPressed(Button.A, function () {
    lauf = 1
    basic.showNumber(lauf)
})
input.onButtonPressed(Button.B, function () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
    lauf = 0
})
let motorwert = 0
let distanz_alt = 0
let distanz = 0
let lauf = 0
basic.showIcon(IconNames.Yes)
lauf = 0
basic.forever(function () {
    if (lauf == 1) {
        basic.pause(2000)
        distanz = sonar.ping(
        DigitalPin.P8,
        DigitalPin.P2,
        PingUnit.Centimeters
        )
        if (distanz != distanz_alt) {
            basic.showNumber(distanz)
            motorwert = Math.map(Math.min(15, distanz), 1, 15, 0, 850)
            pins.digitalWritePin(DigitalPin.P1, 0)
            pins.analogWritePin(AnalogPin.P0, 850 - motorwert)
            distanz_alt = distanz
        }
    }
})
