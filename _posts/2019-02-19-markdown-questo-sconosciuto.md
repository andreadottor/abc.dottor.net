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

Ho voluto approfondire un pò la cosa per capire chi ci fosse dietro a questo linguaggio, e quale fosse lo scopo.

### Da dove ha inizio

Markdown nasce nel 2004 da un'idea di [John Gruber](https://en.wikipedia.org/wiki/John_Gruber), e [Aaron Swartz](https://en.wikipedia.org/wiki/Aaron_Swartz) ha poi collaborato per quanto riguarda la sintassi. Lo scopo (e ben riuscito) era quello di creare un linguaggio che fosse facilmente convertibile in html.

### Una storia triste

Leggendo vari articoli, e cercando di capire meglio chi fossero i due autori, incappo nella storia di Aaron Swartz e rimango sconvolto dall sua storia. Nato a Chicago l'8 novembre 1986, morto a New York l'11 gennaio 2013. Si è tolto la vita. Aveva 27 anni. Troppe cose sulle spalle. La depressione. E sono triste. Demoralizzato.

Spendete 5 minuti e leggete qui la sua vita: [https://it.wikipedia.org/wiki/Aaron_Swartz](https://it.wikipedia.org/wiki/Aaron_Swartz)

### La sintassi

Per muovere i primi passi, e scrivere un semplice post, non servono molte regole. I titoli (che vanno in html dal H1 al H6) si fanno inserendo ad inizio riga il carattere #. 

Se parte del testo la vogliamo in grassetto, lo racchiudiamo tra due caratteri **\*** (oppure **\_**). Es: \*\*ciao\*\* --> **ciao**

Per il corsivo un carattere **\*** (oppure **\_**). Es: \*ciao\* --> *ciao*

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

Da qui a scrivere un post con immagini, tabelle, link, il passo è davvero breve. Nei link in coda al post trovate tutte le regole di sintassi che si possono utilizzare. 

Non trovate il modo di fare *qualcosa* con la sua sintassi? Nessuna paura, è possibile inserire direttamente dei tag html all'interno del file, e questi verranno renderizzati così come inseriti. Quindi nessun limite a ciò che si può fare.

### Uitlità

Più uso la sintassi *markdown* e più mi pento di non averla conosciuta prima. Se la aggiungessero su OneNote sarei davvero alle stelle :-) 

Dal prendere appunti durante una riunione, al scrivere post in questo blog, al scrivere i file readme.md in GitHub, trovo che markdown faciliti e velocizzi tutte queste attività.

Non è necessario un editor evoluto, ma un qualsiasi editor di testo è sufficiente allo scopo. Se poi ci mettete la sintassi colorata e qualche "aiuto" utilizzando [Visual Studio Code](https://code.visualstudio.com/), allora il tutto sarà ancora più facile e veloce.

### Link utili:

* [Markdown on Wikipedia](https://en.wikipedia.org/wiki/Markdown)
* [Markdown Syntax By JOHN GRUBER](https://daringfireball.net/projects/markdown/syntax)
* [Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
