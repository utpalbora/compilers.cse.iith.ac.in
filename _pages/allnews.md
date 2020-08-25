---
title: "News"
layout: textlay
excerpt: "IIT Hyderabad."
sitemap: false
permalink: /news
---

# News
{% assign dates = site.data.news | group_by: "date" %}
{% assign dateSorted = dates | sort: "name" | reverse %}
{% for y in dateSorted %}
   {% assign sortedItems = y.items %}
   {% for article in sortedItems %}
   <p>({{ article.date }}) : {{article.status}}<br>
   <em>{{ article.headline }} {% if article.url != "" %} [<a href="{{ article.url}}">LINK</a>]{% endif %}</em></p>
   {% endfor %}
{% endfor %}
