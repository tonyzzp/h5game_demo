import { core } from "./core"

export class Image {

    private url = ""
    private isLoaded = false
    private domImg: HTMLImageElement
    width = 0
    height = 0
    x = 0
    y = 0

    constructor(url: string) {
        this.url = url
        this.domImg = document.createElement("img")
        this.load()
    }

    private load() {
        this.domImg.src = this.url
        this.domImg.onload = () => {
            this.isLoaded = true
            this.width = this.domImg.width
            this.height = this.domImg.height
        }
    }

    draw() {
        if (this.isLoaded) {
            core.ctx.drawImage(this.domImg, (core.canvas.width - this.width) / 2, (core.canvas.height - this.height) / 2)
        }
    }
}