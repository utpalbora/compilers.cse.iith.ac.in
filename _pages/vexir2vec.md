---
title: "VexIR2Vec: An Architecture-Neutral Embedding Framework for Binary Similarity"
redirect_from:
  - /publications/bullseye/
  - /research/bullseye/
layout: textlay
excerpt: "IITH Compilers Team -- Research"
sitemap: false
permalink: /projects/vexir2vec/
---

# VexIR2Vec: An Architecture-Neutral Embedding Framework for Binary Similarity

S. Venkatakeerthy, Soumya Banerjee, Sayan Dey, Yashas Andaluri, Raghul P.S., and Subrahmanyam Kalyanasundaram, Fernando Magno Quintão Pereira, Ramakrishna Upadrasta

#### Published in [ACM TOSEM](https://dl.acm.org/doi/10.1145/3721481)([arXiv](https://arxiv.org/abs/2312.00507){:target="_blank"})

Binary similarity involves determining whether two binary programs exhibit similar functionality with applications in
vulnerability detection, malware analysis, and copyright detection. However, variations in compiler settings, target archi-
tectures, and deliberate code obfuscations significantly complicate the similarity measurement by effectively altering the
syntax, semantics, and structure of the underlying binary. To address these challenges, we propose VexIR2Vec, a robust,
architecture-neutral approach based on VEX-IR to solve binary similarity tasks. 

VexIR2Vec consists of three key components: a peephole extractor, a normalization engine (VexINE), and an embedding model (VexNet). The process to build program embeddings starts with the extraction of sequences of basic blocks, or peepholes, from control-flow graphs via random walks,
capturing structural information. These generated peepholes are then normalized using VexINE, which applies compiler-
inspired transformations to reduce architectural and compiler-induced variations. Embeddings of peepholes are generated
using representation learning techniques, avoiding Out-Of-Vocabulary (OOV) issues. These embeddings are then fine-tuned
with VexNet, a feed-forward Siamese network that maps functions into a high dimensional space for diffing and searching
tasks in an application-independent manner.

<figure>
  <img src="{{ site.url }}{{ site.baseurl }}/images/projects/vexir2vec/vex_ir2_vec_system.png" width="100%">
</figure>

VexIR2Vec uses angr for disassembling the binaries and obtaining the VEX-IR; Function Embeddings for binary similarity tasks are obtained by training simple Feed Forward Neural Networks.


## Overview of VexIR2Vec

<figure>
  <img src="{{ site.url }}{{ site.baseurl }}/images/projects/vexir2vec/vexir2vec_overview.png" width="100%">
</figure>

The Control-Flow Graphs of the functions from VEX-IR are generated from different compilation configurations. Then, the peepholes are obtained and normalized by VexINE, the VEX-IR Normalization Engine
by using different normalizing transformations. Function embedding is obtained from the embeddings derived from the
Opcodes, Types, and Arguments, along with the strings and external library calls used in the function. This embedding is
used as input to train VexNet, a simple feed-forward network in the Siamese setting designed to obtain the final embedding
of the function.

