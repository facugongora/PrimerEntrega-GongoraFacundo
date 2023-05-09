// alert("SANATORIO DE LA CAÑADA");

// let nombre=prompt("Ingrese su nombre:");
// while(nombre===""){
//     console.log("Tenes que ingresar tu nombre.")
//     nombre=prompt("Ingrese su nombre:");
// }

// function saludar(usuario){
//     console.log("Bienvenido al Sanatorio de la Cañada "+ nombre + ", ya podés solicitar un turno.")
// }   
// saludar(nombre);


// let edad=prompt("Ingresa tu edad:");
// while(edad===""){
//     console.log("Tenes que ingresar tu edad.")
//     edad=prompt("Ingrese su edad:");
// }

// if(edad<"18"){
//     console.log("Tenes que ser mayor de edad para solicitar un turno")
// }else{
//     console.log(nombre + ", ya podés solicitar un turno")
// }


// let horario= parseInt(prompt("En que horario desea asistir al turno? \n 1. Mañana\n 2. Tarde\n 3. Noche"));

// switch (horario){
//     case 1:
//         console.log("Eligió turno mañana");
//         especialidad=prompt("Con que especialidad necesita su turno?");
//         console.log("Eligió la especialidad de " + especialidad);
//         let dia1=parseInt(prompt("Que dia de la semana desea asistir al turno?\n 1. Lunes\n 2. Martes\n 3. Miercoles\n 4. Jueves\n 5. Viernes"));

//         switch(dia1){
//             case 1:
//                 console.log("Su turno queda agendado para el dia lunes por la mañana con la especialidad de " + especialidad);
//                 break;
//             case 2:
//                 console.log("Su turno queda agendado para el dia martes por la mañana con la especialidad de " + especialidad);
//                 break;
//             case 3:
//                 console.log("Su turno queda agendado para el dia miercoles por la mañana con la especialidad de " + especialidad);
//                 break;
//             case 4:
//                 console.log("Su turno queda agendado para el dia jueves por la mañana con la especialidad de " + especialidad);
//                 break;
//             case 5:
//                 console.log("Su turno queda agendado para el dia viernes por la mañana con la especialidad de " + especialidad);
//                 break;
//             default:
//                 break;
                
//         }
        
//     case 2:
//         console.log("Eligió turno tarde");
//         especialidad=prompt("Con que especialidad necesita su turno?");
//         console.log("Eligió la especialidad de " + especialidad);
//         let dia2=parseInt(prompt("Que dia de la semana desea asistir al turno?\n 1. Lunes\n 2. Martes\n 3. Miercoles\n 4. Jueves\n 5. Viernes"));
//         switch(dia2){
//             case 1:
//                 console.log("Su turno queda agendado para el dia lunes por la tarde con la especialidad de " + especialidad);
//                 break;
//             case 2:
//                 console.log("Su turno queda agendado para el dia martes por la tarde con la especialidad de " + especialidad);
//                 break;
//             case 3:
//                 console.log("Su turno queda agendado para el dia miercoles por la tarde con la especialidad de " + especialidad);
//                 break;
//             case 4:
//                 console.log("Su turno queda agendado para el dia jueves por la tarde con la especialidad de " + especialidad);
//                 break;
//             case 5:
//                 console.log("Su turno queda agendado para el dia viernes por la tarde con la especialidad de " + especialidad);
//                 break;
//             default:
//                 console.log("Opción inválida.");
//         }
//         break;
//     case 3:
//         console.log("Eligió turno noche");
//         especialidad=prompt("Con que especialidad necesita su turno?");
//         console.log("Eligió la especialidad de " + especialidad);
//         let dia3=parseInt(prompt("Que dia de la semana desea asistir al turno?\n 1. Lunes\n 2. Martes\n 3. Miercoles\n 4. Jueves\n 5. Viernes"));
//         switch(dia3){
//             case 1:
//                 console.log("Su turno queda agendado para el dia lunes por la noche con la especialidad de " + especialidad);
//                 break;
//             case 2:
//                 console.log("Su turno queda agendado para el dia martes por la noche con la especialidad de " + especialidad);
//                 break;
//             case 3:
//                 console.log("Su turno queda agendado para el dia miercoles por la noche con la especialidad de " + especialidad);
//                 break;
//             case 4:
//                 console.log("Su turno queda agendado para el dia jueves por la noche con la especialidad de " + especialidad);
//                 break;
//             case 5:
//                 console.log("Su turno queda agendado para el dia viernes por la noche con la especialidad de " + especialidad);
//                 break;
//             default:
//                 console.log("Opción inválida.");
//         }
//         default:
//             console.log("Opción inválida.")    
// }

// alert("Gracias por elegirnos, hasta la próxima.")





let horario= parseInt(prompt("En que horario desea asistir al turno? \n 1. Mañana\n 2. Tarde\n 3. Noche"));

while(horario ==="" || horario > 3){
    alert("Pifiaste")
    horario= parseInt(prompt("En que horario desea asistir al turno? \n 1. Mañana\n 2. Tarde\n 3. Noche"));
    switch(horario){
        case 1:
            console.log("Su turno queda agendado para el dia lunes por la mañana con la especialidad de " + especialidad);
            break;
        case 2:
            console.log("Su turno queda agendado para el dia martes por la mañana con la especialidad de " + especialidad);
            break;
        case 3:
            console.log("Su turno queda agendado para el dia miercoles por la mañana con la especialidad de " + especialidad);
            break;
        case 4:
            console.log("Su turno queda agendado para el dia jueves por la mañana con la especialidad de " + especialidad);
                break;
        case 5:
            console.log("Su turno queda agendado para el dia viernes por la mañana con la especialidad de " + especialidad);
            break;
        default:
            break;

    }
}

