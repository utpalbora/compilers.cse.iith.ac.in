---
title: "IITH Compilers Team - Home"
layout: homelay
excerpt: "Scalable Compilers for Heterogeneous Architectures Group at IIT Hyderabad."
sitemap: false
permalink: /
---

<style>

.middle {
  transition: .5s ease;
  opacity: 0;
  position: absolute;
  top: 90%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
}


.cont:hover .middle {
  opacity: 1;
}

.text {
  background-color: none;
  color: black;
  font-weight: bold;
  font-size: 14px;
}

.image
{
  width: 700px;
}
</style>

[Compilers team at IITH](https://compilers.cse.iith.ac.in/team/) 

<div markdown="0" id="carousel" class="carousel slide" data-ride="carousel" data-interval="5000" data-pause="hover" >
    <!-- Menu -->
    <ol class="carousel-indicators">
        <li data-target="#carousel" data-slide-to="0" class="active"></li>
        <li data-target="#carousel" data-slide-to="1"></li>
        <li data-target="#carousel" data-slide-to="2"></li>
        <li data-target="#carousel" data-slide-to="3"></li>
        <li data-target="#carousel" data-slide-to="4"></li>
        <li data-target="#carousel" data-slide-to="5"></li>
        <li data-target="#carousel" data-slide-to="6"></li>
        <li data-target="#carousel" data-slide-to="7"></li>
        <li data-target="#carousel" data-slide-to="8"></li>
        <li data-target="#carousel" data-slide-to="9"></li>
        <li data-target="#carousel" data-slide-to="10"></li>
        <li data-target="#carousel" data-slide-to="11"></li>
        <li data-target="#carousel" data-slide-to="12"></li>
    </ol>
    <!-- Items -->
    <div class="carousel-inner" markdown="0">
        <div class="item active cont">
        <a href="{{ site.url }}{{ site.baseurl }}/projects/ir2vec/">
            <img src="{{ site.url }}{{ site.baseurl }}/images/projects/ir2vec/flow.jpg" class="image" alt="IR2VEC">
        </a>
        <div class="middle">
            <div class="text">IR2Vec: LLVM IR based Scalable Program Embeddings</div>
            </div>
        </div>
        <div class="item cont">
            <a href="{{ site.url }}{{ site.baseurl }}/projects/posetrl/">
                <img src="{{ site.url }}{{ site.baseurl }}/images/projects/poset_rl/flowgraph.png" class="image" alt="POSET-RL">
            </a>
            <div class="middle">
                <div class="text">POSET-RL: Phase ordering for Optimizing Size and Execution Time using Reinforcement Learning</div>
            </div>
        </div>
        <div class="item cont">
            <a href="{{ site.url}}{{site.baseurl}}/publications/rl_loop_distribution/">
                <img src="{{ site.url }}{{ site.baseurl }}/images/projects/rl-distribution/FlowGraph.png"  class="image" alt="RL-Loop-Distribution">
            </a>
            <div class="middle">
                <div class="text">Reinforcement Learning assisted Loop Distribution for Locality and Vectorization</div>
            </div>
        </div>
        <div class="item cont">
            <a href="{{ site.url}}{{ site.baseurl}}/publications/rl4real/">
                <img src="{{ site.url }}{{ site.baseurl }}/images/projects/rl4real/rl4real.png" class="image" alt="RL4ReAl">
            </a>
            <div class="middle">
                <div class="text">RL4ReAl: Reinforcement Learning for Register Allocation</div>
            </div>
        </div>
        <div class="item cont">
            <a href="{{ site.url}}{{ site.baseurl}}/publications/mlcompilerbridge/">
                <img src="{{ site.url }}{{ site.baseurl }}/images/projects/ml-compiler-bridge/compiler-bridge-poster.jpg" class="image" alt="ML-Compiler-Bridge-Poster">
            </a>
            <div class="middle">
                <div class="text">The Next 700 ML-Enabled Compiler Optimizations</div>
            </div>
        </div>
        <div class="item cont">
            <a href="{{ site.url }}{{site.baseurl}}/publications/mlcompilerbridge">
                <img src="{{ site.url }}{{ site.baseurl }}/images/projects/ml-compiler-bridge/ml-compiler-bridge.png" class="image" alt="ML-Compiler-Bridge">
            </a>
            <div class="middle">
                <div class="text">The Next 700 ML-Enabled Compiler Optimizations</div>
            </div>
        </div>
        <div class="item cont">
            <a href ="{{site.url}}{{site.baseurl}}/projects/llov/">
                <img src="{{ site.url }}{{ site.baseurl }}/images/projects/llov/OmpVerify.jpeg" class="image" alt="LLOV" />
            </a>
            <div class="middle">
                <div class="text">LLOV: LLVM OpenMP Verifier</div>
            </div>
        </div>
        <div class="item cont">
            <a href ="{{site.url}}{{site.baseurl}}/projects/llov/">
                <img src="{{ site.url }}{{ site.baseurl }}/images/projects/llov/llov-time.png" class="image" alt="LLOV Time" />
            </a>
            <div class="middle">
                <div class="text">LLOV: LLVM OpenMP Verifier</div>
            </div>
        </div>
        <div class="item">
            <img src="{{ site.url }}{{ site.baseurl }}/images/homepic/Group_Poster.jpg" class="image" alt="Slide 1" />
        </div>
        <div class="item cont">
            <a href= "{{site.url}}{{site.baseurl}}/publications/analysis_pass-polly/">
                <img src="{{ site.url }}{{ site.baseurl }}/images/homepic/PolyhedralInfo_GSoC.jpg" class="image" alt="Slide 2" />
            </a>
            <div class="middle">
                <div class="text">Polly as an Analysis pass in LLVM</div>
            </div>
        </div>
        <div class="item cont">
            <a href= "{{site.url}}{{site.baseurl}}/publications/analysis_pass-polly/">
                <img src="{{ site.url }}{{ site.baseurl }}/images/homepic/Tiling_Example.jpg"  class="image" alt="Slide 3" />
            </a>
            <div class="middle">
                <div class="text">Polly as an Analysis pass in LLVM</div>
            </div>
        </div>
        <div class="item cont">
            <a href ="{{site.url}}{{site.baseurl}}/publications/vectorization/">
                <img src="{{ site.url }}{{ site.baseurl }}/images/homepic/Vectorization_Poster.jpg" class="image" alt="Slide 4" />
            </a>
            <div class="middle">
                <div class="text">A Comparative Study of Vectorization in Compilers</div>
            </div>
        </div>
        <div class="item cont">
            <a href= "{{site.url}}{{site.baseurl}}/publications/analysis_pass-polly/">
                <img src="{{ site.url }}{{ site.baseurl }}/images/homepic/PolyhedralInfo_Poster.jpg" class="image" alt="Slide 4" />
            </a>
            <div class="middle">
                <div class="text">Polly as an Analysis pass in LLVM</div>
            </div>
        </div>
    </div> 
  <a class="left carousel-control" href="#carousel" role="button" data-slide="prev">
    <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="right carousel-control" href="#carousel" role="button" data-slide="next">
    <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

