---
title: "Some Efficient Algorithms for the Tightest UTVPI Polyhedral Over-Approximation Problem"
redirect_from:
    - /publications/tightestutvpipolyhedral
layout: textlay
excerpt: "IITH Compilers Team -- Publications"
sitemap: false
permalink: /projects/tightestutvpipolyhedral/
---


<div class="container-fluid" style="height:100%; width:100%"> 
<h1>Some Efficient Algorithms for the Tightest UTVPI Polyhedral Over-Approximation Problem</h1>
<p>Abhishek A Patwardhan and <a href="https://www.iith.ac.in/~ramakrishna" target="_blank">Ramakrishna Upadrasta</p>
<h4> Published at 9th International Workshop on Polyhedral Compilation Techniques In conjunction with HiPEAC 2019 Valencia, Spain</h4>
 
<br>
 
<div style="position:relative; top:-25px;">
 <h4><a href="https://acohen.gitlabpages.inria.fr/impact/impact2019/papers/IMPACT_2019_paper_2.pdf" target="_blank">Paper</a>
 </h4>
 
 <a href= "https://github.com/IITH-Compilers/ISL-UTVPI?files=1" target="_blank">
 <img class="dp-img" alt="OpenMp_Github" src="https://github.githubassets.com/favicons/favicon.svg" width="23px" height="23px" />
 </a> 
 </div> 
 
<p> Many static analysis problems involve solving mathematical data-flow equations over various numerical abstract domains. Convex polyhedra is one such abstract domain that is widely used to precisely capture affine relationships among program variables. However, majority of the analysis problems based on convex polyhedral domains fail to scale for large problem sizes due to the high-complexity/exponential nature of operations defined over them (such as Feasibility, Optimization, Fourier-Motzkin, Vertex enumeration).
The (Unit-)Two Variable Per Inequality (UTVPI) Polyhedra (also called as Octagons) have been proven to be a very useful abstract domain; due to its improved worst-case polynomial time complexity, as well as ease of implementation. In order to enable usage of Octagon abstract domain, it becomes important to efficiently compute the tightest Octagonal Over-Approximation (OA) from an arbitrary convex-polyhedron.
In this paper, we present two new algorithms that compute the tightest UTVPI-OA of a given convex polyhedron (provided it exists) by relying on elementary polyhedral operations. Our algorithms improve over the OA algorithm that is implemented in the state-of-art libraries.
Our first algorithm is based on linear programming (LP) which based on a series of LP calls. Our second algorithm is based on Fourier-Motzkin elimination (projections) combined with a only rotation operations. Both the algorithms fully exploit the Octagonal nature of the OA that they aim to obtain; so, they are highly simple in nature (in theory as well as implementation), simple to reason about correctness and optimality, and also very easy to implement. We implemented our two algorithms in the Integer Set Library (ISL), a open-source polyhedral compilation library.
We believe that our algorithms will be useful in various static analysis as well as polyhedral compilation applications like polyhedral scheduling, code-generation, cache miss calculation, transitive closure. </p>
<br>
</div>
