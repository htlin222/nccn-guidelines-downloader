+++
id           = "rectal/REC-11"
gid          = "rectal"
ref          = "REC-11"
page         = 23
title        = "Recurrence and workup: serial CEA elevation, isolated pelvic/anastomotic recurrence, documented metachronous metastases"
nccn_version = "2.2026"
nccn_date    = "04/07/26"
generated    = "2026-08-27"
see_also     = ["REC-10", "REC-10A", "REC-11A", "REC-12", "REC-13", "REC-17", "REC-18"]

[facets]
disease   = "rectal"
stage     = "recurrent"
biomarker = ["pmmr", "mss", "dmmr", "msi-h", "pole", "pold1", "tmb-high", "kras", "nras", "braf", "erbb2"]
timepoint = ["recurrence", "workup", "metastatic"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "prior_rt"
type = "enum"
options = ["none", "short course", "chemoradiation"]
[[variables]]
name = "cea"
type = "text"
[[variables]]
name = "presentation"
type = "enum"
options = ["serial CEA elevation", "isolated pelvic/anastomotic recurrence", "documented metachronous metastases"]
[[variables]]
name = "site"
type = "text"
[[variables]]
name = "mmr"
type = "enum"
options = ["pMMR/MSS", "dMMR/MSI-H"]
[[variables]]
name = "pole_pold1"
type = "text"
[[variables]]
name = "tmb"
type = "text"
[[variables]]
name = "kras_nras_braf"
type = "text"
[[variables]]
name = "her2"
type = "text"
[[variables]]
name = "resectability"
type = "enum"
options = ["resectable", "unresectable potentially convertible", "unresectable unconvertible"]
+++

# Source

- NCCN Rectal Cancer v2.2026, REC-11, p23
- Applies to recurrence after treatment of rectal cancer, presenting as serial CEA elevation, isolated pelvic/anastomotic recurrence, or documented metachronous metastases
- All imaging on this page follows Principles of Imaging (REC-A)
- Resectable and potentially convertible are judged by Principles of Surgery and Locoregional Therapies (REC-C)
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Previous RT given for the primary: ___ (prior_rt)
- Serial CEA: ___ (cea)
- Presentation of recurrence: ___ (presentation)
- Site of recurrent or metastatic disease: ___ (site)
- MMR/MSI status: ___ (mmr)
- POLE/POLD1: ___ (pole_pold1)
- TMB: ___ (tmb) mut/Mb
- KRAS/NRAS/BRAF: ___ (kras_nras_braf)
- HER2 (ERBB2) overexpression/amplification: ___ (her2)
- Resectability: ___ (resectability)

# Workup for serial CEA elevation

- Physical exam
- Colonoscopy
- C/A/P CT with contrast, per Principles of Imaging (REC-A)
- Consider FDG-PET/CT, per Principles of Imaging (REC-A)

# Result of the serial CEA workup

- Positive findings
    - See treatment for isolated pelvic/anastomotic recurrence or documented metachronous metastases, below
- Negative findings
    - Consider FDG-PET/CT, per Principles of Imaging (REC-A)
    - Re-evaluate C/A/P CT with contrast in 3 mo
        - Positive findings, see treatment for isolated pelvic/anastomotic recurrence or documented metachronous metastases, below
        - Negative findings, no further branch is given on this page

# Isolated pelvic/anastomotic recurrence

- If previous RT was given (short course or chemoradiation), see Principles of Radiation Therapy (REC-E) for further guidance
- Resectable
- Unresectable
- Treatment of isolated pelvic/anastomotic recurrence: REC-11A

# Documented metachronous metastases

- Documented by CT, MRI, and/or biopsy
- Determine tumor gene status for KRAS, NRAS, and BRAF mutations and HER2 (ERBB2) overexpression/amplification
    - Individually or as part of tissue- or blood-based MGPT
    - See Principles of Pathologic Review (REC-B), KRAS, NRAS, and BRAF Mutation Testing and MSI or MMR Testing
    - MGPT has the ability to pick up rare and actionable mutations and fusions
- Evaluate by a multidisciplinary team, including surgical consultation for patients with potentially resectable disease
- Consider FDG-PET/CT, per Principles of Imaging (REC-A)
- Resectable, per Principles of Surgery and Locoregional Therapies (REC-C)
    - pMMR/MSS (REC-12)
    - dMMR/MSI-H or POLE/POLD1 mutation with ultra-hypermutated phenotype (eg, TMB >50 mut/Mb) (REC-17)
        - Patients who are not candidates for immunotherapy should be treated as recommended for pMMR/MSS disease
        - See NCCN Guidelines for Management of Immune Checkpoint Inhibitor-Related Toxicities
- Unresectable, potentially convertible per Principles of Surgery and Locoregional Therapies (REC-C), or unconvertible
    - pMMR/MSS (REC-13)
    - dMMR/MSI-H or POLE/POLD1 mutation with ultra-hypermutated phenotype (eg, TMB >50 mut/Mb) (REC-18)
        - Patients who are not candidates for immunotherapy should be treated as recommended for pMMR/MSS disease
        - See NCCN Guidelines for Management of Immune Checkpoint Inhibitor-Related Toxicities

# Next

- Serial CEA elevation with negative workup, re-evaluate C/A/P CT with contrast in 3 mo
- Isolated pelvic/anastomotic recurrence, go to REC-11A
- Metachronous metastases, resectable, pMMR/MSS, go to REC-12
- Metachronous metastases, resectable, dMMR/MSI-H or POLE/POLD1 mutation with ultra-hypermutated phenotype, go to REC-17
- Metachronous metastases, unresectable (potentially convertible or unconvertible), pMMR/MSS, go to REC-13
- Metachronous metastases, unresectable (potentially convertible or unconvertible), dMMR/MSI-H or POLE/POLD1 mutation with ultra-hypermutated phenotype, go to REC-18
