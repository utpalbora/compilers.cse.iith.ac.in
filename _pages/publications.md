---
title: 'IITH Compilers Team - Publications'
layout: gridlay
excerpt: 'IITH Compilers Team -- Publications.'
sitemap: false
permalink: /publications/
---

# Publications

(For a full list see [below](#full-list) or go to [Google Scholar](https://scholar.google.ch/citations?user=3qZCtWYAAAAJ&hl=en){:target="\_blank"}, [dblp](https://dblp.org/pers/hd/u/Upadrasta:Ramakrishna){:target="\_blank"})

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

.modal {
    display: none;
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.7);
}

.modal-content {
    position: absolute;
    top: 15%;
    left: 50%;
    transform: translate(-50%, -15%);
    background-color: #fff;
    padding: 20px;
    border: 1px solid #888;
    width: 50%;
    color: rgb(51, 51, 51);
    font-family: monospace;
}

.closeCitationButton {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;
}

.closeCitationButton:hover {
    color: black;
    text-decoration: none;
    cursor: pointer;
}

.citationBox{
    margin-top: 20px;
    padding: 10px;
    height: 300px;
    overflow: auto;
    background-color: #eee;
    font-size: 18px;
    overflow-wrap: break-word;
    white-space: normal;
    display: none;
}

.dropdown {
    padding: 10px 10px;
    margin: 10px 0;
    width: 20%;
}

.copyButton {
    background-color: #3498db; /* Premium blue color */
    color: #fff; /* White text color */
    padding: 8px 15px; /* Smaller padding for a more compact size */
    border: none;
    border-radius: 3px; /* Slightly rounded corners */
    cursor: pointer;
    font-size: 14px; /* Adjust font size for a smaller button */
    position: absolute;
    bottom: 10px;
    right: 10px;
    transition: background-color 0.3s ease; /* Smooth transition on hover */
}

.copyButton:hover {
    background-color: #2980b9; /* Darker blue on hover for a subtle effect */
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
  <p style="margin:0;padding:0;border:0;font-size:large;">{% if publi.project==1 %} <strong><a href="{{site.url}}{{site.baseurl}}/projects/{{publi.shortname}}" target="_blank">{{ publi.title }}</a> &nbsp; </strong>{% elsif publi.publication==1 %}<strong><a href="{{site.url}}{{site.baseurl}}/publications/{{publi.shortname}}" target="_blank">{{ publi.title }}</a> &nbsp; </strong>
   {% endif %}</p>
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
  <p style="margin:0;padding:0;border:0;padding-bottom:3px;"><em>{{ publi.authors }}</em></p>   
  </div>
  
  <div style="display:inline;" >
  <nobr>
  {% if publi.github_link != "" %}
  <a class=badge href="{{publi.github_link}}">Code</a>&nbsp;&nbsp;&nbsp;&nbsp; 
  {% endif %}
  <!-- {% if publi.citation != "" %}
  <a class=badge href="{{publi.citation}}">Cite</a>&nbsp;&nbsp;&nbsp;&nbsp;
  {% endif %} -->
  {% if publi.paper_link != "" %}
  <a class=badge href="{{publi.paper_link}}">Paper</a>&nbsp;&nbsp;&nbsp;&nbsp;
  {% endif %}
  {% if publi.poster_link !="" %}
  <a class=badge href="{{publi.poster_link}}">Poster</a>&nbsp;&nbsp;&nbsp;&nbsp; 
  {% endif %}
  {% if publi.slides_link != "" %}
  <a class=badge href="{{publi.slides_link}}">Slides</a>&nbsp;&nbsp;&nbsp;&nbsp;
  {% endif %}
  {% if publi.videos_link != "" %}
  <a class=badge href="{{publi.videos_link}}">Video</a>&nbsp;&nbsp;&nbsp;&nbsp;
  {% endif %}
  {% if publi.arxiv_link != "" %}
  <a class=badge href="{{publi.arxiv_link}}">arXiv</a>&nbsp;&nbsp;&nbsp;&nbsp;
  {% endif %}

  {% if publi.authors != ""%}
  <script>
  document.addEventListener('DOMContentLoaded', function() {
    var openCitationButton = document.getElementById('openCitationButton_{{publi.shortname}}');
    console.log(openCitationButton)
    var closeCitationButton = document.getElementById('closeCitationButton_{{publi.shortname}}');
    var citationPopup = document.getElementById('modal_{{publi.shortname}}');
    var dropdown = document.getElementById('dropdown_{{publi.shortname}}');
    var citation_type = dropdown.value;
    var citation_bibtex = document.getElementById('bibtex_{{publi.shortname}}');
    var citation_acmref = document.getElementById('acmref_{{publi.shortname}}');
    citation_bibtex.style.display = 'block';

    openCitationButton.addEventListener('click', function() {
        citationPopup.style.display = 'block';
    });

    closeCitationButton.addEventListener('click', function() {
        citationPopup.style.display = 'none';
    });

    dropdown.addEventListener('change', function() {
            console.log('here')
        citation_type = dropdown.value;
        if(citation_type == 'bibtex') {
            citation_bibtex.style.display = 'block';
            citation_acmref.style.display = 'none';
        } else if(citation_type == 'acmref') {
            citation_bibtex.style.display = 'none';
            citation_acmref.style.display = 'block';
        }
    });

});

  </script>

<script>
  function copyToClipboard(elementId) {
    var copyText = document.getElementById(elementId).innerText;
    var textArea = document.createElement("textarea");
    textArea.value = copyText;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    alert('Citation copied to clipboard!');
  }
</script>

<button class="badge openCitationButton" id="openCitationButton_{{publi.shortname}}">Cite</button>

  <div id="modal_{{publi.shortname}}" class="modal">
      <div class="modal-content">
          <span class="closeCitationButton" id="closeCitationButton_{{publi.shortname}}">&times;</span>
          <h3 style="color:#222;font-weight: bold;"> Export Citations </h3>
          <select class="dropdown" id="dropdown_{{publi.shortname}}">
              <option value="bibtex">BibTeX</option>
              <option value="acmref">ACM Ref</option>
          </select>
          <div class="citationBox" id="bibtex_{{publi.shortname}}">
            author = { {{publi.authors}} },<br>
            title = { {{publi.title}} },<br>
            year = { {{publi.year}} },<br>
            {% if publi.paper_link != "" %}
            url = { {{publi.paper_link}} },<br>
            {% else %}
            url = { {{publi.arxiv_link}} },<br>
            {% endif %}
            series = { {{publi.publishedAt}} {{publi.year}} }
            <button class="copyButton" onclick="copyToClipboard('bibtex_{{publi.shortname}}')">Copy</button>
          </div>
          <div class="citationBox" id="acmref_{{publi.shortname}}">
            {{publi.authors}}.
            {{publi.year}}.
            {{publi.title}}.
            {{publi.publishedAt}}.
            {% if publi.paper_link != "" %}
            {{publi.paper_link}}.
            {% else %}
            {{publi.arxiv_link}}.
            {% endif %}
            <button class="copyButton" onclick="copyToClipboard('bibtex_{{publi.shortname}}')">Copy</button>
          </div>
      </div>

  </div>
{% endif %}
</nobr>

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
