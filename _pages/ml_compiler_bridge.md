---
title: "The Next 700 ML-Enabled Compiler Optimizations"
redirect_from:
    - /research/mlcompilerbridge
layout: textlay
excerpt: "IITH Compilers Team -- Research"
sitemap: false
permalink: /publications/mlcompilerbridge/
---

# The Next 700 ML-Enabled Compiler Optimizations
*S. VenkataKeerthy, Siddharth Jain, Umesh Kalvakuntla, Pranav Sai Gorantla, Rajiv Shailesh Chitale, Eugene Brevdo, Albert Cohen, Mircea Trofin, Ramakrishna Upadrasta*
#### Published in [CC 2024](https://doi.org/10.1145/3640537.3641580){:target="_blank"}([arXiv](https://arxiv.org/abs/2311.10800){:target="_blank"}) <a href="https://github.com/IITH-Compilers/ml-compiler-bridge" target="_blank"> <img  class="dp-img" alt="ML-Compiler-Bridge GitHub" src="https://github.githubassets.com/favicons/favicon.svg" width="23px" height="23px"></a>

### ML-Compiler-Bridge
There is a growing interest in enhancing compiler optimizations with ML models, yet interactions between compilers
and ML frameworks remain challenging. Some optimizations require tightly coupled models and compiler internals,
raising issues with modularity, performance and framework independence. Practical deployment and transparency for
the end-user are also important concerns. 

We propose MLCompiler-Bridge to enable ML model development within a traditional Python framework while making end-to-end integration with an optimizing compiler possible and efficient.
We evaluate it on both research and production use cases, for training and inference, over several optimization problems,
multiple compilers and its versions, and gym infrastructures.

<center>
<figure>
<img src="{{ site.url }}{{ site.baseurl }}/images/projects/ml-compiler-bridge/ml-compiler-bridge.png" width="85%">
</figure>
</center>

ML-Compiler-Bridge is compiler and ML-Framework independent library that can help in integrating compiler optimizations and ML models to aid in optimizations driven by ML approaches.
Our library supports both a wide range of training and inference scenarios involving simple and multiple interleaved communications.
ML-Compiler-Bridge can help in integrating the model deeper within the compiler easing out production related constraints.


### Features

* **Unified Framework:** Comes with a suite of two inter-process and two in-process model runners and three serialization-deserialization mechanisms to support interleaved and non-interleaved communication between models and compiler.
* **Multi-language Support:** Exposes C++ and C APIs to interface model runners and serializers with the compilers and Python APIs to interface inter-process model runners with ML models.
* **Compiler and ML-Framework Independence:** Provides compiler and ML-Framework independent APIs, and supports easier integration with compilers like LLVM, MLIR, and Pluto and ML Frameworks like TensorFlow, PyTorch, JAX, etc.
* **Deeper Integration:** Enables deeper integration of ML models within the compiler in a framework-independent manner to support easier inference in case of ML driven compiler optimizations.


Currently, ML-Compiler-Bridge supports gRPC and pipes based inter-process communication via `gRPCModelRunner` and `pipeModelRunner`. The inter-process model runners mainly help in interfacing ML models and compilers during training process. Whereas, the in-process model runners are designed to provide an effective means of deployment. Such model runners use a *compiled* form of the model within the compiler, there by easing out the overheads due to inter-process communication scenarios. We currently support ONNX and TF AOT based model runners for inference.

ML-Compiler-Bridge internally serializes and de-serializes data during inter-process communication in a seamless manner by using a SerDes module. Model runners  interact with SerDes to (de-)serialize C++ native data to model-specific types and back. The choice of (de-)serialization depends on the optimization and ML
model. We currently provide three options: bitstream, JSON, and Protobuf. They vary in terms of usage scenario, usage effort, and (de)serialization time.

ML-Compiler-Bridge is extendible; new model runners and serialization approaches can be added with a minimal effort.

### Use Cases

ML-Compiler-Bridge can be readily integrated with LLVM, MLIR and Pluto compilers. For integration with Pluto, our C APIs can be used. Currently, our library is integrated with the following ML-based compiler optimizations in LLVM.

* [**POSET-RL**]({{ site.url }}{{ site.baseurl }}/projects/posetrl){:target="_blank"} -- RL-based phase ordering for optimizing code-size and execution time.
* [**RL4ReAl**]({{ site.url }}{{ site.baseurl }}/publications/rl4real){:target="_blank"} --  RL-based register allocator with splitting, coloring and spilling sub-tasks.
* [**Loop Distribution**]({{ site.url }}{{ site.baseurl }}/publications/rl_loop_distribution){:target="_blank"} --   RL-based Loop Distribution for vectorization and Locality.
* [**Inliner**](https://lists.llvm.org/pipermail/llvm-dev/2020-April/140763.html){:target="_blank"} -- RL-based inlining for code-size reduction.

These optimizations are available as a part of our [ML-LLVM-Project](https://github.com/IITH-Compilers/ml-llvm-project).

### Performance

Using ML-Compiler-Bridge can significantly improve the training and inference times. 

<center>
<div>
    <figure>
        <img src="{{ site.url }}{{ site.baseurl }}/images/projects/ml-compiler-bridge/posetrl-training.png" width="35%">
        <img src="{{ site.url }}{{ site.baseurl }}/images/projects/ml-compiler-bridge/rl4real-training.png" width="33%">
    <figcaption style="text-align: center;">Training Time Performance of POSET-RL (left) and RL4ReAl (right)</figcaption>
    </figure>
</div>

<div style="display: flex; justify-content: space-between;">
    <figure style="margin: 0;">
        <img src="{{ site.url }}{{ site.baseurl }}/images/projects/ml-compiler-bridge/mic.png" width="33%">
        <img src="{{ site.url }}{{ site.baseurl }}/images/projects/ml-compiler-bridge/mlir-rtt.png" width="33%">
        <img src="{{ site.url }}{{ site.baseurl }}/images/projects/ml-compiler-bridge/pluto-rtt.png" width="33%">
    <figcaption style="text-align: center;">Performance of model runners in LLVM (left), MLIR (middle), and Pluto (right)</figcaption>
    </figure>
</div>
</center>

### Artifacts
[![Build and Tests](https://github.com/IITH-Compilers/MLCompilerBridge/actions/workflows/build.yml/badge.svg)](https://github.com/IITH-Compilers/MLCompilerBridge/actions/workflows/build.yml)
[![Doxygen Action](https://github.com/IITH-Compilers/MLCompilerBridge/actions/workflows/main.yml/badge.svg)](https://github.com/IITH-Compilers/MLCompilerBridge/actions/workflows/main.yml)

Code and other artifacts are available in our [GitHub](https://github.com/IITH-Compilers/ml-compiler-bridge) page.

The documentation and implementation specific details are available [here](https://iith-compilers.github.io/ML-Compiler-Bridge).

### Funding
This research is partially funded by a Google PhD fellowship, a PMRF fellowship, a research grant from Suzuki Motor Corporation, and a faculty research grant from AMD.
