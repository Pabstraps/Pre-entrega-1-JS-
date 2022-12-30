let valkorn = 1
let Jaina = 2
let Mclovin = 3
let vida = 100
let dmg = 10

let personajes = prompt ("Ingresa que personaje deseas usar \n\n 1- Valkorn \n 2- Jaina \n 3- Mclovin");

if (personajes == 1) {
            dmg = dmg + 40
            alert ("seleccionaste a valkorn \n Tu vida actual es de:\n " + vida);
            alert ("tu daño ha aumentado a: \n" + dmg)
      }
      else if (personajes == 2){
            dmg = dmg + 60
            alert ("Seleccinaste a Jaina, tu vida actual es de:\n " + vida );
            alert ("tu daño ha aumentado a: \n" + dmg )
      }

      else if (personajes == 3){
            dmg = dmg + 5
            alert ("Seleccionaste a Mclovin, tu vida actual es de:\n " + vida);
            alert ("tu daño ha aumentado a: \n" + dmg)
      }

      let izquierda = "i"
      let derecha = "d"

      let camino = prompt ("hacia donde quieres ir? \n\n I para izquierda \n D para derecha ")
            switch (camino) {
            case izquierda:
                  alert ("Haz encontrado un goblin ")                  
                  break;
            case derecha:
                  alert ("haz llegado a un castillo")
                  alert ("HAZ GANADO")
                  break;
            default: 
                  alert ("no te mueves!")
                  break;
       }
       

       let atacar = "a"
       let noAtacar = "b"
      if (camino == izquierda){
            let accion = prompt("Quieres atacar al enemigo? \n\n A atacar \n B no atacar");
      

            switch (accion) {
            case atacar:
                  alert("El enemigo esta recibiendo 50p de daño")
                  alert("haz matado al Goblin y sigues adelante")
                  break;

            case noAtacar:
                  vida = vida - 100
            alert("El enemigo te ataco!")
            alert("Barra de vida: " + vida)
                  break;
      
            default:
                  alert ("Se miran fijamente entre los dos en un silencio incomodo")
                  break;
      }       
      
            
      if (accion == noAtacar){
            alert("Wasted");}

            else 
             alert ("HAZ GANADO")

      }

      for (let coins = 0; coins < 4; coins++) {
            alert ("Recibes: \n" + coins + " Monedas")
      }
      

     
      