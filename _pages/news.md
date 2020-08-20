---
title: "News"
layout: textlay
excerpt: "News at IIT Hyderabad."
sitemap: false
permalink: /news/
---

# News

{% assign years = site.data.publist | group_by: "year" %}
{% assign yearsSorted = years | sort: "name" | reverse %}
{% for y in yearsSorted %}
  <h2 id="{{ y.name }}" > {{ y.name }} </h2>
  {% assign yearCodeSorted = y.items | sort: "code" | reverse %}
  {% for pub in yearCodeSorted %}
  <b>:Paper Title:</b> {{ pub.title }} <br />
  <b>Authors:</b> {{ pub.authors }}  <br />
  <b>Description:</b> <span align="justify"><em>{{ pub.description }} </em></span> <br />
  <a target="_blank" href="{{ course.link.url }}">{{ course.link.display }}</a>
  {% endfor %}
{% endfor %}
