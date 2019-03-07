---
layout: default
title: Archive
permalink: /archive/posts/
---

<div class="home-content">
  <h2 class="page-heading"><i class="fas fa-archive"></i> Posts Archive</h2>
<hr />
  {% for post in site.posts %}
  {% assign currentdate = post.date | date: "%B %Y" %}
    {% if currentdate != date %}
      {% unless forloop.first %}</ul>{% endunless %}
        <h3 id="y{{post.date | date: "%B %Y"}}">{{ currentdate }}</h3>
        <ul class="post-list list-unstyled">
          {% assign date = currentdate %}
    {% endif %}
      <li>
        <i class="fas fa-angle-right"></i>
        {%- assign date_format = "%-d %b" %}
        {{ post.date | date: date_format }} - 
        <a class="muted-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
      </li>
    {% if forloop.last %}
    </ul>
    {% endif %}
  {% endfor %}

</div>