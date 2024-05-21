---
title: "Reducing the Computational Complexity of RegionInfo"
redirect_from:
   - /research/comp_complexity/
layout: textlay
excerpt: "IITH Compilers Team -- Publications"
sitemap: false
permalink: /publications/comp_complexity/
---


<div class="container-fluid" style="height:100%; width:100%"> 
<h1>Reducing the Computational Complexity of RegionInfo</h1>
<p>Nandini Singhal, Pratik Bhatu, Aditya Kumar, Tobias Grosser and <a href="https://www.iith.ac.in/~ramakrishna" target="_blank"> Ramakrishna Upadrasta</p>
<h4> Presented at US LLVM Developers’ Meeting, 2016
</h4>

<br>

 <div style="position:relative; top:-25px;">
 <h4><a href="https://llvm.org/devmtg/2016-11/Slides/Singhal-ReducingTheComputationalComplexity.pdf" target="_blank">Slides</a>
 </h4>
 </div> 
 <div style="display: flex; justify-content: center;">
 <iframe width="560" height="315" src="https://www.youtube.com/embed/yOVeJtA5zxw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
 <br>     
<p> This talk was on reducing the Computational Complexity of RegionInfo.
    Part of CFG which satisfies certain properties can be optimised without
    affecting rest of CFG. The proposed algorithm traverses nodes from entry
    until exit while skipping detected regions and already traversed regions 
    which failed other checks. It then identifies innermost loops in which
   all edges to entry reside. If none, no back edge i.e. passes check. If more 
   than 2 different innermost loops, then fails region check. Else store the 
   loop and compare with exit later.</p>
<br>
</div>
