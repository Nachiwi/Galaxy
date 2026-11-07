
const recuerdos = [
  {
    titulo: "Mi regalo de cumpleaños",
    texto: "Despues de pasar uno de los dias más marcados de mi vida, fue el primer cumpleaños que celebre con mis amigos y especialmente contigo fue un mometo de muchas emociones que no habia experimentado antes, ese dia sin saber recibi uno de mis compañeros de sueño, a quien abrazo con la idea de que tambien sientes ese abrazo, quien me acompaña en las noches que me siento mal, que sufro o aquellas noches en las que paso frio, ese gesto tuyo que a echo mis noches y dias diferentes es un peluchin que guardare y cuidadare con mi vida.",
    x: 20,
    y: 30,
    imagen: "assets/cumpleaños.jpg",
    audio: ""
  },
  {
    titulo: "Uno de tantos momentos juntos",
    texto: "Aunque no tengamos muchas fotos juntos, las pocas que tenemos son muy especiales para mi, cada una de ellas me recuerda momentos muy felices a tu lado, como esta que es una de mis favoritas, donde puedes ver la confianza de ser yo que siento cuando estoy contigo, esa sonrisa tuya que hace que salga la mia y ese brillo en tus ojos que sale cuando los enchinas uffff enamoradisimo quedo.",
    x: 60,
    y: 50,
    imagen: "assets/momento_iconic.jpg",
    audio: ""
  },
  {
    titulo: "Mi foto favorita",
    texto: "En una de esas ocasiones muy especificas en las que nos tomamos fotos surge esta, una de mis fotos favoritas, donde se ve lo bonito que nos vemos, la felicidad que se puede notar por estar a tu lado, una muestra muy real de la tranquilidad y comodidad que siento al estar a tu lado, simplemente hermoso el compartir mi vida contigo.",
    x: 30,
    y: 40,
    imagen: "assets/foto_fav.jpg",
    audio: ""
  },
  {
    titulo: "Woof Woof",
    texto: "Jejeje que te puedo decir de esto mor, tu con una cadena y yo amarrado pero bien feliz, me gusta mucho el compartir noches de juego contigo, el sentimiento de conectarme a discord, buscar un juego para los  dos y despues olvidarme del juego pq estoy más disfrutando nuestra platica, el momento que nos tomamos para compartir algo juntos es algo muy lindo la verdad, muy disfurtable, muy entraable y con muchas risas de pormedio",
    x: 70,
    y: 20,
    imagen: "assets/correa.jpeg",
    audio: ""
  },
  {
    titulo: "La MARCA",
    texto: "Aaaaay amor como olvidar aquel dia que se te altero la hormona y me diste tremenda mordida que hasta recuerdo dejo, como okvidar ese dia, ese dia andabas muy muy MUUUUY cariñosa lo cual me sorpendio en un momento y despues de eso yo solo me deje querer, pero me quisiste de más que dijiste, lo voy a marcar para que vean que ya es super mio y obiamiente siendo super tuyo me deje, aunque me hayas dicho que ya no abra una 2da marca yo confio en que si exita una 2da marca pq si se sintiio muy aca. muy aventurero muy experimental muy aventura de chavito bien",
    x: 50,
    y: 10,
    imagen: "assets/marca.jpeg",
    audio: ""
  },
  {
    titulo: "Corazón",
    texto: "Hay muchos momentos y muchos recuerdos los cuales no tienen fotos pero estan muy marcados en mi mente y corazón, tal vez este detalle no sea el mejor, no este lleno de estrellas como imginaba o como me gustaria que hubiese sido, pero amor mio, tu sabes que te lo hago con mucho cariño y dedicación, al ser una pagina que subi a plataforma me encargare de irla actualizando cada mes con los muchos o pocos momentos que compartimos y asi en un mucho o poco tiempo por fin tener una galaxia que cuente nuestra historia. ",
    x: 70,
    y: 60,
    imagen: "assets/corazon.jpeg",
    audio: ""
  },
  {
    titulo: "El inicio",
    texto: "Esta foto taaaaan iconica, foto que hasta el dia de hoy me hace que me quede embobado a la pantalla pensando en como es que llegamos tan lejos, sinceramente por la idea erronea que tenia de ti jamas me hubieras echo caso pero oh sopresa!!! no era asi y a dia de hoy me sigo preguntando como le hice o realmente que me viste pero fuaaaaaaa y es que tu no lo sabes pero tengo un theme en mi 3ds echo por mi donde esta un collague de fotos tuyas como fondo, osea mor, ya pasaste de mi fn a mi pc y de mi pc a mi consola, eso ya es el maximo merito de presumirte.",
    x: 40,
    y: 40,
    imagen: "assets/primera.jpeg",
    audio: ""
  },
  {
    titulo: "Un mundo en cuadrado",
    texto: "Aaaaaaaaaay como olvidar aquellos inicios de nuestra relación donde tan penosos los dos pero que poco a poco nos fuimos acercando más, unas ocaciones a distancia como lo que fue jugando y ahi me di cuenta que jugar contigo es muy cool por que nos la pasamos riendo, contigo dejo de ser una maquina que solo se conexta para destrozar, hasta la fecha haces que saque partes que no conocia de mi, muchas cosas que me han ayudado a mejorar como persona y otras que me estan ayudando a ser una mejor pareja para ti",
    x: 80,
    y: 20,
    imagen: "assets/maincra.jpeg",
    audio: ""
  },
  {
    titulo: "Mi favorita parte 2",
    texto: "Esta foto tambien es de mis favoritas, es la que menos presumo por que realmente esta foto es muuuuy nose, tiene un algo que hace que me guste demasiado demasiado y me encanta esta foto, todas las fotos que tengo tuyas estan en altar ya que son una joyita para mi, no se con que palabras expresarlo, pero bastara con que veas la forma en la que te miro cuando te tengo cerca, la forma en la que me pierdo en tu miradaestando a u lado, los nervios de verte a la cara siendo que ya han pasado 8 meses a tu lado, probablemente yo no te lo diga de forma muy seguida con palabras pero quiero que mis acciones te lo digan, que todo mi cuerpo te diga Me gustas! Te quiero! Te amo! Quiero que seas tu! Si a todo contigo menos al divorcio.",
    x: 90,
    y: 40,
    imagen: "assets/envidioso.jpeg",
    audio: ""
  },
  {
    titulo: "Dos loquitos",
    texto: "Me gusta mucho esos momentos donde nos sale la parte mas infantil, nuestra esencia misma, nuestro verdadero yo y nos lleva a disfrutar aun más nuestra compañia, momentos donde me siento seguro de ser quien soy contigo, sin filtros, sin mentiras, en ti encontre todo lo que no imagine buscar y es que contigo cada momento es unico, cada mentada de madre que me das, cada juzgada con la mirada que me lanzas, cada cosa por muy chica o grande la disfruto con unas ganas por que son cosas que estoy disfurtando contigo y eso no lo cambio por nada ni nadie.",
    x: 10,
    y: 20,
    imagen: "assets/loquitos.jpeg",
    audio: ""
  },
  {
    titulo: "Amarte",
    texto: "Si me dieran la oportunidad de pedir un deseo, pediria mil vidas y en todas ellas me encargaría de buscarte, encontrarte y volver a enamorarnos. Po ruq esto que siento por ti es tan profundo e intenso que no cabe en esta vida, ni en un millon de ellas",
    x: 30,
    y: 16,
    imagen: "assets/foto1.jpg",
    audio: ""
  },
  {
    titulo: "SaO",
    texto: "Desde ahora mi vida te pertenece, soy tuyo, puedes hacer conmigo lo que quieras, solo dejame permanecer a tu lado.",
    x: 20,
    y: 70,
    imagen: "",
    audio: ""
  },
  {
    titulo: "Amor",
    texto: "Amor es una palabra pero tu eres el sentimiento de amar, te amo con mi alma, no te amo poco te amo con cada pedacito de mi corazón, te amare hasta que muera, hasta que no esté acá, no sé vivir sin ti, para mí eres todo,cuando te conoci conoci el significado de amor, solía tenía miedo a morir de amor pero cuando te conocí descubrí que había una manera de amarte inexplicable, hoy me gusta la vida mucho más que antes, te amo mi vida entera.",
    x: 20,
    y: 20,
    imagen: "",
    audio: ""
  },
  {
    titulo: "Mi Noyolot",
    texto: "Nimitstlasijtla ka no tonal pampa se tonali axkema miki",
    x: 35,
    y: 20,
    imagen: "",
    audio: ""
  },
  {
    titulo: "La razón de por que te amo? No sé cuál es...",
    texto: "Podria decir ques por tus ojazos, ojos tan lindos y brillantes que alumbran hasta mi mayor sombra, tal vez sea por tu risa, risa capaz de curar heridas, heridas que no sabia que tenia hasta que las sanaste, podria decir que tu voz, una voz tan linda, voz que se vuelve refugio en dias de tormento, tu forma de caminar?, por esos paso que das, pasos donde escribes versos en el suelo, pasos que dejan huella por la grandeza de tu alma, seran tus manos, manos que sin tocarme me sostienen, me acompañan y no me sueltan, podria ser que sea tu mirada, mirada que me entiende antes de entenderme a mi mismo, mirada que mira en lo más adentro de mi, pero la verdad es que es todo es una razón de amarte, ese algo invisible que hace que el mundo entere deje de importar cuando estas tu, cuando se trata de ti.",
    x: 55,
    y: 70,
    imagen: "",
    audio: ""
  },
  {
    titulo: "Te dedico",
    texto: "Te dedico todo mi tiempo, tiempo que estando contigo se vuelve el mejor tiempo, el tiempo que no estoy contigo pero que te mantengo en mi mente esperando por el tiempo que compartire contigo, te dedico todo mi amor, cada acto, cada palabra, cada pieza de mi corazpom, toma todo el amor de mi que es solo tuyo. te dedico todas mis noches de desvelo, noches por mas largas que sean siendo acompañado por ti, noches donde siempre termino pensanso en ti, te dedico mis pensamientos antes de ir a dormir y los pensamientos a la hora de despertar, pues desde el incicio de mi dia hasta el final del mismo estas presente, te dedico mis miedos , ya que contigo no le temo a nada, contigo logro calmar cada miedo mio, te dedico cada latido mio, cada aceleración estando a tu lado, cada latido diciendote te amo,te dedico mi paciencia, mi tiempo y mis intentos, cada suspiro, suspiros que salen del corazón cada que pienso en esa sonrisa tuyo, en esa calidez que sineto a tu lado, por como haces sentire a mi corazón, te dedico mi vida y lo mas valiovo de mi, mi alma, todo es para ti y por ti.",
    x: 70,
    y: 70,
    imagen: "",
    audio: ""
  },
  {
    titulo: "Aún quedan estrellas",
    texto: "Hubo un momento en el que nuestra galaxia dejó de recibir nuevas estrellas, pero nunca dejó de brillar. Y hoy, una pequeña señal me recordó que quizá todavía existen recuerdos esperando convertirse en parte de nuestro universo. Así que aquí estamos, descubriendo que aún quedan estrellas por conocer.",
    x: 40,
    y: 15,
    imagen: "",
    audio: "assets/universe.mp3",
    nueva: true,
    especial: true
  },
  {
    titulo: "Entre garabatos",
    texto: "Este dibujito tan bonito que hiciste, que aunque nunca tuve la oportunidad de verlo en físico, eso no le quita lo especial que es para mí.Y es que, entre tantos trazos, líneas y pequeños garabatos, hay un detallito que me gusta muchísimo: ahí estamos nosotros dos.No sé cómo explicarlo, pero me da mucha ternura pensar que incluso en algo tan sencillo como un dibujo encontraste un lugarcito para ponerme junto a ti. Tal vez para alguien más no sea más que un pequeño garabato en una hoja, pero para mí es uno de esos detalles que guardo con muchísimo cariño.Porque no siempre se necesitan grandes regalos, palabras bonitas o momentos extraordinarios para hacer sentir especial a alguien. A veces basta con algo tan sencillo como tomar un lapicero, comenzar a dibujar y, sin darte cuenta, regalarle a alguien un recuerdo que va a conservar con una sonrisa.Y es que, de todos los lugares en los que podría aparecer, jamás imaginé que uno de los más bonitos sería entre tus garabatos.Un dibujito donde, entre tantas cosas, encontraste la manera de que estuviéramos juntitos.",
    x: 55,
    y: 25,
    imagen: "assets/dibujomini.jpeg",
    audio: "",
    nueva: true,
  },
   {
    titulo: "¿Y si las estrellas nos vuelven a encontrar?",
    texto: "Probablemente esta estrella se encuentre a años luz de convertirse en un recuerdo. Quizá sea un momento que todavía está esperando su lugar en nuestro universo, o quizá sea uno de esos sueños que permanecen brillando a lo lejos, incluso cuando no sabemos si algún día podremos alcanzarlos.Puede que sea en esta vida cuando nuestros caminos vuelvan a encontrarse de aquella manera tan bonita en la que alguna vez coincidieron. Puede que sea en otra, bajo un cielo completamente distinto, con otros nombres, otras historias y otras circunstancias. O puede que esta haya sido la única vida en la que tuvimos la fortuna de amarnos como lo hicimos.Pero, si pudiera elegir, ten por seguro que estaría dispuesto a esperar el tiempo que hiciera falta, incluso las vidas que tuvieran que pasar, con tal de tener una nueva oportunidad de coincidir contigo.Y si el destino me concediera la fortuna de conocerte en otra vida, me gustaría volver a descubrirte desde el principio. Conocer tu sonrisa sin saber todavía cuánto terminaría gustándome, escuchar tu risa sin imaginar lo mucho que llegaría a significar para mí y perderme nuevamente en esos ojos que, incluso hoy, me siguen pareciendo únicos.Y, sobre todo, espero tener la fortuna de enamorarme de ti todavía más de lo que lo hice en esta vida. Porque si algo tengo claro es que, aun conociendo el desenlace de nuestra historia, volvería a elegir conocerte.Pero... ¿y si no hiciera falta esperar otra vida?¿Y si este mismo universo, que alguna vez tuvo la fortuna de vernos juntos, decidiera regalarnos una nueva oportunidad de encontrarnos?Si algún día tu corazón y el mío volvieran a coincidir de esa manera, me gustaría hacerlo diferente. No porque me arrepienta de haberte amado como lo hice, sino porque ahora conozco cosas que antes no sabía, he reconocido errores que no quisiera repetir y he aprendido que amar también significa comprender, escuchar, cuidar y crecer.Y si llegara a tener esa grandiosa suerte, quisiera cuidar con espada y escudo ese corazón tan lindo, esa mirada tan única y esa alma tuya que, sin siquiera proponérselo, logró traerle tanta tranquilidad a la mía.No podría prometerte una historia sin dificultades ni errores, pero sí el deseo sincero de construir algo más bonito, más consciente y más fuerte, donde ambos podamos sentirnos queridos, comprendidos y en paz.Tal vez esta estrella tarde años en tener una historia que contar. Tal vez nunca llegue a convertirse en el recuerdo que imagino. Y está bien, porque hay estrellas que no necesitan una respuesta inmediata para seguir siendo especiales.Pero si algún día la vida nos permite volver a encontrarnos, espero que podamos mirarnos y descubrir que, después de todo, todavía había un universo entero por conocer juntos.Y si no es en esta vida, quizá en alguna otra, entre millones de estrellas, tenga la fortuna de encontrarte una vez más.",
    x: 67,
    y: 18,
    imagen: "",
    audio: "",
    nueva: true,
  }
];

// Referencias
const mapa = document.getElementById("mapa");
const modal = document.getElementById("modal");
const titulo = document.getElementById("tituloRecuerdo");
const texto = document.getElementById("textoRecuerdo");
const imagen = document.getElementById("imagenRecuerdo");
const audio = document.getElementById("audioRecuerdo");
const cerrar = document.getElementById("cerrar");

// Crear estrellas
recuerdos.forEach(recuerdo => {
  const estrella = document.createElement("div");
  estrella.classList.add("estrella");

  if (recuerdo.nueva) {
    estrella.classList.add("estrella-nueva");
  }

  if (recuerdo.especial) {
    estrella.classList.add("estrella-especial");
  }

  estrella.style.left = recuerdo.x + "%";
  estrella.style.top = recuerdo.y + "%";

  estrella.addEventListener("click", () => {
    titulo.textContent = recuerdo.titulo;
    texto.textContent = recuerdo.texto;

    if (recuerdo.imagen) {
      imagen.src = recuerdo.imagen;
      imagen.style.display = "block";
    } else {
      imagen.style.display = "none";
    }

    if (recuerdo.audio) {
      audio.src = recuerdo.audio;
      audio.style.display = "block";
    } else {
      audio.style.display = "none";
    }

    modal.classList.remove("hidden");
  });

  mapa.appendChild(estrella);
});

// Cerrar modal
cerrar.addEventListener("click", () => {
  modal.classList.add("hidden");
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.add("hidden");
  }
});
