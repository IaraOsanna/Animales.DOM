
let p = document.querySelector("#Descripcion")

let BPanda = document.querySelector("#BotonPanda")

let BSerpiente = document.querySelector("#BotonSerpiente")

let BOso = document.querySelector("#BotonOsoPolar")

let imgP = document.querySelector("#Panda")

let imgO = document.querySelector("#OsoPolar")

let imgS = document.querySelector("#SerpienteCoral")

let Titulo = document.querySelector("#Animal-Titulo")


BOso.onclick = function () {
    document.querySelector('#Animal-Titulo').textContent = 'Oso Polar';
        document.querySelector('#OsoPolar').src = 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Polar_Bear_%28Ursus_maritimus%29.jpg';
        document.querySelector('#OsoPolar').alt = 'Oso Polar';
        document.querySelector('#Descripcion').textContent = 'Los osos polares están clasificados como mamíferos marinos porque pasan la mayor parte de su vida en el hielo marino del océano Ártico. Cuentan con una gruesa capa de grasa corporal y un recubrimiento a prueba de agua que los aísla del aire y el agua fría..';
}


BSerpiente.onclick = function () {
    document.querySelector('#Animal-Titulo').textContent = 'Serpiente Coral';
        document.querySelector('#SerpienteCoral').src = 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Coral_snake_%28Micrurus_fulvius%29.jpg';
        document.querySelector('#SerpienteCoral').alt = 'Serpiente Coral';
        document.querySelector('#Descripcion').textContent = 'Una serpiente de coral puede medir hasta 3 pies (1 m) de largo y tiene: Bandas rojas, amarillas y negras a lo largo de todo el cuerpo. Pupilas redondeadas y hocico negro.';
}


BPanda.onclick = function () {
    document.querySelector('#Animal-Titulo').textContent = 'Oso Panda';
        document.querySelector('#Panda').src = 'https://upload.wikimedia.org/wikipedia/commons/5/56/Ailuropoda_melanoleuca_%28Giant_Panda%29.jpg';
        document.querySelector('#Panda').alt = 'Oso Panda';
        document.querySelector('#Descripcion').textContent = 'Poseen un pelaje blanco con partes negras alrededor de los ojos, en las orejas, hocico, hombros y extremidades. Tienen unos molares anchos y planos así como una estructura ósea de la muñeca reforzada que, junto con el pulgar, le ayudan a sostener, romper y comer el bambú.';
}
