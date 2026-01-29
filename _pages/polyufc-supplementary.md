---
title: "PolyUFC: Polyhedral Compilation Meets Roofline Analysis for Uncore Frequency Capping"
redirect_from:
  - /publications/polyufc-supplementary/
  - /research/polyufc-supplementary/
layout: textlay
excerpt: "IITH Compilers Team -- Research"
sitemap: false
permalink: /projects/polyufc-supplementary/
---

<style>
#textid table.poly-table {
  border-collapse: collapse;
  border: 2px solid #000;
}

#textid table.poly-table th,
#textid table.poly-table td {
  border: 1.5px solid #000;
  padding: 8px 10px;
  vertical-align: middle;
}

#textid table.poly-table th {
  font-weight: bold;
  background: #fff;
  text-align: left;
}
</style>

<style>
.polybench-table {
  border-collapse: collapse;
  margin: 30px auto;
  font-size: 14px;
  width: 85%;
}

.polybench-table th,
.polybench-table td {
  border: 1px solid #333;
  padding: 4px 10px;
  text-align: center;
}

.polybench-table th {
  background: #ddd;
  font-weight: bold;
}

.polybench-table td.kernel {
  text-align: left;
  font-family: monospace;
}

.polybench-table .cb {
  background: #f9cfcf; /* red!15 */
}

.polybench-table .bb {
  background: #dce3ff; /* blue!15 */
}

.polybench-table .sep {
  border-left: 3px solid blue !important;
}

.polybench-table .topsep {
  border-top: 2px solid #333;
}

polybench-table tr {
  border-bottom: 1.5px solid #333;
}

.polybench-table thead tr {
  border-bottom: 2.5px solid #000;
}

.polybench-table tbody tr:last-child {
  border-bottom: 2.5px solid #000;
}
.polybench-table tr {
  border-bottom: 2px solid black !important;
}

.polybench-table thead tr {
  border-bottom: 3px solid black !important;
}

.polybench-table tbody tr:first-child {
  border-top: 3px solid black !important;
}

.polybench-table tbody tr:last-child {
  border-bottom: 3px solid black !important;
}
.polybench-table td,
.polybench-table th {
  border-bottom: 2px solid black !important;
}
.polyufc-wide{
  position: relative;
  width: 100vw;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  margin-top: 40px;
}

.polyufc-row{
  max-width: 1600px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  gap: 40px;
  padding: 0 60px;
}

.polyufc-row img{
  width: 50%;
  height: auto;
}

.polyufc-caption{
  max-width: 1600px;
  margin: 10px auto 40px auto;
  padding: 0 60px;
  font-size: 95%;
  text-align: left;
}
.references-block {
  text-align: left !important;
}

.references-block p {
  text-align: left !important;
  margin-left: 2em;
  text-indent: -2em;
  margin-bottom: 0.8em;
  line-height: 1.35;
}
</style>



# PolyUFC: Polyhedral Compilation Meets Roofline Analysis for Uncore Frequency Capping
[Nilesh Rajendra Shah](https://nileshshah21.github.io/){:target="_blank"}, M V V S Manoj Kumar, Dhairya Baxi, and [Ramakrishna Upadrasta](https://www.iith.ac.in/~ramakrishna){:target="_blank"}

#### Published in [CGO'26](https://2026.cgo.org/details/cgo-2026-papers/40/PolyUFC-Polyhedral-Compilation-Meets-Roofline-Analysis-for-Uncore-Frequency-Capping){:target="_blank"} 



<figure class="text-center" style="margin: 30px 0;">
  <img src="/images/projects/polyufc/supplementary/scaling_capping_comparison.jpg"
       style="width:100%; max-width:1100px;">
    <strong>Fig. 1.</strong>
    Scaling and Capping comparison across the uncore frequency range.
    (a) <code style="color:#000; background:none;">gemver</code> capped from PolyBench.
    (b) <code style="color:#000; background:none;">gemver</code> frequency scaled.
    (c) <code style="color:#000; background:none;">conv2d</code> from ConvNeXt capped.
    (d) <code style="color:#000; background:none;">conv2d</code> scaled.
</figure>


<hr style="margin:50px 0;">

<h2 id="appendix" style="text-align:center; letter-spacing:2px;">
APPENDIX
</h2>

<p>
In App.&nbsp;
<a href="#variables-mathematical-modeling">A</a>, we show the variables used for mathematical
modeling in Sec.&nbsp;
<a href="#performance-power-estimation">2</a>.
In App.&nbsp;
<a href="#frequency-scaling-vs-cap">B</a>, we show a study comparing frequency capping and scaling.
We also discuss the experiments that we performed to obtain the
(performance and power) rooflines, followed by a pointer-chasing algorithm
for miss penalty.
<sup id="fn1-ref"><a href="#fn1">1</a></sup>
</p>

<figure style="margin:40px auto; width:90%; max-width:1100px;">
<table class="poly-table" style="width:100%; font-size:95%;">
<thead>
<tr>
  <th style="width:30%;">Variables</th>
  <th>Description</th>
</tr>
</thead>
<tbody>

<tr>
<td>\(T^{\Omega}_{\mathcal{I}}\)</td>
<td>Total time taken for floating point operations</td>
</tr>

<tr>
<td>\(T^{Q}_{f_c,\mathcal{I}}\)</td>
<td>Total time taken for memory operations with \(f_c\) and \(\mathcal{I}\) as parameters</td>
</tr>

<tr>
<td>\(\Omega\)</td>
<td>Total number of floating point operations</td>
</tr>

<tr>
<td>\(Q_{\text{DRAM}}\)</td>
<td>Total number of bytes transferred between \(LLC \leftrightarrow DRAM\)</td>
</tr>

<tr>
<td>\(\widehat{P}_{f_c,\text{DRAM}}\)</td>
<td>Peak power per byte transfer between \(LLC \leftrightarrow DRAM\)</td>
</tr>

<tr>
<td>\(P^{\text{core}}_{\mathcal{I}},\; P^{\text{uncore}}_{f_c,\mathcal{I}}\)</td>
<td>Total power consumption of the core and uncore</td>
</tr>

<tr>
<td>\(P_{f_c,\mathcal{I}}\)</td>
<td>Total power consumption of the package</td>
</tr>

<tr>
<td>\(f_c\)</td>
<td>Frequency cap of the uncore</td>
</tr>

<tr>
<td>\(\rho^{h}_{c_i},\; \rho^{m}_{c_i}\)</td>
<td>Hit/Miss ratio of cache level \(i\) \((1 \le i \le N)\)</td>
</tr>

<tr>
<td>\(\mathcal{H}_{c_i}\)</td>
<td>Hit time to access data in cache level \(i\)</td>
</tr>

<tr>
<td>\(\mathcal{M}^{t}_{f_c,LLC},\; \mathcal{M}^{p}_{f_c,LLC}\)</td>
<td>Miss time and power to access data in cache level \(LLC\)</td>
</tr>

</tbody>
</table>

<figcaption style="text-align:center; margin-top:10px; font-size:90%;">
<strong>Table I.</strong> Variables and their descriptions.
</figcaption>
</figure>



<h3 id="requency scaling vs. capping" style="margin-top:40px;">
B. Frequency scaling vs. capping
</h3>

<p>
To understand the difference between uncore frequency scaling and uncore capping,
we compare both optimization techniques.
In Fig.&nbsp;<a href="#fig-scaling-capping-comparison">1</a>,
when setting the uncore frequency, we limit the maximum uncore frequency for
capping the uncore component, compared to frequency scaling which fixes the
uncore frequency for the entire runtime of the program.
We compare the scaled and capped versions of
<span style="font-family:monospace;">conv2d</span> and
<span style="font-family:monospace;">gemver</span> to understand the differences.
It can be seen that frequency capping provides more fine-grained control over the
frequency range and reduces latencies due to frequency changes.
Therefore, for improving performance, frequency capping is preferable when
compared to scaling using a compiler-generated frequency control.
For <span style="font-family:monospace;">conv2d</span>, capping achieves
$$5.72\times$$
better performance than scaling over the uncore frequency range.
However, for energy-specific improvements, scaling is a viable option with up to
$$11\%$$
more energy improvement over capping.
</p>

<p style="text-align:center; font-weight:bold; margin-top:40px;">
TABLE II
</p>

<p style="text-align:center; color:purple; font-variant:small-caps;">
Selected kernels from PolyBench&nbsp;[6] with performance characterization on
BDW and RPL (static vs dynamic).
</p>

<table class="polybench-table">
<thead>
<tr>
  <th>Kernels</th>
  <th colspan="2" class="sep">BDW</th>
  <th colspan="2" class="sep">RPL</th>
</tr>
<tr>
  <th></th>
  <th class="sep">PolyUFC</th>
  <th>HW</th>
  <th class="sep">PolyUFC</th>
  <th>HW</th>
</tr>
</thead>
<tbody>

<tr><td class="kernel">2mm</td><td class="cb sep">CB</td><td class="cb">CB</td><td class="cb sep">CB</td><td class="cb">CB</td></tr>
<tr><td class="kernel">3mm</td><td class="cb sep">CB</td><td class="cb">CB</td><td class="cb sep">CB</td><td class="cb">CB</td></tr>
<tr><td class="kernel">atax</td><td class="bb sep">BB</td><td class="bb">BB</td><td class="bb sep">BB</td><td class="bb">BB</td></tr>
<tr><td class="kernel">bicg</td><td class="bb sep">BB</td><td class="bb">BB</td><td class="bb sep">BB</td><td class="bb">BB</td></tr>
<tr><td class="kernel">gemm</td><td class="cb sep">CB</td><td class="cb">CB</td><td class="cb sep">CB</td><td class="cb">CB</td></tr>
<tr><td class="kernel">gemver</td><td class="bb sep">BB</td><td class="bb">BB</td><td class="bb sep">BB</td><td class="bb">BB</td></tr>
<tr><td class="kernel">gesummv</td><td class="bb sep">BB</td><td class="bb">BB</td><td class="bb sep">BB</td><td class="bb">BB</td></tr>
<tr><td class="kernel">mvt</td><td class="bb sep">BB</td><td class="bb">BB</td><td class="bb sep">BB</td><td class="bb">BB</td></tr>
<tr><td class="kernel">syr2k</td><td class="bb sep">BB</td><td class="cb">CB</td><td class="cb sep">CB</td><td class="cb">CB</td></tr>
<tr><td class="kernel">syrk</td><td class="cb sep">CB</td><td class="cb">CB</td><td class="cb sep">CB</td><td class="cb">CB</td></tr>
<tr><td class="kernel">doitgen</td><td class="cb sep">CB</td><td class="cb">CB</td><td class="cb sep">CB</td><td class="cb">CB</td></tr>
<tr><td class="kernel">correlation</td><td class="cb sep">CB</td><td class="cb">CB</td><td class="cb sep">CB</td><td class="cb">CB</td></tr>
<tr><td class="kernel">floyd-warshall</td><td class="bb sep">BB</td><td class="bb">BB</td><td class="bb sep">BB</td><td class="bb">BB</td></tr>
<tr><td class="kernel">deriche</td><td class="bb sep">BB</td><td class="bb">BB</td><td class="bb sep">BB</td><td class="bb">BB</td></tr>
<tr><td class="kernel">adi</td><td class="bb sep">BB</td><td class="bb">BB</td><td class="bb sep">BB</td><td class="bb">BB</td></tr>
<tr><td class="kernel">jacobi-1d</td><td class="cb sep">CB</td><td class="cb">CB</td><td class="cb sep">CB</td><td class="cb">CB</td></tr>
<tr><td class="kernel">trmm</td><td class="cb sep">CB</td><td class="cb">CB</td><td class="cb sep">CB</td><td class="cb">CB</td></tr>
<tr><td class="kernel">trisolv</td><td class="bb sep">BB</td><td class="bb">BB</td><td class="bb sep">BB</td><td class="bb">BB</td></tr>
<tr><td class="kernel">cholesky</td><td class="cb sep">CB</td><td class="cb">CB</td><td class="cb sep">CB</td><td class="cb">CB</td></tr>
<tr><td class="kernel">lu</td><td class="cb sep">CB</td><td class="bb">BB</td><td class="cb sep">CB</td><td class="cb">CB</td></tr>
<tr><td class="kernel">durbin</td><td class="cb sep">CB</td><td class="cb">CB</td><td class="cb sep">CB</td><td class="cb">CB</td></tr>
<tr><td class="kernel">gramschmidt</td><td class="cb sep">CB</td><td class="bb">BB</td><td class="cb sep">CB</td><td class="cb">CB</td></tr>

</tbody>
</table>

<h3 id="appendix-subsec-kernel-characterization" style="margin-top:40px;">
C.&nbsp;Kernel Characterization
</h3>

<p>
In Fig.&nbsp;<a href="#fig-performance-power-characterization-broadwell">2</a>, we show the
kernel characterization for BDW.
<span style="font-variant:small-caps;">PolyUFC</span> correctly characterizes
<span style="font-variant:small-caps;">PolyBench</span> [6] codes on large problem sizes
for 20 out of 22 kernels that compile within the timeout limit of 30 minutes or are
parallelized using Polygeist&nbsp;[7] with the Pluto optimizer.
In Table&nbsp;<a href="#table-evaluation-benchmarks-polybench">II</a>, we show the
performance characterization accuracy for
<span style="font-variant:small-caps;">PolyBench</span> kernels on BDW and RPL.
</p>


<figure class="text-center" style="margin: 30px 0;">
  <img src="/images/projects/polyufc/supplementary/polybench_characterize_BDW_mark.png"
     style="display:block; margin:0 auto; width:110%; max-width:1800px;">
<figcaption style="margin-top:10px; font-size:95%; text-align:center;">
  <strong>Fig.&nbsp;2.</strong>
  Performance and Power Characterization on BDW for
  <span style="font-variant:small-caps;">PolyBench</span> with large problem size.
  Vertically, from top to bottom, the characterization of programs shifts from
  <b>BB → CB</b>
  due to higher <b>OI</b>.
</figcaption>

<h3 id="appendix-subsec-experimental-setup-details" style="margin-top:40px; text-align:left;">
D.&nbsp;Experimental Setup and Other Details
</h3>

<p style="margin-left:1.5em; text-align:left;">
<span style="font-style:italic;">a) Performance counters.</span>
In Table&nbsp;<a href="#tab-papi-singlecol">III</a>, we show the set of events used to
collect hardware measurements for OI calculations on BDW and RPL.
</p>

<p style="margin-left:1.5em; text-align:left;">
<span style="font-style:italic;">b) Hardware prefetchers and vectorization.</span>
For all experiments, hardware prefetchers and loop vectorization are enabled
(default <span style="font-family:monospace;">-O3</span>). However, we do not explicitly
model prefetchers, as we assume that their impact on uncore and DRAM
characterization remains unchanged. While vectorization is enabled during
compilation, it does not directly affect the uncore frequency search for energy
improvements.
</p>


<figure id="tab-papi-singlecol" style="margin:40px auto; width:80%; max-width:900px;">

<div style="text-align:center; font-weight:bold; letter-spacing:1px;">
TABLE&nbsp;III
</div>

<div style="text-align:center; font-variant:small-caps; margin-bottom:10px;">
Common PAPI and native events for estimating FLOPs and cache misses.
Availability is architecture-dependent; added from
<span style="font-family:monospace;">papi_native_avail</span>.
</div>

<table style="width:100%; border-collapse:collapse; font-size:90%;">

<thead>
<tr style="border-top:2px solid black; border-bottom:1.5px solid black;">
  <th style="text-align:left; padding:4px 6px;">Category / Description</th>
  <th style="text-align:left; padding:4px 6px;">Event</th>
</tr>
</thead>

<tbody>

<tr>
  <td style="padding:3px 6px; text-align:left;">FLOPs SP (BDW)</td>
  <td style="padding:3px 6px; text-align:left; font-family:monospace;">
    FP_ARITH_INST_RETIRED:SCALAR
  </td>
</tr>

<tr>
  <td style="padding:3px 6px; text-align:left;">FLOPs DP (BDW)</td>
  <td style="padding:3px 6px; text-align:left; font-family:monospace;">
    FP_ARITH_INST_RETIRED:SCALAR_DOUBLE
  </td>
</tr>

<tr>
  <td style="padding:3px 6px; text-align:left;">FLOPs SP (RPL P-core)</td>
  <td style="padding:3px 6px; text-align:left; font-family:monospace;">
    adl_glc::FP_ARITH_INST_RETIRED:SCALAR
  </td>
</tr>

<tr>
  <td style="padding:3px 6px; text-align:left;">FLOPs DP (RPL P-core)</td>
  <td style="padding:3px 6px; text-align:left; font-family:monospace;">
    adl_glc::FP_ARITH_INST_RETIRED:SCALAR_DOUBLE
  </td>
</tr>

<tr>
  <td style="padding:3px 6px; text-align:left;">FLOPs SP (RPL E-core)</td>
  <td style="padding:3px 6px; text-align:left; font-family:monospace;">
    adl_grt::FP_ARITH_INST_RETIRED:SCALAR
  </td>
</tr>

<tr>
  <td style="padding:3px 6px; text-align:left;">FLOPs DP (RPL E-core)</td>
  <td style="padding:3px 6px; text-align:left; font-family:monospace;">
    adl_grt::FP_ARITH_INST_RETIRED:SCALAR_DOUBLE
  </td>
</tr>

<tr style="border-bottom:2px solid black;">
  <td style="padding:3px 6px; text-align:left;">LLC misses</td>
  <td style="padding:3px 6px; text-align:left; font-family:monospace;">
    PAPI_L3_TCM or perf::PERF_COUNT_HW_CACHE_LL:MISS
  </td>
</tr>

</tbody>
</table>

</figure>

<p style="margin-left:1.5em; text-align:left;">
<span style="font-style:italic;">c) Turbo boost.</span>
In the experimental setup, we enable turbo boost technologies for the core when
applying frequency caps for the uncore component.
</p>

<p style="margin-left:1.5em; text-align:left;">
<span style="font-style:italic;">d) Obtaining rooflines.</span>
We generate <em>comprehensive rooflines</em>—both performance and energy—spanning
the entire frequency spectrum available on each platform. We begin from
CPU-specific microbenchmarks&nbsp;[8] derived from the original roofline&nbsp;[9] and
energy roofline models&nbsp;[10]. We retargeted these microbenchmarks for recent
Intel processors with enhanced memory subsystems that include two different
port configurations: 2-Load/2-Store (Intel Cypress Cove: RKL) and 3-Load/2-Store
(Intel Raptor Cove: RPL)&nbsp;[11].
</p>

<p style="margin-left:1.5em; text-align:left;">
<span style="font-style:italic;">e) Roofline microbenchmarking.</span>
The OpenMP-based microbenchmarks require approximately
$$\approx 3$$
seconds per iteration when executed at fixed core and uncore frequencies on RPL.
We generate microbenchmarks&nbsp;[8,12] for intensities ranging from
$$0\;–\;10^6$$,
and each PAPI event runs for
$$2^{10}$$
iterations, for a total wall-clock time of approximately
$$\approx 1$$
hour.
</p>

<figure class="text-center" style="margin: 30px 0;">
  <img src="/images/projects/polyufc/supplementary/combined_chart.jpg"
       style="width:100%; max-width:1100px;">
</figure>

<p style="margin-left:1.5em; text-align:left;">
<span style="font-style:italic;">f) Computing miss-penalty with pointer-chasing.</span>
To obtain average memory latency across the memory hierarchies, the hit latency
and miss penalty for different memory levels are required. To obtain these
latencies, we use random cache-access microbenchmarks using pointer-chasing
threads&nbsp;[8]. Our measurements eliminate the effect of prefetching and
parallelism in latency calculations.
</p>

<p style="margin-left:1.5em; text-align:left;">
<span style="font-style:italic;">g) Curve fitting on miss penalty.</span>
For analytical modeling over the uncore component, we use non-linear curve
fitting on the space of uncore frequencies to obtain
$$\mathcal{M}^{t}_{f,LLC}$$
and
$$\mathcal{M}^{p}_{f,LLC}$$
with \(f\) as a parameter. For example, on the RPL platform in
Fig.&nbsp;<a href="#fig-pointer-chasing-latency">3</a>, we show the curve fitting
over a range of uncore frequencies for miss latency using
Eq.&nbsp;<span style="font-weight:600;">(6)</span>.
</p>

### Go to Main Page: 
[PolyUFC](https://compilers.cse.iith.ac.in/projects/polyufc/){:target="_blank"}

<h2 style="text-align:left; margin-top:60px; letter-spacing:1px;">
REFERENCES
</h2>

<div class="references-block">

<p>
[1] A. Abel and J. Reineke, “nanobench: A low-overhead tool for running microbenchmarks on x86 systems,”
in <i>2020 IEEE International Symposium on Performance Analysis of Systems and Software (ISPASS)</i>.
IEEE, 2020, pp. 34–46.
</p>

<p>
[2] J. W. Choi, “A roofline model of energy ubenchmarks,”
<a href="https://github.com/jeewhanchoi/a-roofline-model-of-energy-ubenchmarks">
https://github.com/jeewhanchoi/a-roofline-model-of-energy-ubenchmarks
</a>, 2020.
</p>

<p>
[3] J. W. Choi, D. Bedard, R. Fowler, and R. Vuduc, “A roofline model of energy,”
in <i>2013 IEEE 27th International Symposium on Parallel and Distributed Processing</i>,
2013, pp. 661–672.
</p>

<p>
[4] Intel Corporation, “Intel® 64 and IA-32 Architectures Software Developer’s Manual,”
<a href="https://www.intel.com/content/www/us/en/developer/articles/technical/intel-sdm.html">
https://www.intel.com/content/www/us/en/developer/articles/technical/intel-sdm.html
</a>;
<a href="https://cdrdv2.intel.com/v1/dl/getContent/671200">
https://cdrdv2.intel.com/v1/dl/getContent/671200
</a>, 2025.
</p>

<p>
[5] W. S. Moses, L. Chelini, R. Zhao, and O. Zinenko, “Polygeist: Raising C to polyhedral MLIR,”
in <i>2021 30th International Conference on Parallel Architectures and Compilation Techniques (PACT)</i>.
IEEE Computer Society, Sep. 2021, pp. 45–59.
</p>

<p>
[6] L.-N. Pouchet <i>et al.</i>, “PolyBench benchmarks,”
<a href="http://sourceforge.net/projects/polybench/">
http://sourceforge.net/projects/polybench/
</a>, 2025.
</p>

<p>
[7] S. Williams, A. Waterman, and D. Patterson, “Roofline: An insightful visual performance model for
multicore architectures,” <i>Commun. ACM</i>, vol. 52, no. 4, pp. 65–76, Apr. 2009. [Online].
Available:
<a href="https://doi.org/10.1145/1498765.1498785">
https://doi.org/10.1145/1498765.1498785
</a>
</p>

</div>
