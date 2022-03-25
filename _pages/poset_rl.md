---
title: "POSET-RL"
# redirect_from:
#     - /research/posetrl
layout: textlay
excerpt: "IITH Compilers Team -- Research"
sitemap: false
permalink: /projects/posetrl/
---

# POSET-RL: Phase ordering for Optimizing Size and Execution Time using Reinforcement Learning
*Shalini Jain, Yashas Andaluri, S. VenkataKeerthy and [Ramakrishna Upadrasta](https://www.iith.ac.in/~ramakrishna){:target="_blank"}*
#### To Be Published in ISPASS 2022

POSET-RL is a framework that predicts the optimal optimization sequence for a program to primarly achieve reduction in size along with reduction in execution time. POSET-RL uses a reinforcement learning model to pick sequences that were created using a Oz dependence graph.


<figure>
<img src="{{ site.url }}{{ site.baseurl }}/images/projects/poset_rl/flowgraph.png" width="45%">
</figure>

The reinforcement learning model is a DDQN implemented using RLLib. The programs are represented using IR2Vec. The action space contains the subsequences created using the Oz dependence graph (ODG). Sequences are constructed from this graph by finding walks  that start and ending at critical nodes (with degree greater than a value *k*).

<figure>
<img src="{{ site.url }}{{ site.baseurl }}/images/projects/poset_rl/ODG_old.png" width="65%">
</figure>

The state of the program after very transformation subsequence is represented using IR2Vec. The reward to model is the difference in size between current state and last state divided by the base program size. This is done similarly for execution time using RThroughtput from *llvm-mca* but with a negative sign. 


### Performance
The improvements we achieved over Oz in terms of binary size and execution time for the SPEC benchmark are shown below.

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

### Funding
This research is funded by the Department of Electronics & Information Technology and the Ministry of Communications
& Information Technology, Government of India. This work is partially supported by a Visvesvaraya PhD Scheme under
the MEITY, GoI (PhD-MLA/04(02)/2015-16), an NSM research grant (MeitY/R&D/HPC/2(1)/2014), a Visvesvaraya Young
Faculty Research Fellowship from MeitY, and a Google PhD Fellowship.