---
title: "IITH Compilers Alumni"
layout: gridlay
excerpt: "IITH Compilers Alumni"
sitemap: false
permalink: /alumni/
---

# Alumni

## Masters Students
{% assign number_printed = 0 %}
{% for member in site.data.alumni %}

{% assign even_odd = number_printed | modulo: 2 %}

{% if even_odd == 0 %}
<div class="row">
{% endif %}

<div class="col-sm-6 clearfix">
  <img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}" class="img-responsive" object-fit="scale-down" width="25%" height="auto" style="float: left">
  <h4>{{ member.name }}</h4>
  <p class="right">
  <i>{{ member.info }}</i>
  {% if member.thesis_link %}
  Thesis: <a href="{{ member.thesis_link }}" target="_blank">{{ member.thesis }}</a>
  {% else %}
  Thesis: {{ member.thesis }}
  {% endif %}
  <i>Next: {{ member.next }}</i>
  </p>
</div>

{% assign number_printed = number_printed | plus: 1 %}

{% if even_odd == 1 %}
</div>
{% endif %}

{% endfor %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if even_odd == 1 %}
</div>
{% endif %}

<br/>






