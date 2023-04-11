import { core } from "./engine/core"
import { Image } from "./engine/image"
import imgurl from "./res/logo.png"

console.log("main.ts run")

core.init()

let img = new Image(imgurl)
img.draw()

function draw() {
    img.draw()
    requestAnimationFrame(draw)
}
draw()