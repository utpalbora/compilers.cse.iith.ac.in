---
title: "Texturizing PPCG: Supporting Texture Memory in a Polyhedral Compiler"
redirect_from:
   - /research/texturizing_ppcg/
layout: textlay
excerpt: "IITH Compilers Team -- Publications"
sitemap: false
permalink: /publications/texturizing_ppcg/
---


<div class="container-fluid" style="height:100%; width:100%"> 
<h1>Texturizing PPCG: Supporting Texture Memory in a Polyhedral Compiler</h1>
<p>Abhishek A Patwardhan and <a href="https://www.iith.ac.in/~ramakrishna" target="_blank">Ramakrishna Upadrasta</p>
<h4> Poster-Presented in IEEE International Conference on High Performance Computing, 2016
 </h4>

<br>

 <div style="position:relative; top:-25px;">
 <h4><a href="https://raiith.iith.ac.in/4130/1/texPPCG.pdf" target="_blank">Paper</a>
 </h4>
 </div> 


 <br>     
<p> In this paper, we discuss techniques to transform
sequential programs to texture/surface memory optimized CUDA
programs. We achieve this by using PPCG, an automatic parallelizing compiler based on the Polyhedral model. We implemented
a static analysis in PPCG which validates the semantics of the
texturized transformed program. Depending on the results of
the analysis, our algorithm chooses to use texture and/or surface
memory, and alters the Abstract Syntax Tree accordingly. We
also modified the code-generation phase of PPCG to take care
of various subtleties. We evaluated the texturization algorithm
on the PolyBench (4.2.1 beta) benchmark and observed up to
1.6x speedup with a geometric mean of 1.103X. The title and
at many places, the paper uses term Texture memory. But, the
optimizations are for Texture and Surface memory.</p>
<br>
</div>
