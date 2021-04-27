let a = 0
input.onButtonPressed(Button.A, function () {
    a = 5
    basic.showNumber(a)
    basic.pause(100)
    for (let index = 0; index < 4; index++) {
        a += 1
        basic.showNumber(a)
    }
})
basic.forever(function () {
	
})
