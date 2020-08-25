---
title: "IITH Compilers Team - Research"
layout: textlay
excerpt: "IITH Compilers Team -- Research"
sitemap: false
permalink: /research/
---

# Research Domains

### Polyhedral Compilation
A class of programs called affine programs can be represented as integer polyhedra to perform high level transformations such as loop-fusion, loop-distribution, tiling, skewing, loop-rotaion, etc. to optimize for runtime. Polyhedral compilation can perform complex transformations to generate architecture dependent optimized code.

#### Projects

**LNO**

> LoopNestOptimization(LNO) is an optimization framework based on Polyhedral compilation techniques to perform loop distribution, statement reordering and auto-vectorization.

### Machine Learning for Compilers
A well defined sequence of compiler optimizations will have a strong impact on performance of the program. Decisions for optimizations and their combinations in order to improve performance is a hard problem. Since compiler optimizations are complex and taking any decision is computationally hard, hence machine learning techniques helps to design good heuristics.

#### Projects

**IR2Vec**
> It is the distributed representation of the program in the distributed space using knowlegde graphs. It is base on LLVM-IR which is a power representation accepted by many frontend and target backend. It helps us to perform software engineering and compiler optimization task.


### Compilers for Deep Learning
With the emergence of various deep learning models and hardware architectures, it is infeasible to write optimized code for every architecture. There are various techniques to optimize the code but the search space is huge. Hence deep learning techniques helps to design good heuristics to select optimized code.

#### Projects

**PolyDL**
> End to end tool to find the Optimized Code for the hardware.


### Code Compilance and Security
The safety of critical systems is of utmost importance as the failure or malfunction of one can lead to significant increase in the safety risk for the people or environment involved. Code Compliance checkers are hence designed to verify the various coding standards developed to ensure the safety of critical systems namely MISRA,CERT,ISO26262 

#### Projects

**CCChecker** [code](https://github.com/sbjoshi/CCChecker "GitHub")
> A code compliance checker that verifies the code according to the MISRA standards for C. 

### Static analysis and Program Optimizations
* Compile time program analysis is indispensable for both program optimization as well as program verification.
* Detecting bugs at compile time reduces the risk of runtime failures, which can be fatal for safety critical systems. 
* Program optimization can reduce the execution time of the program, thereby enhancing the performance and increasing user experience.

#### Projects

 **LLOV** [code](https://github.com/utpalbora/LLOV "LLOV Github")
> It is a fast, static, data-race checker for OpenMP programs. LLOV is language-agnostic and can detect races in C/C++ and FORTRAN programs.

 **LLProf**
> It is an LLVM based loop profiler, helps to generate run-time information for loops (loopnest/ inner most loops). This tool helps to analyze impact of (set of) optimizations on the performance of loops.


<!--
Our broad research is in Programming Languages and Compilers. More specifically, these are the following research areas we are currently working on.

* Domain Specific Programming Languages for Parallelization: Building Domain Specific Languages (DSLs) and compilation strategies for applications from various domains. An example is Big-Data applications and High-Performance Computing. We have funding for this.
* LLVM Optimizations: Various aspects of the open-source LLVM compiler. We are working in collaboration with various industries on this. I also run the IITH-LLVM group. Join the Group (only with IITH email-IDs)
* Coarse/Fine-Grain Compiler Optimization and Parallelization techniques for modern architectures for multi-core/GPUs: Proposal of new parallelization algorithms and improvement of the range of programs that are amenable to parallelization schemes in existing polyhedral compilation tools. As an example, I am interested in the range of programs that could be accepted by the well known polyhedral compilation tools like Pluto and Polly.
* Improvement of Scalability of Tools in Polyhedral Compilation The above mentioned polyhedral compilation tools use expensive tools that limit their scalability. I am interested in improving their scalability using advanced approximations like (U)TVPI sub-polyhedra, similar and more powerful to our POPL-2013 paper.
* Abstract Interpretation and sub-polyhedral approximations: Abstract interpretation is a formal framework to perform static analysis of programs. It was formalized by the classic work of Cousot-Cousot in the 1970s. Since then, there have been advances, with the Astrée static analyzer being one of its largest successes. It uses a variety of sub-polyhedral approximations; for example Antoine Miné's Octagon domain. I am interested in various aspects of scalability vs. precision issues of these approximations, with a particular focus in loop-programs (Affine Control Programs/SCoPs).
* Any aspects of program analysis. 
-->
