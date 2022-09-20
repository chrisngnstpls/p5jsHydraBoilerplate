const Hydra = require('hydra-synth')
const { myp5 } = require('../public/sketch')





window.addEventListener('load', () => {

    
    let h = new Hydra({
        detectAudio:false,
        makeGlobal:false,
        width: window.innerWidth,
        height:window.innerHeight,

    }).synth

    window.addEventListener("resize", e=>{h.setResolution(window.innerWidth, window.innerHeight)})  
    h.s0.init({src:myp5.canvas})
    h.src(h.s0)
    .repeat(3,3)
    .rotate(10,({time}) => Math.sin(time))
    .out(h.o0)

})

