---
title: "Enabling Polyhedral optimizations in TensorFlow through Polly"
#redirect_from:
#    - /publications/polly_tensor
layout: textlay
excerpt: "IITH Compilers Team -- Publications"
sitemap: false
permalink: /publications/polly_tensorflow/
---


<div class="container-fluid" style="height:100%; width:100%"> 
<h1>Enabling Polyhedral optimizations in TensorFlow through Polly</h1>
<p>Annanay Agarwal, Michael Kruse, Brian Retford, Tobias Grosser and <a href="https://www.iith.ac.in/~ramakrishna" target="_blank">Ramakrishna Upadrasta</p>
<h4> Presented at US LLVM Developers’ Meeting, 2017 </h4>

<br>
<div style="position:relative; top:-25px;">
 <h4><a href="https://llvm.org/devmtg/2017-10/slides/Agarwal-Enabling%20Polyhedral%20optimizations%20in%20TensorFlow%20through%20Polly.pdf" target="_blank">Slides</a>
 </h4>
 </div> 
<div style="display: flex; justify-content: center;">
 <iframe width="560" height="315" src="https://www.youtube.com/embed/uq67__tfdtQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
 <br>     
<p>TensorFlow is an Open Source Deep learning Framework by Google. Here, Polly’s SCoP detection was modified to
detect the convolution kernel from the LLVM IR generated for tf.conv2d() operation in XLA. The results include reduced cache misses - advanced data
locality optimizations like tiling. Also, it  performs operator fusion. Also, we got better overall runtime for convolution
kernel despite having a greater compilation time.</p>
<br>
</div>
