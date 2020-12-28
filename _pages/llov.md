---
title: "LLOV: A Fast Static Data-Race Checker for OpenMP Programs"
layout: textlay
excerpt: "IITH Compilers Team -- Research"
sitemap: false
permalink: /projects/llov/
---

# LLOV: A Fast Static Data-Race Checker for OpenMP Programs
*Utpal Bora, Santanu Das, Pankaj Kukreja, Saurabh Joshi, Ramakrishna Upadrasta, Sanjay Rajopadhye*
#### To appear in [ACM TACO](https://dl.acm.org/journal/taco){:target="_blank"} ([Preprint](https://arxiv.org/abs/1912.12189){:target="_blank"})

LLOV is a fast, language agnostic, static data race checker for OpenMP programs.
It supports OpenMP programs written in C, C++ and FORTRAN.
LLOV works on LLVM IR and uses Polyhedral compilation techniques to detect races.
It can also verify that a program segment is data race free.
It also uses *ModRef* analysis to detect races in non-affine programs in a conservative manner.

<figure>
  <img src="{{ site.url }}{{ site.baseurl }}/images/projects/llov/OmpVerify.jpeg" width="85%">
</figure>

LLOV has two phases, first it performs analysis on LLVM IR, and then performs verification/race-detection using integer sets.

### Internals
#### Race detection in affine regions:
LLOV models a parallel region as a static control part (SCoP) and computes the dependences.

```cpp
for ( i = 0; i < m ; i ++) {
#pragma omp parallel for
  for ( j = 1; j < n ; j ++) {
    b[i][j] = b[i][j -1];
  }
}
```

The above code segment can be represented mathematically using integer sets. We use ISL for integer set operations.
<figure>
  <img src="{{ site.url }}{{ site.baseurl }}/images/projects/llov/llov-polyhedra.png" width="65%">
</figure>

The reduced dependence graph (RDG) for the above code segment is shown in figure 2.a.
In order to detect parallel loops, projections of the RDG are taken on each dimension of the loop as shown in figure 2.b and 2.c.
The above loop nest is parallel in outer dimension as can be seen from figure 2.b because of zero magnitude projections, whereas
the inner loop is not parallel due to non-zero magnitude of the projections.
The code segment has a race condition since the dependence across the inner dimension will be violated by this parallelization.
<figure>
  <img src="{{ site.url }}{{ site.baseurl }}/images/projects/llov/llov-projections.png" width="85%">
</figure>

#### Race detection in non-affine regions:
In addition to race detection in affine regions that can be
exactly modelled by Polly, we use LLVM’s Alias Analysis (AA) to conservatively analyze non-affine
regions that cannot be modelled by Polly.

We use the Mod/Ref information from the Alias Analysis engine of LLVM to analyze
whether a shared memory location is read (Ref) or modified (Mod) by an instruction.

If an operation inside a parallel region on the specified memory location is not protected by
locks and Mod/Ref is set, LLOV flags a race signaling a potential data-race condition. The AA race
checks are invoked only when the region cannot be modelled by Polly as an affine region. The
Mod/Ref analysis of LLVM is conservative, and can lead to LLOV producing false positive races.
Thus LLOV provides a limited support of non-affine programs.

### Pragmas supported by LLOV v0.2

{:class="table table-bordered"}
| OpenMP Pragma |  LLOV |  ompVerify |  PolyOMP  |  DRACO  |  SWORD |  Archer v2 |  ROMP v2 |
| :---        |    :----:   |    :----:   |    :----:   |    :----:   |    :----:   |    :----:   |    :----:   |
| #pragma omp parallel |:heavy_check_mark:|:heavy_check_mark:|:heavy_check_mark:|:heavy_check_mark:|:heavy_check_mark:|:heavy_check_mark:|:heavy_check_mark:|
| #pragma omp for |:heavy_check_mark:|:heavy_check_mark:|:heavy_check_mark:|:heavy_check_mark:|:heavy_check_mark:|:heavy_check_mark:|:heavy_check_mark:|
| #pragma omp parallel for |:heavy_check_mark:|:heavy_check_mark:|:heavy_check_mark:|:heavy_check_mark:|:heavy_check_mark:|:heavy_check_mark:|:heavy_check_mark:|
| #pragma omp critical |:x:|:x:|:x:|:x:|:heavy_check_mark:|:heavy_check_mark:|:heavy_check_mark:|
| #pragma omp atomic |:x:|:x:|:x:|:x:|:heavy_check_mark:|:heavy_check_mark:|:heavy_check_mark:|
| #pragma omp master |:x:|:x:|:heavy_check_mark:|:x:|:heavy_check_mark:|:heavy_check_mark:|:heavy_check_mark:|
| #pragma omp single |:x:|:x:|:heavy_check_mark:|:x:|:heavy_check_mark:|:heavy_check_mark:|:heavy_check_mark:|
| #pragma omp simd |:heavy_check_mark:|:x:|:x:|:heavy_check_mark:|:x:|:x:|:x:|
| #pragma omp parallel for simd |:heavy_check_mark:|:x:|:x:|:heavy_check_mark:|:x:|:x:|:x:|
| #pragma omp parallel sections |:x:|:x:|:x:|:x:|:heavy_check_mark:|:heavy_check_mark:|:heavy_check_mark:|
| #pragma omp sections |:x:|:x:|:x:|:x:|:heavy_check_mark:|:heavy_check_mark:|:heavy_check_mark:|
| #pragma omp threadprivate |:heavy_check_mark:|:x:|:x:|:x:|:x:|:heavy_check_mark:|:heavy_check_mark:|
| #pragma omp ordered |:heavy_check_mark:|:x:|:x:|:x:|:x:|:heavy_check_mark:|:heavy_check_mark:|
| #pragma omp distribute |:heavy_check_mark:|:x:|:x:|:x:|:x:|:heavy_check_mark:|:heavy_check_mark:|
| #pragma omp task |:x:|:x:|:x:|:x:|:x:|:heavy_check_mark:|:heavy_check_mark:|
| #pragma omp taskgroup |:x:|:x:|:x:|:x:|:x:|:heavy_check_mark:|:heavy_check_mark:|
| #pragma omp taskloop |:x:|:x:|:x:|:x:|:x:|:heavy_check_mark:|:heavy_check_mark:|
| #pragma omp taskwait |:x:|:x:|:x:|:x:|:x:|:heavy_check_mark:|:heavy_check_mark:|
| #pragma omp barrier |:x:|:x:|:heavy_check_mark:|:x:|:heavy_check_mark:|:heavy_check_mark:|:heavy_check_mark:|
| #pragma omp teams |:x:|:x:|:x:|:x:|:x:|:x:|:x:|
| #pragma omp target |:x:|:x:|:x:|:x:|:x:|:x:|:x:|
| #pragma omp target map |:x:|:x:|:x:|:x:|:x:|:x:|:x:|

### Performance
LLOV is orders of magnitude faster than the state-of-the-art race detection tools.
It can be seen from the figure 3.a that LLOV takes 44.1 seconds to detect races in all the 116
kernels of DataRaceBench v1.2 on a 72 core Intel machine with 128GB memory.
Since the coverage of LLOV and SWORD are not complete, figure 3.b shows time taken to analyze common 61 kernels.

<figure>
  <img src="{{ site.url }}{{ site.baseurl }}/images/projects/llov/llov-time.png" width="85%">
</figure>

### Download LLOV and instructions to run
![Build](https://github.com/utpalbora/LLOV/workflows/Build/badge.svg)
![Test](https://github.com/utpalbora/LLOV/workflows/Test/badge.svg)

LLOV is available free of cost on our [GitHub](https://github.com/utpalbora/llov){:target="_blank"} page.

### Contact
For any issues, questions, comments or suggestions, feel free to reach out to us at [llov-dev@googlegroups.com](https://groups.google.com/g/llov-dev){:target="_blank"}

<style type="text/css" rel="stylesheet">
img.emoji {
 margin: 0 !important;
}
table tr td {
 padding: 0.07em !important;
}
</style>

<p style="text-align: right">
Last Modified: {{ page.last_modified_at | date: '%B %d, %Y' }}
