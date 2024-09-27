---
title: "When Polyhedral Optimizations Meet Deep Learning Kernels"
redirect_from:
   - /research/optimizing_dl_kernels/
layout: textlay
excerpt: "IITH Compilers Team -- Publications"
sitemap: false
permalink: /publications/optimizing_dl_kernels/
---


<div class="container-fluid" style="height:100%; width:100%"> 
<h1>When Polyhedral Optimizations Meet Deep Learning Kernels</h1>
<p>Hrishikesh Vaidya, Akilesh B, Abhishek A Patwardhan and <a href="https://www.iith.ac.in/~ramakrishna" target="_blank">Ramakrishna Upadrasta</p>
<h4> Poster - Presented at International Conference on High Performance Computing, 2017</h4>

<br>

<div style="position:relative; top:-25px;">
 <h4><a href="https://raiith.iith.ac.in/5200/1/HiPC%202017.pdf" target="_blank">Paper</a>
 </h4>
 </div>

 <br>     
<p> Deep Neural Networks (DNN) are well understood to be one of the largest consumers of HPC resources
and efficiently running their training and inference phases on modern heterogeneous architectures (and accelerators)
poses an important challenge for the compilation community. Currently, DNNs are actively being studied by theautomatic parallelization 
and polyhedral compilation communities for the same purpose. In this (initial) paper, we study the kernels of four varieties of 
DNN layers with the goal of applying automatic parallelization techniques for latest architectures. We show the affine (Polyhedral) nature
of these kernels thereby showing that they are amenable to well known polyhedral compilation techniques. For
benchmarking purposes, we implemented forward and backward kernels for four varieties of layers namely convolutional, pooling, 
recurrent and long short term memory in PolyBench/C, A well known polyhedral benchmarking suite. We also evaluated our kernels on 
the state-of-art Pluto polyhedral compiler in order to highlight the speedups obtained by automatic loop transformations.</p>
<br>
</div>
