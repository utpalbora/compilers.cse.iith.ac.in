---
title: "Research Domains"
layout: textlay
excerpt: "IITH Compilers Team -- Research"
sitemap: false
permalink: /research/
---
<style>
.dp-img {
     margin-bottom: 0px; 
     margin-top: 0px; 
     border-radius: 0%; 
}

.dp {
	outline: 0;
        cursor: pointer
}
</style>

## Research Domains
Our broad research is in Programming Languages and Compilers. More specifically, following are the research areas we are currently working on.

### Static analysis and Program Optimizations
* Compile time program analysis is indispensable for both program optimization as well as program verification.
* Detecting bugs at compile time reduces the risk of runtime failures, which can be fatal for safety critical systems. 
* Program optimization can reduce the execution time of the program, thereby enhancing the performance and increasing user experience.

{% for publi in site.data.publist %}
<div style="display:inline;">
<nobr>
 {% if publi.short_title != "" %}
  {% if publi.domain == "SA+Opt" %}
        {% if publi.shortname != "" %}    
                {% if publi.project==1 %}
                        <a class=badge href="{{ site.url }}{{ site.baseurl }}/projects/{{publi.shortname}}/" target="_blank">{{publi.short_title}}</a>&nbsp;&nbsp;&nbsp;&nbsp;
                {% elsif publi.publication==1 %}
                        <a class=badge href="{{ site.url }}{{ site.baseurl }}/publications/{{publi.shortname}}/" target="_blank">{{publi.short_title}}</a>&nbsp;&nbsp;&nbsp;&nbsp;
                {% endif %}
        {% endif %}
  {% endif %}
 {% endif %}
</nobr>
</div>
{% endfor %} 
<!-- <details>
<summary class="dp" markdown='span'><b><a href="{{ site.url }}{{ site.baseurl }}/projects/llov/" target="_blank">LLOV</a></b> <a href="https://github.com/utpalbora/LLOV" target="_blank"> <img  class="dp-img" alt="LLOV GitHub" src="https://github.githubassets.com/favicons/favicon.svg" width="15px" height="15px"></a> <a href="https://www.youtube.com/watch?v=kyD4ysn8ljE&t=3781s&ab_channel=HiPEAC" target="_blank"> <img  class="dp-img" alt="LLOV Video" src="https://www.youtube.com/s/desktop/75da313d/img/favicon.ico" width="15px" height="15px"></a></summary>

##### LLOV is a fast, static, data-race checker for OpenMP programs. It is language-agnostic and can detect races in C/C++ and FORTRAN programs.

</details>

<details>
<summary class="dp" markdown='span'><b style="cursor: pointer;">LLProf</b><a href="https://github.com/IITH-Compilers/LLVM-Loop-Profiler" target="_blank"> <img  class="dp-img" alt="LLProf GitHub" src="https://github.githubassets.com/favicons/favicon.svg" width="15px" height="15px"></a> <a href="https://www.youtube.com/watch?v=MKhXpRNekaM&t=119s" target="_blank"> <img  class="dp-img" alt="LLVM Dev" src="https://www.youtube.com/s/desktop/75da313d/img/favicon.ico" width="15px" height="15px"></a></summary>
##### LLProf is a LLVM based loop profiler, helps to generate run-time information for loops (loopnest/ inner most loops). This tool helps to analyze impact of (set of) optimizations on the performance of loops.
</details> -->


----

### Machine Learning for Compilers
A well defined sequence of compiler optimizations will have a strong impact on performance of the program. Optimization decisions for achieving optimal performance are complex and are computationally hard. Hence machine learning techniques can help in making making better optimization decisions.

{% for publi in site.data.publist %}
<div style="display:inline;">
<nobr>
 {% if publi.short_title != "" %}
  {% if publi.domain == "ML4Compilers" %}
        {% if publi.shortname !="" %}    
                {% if publi.project==1 %}
                        <a class=badge href="{{ site.url }}{{ site.baseurl }}/projects/{{publi.shortname}}/" target="_blank">{{publi.short_title}}</a>&nbsp;&nbsp;&nbsp;&nbsp;
                {% elsif publi.publication==1 %}
                        <a class=badge href="{{ site.url }}{{ site.baseurl }}/publications/{{publi.shortname}}/" target="_blank">{{publi.short_title}}</a>&nbsp;&nbsp;&nbsp;&nbsp;
                {% endif %}
        {% endif %}
  {% endif %}
 {% endif %}
</nobr>
</div>
{% endfor %} 

----

### Compilers for Deep Learning
With the emergence of various deep learning models and hardware architectures, it is infeasible to write optimized code for every architecture. There are various techniques to optimize the code but the search space is huge. Hence deep learning techniques helps to design good heuristics to select optimized code.

{% for publi in site.data.publist %}
<div style="display:inline;">
<nobr>
 {% if publi.short_title != "" %}
  {% if publi.domain == "Compilers4ML" %}
        {% if publi.shortname !="" %}    
                {% if publi.project==1 %}
                        <a class=badge href="{{ site.url }}{{ site.baseurl }}/projects/{{publi.shortname}}/" target="_blank">{{publi.short_title}}</a>&nbsp;&nbsp;&nbsp;&nbsp;
                {% elsif publi.publication==1 %}
                        <a class=badge href="{{ site.url }}{{ site.baseurl }}/publications/{{publi.shortname}}/" target="_blank">{{publi.short_title}}</a>&nbsp;&nbsp;&nbsp;&nbsp;
                {% endif %}
        {% endif %}
  {% endif %}
 {% endif %}
</nobr>
</div>
{% endfor %} 

----

### Polyhedral Compilation
A class of programs called affine programs can be represented as integer polyhedra to perform high level transformations such as loop-fusion, loop-distribution, tiling, skewing, loop-rotaion, etc. to optimize for runtime. Polyhedral compilation can perform complex transformations to generate architecture dependent optimized code.

{% for publi in site.data.publist %}
<div style="display:inline;">
<nobr>
 {% if publi.short_title != "" %}
  {% if publi.domain == "Polyhedral" %}
        {% if publi.shortname !="" %}    
                {% if publi.project==1 %}
                        <a class=badge href="{{ site.url }}{{ site.baseurl }}/projects/{{publi.shortname}}/" target="_blank">{{publi.short_title}}</a>&nbsp;&nbsp;&nbsp;&nbsp;
                {% elsif publi.publication==1 %}
                        <a class=badge href="{{ site.url }}{{ site.baseurl }}/publications/{{publi.shortname}}/" target="_blank">{{publi.short_title}}</a>&nbsp;&nbsp;&nbsp;&nbsp;
                {% endif %}
        {% endif %}
  {% endif %}
 {% endif %}
</nobr>
</div>
{% endfor %} 

----

### Code Compilance and Security
Safety of critical systems is of utmost importance as the failure or malfunction of one can lead to significant increase in the safety risk for the people or environment involved. Code Compliance checkers are hence designed to verify the various coding standards developed to ensure the safety of critical systems namely MISRA, CERT, ISO26262. 
<details>
<summary class="dp" markdown='span'> <b>CCCheckers</b> </summary>

##### A code compliance checker that can verify programs according to the MISRA standards for C. 
</details>
----

<br/>

