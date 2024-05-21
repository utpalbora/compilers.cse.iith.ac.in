---
title: "Packet Processing Algorithm Identification using Program Embeddings"
redirect_from:
    - /research/packet_processing/
layout: textlay
excerpt: "IITH Compilers Team -- Publications"
sitemap: false
permalink: /publications/packet_processing/
---


<div class="container-fluid" style="height:100%; width:100%"> 
<!-- <h1>Packet Processing Algorithm Identification using Program Embeddings</h1>
<p>S. VenkataKeerthy, Yashas Andaluri, Sayan Dey, <a href="https://iiitd.ac.in/rinku" target="_blank">Rinku Shah</a>, <a href="https://praveenabt.github.io/" target="_blank">Praveen Tammana</a> and <a href="https://www.iith.ac.in/~ramakrishna" target="_blank">Ramakrishna Upadrasta</a></p>
<h4> To be Published at 6th Asia-Pacific Workshop on Networking (APNet 2022), Fuzhou, China</h4> -->

# Packet Processing Algorithm Identification using Program Embeddings
*S. VenkataKeerthy, Yashas Andaluri, Sayan Dey, [Rinku Shah](https://iiitd.ac.in/rinku){:target="_blank"}, [Praveen Tammana](https://praveenabt.github.io/),[Ramakrishna Upadrasta](https://www.iith.ac.in/~ramakrishna)*
#### Published in [APNet 2022](https://conferences.sigcomm.org/events/apnet2022/papers/Packet%20Processing%20Algorithm%20Identification%20using%20Program%20Embeddings1.pdf){:target="_blank"} ([Slides](https://conferences.sigcomm.org/events/apnet2022/slides/apnet22/Packet%20Processing%20Algorithm%20Identification%20using%20Program%20Embeddings.pdf){:target="_blank"}) 
<br>

<div style="display: flex; justify-content: center;">
 <iframe width="1000" height="500" src="https://www.youtube.com/embed/SI5JyidQJC4?start=29388" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<br>

<!-- <div style="position:relative; top:-25px;">
 <h4><a href="https://apnet22.hotcrp.com/doc/apnet22-paper31.pdf" target="_blank">Paper</a>
 </h4>
 </div>

 <br>      -->
<p> To keep up with the network speeds, many recent works propose to offload network functions to SmartNICs. The process involves identifying packet-processing algorithms in a network function program then offloading them to appropriate accelerators available on SmartNICs. This process is often done manually for each architecture and is error-prone and laborious. In this work, we propose an automated solution to identify algorithms in network function programs. We model our approach as a classification problem of Machine Learning (ML) and propose using sophisticated program embeddings for representing the network function programs. We also identify the limited availability of datasets and propose a way of extrapolating them by systematically generating equivalent programs using (existing) compiler transformations in popular compiler infrastructures. Our approach relies on modeling programs as embeddings, uses ML models trained on such extrapolated datasets, and shows superior results over the recent works.</p>
<br>

<figure>
<img src="{{ site.url }}{{ site.baseurl }}/images/projects/packet_processing/Proposed_approach_overview.png" width="100%">
<center><p><b>Overview of the proposed approach</b></p></center>
</figure>


</div>

<!-- <h3>&nbsp;&nbsp; Precision, Recall and F1 score for algorithm identification using our approach </h3>

<figure>
  <img src="{{ site.url }}{{ site.baseurl }}/images/projects/packet_processing/all_ir2vec_crc_results.png" width="70%"/>  
</figure>

<figure>
  <img src="{{ site.url }}{{ site.baseurl }}/images/projects/packet_processing/all_ir2vec_crypto_results.png" width="70%"/>
</figure>  -->
