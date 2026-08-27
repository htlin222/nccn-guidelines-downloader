+++
id           = "gist/GIST-2"
gid          = "gist"
ref          = "GIST-2"
page         = 7
title        = "Neoadjuvant therapy for resectable GIST when resection carries significant morbidity"
nccn_version = "1.2026"
nccn_date    = "01/13/26"
generated    = "2026-08-27"
see_also     = ["GIST-1", "GIST-3", "GIST-5", "GIST-B", "GIST-C", "GIST-F"]

[facets]
disease   = "gist"
histology = "gist"
biomarker = ["kit", "pdgfra", "ntrk", "braf"]
timepoint = ["workup", "neoadjuvant", "primary-treatment"]
intent    = "curative"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "tumor_site"
type = "text"
[[variables]]
name = "tumor_size"
type = "text"
[[variables]]
name = "planned_surgery"
type = "text"
[[variables]]
name = "mutation"
type = "text"
[[variables]]
name = "sdhb_ihc"
type = "text"
+++

# Source

- NCCN Gastrointestinal Stromal Tumors v1.2026, GIST-2, p7
- Applies to resectable GIST with significant morbidity
- Consider neoadjuvant therapy only if surgical morbidity could be reduced by downsizing the tumor preoperatively (GIST-E)
- Neoadjuvant therapy for genotype-sensitive disease may prohibit accurate assessment of recurrence risk following resection (GIST-A)
- Medical therapy is the usual course of treatment
    - Patient may proceed to surgery if bleeding or symptomatic tumor or poor treatment tolerance
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, GIST at ___ (tumor_site)
- Tumor size ___ (tumor_size)
- Resectable, but resection carries significant morbidity
- Resection that would be required: ___ (planned_surgery)
- Mutational testing result: ___ (mutation)
- SDHB IHC: ___ (sdhb_ihc)

# Testing before starting neoadjuvant therapy

- Mutational testing by next-generation sequencing (NGS)
    - Testing tumor for mutation is recommended prior to starting preoperative therapy, to ensure tumor has a genotype that is likely to respond to treatment
    - Mutational analysis may predict response to therapy with TKIs (GIST-B)
- SDHB immunohistochemistry (IHC)

# Neoadjuvant therapy by genotype

- Imatinib for KIT or PDGFRA mutations
    - Excluding PDGFRA exon 18 mutations that are insensitive to imatinib, including D842V
- Avapritinib for GIST with PDGFRA exon 18 mutations that are insensitive to imatinib, including PDGFRA D842V
- NTRK-directed therapies for NTRK fusions
- BRAF-directed therapies for certain BRAF mutations
- For succinate dehydrogenase (SDH)-deficient GIST
    - Sunitinib
    - or Regorafenib
    - or Observation (category 2B)
        - Tumors with SDH deficiency or NF1 mutations that lack mutations in KIT/PDGFRA may be considered for observation, as most, but not all, have more indolent behavior
    - or Clinical trial
- Forgo neoadjuvant therapy if other mutations, other than those listed above

# Response assessment on therapy

- Imaging to assess treatment response (GIST-F)
- Evaluate patient adherence
- Maximal response may require treatment for at least 6 months to achieve
- FDG-PET/CT may give indication of TKI efficacy after 2-4 weeks of therapy, when rapid readout of activity is necessary
- Frequency of response assessment imaging may be decreased if the patient's disease is responding to treatment
- Progression may be determined by contrast-enhanced CT or MR imaging with clinical interpretation
    - FDG-PET/CT scan may be used to clarify if CT or MRI are ambiguous
    - Increase in tumor size in the presence of decrease in tumor density is consistent with drug efficacy or benefit

# Next

- Response, or stable disease
    - Monitor for maximal response if feasible; if maximal response is achieved, proceed to surgery
    - Surgery, if feasible, after maximal response (GIST-C)
- Progression
    - Surgery, if feasible (GIST-C)
- Before either surgery, collaboration between medical oncologist and surgeon is necessary to determine the appropriateness and timing of surgery, following major response or sustained stable disease
- After surgery, go to Postoperative Outcomes and Adjuvant Treatment (GIST-3)
- If surgery not feasible, see (GIST-5)
