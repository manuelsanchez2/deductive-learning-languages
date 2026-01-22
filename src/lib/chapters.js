export const languageCatalog = {
  catalan: {
    id: 'catalan',
    label: 'Catalán',
    languageCode: 'ca-ES',
    heroTitle: 'Catalán desde el español, por descubrimiento',
    heroDescription:
      'Observa ejemplos reales, formula hipótesis y confirma con explicaciones claras. Marca tu progreso y escucha cada frase con audio integrado.',
    chapters: [
      {
        id: 'cap-1',
        block: 'Bloque I — Fundamentos',
        title: 'Identidad, estado y localización',
        input: [
          'Sóc cansat.',
          'Estic cansat.',
          'Sóc professor.',
          'Estic a casa.',
          'Avui estic tranquil.'
        ],
        translations: [
          'Estoy cansado.',
          'Estoy cansado.',
          'Soy profesor.',
          'Estoy en casa.',
          'Hoy estoy tranquilo.'
        ],
        challenges: [
          '¿En qué contextos usarías "sóc" frente a "estic" al hablar de ti?',
          '¿Qué diferencia percibes entre un estado momentáneo y un rasgo estable?',
          '¿Qué aporta la localización en "estic a casa"?'
        ],
        explanation:
          'ser (sóc) expresa identidad o rasgo percibido como estable.\n\n' +
          'estar (estic) expresa estado, resultado o localización. El catalán extiende el uso de estar más que el español.\n\n' +
          'Presente: sóc / estic.',
        summary:
          'Sóc professor i visc a prop del centre. Avui estic a casa perquè estic cansat, però estic tranquil. Normalment sóc actiu, però avui prefereixo descansar.',
        vocab: [
          { term: 'cansat', translation: 'cansado' },
          { term: 'tranquil', translation: 'tranquilo' },
          { term: 'avui', translation: 'hoy' },
          { term: 'descansar', translation: 'descansar' },
          { term: 'viure', translation: 'vivir' }
        ]
      },
      {
        id: 'cap-2',
        block: 'Bloque I — Fundamentos',
        title: 'Posesión y determinación',
        input: [
          'El meu llibre és aquí.',
          'Aquest llibre és meu.',
          'És la casa d’en Marc.'
        ],
        translations: [
          'Mi libro está aquí.',
          'Este libro es mío.',
          'Es la casa de Marc.'
        ],
        challenges: [
          '¿Qué diferencia notas entre "el meu" y "meu"?',
          '¿Por qué aparece un artículo delante del posesivo?',
          '¿Qué relación expresa "d’en + nombre"?'
        ],
        explanation:
          'El posesivo suele llevar artículo: el meu llibre.\n\n' +
          'meu solo funciona como pronombre posesivo.\n\n' +
          'd’en + nombre expresa posesión natural o pertenencia.',
        summary:
          'El meu pis és petit però és meu. La casa d’en Marc és gran i està lluny. Aquest barri m’agrada molt.',
        vocab: [
          { term: 'pis', translation: 'piso' },
          { term: 'barri', translation: 'barrio' },
          { term: 'petit', translation: 'pequeño' },
          { term: 'gran', translation: 'grande' },
          { term: 'lluny', translation: 'lejos' }
        ]
      },
      {
        id: 'cap-3',
        block: 'Bloque I — Fundamentos',
        title: 'Pasado perifrástico',
        input: ['Ahir vaig anar al cinema.', 'Vam parlar molt.'],
        translations: ['Ayer fui al cine.', 'Hablamos mucho.'],
        challenges: [
          '¿Qué verbo acompaña al infinitivo para formar el pasado?',
          '¿Qué impresión de ritmo narrativo te da esta forma?',
          '¿Qué personas reconoces en "vaig" y "vam"?'
        ],
        explanation:
          'anar + infinitivo es el pasado narrativo principal en catalán.\n\n' +
          'Formas clave: vaig, vas, va, vam, vau, van.',
        summary:
          'Ahir vaig sortir amb uns amics. Vam sopar junts i després vam parlar fins tard. Va ser un dia tranquil.',
        vocab: [
          { term: 'ahir', translation: 'ayer' },
          { term: 'sortir', translation: 'salir' },
          { term: 'sopar', translation: 'cenar' },
          { term: 'fins tard', translation: 'hasta tarde' }
        ]
      },
      {
        id: 'cap-4',
        block: 'Bloque I — Fundamentos',
        title: 'Pronombres débiles (duplicación)',
        input: ['El llibre? El tinc aquí.', 'A la Maria? Li vaig parlar.'],
        translations: ['¿El libro? Lo tengo aquí.', '¿A María? Le hablé.'],
        challenges: [
          '¿Por qué aparece un pronombre aunque ya esté el objeto?',
          '¿En qué casos es obligatoria la duplicación?',
          '¿Qué diferencia hay entre OD definido y OI humano?'
        ],
        explanation:
          'La duplicación es obligatoria con OD definido y con OI humano.\n\n' +
          'El pronombre marca la relación aunque el sintagma aparezca explícito.',
        summary:
          'El meu amic no hi era ahir, però li vaig escriure un missatge. El problema el vam resoldre junts.',
        vocab: [
          { term: 'escriure', translation: 'escribir' },
          { term: 'missatge', translation: 'mensaje' },
          { term: 'resoldre', translation: 'resolver' }
        ]
      },
      {
        id: 'cap-5',
        block: 'Bloque I — Fundamentos',
        title: 'Pronombres combinados',
        input: ['Me’l vaig comprar ahir.'],
        translations: ['Me lo compré ayer.'],
        challenges: [
          '¿Qué orden siguen los clíticos en catalán?',
          '¿Qué parte de la frase indica el objeto directo?',
          '¿Notas una posición fija antes del verbo?'
        ],
        explanation:
          'El orden de clíticos es fijo: se automatiza, no se traduce palabra por palabra.\n\n' +
          'En combinaciones, la secuencia es estable y debe interiorizarse.',
        summary:
          'El llibre nou me’l vaig comprar ahir. Me’l vaig llegir ràpid perquè m’agradava molt.',
        vocab: [
          { term: 'llegir', translation: 'leer' },
          { term: 'ràpid', translation: 'rápido' }
        ]
      },
      {
        id: 'cap-6',
        block: 'Bloque I — Fundamentos',
        title: 'Movimiento y dirección',
        input: ['Vinc demà.', 'Vaig cap a casa.'],
        translations: ['Vengo mañana.', 'Voy hacia casa.'],
        challenges: [
          '¿Qué perspectiva introduce "venir" respecto al hablante?',
          '¿Cómo interpretarías "cap a" frente a un destino cerrado?',
          '¿Qué diferencia notas con "anar"?'
        ],
        explanation:
          'venir indica movimiento hacia el hablante.\n\n' +
          'cap a expresa dirección abierta, no un punto exacto.',
        summary:
          'Demà vinc a casa teva. Després anirem cap al centre a fer un cafè.',
        vocab: [
          { term: 'demà', translation: 'mañana' },
          { term: 'centre', translation: 'centro' },
          { term: 'fer un cafè', translation: 'tomar un café' }
        ]
      },
      {
        id: 'cap-7',
        block: 'Bloque I — Fundamentos',
        title: 'Existencia: hi ha / hi és',
        input: ['Hi ha gent.', 'El problema hi és.'],
        translations: ['Hay gente.', 'El problema está allí.'],
        challenges: [
          '¿Cuándo usarías "hi ha" frente a "hi és"?',
          '¿Qué diferencia hay entre existencia y localización?',
          '¿Cómo se refleja esa diferencia en español?'
        ],
        explanation:
          'hi ha expresa existencia.\n\n' +
          'hi és expresa localización de algo conocido.',
        summary:
          'En aquest barri hi ha molts bars. El meu preferit hi és a prop de casa.',
        vocab: [
          { term: 'gent', translation: 'gente' },
          { term: 'a prop', translation: 'cerca' }
        ]
      },
      {
        id: 'cap-8',
        block: 'Bloque I — Fundamentos',
        title: 'Gustar',
        input: ['M’agrada el cafè.', 'No li agraden les pel·lícules llargues.'],
        translations: ['Me gusta el café.', 'No le gustan las películas largas.'],
        challenges: [
          '¿Quién es el sujeto real en estas frases?',
          '¿Por qué el pronombre es obligatorio?',
          '¿Cómo cambia la concordancia con "agradar"?'
        ],
        explanation:
          'El sujeto es lo que gusta; el pronombre marca a la persona.\n\n' +
          'El catalán mantiene el pronombre como requisito estructural.',
        summary:
          'M’agrada el cafè fort, però no m’agraden gaire els dolços. Al meu amic li agrada molt cuinar.',
        vocab: [
          { term: 'fort', translation: 'fuerte' },
          { term: 'dolços', translation: 'dulces' },
          { term: 'cuinar', translation: 'cocinar' }
        ]
      },
      {
        id: 'cap-9',
        block: 'Bloque I — Fundamentos',
        title: 'Subjuntivo vivo',
        input: ['Vull que vinguis.'],
        translations: ['Quiero que vengas.'],
        challenges: [
          '¿Qué forma verbal sigue a "vull que"?',
          '¿Por qué se usa subjuntivo aquí?',
          '¿En qué situaciones cotidianas aparecería?'
        ],
        explanation:
          'El subjuntivo es frecuente y productivo en catalán.\n\n' +
          'Formas: vingui / vinguis, entre otras.',
        summary:
          'Vull que vinguis demà si pots. És important que parlem amb calma.',
        vocab: [
          { term: 'poder', translation: 'poder' },
          { term: 'important', translation: 'importante' },
          { term: 'amb calma', translation: 'con calma' }
        ]
      },
      {
        id: 'cap-10',
        block: 'Bloque I — Fundamentos',
        title: 'Conectores',
        input: ['Tot i que plovia, vam sortir.'],
        translations: ['Aunque llovía, salimos.'],
        challenges: [
          '¿Qué matiz aporta "tot i que"?',
          '¿Qué relación lógica marca el conector?',
          '¿Cómo contrasta con "en canvi"?'
        ],
        explanation:
          'Los conectores son precisos y muy usados.\n\n' +
          'tot i que introduce una concesión; en canvi marca contraste.',
        summary:
          'Tot i que feia fred, vam sortir. En canvi, altres persones es van quedar a casa.',
        vocab: [
          { term: 'tot i que', translation: 'aunque' },
          { term: 'en canvi', translation: 'en cambio' },
          { term: 'quedar-se', translation: 'quedarse' }
        ]
      },
      {
        id: 'cap-11',
        block: 'Bloque I — Fundamentos',
        title: 'Catalán idiomático',
        input: ['No cal que vinguis.', 'Em fa cosa.'],
        translations: ['No hace falta que vengas.', 'Me da cosa.'],
        challenges: [
          '¿Qué perífrasis modal aparece en "no cal"?',
          '¿Qué implica "em fa cosa" en contexto?',
          '¿Por qué estas expresiones suenan naturales en catalán?'
        ],
        explanation:
          'Perífrasis modales y pragmáticas muy frecuentes.\n\n' +
          'no cal expresa necesidad (o su ausencia). em fa cosa expresa reparo o incomodidad.',
        summary:
          'Avui no cal que vinguis. Em fa cosa sortir perquè estic cansat. Ja ho parlarem un altre dia.',
        vocab: [
          { term: 'no cal', translation: 'no hace falta' },
          { term: 'un altre dia', translation: 'otro día' }
        ]
      },
      {
        id: 'cap-12',
        block: 'Bloque III — A1–A2 esenciales',
        title: 'Rutinas diarias',
        input: ['Em llevo a les set.', 'Treballo tot el dia.'],
        translations: ['Me levanto a las siete.', 'Trabajo todo el día.'],
        challenges: [
          '¿Qué patrón siguen los reflexivos con el presente habitual?',
          '¿Cómo se marca el horario en catalán?',
          '¿Qué efecto tiene "tot el dia" en la rutina?'
        ],
        explanation:
          'Presente habitual con verbos reflexivos.\n\n' +
          'Las rutinas se expresan de forma directa, sin perífrasis adicionales.',
        summary:
          'Em llevo aviat, treballo tot el dia i al vespre descanso una mica.',
        vocab: [
          { term: 'llevar-se', translation: 'levantarse' },
          { term: 'vespre', translation: 'tarde-noche' },
          { term: 'una mica', translation: 'un poco' }
        ]
      },
      {
        id: 'cap-13',
        block: 'Bloque III — A1–A2 esenciales',
        title: 'Tiempo y frecuencia',
        input: ['Sempre, sovint, a vegades.'],
        translations: ['Siempre, a menudo, a veces.'],
        challenges: [
          '¿Cómo ordenarías estos adverbios por frecuencia?',
          '¿En qué posición de la frase suelen aparecer?',
          '¿Qué diferencias notarías frente al español?'
        ],
        explanation:
          'Adverbios de frecuencia muy productivos en catalán.\n\n' +
          'Su posición suele ser flexible, pero se integran cerca del verbo.',
        summary:
          'Normalment treballo a casa. A vegades vaig a l’oficina, però no sovint.',
        vocab: [
          { term: 'sempre', translation: 'siempre' },
          { term: 'sovint', translation: 'a menudo' },
          { term: 'oficina', translation: 'oficina' }
        ]
      },
      {
        id: 'cap-14',
        block: 'Bloque III — A1–A2 esenciales',
        title: 'Futuro inmediato',
        input: ['Aniré a Barcelona.', 'Vull viatjar.'],
        translations: ['Iré a Barcelona.', 'Quiero viajar.'],
        challenges: [
          '¿Qué forma verbal expresa el futuro simple?',
          '¿Qué matiz aporta "vull + infinitiu"?',
          '¿Cómo combinarías intención y plan?'
        ],
        explanation:
          'Futuro simple y perífrasis de intención conviven sin problema.\n\n' +
          'El futuro simple es directo; vull + infinitiu expresa deseo o plan.',
        summary:
          'Aquest cap de setmana aniré a Barcelona. Vull visitar la ciutat amb calma.',
        vocab: [
          { term: 'cap de setmana', translation: 'fin de semana' },
          { term: 'visitar', translation: 'visitar' },
          { term: 'ciutat', translation: 'ciudad' }
        ]
      },
      {
        id: 'cap-15',
        block: 'Bloque III — A1–A2 esenciales',
        title: 'Preguntar y responder',
        input: ['On vius?', 'Què fas?'],
        translations: ['¿Dónde vives?', '¿Qué haces?'],
        challenges: [
          '¿Qué palabras interrogativas ves en catalán?',
          '¿Cómo cambia la estructura con preguntas directas?',
          '¿Qué respuestas naturales construirías?'
        ],
        explanation:
          'Preguntas directas con pronombres interrogativos.\n\n' +
          'La estructura es compacta y sin inversiones artificiales.',
        summary:
          'Visc a prop del centre. Treballo des de casa i estudio català.',
        vocab: [
          { term: 'on', translation: 'dónde' },
          { term: 'què', translation: 'qué' },
          { term: 'estudiar', translation: 'estudiar' }
        ]
      },
      {
        id: 'cap-16',
        block: 'Bloque III — A1–A2 esenciales',
        title: 'Comer y beber',
        input: ['Tinc gana.', 'Voldria un cafè.'],
        translations: ['Tengo hambre.', 'Quisiera un café.'],
        challenges: [
          '¿Qué fórmula de cortesía aparece en "voldria"?',
          '¿Cómo expresarías hambre y sed de forma natural?',
          '¿Qué registro transmite esta estructura?'
        ],
        explanation:
          'Cortesía básica con voldria, equivalente a "quisiera".\n\n' +
          'Expresiones de necesidad: tinc gana / tinc set.',
        summary:
          'Tinc gana i voldria un cafè amb llet. Després menjarem alguna cosa.',
        vocab: [
          { term: 'gana', translation: 'hambre' },
          { term: 'set', translation: 'sed' },
          { term: 'amb llet', translation: 'con leche' }
        ]
      }
    ]
  },
  italian: {
    id: 'italian',
    label: 'Italiano',
    languageCode: 'it-IT',
    heroTitle: 'Italiano desde el español, por descubrimiento',
    heroDescription:
      'Explora ejemplos italianos naturales, deduce patrones y confirma con explicaciones claras. Mantén el mismo ritmo deductivo y el audio integrado.',
    chapters: [
      {
        id: 'it-cap-1',
        block: 'Bloque I — Fundamentos',
        title: 'Ser, estar y permanencia',
        input: [
          'Sono stanco.',
          'Sono professore.',
          'Sono a casa.',
          'Oggi sono tranquillo.'
        ],
        translations: [
          'Estoy cansado.',
          'Soy profesor.',
          'Estoy en casa.',
          'Hoy estoy tranquilo.'
        ],
        challenges: [
          '¿Qué verbo cubre identidad, estado y localización en italiano?',
          '¿En qué casos el italiano no separa ser/estar como el español?',
          '¿Qué pistas te da el contexto para interpretar cada uso?'
        ],
        explanation:
          'En italiano, essere (sono) cubre identidad, estado y localización.\n\n' +
          'La distinción ser/estar se resuelve por contexto, no por verbo distinto.\n\n' +
          'Presente: sono.',
        summary:
          'Sono professore e vivo vicino al centro. Oggi sono a casa perché sono stanco, ma sono tranquillo.',
        vocab: [
          { term: 'stanco', translation: 'cansado' },
          { term: 'tranquillo', translation: 'tranquilo' },
          { term: 'oggi', translation: 'hoy' },
          { term: 'vicino', translation: 'cerca' }
        ]
      },
      {
        id: 'it-cap-2',
        block: 'Bloque I — Fundamentos',
        title: 'Pertenencia: di + artículo',
        input: [
          'Il mio libro è qui.',
          'Questo libro è mio.',
          'È la casa di Marco.'
        ],
        translations: ['Mi libro está aquí.', 'Este libro es mío.', 'Es la casa de Marco.'],
        challenges: [
          '¿Qué diferencia hay entre "il mio" y "mio"?',
          '¿Cómo se marca la posesión con "di"?',
          '¿Qué papel juega el artículo definido en italiano?'
        ],
        explanation:
          'El posesivo suele ir con artículo: il mio libro.\n\n' +
          'mio solo funciona como pronombre posesivo.\n\n' +
          'di + nombre expresa pertenencia directa.',
        summary:
          'Il mio appartamento è piccolo ma è mio. La casa di Marco è grande e lontana.',
        vocab: [
          { term: 'appartamento', translation: 'piso' },
          { term: 'piccolo', translation: 'pequeño' },
          { term: 'grande', translation: 'grande' },
          { term: 'lontano', translation: 'lejos' }
        ]
      },
      {
        id: 'it-cap-3',
        block: 'Bloque I — Fundamentos',
        title: 'Pasado: passato prossimo',
        input: ['Ieri sono andato al cinema.', 'Abbiamo parlato molto.'],
        translations: ['Ayer fui al cine.', 'Hablamos mucho.'],
        challenges: [
          '¿Qué auxiliar aparece con el participio?',
          '¿Qué diferencia notas con respecto al pasado perifrástico catalán?',
          '¿Qué personas reconoces en "sono" y "abbiamo"?'
        ],
        explanation:
          'El passato prossimo se forma con auxiliar + participio pasado.\n\n' +
          'Auxiliares comunes: essere / avere.\n\n' +
          'Personas: sono, sei, è, siamo, siete, sono / ho, hai, ha, abbiamo, avete, hanno.',
        summary:
          'Ieri sono uscito con amici. Abbiamo cenato insieme e poi abbiamo parlato fino a tardi.',
        vocab: [
          { term: 'ieri', translation: 'ayer' },
          { term: 'uscire', translation: 'salir' },
          { term: 'cenare', translation: 'cenar' },
          { term: 'fino a tardi', translation: 'hasta tarde' }
        ]
      },
      {
        id: 'it-cap-4',
        block: 'Bloque I — Fundamentos',
        title: 'Gustar: piacere',
        input: ['Mi piace il caffè.', 'Non gli piacciono i film lunghi.'],
        translations: ['Me gusta el café.', 'No le gustan las películas largas.'],
        challenges: [
          '¿Quién es el sujeto gramatical con "piacere"?',
          '¿Qué pronombre indica a la persona que siente el gusto?',
          '¿Cómo cambia la concordancia con singular y plural?'
        ],
        explanation:
          'El sujeto es lo que gusta; el pronombre marca a la persona.\n\n' +
          'piace concuerda con singular, piacciono con plural.',
        summary:
          'Mi piace il caffè forte, ma non mi piacciono i dolci. Al mio amico piace cucinare.',
        vocab: [
          { term: 'piace', translation: 'gusta (singular)' },
          { term: 'piacciono', translation: 'gustan (plural)' },
          { term: 'dolci', translation: 'dulces' },
          { term: 'cucinare', translation: 'cocinar' }
        ]
      }
    ]
  }
  ,
  russian: {
    id: 'russian',
    label: 'Ruso',
    languageCode: 'ru-RU',
    heroTitle: 'Ruso desde el español, por descubrimiento',
    heroDescription:
      'Observa ejemplos rusos reales, deduce patrones y confirma con explicaciones claras. Audio integrado para ritmo y pronunciación.',
    chapters: [
      {
        id: 'ru-cap-1',
        block: 'Bloque I — Fundamentos',
        title: 'Identidad y estado (sin verbo “ser” en presente)',
        input: ['Я студент.', 'Я дома.', 'Сегодня я спокоен.'],
        translations: ['Soy estudiante.', 'Estoy en casa.', 'Hoy estoy tranquilo.'],
        challenges: [
          '¿Qué notas sobre la ausencia de verbo en presente?',
          '¿Cómo se interpreta la relación entre sujeto y predicado?',
          '¿Qué pistas te da el contexto para diferenciar identidad y estado?'
        ],
        explanation:
          'En ruso, el verbo “ser” (быть) suele omitirse en presente: “Я студент”.\n\n' +
          'La relación se entiende por contexto y orden de palabras.',
        summary: 'Я студент и живу рядом с центром. Сегодня я дома и спокоен.',
        vocab: [
          { term: 'студент', translation: 'estudiante' },
          { term: 'дома', translation: 'en casa' },
          { term: 'сегодня', translation: 'hoy' },
          { term: 'спокоен', translation: 'tranquilo' }
        ]
      },
      {
        id: 'ru-cap-2',
        block: 'Bloque I — Fundamentos',
        title: 'Posesión con “у + genitivo”',
        input: ['У меня есть книга.', 'У Марка есть дом.'],
        translations: ['Tengo un libro.', 'Marc tiene una casa.'],
        challenges: [
          '¿Qué estructura reemplaza al “tener” español?',
          '¿Qué significa literalmente “у меня есть”?',
          '¿Cómo cambia la perspectiva de posesión?'
        ],
        explanation:
          'El ruso usa “у + genitivo + есть” para expresar posesión.\n\n' +
          'Literalmente: “En mí hay…”, con enfoque en la existencia.',
        summary: 'У меня есть маленькая квартира, а у Марка есть дом.',
        vocab: [
          { term: 'у меня есть', translation: 'tengo' },
          { term: 'книга', translation: 'libro' },
          { term: 'дом', translation: 'casa' }
        ]
      },
      {
        id: 'ru-cap-3',
        block: 'Bloque I — Fundamentos',
        title: 'Movimiento básico: идти / ходить',
        input: ['Я иду домой.', 'Я хожу в кафе часто.'],
        translations: ['Voy a casa (ahora).', 'Voy al café a menudo (habitualmente).'],
        challenges: [
          '¿Qué diferencia hay entre una acción en curso y un hábito?',
          '¿Cómo se marca la dirección “a casa” en ruso?',
          '¿Qué verbo usarías para una acción puntual?'
        ],
        explanation:
          'идти expresa movimiento en curso o puntual; ходить expresa hábito o repetición.\n\n' +
          'La dirección se marca con formas como “домой”.',
        summary: 'Сейчас я иду домой, но обычно хожу в кафе вечером.',
        vocab: [
          { term: 'идти', translation: 'ir (en curso)' },
          { term: 'ходить', translation: 'ir (habitual)' },
          { term: 'домой', translation: 'a casa' },
          { term: 'обычно', translation: 'normalmente' }
        ]
      },
      {
        id: 'ru-cap-4',
        block: 'Bloque I — Fundamentos',
        title: 'Gustar: нравиться',
        input: ['Мне нравится кофе.', 'Ему нравятся длинные фильмы.'],
        translations: ['Me gusta el café.', 'A él le gustan las películas largas.'],
        challenges: [
          '¿Quién es el sujeto gramatical con “нравиться”?',
          '¿Qué caso aparece con la persona que siente el gusto?',
          '¿Cómo cambia el verbo con singular/plural?'
        ],
        explanation:
          'Con “нравиться”, lo que gusta es el sujeto; la persona va en dativo.\n\n' +
          'нравится con singular, нравятся con plural.',
        summary: 'Мне нравится кофе, но мне не нравятся сладости.',
        vocab: [
          { term: 'нравится', translation: 'gusta (singular)' },
          { term: 'нравятся', translation: 'gustan (plural)' },
          { term: 'кофе', translation: 'café' },
          { term: 'сладости', translation: 'dulces' }
        ]
      }
    ]
  }
};
