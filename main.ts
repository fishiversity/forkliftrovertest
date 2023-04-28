radio.onReceivedNumber(function (receivedNumber) {
    activity = receivedNumber
})
function forkDown () {
    wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 0)
}
function stop () {
    wuKong.stopAllMotor()
}
function reverse () {
    wuKong.setAllMotor(-20, -20)
}
function forward () {
    wuKong.setAllMotor(20, 20)
}
function forkUp () {
    wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 60)
}
let activity = 0
wuKong.stopAllMotor()
radio.setGroup(40)
basic.showIcon(IconNames.Pitchfork)
basic.forever(function () {
    if (activity == 1) {
        forward()
    } else if (activity == 2) {
        reverse()
    } else if (activity == 6) {
        forkUp()
    } else if (activity == 7) {
        forkDown()
    } else {
        stop()
    }
})
