---
title: "Some Improvements to the Branch Probability Information (BPI)"
redirect_from:
    - /publications/TalkimproveBPI
layout: textlay
excerpt: "IITH Compilers Team -- Publications"
sitemap: false
permalink: /projects/TalkimproveBPI/
---


<div class="container-fluid" style="height:100%; width:100%"> 
<h1>Some Improvements to the Branch Probability Information (BPI)</h1>
<p>Akash Banerjee ,Rohit Aggarwal, S. VenkataKeerthy and  <a href="https://scholar.google.co.in/citations?user=kYDwjPAAAAAJ&hl=en" target="_blank">Ramakrishna Upadrasta</p>
<h4> Presented in <a href="https://llvm.org/devmtg/2018-10/">European LLVM Developers’ Meeting, 2020 (Poster)
</a>  
 
 <a href= "https://github.com/TIFitis/BPI--llvm" target="_blank">
 <img class="dp-img" alt="OpenMp_Github" src="https://github.githubassets.com/favicons/favicon.svg" width="23px" height="23px" />
 </a>  
 </h4>
 
  
<p > The BranchProbabilityInfo (BPI) pass is LLVM’s heuristic-based profiler. A study on this analysis pass indicates that the heuristics implemented in it were fast, but not adequate. We propose to improve the current heuristics to make them more robust and give better predictions. This has the potential to be useful in the absence of actual profile information (for example, from PGO). We suggest some possible improvements to the existing heuristics in the current implementation and experimentally observe that such improvements have a positive impact on the runtime when used by the standard O3 sequence, and we obtained an average speed-up of 1.07.
</p>
<br>
</div>
