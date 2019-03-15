---
layout: post
header_image: /images/posts/pencils-452238_1280.jpg
header_image_credits: Image by <a href="https://pixabay.com/users/InspiredImages-57296/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=452238">InspiredImages</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=452238">Pixabay</a>
title: "Eseguire il crop di un'immagine da CSS"
author: Andrea Dottor
tags: [CSS]
---

Le potenzialità che offrono i fogli di stile sono davvero molte, e non si finisce mai di imparare.

Problematica del giorno, trovare il modo di tagliare (fare il crop) dell'immagine che trovate qui sopra al post, ma in modo automatico, senza che debba aprire Photoshop, Paint o altri applicativi. E mi sono messo alla [ricerca](https://www.google.com).
<!--more-->

Soluzione trovata!

Tramite lo stile **object-fit** è possibile indicare come l'immagine si deve adattare al tag **img**.

## object-fit:

The object-fit CSS property sets how the content of a replaced element, such as an &lt;img&gt; or &lt;video&gt;, should be resized to fit its container.

#### Syntax
The object-fit property is specified as a single keyword chosen from the list of values below.

#### Values: 

* **contain**: The replaced content is scaled to maintain its aspect ratio while fitting within the element’s content box. The entire object is made to fill >the box, while preserving its aspect ratio, so the object will be "letterboxed" if its aspect ratio does not match the aspect ratio of the box.
* **cover**: The replaced content is sized to maintain its aspect ratio while filling the element’s entire content box. If the object's aspect ratio does >not match the aspect ratio of its box, then the object will be clipped to fit.
* **fill**: The replaced content is sized to fill the element’s content box. The entire object will completely fill the box. If the object's aspect ratio >does not match the aspect ratio of its box, then the object will be stretched to fit.
* **none**: The replaced content is not resized.
* **scale-down**: The content is sized as if none or contain were specified, whichever would result in a smaller concrete object size.

ATTENZIONE alla compatibilità con i vari browser: [Browser_compatibility](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit#Browser_compatibility) ...non funziona con Internet Explorer.

Ecco lo stile che ho utilizzato in questo blog:

```css
.post-header img {
    border-radius: 5px;
    object-fit: cover;
    height: 300px;
    width: 100%;
    display: block;
}
```

### Links:

* [w3schools: CSS The object-fit Property](https://www.w3schools.com/css/css3_object-fit.asp)
* [MDN web docs: object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit)
* [W3C: CSS Image Values and Replaced Content Module Level 3](https://www.w3.org/TR/css3-images/)
* [css-tricks: object-fit](https://css-tricks.com/almanac/properties/o/object-fit/)
