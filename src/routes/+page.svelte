<script>
  import { onMount } from 'svelte';
  import { languageCatalog } from '$lib/chapters';

  let view = 'chapters';
  let language = 'catalan';
  let completed = [];
  let openChapters = [];
  let showTranslations = [];
  let voices = [];
  let speechReady = false;

  $: languageData = languageCatalog[language];
  $: chapterList =
    languageData?.chapters.map((chapter, index) => ({
      ...chapter,
      number: index + 1
    })) ?? [];
  $: vocabulary = chapterList.flatMap((chapter) =>
    chapter.vocab.map((item) => ({
      ...item,
      chapterId: chapter.id,
      chapterTitle: chapter.title,
      chapterNumber: chapter.number,
      summary: chapter.summary
    }))
  );

  onMount(() => {
    if (typeof window === 'undefined') return;

    speechReady = 'speechSynthesis' in window;
    language = loadStoredList('selectedLanguage') || 'catalan';
    completed = loadStoredList(`completedChapters-${language}`);
    openChapters = loadStoredList(`openChapters-${language}`);

    if (speechReady) {
      loadVoices();
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }
  });

  const loadStoredList = (key) => {
    if (typeof localStorage === 'undefined') return [];
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  };

  const persistList = (key, value) => {
    if (typeof localStorage === 'undefined') return;
    localStorage.setItem(key, JSON.stringify(value));
  };

  const loadVoices = () => {
    voices = window.speechSynthesis.getVoices();
  };

  const normalizeLang = (lang) => (lang || '').toLowerCase();

  const pickVoice = (targetLang) => {
    if (!voices.length) return null;
    const normalized = normalizeLang(targetLang);
    const base = normalized.split('-')[0];
    return (
      voices.find((voice) => normalizeLang(voice.lang) === normalized) ||
      voices.find((voice) => normalizeLang(voice.lang).startsWith(`${base}-`)) ||
      voices.find((voice) => normalizeLang(voice.lang).startsWith(base)) ||
      null
    );
  };

  const speak = (text) => {
    if (!speechReady || !text) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    const targetLang = languageData?.languageCode || 'ca-ES';
    utterance.lang = targetLang;
    const voice = pickVoice(targetLang);
    if (voice) utterance.voice = voice;
    window.speechSynthesis.speak(utterance);
  };

  const speakChapter = (chapter) => {
    const fullText = [...chapter.input, chapter.summary].join(' ');
    speak(fullText);
  };

  const toggleCompleted = (id) => {
    completed = completed.includes(id)
      ? completed.filter((chapterId) => chapterId !== id)
      : [...completed, id];
    persistList(`completedChapters-${language}`, completed);
  };

  const toggleOpen = (id) => {
    openChapters = openChapters.includes(id)
      ? openChapters.filter((chapterId) => chapterId !== id)
      : [...openChapters, id];
    persistList(`openChapters-${language}`, openChapters);
  };

  const toggleTranslations = (id) => {
    showTranslations = showTranslations.includes(id)
      ? showTranslations.filter((chapterId) => chapterId !== id)
      : [...showTranslations, id];
  };

  const summarySnippet = (text) => {
    if (!text) return '';
    const [first] = text.split('. ');
    return first.endsWith('.') ? first : `${first}.`;
  };

  const setLanguage = (next) => {
    if (language === next) return;
    language = next;
    completed = loadStoredList(`completedChapters-${language}`);
    openChapters = loadStoredList(`openChapters-${language}`);
    showTranslations = [];
    persistList('selectedLanguage', language);
  };
</script>

<svelte:head>
  <title>Catalán e Italiano Deductivo</title>
  <meta
    name="description"
    content="Aprendizaje deductivo de catalán desde el español con audio y capítulos colapsables."
  />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Fraunces:wght@300;500;700;800&family=Work+Sans:wght@300;500;700&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<main>
  <div class="top-bar">
    <span class="brand">Deductivo</span>
    <div class="language-switch" role="group" aria-label="Cambiar idioma">
      {#each Object.values(languageCatalog) as lang}
        <button
          class:active={language === lang.id}
          on:click={() => setLanguage(lang.id)}
          aria-pressed={language === lang.id}
        >
          {lang.label}
        </button>
      {/each}
    </div>
  </div>
  <header class="hero">
    <div>
      <p class="eyebrow">Aprendizaje deductivo</p>
      <h1>{languageData?.heroTitle}</h1>
      <p class="lede">{languageData?.heroDescription}</p>
    </div>
    <div class="hero-card">
      <p class="hero-stat">{completed.length} / {chapterList.length}</p>
      <p class="hero-label">Capítulos completados</p>
      <p class="hero-note">
        {speechReady
          ? 'Audio activo con voz del navegador.'
          : 'Tu navegador no soporta audio por síntesis.'}
      </p>
    </div>
  </header>

  <nav class="view-toggle" aria-label="Cambiar vista">
    <button
      class:active={view === 'chapters'}
      on:click={() => (view = 'chapters')}
      aria-pressed={view === 'chapters'}
    >
      📖 Capítulos
    </button>
    <button
      class:active={view === 'vocab'}
      on:click={() => (view = 'vocab')}
      aria-pressed={view === 'vocab'}
    >
      📚 Vocabulario
    </button>
  </nav>

  {#if view === 'chapters'}
    <section class="chapters" aria-label="Lista de capítulos">
      {#each chapterList as chapter}
        <article class:completed={completed.includes(chapter.id)} class="chapter">
          <div class="chapter-header">
            <button
              class="accordion-toggle"
              on:click={() => toggleOpen(chapter.id)}
              aria-expanded={openChapters.includes(chapter.id)}
              aria-controls={`panel-${chapter.id}`}
            >
              <span class="chapter-index">Capítulo {chapter.number}</span>
              <span class="chapter-title">{chapter.title}</span>
              <span class="chapter-block">{chapter.block}</span>
            </button>
            <label class="completed-toggle">
              <input
                type="checkbox"
                checked={completed.includes(chapter.id)}
                on:change={() => toggleCompleted(chapter.id)}
              />
              Completado
            </label>
          </div>

          {#if openChapters.includes(chapter.id)}
            <div
              id={`panel-${chapter.id}`}
              class="chapter-body"
              role="region"
              aria-label={`Capítulo ${chapter.number}: ${chapter.title}`}
            >
              <div class="section">
                <h3>Input (ejemplos en el idioma)</h3>
                <ul class="phrase-list">
                  {#each chapter.input as line, index}
                    <li>
                      <div class="phrase-stack">
                        <span>{line}</span>
                        {#if showTranslations.includes(chapter.id)}
                          <span class="translation-line">
                            {chapter.translations?.[index] || 'Traducción pendiente.'}
                          </span>
                        {/if}
                      </div>
                      <button
                        class="audio"
                        on:click={() => speak(line)}
                        aria-label={`Reproducir: ${line}`}
                      >
                        ▶
                      </button>
                    </li>
                  {/each}
                </ul>
                <div class="actions">
                  <button class="ghost" on:click={() => speak(chapter.input.join(' '))}>
                    Reproducir todas las frases
                  </button>
                  <button class="ghost" on:click={() => speakChapter(chapter)}>
                    Reproducir capítulo completo
                  </button>
                  <button
                    class:active-toggle={showTranslations.includes(chapter.id)}
                    class="ghost toggle-translation"
                    on:click={() => toggleTranslations(chapter.id)}
                    aria-pressed={showTranslations.includes(chapter.id)}
                  >
                    {showTranslations.includes(chapter.id)
                      ? 'Ocultar traducción'
                      : 'Mostrar traducción'}
                  </button>
                </div>
              </div>

              <div class="section">
                <h3>Retos de deducción</h3>
                <ul class="challenge-list">
                  {#each chapter.challenges as challenge}
                    <li>{challenge}</li>
                  {/each}
                </ul>
              </div>

              <div class="section">
                <h3>Explicación posterior</h3>
                <p class="explanation">{chapter.explanation}</p>
              </div>

              <div class="section">
                <h3>Texto resumen integrado</h3>
                <p class="summary">{chapter.summary}</p>
                <button class="audio-inline" on:click={() => speak(chapter.summary)}>
                  ▶ Escuchar texto resumen
                </button>
              </div>

              <div class="section vocab-section">
                <h3>Vocabulario clave</h3>
                <ul class="vocab-list">
                  {#each chapter.vocab as item}
                    <li>
                      <div>
                        <span class="term">{item.term}</span>
                        <span class="translation">{item.translation}</span>
                      </div>
                      <button
                        class="audio"
                        on:click={() => speak(item.term)}
                        aria-label={`Reproducir: ${item.term}`}
                      >
                        ▶
                      </button>
                    </li>
                  {/each}
                </ul>
              </div>
            </div>
          {/if}
        </article>
      {/each}
    </section>
  {:else}
    <section class="vocab-view" aria-label="Vista de vocabulario">
      <div class="vocab-header">
        <h2>Vocabulario global</h2>
        <p>
          Cada palabra está vinculada a su capítulo y al texto donde aparece, para reforzar el
          contexto.
        </p>
      </div>
      <div class="vocab-grid">
        {#each vocabulary as item}
          <article class="vocab-card">
            <div class="vocab-term">
              <span>{item.term}</span>
              <button
                class="audio"
                on:click={() => speak(item.term)}
                aria-label={`Reproducir: ${item.term}`}
              >
                ▶
              </button>
            </div>
            <p class="vocab-translation">{item.translation}</p>
            <p class="vocab-meta">
              Capítulo {item.chapterNumber}: {item.chapterTitle}
            </p>
            <p class="vocab-context">{summarySnippet(item.summary)}</p>
          </article>
        {/each}
      </div>
    </section>
  {/if}
</main>

<style>
  :global(body) {
    margin: 0;
    font-family: 'Work Sans', 'Helvetica Neue', sans-serif;
    color: #2e2721;
    background: radial-gradient(circle at top, #fff7e8 0%, #f1e1c8 45%, #e8d2b0 100%);
  }

  :global(*) {
    box-sizing: border-box;
  }

  main {
    max-width: 1100px;
    margin: 0 auto;
    padding: 32px 20px 80px;
  }

  .hero {
    display: grid;
    gap: 24px;
    grid-template-columns: minmax(0, 2fr) minmax(0, 1fr);
    align-items: center;
    background: linear-gradient(135deg, #fef6e4, #f1d9b7);
    border-radius: 24px;
    padding: 28px 28px 24px;
    box-shadow: 0 18px 40px rgba(82, 57, 20, 0.18);
  }

  .eyebrow {
    text-transform: uppercase;
    letter-spacing: 0.12em;
    font-weight: 600;
    font-size: 0.75rem;
    color: #a66c1f;
    margin: 0 0 10px;
  }

  .top-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    margin-bottom: 20px;
    padding: 10px 16px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.7);
    box-shadow: 0 10px 24px rgba(82, 57, 20, 0.12);
  }

  .brand {
    font-family: 'Fraunces', 'Times New Roman', serif;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    font-size: 0.9rem;
    color: #7b4a15;
  }

  .language-switch {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
  }

  .language-switch button {
    border: none;
    padding: 8px 14px;
    border-radius: 999px;
    background: #f6efe4;
    color: #2e2721;
    font-weight: 600;
    cursor: pointer;
    box-shadow: 0 6px 14px rgba(70, 50, 20, 0.12);
    transition: transform 0.2s ease, background 0.2s ease;
  }

  .language-switch button.active {
    background: #2f2416;
    color: #f8e7c6;
    transform: translateY(-1px);
  }

  h1 {
    font-family: 'Fraunces', 'Times New Roman', serif;
    font-size: clamp(2rem, 3vw, 3rem);
    margin: 0 0 12px;
  }

  .lede {
    margin: 0;
    font-size: 1.05rem;
    line-height: 1.6;
  }

  .hero-card {
    background: #2f2416;
    color: #f9e8cc;
    padding: 18px;
    border-radius: 18px;
    text-align: left;
    box-shadow: inset 0 0 0 1px rgba(255, 232, 196, 0.2);
  }

  .hero-stat {
    font-family: 'Fraunces', 'Times New Roman', serif;
    font-size: 2.4rem;
    margin: 0 0 6px;
  }

  .hero-label {
    margin: 0 0 8px;
    font-weight: 600;
  }

  .hero-note {
    margin: 0;
    font-size: 0.9rem;
    color: #e4c690;
  }

  .view-toggle {
    display: flex;
    gap: 12px;
    margin: 32px 0 24px;
    flex-wrap: wrap;
  }

  .view-toggle button {
    border: none;
    padding: 10px 18px;
    border-radius: 999px;
    background: #f6efe4;
    color: #2e2721;
    font-weight: 600;
    cursor: pointer;
    box-shadow: 0 6px 14px rgba(70, 50, 20, 0.12);
    transition: transform 0.2s ease, background 0.2s ease;
  }

  .view-toggle button.active {
    background: #2f2416;
    color: #f8e7c6;
    transform: translateY(-1px);
  }

  .chapters {
    display: grid;
    gap: 20px;
  }

  .chapter {
    background: rgba(255, 252, 246, 0.95);
    border-radius: 20px;
    padding: 16px;
    box-shadow: 0 12px 30px rgba(82, 57, 20, 0.12);
    border: 1px solid rgba(166, 108, 31, 0.2);
  }

  .chapter.completed {
    border-color: rgba(46, 113, 58, 0.5);
    box-shadow: 0 14px 34px rgba(46, 113, 58, 0.18);
  }

  .chapter-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    flex-wrap: wrap;
  }

  .accordion-toggle {
    border: none;
    background: none;
    display: grid;
    gap: 6px;
    text-align: left;
    cursor: pointer;
    flex: 1 1 260px;
  }

  .chapter-index {
    font-size: 0.85rem;
    font-weight: 700;
    color: #a66c1f;
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  .chapter-title {
    font-family: 'Fraunces', 'Times New Roman', serif;
    font-size: 1.4rem;
  }

  .chapter-block {
    font-size: 0.9rem;
    color: #5a4c3c;
  }

  .completed-toggle {
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 600;
  }

  .chapter-body {
    margin-top: 16px;
    display: grid;
    gap: 18px;
  }

  .section {
    background: #fff8ee;
    border-radius: 16px;
    padding: 16px;
    box-shadow: inset 0 0 0 1px rgba(166, 108, 31, 0.12);
  }

  .section h3 {
    margin: 0 0 12px;
    font-size: 1.05rem;
  }

  .phrase-list,
  .challenge-list,
  .vocab-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    gap: 10px;
  }

  .phrase-list li,
  .vocab-list li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
  }

  .phrase-stack {
    display: grid;
    gap: 4px;
  }

  .translation-line {
    font-size: 0.95rem;
    color: #7b5b34;
  }

  .challenge-list li {
    padding-left: 16px;
    position: relative;
  }

  .challenge-list li::before {
    content: '✦';
    position: absolute;
    left: 0;
    color: #a66c1f;
  }

  .explanation {
    margin: 0;
    white-space: pre-line;
    line-height: 1.6;
  }

  .summary {
    margin: 0 0 10px;
    line-height: 1.6;
  }

  .actions {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    margin-top: 12px;
  }

  button.audio,
  .audio-inline,
  .ghost {
    border: none;
    cursor: pointer;
  }

  button.audio {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: #2f2416;
    color: #f7e6c4;
    font-weight: 700;
  }

  .audio-inline {
    background: none;
    color: #2f2416;
    font-weight: 700;
    padding: 6px 0 0;
  }

  .ghost {
    background: #f2e2c5;
    color: #2f2416;
    padding: 8px 14px;
    border-radius: 999px;
    font-weight: 600;
  }

  .toggle-translation.active-toggle {
    background: #2f2416;
    color: #f8e7c6;
  }

  .vocab-section .term {
    font-weight: 700;
    margin-right: 8px;
  }

  .translation {
    color: #6c5a44;
  }

  .vocab-view {
    display: grid;
    gap: 24px;
  }

  .vocab-header h2 {
    margin: 0 0 8px;
    font-family: 'Fraunces', 'Times New Roman', serif;
    font-size: 2rem;
  }

  .vocab-grid {
    display: grid;
    gap: 18px;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  }

  .vocab-card {
    background: rgba(255, 255, 255, 0.92);
    border-radius: 18px;
    padding: 16px;
    box-shadow: 0 12px 24px rgba(82, 57, 20, 0.12);
    display: grid;
    gap: 8px;
  }

  .vocab-term {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    font-weight: 700;
    font-size: 1.1rem;
  }

  .vocab-translation {
    margin: 0;
    color: #6c5a44;
  }

  .vocab-meta {
    margin: 0;
    font-size: 0.85rem;
    color: #a66c1f;
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  .vocab-context {
    margin: 0;
    font-size: 0.95rem;
    color: #2f2416;
  }

  @media (max-width: 900px) {
    .hero {
      grid-template-columns: 1fr;
    }

    .hero-card {
      order: -1;
    }
  }

  @media (max-width: 600px) {
    main {
      padding: 24px 16px 60px;
    }

    .chapter-header {
      flex-direction: column;
      align-items: flex-start;
    }

    .completed-toggle {
      align-self: flex-start;
    }
  }
</style>
