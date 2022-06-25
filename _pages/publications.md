---
title: "IITH Compilers Team - Publications"
layout: gridlay
excerpt: "IITH Compilers Team -- Publications."
sitemap: false
permalink: /publications/
---


# Publications


(For a full list see [below](#full-list) or go to [Google Scholar](https://scholar.google.ch/citations?user=3qZCtWYAAAAJ&hl=en){:target="_blank"}, [dblp](https://dblp.org/pers/hd/u/Upadrasta:Ramakrishna){:target="_blank"})

<style>
  .trophyimage {
    position: relative;
    top: -13px;
    height: 20px;
}

.trophyimage:hover:after {   
    position: relative;
    content: var(--content,"");
    display: inline-block;
    left: 24px;
    top: -40px;    
    background-color: rgba(241, 242, 179, 0.985);
    color: red;
    width: auto;
    
}
</style>

{% assign number_printed = 0 %}
{% for publi in site.data.publist %}

{% if publi.highlight == 1 %}

<div style="position:relative; top:10px;">  
    
  
  <div style="float:left; width:80%;position:relative; top:2px;">
  
  
  {% if publi.shortname %}
  
  <div style="width:auto;display:flex;">
  {% if publi.shortname !="" %}    
  <p style="margin:0;padding:0;border:0;font-size:large;">{% if publi.project==1 %} <strong><a href="{{site.url}}{{site.baseurl}}/projects/{{publi.shortname}}" target="_blank">{{ publi.title }}</a> &nbsp; </strong>{% elsif publi.publication==1 %}<strong><a href="{{site.url}}{{site.baseurl}}/publications/{{publi.shortname }}" target="_blank">{{ publi.title }}</a> &nbsp; </strong> {% endif %}</p>
  {% else %}
  <p style="margin:0;padding:0;border:0;font-size:large;"><strong>{{ publi.title }}</strong></p>
  {% endif %}

  {% if publi.award %}   
  {% assign aw=publi.award.title %} 
  <div class="trophyimage" style="--content:'{{aw}}';">
  <img src="/images/trophy.jpeg" alt="Trophy" style="height:20px;">  
  </div> 
  <script> 
  var a='{{aw}}';
  console.log(a); 
    document.querySelectorAll('trophyimage')[1].style.setProperty("--content", a);
  </script>
 {% endif %} 
  </div>

  <div>  
  <p style="margin:0;padding:0;border:0;"><em>{{ publi.authors }}</em></p>    
</div>
  <div style="margin-top:25px;">
  <p></p>
  </div>
  </div>

  <div style="float:left; width:20%;position:relative; top:-15px;">
  <p style="margin:20px;padding:0;border:0;font-weight:bold;text-align:right; color:grey"><em>{{ publi.publishedAt }}</em>  <em>'{{publi.year| slice: 2,4 }}</em></p>
  </div>
  
 
</div>
{% endif %}
{% endif %}

{% endfor %} 

<p> &nbsp; </p> 


