---
title: "POSET-RL"
redirect_from:
    - /research/posetrl
layout: textlay
excerpt: "IITH Compilers Team -- Research"
sitemap: false
permalink: /projects/posetrl/
---

# POSET-RL: Phase ordering for Optimizing Size and Execution Time using Reinforcement Learning
*Shalini Jain, Yashas Andaluri, S. VenkataKeerthy and [Ramakrishna Upadrasta](https://www.iith.ac.in/~ramakrishna){:target="_blank"}*
#### To Be Published in ISPASS 2022 ([Slides](https://llvm.org/devmtg/2022-04-03/slides/POSET-RL.Phase.ordering.for.Optimizing.Size.and.Execution.Time.using.Reinforcement.Learning.pdf){:target="_blank"})

The increasing memory demands of applications are difficult to meet on devices which have constrained resources. Limiting the usage of memory in
such cases is of paramount importance. However, code size improvements should not have a negative impact on the runtime.
POSET-RL is a framework that predicts the optimal optimization sequence for a program to primarly achieve reduction in binary size along with reduction in execution time.

<center>
<figure>
<img src="{{ site.url }}{{ site.baseurl }}/images/projects/poset_rl/flowgraph.png" width="45%">
</figure>
</center>

POSET-RL uses a reinforcement learning approach as the search
space of optimization sequences is too big to enumerate. For a compiler
with *m* optimization passes, if the sequence length is fixed as
*n*, then there can be potentially *m*<sup>*n*</sup> combinations, allowing
repetitions.

The reinforcement learning model is trained and evaluated on programs that are represented using IR2Vec embeddings. The action space contains the subsequences created using the Oz dependence graph (ODG). Sequences are constructed from this graph by finding walks that start and end at critical nodes (with degree greater than a value *k*).

<center>
<figure>
<img src="{{ site.url }}{{ site.baseurl }}/images/projects/poset_rl/ODG_old.png" width="65%">
</figure>
</center>

The state of the program after every transformation subsequence is represented using IR2Vec embeddings. The reward provided to the model is the difference in binary size between current state and last state divided by the base binary size. This is done similarly for execution time using throughput measured by LLVM-MCA but with a negative sign.

### Performance
The improvements we achieved over Oz in terms of binary size and execution time for the SPEC benchmark are shown below.

<center>
<table>
<tr>
<td><img src="{{ site.url }}{{ site.baseurl }}/images/projects/poset_rl/SPEC-x86-binary-size1.png" width="85%"></td>
<td><img src="{{ site.url }}{{ site.baseurl }}/images/projects/poset_rl/SPEC-x86-binary-size2.png" width="85%"></td>
</tr>
<tr>
<td><img src="{{ site.url }}{{ site.baseurl }}/images/projects/poset_rl/SPEC-2017_x86_runtime_1.png" width="85%"></td>
<td><img src="{{ site.url }}{{ site.baseurl }}/images/projects/poset_rl/SPEC-2017_x86_runtime_2.png" width="85%"></td>
</tr>
</table>

<figure>
<img src="{{ site.url }}{{ site.baseurl }}/images/projects/poset_rl/size_table.png" width="65%">
</figure>
</center>

### Artifacts
Code and other artifacts will be available on our [GitHub](https://github.com/IITH-Compilers/POSET-RL) page.

### Funding
This research is funded by the Department of Electronics & Information Technology and the Ministry of Communications
& Information Technology, Government of India. This work is partially supported by a Visvesvaraya PhD Scheme under
the MEITY, GoI (PhD-MLA/04(02)/2015-16), an NSM research grant (MeitY/R&D/HPC/2(1)/2014), a Visvesvaraya Young
Faculty Research Fellowship from MeitY, and a Google PhD Fellowship.