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

<style>
  .bib ol{
    list-style: none;
    display: flex;
    padding-left : 0;
  }
  .bib li{
    margin-bottom: 1.5em;
  }
  </style>
<div class="bib">
{% bibliography --template bibtemplate_projects  --query @*[domain=SA+Opt] %}
</div>

----

### Machine Learning for Compilers
A well defined sequence of compiler optimizations will have a strong impact on performance of the program. Optimization decisions for achieving optimal performance are complex and are computationally hard. Hence machine learning techniques can help in making making better optimization decisions.


<style>
  .bib ol{
    list-style: none;
    display: flex;
    padding-left : 0;
  }
  .bib li{
    margin-bottom: 1.5em;
  }
  </style>
<div class="bib">
{% bibliography --template bibtemplate_projects  --query @*[domain=ML4Compilers] %}
</div>



----

### Compilers for Deep Learning
With the emergence of various deep learning models and hardware architectures, it is infeasible to write optimized code for every architecture. There are various techniques to optimize the code but the search space is huge. Hence deep learning techniques helps to design good heuristics to select optimized code.


<style>
  .bib ol{
    list-style: none;
    display: flex;
    padding-left : 0;
  }
  .bib li{
    margin-bottom: 1.5em;
  }
  </style>
<div class="bib">
{% bibliography --template bibtemplate_projects  --query @*[domain=Compilers4ML] %}
</div>
----

### Polyhedral Compilation
A class of programs called affine programs can be represented as integer polyhedra to perform high level transformations such as loop-fusion, loop-distribution, tiling, skewing, loop-rotaion, etc. to optimize for runtime. Polyhedral compilation can perform complex transformations to generate architecture dependent optimized code.

<style>
  .bib ol{
    list-style: none;
    display: flex;
    padding-left : 0;
  }
  .bib li{
    margin-bottom: 1.5em;
  }
  </style>
<div class="bib">
{% bibliography --template bibtemplate_projects  --query @*[domain=Polyhedral] %}
</div>

----

### Code Compilance and Security
Safety of critical systems is of utmost importance as the failure or malfunction of one can lead to significant increase in the safety risk for the people or environment involved. Code Compliance checkers are hence designed to verify the various coding standards developed to ensure the safety of critical systems namely MISRA, CERT, ISO26262. 
<details>
<summary class="dp" markdown='span'> <b>CCCheckers</b> </summary>

##### A code compliance checker that can verify programs according to the MISRA standards for C. 
</details>
----

<br/>

