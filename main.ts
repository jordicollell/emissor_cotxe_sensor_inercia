radio.setGroup(1)
basic.forever(function () {
    radio.sendValue("x", input.acceleration(Dimension.Y))
    radio.sendValue("y", input.acceleration(Dimension.X) / 4)
})
