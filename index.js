let db = [
    {
        nombre: "Orquídea Azul (Piperia elegans)",
        categoria: "Orquidáceas",
        imagen: "https://eljardidesther.es/wp-content/uploads/nc/p/2/8/3/283.jpg",
        codigo: "317351867-5",
        precio: 1540,
        descripcion: "b74f95ce-ad5f-4eb0-ae85-f0ba844a69f3",
        color: "Azul",
        tamano: "Pequeño"
    },
    {
        nombre: "Bromelia Roja (Hohenbergia portoricensis)",
        categoria: "Bromeliáceas",
        imagen: "https://www.floristeriasayonela.com/612/bromelia-roja.jpg",
        codigo: "307571949-8",
        precio: 7810,
        descripcion: "5c2cee00-2aea-4d08-b0f1-f8c655e62bbc",
        color: "Rojo",
        tamano: "Pequeño"
    },
    {
        nombre: "Rosa Silvestre (Rubus latens)",
        categoria: "Rosáceas",
        imagen: "https://www.naturkenva.com/bmz_cache/3/consejos-para-mantener-un-ramo-de-flores-secas-naturales-432x432.jpg",
        codigo: "983798126-1",
        precio: 8290,
        descripcion: "d9458f12-0df5-4068-b274-83055d6a0601",
        color: "Morado",
        tamano: "Pequeño"
    },
    {
        nombre: "Lirio del Desierto (Lesquerella lasiocarpa)",
        categoria: "Brasicáceas",
        imagen: "https://oaktrust.library.tamu.edu/bitstream/handle/1969.1/194640/Lesquerella%20d.jpg?sequence=4&isAllowed=y",
        codigo: "239053644-1",
        precio: 110,
        descripcion: "d59db6ae-3562-4a05-8adc-7ba24cbc46b3",
        color: "Amarillo",
        tamano: "Pequeño"
    },
    {
        nombre: "Flor de Sal (Microtea portoricensis)",
        categoria: "Quenopodiáceas",
        imagen: "https://plantasdecolombia.com/wp-content/uploads/2011/10/zapoteca-portoricensis-2.jpg",
        codigo: "251546600-1",
        precio: 4320,
        descripcion: "44054cf1-8ab5-4603-b081-c4562f200e03",
        color: "Amarillo",
        tamano: "Pequeño"
    },
    {
        nombre: "Perejil Marino (Eryngium maritimum)",
        categoria: "Apiáceas",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1-dmHNbO47vTVwRukecTnU7Xr1eI9ZOQ9tQ&s",
        codigo: "174081567-X",
        precio: 9990,
        descripcion: "399adea5-f281-4b88-8c45-4ff9a2a9c661",
        color: "Blanco",
        tamano: "Grande"
    },
    {
        nombre: "Trébol Silvestre (Eriogonum mohavense)",
        categoria: "Polygonáceas",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Western_Mojave_wild_buckwheat_imported_from_iNaturalist_photo_290914664_on_12_March_2024.jpg",
        codigo: "519263810-0",
        precio: 8220,
        descripcion: "d8f0c5a4-b3b2-420c-9090-493e57b86611",
        color: "Verde",
        tamano: "Pequeño"
    },
    {
        nombre: "Genciana Púrpura (Cyrtandra ×villicalyx)",
        categoria: "Gesneriáceas",
        imagen: "https://media.istockphoto.com/id/1400694526/es/foto/la-genciana-sin-tallo.webp?b=1&s=170667a&w=0&k=20&c=vYkb26IoQZ0FgBTo0AazOnjWrHkivNtzpDkXG8oyVUQ=",
        codigo: "602230179-3",
        precio: 6760,
        descripcion: "4dc25649-df2f-4728-b5e3-259b73cfe9a2",
        color: "Azul",
        tamano: "Mediano"
    },
    {
        nombre: "Cebollino Chino (Allium tuberosum)",
        categoria: "Liliáceas",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTydrMeKN9bhtPL57oXpdiEAJ-2DvlHVWQBJw&s",
        codigo: "404530778-8",
        precio: 5230,
        descripcion: "fc7cfc13-722f-4b63-bc4c-9da76decc8a7",
        color: "Blanco",
        tamano: "Grande"
    },
    {
        nombre: "Juncias Cárex (Carex tiogana)",
        categoria: "Ciperáceas",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYXVoqZbXmzNReOx0i6hjnGlrI2QQL5xOsZg&s",
        codigo: "172358226-3",
        precio: 5810,
        descripcion: "7014a298-9706-4138-96f6-39cd18ecfcbf",
        color: "Verde",
        tamano: "Grande"
    },
    {
        nombre: "Lágrimas de Amor (Dicentra nevadensis)",
        categoria: "Fumariáceas",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Dicentra_nevadensis_imported_from_iNaturalist_photo_22525515_on_5_December_2019.jpg",
        codigo: "910638163-4",
        precio: 1960,
        descripcion: "439edbb2-12c9-4ad4-bfb7-9c659d231a0b",
        color: "Rosa",
        tamano: "Extra Grande"
    },
    {
        nombre: "Ortiga Brillante (Glossopetalon spinescens)",
        categoria: "Crossosomátáceas",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/7/74/Glossopetalon_spinescens_var_aridum_4.jpg",
        codigo: "230833161-5",
        precio: 5770,
        descripcion: "5039cb87-e5a1-4520-8346-f3614abe2b31",
        color: "Violeta",
        tamano: "Mediano"
    },
    {
        nombre: "Margarita del Desierto (Oenothera deltoides)",
        categoria: "Onagráceas",
        imagen: "https://www.jardineriaon.com/wp-content/uploads/2014/06/Oenothera_deltoides_ssp_deltoides.jpg",
        codigo: "731761113-2",
        precio: 2540,
        descripcion: "e4a82e33-020a-4a3c-8312-68a088762d46",
        color: "Amarillo",
        tamano: "Extra Grande"
    },
    {
        nombre: "Lirio del Desierto (Lesquerella lasiocarpa)",
        categoria: "Brasicáceas",
        imagen: "https://inaturalist-open-data.s3.amazonaws.com/photos/289438657/original.jpg",
        codigo: "239053644-1",
        precio: 110,
        descripcion: "d59db6ae-3562-4a05-8adc-7ba24cbc46b3",
        color: "Azul",
        tamano: "Pequeño"
    },
    {
        nombre: "Flor de Sal (Microtea portoricensis)",
        categoria: "Quenopodiáceas",
        imagen: "https://media.gettyimages.com/id/1298952514/es/foto/aromatherapy-bath-salts.jpg?s=612x612&w=gi&k=20&c=O0hWaJZYriu84qnVhZjk-3Ovlh9_vvcRZu1uZ7pGS_I=",
        codigo: "251546600-1",
        precio: 4320,
        descripcion: "44054cf1-8ab5-4603-b081-c4562f200e03",
        color: "Fucsia",
        tamano: "Pequeño"
    },
    {
        nombre: "Perejil Marino (Eryngium maritimum)",
        categoria: "Apiáceas",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Eryngium_maritimum_2.jpg/240px-Eryngium_maritimum_2.jpg",
        codigo: "174081567-X",
        precio: 9990,
        descripcion: "399adea5-f281-4b88-8c45-4ff9a2a9c661",
        color: "Turquesa",
        tamano: "Grande"
    },
    {
        nombre: "Trébol Silvestre (Eriogonum mohavense)",
        categoria: "Polygonáceas",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Western_Mojave_wild_buckwheat_imported_from_iNaturalist_photo_290914664_on_12_March_2024.jpg/220px-Western_Mojave_wild_buckwheat_imported_from_iNaturalist_photo_290914664_on_12_March_2024.jpg",
        codigo: "519263810-0",
        precio: 8220,
        descripcion: "d8f0c5a4-b3b2-420c-9090-493e57b86611",
        color: "Morado",
        tamano: "Pequeño"
    },
    {
        nombre: "Genciana Púrpura (Cyrtandra villicalyx)",
        categoria: "Gesneriáceas",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Gentiana_purpurea_Swiss.jpg/240px-Gentiana_purpurea_Swiss.jpg",
        codigo: "602230179-3",
        precio: 6760,
        descripcion: "4dc25649-df2f-4728-b5e3-259b73cfe9a2",
        color: "Naranja",
        tamano: "Mediano"
    },
    {
        nombre: "Cebollino Chino (Allium tuberosum)",
        categoria: "Liliáceas",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Allium_tuberosum2.jpg/250px-Allium_tuberosum2.jpg",
        codigo: "404530778-8",
        precio: 5230,
        descripcion: "fc7cfc13-722f-4b63-bc4c-9da76decc8a7",
        color: "Carmesí",
        tamano: "Grande"
    },
    {
        nombre: "Juncias Cárex (Carex tiogana)",
        categoria: "Ciperáceas",
        imagen: "",
        codigo: "172358226-3",
        precio: 5810,
        descripcion: "7014a298-9706-4138-96f6-39cd18ecfcbf",
        color: "Turquesa",
        tamano: "Grande"
    },
    {
        nombre: "Lágrimas de Amor (Dicentra nevadensis)",
        categoria: "Fumariáceas",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Dicentra_nevadensis_imported_from_iNaturalist_photo_22525515_on_5_December_2019.jpg",
        codigo: "910638163-4",
        precio: 1960,
        descripcion: "439edbb2-12c9-4ad4-bfb7-9c659d231a0b",
        color: "Rosa",
        tamano: "Extra Grande"
    },
    {
        nombre: "Ortiga Brillante (Glossopetalon spinescens)",
        categoria: "Crossosomátáceas",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/7/74/Glossopetalon_spinescens_var_aridum_4.jpg",
        codigo: "230833161-5",
        precio: 5770,
        descripcion: "5039cb87-e5a1-4520-8346-f3614abe2b31",
        color: "Violeta",
        tamano: "Mediano"
    },
    {
        nombre: "Margarita del Desierto (Oenothera deltoides)",
        categoria: "Onagráceas",
        imagen: "https://c8.alamy.com/compes/hxfcp1/dune-primrose-oenothera-deltoides-ssp-deltoides-onagraceae-que-florece-en-el-desierto-anza-borrego-state-park-california-ee-uu-2017-hxfcp1.jpg",
        codigo: "731761113-2",
        precio: 2540,
        descripcion: "e4a82e33-020a-4a3c-8312-68a088762d46",
        color: "Amarillo",
        tamano: "Extra Grande"
    },
    {
        nombre: "Lirio del Desierto (Lesquerella lasiocarpa)",
        categoria: "Brasicáceas",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoigZpVendRFSyzzpv8vsQ6yF67B8ltJ22-Q&s",
        codigo: "239053644-1",
        precio: 110,
        descripcion: "d59db6ae-3562-4a05-8adc-7ba24cbc46b3",
        color: "Azul",
        tamano: "Pequeño"
    },
    {
        nombre: "Flor de Sal (Microtea portoricensis)",
        categoria: "Quenopodiáceas",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Fleur_de_sel1.jpg/799px-Fleur_de_sel1.jpg",
        codigo: "251546600-1",
        precio: 4320,
        descripcion: "44054cf1-8ab5-4603-b081-c4562f200e03",
        color: "Fucsia",
        tamano: "Pequeño"
    },
    {
        nombre: "Perejil Marino (Eryngium maritimum)",
        categoria: "Apiáceas",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Eryngium_maritimum_2.jpg/640px-Eryngium_maritimum_2.jpg",
        codigo: "174081567-X",
        precio: 9990,
        descripcion: "399adea5-f281-4b88-8c45-4ff9a2a9c661",
        color: "Turquesa",
        tamano: "Grande"
    },
    {
        nombre: "Trébol Silvestre (Eriogonum mohavense)",
        categoria: "Polygonáceas",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Western_Mojave_wild_buckwheat_imported_from_iNaturalist_photo_290914664_on_12_March_2024.jpg/220px-Western_Mojave_wild_buckwheat_imported_from_iNaturalist_photo_290914664_on_12_March_2024.jpg",
        codigo: "519263810-0",
        precio: 8220,
        descripcion: "d8f0c5a4-b3b2-420c-9090-493e57b86611",
        color: "Morado",
        tamano: "Pequeño"
    },
    {
        nombre: "Genciana Púrpura (Cyrtandra villicaly)",
        categoria: "Gesneriáceas",
        imagen: "https://www.picturethisai.com/image-handle/website_cmsname/image/1080/201207101717086208.jpeg?x-oss-process=image/format,webp/resize,s_500/quality,q_70&v=1.3",
        codigo: "602230179-3",
        precio: 6760,
        descripcion: "4dc25649-df2f-4728-b5e3-259b73cfe9a2",
        color: "Naranja",
        tamano: "Mediano"
    },
    {
        nombre: "Cebollino Chino (Allium tuberosum)",
        categoria: "Liliáceas",
        imagen: "https://www.cincopinos.cl/cdn/shop/products/alliumtuberosum_1200x.jpg?v=1681151224",
        codigo: "404530778-8",
        precio: 5230,
        descripcion: "fc7cfc13-722f-4b63-bc4c-9da76decc8a7",
        color: "Carmesí",
        tamano: "Grande"
    },
    {
        nombre: "Juncias Cárex (Carex tiogana)",
        categoria: "Ciperáceas",
        imagen: "https://www.picturethisai.com/image-handle/website_cmsname/image/1080/153913417269248002.jpeg?x-oss-process=image/format,webp",
        codigo: "172358226-3",
        precio: 5810,
        descripcion: "7014a298-9706-4138-96f6-39cd18ecfcbf",
        color: "Turquesa",
        tamano: "Grande"
    },
    {
        nombre: "Lágrimas de Amor (Dicentra nevadensis)",
        categoria: "Fumariáceas",
        imagen: "https://calphotos.berkeley.edu/imgs/512x768/0000_0000/0616/1685.jpeg",
        codigo: "910638163-4",
        precio: 1960,
        descripcion: "439edbb2-12c9-4ad4-bfb7-9c659d231a0b",
        color: "Rosa",
        tamano: "Extra Grande"
    },
    {
        nombre: "Ortiga Brillante (Glossopetalon spinescens)",
        categoria: "Crossosomátáceas",
        imagen: "https://www.swcoloradowildflowers.com/White%20Enlarged%20Photos/3fome.jpg",
        codigo: "230833161-5",
        precio: 5770,
        descripcion: "5039cb87-e5a1-4520-8346-f3614abe2b31",
        color: "Violeta",
        tamano: "Mediano"
    },
    {
        nombre: "Margarita del Desierto (Oenothera deltoides)",
        categoria: "Onagráceas",
        imagen: "https://i.etsystatic.com/22796762/r/il/ead5b5/4113271147/il_570xN.4113271147_fvdq.jpg",
        codigo: "731761113-2",
        precio: 2540,
        descripcion: "e4a82e33-020a-4a3c-8312-68a088762d46",
        color: "Amarillo",
        tamano: "Extra Grande"
    },
    {
        nombre: "Lirio del Desierto (Lesquerella lasiocarpa)",
        categoria: "Brasicáceas",
        imagen: "https://c8.alamy.com/compes/b1p0ea/un-desierto-lily-hesperocallis-undulata-wildflower-anza-borrego-desert-state-park-california-b1p0ea.jpg",
        codigo: "239053644-1",
        precio: 110,
        descripcion: "d59db6ae-3562-4a05-8adc-7ba24cbc46b3",
        color: "Azul",
        tamano: "Pequeño"
    },
    {
        nombre: "Flor de Sal (Microtea portoricensis)",
        categoria: "Quenopodiáceas",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3QunYZH-x45ygOZH3cSkVepHZJPgHMJlWnQ&s",
        codigo: "251546600-1",
        precio: 4320,
        descripcion: "44054cf1-8ab5-4603-b081-c4562f200e03",
        color: "Fucsia",
        tamano: "Pequeño"
    },
    {
        nombre: "Perejil Marino (Eryngium maritimum)",
        categoria: "Apiáceas",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjtNHX_GELsPU3TpMI1nXdmoBL8m3qy9-c8w&s",
        codigo: "174081567-X",
        precio: 9990,
        descripcion: "399adea5-f281-4b88-8c45-4ff9a2a9c661",
        color: "Turquesa",
        tamano: "Grande"
    },
    {
        nombre: "Trébol Silvestre (Eriogonum mohavense)",
        categoria: "Polygonáceas",
        imagen: "https://mejorconsalud.as.com/wp-content/uploads/2020/09/trebol-rojo-planta.jpg",
        codigo: "519263810-0",
        precio: 8220,
        descripcion: "d8f0c5a4-b3b2-420c-9090-493e57b86611",
        color: "Morado",
        tamano: "Pequeño"
    },
    {
        nombre: "Genciana Púrpura (Cyrtandra villicaly)",
        categoria: "Gesneriáceas",
        imagen: "https://www.florescaliescali.com/wp-content/uploads/2020/11/Orquidea-Flor-Colombiana.jpg",
        codigo: "602230179-3",
        precio: 6760,
        descripcion: "4dc25649-df2f-4728-b5e3-259b73cfe9a2",
        color: "Naranja",
        tamano: "Mediano"
    },
    {
        nombre: "Cebollino Chino (Allium tuberosum)",
        categoria: "Liliáceas",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/3/31/Cyrtandra_cyaneoides_%285490666621%29.jpg",
        codigo: "404530778-8",
        precio: 5230,
        descripcion: "fc7cfc13-722f-4b63-bc4c-9da76decc8a7",
        color: "Carmesí",
        tamano: "Grande"
    },
    {
        nombre: "Juncias Cárex (Carex tiogana)",
        categoria: "Ciperáceas",
        imagen: "https://imagenes.heraldo.es/files/image_990_556/uploads/imagenes/2019/07/05/flores-azules-1.jpeg",
        codigo: "172358226-3",
        precio: 5810,
        descripcion: "7014a298-9706-4138-96f6-39cd18ecfcbf",
        color: "Turquesa",
        tamano: "Grande"
    },
    {
        nombre: "Lágrimas de Amor (Dicentra nevadensis)",
        categoria: "Fumariáceas",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Carex_bigelowii.jpg/240px-Carex_bigelowii.jpg",
        codigo: "910638163-4",
        precio: 1960,
        descripcion: "439edbb2-12c9-4ad4-bfb7-9c659d231a0b",
        color: "Rosa",
        tamano: "Extra Grande"
    },
    {
        nombre: "Ortiga Brillante (Glossopetalon spinescens)",
        categoria: "Crossosomátáceas",
        imagen: "https://s3.amazonaws.com/sagebudphotos/GLSP/Glossopetalon_spinescens_var_aridum_1_600.jpg",
        codigo: "230833161-5",
        precio: 5770,
        descripcion: "5039cb87-e5a1-4520-8346-f3614abe2b31",
        color: "Violeta",
        tamano: "Mediano"
    },
    {
        nombre: "Margarita del Desierto (Oenothera deltoides)",
        categoria: "Onagráceas",
        imagen: "https://c8.alamy.com/compes/hyrryy/dune-onagra-oenothera-deltoides-y-la-arena-del-desierto-verbena-abronia-villosa-old-springs-preserve-espacio-abierto-co-de-san-diego-california-hyrryy.jpg",
        codigo: "731761113-2",
        precio: 2540,
        descripcion: "e4a82e33-020a-4a3c-8312-68a088762d46",
        color: "Amarillo",
        tamano: "Extra Grande"
    },
    {
        nombre: "Lirio del Desierto (Lesquerella lasiocarpa)",
        categoria: "Brasicáceas",
        imagen: "https://c8.alamy.com/compes/b1p0ea/un-desierto-lily-hesperocallis-undulata-wildflower-anza-borrego-desert-state-park-california-b1p0ea.jpg",
        codigo: "239053644-1",
        precio: 110,
        descripcion: "d59db6ae-3562-4a05-8adc-7ba24cbc46b3",
        color: "Azul",
        tamano: "Pequeño"
    },
    {
        nombre: "Flor de Sal (Microtea portoricensis)",
        categoria: "Quenopodiáceas",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZhizN6Rc4DiMYaBaImMMSRsghNEu4ajm-Ug&s",
        codigo: "251546600-1",
        precio: 4320,
        descripcion: "44054cf1-8ab5-4603-b081-c4562f200e03",
        color: "Fucsia",
        tamano: "Pequeño"
    },
    {
        nombre: "Perejil Marino (Eryngium maritimum)",
        categoria: "Apiáceas",
        imagen: "https://img.freepik.com/vector-gratis/diseno-plano-flores-hojas-lineales_23-2149074732.jpg",
        codigo: "174081567-X",
        precio: 9990,
        descripcion: "399adea5-f281-4b88-8c45-4ff9a2a9c661",
        color: "Turquesa",
        tamano: "Grande"
    },
    {
        nombre: "Trébol Silvestre (Eriogonum mohavense)",
        categoria: "Polygonáceas",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMQiJQ8neSUAp5TjMKotOSpixC4tf92MvU0A&s",
        codigo: "519263810-0",
        precio: 8220,
        descripcion: "d8f0c5a4-b3b2-420c-9090-493e57b86611",
        color: "Morado",
        tamano: "Pequeño"
    },
    {
        nombre: "Genciana Púrpura (Cyrtandra ×villicalyx)",
        categoria: "Gesneriáceas",
        imagen: "https://rosestolove.com/mundo-luxury2/wp-content/uploads/2019/12/como-conservar-flores-naturales.jpg",
        codigo: "602230179-3",
        precio: 6760,
        descripcion: "4dc25649-df2f-4728-b5e3-259b73cfe9a2",
        color: "Naranja",
        tamano: "Mediano"
    },
    {
        nombre: "Cebollino Chino (Allium tuberosum)",
        categoria: "Liliáceas",
        imagen: "https://www.bbva.com/wp-content/uploads/2023/02/bbva-sostenibilidad-flores.jpg",
        codigo: "404530778-8",
        precio: 5230,
        descripcion: "fc7cfc13-722f-4b63-bc4c-9da76decc8a7",
        color: "Carmesí",
        tamano: "Grande"
    },
    {
        nombre: "Juncias Cárex (Carex tiogana)",
        categoria: "Ciperáceas",
        imagen: "https://img.freepik.com/foto-gratis/primer-disparo-flor-morada_181624-25863.jpg",
        codigo: "172358226-3",
        precio: 5810,
        descripcion: "7014a298-9706-4138-96f6-39cd18ecfcbf",
        color: "Turquesa",
        tamano: "Grande"
    }
];

// Paginación
const itemsPerPage = 10;
let currentPage = 1;

function renderCards() {
    const cardsContainer = document.getElementById('cards-container');
    cardsContainer.innerHTML = '';
    
    // Calcular el índice inicial y final
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = db.slice(startIndex, endIndex);
    
    currentItems.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${item.imagen}" alt="${item.nombre}">
            <h3>${item.nombre}</h3>
            <p>Categoría: ${item.categoria}</p>
            <p>Código: ${item.codigo}</p>
            <p>Precio: $${item.precio}</p>
            <p>Descripción: ${item.descripcion}</p>
            <p>Color: ${item.color}</p>
            <p>Tamaño: ${item.tamano}</p>
        `;
        cardsContainer.appendChild(card);
    });
}

function renderPagination() {
    const paginationContainer = document.getElementById('pagination');
    paginationContainer.innerHTML = '';
    
    const totalPages = Math.ceil(db.length / itemsPerPage);
    
    for (let i = 1; i <= totalPages; i++) {
        const pageLink = document.createElement('span');
        pageLink.className = 'page-link';
        pageLink.innerText = i;
        pageLink.addEventListener('click', function() {
            currentPage = i;
            renderCards();
            renderPagination();
        });
        if (i === currentPage) {
            pageLink.style.fontWeight = 'bold';
        }
        paginationContainer.appendChild(pageLink);
    }
}

// Cargar datos de localStorage al iniciar
document.addEventListener('DOMContentLoaded', () => {
    let storedData = JSON.parse(localStorage.getItem('registros'));
    if (storedData) {
        db = storedData;
    }
    renderCards();
    renderPagination();
});

document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    // Obtener los valores de los inputs
    const nombre = document.getElementById('nombre').value;
    const categoria = document.getElementById('categoria').value;
    const imagen = document.getElementById('imagen').value;
    const codigo = document.getElementById('codigo').value;
    const precio = document.getElementById('precio').value;
    const descripcion = document.getElementById('descripcion').value;
    const color = document.getElementById('color').value;
    const tamano = document.getElementById('tamano').value;

    // Verificar que ningún campo esté vacío
    if (!nombre || !categoria || !imagen || !codigo || !precio || !descripcion || !color || !tamano) {
        alert('Por favor, complete todos los campos.');
        return;
    }

    const registro = {
        nombre: nombre,
        categoria: categoria,
        imagen: imagen,
        codigo: codigo,
        precio: parseFloat(precio),
        descripcion: descripcion,
        color: color,
        tamano: tamano
    };

    // Agregar el nuevo registro al array `db`
    db.push(registro);

    // Guardar el array actualizado en localStorage
    localStorage.setItem('registros', JSON.stringify(db));

    // Limpiar el formulario después de enviarlo
    document.getElementById('form').reset();

    alert('Registro guardado con éxito');
});


function buscar() {
    const nombre = document.getElementById('search-nombre').value.toLowerCase();
    const categoria = document.getElementById('search-categoria').value.toLowerCase();
    const color = document.getElementById('search-color').value.toLowerCase();
    const tbody = document.getElementById('result-table').getElementsByTagName('tbody')[0];

    tbody.innerHTML = `<tr><td colspan="6">Buscando...</td></tr>`;

    setTimeout(() => {
        const resultados = db.filter(item => 
            (nombre === "" || item.nombre.toLowerCase().includes(nombre)) &&
            (categoria === "" || item.categoria.toLowerCase().includes(categoria)) &&
            (color === "" || item.color.toLowerCase().includes(color))
        );
        
        mostrarResultados(resultados);
    }, 2000);

}

function mostrarResultados(resultados) {
    const tbody = document.getElementById('result-table').getElementsByTagName('tbody')[0];
    tbody.innerHTML = ""; // Limpiar tabla

    resultados.forEach(item => {
        const row = tbody.insertRow();

        const cellNombre = row.insertCell(0);
        cellNombre.textContent = item.nombre;

        const cellCategoria = row.insertCell(1);
        cellCategoria.textContent = item.categoria;

        const cellColor = row.insertCell(2);
        cellColor.textContent = item.color;

        const cellTamano = row.insertCell(3);
        cellTamano.textContent = item.tamano;

        const cellPrecio = row.insertCell(4);
        cellPrecio.textContent = item.precio;

        const cellImagen = row.insertCell(5);
        const img = document.createElement('img');
        img.src = item.imagen;
        img.style.width = "100px";
        cellImagen.appendChild(img);
    });
}