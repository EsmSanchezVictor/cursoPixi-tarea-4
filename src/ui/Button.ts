import { Container, Sprite, Text, Texture } from "pixi.js";



export class Button extends Container {

    private boton: Texture;
    private sprBoton: Sprite;
    private clase: String;
    public textBase: Text;


    constructor(boton: Texture, clase: String) {

        super();
        this.boton = boton;
        this.clase = clase;
        this.textBase = new Text("", { fontSize: 45, fill: 0x00e000, fontFamily: "Comic Sans MS" });
 
        this.sprBoton = Sprite.from(boton);


        // this.spr.anchor.set(0.5);
        this.addChild(this.sprBoton);
        this.textBase.position.set(20,280);
        this.addChild(this.textBase);


        this.sprBoton.on("mouseup", this.onMouseUp, this);
        this.sprBoton.on("mouseover", this.onMouseOver, this);
        this.sprBoton.on("mouseout", this.onMouseOut, this);
        this.sprBoton.interactive = true;

        //Textura
        this.sprBoton.texture = this.boton;
    }
  


    private onMouseUp(): void {

     if(this.textBase.text==""){ 
        if (this.clase == "adelante") {
            this.emit("buttonCLick")
            this.textBase.text = "Proximo Nivel";
        } else if (this.clase == "atras") {
            this.emit("buttonCLick")
            this.textBase.text = "Anterior Nivel";
        } else if (this.clase == "repetir") {
            this.emit("buttonCLick")
            this.textBase.text = "Repetir Nivel";
        } else if (this.clase == "home") {
            this.emit("buttonCLick")
            this.textBase.text = "Menu principal";
        }
    }else {
        this.emit("buttonCLick")
        this.textBase.text = "";
    }
        
    }
    

    private onMouseOver(): void {
        this.sprBoton.angle = 10;


    }
    private onMouseOut(): void {
        this.sprBoton.angle = 0;


    }

}