---
title: "IITH Compilers Team"
layout: gridlay
excerpt: "IITH Compilers Team members"
sitemap: false
permalink: /team/
---

# Team Members

 **We are  looking for new PhD students, Postdocs, and Master students to join the team** [(see openings)]({{ site.url }}{{ site.baseurl }}/vacancies) **.**


Jump to [Faculty](#faculty), [PhD Students](#phd-students), [Masters Students](#masters-students), [Alumni](#alumni).

## Faculty
{% assign number_printed = 0 %}
{% for member in site.data.team_members %}

{% assign even_odd = number_printed | modulo: 2 %}

{% if even_odd == 0 %}
<div class="row">
{% endif %}

{% if member.type == 'faculty' %}
<div class="col-sm-12 clearfix">
  <img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}" class="img-responsive" object-fit="scale-down" width="25%" height="auto" style="float: left" />
  <h4><a href="{{ member.url }}" target="_blank">{{ member.name }}</h4>
  <i>{{ member.info }}<br>{{ member.email }}</i>
  <ul style="overflow: hidden">
  
  {% if member.number_educ == 1 %}
  <li> {{ member.education1 }} </li>
  {% endif %}
  {% if member.number_educ == 2 %}
  <li> {{ member.education1 }} </li>
  <li> {{ member.education2 }} </li>
  {% endif %}
  
  {% if member.number_educ == 3 %}
  <li> {{ member.education1 }} </li>
  <li> {{ member.education2 }} </li>
  <li> {{ member.education3 }} </li>
  {% endif %}
  
  {% if member.number_educ == 4 %}
  <li> {{ member.education1 }} </li>
  <li> {{ member.education2 }} </li>
  <li> {{ member.education3 }} </li>
  <li> {{ member.education4 }} </li>
  {% endif %}
 
  {% if member.number_educ == 5 %}
  <li> {{ member.education1 }} </li>
  <li> {{ member.education2 }} </li>
  <li> {{ member.education3 }} </li>
  <li> {{ member.education4 }} </li>
  <li> {{ member.education5 }} </li>
  {% endif %}
  
  </ul>
</div>
{% endif %}

{% assign number_printed = number_printed | plus: 1 %}

{% if even_odd == 1 %}
</div>
{% endif %}

{% endfor %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if even_odd == 1 %}
</div>
{% endif %}

## PhD Students
{% assign number_printed = 0 %}
{% for member in site.data.team_members %}

{% assign even_odd = number_printed | modulo: 2 %}

{% if even_odd == 0 %}
<div class="row">
{% endif %}

{% if member.type == 'phd' %}
<div class="col-sm-6 clearfix">
  <img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}" class="img-responsive" object-fit="scale-down" width="25%" height="auto" style="float: left">
  {% if member.url.value == 1 %}
  <h4><a href="{{ member.url.link }}" target="_blank">{{ member.name }}</a></h4>
  <i>{{ member.info }}<br>{{ member.email }}<br><b>Research Interests:</b> {{ member.interests }}</i>
  {% endif %}

  {% if member.url.value == 0 %}
  <h4>{{ member.name }}</h4>
  <i>{{ member.info }}<br>{{ member.email }}<br><b>Research Interests:</b> {{ member.interests }}</i>
  {% endif %}

</div>
{% endif %}

{% assign number_printed = number_printed | plus: 1 %}

{% if even_odd == 1 %}
</div>
{% endif %}

{% endfor %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if even_odd == 1 %}
</div>
{% endif %}

## Masters Students
{% assign number_printed = 0 %}
{% for member in site.data.team_members %}

{% assign even_odd = number_printed | modulo: 2 %}

{% if even_odd == 0 %}
<div class="row">
{% endif %}

{% if member.type == 'mtech' %}
<div class="col-sm-6 clearfix">
  <img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}" class="img-responsive" object-fit="scale-down" width="25%" height="auto" style="float: left" />
  {% if member.url.value == 1 %}
  <h4><a href="{{ member.url.link }}" target="_blank">{{ member.name }}</a></h4>
  <i>{{ member.info }}<br>{{ member.email }}<br><b>Research Interests:</b> {{ member.interests }}</i>
  {% endif %}

  {% if member.url.value == 0 %}
  <h4>{{ member.name }}</h4>
  <i>{{ member.info }}<br>{{ member.email }}<br><b>Research Interests:</b> {{ member.interests }}</i>
  {% endif %}
</div>
{% endif %}

{% assign number_printed = number_printed | plus: 1 %}

{% if even_odd == 1 %}
</div>
{% endif %}

{% endfor %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if even_odd == 1 %}
</div>
{% endif %}

## Alumni
{% assign number_printed = 0 %}
{% for member in site.data.team_members %}

{% assign even_odd = number_printed | modulo: 2 %}

{% if even_odd == 0 %}
<div class="col">
{% endif %}

{% if member.type == 'alum' %}
<div class="col-md-4">
  <h4>{{ member.name }}</h4>
  <i>{{ member.info }}</i>
</div>
{% endif %}

{% assign number_printed = number_printed | plus: 1 %}

{% if even_odd == 1 %}
</div>
{% endif %}

{% endfor %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if even_odd == 1 %}
</div>
{% endif %}







