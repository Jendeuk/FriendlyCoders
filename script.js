let controller = new ScrollMagic.Controller();

let scene = new ScrollMagic.Scene({triggerElement: ".object--fish"})

.setClassToggle(".object--fish", "movedown")
.addTo(controller);



let scene3 = new ScrollMagic.Scene({triggerElement: ".skull"})

.setClassToggle(".skull", "fadein")
.addTo(controller);


 
 

let scene2 = new ScrollMagic.Scene({triggerElement: ".fishBlue"})

.setClassToggle(".fishBlue", "moveleft")
.addTo(controller);

let scene4 = new ScrollMagic.Scene({triggerElement: ".fishPink"})

.setClassToggle(".fishPink", "moveleft")
.addTo(controller);

let scene6 = new ScrollMagic.Scene({triggerElement: ".fishYellow"})

.setClassToggle(".fishYellow", "moveleft")
.addTo(controller);

let scene5 = new ScrollMagic.Scene({triggerElement: ".fishRed"})

.setClassToggle(".fishRed", "moveleft")
.addTo(controller);
