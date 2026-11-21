# abc.dottor.net

Blog personale di Andrea Dottor su sviluppo .NET, architettura software e lavoro nei team tecnici. Il sito usa Jekyll e GitHub Pages ed è pubblicato su [abc.dottor.net](https://abc.dottor.net).

## Anteprima locale

Servono Ruby con RubyGems e Bundler. Ruby 3.3 è la versione verificata per lo sviluppo locale. Il Gemfile usa la gemma `github-pages` per allineare Jekyll e i plugin alla piattaforma.

```sh
gem install bundler
bundle install
bundle exec jekyll serve
```

Apri `http://localhost:4000`. Per includere le bozze, avvia `bundle exec jekyll serve --drafts`.

## Articoli e struttura

- Pubblica gli articoli in `_posts/AAAA-MM-GG-titolo.md` con il front matter `layout: post` e `title`. Metti le bozze in `_drafts/titolo.md`.
- Usa `<!--more-->` per terminare l’estratto della homepage. Per l’anteprima Open Graph, `header_image` serve da fallback se `og_image` è assente. Inserisci diagrammi e screenshot nel corpo dell’articolo con la sintassi Markdown.
- `index.html` contiene il titolo e l’introduzione della homepage. `_layouts/` e `_includes/` contengono i template, `assets/css/style.scss` gli stili e `_config.yml` la configurazione Jekyll. Conserva i permalink già pubblicati.

## Build e pubblicazione

```sh
JEKYLL_ENV=production bundle exec jekyll build
```

Controlla in `_site/` il rendering, i link interni e la presenza di `feed.xml` e `sitemap.xml`. La modalità production include il comando per caricare Disqus negli articoli che abilitano i commenti.

GitHub Pages costruisce il sito da `master` con la pipeline già configurata. Il file `CNAME` indica il dominio personalizzato. Proponi le modifiche tramite pull request.
