let abstand = 0
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    pins.digitalWritePin(DigitalPin.C16, 1)
    basic.pause(30)
    pins.digitalWritePin(DigitalPin.C16, 0)
})
pins.onPulsed(DigitalPin.C16, PulseValue.High, function () {
    abstand = pins.pulseDuration() / 58
    basic.showNumber(abstand)
})
basic.forever(function () {
	
})
