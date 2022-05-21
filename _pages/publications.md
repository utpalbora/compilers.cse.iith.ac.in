---
title: "IITH Compilers Team - Publications"
layout: gridlay
excerpt: "IITH Compilers Team -- Publications."
sitemap: false
permalink: /publications/
---


# Publications


(For a full list see [below](#full-list) or go to [Google Scholar](https://scholar.google.ch/citations?user=3qZCtWYAAAAJ&hl=en){:target="_blank"}, [dblp](https://dblp.org/pers/hd/u/Upadrasta:Ramakrishna){:target="_blank"})

{% assign number_printed = 0 %}
{% for publi in site.data.publist %}

{% if publi.highlight == 1 %}

<div style="position:relative; top:10px;">  
  <pubtit>{{ publi.title }}</pubtit>  
  
  <div style="float:left; width:80%;position:relative; top:2px;">
  
  
  {% if publi.link %}
  
  <div style="float:left; width:auto;display:flex;">    
  <p style="margin:0;padding:0;border:0;">{% if publi.link.url!="" %}<strong><a href="{{ publi.link.url }}" target="_blank"><pubtit>{{ publi.title }}</pubtit>{{ publi.link.display }}</a> &nbsp; </strong>{% endif %}</p>
  {% if publi.award %} 
  {% assign aw=publi.award.display %} 

  <div class="trophyimage">
  <img src="/images/trophy.jpeg" alt="Trophy" style="height:20px;">
  </div>

 {% endif %} 
  </div>
  <div>
  
  <br>
  <p style="margin:0;padding:0;border:0;"><em>{{ publi.authors }}</em></p>    
</div>
    
 {% endif %}
  
  </div>

  <div style="float:left; width:20%;position:relative; top:-18px;">
  <p style="margin:20px;padding:0;border:0;"><em>{{ publi.publishedAt }}</em> <br> <em>{{ publi.year}}</em></p>
  </div>
  
 
</div>
{% endif %}

{% endfor %} 

<p> &nbsp; </p> 


