---
title: "An LLVM based Loop Profiler"
redirect_from:
   - /research/loop_profiler/
layout: textlay
excerpt: "IITH Compilers Team -- Publications"
sitemap: false
permalink: /publications/loop_profiler/
---

<div class="container-fluid" style="height:100%; width:100%"> 
<h1>An LLVM based Loop Profiler</h1>
<p style>Shalini Jain, Kamlesh Kumar, <a href="https://www.iiit.ac.in/people/faculty/psuresh/" target="_blank">Suresh Purini</a>, <a href="https://scholar.google.co.in/citations?user=kYDwjPAAAAAJ&hl=en" target="_blank">Dibyendu Das </a> and <a href="https://www.iith.ac.in/~ramakrishna" target="_blank">Ramakrishna Upadrasta </a></p>
<h4> Presented at US LLVM Developers’ Meeting, 2017 </h4>

<br>

<div style="position:relative; top:-25px;"> 
 <h4>
 <a href="https://llvm.org/devmtg/2017-10/slides/Jain-LLVM%20based%20Loop%20Profiler.pdf" target="_blank">Slides</a>
 &nbsp;
 <a href= "https://github.com/IITH-Compilers/LLVM-Loop-Profiler" target="_blank">
 <img class="dp-img" alt="OpenMp_Github" src="https://github.githubassets.com/favicons/favicon.svg" width="23px" height="23px"  />
 </a>  

 </h4>
 </div> 

 <div style="display: flex; justify-content: center;">
 <iframe width="700" height="400" src="https://www.youtube.com/embed/MKhXpRNekaM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

 <br>     
<p> It is well understood that programs spend most of their time in loops. The application writer may want to know the measure of time-taken for each loop in large programs, so that (s)he can then focus on these loops for applying optimizations. Loop profiling is a way to calculate loop-based run-time information such as execution-time, cache-miss equations and other runtime metrics, which help us to analyze code to fix performance related issues in the code base. This is achieved by instrumenting/annotating the existing input program. There already exist loop-profilers for conventional languages like C++, Java etc., both in open-source and commercial domain. However, as far as we know, there is no such loop-profiler available for LLVM-IR; such a tool would help LLVM users analyze loops in LLVM-IR. Our work mainly focuses around developing such a generic loop profiler for LLVM-IR. It can thus be used for any language(s) which have a LLVM IR. </p>
<p>
Our current work proposes an LLVM based loop-profiler which works on the IR level and gives execution times, and total number of clocks for each loop. Currently, we focus on the inner-most loop(s) as well as each individual loop(s) for collecting run-time profiling data. Our profiler works on LLVM IR and inserts the instrumented code into the entry and exit blocks of each loop. It also returns the number of clock(s) ticks and execution time(s) for each loop of the input program. It also append(s) some instrumented code into the exit block of outer-most loop for calculating total and average number of clocks for each loop. We are currently working to capture other runtime metrics like number of cache misses, number of registers required. 
We have results from SPEC CPU 2006 which demonstrate that for all benchmarks in the suite, very few loops are highly compute intensive. For most of the other loops, either control does not reach to them, or they take negligible execution time.</p>
<br>
</div>
