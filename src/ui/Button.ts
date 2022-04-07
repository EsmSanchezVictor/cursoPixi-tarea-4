import { Container, Sprite, Texture } from "pixi.js";
import { Puntos } from "../game/Puntos";


export class Button extends Container {

    private boton: Texture;
    private sprBoton: Sprite;
    private clase: String;



    constructor(boton: Texture, clase: String) {

        super();
        this.boton = boton;
        this.clase = clase;

        this.sprBoton = Sprite.from(boton);


        // this.spr.anchor.set(0.5);
        this.addChild(this.sprBoton);



        this.sprBoton.on("mouseup", this.onMouseUp, this);
        this.sprBoton.on("mouseover", this.onMouseOver, this);
        this.sprBoton.on("mouseout", this.onMouseOut, this);
        this.sprBoton.interactive = true;

        //Textura
        this.sprBoton.texture = this.boton;
    }


    private onMouseUp(): void {

        const textoBoton: Puntos = new Puntos();
        if (this.clase == "adelante") {
            this.emit("buttonCLick")
            console.log("Click Adelante");
            textoBoton.textos("Proximo nivel", "Exitos");
            this.addChild(textoBoton);
        } else if (this.clase == "atras") {
            this.emit("buttonCLick")
            console.log("Click Atras");

        } else if (this.clase == "repetir") {
            this.emit("buttonCLick")
            console.log("Click Repetir");

        } else if (this.clase == "home") {
            this.emit("buttonCLick")
            console.log("Click Home");
        }
    }

    private onMouseOver(): void {
        this.sprBoton.angle = 10;


    }
    private onMouseOut(): void {
        this.sprBoton.angle = 0;


    }

}