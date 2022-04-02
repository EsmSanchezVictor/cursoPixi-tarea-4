import { Container, Point, Sprite } from "pixi.js";

export class Lokihat extends Container{

    constructor(){
        super();
        const loki: Sprite = Sprite.from("loki");
        const fez: Sprite = Sprite.from("Fez");
        
        fez.scale.set(0.4,0.4);
        fez.position.set(100,-90);
        
        loki.anchor.set(0);
            
        this.addChild(loki); 
        this.addChild(fez); 
        fez.toGlobal(new Point()); 
	fez.parent.toGlobal(fez.position);
	
    }

}