import { Container,NineSlicePlane,Point,Sprite,Text,Texture } from "pixi.js";

export class Puntos extends Container{
private textBlancos: Text;
private textMonedas: Text;
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

        this.textBlancos= new Text("hello word",{fontSize: 40,fill:0x00e000, fontFamily:"Comic Sans MS"});
            this.textBlancos.text="5/12 Blancos acertados"
            this.textBlancos.scale.set(1);
            this.textBlancos.position.set(400,70);

            // evento de teclado
           // document.addEventListener("keydown", this.onKeyDown.bind(this));
         



        this.textMonedas= new Text("hello word",{fontSize: 40,fill:0x00e000, fontFamily:"Comic Sans MS"});
            this.textMonedas.text="3000 Monedas obtenidas"
            this.textMonedas.scale.set(1);
            this.textMonedas.position.set(330,180);
            
            // evento de teclado
          //  document.addEventListener("keyup", this.onKeyUp.bind(this));

       
            
        this.addChild(contenedor);
        this.addChild(monedas);
        this.addChild(blancos);
        this.addChild(this.textBlancos);
        this.addChild(this.textMonedas);
        
        this.textMonedas.toGlobal(new Point()); 
	    this.textMonedas.parent.toGlobal(this.textMonedas.position);
        this.textBlancos.toGlobal(new Point()); 
	    this.textBlancos.parent.toGlobal(this.textBlancos.position);
        monedas.toGlobal(new Point()); 
	    monedas.parent.toGlobal(monedas.position);
        blancos.toGlobal(new Point()); 
	    blancos.parent.toGlobal(blancos.position);
        
    }
  /*  private onKeyDown(e:KeyboardEvent):void{
        console.log("key pressed! ",e.code);
        this.textBlancos.text="key pressed "+e.code;
    }
    private onKeyUp(e:KeyboardEvent):void{
        console.log("key released! ",e.code);
        this.textMonedas.text="key released "+e.code;
    }*/
}