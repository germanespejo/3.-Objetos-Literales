let sistemaSolar = {
    mercurio: {
    nombre: 'mercurio',
    color: 'gris',
    temperatura: 350,
    imagen: 'https://www.astromia.com/fotosolar/fotos/planetamercurio.jpg'
    },
    venus: {
    nombre: 'venus',
    color: 'naranja',
    temperatura: 460,
    imagen :
    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Venus-real_color.jpg/220px-Venus-real_color.jpg'
    },
    tierra: {
    nombre: 'tierra',
    color: 'azul',
    temperatura: 14,
    imagen :
    'https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/article/5a0ab2a75bafe87f4d3f9a63/acaba-tiempo_0.jpg'
    },
    marte: {
    nombre: 'marte',
    color: 'rojo',
    temperatura: -46,
    imagen :
    'https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/article/55365b6b34099b0279c8fb2e/slide-marte.jpg'
    },
    júpiter: {
    nombre: 'júpiter',
    color: 'marrón',
    temperatura: -121,
    imagen :
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Jupiter_by_Cassini-Huygens.jpg/280px-Jupiter_by_Cassini-Huygens.jpg'
    },
    saturno: {
    nombre: 'saturno',
    color: 'amarillo',
    temperatura: -130,
    
    imagen :
    'https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/article/558d2b15010e26221b57df75/saturno.jpg'
    },
    urano: {
    nombre: 'urano',
    color: 'lila',
    temperatura: -205,
    imagen : 'http://www.manzanares.es/v2/sites/paseo/img/urano/urano1.jpg'
    },
    neptuno: {
    nombre: 'neptuno',
    color: 'azul',
    temperatura: -220,
    imagen :
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Neptune_Full.jpg/280px-Neptune_Full.jpg'
    },
    plutón: {
    nombre: 'plutón',
    color: 'caqui',
    temperatura: -229,
    imagen :
    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Pluto_in_True_Color_-_High-Res.jpg/800px-Pluto_in_True_Color_-_High-Res.jpg'
    }
    };

    let nombrePlaneta1a = prompt("Escribe el nombre de un planeta del sistema solar:");
    let nombre1 = nombrePlaneta1a.toLowerCase();
    let nombrePlaneta2a = prompt("Escribe el nombre de otro planeta del sistema solar:");
    while (nombrePlaneta2a == nombre1){
        alert("No escribas planetas repetidos.");
        nombrePlaneta2a = prompt("Escribe el nombre de otro planeta del sistema solar:");
    }
    let nombre2 = nombrePlaneta2a.toLowerCase();
    let nombrePlaneta3a = prompt("Escribe el nombre de otro planeta más del sistema solar:"); 
    while (nombrePlaneta3a == nombre1 || nombrePlaneta3a == nombre2){
        alert("No escribas planetas repetidos.");
        nombrePlaneta3a = prompt("Escribe el nombre de otro planeta diferente del sistema solar:"); 
    }
    let nombre3 = nombrePlaneta3a.toLowerCase();

    document.querySelector(".img1").src = sistemaSolar[nombre1].imagen;
    document.querySelector(".img2").src = sistemaSolar[nombre2].imagen;
    document.querySelector(".img3").src = sistemaSolar[nombre3].imagen;
    document.querySelector(".h1a").innerHTML = sistemaSolar[nombre1].nombre.toUpperCase();
    document.querySelector(".h1b").innerHTML = sistemaSolar[nombre2].nombre.toUpperCase();
    document.querySelector(".h1c").innerHTML = sistemaSolar[nombre3].nombre.toUpperCase();
    document.querySelector(".p1a").innerHTML = sistemaSolar[nombre1].color;
    document.querySelector(".p1b").innerHTML = sistemaSolar[nombre2].color;
    document.querySelector(".p1c").innerHTML = sistemaSolar[nombre3].color;
    document.querySelector(".p2a").innerHTML = sistemaSolar[nombre1].temperatura;
    document.querySelector(".p2b").innerHTML = sistemaSolar[nombre2].temperatura;
    document.querySelector(".p2c").innerHTML = sistemaSolar[nombre3].temperatura;