---
title: "Programming Language Analysis and Optimization - ACM Summer School"
layout: event
excerpt: "IITH Compilers Team -- Research"
sitemap: false
permalink: /event/summerschool2021/
---
<div id="about">
<img src="{{ site.url }}{{ site.baseurl }}/images/event/iith-banner1.jpg" style="height: 280px">
## Summer School on Programming Language Analysis and Optimizations


<div style="font-size: 150%;">
<span style="text-align: left;">
Hosted by: IIT Hyderabad (online)
</span>
<span style="float: right; padding-right:50px">
Dates: 6th to 16th July 2021
</span>
</div>

<div class="col-sm-4 col-sm-8 col-sm-12 gridevent" style="text-align: center;">
  <img src="{{ site.url }}{{ site.baseurl }}/images/event/acm_india_council_logo_sm.jpg" style="height: 40px">
  <img src="{{ site.url }}{{ site.baseurl }}/images/event/iit-hyderabad-logo.png" style="height: 40px">
  <img src="{{ site.url }}{{ site.baseurl }}/images/event/nvidia.jpg" style="height: 40px">
</div>

Compilers are pervasive and critical for any software application to execute on any Computer System. You might be already familiar with the C/C++ compiler used to compile C/C++ source code into an executable. However, did you know that there is a compiler being used when you play your favourite 3D game or browse your favourite HTML5 website? Not just that, Compiler technology has applications beyond the traditional task of generating executables! Today it is used to detect defects in code, catch security issues and even generate HW Designs from software specifications. As the era of Artificial Intelligence dawns with techniques like Machine Learning and Deep Learning helping computer perform some amazing human like tasks the importance of designing great compilers increases many-fold, not just to generate the most optimized programs for latest HW but also to help programmer productivity by translating programs coded in Domain Specific Languages that are custom built for Machine Learning and AI.

This summer school aims at providing you a foundation in theory and practice of optimizing compilers. Further, a study of essential components of program execution environments will provide you with an end-to-end understanding of the life of a program in a computer system.

The 2-week school will cover these concepts through lectures as well as hands-on assignments.

A high-level module structure is as follows:

* Introduction to compilers and interpreters
* Program analysis
* Compiler optimizations: machine-independent and machine-dependent
* Interfacing with program execution


#### Background/prior courses recommended

* Computer Architecture
* Assembly language programming would be very useful
* GNU/Linux command line, e.g. “cp <file1> <pathname2>” instead of drag and drop
* Programming using C
</div>
<br>
<div id="speakers">

### Partial list of speakers

{% assign number_printed = 0 %}
{% for member in site.data.event_speakers %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if even_odd == 0 %}
<div class="row">
{% endif %}
<div class="col-sm-6 clearfix gridevent">
  <img src="{{ site.url }}{{ site.baseurl }}/images/event/speakerpic/{{ member.photo }}" class="img-responsive" object-fit="scale-down" width="25%" height="25%" style="float: left">
  {% if member.url.value == 1 %}
  <h4 class="speakerinfo"><a href="{{ member.url.link }}" target="_blank">{{ member.name }}</a></h4>
  <i>{{ member.title }}<br>{{ member.institute }}</i>
  <p style="color:Blue;">{{ member.topic }}</p>
  {% endif %}

  {% if member.url.value == 0 %}
  <h4 class="speakerinfo">{{ member.name }}</h4>
  <i>{{ member.title }}<br>{{ member.institute }}</i>
  <p style="color:Blue;">{{ member.topic }}</p>
  {% endif %}
</div>

{% assign number_printed = number_printed | plus: 1 %}

{% if even_odd == 1 %}
</div>
{% endif %}

{% endfor %}

<br/>
</div>

<div id="schedule_header">
&ensp;
### Schedule
*Detailed schedule will be published soon.* 

* Lectures: (Morning) 3 - 4 hours per day (with breaks of 15min--30mins)
* Tutorials/Hands-on: (Afternoon) 2 - 2.5 hours per day on practical aspects on the following: 
  * Language tools - Lex, Yacc, Antlr
  * LLVM - Infrastructure, IR, Analysis and Transformation Passes
  * Modern compiler systems - 
    * Polyhedral compilation tools - Pluto, ISL, PET, CLooG
    * MLIR, AutoTVM, ...

**Students would be provided with a Docker container with the necessary softwares installed.**

<br>
</div>

<div id="organizers">

### Coordinators

#### Academic
* Abhijat Vichare [abhijatv@acm.org](abhijatv@acm.org)
* Ramakrishna Upadrasta [ramakrishna@cse.iith.ac.in](ramakrishna@cse.iith.ac.in)
* Jyothi Vedurada [jyothiv@cse.iith.ac.in](jyothiv@cse.iith.ac.in)

#### Local (from host institute)
* Ramakrishna Upadrasta [ramakrishna@cse.iith.ac.in](ramakrishna@cse.iith.ac.in)
* Jyothi Vedurada [jyothiv@cse.iith.ac.in](jyothiv@cse.iith.ac.in)

Organizing institution: [IIT Hyderabad](https://iith.ac.in/)

Platform: Google-Meet/Microsoft Teams
</div>
<div id="sponsers">

## Sponsors
<img src="{{ site.url }}{{ site.baseurl }}/images/event/nvidia.jpg" style="height: 20px">
</div>