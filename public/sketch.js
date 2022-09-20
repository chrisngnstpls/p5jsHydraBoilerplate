

export const myp5 = new p5((sketch) => {
    let img;
    let xCanv;

    sketch.preload = () => {
        img = sketch.loadImage('./images/duck.jpg')
        xCanv = sketch.createCanvas(window.innerWidth, window.innerHeight)
    }

    sketch.setup = () => {
        xCanv = sketch.createCanvas(window.innerWidth, window.innerHeight)
        // img.resize(150, 100)

        sketch.noSmooth();
        //xCanv.hide()

    }

    sketch.draw = () => {

        sketch.image(img, 0,0,img.width, img.height)
    }

})