+++
id           = "genetics_bopp/CRIT-6A"
gid          = "genetics_bopp"
ref          = "CRIT-6A"
page         = 33
title        = "Footnotes for CRIT-6: what counts as a close relative, as metastatic prostate cancer, and how far family history extends"
nccn_version = "3.2026"
nccn_date    = "02/19/26"
generated    = "2026-08-30"
see_also     = ["CRIT-6", "EVAL-A", "EVAL-B", "CRIT-2", "CRIT-4", "CRIT-5"]

[facets]
disease    = "genetics_bopp"
timepoint  = "genetic-testing"
population = "male"

[[variables]]
name = "family_structure"
type = "text"
[[variables]]
name = "close_relatives"
type = "text"
[[variables]]
name = "met_evidence"
type = "enum"
options = ["biopsy-proven", "radiographic evidence", "both", "neither"]
[[variables]]
name = "met_sites"
type = "text"
[[variables]]
name = "biochemical_recurrence_only"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "pca_mortality"
type = "text"
[[variables]]
name = "male_lineage"
type = "text"
[[variables]]
name = "relative_test_result"
type = "enum"
options = ["not tested", "P/LP variant detected", "negative for detectable P/LP variants"]
[[variables]]
name = "other_family_history"
type = "text"
+++

# Source

- NCCN Hereditary Cancer Testing Criteria v3.2026, CRIT-6A, p33
- Footnotes for CRIT-6, the testing criteria for prostate cancer susceptibility genes
- All recommendations are category 2A unless otherwise indicated

# Assessment

- Family structure, and whether it is unknown or limited: ___ (family_structure)
- Close blood relatives on the same side of the family: ___ (close_relatives)
- Evidence establishing metastatic prostate cancer: ___ (met_evidence)
- Sites of disease: ___ (met_sites)
- Biochemical recurrence only, with nothing else: ___ (biochemical_recurrence_only)
- Prostate cancer-specific mortality in the family: ___ (pca_mortality)
- Relationship through male relatives, if the affected relative is third-degree: ___ (male_lineage)
- Genetic testing result of the affected first-degree relative: ___ (relative_test_result)
- Other family history of cancer: ___ (other_family_history)

# Genetic counseling and family structure

- For further details regarding the nuances of genetic counseling and testing, see EVAL-A
- Consideration of the limitations of unknown or limited family structure is indicated
    - See EVAL-A

# What counts as a close blood relative

- Close blood relatives include relatives on the same side of the family (EVAL-B)
    - First-degree
    - Second-degree
    - Third-degree

# What counts as metastatic prostate cancer

- Metastatic prostate cancer is biopsy-proven and/or with radiographic evidence
- It includes distant metastasis
- It includes regional bed or nodes
- It is not a biochemical recurrence only
- Prostate cancer-specific mortality should be a surrogate for metastatic disease for family history purposes

# Extending the family history criterion to a third-degree relative

- This may be extended to an affected third-degree relative if related through two male relatives
    - Eg, paternal grandfather's mother or sister
- If the affected first-degree relative underwent genetic testing and is negative for detectable P/LP variants, and there is no other family history of cancer, there is a low probability that any finding will have documented clinical utility

# Gene-specific risk

- Level of risk for prostate cancer varies by gene
- There is emerging evidence for potential risk and/or therapeutic relevance for prostate cancer for additional genes
- See NCCN Guidelines for Prostate Cancer

# Where other personal or family cancer histories are covered

- Breast cancer, see CRIT-2
- Ovarian cancer, see CRIT-4
- Pancreatic cancer, see CRIT-5

# Early onset prostate cancer

- Referring to data regarding early onset prostate cancer
    - Ewing et al
    - Kote-Jarai et al
    - Witte et al
    - Karlsson et al, PRACTICAL consortium

# Next

- Return to CRIT-6 for the prostate cancer testing criteria these footnotes qualify
