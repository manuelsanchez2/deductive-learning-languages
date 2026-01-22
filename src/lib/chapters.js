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
      },
      {
        id: 'it-cap-5',
        block: 'Bloque II — Tiempo y aspecto',
        title: 'Imperfetto vs passato prossimo',
        input: ['Da piccolo studiavo musica.', 'Ieri ho studiato tutto il giorno.'],
        translations: ['De pequeño estudiaba música.', 'Ayer estudié todo el día.'],
        challenges: [
          '¿Qué diferencia temporal sugiere \"studiavo\" frente a \"ho studiato\"?',
          '¿Cuándo usarías el imperfecto en una narración?',
          '¿Cómo separar hábito pasado y evento puntual?'
        ],
        explanation:
          'L’imperfetto expresa hábitos o descripciones en el pasado.\n\n' +
          'El passato prossimo expresa un evento puntual o concluido.',
        summary:
          'Da piccolo studiavo musica, ma ieri ho studiato per l’esame tutto il giorno.',
        vocab: [
          { term: 'da piccolo', translation: 'de pequeño' },
          { term: 'studiavo', translation: 'estudiaba' },
          { term: 'ho studiato', translation: 'he estudiado' },
          { term: 'esame', translation: 'examen' }
        ]
      },
      {
        id: 'it-cap-6',
        block: 'Bloque II — Tiempo y aspecto',
        title: 'Stare + gerundio',
        input: ['Sto leggendo adesso.', 'Stiamo lavorando insieme.'],
        translations: ['Estoy leyendo ahora.', 'Estamos trabajando juntos.'],
        challenges: [
          '¿Qué forma progresiva se usa en italiano?',
          '¿Qué diferencia hay con el presente simple?',
          '¿En qué contextos suena más natural?'
        ],
        explanation:
          'stare + gerundio expresa una acción en curso.\n\n' +
          'Se usa para enfatizar progresión: sto leggendo.',
        summary:
          'Adesso sto leggendo un libro, e stiamo lavorando insieme al progetto.',
        vocab: [
          { term: 'sto leggendo', translation: 'estoy leyendo' },
          { term: 'adesso', translation: 'ahora' },
          { term: 'insieme', translation: 'juntos' },
          { term: 'progetto', translation: 'proyecto' }
        ]
      },
      {
        id: 'it-cap-7',
        block: 'Bloque II — Tiempo y aspecto',
        title: 'Futuro semplice e intenzione',
        input: ['Domani partirò.', 'Voglio viaggiare presto.'],
        translations: ['Mañana partiré.', 'Quiero viajar pronto.'],
        challenges: [
          '¿Qué forma marca el futuro en italiano?',
          '¿Cómo expresar intención sin futuro?',
          '¿Qué diferencia hay entre plan y deseo?'
        ],
        explanation:
          'El futuro simple marca acciones futuras: partirò.\n\n' +
          'La intención se puede expresar con voglio + infinitivo.',
        summary:
          'Domani partirò per Roma. Voglio viaggiare con calma.',
        vocab: [
          { term: 'partire', translation: 'partir' },
          { term: 'presto', translation: 'pronto' },
          { term: 'con calma', translation: 'con calma' },
          { term: 'Roma', translation: 'Roma' }
        ]
      },
      {
        id: 'it-cap-8',
        block: 'Bloque II — Tiempo y aspecto',
        title: 'Verbos modales: potere, dovere, volere',
        input: ['Posso entrare?', 'Devo studiare oggi.', 'Voglio un caffè.'],
        translations: ['¿Puedo entrar?', 'Debo estudiar hoy.', 'Quiero un café.'],
        challenges: [
          '¿Qué matiz aporta cada modal?',
          '¿Cómo se combina el modal con el infinitivo?',
          '¿Qué diferencia notas con el español?'
        ],
        explanation:
          'Los modales van seguidos de infinitivo: posso entrare.\n\n' +
          'potere = posibilidad, dovere = obligación, volere = deseo.',
        summary:
          'Oggi devo studiare, ma voglio un caffè. Dopo posso uscire.',
        vocab: [
          { term: 'posso', translation: 'puedo' },
          { term: 'devo', translation: 'debo' },
          { term: 'voglio', translation: 'quiero' },
          { term: 'uscire', translation: 'salir' }
        ]
      },
      {
        id: 'it-cap-9',
        block: 'Bloque II — Tiempo y aspecto',
        title: 'Ci / Ne (pronombres)',
        input: ['Ci vado domani.', 'Ne voglio due.'],
        translations: ['Voy allí mañana.', 'Quiero dos de ellos.'],
        challenges: [
          '¿Qué reemplaza \"ci\" en la frase?',
          '¿Qué cantidad retoma \"ne\"?',
          '¿Cómo cambia la posición del pronombre?'
        ],
        explanation:
          'ci puede indicar lugar o complemento introducido por a.\n\n' +
          'ne retoma cantidad o \"de + sustantivo\".',
        summary:
          'Ci vado domani e ne voglio due, per favore.',
        vocab: [
          { term: 'ci', translation: 'allí / a ello' },
          { term: 'ne', translation: 'de ello / de ellos' },
          { term: 'due', translation: 'dos' },
          { term: 'per favore', translation: 'por favor' }
        ]
      },
      {
        id: 'it-cap-10',
        block: 'Bloque II — Tiempo y aspecto',
        title: 'Doble negación',
        input: ['Non vedo nessuno.', 'Non ho mai tempo.'],
        translations: ['No veo a nadie.', 'No tengo nunca tiempo.'],
        challenges: [
          '¿Qué elementos negativos aparecen?',
          '¿Por qué hay dos marcas de negación?',
          '¿Cómo se refleja en español?'
        ],
        explanation:
          'La doble negación es normal: non + nessuno/mai.\n\n' +
          'Refuerza la negación sin cambiar el sentido.',
        summary:
          'Non vedo nessuno oggi e non ho mai tempo libero.',
        vocab: [
          { term: 'nessuno', translation: 'nadie' },
          { term: 'mai', translation: 'nunca' },
          { term: 'tempo libero', translation: 'tiempo libre' }
        ]
      },
      {
        id: 'it-cap-11',
        block: 'Bloque III — A1–A2 esenciales',
        title: 'Preguntar y responder',
        input: ['Dove vivi?', 'Che cosa fai?'],
        translations: ['¿Dónde vives?', '¿Qué haces?'],
        challenges: [
          '¿Qué interrogativos se usan en italiano?',
          '¿Cómo cambia la entonación en preguntas?',
          '¿Qué respuestas naturales darías?'
        ],
        explanation:
          'Preguntas directas con dove / che cosa.\n\n' +
          'La estructura suele ser simple y directa.',
        summary:
          'Vivo vicino al centro. Lavoro da casa e studio italiano.',
        vocab: [
          { term: 'dove', translation: 'dónde' },
          { term: 'che cosa', translation: 'qué' },
          { term: 'lavoro', translation: 'trabajo' },
          { term: 'studio', translation: 'estudio' }
        ]
      },
      {
        id: 'it-cap-12',
        block: 'Bloque III — A1–A2 esenciales',
        title: 'Ritmo diario',
        input: ['Mi sveglio alle sette.', 'Lavoro tutto il giorno.'],
        translations: ['Me despierto a las siete.', 'Trabajo todo el día.'],
        challenges: [
          '¿Qué reflexivo aparece en \"mi sveglio\"?',
          '¿Cómo se expresa la hora en italiano?',
          '¿Qué aporta \"tutto il giorno\"?'
        ],
        explanation:
          'Los reflexivos van con pronombre: mi sveglio.\n\n' +
          'La hora se expresa con \"alle\" + número.',
        summary:
          'Mi sveglio presto, lavoro tutto il giorno e la sera riposo.',
        vocab: [
          { term: 'mi sveglio', translation: 'me despierto' },
          { term: 'presto', translation: 'temprano' },
          { term: 'sera', translation: 'tarde-noche' },
          { term: 'riposo', translation: 'descanso' }
        ]
      },
      {
        id: 'it-cap-13',
        block: 'Bloque III — A1–A2 esenciales',
        title: 'Conectores básicos',
        input: ['Anche se piove, usciamo.', 'Invece restiamo a casa.'],
        translations: ['Aunque llueve, salimos.', 'En cambio nos quedamos en casa.'],
        challenges: [
          '¿Qué matiz aporta \"anche se\"?',
          '¿Cómo se contrasta con \"invece\"?',
          '¿En qué registros suenan naturales?'
        ],
        explanation:
          'anche se introduce una concesión.\n\n' +
          'invece marca contraste o alternativa.',
        summary:
          'Anche se piove, usciamo. Invece altri restano a casa.',
        vocab: [
          { term: 'anche se', translation: 'aunque' },
          { term: 'invece', translation: 'en cambio' },
          { term: 'restare', translation: 'quedarse' }
        ]
      },
      {
        id: 'it-cap-14',
        block: 'Bloque III — A1–A2 esenciales',
        title: 'Cortesía básica',
        input: ['Vorrei un caffè.', 'Per favore, puoi aiutarmi?'],
        translations: ['Quisiera un café.', 'Por favor, ¿puedes ayudarme?'],
        challenges: [
          '¿Qué valor tiene \"vorrei\"?',
          '¿Cómo suaviza la petición?',
          '¿Qué diferencia hay entre \"puoi\" y \"potresti\"?'
        ],
        explanation:
          'vorrei es cortesía equivalente a \"quisiera\".\n\n' +
          'puoi + infinitivo formula petición directa.',
        summary:
          'Vorrei un caffè e, per favore, puoi aiutarmi un momento?',
        vocab: [
          { term: 'vorrei', translation: 'quisiera' },
          { term: 'per favore', translation: 'por favor' },
          { term: 'aiutarmi', translation: 'ayudarme' }
        ]
      }
    ]
  },
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
      },
      {
        id: 'ru-cap-5',
        block: 'Bloque II — Tiempo y aspecto',
        title: 'Pasado: был / была',
        input: ['Вчера я был дома.', 'Она была спокойна.'],
        translations: ['Ayer estuve en casa.', 'Ella estaba tranquila.'],
        challenges: [
          '¿Qué forma aparece para pasado de “быть”?',
          '¿Cómo marca género el pasado en ruso?',
          '¿En qué se diferencia del presente sin verbo?'
        ],
        explanation:
          'En pasado, “быть” aparece como был/была/было/были.\n\n' +
          'El pasado marca género y número.',
        summary: 'Вчера я был дома, а она была спокойна.',
        vocab: [
          { term: 'вчера', translation: 'ayer' },
          { term: 'был', translation: 'estuve (masc.)' },
          { term: 'была', translation: 'estuvo (fem.)' }
        ]
      },
      {
        id: 'ru-cap-6',
        block: 'Bloque II — Tiempo y aspecto',
        title: 'Aspecto: читать / прочитать',
        input: ['Я читаю книгу.', 'Я прочитал книгу.'],
        translations: ['Estoy leyendo un libro.', 'Leí el libro (terminado).'],
        challenges: [
          '¿Qué diferencia hay entre proceso y resultado?',
          '¿Qué prefijo marca completitud?',
          '¿Cómo se refleja en español?'
        ],
        explanation:
          'El aspecto imperfectivo describe proceso: читать.\n\n' +
          'El perfectivo marca completitud: прочитать.',
        summary: 'Сейчас я читаю книгу, а вчера я прочитал другую.',
        vocab: [
          { term: 'читать', translation: 'leer (proceso)' },
          { term: 'прочитать', translation: 'leer (terminado)' },
          { term: 'книга', translation: 'libro' },
          { term: 'другую', translation: 'otra' }
        ]
      },
      {
        id: 'ru-cap-7',
        block: 'Bloque II — Tiempo y aspecto',
        title: 'Futuro: буду + infinitivo',
        input: ['Завтра я буду работать.', 'Мы будем говорить позже.'],
        translations: ['Mañana trabajaré.', 'Hablaremos más tarde.'],
        challenges: [
          '¿Qué verbo auxiliar aparece en el futuro?',
          '¿Cómo se combina con el infinitivo?',
          '¿Qué diferencia hay con el futuro perfectivo?'
        ],
        explanation:
          'El futuro imperfectivo se forma con быть + infinitivo.\n\n' +
          'буду, будешь, будет, будем, будете, будут.',
        summary: 'Завтра я буду работать, а вечером мы будем говорить.',
        vocab: [
          { term: 'буду', translation: 'seré/estaré (futuro)' },
          { term: 'работать', translation: 'trabajar' },
          { term: 'позже', translation: 'más tarde' }
        ]
      },
      {
        id: 'ru-cap-8',
        block: 'Bloque II — Tiempo y aspecto',
        title: 'Negación doble',
        input: ['Я никого не вижу.', 'У меня нет времени.'],
        translations: ['No veo a nadie.', 'No tengo tiempo.'],
        challenges: [
          '¿Qué dos elementos negativos aparecen?',
          '¿Cómo se distribuye la negación en ruso?',
          '¿Qué diferencia hay con el español?'
        ],
        explanation:
          'La doble negación es obligatoria: не + никто/ничего.\n\n' +
          'En posesión negativa: нет + genitivo.',
        summary: 'Я никого не вижу и у меня нет времени.',
        vocab: [
          { term: 'никого', translation: 'a nadie' },
          { term: 'не', translation: 'no' },
          { term: 'нет', translation: 'no hay / no tengo' },
          { term: 'время', translation: 'tiempo' }
        ]
      },
      {
        id: 'ru-cap-9',
        block: 'Bloque II — Tiempo y aspecto',
        title: 'Dirección: в / на + acusativo',
        input: ['Я иду в магазин.', 'Мы едем на работу.'],
        translations: ['Voy a la tienda.', 'Vamos al trabajo.'],
        challenges: [
          '¿Qué preposición acompaña a lugares cerrados?',
          '¿Qué preposición va con superficies o destinos habituales?',
          '¿Qué caso se usa con movimiento?'
        ],
        explanation:
          'Con movimiento hacia destino se usa acusativo.\n\n' +
          'в para interiores; на para superficies o actividades.',
        summary: 'Сейчас я иду в магазин, а потом мы едем на работу.',
        vocab: [
          { term: 'в', translation: 'a (interior)' },
          { term: 'на', translation: 'a (superficie/actividad)' },
          { term: 'магазин', translation: 'tienda' },
          { term: 'работа', translation: 'trabajo' }
        ]
      },
      {
        id: 'ru-cap-10',
        block: 'Bloque III — A1–A2 esenciales',
        title: 'Rutina diaria',
        input: ['Я встаю в семь.', 'Я работаю весь день.'],
        translations: ['Me levanto a las siete.', 'Trabajo todo el día.'],
        challenges: [
          '¿Qué verbo expresa levantarse?',
          '¿Cómo se marca la hora?',
          '¿Qué significa “весь день”?'
        ],
        explanation:
          'Los verbos reflexivos usan -ся: встаю.\n\n' +
          'La hora se expresa con “в” + numeral.',
        summary: 'Я встаю рано, работаю весь день и вечером отдыхаю.',
        vocab: [
          { term: 'встаю', translation: 'me levanto' },
          { term: 'в семь', translation: 'a las siete' },
          { term: 'вечером', translation: 'por la tarde-noche' },
          { term: 'отдыхаю', translation: 'descanso' }
        ]
      },
      {
        id: 'ru-cap-11',
        block: 'Bloque III — A1–A2 esenciales',
        title: 'Preguntar y responder',
        input: ['Где ты живёшь?', 'Что ты делаешь?'],
        translations: ['¿Dónde vives?', '¿Qué haces?'],
        challenges: [
          '¿Qué interrogativos ves en ruso?',
          '¿Cómo se marca el acento en la pregunta?',
          '¿Qué respuestas naturales darías?'
        ],
        explanation:
          'Preguntas directas con где / что.\n\n' +
          'La estructura es simple y el contexto ayuda.',
        summary: 'Я живу рядом с центром. Я работаю и учу русский.',
        vocab: [
          { term: 'где', translation: 'dónde' },
          { term: 'что', translation: 'qué' },
          { term: 'живу', translation: 'vivo' },
          { term: 'учу', translation: 'aprendo/estudio' }
        ]
      },
      {
        id: 'ru-cap-12',
        block: 'Bloque III — A1–A2 esenciales',
        title: 'Cortesía básica',
        input: ['Можно кофе, пожалуйста?', 'Вы можете помочь мне?'],
        translations: ['¿Se puede un café, por favor?', '¿Puede ayudarme?'],
        challenges: [
          '¿Qué fórmula de cortesía aparece?',
          '¿Cómo se usa “можно” en peticiones?',
          '¿Qué diferencia hay entre ты y вы?'
        ],
        explanation:
          'Можно introduce peticiones suaves, equivalente a “se puede”.\n\n' +
          'Вы es forma de cortesía o plural.',
        summary: 'Можно кофе, пожалуйста? Вы можете помочь мне на минуту?',
        vocab: [
          { term: 'можно', translation: 'se puede / puedo' },
          { term: 'пожалуйста', translation: 'por favor' },
          { term: 'помочь', translation: 'ayudar' }
        ]
      },
      {
        id: 'ru-cap-13',
        block: 'Bloque III — A1–A2 esenciales',
        title: 'Conectores básicos',
        input: ['Хотя идёт дождь, мы идём.', 'А другие остаются дома.'],
        translations: ['Aunque llueve, vamos.', 'Y otros se quedan en casa.'],
        challenges: [
          '¿Qué conector introduce concesión?',
          '¿Qué función cumple “а”?',
          '¿Cómo se contrasta en ruso?'
        ],
        explanation:
          'хотя introduce concesión.\n\n' +
          'а contrasta o introduce alternativa.',
        summary: 'Хотя идёт дождь, мы идём. А другие остаются дома.',
        vocab: [
          { term: 'хотя', translation: 'aunque' },
          { term: 'идёт дождь', translation: 'llueve' },
          { term: 'остаются', translation: 'se quedan' }
        ]
      },
      {
        id: 'ru-cap-14',
        block: 'Bloque III — A1–A2 esenciales',
        title: 'Cantidad y números',
        input: ['Мне нужно два билета.', 'У нас есть три книги.'],
        translations: ['Necesito dos entradas.', 'Tenemos tres libros.'],
        challenges: [
          '¿Qué caso aparece con cantidades?',
          '¿Cómo se usa “нужно” para necesidad?',
          '¿Qué diferencia hay entre “у нас есть” y “мы имеем”?'
        ],
        explanation:
          'нужно expresa necesidad impersonal.\n\n' +
          'La posesión cotidiana usa у нас есть.',
        summary: 'Мне нужно два билета, и у нас есть три книги.',
        vocab: [
          { term: 'нужно', translation: 'necesito / hace falta' },
          { term: 'два', translation: 'dos' },
          { term: 'три', translation: 'tres' },
          { term: 'билет', translation: 'entrada/billete' }
        ]
      }
    ]
  }
};
