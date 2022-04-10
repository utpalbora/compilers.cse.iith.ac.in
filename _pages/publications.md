---
title: "IITH Compilers Team - Publications"
layout: gridlay
excerpt: "IITH Compilers Team -- Publications."
sitemap: false
permalink: /publications/
---


# Publications


(For a full list see [below](#full-list) or go to [Google Scholar](https://scholar.google.ch/citations?user=3qZCtWYAAAAJ&hl=en){:target="_blank"}, [dblp](https://dblp.org/pers/hd/u/Upadrasta:Ramakrishna){:target="_blank"})

{% assign number_printed = 0 %}
{% for publi in site.data.publist %}

{% if publi.highlight == 1 %}
<div>
  <pubtit>{{ publi.title }}</pubtit>

  {% if publi.link %}
  <p style="margin:0;padding:0;border:0;">{% if publi.link.url!="" %}<strong><a href="{{ publi.link.url }}" target="_blank"><pubtit>{{ publi.title }}</pubtit>{{ publi.link.display }}</a> &nbsp; </strong>{% endif %}</p>
  {% endif %}  

  <p style="margin:0;padding:0;border:0;"><em>{{ publi.authors }}</em></p>
  <p style="margin:0;padding:0;border:0;"><em>{{ publi.publishedAt }}</em>,&nbsp;<em>{{ publi.year}}</em></p>
  {% if publi.award %}
  <p style="margin:0;padding:0;border:0;"><em><b>{{ publi.award.display }}</b></em></p>
  {% endif %}
  
 
</div>
{% endif %}
{% endfor %} 

<p> &nbsp; </p>


