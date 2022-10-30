---
title: "Reinforcement Learning assisted Loop Distribution for Locality and Vectorization"
# redirect_from:
#     - /publications/packet_processing
layout: textlay
excerpt: "IITH Compilers Team -- Publications"
sitemap: false
permalink: /publications/rl_loop_distribution/
---

<div class="container-fluid" style="height:100%; width:100%"> 

# Reinforcement Learning assisted Loop Distribution for Locality and Vectorization
*Shalini Jain, S. VenkataKeerthy, Rohit Aggarwal, Tharun Kumar Dangeti, Dibyendu Das, [Ramakrishna Upadrasta](https://www.iith.ac.in/~ramakrishna)*
#### To be published at LLVM-HPC 2022
<br>

<p>Loop distribution (loop fission) is a well known compiler optimization that splits the loop into multiple loops. Loop distribution can be seen as an enabler of various other optimizations with different goals, like, the parallelizability of the loop, the vectorizability of the loop, its locality characteristics. In this work, we present a Reinforcement Learning (RL) based approach to efficiently perform loop-distribution with the twin goals of optimizing for both vectorization as well as locality. Broadly, we generate the SCC Dependence Graph (SDG) for each loop of the program. Our RL model learns to predict the distribution order of the loop by performing topological walk of the graph. The reward to our model is computed using the instruction cost and number of cache misses of the loop. As the RL models need data for training purposes, we also propose a novel strategy to extend the training set by  generating new loops. We show our results on x86 architecture on various benchmarks: from TSVC, LLVM-Test-Suite, PolyBench and PolyBench-NN. Our framework achieves an average improvement of 3.63% on TSVC, 4.61% on LLVM-Test-Suite Microbenchmarks, 1.78% on PolyBench and 1.95% on PolyBench-NN benchmark suites for execution time. The baseline is O3 compiler option of LLVM. We also show the improvements of our method on other performance metrics like Instruction Per
Cycle (IPC), Number of loops distributed & vectorized, and L1 cache performance.</p>

</div>