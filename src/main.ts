import { core } from "./engine/core"
import { Image } from "./engine/image"

console.log("main.ts run")

core.init()

let img = new Image("res/logo.png")
img.draw()

function draw() {
    img.draw()
    requestAnimationFrame(draw)
}
draw()