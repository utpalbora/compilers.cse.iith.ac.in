---
title: "Polly as an Analysis pass in LLVM"
redirect_from:
   - /research/analysis_pass-polly/
layout: textlay
excerpt: "IITH Compilers Team -- Publications"
sitemap: false
permalink: /publications/analysis_pass-polly/
---


<div class="container-fluid" style="height:100%; width:100%"> 
<h1>Polly as an Analysis pass in LLVM</h1>
<p>Utpal Bora, Johannes Doerfert, Tobias Grosser, Venugopal Raghavan and <a href="https://www.iith.ac.in/~ramakrishna" target="_blank">Ramakrishna Upadrasta</p>
<h4> Presented at US LLVM Developers’ Meeting, 2016 

<a>
 </a>  
 </h4>

 <br>
 
 <div style="position:relative; top:-25px;">
 <h4><a href="https://www.llvm.org/devmtg/2016-11/Slides/Bora-PollyAsAnAnalysisPass.pdf" target="_blank">Slides</a>
 </h4>
 </div> 
 
 <br>     
<p> The Polyhedral framework provides an exact dependence analysis, which is more powerful than conventional dependence testing algorithms. Currently, LLVM mainline lacks a powerful dependence analysis framework, and at the same time, Polly’s (a high-level data locality optimizer based on polyhedral framework) dependence analysis is suitable for many transformation passes in LLVM like Loop Vectorization, Loop Versioning, Modulo Scheduling, Loop Nest Optimizations, etc. I propose to provide an API for Polly such that its precise dependence analysis can be used as an Analysis pass within LLVM’s transformation passes.</p>
<br>
</div>
