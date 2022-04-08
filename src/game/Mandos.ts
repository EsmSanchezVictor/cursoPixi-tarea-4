import { Container, Point, Texture } from "pixi.js";
import { Button } from "../ui/Button";


export class Mandos extends Container {
    private adelante: Button;
    private atras: Button;
    private repetir: Button;
    private home: Button;

   
    constructor() {
        super();

        this.adelante = new Button(
            Texture.from("adelante"),"adelante"
            );
   
        this.adelante.position.x = 1050;
  
        this.atras = new Button(
            Texture.from("atras"),"atras"
            );
   

        this.repetir = new Button(
            Texture.from("repetir"),"repetir"
            );
        this.repetir.position.x = 700;
        
    
        this.home = new Button(
            Texture.from("home"),"home"
            );

        this.home.position.x = 350;


        this.addChild(this.adelante);
        this.addChild(this.atras);
        this.addChild(this.repetir);
        this.addChild(this.home);
        
     



        this.adelante.toGlobal(new Point());
        this.adelante.parent.toGlobal(this.adelante.position);

        this.repetir.toGlobal(new Point());
        this.repetir.parent.toGlobal(this.repetir.position);

        this.home.toGlobal(new Point());
        this.home.parent.toGlobal(this.home.position);

    }
  

}