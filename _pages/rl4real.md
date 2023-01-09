---
title: "RL4ReAl"
layout: textlay
excerpt: "IITH Compilers Team -- Research"
sitemap: false
permalink: /publications/rl4real/
---

# RL4ReAl: Reinforcement Learning for Register Allocation
*S. VenkataKeerthy, Siddharth Jain, Anilava Kundu, Rohit Aggarwal, Albert Cohen and Ramakrishna Upadrasta*
#### To appear in CC 2023

Register allocation is one of the well-studied and important compiler optimization problems. It involves assigning a finite set of registers to an unbounded set of variables. Its decision problem is reducible to graph coloring, which is one of the classical NP-Complete problems.  Register allocation as an optimization involves additional sub-tasks, more than graph coloring itself. Several formulations have been proposed that return exact, or heuristic-based solutions.

In this work, we propose a retargetable Reinforcement Learning (RL) approach for solving the REgister ALlocation (REAL) problem on diverse architectures.

<center>
<figure>
<img src="{{ site.url }}{{ site.baseurl }}/images/projects/rl4real/rl4real.png" width="85%">
</figure>
</center>


We formulate a multi-agent hierarchical reinforcement learning optimization considering program-specific information -
* To model the sub-tasks of register allocation like coloring, live range splitting and spilling, and 
* To encode the correctness constraints for preserving the semantics and hardware-compatible register assignments.

The legality of the register allocations and assignments is preserved by imposing constraints on the action space, or outcome of each agent.  As register allocation is a complex combinatorial problem, establishing the ground truth is hard, making RL a natural choice. Also, it facilitates the imposition of correctness constraints.

The reinforcement learning model is end-to-end integrated with the LLVM compiler and the communication between the model and compiler is facilitated by a gRPC module effectively integrated with LLVM.


### Performance
RL4ReAl achieves competitive results; our results match or out-perform the heavily tuned, production grade allocators of LLVM on standard SPEC CPU benchmark suites.

We evaluate performance on a complex x86 (Intel Xeon SkyLake W2133, 6 cores, 32GB RAM), and a simpler mobile AArch64 (ARM Cortex A72, 2 cores, 8GB RAM) processors.
We consider allocations of general purpose, vector, floating point registers for both x86 and AArch64 architectures.

<center>
<figure>
<img src="{{ site.url }}{{ site.baseurl }}/images/projects/rl4real/results.png" width="83%">
</figure>
</center>

RL4ReAl opens up new opportunities for research on regalloc and on other backend    compilation problems.

### Artifacts
TBD 

### Funding
TBD