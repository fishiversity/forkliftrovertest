radio.onReceivedNumber(function (receivedNumber) {
    activity = receivedNumber
    basic.showNumber(receivedNumber)
})
let activity = 0
wuKong.stopAllMotor()
radio.setGroup(40)
basic.showIcon(IconNames.Pitchfork)
