---
layout: default
title: Archivio
permalink: /archive/posts/
---

<div class="reading-column">
  <header class="article-header">
    <h1>Archivio</h1>
    <p class="intro-lead">Tutti gli articoli, dal più recente.</p>
  </header>
  {% assign years = site.posts | group_by_exp: "post", "post.date | date: '%Y'" %}
  {% for year in years %}
  <section class="archive-year" aria-labelledby="anno-{{ year.name }}">
    <h2 id="anno-{{ year.name }}">{{ year.name }}</h2>
    <ul>
      {% for post in year.items %}
      <li>
        <span class="post-meta">{% include date.html date=post.date omit_year=true %}</span>
        <a href="{{ post.url | relative_url }}">{{ post.title | escape }}</a>
      </li>
      {% endfor %}
    </ul>
  </section>
  {% endfor %}
</div>
