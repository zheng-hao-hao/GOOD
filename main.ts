input.onButtonPressed(Button.A, function () {
    服務 = "b"
    basic.showString(服務)
})
input.onGesture(Gesture.Shake, function () {
    if (服務 == "a") {
        basic.clearScreen()
        basic.showString("" + input.temperature() + "°C")
    } else if (服務 == "b") {
        basic.showNumber(randint(1, 6))
    } else {
    	
    }
})
input.onButtonPressed(Button.AB, function () {
    服務 = "a"
    basic.showString(服務)
})
let 服務 = ""
let text_list = 0
服務 = "a"
basic.showString(服務)
