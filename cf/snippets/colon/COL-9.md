+++
id           = "colon/COL-9"
gid          = "colon"
ref          = "COL-9"
page         = 18
title        = "Recurrence signalled by serial CEA elevation, and workup of documented metachronous metastases"
nccn_version = "2.2026"
nccn_date    = "04/07/26"
generated    = "2026-08-27"
see_also     = ["COL-A", "COL-B", "COL-C", "COL-10", "COL-11", "COL-15", "COL-16"]

[facets]
disease   = "colon"
stage     = ["recurrent", "IV"]
timepoint = ["recurrence", "workup", "metastatic"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "cea"
type = "text"
[[variables]]
name = "mmr_msi"
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
options = ["resectable", "potentially convertible", "unconvertible"]
+++

# Source

- NCCN Colon Cancer v2.2026, COL-9, p18
- Covers recurrence presenting as serial CEA elevation, and workup of documented metachronous metastases
- Principles of Imaging (COL-A)
- Principles of Surgery and Locoregional Therapies (COL-C)
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Serial CEA elevation, current CEA ___ (cea)
- MMR or MSI status ___ (mmr_msi)
- KRAS / NRAS / BRAF ___ (kras_nras_braf)
- HER2 (ERBB2) ___ (her2)
- Resectability ___ (resectability)

# Workup for serial CEA elevation

- Physical exam
- Colonoscopy
- C/A/P CT with contrast
    - Principles of Imaging (COL-A)
- Negative findings
    - Consider FDG-PET/CT (COL-A)
    - Re-evaluate C/A/P CT with contrast in 3 mo
    - Positive findings on re-evaluation, see treatment for documented metachronous metastases
- Positive findings
    - See treatment for documented metachronous metastases

# Documented metachronous metastases

- Documented by CT, MRI, and/or biopsy
- Determine tumor gene status
    - KRAS, NRAS, and BRAF mutations
    - HER2 (ERBB2) overexpression/amplification
    - Individually or as part of tissue- or blood-based MGPT
    - MGPT has the ability to pick up rare and actionable mutations and gene fusions
- Determine tumor MMR or MSI status, if not previously done
- Principles of Pathologic Review (COL-B) - KRAS, NRAS, and BRAF Mutation Testing and MSI or MMR Testing
- Evaluate by a multidisciplinary team
    - Including surgical consultation for patients with potentially resectable disease
- Consider FDG-PET/CT (COL-A)

# Next

- Resectable (COL-C)
    - pMMR/MSS, go to COL-10
    - dMMR/MSI-H or POLE/POLD1 mutation with ultra-hypermutated phenotype (eg, TMB >50 mut/Mb), go to COL-15
        - Patients who are not candidates for immunotherapy should be treated as recommended for pMMR/MSS disease
- Unresectable, potentially convertible (COL-C) or unconvertible
    - pMMR/MSS, go to COL-11
    - dMMR/MSI-H or POLE/POLD1 mutation with ultra-hypermutated phenotype (eg, TMB >50 mut/Mb), go to COL-16
        - Patients who are not candidates for immunotherapy should be treated as recommended for pMMR/MSS disease
- For immunotherapy-related toxicity, see NCCN Guidelines for Management of Immune Checkpoint Inhibitor-Related Toxicities
