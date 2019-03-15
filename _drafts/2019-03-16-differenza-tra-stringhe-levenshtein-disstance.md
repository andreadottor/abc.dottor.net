---
layout: post
header_image: /images/posts/directory-1161965_1920.jpg
title: "Differenza tra stringhe: Levenshtein distance"
author: Andrea Dottor
tags: [c#,Alexa]
---

Può capitare di dover capire quanto due stringhe sono simili, oppure trovare la stringa più *vicina* ad una inserita.

Un caso pratico?

Nell'era delle *interfacce vocali* come Alexa, Google Home, Cortana o Siri, ci troviamo di fronte al riconoscimento/traduzione dal parlato al scritto, e capita (molto spesso) che il riconoscimento non sia affidabile al 100%.
<!--more-->

Nel caso della skill che ho sviluppato per XE ([Alexa Skill: XE - Development User Group](https://www.amazon.it/Andrea-Dottor-XE-Development-Group/dp/B07M5LZLJ4)), nella versione in sviluppo (e che spero di pubblicare quanto prima) ho aggiunto la possibilità di chiedere quali siano le prossime sessioni di un determinato speaker, ma alcune volte (in fase di test) mi è capitato che il nome della persona che Alexa riconosce non fosse corretto (es Dottor in Dotor, Doctor, Dottore, ...), ed ecco che sono andato alla ricerca di una possibile soluzione.

Trovata! 

La **[Distanza di Levenshtein](https://it.wikipedia.org/wiki/Distanza_di_Levenshtein)** è un algoritmo che ritorna il numero di modifiche da dover fare ad un testo *X* per arrivare ad essere uguale al testo *Y*...permettendomi così di poter recuperare con facilità lo speaker che più si avvicina a quello che l'utente sta cercando (ed il tutto, con una semplice query linq).

```cs
var speakerFinded = (from ev in _events
                    from s in ev.Sessions
                    select new { 
                        s.SpeakerName, 
                        Distance = LevenshteinDistance.Compute(s.SpeakerName.ToLower(), speakerName.ToLower()) 
                    })
                    .Where(s => s.Distance <= 4)
                    .FirstOrDefault();
```

Riporto qui la classe **LevenshteinDistance** che ho trovato, e che potrebbe tornare utile anche a qualcuno di voi.

```cs
/// <summary>
/// Contains approximate string matching
/// </summary>
static class LevenshteinDistance
{
    /// <summary>
    /// Compute the distance between two strings.
    /// </summary>
    public static int Compute(string s, string t)
    {
        int n = s.Length;
        int m = t.Length;
        int[,] d = new int[n + 1, m + 1];

        // Step 1
        if (n == 0)
        {
            return m;
        }

        if (m == 0)
        {
            return n;
        }

        // Step 2
        for (int i = 0; i <= n; d[i, 0] = i++)
        {
        }

        for (int j = 0; j <= m; d[0, j] = j++)
        {
        }

        // Step 3
        for (int i = 1; i <= n; i++)
        {
            //Step 4
            for (int j = 1; j <= m; j++)
            {
                // Step 5
                int cost = (t[j - 1] == s[i - 1]) ? 0 : 1;

                // Step 6
                d[i, j] = Math.Min(
                    Math.Min(d[i - 1, j] + 1, d[i, j - 1] + 1),
                    d[i - 1, j - 1] + cost);
            }
        }
        // Step 7
        return d[n, m];
    }
}
```

Se avete trovato una soluzione migliore, beh, condividetemela qui nei commenti. Non capita spesso di risolvere questo genere di problematiche, quindi ogni suggerimento o miglioramento è ben accetto. ;-)

### Links

Per chi volesse approfondire, ecco alcuni link:

* [wikipedia: Distanza di Levenshtein](https://it.wikipedia.org/wiki/Distanza_di_Levenshtein)
* [stackoverflow: Find closest match to input string in a list of strings](https://stackoverflow.com/a/13793600)
* [codeproject: Fast, memory efficient Levenshtein algorithm](https://www.codeproject.com/Articles/13525/Fast-memory-efficient-Levenshtein-algorithm)
* [wikibooks: Algorithm Implementation/Strings/Levenshtein distance](https://en.wikibooks.org/wiki/Algorithm_Implementation/Strings/Levenshtein_distance)
* [The Levenshtein-Algorithm](http://www.levenshtein.net/)
* 