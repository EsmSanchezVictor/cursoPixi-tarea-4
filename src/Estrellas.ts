import { Container, Point, Sprite } from "pixi.js";

export class Estrellas extends Container{

    constructor(){
        super();
        const estrella: Sprite = Sprite.from("estrella");
        const mEstrella: Sprite = Sprite.from("mediaEstrella");
        const sEstrella: Sprite = Sprite.from("sinEstrella");
        
       
        mEstrella.position.set(170,0);
     
        sEstrella.position.set(340,0);
        
        estrella.anchor.set(0);
            
        this.addChild(estrella);
        this.addChild(mEstrella);
        this.addChild(sEstrella); 
        
        mEstrella.toGlobal(new Point()); 
	mEstrella.parent.toGlobal(mEstrella.position);
	
        sEstrella.toGlobal(new Point()); 
	sEstrella.parent.toGlobal(sEstrella.position);
    }

}