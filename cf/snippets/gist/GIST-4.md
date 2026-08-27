+++
id           = "gist/GIST-4"
gid          = "gist"
ref          = "GIST-4"
page         = 9
title        = "First-line and follow-up therapy for unresectable, recurrent, or metastatic GIST"
nccn_version = "1.2026"
nccn_date    = "01/13/26"
generated    = "2026-08-27"
see_also     = ["GIST-3", "GIST-5", "GIST-B", "GIST-C", "GIST-E", "GIST-F"]

[facets]
disease   = "gist"
histology = "gist"
stage     = ["IV", "recurrent"]
biomarker = ["kit", "pdgfra"]
timepoint = ["metastatic", "recurrence"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "presentation"
type = "enum"
options = ["unresectable primary", "recurrent", "metastatic"]
[[variables]]
name = "baseline_imaging"
type = "text"
[[variables]]
name = "mutation"
type = "text"
[[variables]]
name = "sdhb_ihc"
type = "text"
[[variables]]
name = "tki"
type = "text"
[[variables]]
name = "adherence"
type = "text"
+++

# Source

- NCCN Gastrointestinal Stromal Tumors v1.2026, GIST-4, p9
- Applies to unresectable primary disease
- Applies to recurrent or metastatic disease
- Principles of Imaging (GIST-F)
- General Principles of Surgery (GIST-C)
- Systemic Therapy Agents and Regimens for Unresectable, Progressive, or Metastatic Disease (GIST-E)
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Primary presentation ___ (presentation)
- Baseline imaging ___ (baseline_imaging)
- Mutational testing (NGS) ___ (mutation)
- SDHB IHC ___ (sdhb_ihc)
- Tyrosine kinase inhibitor ___ (tki)
- Patient adherence ___ (adherence)

# First-line therapy

- Baseline imaging (GIST-F)
- Mutational testing (NGS)
    - Mutational analysis may predict response to therapy with TKIs (GIST-B)
    - Tumors with SDH deficiency or NF1 mutations that lack mutations in KIT/PDGFRA may be considered for observation, as most, but not all, have more indolent behavior
- SDHB IHC
- Tyrosine kinase inhibitor (TKI) (GIST-E)
- Imaging to assess treatment response (GIST-F)
    - Maximal response may require treatment for at least 6 months to achieve
    - FDG-PET/CT may give indication of TKI efficacy after 2-4 weeks of therapy, when rapid readout of activity is necessary
    - Frequency of response assessment imaging may be decreased if the patient's disease is responding to treatment
    - Progression may be determined by contrast-enhanced CT or MR imaging with clinical interpretation
        - FDG-PET/CT scan may be used to clarify if CT or MRI are ambiguous
        - Increase in tumor size in the presence of decrease in tumor density is consistent with drug efficacy or benefit
- Evaluate patient adherence

# Follow-up therapy, stable disease or response

- Continue TKI (GIST-E)
- Obtain surgical consultation
- Consider resection (GIST-C)
    - Collaboration between medical oncologist and surgeon is necessary to determine the appropriateness and timing of surgery, following major response or sustained stable disease
- Continue TKI if resection not feasible

# Next

- After resection, H&P and imaging (GIST-F), or Postoperative Outcomes and Adjuvant Treatment (GIST-3)
- Progression, go to GIST-5
    - Life-long systemic therapy is recommended for TKI-sensitive GIST
