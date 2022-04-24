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

let scene7 = new ScrollMagic.Scene({triggerElement: ".fishGreen"})

.setClassToggle(".fishGreen", "moveright")
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

let scene8 = new ScrollMagic.Scene({triggerElement: ".fishHotpink"})

.setClassToggle(".fishHotpink", "moveright")
.addTo(controller);

let scene9 = new ScrollMagic.Scene({triggerElement: ".fishLightblue"})

.setClassToggle(".fishLightblue", "moveright")
.addTo(controller);

let die1 = new ScrollMagic.Scene({triggerElement: ".dieFishYellow"})

.setClassToggle(".dieFishYellow", "moveleft")
.addTo(controller);

let die2 = new ScrollMagic.Scene({triggerElement: ".dieFishPurple"})

.setClassToggle(".dieFishPurple", "moveleft")
.addTo(controller);

let die3 = new ScrollMagic.Scene({triggerElement: ".dieFishDarkBlue"})

.setClassToggle(".dieFishDarkBlue", "moveleft")
.addTo(controller);

let o2 = new ScrollMagic.Scene({triggerElement: ".dieFishDarkBlue"})

.setClassToggle(".o2", "moveleft2")
.addTo(controller);

let sustain = new ScrollMagic.Scene({triggerElement: ".sustain"})
.setClassToggle(".sustain", "moveleft")
.addTo(controller);
