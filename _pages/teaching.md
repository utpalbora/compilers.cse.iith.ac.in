---
title: "Teaching"
layout: textlay
excerpt: "Teaching at IIT Hyderabad."
sitemap: false
permalink: /teaching/
---

# Teaching

{% assign years = site.data.courselist | group_by: "year" %}
{% assign yearsSorted = years | sort: "name" | reverse %}
{% for y in yearsSorted %}
  <h2 id="{{ y.name }}" > {{ y.name }} </h2>
  {% assign yearCodeSorted = y.items | sort: "code" | reverse %}
  {% for course in yearCodeSorted %}
  <b>Course:</b> <em>{{ course.code }} </em>  :  {{ course.title }} <br />
  <b>Semester:</b> {{ course.semester }}, {{ course.year }}, Segment:  {{ course.segment }}  <br />
  <b>Description:</b> <span align="justify"><em>{{ course.description }} </em></span> <br />
  <a target="_blank" href="{{ course.link.url }}">{{ course.link.display }}</a>
  {% endfor %}
{% endfor %}
