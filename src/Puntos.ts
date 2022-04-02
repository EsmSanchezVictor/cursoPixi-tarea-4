import { Container,NineSlicePlane,Point,Sprite,Text,Texture } from "pixi.js";

export class Puntos extends Container{

    constructor(){
        super();
      
        const contenedor = new NineSlicePlane(

            Texture.from("contenedor"),35,35,35,35

        );
        contenedor.scale.set(1.8,0.5);
        
        const panelBlancos: Sprite = Sprite.from("puntos");
            panelBlancos.position.set(100,100);
            panelBlancos.scale.set(1,1);

        const panelMonedas: Sprite = Sprite.from("puntos");
            panelMonedas.position.set(100,100);
            panelMonedas.scale.set(1,1);

        const blancos: Sprite = Sprite.from("blancos");
            blancos.position.set(180,100);
            blancos.angle=-45;
            blancos.scale.set(0.5,0.5);

        const monedas: Sprite = Sprite.from("monedas");
            monedas.position.set(180,120);
            monedas.scale.set(0.5,0.5);

        const textBlancos: Text= new Text("hello word",{fontSize: 40,fill:0x00e000, fontFamily:"Comic Sans MS"});
            textBlancos.text="5/12 Blancos acertados"
            textBlancos.scale.set(1);
            textBlancos.position.set(400,70);

        const textMonedas: Text= new Text("hello word",{fontSize: 40,fill:0x00e000, fontFamily:"Comic Sans MS"});
            textMonedas.text="3000 Monedas obtenidas"
            textMonedas.scale.set(1);
            textMonedas.position.set(330,180);
        


       
            
        this.addChild(contenedor);
        this.addChild(monedas);
        this.addChild(blancos);
        this.addChild(textBlancos);
        this.addChild(textMonedas);
        
        textMonedas.toGlobal(new Point()); 
	    textMonedas.parent.toGlobal(textMonedas.position);
        textBlancos.toGlobal(new Point()); 
	    textBlancos.parent.toGlobal(textBlancos.position);
        monedas.toGlobal(new Point()); 
	    monedas.parent.toGlobal(monedas.position);
        blancos.toGlobal(new Point()); 
	    blancos.parent.toGlobal(blancos.position);
        
    }
}