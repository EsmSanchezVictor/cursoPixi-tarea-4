import { Container, Sprite, Texture } from "pixi.js";


export class Button extends Container {

    private adelante: Texture;
    private spr:Sprite;
   

    constructor(adelante: Texture) {

        super();
        this.adelante = adelante;
       
        this.spr = Sprite.from(adelante);
       // this.spr.anchor.set(0.5);
        this.addChild(this.spr);
       
        this.spr.on("mousedown",this.onMouseDown,this);
        this.spr.on("mouseup",this.onMouseUp,this);
        this.spr.on("mouseover",this.onMouseOver, this);
        this.spr.on("mouseout",this.onMouseOut, this); 
        this.spr.interactive=true;

        //Textura
        this.spr.texture=this.adelante;
    }

    private onMouseDown():void{
        console.log("mouse down");
      

    }
    private onMouseUp():void{
        this.emit("buttonCLick")
        //console.log("Here out button does something!");

    }

    private onMouseOver():void{
        this.spr.angle=10;
        console.log("mouse entre");

    }
    private onMouseOut():void{
        this.spr.angle=0;
        console.log("mouse exit");

    }

}