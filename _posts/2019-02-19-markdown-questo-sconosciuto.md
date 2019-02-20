---
layout: post

header_image: /images/posts/markdown-questo-sconosciuto/header.jpg
title: "Markdown, questo sconosciuto"
author: Andrea Dottor
tags:
- DevLife
- Markdown
---

Con la volontà di ritornare a scrivere ho cercato nuovi stimoli/tecnologie, e nel mettere in piedi questo blog ho trovato alcune tematiche per i primi post.

Questo blog sfrutta [Jekyll](https://jekyllrb.com/) e [GitHub Pages](https://pages.github.com/), due tecnologie che lavorano assieme e permettono di convertire del testo scritto in *markdown* in pagine statiche (html) che vengono subito esposte nel web. E da qui nasce questo post.

### Markdown

Ho sempre sottovalutato questo linguaggio, in quanto lo associavo principalmente (ed in modo *super-mega-riduttivo*) ai soli file README di GitHub. Ma mi sono dovuto ricredere.
Studiandomi Jekyll, e la sintassi markdown, ho appreso un'estreme facilità nel creare html/post/pagine. Un linguaggio che ha delle potenzialità, e molto semplice ed immediato nel suo utilizzo.

Ho voluto capire da dove nascesse tutto cià.

### Da dove ha inizio

Markdown è nato nel 2004 da [John Gruber](https://en.wikipedia.org/wiki/John_Gruber), e (Aaron Swartz)[https://en.wikipedia.org/wiki/Aaron_Swartz] ha poi collaborato per quanto riguarda la sintassi. Lo scopo (e ben riuscito) era quello di creare un linguaggio che fosse facilmente convertibile in html.

### Una storia triste

Leggendo vari articoli, e cercando di capire meglio chi fossero i due autori, incappo nella storia di Aaron Swartz e rimango bloccato nel leggere che è nato a Chicago l'8 novembre 1986, ma (già) morto a New York l'11 gennaio 2013. Togliersi la vita a 27 anni ha dell'assurdo. Triste. Demoralizzante.

Spendete 5 minuti e leggete qui la sua vita: [https://it.wikipedia.org/wiki/Aaron_Swartz](https://it.wikipedia.org/wiki/Aaron_Swartz)

### La sintassi

Per muovere i primi passi, e scrivere un semplice post, non servono molte regole. I titoli (che vanno in html dal H1 al H6) si fanno inserendo ad inizio riga il carattere #. 

Se parte del testo la vogliamo in grassetto, la racchiudiamo tra due caratteri \*, o \_. Es: \*\*ciao\*\* --> **ciao**
Per il corsivo un \*, o un \_. Es: \*ciao\* --> *ciao*

#### Headers

    # H1
    ## H2
    ### H3
    #### H4
    ##### H5
    ###### H6

#### Emphasis

    Emphasis, aka italics, with *asterisks* or _underscores_.
    Strong emphasis, aka bold, with **asterisks** or __underscores__.
    Combined emphasis with **asterisks and _underscores_**.
    Strikethrough uses two tildes. ~~Scratch this.~~

Da qui a scrivere un post con immagini, tabelle, link, il passo è davvero breve. Nei link in coda al post trovate tutte le regole di sintassi che potete utilizzare. 

Non trovate il modo di fare *qualcosa* con la sua sintassi? Nessuna paura, è possibile inserire direttamente dei tag html all'interno del file, e questi verranno renderizzati così come inseriti. Quindi nessun limite a ciò che si può fare.

### Uitlità

Più uso *markdown* e più mi pento di non averlo conosciuto prima.

Dal prendere appunti durante una riunione, al scrivere post in questo blog, al scrivere i file readme.md in GitHub, trovo che markdown faciliti e velocizzi tutte queste attività.

Non è necessario un editor evoluto, ma un qualsiasi editor di testo è sufficiente allo scopo. Se poi ci mettete la sintassi colorata e qualche "aiuto" utilizzando [Visual Studio Code](https://code.visualstudio.com/), allora il tutto sarà ancora più facile e veloce.

### Link utili:

* [Markdown on Wikipedia](https://en.wikipedia.org/wiki/Markdown)
* [Markdown Syntax By JOHN GRUBER](https://daringfireball.net/projects/markdown/syntax)
* [Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
