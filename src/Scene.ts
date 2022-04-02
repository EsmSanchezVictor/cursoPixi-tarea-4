import {  Container, Texture, NineSlicePlane,Text } from "pixi.js";
import { Lokihat } from "./Lokihat";  // imagen de loki con sombrero 
import { Estrellas } from "./Estrellas"; // cantidad de estralla obtenidas
import { Nivel } from "./Nivel"; // mensaje de estado de nivel
import { Puntos } from "./Puntos"; // cantidad de puntos y objetivos obtiendos 
import { Mandos } from "./Mandos";//  botones de control

export class Scene extends Container{

    constructor(){
        super();


        const panelPlane = new NineSlicePlane(

            Texture.from("panelLcd"),35,35,35,35

        );
        this.addChild(panelPlane);
        panelPlane.width=500;
        panelPlane.height=500;
        const posRelX= panelPlane.position.x=400;
        const posRelY= panelPlane.position.y=100;


        //Loki con sobrero
        const lokiconfez: Lokihat =new Lokihat();
		lokiconfez.scale.set(0.5);
        lokiconfez.x=posRelX+10;
        lokiconfez.y=posRelY+70;
        this.addChild(lokiconfez);

        //estrellas
        const estrellas: Estrellas =new Estrellas();
		estrellas.scale.set(0.5);
        estrellas.x=posRelX+200;
        estrellas.y=posRelY+70;
        this.addChild(estrellas);
       
        //panel de nivel
        const nivel: Nivel =new Nivel();
		nivel.scale.set(0.5);
        nivel.x=posRelX+150;
        nivel.y=posRelY+150;
        this.addChild(nivel);
       
         //panel de puntos
        const puntos: Puntos =new Puntos();
        puntos.scale.set(0.5);
        puntos.x=posRelX-5;
        puntos.y=posRelY+250;
        this.addChild(puntos);

        //panel de puntos
        const mandos: Mandos =new Mandos();
        mandos.scale.set(0.3);
        mandos.x=posRelX+45;
        mandos.y=posRelY+355;
        this.addChild(mandos);

  
        //text

        const myText: Text= new Text("¿Solo una estrella y media?",{fontSize: 20,fill:0x00c000, fontFamily:"Comic Sans MS"});
        
        myText.position.x=610;
        myText.position.y=130;
        myText.scale.set(1);

        const myText1: Text= new Text("¡Mirá como te mira Loki..!",{fontSize: 20,fill:0x00e000, fontFamily:"Comic Sans MS"});
     
        myText1.position.x=615;
        myText1.position.y=250;
        myText1.scale.set(1);

        this.addChild(myText);
        this.addChild(myText1);
        
        

    }
}