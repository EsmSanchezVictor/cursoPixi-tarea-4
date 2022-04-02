import { Container, Point, Sprite } from "pixi.js";

export class Mandos extends Container{

    constructor(){
        super();
        const adelante: Sprite = Sprite.from("adelante");
            adelante.position.x=1050;
        const atras: Sprite = Sprite.from("atras");
        const repetir: Sprite = Sprite.from("repetir");
            repetir.position.x=700;
        const home: Sprite = Sprite.from("home");
            home.position.x=350;
      
            
        this.addChild(adelante);
        this.addChild(atras);
        this.addChild(repetir); 
        this.addChild(home); 
        
    adelante.toGlobal(new Point());
	adelante.parent.toGlobal(adelante.position);
	
    repetir.toGlobal(new Point());
	repetir.parent.toGlobal(repetir.position);
	
    home.toGlobal(new Point());
	home.parent.toGlobal(home.position);
	
    }

}