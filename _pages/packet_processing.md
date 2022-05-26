---
title: "Packet Processing Algorithm Identification using Program Embeddings"
#redirect_from:
#    - /publications/pktproc_algo_id
layout: textlay
excerpt: "IITH Compilers Team -- Publications"
sitemap: false
permalink: /publications/packet_processing/
---


<div class="container-fluid" style="height:100%; width:100%"> 
<h1>Packet Processing Algorithm Identification using Program Embeddings</h1>
<p>S. VenkataKeerthy, Yashas Andaluri, Sayan Dey, <a href="https://iiitd.ac.in/rinku" target="_blank">Rinku Shah</a>, <a href="https://praveenabt.github.io/" target="_blank">Praveen Tammana</a> and <a href="https://www.iith.ac.in/~ramakrishna" target="_blank">Ramakrishna Upadrasta</a></p>
<h4> To be Published at 6th Asia-Pacific Workshop on Networking (APNet 2022), Fuzhou, China</h4>

<br>

<div style="position:relative; top:-25px;">
 <h4><a href="https://apnet22.hotcrp.com/paper/31" target="_blank">Paper</a>
 </h4>
 </div>

 <br>     
<p> To keep up with the network speeds, many recent works propose to offload network functions to SmartNICs. The process involves identifying packet-processing algorithms in a network function program then offloading them to appropriate accelerators available on SmartNICs. This process is often done manually for each architecture and is error-prone and laborious. In this work, we propose an automated solution to identify algorithms in network function programs. We model our approach as a classification problem of Machine Learning (ML) and propose using sophisticated program embeddings for representing the network function programs. We also identify the limited availability of datasets and propose a way of extrapolating them by systematically generating equivalent programs using (existing) compiler transformations in popular compiler infrastructures. Our approach relies on modeling programs as embeddings, uses ML models trained on such extrapolated datasets, and shows superior results over the recent works.</p>
<br>
</div>

<h3>&nbsp;&nbsp; Precision, Recall and F1 score for algorithm identification using our approach </h3>

<figure>
  <img src="{{ site.url }}{{ site.baseurl }}/images/projects/pktproc_algo_id/all_ir2vec_crc_results.png" width="70%"/>  
</figure>

<figure>
  <img src="{{ site.url }}{{ site.baseurl }}/images/projects/pktproc_algo_id/all_ir2vec_crypto_results.png" width="70%"/>
</figure>
