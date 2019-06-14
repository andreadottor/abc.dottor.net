---
layout: post
header_image: /images/posts/building-blocks-1563961_1280.jpg
header_image_credits: Image by <a href="https://pixabay.com/users/Thaliesin-2168464/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1563961">Thaliesin</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1563961">Pixabay</a>
title: "Definire del contenuto di default nelle sezioni di un layout Razor"
author: Andrea Dottor
tags: [ASP.NET,Razor]
---

In un'applicazione ASP&#46;NET Core vi potrà capitare la necessità di avere una porzione di codice html che dovrà essere differente solo in alcune pagine. Un esempio, l'area di amministrazione molto spesso ha un menu diverso dalle pagine pubbliche. Oppure una pagina potrebbe evare una sidebar con alcune immagini al posto del classico menu.

Se già utilizzate ASP&#46;NET Core, sapete benissimo che nel definire una sezione in una pagina di layout, è possibile indicare se questa sia obbligatoria o meno:

```cs
@RenderSection("Scripts", required: false)
```
<!--more-->
Ma questo implica che:
- **required: true** --> tutte le pagine devono definire tale contenuto. Quindi anche il contenuto di default deve essere definito in ogni singola pagina (o centralizzato in una partial, comunque inserita in ogni pagina)
- **required: false** --> alcune pagine definiscono il contenuto della sezione. Vuol dire che quella sezione potrà essere renderizzata o meno. Ma non avrà un contenuto di dafault dove non definita.

Esiste invece una terza strada, ma meno conosciuta.

## Uso di IsSectionDefined

All'interno delle pagine Razor (sia View di MVC, sia Razor Pages) è presente il metodo **IsSectionDefined** che permette di capire se una sezione è stata ridefinita o meno, permettendo di scrivere del codice simile al seguente:

```html
<ul class="navbar-nav flex-grow-1">
    @if (IsSectionDefined(name: "Menu"))
    {
        @RenderSection(name: "Menu")
    }
    else
    {
        <li class="nav-item">
            <a class="nav-link text-dark" asp-area="" asp-page="/Index">Home</a>
        </li>
        <li class="nav-item">
            <a class="nav-link text-dark" asp-area="" asp-page="/Privacy">Privacy</a>
        </li>
    }
</ul>
```

Ecco quindi il vantaggio di questa tecnica: centralizzare il rendering di default in un unico punto, facilitando quindi la manutenzione.


Links:
- [Layout in ASP.NET Core](https://docs.microsoft.com/en-us/aspnet/core/mvc/views/layout?view=aspnetcore-2.2)
- [Defining Default Content For A Razor Layout Section](https://haacked.com/archive/2011/03/05/defining-default-content-for-a-razor-layout-section.aspx/)
