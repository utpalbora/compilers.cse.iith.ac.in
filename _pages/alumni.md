---
title: "IITH Compilers Team"
layout: gridlay
excerpt: "IITH Compilers Team members"
sitemap: false
permalink: /alumni/
---

# Alumni Members

 **We are  looking for new PhD students, Postdocs, and Master students to join the team** [(see openings)]({{ site.url }}{{ site.baseurl }}/vacancies) **.**



## Alumni
{% assign number_printed = 0 %}
{% for member in site.data.alumni_members %}

{% assign even_odd = number_printed | modulo: 2 %}

{% if even_odd == 0 %}
<div class="col">
{% endif %}

<div class="col-md-4">
  <h4>{{ member.name }}</h4>
  <i>{{ member.info }}</i>
  <i>{{ member.affiliation }}</i>
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






