---
title: "News"
layout: textlay
excerpt: "IIT Hyderabad."
sitemap: false
permalink: /news/
---

# News
{% assign dates = site.data.news | group_by: "date" %}
{% assign dateSorted = dates | sort: "name" | reverse %}
{% for y in dateSorted %}
   {% assign sortedItems = y.items %}
   {% for article in sortedItems %}
   <p>({{ article.date }}) : <b>{{article.status}}</b><br>
   <em>{{ article.headline }}</em> {% if article.url != "" %} [<a href="{{ article.url}}" target="_blank">LINK</a>]{% endif %}</p>
   {% endfor %}
{% endfor %}
