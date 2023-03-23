---
title: "IITH Compilers Alumni"
layout: gridlay
excerpt: "IITH Compilers Alumni"
sitemap: false
permalink: /alumni/
---

# Alumni
## Doctoral Students
{% assign number_printed_phd = 0 %}
{% for member in site.data.alumni %}
{% if member.value == "phd" %} 


{% assign even_odd_phd = number_printed_phd | modulo: 2 %}
{% if even_odd_phd == 0 %}
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

{% assign number_printed_phd = number_printed_phd | plus: 1 %}

{% if even_odd_phd == 1 %}
</div>
{% endif %}
{% endif %} 
{% endfor %}


{% assign even_odd_phd = number_printed_phd | modulo: 2 %}
{% if even_odd_phd == 1 %}
</div>
{% endif %} 



<br/>


## Masters Students
{% assign number_printed_mtech = 0 %}
{% for member in site.data.alumni %}
{% if member.value == "mtech" %} 

{% assign even_odd_mtech = number_printed_mtech | modulo: 2 %}

{% if even_odd_mtech == 0 %}
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

{% assign number_printed_mtech = number_printed_mtech | plus: 1 %}
{% if even_odd_mtech == 1 %}
</div>
{% endif %}
{% endif %}
{% endfor %}



{% assign even_odd_mtech = number_printed_mtech | modulo: 2 %}
{% if even_odd_mtech == 1 %}
</div>
{% endif %}


<br/>








