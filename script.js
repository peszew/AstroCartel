// Article data (multilingual content for each post)
const articles = [
  {
    title: { "en": "Snitching", "es": "Snitching", "pl": "Snitching" },
    artist: "Pop Smoke ft. Quavo, Future",
    content: {
      "en": "RIP WOO! Duo Quavo Pop + Future with their usual awesome verse blows minds. Plus the beat, a jazz classic, personally reminds me of a good classic beat from Dr. Dre, which I think Seth The Chef & Buddah Bless, the producers of the track, were definitely inspired by. Probably my new phone ringtone (since the release of 21 Savage - Bank Account).",
      "es": "RIP WOO! El dúo Quavo Pop + Future con su habitual verso increíble vuela mentes. Además, el ritmo, un clásico del jazz, personalmente me recuerda a un buen ritmo clásico de Dr. Dre, en el que creo que Seth The Chef & Buddah Bless, los productores del tema, definitivamente se inspiraron. Probablemente mi nuevo tono de llamada (desde el lanzamiento de 21 Savage - Bank Account).",
      "pl": "RIP WOO! Duet Quavo Pop + Future z jak zwykle zajebistym wersem rozbija czachę. Do tego bit, klasyka jazzu, mi osobiście kojarzy się z dobrym klasycznym bitem od Dr. Dre, którym Seth The Chef & Buddah Bless, czyli producenci numeru, myślę, że na pewno się wzorowali. Chyba nowy dzwonek na telefon (od premiery 21 Savage - Bank Account)."
    },
    date: "2025-04-07",
    image: "https://i.imgur.com/fkDjPpL.png",
    link: "https://www.youtube.com/watch?v=BhbVY3DNYjk&list=RDBhbVY3DNYjk&start_radio=1"
  },
  {
    title: { "en": "Bad Karma", "es": "Bad Karma", "pl": "Bad Karma" },
    artist: "Axel Thesleff",
    content: {
      "en": "Bonus article for April Fools' Day! When I was writing this article about the track, I had no idea about the background behind it. The track itself – a classic. Everyone has heard that characteristic mumbling and the deep bass coming in underneath at some point. It’s been playing on my speakers from time to time since 2017. One of those tracks you forget about, and then it randomly comes back one day. Interestingly, it's the backstory that makes it even more fascinating. The producer Axel didn’t earn anything from it! The sample was taken from some free-to-use beat pack, and the vocal is also a sample from Shamur – Let The Music Play (https://www.youtube.com/watch?v=bOipE-KvuBQ), which actually sparked a bit of controversy. Anyway, I encourage you to listen to both tracks. Cheers!",
      "es": "¡Artículo extra por el Día de los Inocentes! Cuando escribí este artículo sobre el tema, no tenía ni idea del trasfondo que había detrás. El tema en sí – un clásico. Todo el mundo ha escuchado alguna vez ese característico murmullo y el bajo profundo entrando por debajo. Suena en mis altavoces de vez en cuando desde 2017. Es una de esas canciones que se te olvidan y un día vuelven por casualidad. Lo curioso es precisamente lo que hay detrás de esta canción. ¡El productor Axel no ganó nada con ella! El sample fue tomado de un paquete de beats gratuitos, y la voz también es un sample de Shamur – Let The Music Play (https://www.youtube.com/watch?v=bOipE-KvuBQ), lo cual generó algo de polémica. De todas formas, te invito a escuchar ambos temas. ¡Saludos!",
      "pl": "Bonusowy artykuł w Prima Aprilis! Pisząc artykuł o tej nucie, w ogóle nie znałem backgroundu, jaki za nią stoi. Sama nuta – klasyk. Każdy kiedyś usłyszał ten charakterystyczny bełkot i wjeżdżający pod niego głęboki bas. Na głośnikach lata od czasu do czasu od 2017. Jedna z tych nutek, o której się zapomina i czasem kiedyś przypadkiem wróci. Co ciekawe, właśnie zaplecze tej nuty. Sam producent Axel nie zarobił na niej nic! Sampel jest wzięty z jakiejś paczki beatów free to use, natomiast głos to również sampel z Shamur – Let The Music Play (https://www.youtube.com/watch?v=bOipE-KvuBQ), o który była lekka afera. W każdym razie zapraszam do odsłuchu jednego i drugiego utworu. Pozdro!"
    },
    date: "2025-04-01",
    image: "https://i.imgur.com/22tseLe.png",
    link: "https://soundcloud.com/axelthesleff/bad-karma"
  },
  {
    title: { "en": "The Plan", "es": "The Plan", "pl": "The Plan" },
    artist: "Wiz Khalifa (feat. Juicy J)",
    content: {
      "en": "The very first lines already define the whole track: 'I looked in the mirror today and seen the realest nigga I ever met in my life.' A powerful reflection. Wiz and Juicy J — a rather unexpected collab — but the Memphis mad-style representative fit perfectly into Wiz’s chill vibe. You’re left with a clear head after listening. This track, the fifteenth from 2012’s O.N.I.F.C., sees Wiz Khalifa and Juicy J discuss the unexpected but fulfilling natures of their respective rises to fame. Wiz raps about all that he has achieved despite doubters telling him that he couldn’t, and their subsequent jealous hate. Juicy J talks about his crazy lifestyle but how it still goes hand-in-hand with thug realness.",
      "es": "Ya los primeros versos definen todo el tema: 'I looked in the mirror today and seen the realest nigga I ever met in my life.' Una reflexión poderosa. Wiz y Juicy J — una colaboración bastante inesperada — pero el representante del estilo loco de Memphis encajó perfectamente con el rollo relajado de Wiz. Terminas con la mente despejada después de escucharlo. Esta canción, la número quince del álbum O.N.I.F.C. de 2012, muestra a Wiz Khalifa y Juicy J hablando sobre lo inesperado pero gratificante que ha sido su camino hacia la fama. Wiz rapea sobre todo lo que ha logrado a pesar de los que dudaban de él y cómo ahora sienten envidia. Juicy J habla de su estilo de vida loco, pero cómo todavía mantiene su autenticidad callejera.",
      "pl": "Już pierwsze wersy definiują cały utwór: 'I looked in the mirror today and seen the realest nigga I ever met in my life.' Mocna rozkmina. Wiz i Juicy J – kolabo dość niespodziewane, jednak do chillu Wiza reprezentant chorego stylu z Memphis wpasował się idealnie. Luźna głowa po odsłuchu. Ten utwór, piętnasty z albumu O.N.I.F.C. z 2012 roku, ukazuje, jak Wiz Khalifa i Juicy J opowiadają o nieoczekiwanym, ale satysfakcjonującym przebiegu ich drogi do sławy. Wiz rapuje o wszystkim, co osiągnął, mimo że inni wątpili w jego możliwości, a później zaczęli mu zazdrościć. Juicy J opowiada o swoim szalonym stylu życia, który mimo wszystko wciąż idzie w parze z uliczną autentycznością."
    },
    date: "2025-03-30",
    image: "https://i.imgur.com/VKP5fjG.png",
    link: "https://soundcloud.com/noahbossmcman"
  },
  {
    title: { "en": "Y Que Fue?", "es": "Y Que Fue?", "pl": "Y Que Fue?" },
    artist: "Don Miguelo",
    content: {
      "en": "LAMINE!!!!!!!!!!",
      "es": "LY19!!!!",
      "pl": "LY19 LEWAA"
    },
    date: "2025-03-24",
    image: "https://i.imgur.com/kAdeGs5.png",
    link: "https://soundcloud.com/veras-anthony/don-miguelo-y-que-fue"
  },
  {
    title: { "en": "Back To The Future", "es": "Back To The Future", "pl": "Back To The Future" },
    artist: "A$AP Rocky",
    content: {
      "en": "A song that was made during the “Mouth Fulla Gold” sessions titled “Back To The Future” that was featured as track eight on the May 16th, 2011 copy of that mixtape. The song was likely made in the same sessions as the songs “Purple Swag” and “Peso” as they all share the same producer, A$AP Ty Beats. After that project was scrapped in late June to early July 2011 the song was then released online a few months later on September 19th, 2011 as a tribute to the famous Nike MAG shoes that were released on September 8th, 2011. These said shoes were made in reference to the 1989 film “Back to the Future Part II” as the shoes are a replica of the self-tying shoes in that movie. Seemingly, the track would have never seen a release if the Nike MAG shoes were not put out, but it is not confirmed if the song was intended for “LIVE.LOVE.A$AP” at the time of release. The song’s title and hook reference the “Back to the Future” film franchise as a whole saying “Back to the future, that Marty McFly,” who is one of the main characters in the film series. Much later on after the song was initially released online it was featured as track five from a compilation mixtape by A$AP Ty Beats titled “Ty Beats Keep Smoking” which was released on February 22nd, 2015. This version of the track features slight differences and tags from DJ Nick Marino, the host of the mixtape, that did not appear on the original version of the track. The file that was intended for the “Mouth Fulla Gold” mixtape was leaked on July 18th, 2024 by KILLRITE and Zanthin after the successful $250 groupbuy for that mixtape, but features no differences. (source: genius.com)",
      "es": "Una canción que se hizo durante las sesiones de «Mouth Fulla Gold» titulada «Back To The Future» que apareció como pista ocho en la copia del 16 de mayo de 2011 de esa mixtape. La canción fue hecha probablemente en las mismas sesiones que las canciones «Purple Swag» y «Peso» ya que todas comparten el mismo productor, A$AP Ty Beats. Después de que ese proyecto fuera desechado a finales de junio o principios de julio de 2011, la canción fue entonces lanzada en línea unos meses más tarde, el 19 de septiembre de 2011, como un homenaje a las famosas zapatillas Nike MAG que fueron lanzadas el 8 de septiembre de 2011. Dichas zapatillas se hicieron en referencia a la película de 1989 «Regreso al Futuro Parte II», ya que las zapatillas son una réplica de las zapatillas que se atan solas en esa película. Al parecer, la canción nunca habría visto un lanzamiento si las zapatillas Nike MAG no se hubieran puesto a la venta, pero no está confirmado si la canción estaba destinada a «LIVE.LOVE.A$AP» en el momento del lanzamiento. El título de la canción y el gancho hacen referencia a la franquicia cinematográfica «Regreso al futuro» en su conjunto diciendo «Back to the future, that Marty McFly», que es uno de los personajes principales de la serie de películas. Mucho más tarde, después de que la canción se publicara inicialmente en línea, apareció como pista cinco de una mixtape recopilatoria de A$AP Ty Beats titulada «Ty Beats Keep Smoking», que se publicó el 22 de febrero de 2015. Esta versión de la pista presenta ligeras diferencias y etiquetas de DJ Nick Marino, el anfitrión de la mixtape, que no aparecían en la versión original de la pista. El archivo que estaba destinado a la mixtape «Mouth Fulla Gold» fue filtrado el 18 de julio de 2024 por KILLRITE y Zanthin tras el éxito de la groupbuy de 250 dólares para esa mixtape, pero no presenta diferencias. (fuente: genius.com)",
      "pl": "Zajebista nuta, nic dodać nic ująć."
    },
    date: "2025-03-16",
    image: "https://i.imgur.com/pu2774C.png",
    link: "https://soundcloud.com/basedbook-level-9/asap-rocky-back-to-the-future"
  },
  {
    title: { "en": "Need To Feel Loved", "es": "Need To Feel Loved", "pl": "Need To Feel Loved" },
    artist: "Adam K & Soha (Vocal Mix)",
    content: {
      "en": "Adam K & Soha's 'Need To Feel Loved' (Vocal Mix) masterfully blends emotional depth with progressive house beats, creating a track that resonates with the heart and the dance floor alike. OK, so this intro description was AI generated shit. This song is extremely good. It is simple, but not simple – after listening to it, you will know what I mean. The song samples 'Ghosts', part of the soundtrack to the 2002 film *Road to Perdition*, you can check it out. Imagine listening to this crazzzzy ass song while sitting in some pub with ocean view – shisha type shit bar with drinks, 2/3 a.m. in the morning… naaah that's something else.",
      "es": "'Need To Feel Loved' (Vocal Mix) de Adam K & Soha combina magistralmente la profundidad emocional con ritmos house progresivos, creando un tema que resuena tanto en el corazón como en la pista de baile. Vale, la descripción de la introducción era una mierda generada por AI. Esta canción es extremadamente buena. Es sencilla, pero no simple – después de escucharla, sabrás lo que quiero decir. La canción samplea 'Ghosts', parte de la banda sonora de la película de 2002 *Road to Perdition*, puedes echarle un vistazo. Imagínate escuchar esta canción mientras estás sentado en un pub con vistas al mar. Un bar de mierda tipo shisha con bebidas, 2/3 de la mañana… naaah eso es otra cosa.",
      "pl": "'Need To Feel Loved' (Vocal Mix) Adama K & Soha łączy mistrzowsko głębię emocjonalną z progresywnymi rytmami house, tworząc utwór, który rezonuje zarówno z sercem, jak i parkietem tanecznym. OK, koniec tego pieprzenia AI-owego. Zajebista nuta! Sampel 'Ghosts' użyty w filmie z T. Hanksem *Road to Perdition*. Wyobraź sobie słuchanie tej nutki siedząc w jakimś pubie z widokiem na ocean – shisha bar, drin~y o 2/3 w nocy… this shit hits different."
    },
    date: "2025-03-07",
    image: "https://i.imgur.com/2Nw10zY.jpeg",
    link: "https://soundcloud.com/search?q=need%20to%20feel%20loved"
  }
];

let currentLanguage = 'en';  // track current language selection

// Switch site language: show elements for `lang` and hide others
function changeLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem('astrocartel-language', lang);
  document.querySelectorAll('[data-lang]').forEach(el => {
    if (el.getAttribute('data-lang') === lang) {
      el.classList.remove('hidden');
    } else {
      el.classList.add('hidden');
    }
  });
  // Re-render articles in the newly selected language (if on home, this updates the list)
  renderArticles(lang);
}

// Render the list of article previews for the given language
function renderArticles(language) {
  const container = document.getElementById('articles-container');
  container.innerHTML = '';  // clear any existing content

  articles.forEach((article, index) => {
    // Create a container div for each article preview
    const articleDiv = document.createElement('div');
    articleDiv.classList.add('post');

    // Append cover image if available
    if (article.image) {
      const img = document.createElement('img');
      img.src = article.image;
      img.alt = "Cover image";
      articleDiv.appendChild(img);
    }

    // Title and artist
    const title = document.createElement('h3');
    title.textContent = `${article.title[language]} - ${article.artist}`;
    articleDiv.appendChild(title);

    // Upload date
    const dateP = document.createElement('p');
    dateP.innerHTML = `<strong>Upload Date:</strong> ${article.date}`;
    articleDiv.appendChild(dateP);

    // Article excerpt (first 3 sentences)
    const previewText = article.content[language].split('. ').slice(0, 3).join('. ') + '...';
    const previewP = document.createElement('p');
    previewP.textContent = previewText;
    articleDiv.appendChild(previewP);

    // "Read More" button
    const readMoreBtn = document.createElement('button');
    readMoreBtn.textContent = 'Read More';
    readMoreBtn.addEventListener('click', () => showFullArticle(index, language));
    articleDiv.appendChild(readMoreBtn);

    container.appendChild(articleDiv);
  });
}

// Show full article content for a given index and language
function showFullArticle(index, language) {
  const article = articles[index];
  const container = document.getElementById('articles-container');
  container.innerHTML = '';  // clear list

  // Full article container
  const fullDiv = document.createElement('div');
  fullDiv.classList.add('post', 'full-article');

  // Cover image (if any)
  if (article.image) {
    const img = document.createElement('img');
    img.src = article.image;
    img.alt = "Cover image";
    fullDiv.appendChild(img);
  }

  // Title and artist
  const title = document.createElement('h3');
  title.textContent = `${article.title[language]} - ${article.artist}`;
  fullDiv.appendChild(title);

  // Upload date
  const dateP = document.createElement('p');
  dateP.innerHTML = `<strong>Upload Date:</strong> ${article.date}`;
  fullDiv.appendChild(dateP);

  // Full content
  const contentP = document.createElement('p');
  contentP.textContent = article.content[language];
  fullDiv.appendChild(contentP);

  // External link (e.g., SoundCloud or YouTube)
  const linkA = document.createElement('a');
  linkA.href = article.link;
  linkA.target = "_blank";
  linkA.textContent = "Listen on SoundCloud";
  fullDiv.appendChild(linkA);

  // Line break then Back button
  fullDiv.appendChild(document.createElement('br'));
  const backBtn = document.createElement('button');
  backBtn.textContent = "Back to Articles";
  backBtn.addEventListener('click', () => renderArticles(language));
  fullDiv.appendChild(backBtn);

  container.appendChild(fullDiv);
  container.scrollIntoView({ behavior: 'smooth' });  // scroll to article top
}

// Show a specific section (home/about/contact) and hide the others
function showSection(sectionId) {
  document.querySelectorAll('main > section').forEach(section => {
    section.classList.add('hidden');
  });
  if (sectionId === 'home') {
    // Refresh article list whenever returning to home
    renderArticles(currentLanguage);
  }
  document.getElementById(sectionId).classList.remove('hidden');
}

// Setup navigation link behavior (no page reload on click)
document.querySelectorAll('nav a[data-section]').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    showSection(link.getAttribute('data-section'));
  });
});

// Setup language switcher behavior
document.querySelectorAll('.language-selector img').forEach(img => {
  img.addEventListener('click', () => {
    changeLanguage(img.getAttribute('data-lang'));
  });
});

// Initialize page with saved or default language, and show home section
const savedLanguage = localStorage.getItem('astrocartel-language') || 'en';
changeLanguage(savedLanguage);
showSection('home');
