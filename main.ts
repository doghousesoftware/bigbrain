let Outer = 0
let Inner = 0
input.onPinPressed(TouchPin.P0, function () {
    Outer = 4
    for (let Oindex = 0; Oindex <= 4; Oindex++) {
        Inner = 4
        for (let Iindex = 0; Iindex <= 4; Iindex++) {
            led.toggle(Outer, Inner)
            basic.pause(100)
            Inner += -1
        }
        Outer += -1
    }
    basic.clearScreen()
})
input.onButtonPressed(Button.A, function () {
    for (let Outside = 0; Outside <= 4; Outside++) {
        for (let Inside = 0; Inside <= 4; Inside++) {
            led.toggle(Outside, Inside)
            basic.pause(100)
        }
    }
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    for (let Outside = 0; Outside <= 4; Outside++) {
        for (let Inside = 0; Inside <= 4; Inside++) {
            led.toggle(Inside, Outside)
            basic.pause(100)
        }
    }
    basic.clearScreen()
})
input.onPinPressed(TouchPin.P1, function () {
    Inner = 4
    for (let Oindex = 0; Oindex <= 4; Oindex++) {
        Outer = 4
        for (let Iindex = 0; Iindex <= 4; Iindex++) {
            led.toggle(Outer, Inner)
            basic.pause(100)
            Outer += -1
        }
        Inner += -1
    }
    basic.clearScreen()
})
