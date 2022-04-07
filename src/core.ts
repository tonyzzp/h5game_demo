
export class core {
    static canvas: HTMLCanvasElement
    static ctx: CanvasRenderingContext2D

    static init() {
        this.canvas = document.querySelector("canvas")
        this.ctx = this.canvas.getContext("2d")
    }
}