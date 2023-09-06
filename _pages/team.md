---
title: "IITH Compilers Team"
layout: gridlay
excerpt: "IITH Compilers Team members"
sitemap: false
permalink: /team/
---

# Team Members

 **We are  looking for new PhD students, Postdocs, and Master students to join the team** [(see openings)]({{ site.url }}{{ site.baseurl }}/openings) **.**


Jump to [Faculty](#faculty), [PhD Students](#phd-students), [Masters Students](#masters-students), [Alumni]({{ site.url }}{{ site.baseurl }}/alumni).

## Faculty
{% for member in site.data.team_members %}

{% if member.type == 'faculty' %}
<div class="row">
<div class="col-sm-12 clearfix">
  <img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}" class="img-responsive" object-fit="scale-down" width="25%" height="auto" style="float: left" />
  <h4><a href="{{ member.url }}" target="_blank">{{ member.name }}</h4>

  <p class="right">
  <i>{{ member.info }}<br>{{ member.email }}</i>
  </p>
  <ul style="overflow: hidden">
  
  {% if member.number_educ == 1 %}
  <p class="right">
  <li> {{ member.education1 }} </li>
  </p>
  {% endif %}
  
  {% if member.number_educ == 2 %}
  <p class="right">
  <li> {{ member.education1 }} </li>
  <li> {{ member.education2 }} </li>
  </p>
  {% endif %}
  
  {% if member.number_educ == 3 %}
  <p class="right">
  <li> {{ member.education1 }} </li>
  <li> {{ member.education2 }} </li>
  <li> {{ member.education3 }} </li>
  </p>
  {% endif %}
  
  {% if member.number_educ == 4 %}
  <p class="right">
  <li> {{ member.education1 }} </li>
  <li> {{ member.education2 }} </li>
  <li> {{ member.education3 }} </li>
  <li> {{ member.education4 }} </li>
  </p>
  {% endif %}
 
  {% if member.number_educ == 5 %}
  <p class="right">
  <li> {{ member.education1 }} </li>
  <li> {{ member.education2 }} </li>
  <li> {{ member.education3 }} </li>
  <li> {{ member.education4 }} </li>
  <li> {{ member.education5 }} </li>
  </p>
  {% endif %}
  
  </ul>


</div>
</div>
{% endif %}
{% endfor %}

<br/>
## PhD Students

{% assign number_printed = 0 %}
{% for member in site.data.team_members %}
{% if member.type == 'phd' %}

{% assign even_odd = number_printed | modulo: 2 %}

{% if even_odd == 0 %}
<div class="row">
{% endif %}

<div class="col-sm-6 clearfix">
  <img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}" class="img-responsive" object-fit="scale-down" width="25%" height="auto" style="float: left">
  {% if member.url.value == 1 %}
  <h4><a href="{{ member.url.link }}" target="_blank">{{ member.name }}</a></h4>
  
  <p class="right">
  <i>{{ member.info }}<br>{{ member.email }}<br><b>Research Interests:</b> {{ member.interests }}</i>
  </p>
  {% endif %}

  {% if member.url.value == 0 %}
  <h4>{{ member.name }}</h4>
  <p class="right">
  <i>{{ member.info }}<br>{{ member.email }}<br><b>Research Interests:</b> {{ member.interests }}</i>
  </p>
  {% endif %}
  
</div>

{% assign number_printed = number_printed | plus: 1 %}

{% if even_odd == 1 %}
</div>
{% endif %}

{% endif %}

{% endfor %}
{% if  number_printed !=0  %}
{% if  even_odd ==0  %}
</div>
{% endif %}
{% endif %}

<br/>

## Masters Students
{% assign number_printed = 0 %}
{% for member in site.data.team_members %}
{% if member.type == 'mtech' %}

{% assign even_odd = number_printed | modulo: 2 %}

{% if even_odd == 0 %}
<div class="row">
{% endif %}

<div class="col-sm-6 clearfix">
  <img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}" class="img-responsive" object-fit="cover" width="25%" height="25%" style="float: left">
  {% if member.url.value == 1 %}
  <h4><a href="{{ member.url.link }}" target="_blank">{{ member.name }}</a></h4>
  <p class="right">
  <i>{{ member.info }}<br>{{ member.email }}<br><b>Research Interests:</b> {{ member.interests }}</i>
  </p>
  {% endif %}

  {% if member.url.value == 0 %}
  <h4>{{ member.name }}</h4>
  <p class="right">
  <i>{{ member.info }}<br>{{ member.email }}<br><b>Research Interests:</b> {{ member.interests }}</i>
  </p>
  {% endif %}

</div>

{% assign number_printed = number_printed | plus: 1 %}

{% if even_odd == 1 %}
</div>
{% endif %}

{% endif %}

{% endfor %}

{% if  number_printed !=0  %}
{% if  even_odd ==0  %}
</div>
{% endif %}
{% endif %}

<!--
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
  <i>{{ member.affiliation }}</i>
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
-->

<br/>





