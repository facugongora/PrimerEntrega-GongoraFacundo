alert("SANATORIO DE LA CAÑADA");

let nombre=prompt("Ingrese su nombre:");
while(!nombre){
    console.log("Tenes que ingresar tu nombre.")
    nombre=prompt("Ingrese su nombre:");
}

function saludar(usuario){
    console.log("Bienvenido al Sanatorio de la Cañada "+ nombre + ", ya podés solicitar un turno.")
}   
saludar(nombre);


let edad=prompt("Ingresa tu edad:");
while(!edad){
    console.log("Tenes que ingresar tu edad.")
    edad=prompt("Ingrese su edad:");
}

if(edad<"18"){
    console.log("Eres menor de edad, busca un mayor que te ayude con la solicitud del turno")
}else{
    console.log(nombre + ", ya podés solicitar un turno")
}


let horario= prompt("En que horario desea asistir al turno? \n 1. Mañana\n 2. Tarde\n 3. Noche");
horario=parseInt(horario);

while(!horario || horario > 3){
    console.log("Opción inválida. Volve a intentar.")
    horario= prompt("En que horario desea asistir al turno? \n 1. Mañana\n 2. Tarde\n 3. Noche");
    horario=parseInt(horario);
}switch (horario){
    case 1:
        console.log("Eligió turno mañana");
        especialidad=prompt("Con que especialidad necesita su turno?");
        while(!especialidad || especialidad== ""){
            console.log("Debe ingresar una especialidad")
            especialidad=prompt("Con que especialidad necesita su turno?");
        }
        console.log("Eligió la especialidad de " + especialidad);
        let dia1=prompt("Que dia de la semana desea asistir al turno?\n 1. Lunes\n 2. Martes\n 3. Miercoles\n 4. Jueves\n 5. Viernes");
        dia1=parseInt(dia1);

        while(!dia1 || dia1 > 5){
            console.log("Opción inválida. Volve a intentar.")
            dia1=prompt("Que dia de la semana desea asistir al turno?\n 1. Lunes\n 2. Martes\n 3. Miercoles\n 4. Jueves\n 5. Viernes");
            dia1=parseInt(dia1);
        }switch(dia1){
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
        break;
        
        
    case 2:
        console.log("Eligió turno tarde");
        especialidad=prompt("Con que especialidad necesita su turno?");
        while(!especialidad || especialidad== ""){
            console.log("Debe ingresar una especialidad")
            especialidad=prompt("Con que especialidad necesita su turno?");
        }
        console.log("Eligió la especialidad de " + especialidad);
        let dia2=prompt("Que dia de la semana desea asistir al turno?\n 1. Lunes\n 2. Martes\n 3. Miercoles\n 4. Jueves\n 5. Viernes");
        dia2=parseInt(dia2);

        while(!dia2 || dia2 > 5){
            console.log("Opción inválida. Volve a intentar.")
            dia2=prompt("Que dia de la semana desea asistir al turno?\n 1. Lunes\n 2. Martes\n 3. Miercoles\n 4. Jueves\n 5. Viernes");
            dia2=parseInt(dia2);
        }switch(dia2){
            case 1:
                console.log("Su turno queda agendado para el dia lunes por la tarde con la especialidad de " + especialidad);
                break;
            case 2:
                console.log("Su turno queda agendado para el dia martes por la tarde con la especialidad de " + especialidad);
                break;
            case 3:
                console.log("Su turno queda agendado para el dia miercoles por la tarde con la especialidad de " + especialidad);
                break;
            case 4:
                console.log("Su turno queda agendado para el dia jueves por la tarde con la especialidad de " + especialidad);
                break;
            case 5:
                console.log("Su turno queda agendado para el dia viernes por la tarde con la especialidad de " + especialidad);
                break;
            default:
                console.log("Opción inválida.");
        }
        break;
    case 3:
        console.log("Eligió turno noche");
        especialidad=prompt("Con que especialidad necesita su turno?");
        while(!especialidad || especialidad== ""){
            console.log("Debe ingresar una especialidad")
            especialidad=prompt("Con que especialidad necesita su turno?");
        }
        console.log("Eligió la especialidad de " + especialidad);
        let dia3=prompt("Que dia de la semana desea asistir al turno?\n 1. Lunes\n 2. Martes\n 3. Miercoles\n 4. Jueves\n 5. Viernes");
        dia3=parseInt(dia3);
        while(!dia3 || dia3 > 5){
            console.log("Opción inválida. Volve a intentar.")
            dia3=prompt("Que dia de la semana desea asistir al turno?\n 1. Lunes\n 2. Martes\n 3. Miercoles\n 4. Jueves\n 5. Viernes");
            dia3=parseInt(dia3);
        }switch(dia3){
            case 1:
                console.log("Su turno queda agendado para el dia lunes por la noche con la especialidad de " + especialidad);
                break;
            case 2:
                console.log("Su turno queda agendado para el dia martes por la noche con la especialidad de " + especialidad);
                break;
            case 3:
                console.log("Su turno queda agendado para el dia miercoles por la noche con la especialidad de " + especialidad);
                break;
            case 4:
                console.log("Su turno queda agendado para el dia jueves por la noche con la especialidad de " + especialidad);
                break;
            case 5:
                console.log("Su turno queda agendado para el dia viernes por la noche con la especialidad de " + especialidad);
                break;
            default:
                console.log("Opción inválida.");
        }
        default:
            break;   
}


alert("Gracias por elegirnos, hasta la próxima.")






