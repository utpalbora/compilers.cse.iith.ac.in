---
title: "Improved Loop Distribution in LLVM using Polyhedral Dependences"
redirect_from:
   - /research/loop_distribution_improvement/
layout: textlay
excerpt: "IITH Compilers Team -- Publications"
sitemap: false
permalink: /publications/loop_distribution_improvement
---



<div class="container-fluid" style="height:100%; width:100%"> 
<h1>Improved Loop Distribution in LLVM using Polyhedral Dependences</h1>
<p>Tharun Kumar Dangeti, Utpal Bora, Santanu Das, Tobias Grosser and <a href="https://www.iith.ac.in/~ramakrishna" target="_blank">Ramakrishna Upadrasta</p>
<h4> Presented at Workshop on the LLVM Compiler Infrastructure in HPC, 2017</h4>

<br>

 <div style="position:relative; top:-25px;">
 <h4><a href="https://llvm-hpc4-workshop.github.io/talks.html#grosser" target="_blank">Slides</a>
 </h4>
 </div> 
 
 <br>     
<p> We propose a framework that can be used for improving loop-optimizations in LLVM using the Polyhedral framework of Polly. In our framework, we use the precise polyhedral dependences from Polly (provided by PolyhedralInfo), to construct a dependence graph, and perform loop transformations. As the first transformation case study of such a framework, we implemented loop distribution targeting improvement of inner-loop vectorization. Our loop distribution pass shows promising results on the TSVC benchmark; it is able to distribute 11 loops, while the earlier distribution pass is unable to distribute at all. We also have preliminary performance numbers from SPEC 2006. We believe that our work is the first step towards scalable and pre-defined loop-transformations in LLVM using exact dependences from Polly.</p>
<br>
</div>
