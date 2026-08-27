+++
id           = "rectal/REC-11"
gid          = "rectal"
ref          = "REC-11"
page         = 23
title        = "Workup of serial CEA elevation, and branch point for isolated pelvic/anastomotic recurrence or documented metachronous metastases"
nccn_version = "2.2026"
nccn_date    = "04/07/26"
generated    = "2026-08-27"
see_also     = ["REC-10", "REC-11A", "REC-12", "REC-13", "REC-17", "REC-18", "REC-A", "REC-B", "REC-C", "REC-E"]

[facets]
disease   = "rectal"
stage     = ["recurrent", "IV"]
biomarker = ["pmmr", "mss", "dmmr", "msi-h", "pole", "pold1", "tmb-high", "kras", "nras", "braf", "erbb2"]
timepoint = ["recurrence", "workup", "metastatic"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "presentation"
type = "enum"
options = ["serial CEA elevation", "isolated pelvic/anastomotic recurrence", "documented metachronous metastases"]
[[variables]]
name = "cea"
type = "text"
[[variables]]
name = "prior_rt"
type = "enum"
options = ["none", "short course RT", "chemoradiation"]
[[variables]]
name = "met_sites"
type = "text"
[[variables]]
name = "mmr"
type = "enum"
options = ["pMMR/MSS", "dMMR/MSI-H", "POLE/POLD1 mutation with ultra-hypermutated phenotype"]
[[variables]]
name = "gene_status"
type = "text"
[[variables]]
name = "resectability"
type = "enum"
options = ["resectable", "unresectable, potentially convertible", "unresectable, unconvertible"]
[[variables]]
name = "immunotherapy_candidate"
type = "enum"
options = ["yes", "no"]
+++

# Source

- NCCN Rectal Cancer v2.2026, REC-11, p23
- Applies to serial CEA elevation, isolated pelvic/anastomotic recurrence, and documented metachronous metastases
- Imaging throughout this page follows Principles of Imaging (REC-A)
- Resectability follows Principles of Surgery and Locoregional Therapies (REC-C)
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Presentation: ___ (presentation)
- CEA: ___ (cea)
- Previous RT given, short course or chemoradiation: ___ (prior_rt)
- Site(s) of documented metastases: ___ (met_sites)
- MMR/MSI status: ___ (mmr)
- KRAS, NRAS, BRAF, and HER2 (ERBB2) status: ___ (gene_status)
- Resectability: ___ (resectability)
- Candidate for immunotherapy: ___ (immunotherapy_candidate)

# Workup of serial CEA elevation

- Physical exam
- Colonoscopy
- C/A/P CT with contrast (REC-A)
- Consider FDG-PET/CT (REC-A)
- Positive findings
    - See treatment for isolated pelvic/anastomotic recurrence or documented metachronous metastases, below
- Negative findings
    - Consider FDG-PET/CT (REC-A)
    - Re-evaluate C/A/P CT with contrast in 3 mo
        - If positive findings, see treatment for isolated pelvic/anastomotic recurrence or documented metachronous metastases, below

# Isolated pelvic/anastomotic recurrence

- If previous RT was given, short course or chemoradiation, see Principles of Radiation Therapy (REC-E) for further guidance

# Documented metachronous metastases

- Documented by CT, MRI, and/or biopsy
- Determination of tumor gene status for KRAS, NRAS, and BRAF mutations and HER2 (ERBB2) overexpression/amplification
    - Individually or as part of tissue- or blood-based MGPT
    - See Principles of Pathologic Review (REC-B), KRAS, NRAS, and BRAF Mutation Testing and MSI or MMR Testing
    - MGPT has the ability to pick up rare and actionable mutations and fusions
- Evaluation by a multidisciplinary team
    - Including surgical consultation for patients with potentially resectable disease
- Consider FDG-PET/CT (REC-A)
- Classify as resectable (REC-C), or unresectable, potentially convertible (REC-C) or unconvertible
- If dMMR/MSI-H, or POLE/POLD1 mutation with ultra-hypermutated phenotype (eg, TMB >50 mut/Mb)
    - Patients who are not candidates for immunotherapy should be treated as recommended for pMMR/MSS disease
    - See NCCN Guidelines for Management of Immune Checkpoint Inhibitor-Related Toxicities

# Next

- Isolated pelvic/anastomotic recurrence, see REC-11A
- Metachronous metastases, resectable, pMMR/MSS, go to REC-12
- Metachronous metastases, resectable, dMMR/MSI-H or POLE/POLD1 mutation with ultra-hypermutated phenotype, go to REC-17
- Metachronous metastases, unresectable, potentially convertible or unconvertible, pMMR/MSS, go to REC-13
- Metachronous metastases, unresectable, potentially convertible or unconvertible, dMMR/MSI-H or POLE/POLD1 mutation with ultra-hypermutated phenotype, go to REC-18
