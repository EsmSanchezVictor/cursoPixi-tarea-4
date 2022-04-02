import { Container, Point, Sprite, Texture } from "pixi.js";
import { Button } from "../ui/Button";
import { Keyboard } from "../utils/Keyboard";

export class Mandos extends Container {
    private adelante: Button;
   
    constructor() {
        super();

        this.adelante = new Button(
            Texture.from("adelante")
            );
        this.adelante.on("buttonClick",this.onButtonClick,this);
        this.adelante.position.x = 1050;
  

        
        const atras: Sprite = Sprite.from("atras");


       /* atras.on("touchstart",this.onTouchStart,this);
        atras.on("touchend",this.onTouchEnd,this);
        atras.interactive=true;*/


        const repetir: Sprite = Sprite.from("repetir");
        repetir.position.x = 700;
        
        /*repetir.on("pointerdown",this.onPointerDown,this);
        repetir.on("pointerup",this.onPointerUp,this);
        repetir.interactive=true;*/

        const home: Sprite = Sprite.from("home");
        home.position.x = 350;


        this.addChild(this.adelante);
        this.addChild(atras);
        this.addChild(repetir);
        this.addChild(home);

        Keyboard.down.on("KeyB",this.onKeyB,this);
        Keyboard.up.on("KeyB",this.onKeyBup,this);

        this.adelante.toGlobal(new Point());
        this.adelante.parent.toGlobal(this.adelante.position);

        repetir.toGlobal(new Point());
        repetir.parent.toGlobal(repetir.position);

        home.toGlobal(new Point());
        home.parent.toGlobal(home.position);

    }
  
    private onButtonClick():void{
           console.log("my new button cliked!", this);
    }

    private onKeyB():void{
        console.log("aprete la B",this);
 }

 private onKeyBup():void{
    console.log("solte la B",this);
}




   /* private onTouchStart():void{
        console.log("touch start");

    }
    private onTouchEnd():void{
        console.log("touch end");

    }
    private onPointerDown():void{
        console.log("Pointer start");

    }
    private onPointerUp():void{
        console.log("Pointer end");

    }*/

}