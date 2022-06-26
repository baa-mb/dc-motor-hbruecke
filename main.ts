input.onButtonPressed(Button.A, function () {
    lauf = 1
})
input.onButtonPressed(Button.B, function () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
    lauf = 0
})
let distanz_alt = 0
let lauf = 0
basic.showIcon(IconNames.Yes)
let wert = 300
lauf = 0
let distanz = 0
basic.forever(function () {
    if (lauf == 1) {
        basic.pause(1000)
        distanz = sonar.ping(
        DigitalPin.P8,
        DigitalPin.P2,
        PingUnit.Centimeters
        )
        if (distanz != distanz_alt) {
            pins.digitalWritePin(DigitalPin.P1, 0)
            pins.analogWritePin(AnalogPin.P0, Math.map(distanz, 1, 10, 0, 850))
            distanz_alt = distanz
        }
    }
})
