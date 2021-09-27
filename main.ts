input.onButtonPressed(Button.A, function () {
    Q = 1
})
input.onButtonPressed(Button.B, function () {
    if (Q == V) {
        if (true) {
            basic.showIcon(IconNames.Yes)
        }
    } else {
        if (Q < V) {
            basic.showLeds(`
                . . # . .
                . . # . .
                # # # # #
                . . # . .
                . . # . .
                `)
        }
        if (Q > V) {
            basic.showLeds(`
                . . . . .
                . . . . .
                # # # # #
                . . . . .
                . . . . .
                `)
        }
    }
})
input.onGesture(Gesture.Shake, function () {
    control.reset()
})
let Q = 0
let V = 0
V = randint(0, 10)
Q = 0
basic.showString("" + (Q))
