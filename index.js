const db =[
    {
        nombre: "Orquídea Azul (Piperia elegans)",
        categoria: "Orquidáceas",
        imagen: "http://dummyimage.com/140x100.png/5fa2dd/ffffff",
        codigo: "317351867-5",
        precio: 1540,
        descripcion: "b74f95ce-ad5f-4eb0-ae85-f0ba844a69f3",
        color: "Azul",
        tamano: "Pequeño"
    },
    {
        nombre: "Bromelia Roja (Hohenbergia portoricensis)",
        categoria: "Bromeliáceas",
        imagen: "http://dummyimage.com/180x100.png/cc0000/ffffff",
        codigo: "307571949-8",
        precio: 7810,
        descripcion: "5c2cee00-2aea-4d08-b0f1-f8c655e62bbc",
        color: "Rojo",
        tamano: "Pequeño"
    },
    {
        nombre: "Rosa Silvestre (Rubus latens)",
        categoria: "Rosáceas",
        imagen: "http://dummyimage.com/179x100.png/ff4444/ffffff",
        codigo: "983798126-1",
        precio: 8290,
        descripcion: "d9458f12-0df5-4068-b274-83055d6a0601",
        color: "Amarillo",
        tamano: "Pequeño"
    },
    {
        nombre: "Lirio del Desierto (Lesquerella lasiocarpa)",
        categoria: "Brasicáceas",
        imagen: "http://dummyimage.com/118x100.png/cc0000/ffffff",
        codigo: "239053644-1",
        precio: 110,
        descripcion: "d59db6ae-3562-4a05-8adc-7ba24cbc46b3",
        color: "Azul",
        tamano: "Pequeño"
    },
    {
        nombre: "Flor de Sal (Microtea portoricensis)",
        categoria: "Quenopodiáceas",
        imagen: "http://dummyimage.com/170x100.png/cc0000/ffffff",
        codigo: "251546600-1",
        precio: 4320,
        descripcion: "44054cf1-8ab5-4603-b081-c4562f200e03",
        color: "Fucsia",
        tamano: "Pequeño"
    },
    {
        nombre: "Perejil Marino (Eryngium maritimum)",
        categoria: "Apiáceas",
        imagen: "http://dummyimage.com/170x100.png/ff4444/ffffff",
        codigo: "174081567-X",
        precio: 9990,
        descripcion: "399adea5-f281-4b88-8c45-4ff9a2a9c661",
        color: "Turquesa",
        tamano: "Grande"
    },
    {
        nombre: "Trébol Silvestre (Eriogonum mohavense)",
        categoria: "Polygonáceas",
        imagen: "http://dummyimage.com/169x100.png/dddddd/000000",
        codigo: "519263810-0",
        precio: 8220,
        descripcion: "d8f0c5a4-b3b2-420c-9090-493e57b86611",
        color: "Morado",
        tamano: "Pequeño"
    },
    {
        nombre: "Genciana Púrpura (Cyrtandra ×villicalyx)",
        categoria: "Gesneriáceas",
        imagen: "http://dummyimage.com/172x100.png/5fa2dd/ffffff",
        codigo: "602230179-3",
        precio: 6760,
        descripcion: "4dc25649-df2f-4728-b5e3-259b73cfe9a2",
        color: "Naranja",
        tamano: "Mediano"
    },
    {
        nombre: "Cebollino Chino (Allium tuberosum)",
        categoria: "Liliáceas",
        imagen: "http://dummyimage.com/138x100.png/dddddd/000000",
        codigo: "404530778-8",
        precio: 5230,
        descripcion: "fc7cfc13-722f-4b63-bc4c-9da76decc8a7",
        color: "Carmesí",
        tamano: "Grande"
    },
    {
        nombre: "Juncias Cárex (Carex tiogana)",
        categoria: "Ciperáceas",
        imagen: "http://dummyimage.com/208x100.png/5fa2dd/ffffff",
        codigo: "172358226-3",
        precio: 5810,
        descripcion: "7014a298-9706-4138-96f6-39cd18ecfcbf",
        color: "Turquesa",
        tamano: "Grande"
    },
    {
        nombre: "Lágrimas de Amor (Dicentra nevadensis)",
        categoria: "Fumariáceas",
        imagen: "http://dummyimage.com/110x100.png/5fa2dd/ffffff",
        codigo: "910638163-4",
        precio: 1960,
        descripcion: "439edbb2-12c9-4ad4-bfb7-9c659d231a0b",
        color: "Rosa",
        tamano: "Extra Grande"
    },
    {
        nombre: "Ortiga Brillante (Glossopetalon spinescens)",
        categoria: "Crossosomátáceas",
        imagen: "http://dummyimage.com/175x100.png/ff4444/ffffff",
        codigo: "230833161-5",
        precio: 5770,
        descripcion: "5039cb87-e5a1-4520-8346-f3614abe2b31",
        color: "Violeta",
        tamano: "Mediano"
    },
    {
        nombre: "Margarita del Desierto (Oenothera deltoides)",
        categoria: "Onagráceas",
        imagen: "http://dummyimage.com/119x100.png/5fa2dd/ffffff",
        codigo: "731761113-2",
        precio: 2540,
        descripcion: "e4a82e33-020a-4a3c-8312-68a088762d46",
        color: "Amarillo",
        tamano: "Extra Grande"
    },
    {
        nombre: "Lirio del Desierto (Lesquerella lasiocarpa)",
        categoria: "Brasicáceas",
        imagen: "http://dummyimage.com/118x100.png/cc0000/ffffff",
        codigo: "239053644-1",
        precio: 110,
        descripcion: "d59db6ae-3562-4a05-8adc-7ba24cbc46b3",
        color: "Azul",
        tamano: "Pequeño"
    },
    {
        nombre: "Flor de Sal (Microtea portoricensis)",
        categoria: "Quenopodiáceas",
        imagen: "http://dummyimage.com/170x100.png/cc0000/ffffff",
        codigo: "251546600-1",
        precio: 4320,
        descripcion: "44054cf1-8ab5-4603-b081-c4562f200e03",
        color: "Fucsia",
        tamano: "Pequeño"
    },
    {
        nombre: "Perejil Marino (Eryngium maritimum)",
        categoria: "Apiáceas",
        imagen: "http://dummyimage.com/170x100.png/ff4444/ffffff",
        codigo: "174081567-X",
        precio: 9990,
        descripcion: "399adea5-f281-4b88-8c45-4ff9a2a9c661",
        color: "Turquesa",
        tamano: "Grande"
    },
    {
        nombre: "Trébol Silvestre (Eriogonum mohavense)",
        categoria: "Polygonáceas",
        imagen: "http://dummyimage.com/169x100.png/dddddd/000000",
        codigo: "519263810-0",
        precio: 8220,
        descripcion: "d8f0c5a4-b3b2-420c-9090-493e57b86611",
        color: "Morado",
        tamano: "Pequeño"
    },
    {
        nombre: "Genciana Púrpura (Cyrtandra ×villicalyx)",
        categoria: "Gesneriáceas",
        imagen: "http://dummyimage.com/172x100.png/5fa2dd/ffffff",
        codigo: "602230179-3",
        precio: 6760,
        descripcion: "4dc25649-df2f-4728-b5e3-259b73cfe9a2",
        color: "Naranja",
        tamano: "Mediano"
    },
    {
        nombre: "Cebollino Chino (Allium tuberosum)",
        categoria: "Liliáceas",
        imagen: "http://dummyimage.com/138x100.png/dddddd/000000",
        codigo: "404530778-8",
        precio: 5230,
        descripcion: "fc7cfc13-722f-4b63-bc4c-9da76decc8a7",
        color: "Carmesí",
        tamano: "Grande"
    },
    {
        nombre: "Juncias Cárex (Carex tiogana)",
        categoria: "Ciperáceas",
        imagen: "http://dummyimage.com/208x100.png/5fa2dd/ffffff",
        codigo: "172358226-3",
        precio: 5810,
        descripcion: "7014a298-9706-4138-96f6-39cd18ecfcbf",
        color: "Turquesa",
        tamano: "Grande"
    },
    {
        nombre: "Lágrimas de Amor (Dicentra nevadensis)",
        categoria: "Fumariáceas",
        imagen: "http://dummyimage.com/110x100.png/5fa2dd/ffffff",
        codigo: "910638163-4",
        precio: 1960,
        descripcion: "439edbb2-12c9-4ad4-bfb7-9c659d231a0b",
        color: "Rosa",
        tamano: "Extra Grande"
    },
    {
        nombre: "Ortiga Brillante (Glossopetalon spinescens)",
        categoria: "Crossosomátáceas",
        imagen: "http://dummyimage.com/175x100.png/ff4444/ffffff",
        codigo: "230833161-5",
        precio: 5770,
        descripcion: "5039cb87-e5a1-4520-8346-f3614abe2b31",
        color: "Violeta",
        tamano: "Mediano"
    },
    {
        nombre: "Margarita del Desierto (Oenothera deltoides)",
        categoria: "Onagráceas",
        imagen: "http://dummyimage.com/119x100.png/5fa2dd/ffffff",
        codigo: "731761113-2",
        precio: 2540,
        descripcion: "e4a82e33-020a-4a3c-8312-68a088762d46",
        color: "Amarillo",
        tamano: "Extra Grande"
    },
    {
        nombre: "Lirio del Desierto (Lesquerella lasiocarpa)",
        categoria: "Brasicáceas",
        imagen: "http://dummyimage.com/118x100.png/cc0000/ffffff",
        codigo: "239053644-1",
        precio: 110,
        descripcion: "d59db6ae-3562-4a05-8adc-7ba24cbc46b3",
        color: "Azul",
        tamano: "Pequeño"
    },
    {
        nombre: "Flor de Sal (Microtea portoricensis)",
        categoria: "Quenopodiáceas",
        imagen: "http://dummyimage.com/170x100.png/cc0000/ffffff",
        codigo: "251546600-1",
        precio: 4320,
        descripcion: "44054cf1-8ab5-4603-b081-c4562f200e03",
        color: "Fucsia",
        tamano: "Pequeño"
    },
    {
        nombre: "Perejil Marino (Eryngium maritimum)",
        categoria: "Apiáceas",
        imagen: "http://dummyimage.com/170x100.png/ff4444/ffffff",
        codigo: "174081567-X",
        precio: 9990,
        descripcion: "399adea5-f281-4b88-8c45-4ff9a2a9c661",
        color: "Turquesa",
        tamano: "Grande"
    },
    {
        nombre: "Trébol Silvestre (Eriogonum mohavense)",
        categoria: "Polygonáceas",
        imagen: "http://dummyimage.com/169x100.png/dddddd/000000",
        codigo: "519263810-0",
        precio: 8220,
        descripcion: "d8f0c5a4-b3b2-420c-9090-493e57b86611",
        color: "Morado",
        tamano: "Pequeño"
    },
    {
        nombre: "Genciana Púrpura (Cyrtandra ×villicalyx)",
        categoria: "Gesneriáceas",
        imagen: "http://dummyimage.com/172x100.png/5fa2dd/ffffff",
        codigo: "602230179-3",
        precio: 6760,
        descripcion: "4dc25649-df2f-4728-b5e3-259b73cfe9a2",
        color: "Naranja",
        tamano: "Mediano"
    },
    {
        nombre: "Cebollino Chino (Allium tuberosum)",
        categoria: "Liliáceas",
        imagen: "http://dummyimage.com/138x100.png/dddddd/000000",
        codigo: "404530778-8",
        precio: 5230,
        descripcion: "fc7cfc13-722f-4b63-bc4c-9da76decc8a7",
        color: "Carmesí",
        tamano: "Grande"
    },
    {
        nombre: "Juncias Cárex (Carex tiogana)",
        categoria: "Ciperáceas",
        imagen: "http://dummyimage.com/208x100.png/5fa2dd/ffffff",
        codigo: "172358226-3",
        precio: 5810,
        descripcion: "7014a298-9706-4138-96f6-39cd18ecfcbf",
        color: "Turquesa",
        tamano: "Grande"
    },
    {
        nombre: "Lágrimas de Amor (Dicentra nevadensis)",
        categoria: "Fumariáceas",
        imagen: "http://dummyimage.com/110x100.png/5fa2dd/ffffff",
        codigo: "910638163-4",
        precio: 1960,
        descripcion: "439edbb2-12c9-4ad4-bfb7-9c659d231a0b",
        color: "Rosa",
        tamano: "Extra Grande"
    },
    {
        nombre: "Ortiga Brillante (Glossopetalon spinescens)",
        categoria: "Crossosomátáceas",
        imagen: "http://dummyimage.com/175x100.png/ff4444/ffffff",
        codigo: "230833161-5",
        precio: 5770,
        descripcion: "5039cb87-e5a1-4520-8346-f3614abe2b31",
        color: "Violeta",
        tamano: "Mediano"
    },
    {
        nombre: "Margarita del Desierto (Oenothera deltoides)",
        categoria: "Onagráceas",
        imagen: "http://dummyimage.com/119x100.png/5fa2dd/ffffff",
        codigo: "731761113-2",
        precio: 2540,
        descripcion: "e4a82e33-020a-4a3c-8312-68a088762d46",
        color: "Amarillo",
        tamano: "Extra Grande"
    },
    {
        nombre: "Lirio del Desierto (Lesquerella lasiocarpa)",
        categoria: "Brasicáceas",
        imagen: "http://dummyimage.com/118x100.png/cc0000/ffffff",
        codigo: "239053644-1",
        precio: 110,
        descripcion: "d59db6ae-3562-4a05-8adc-7ba24cbc46b3",
        color: "Azul",
        tamano: "Pequeño"
    },
    {
        nombre: "Flor de Sal (Microtea portoricensis)",
        categoria: "Quenopodiáceas",
        imagen: "http://dummyimage.com/170x100.png/cc0000/ffffff",
        codigo: "251546600-1",
        precio: 4320,
        descripcion: "44054cf1-8ab5-4603-b081-c4562f200e03",
        color: "Fucsia",
        tamano: "Pequeño"
    },
    {
        nombre: "Perejil Marino (Eryngium maritimum)",
        categoria: "Apiáceas",
        imagen: "http://dummyimage.com/170x100.png/ff4444/ffffff",
        codigo: "174081567-X",
        precio: 9990,
        descripcion: "399adea5-f281-4b88-8c45-4ff9a2a9c661",
        color: "Turquesa",
        tamano: "Grande"
    },
    {
        nombre: "Trébol Silvestre (Eriogonum mohavense)",
        categoria: "Polygonáceas",
        imagen: "http://dummyimage.com/169x100.png/dddddd/000000",
        codigo: "519263810-0",
        precio: 8220,
        descripcion: "d8f0c5a4-b3b2-420c-9090-493e57b86611",
        color: "Morado",
        tamano: "Pequeño"
    },
    {
        nombre: "Genciana Púrpura (Cyrtandra ×villicalyx)",
        categoria: "Gesneriáceas",
        imagen: "http://dummyimage.com/172x100.png/5fa2dd/ffffff",
        codigo: "602230179-3",
        precio: 6760,
        descripcion: "4dc25649-df2f-4728-b5e3-259b73cfe9a2",
        color: "Naranja",
        tamano: "Mediano"
    },
    {
        nombre: "Cebollino Chino (Allium tuberosum)",
        categoria: "Liliáceas",
        imagen: "http://dummyimage.com/138x100.png/dddddd/000000",
        codigo: "404530778-8",
        precio: 5230,
        descripcion: "fc7cfc13-722f-4b63-bc4c-9da76decc8a7",
        color: "Carmesí",
        tamano: "Grande"
    },
    {
        nombre: "Juncias Cárex (Carex tiogana)",
        categoria: "Ciperáceas",
        imagen: "http://dummyimage.com/208x100.png/5fa2dd/ffffff",
        codigo: "172358226-3",
        precio: 5810,
        descripcion: "7014a298-9706-4138-96f6-39cd18ecfcbf",
        color: "Turquesa",
        tamano: "Grande"
    },
    {
        nombre: "Lágrimas de Amor (Dicentra nevadensis)",
        categoria: "Fumariáceas",
        imagen: "http://dummyimage.com/110x100.png/5fa2dd/ffffff",
        codigo: "910638163-4",
        precio: 1960,
        descripcion: "439edbb2-12c9-4ad4-bfb7-9c659d231a0b",
        color: "Rosa",
        tamano: "Extra Grande"
    },
    {
        nombre: "Ortiga Brillante (Glossopetalon spinescens)",
        categoria: "Crossosomátáceas",
        imagen: "http://dummyimage.com/175x100.png/ff4444/ffffff",
        codigo: "230833161-5",
        precio: 5770,
        descripcion: "5039cb87-e5a1-4520-8346-f3614abe2b31",
        color: "Violeta",
        tamano: "Mediano"
    },
    {
        nombre: "Margarita del Desierto (Oenothera deltoides)",
        categoria: "Onagráceas",
        imagen: "http://dummyimage.com/119x100.png/5fa2dd/ffffff",
        codigo: "731761113-2",
        precio: 2540,
        descripcion: "e4a82e33-020a-4a3c-8312-68a088762d46",
        color: "Amarillo",
        tamano: "Extra Grande"
    },
    {
        nombre: "Lirio del Desierto (Lesquerella lasiocarpa)",
        categoria: "Brasicáceas",
        imagen: "http://dummyimage.com/118x100.png/cc0000/ffffff",
        codigo: "239053644-1",
        precio: 110,
        descripcion: "d59db6ae-3562-4a05-8adc-7ba24cbc46b3",
        color: "Azul",
        tamano: "Pequeño"
    },
    {
        nombre: "Flor de Sal (Microtea portoricensis)",
        categoria: "Quenopodiáceas",
        imagen: "http://dummyimage.com/170x100.png/cc0000/ffffff",
        codigo: "251546600-1",
        precio: 4320,
        descripcion: "44054cf1-8ab5-4603-b081-c4562f200e03",
        color: "Fucsia",
        tamano: "Pequeño"
    },
    {
        nombre: "Perejil Marino (Eryngium maritimum)",
        categoria: "Apiáceas",
        imagen: "http://dummyimage.com/170x100.png/ff4444/ffffff",
        codigo: "174081567-X",
        precio: 9990,
        descripcion: "399adea5-f281-4b88-8c45-4ff9a2a9c661",
        color: "Turquesa",
        tamano: "Grande"
    },
    {
        nombre: "Trébol Silvestre (Eriogonum mohavense)",
        categoria: "Polygonáceas",
        imagen: "http://dummyimage.com/169x100.png/dddddd/000000",
        codigo: "519263810-0",
        precio: 8220,
        descripcion: "d8f0c5a4-b3b2-420c-9090-493e57b86611",
        color: "Morado",
        tamano: "Pequeño"
    },
    {
        nombre: "Genciana Púrpura (Cyrtandra ×villicalyx)",
        categoria: "Gesneriáceas",
        imagen: "http://dummyimage.com/172x100.png/5fa2dd/ffffff",
        codigo: "602230179-3",
        precio: 6760,
        descripcion: "4dc25649-df2f-4728-b5e3-259b73cfe9a2",
        color: "Naranja",
        tamano: "Mediano"
    },
    {
        nombre: "Cebollino Chino (Allium tuberosum)",
        categoria: "Liliáceas",
        imagen: "http://dummyimage.com/138x100.png/dddddd/000000",
        codigo: "404530778-8",
        precio: 5230,
        descripcion: "fc7cfc13-722f-4b63-bc4c-9da76decc8a7",
        color: "Carmesí",
        tamano: "Grande"
    },
    {
        nombre: "Juncias Cárex (Carex tiogana)",
        categoria: "Ciperáceas",
        imagen: "http://dummyimage.com/208x100.png/5fa2dd/ffffff",
        codigo: "172358226-3",
        precio: 5810,
        descripcion: "7014a298-9706-4138-96f6-39cd18ecfcbf",
        color: "Turquesa",
        tamano: "Grande"
    }
]

// FORMULARIO REGISTRO
// Envío Formulario Contacto
emailjs.init('RGKQdOEOFrKK_ymvsyUEm'); 
const btn = document.getElementById('button-contacto');

document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const serviceID = 'default_service';
    const templateID = 'template_y735lib';

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            Swal.fire({
                icon: 'success',
                title: 'Se envió el mensaje',
                timer: 2500,
                showConfirmButton: false
            });
            window.location = "contacto.html";
        }, (err) => {
            btn.value = 'Send Email';
            alert(JSON.stringify(err));
        });
});
