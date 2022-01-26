---
title: "IITH Compilers Alumni"
layout: gridlay
excerpt: "IITH Compilers Alumni"
sitemap: false
permalink: /alumni/
---

# Alumni
{% assign number_printed = 0 %}
{% for member in site.data.alumni %}

{% assign even_odd = number_printed | modulo: 2 %}

{% if even_odd == 0 %}
<div class="col">
{% endif %}

<!-- <div class="col-sm-6 clearfix">
  <img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}" class="img-responsive" object-fit="scale-down" width="25%" height="auto" style="float: left"> -->
<div class="col-md-4">
  <h4>{{ member.name }}</h4>
  <i>{{ member.info }}</i>
  <i>{{ member.next }}</i>
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






