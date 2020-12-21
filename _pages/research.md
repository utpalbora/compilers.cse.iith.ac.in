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

## Research Domain
Our broad research is in Programming Languages and Compilers. More specifically, following are the research areas we are currently working on.

### Static analysis and Program Optimizations
* Compile time program analysis is indispensable for both program optimization as well as program verification.
* Detecting bugs at compile time reduces the risk of runtime failures, which can be fatal for safety critical systems. 
* Program optimization can reduce the execution time of the program, thereby enhancing the performance and increasing user experience.
<details>
<summary class="dp" markdown='span'><b>LLOV</b>  <a href="https://github.com/utpalbora/LLOV" target="_blank"> <img  class="dp-img" alt="LLOV GitHub" src="https://github.githubassets.com/favicons/favicon.svg" width="15px" height="15px"></a>  </summary>

 <!-- **LLOV**  [![LLOV Github](https://github.githubassets.com/favicons/favicon.svg){:height="15px" width="15px"}](https://github.com/utpalbora/LLOV "LLOV GitHub"){:target="\_blank"} -->

##### It is a fast, static, data-race checker for OpenMP programs. LLOV is language-agnostic and can detect races in C/C++ and FORTRAN programs.

</details>

<details>
<summary class="dp" markdown='span'><b style="cursor: pointer;">LLProf</b><a href="https://github.com/IITH-Compilers/LLVM-Loop-Profiler" target="_blank"> <img  class="dp-img" alt="LLProf GitHub" src="https://github.githubassets.com/favicons/favicon.svg" width="15px" height="15px"></a> <a href="https://www.youtube.com/watch?v=MKhXpRNekaM&t=119s" target="_blank"> <img  class="dp-img" alt="LLVM Dev" src="https://www.youtube.com/s/desktop/75da313d/img/favicon.ico" width="15px" height="15px"></a></summary>
##### It is an LLVM based loop profiler, helps to generate run-time information for loops (loopnest/ inner most loops). This tool helps to analyze impact of (set of) optimizations on the performance of loops.
</details>
----

### Machine Learning for Compilers
A well defined sequence of compiler optimizations will have a strong impact on performance of the program. Decisions for optimizations and their combinations in order to improve performance is a hard problem. Since compiler optimizations are complex and taking any decision is computationally hard, hence machine learning techniques helps to design good heuristics.

<details>
<summary class="dp" markdown='span'> <b><a href="{{ site.url }}{{ site.baseurl }}/projects/ir2vec/" target="_blank">IR2Vec</a></b> </summary>

##### It is the distributed representation of the program in the distributed space using knowlegde graphs. It is base on LLVM-IR which is a power representation accepted by many frontend and target backend. It helps us to perform software engineering and compiler optimization task.
</details>
----

### Compilers for Deep Learning
With the emergence of various deep learning models and hardware architectures, it is infeasible to write optimized code for every architecture. There are various techniques to optimize the code but the search space is huge. Hence deep learning techniques helps to design good heuristics to select optimized code.
<details>
<summary class="dp" markdown='span'> <b>PolyDL</b> </summary>

##### End to end tool to find the Optimized Code for the hardware.
</details>
----

### Polyhedral Compilation
A class of programs called affine programs can be represented as integer polyhedra to perform high level transformations such as loop-fusion, loop-distribution, tiling, skewing, loop-rotaion, etc. to optimize for runtime. Polyhedral compilation can perform complex transformations to generate architecture dependent optimized code.

<details>
<summary class="dp"  markdown='span'> <b>LNO</b> </summary>
##### LoopNestOptimization(LNO) is an optimization framework based on Polyhedral compilation techniques to perform loop distribution, statement reordering and auto-vectorization.
</details>
----

### Code Compilance and Security
The safety of critical systems is of utmost importance as the failure or malfunction of one can lead to significant increase in the safety risk for the people or environment involved. Code Compliance checkers are hence designed to verify the various coding standards developed to ensure the safety of critical systems namely MISRA, CERT, ISO26262 
<details>
<summary class="dp" markdown='span'> <b>CCCheckers</b> </summary>

##### A code compliance checker that verifies the code according to the MISRA standards for C. 
</details>
----

<br/>

