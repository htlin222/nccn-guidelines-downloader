+++
id           = "colorectal_screening/CSCR-11"
gid          = "colorectal_screening"
ref          = "CSCR-11"
page         = 26
title        = "Diagnosis of colorectal cancer: universal MMR/MSI tumor testing and who also needs germline testing"
nccn_version = "2.2026"
nccn_date    = "04/23/2026"
generated    = "2026-08-30"
see_also     = ["CSCR-10", "CSCR-1"]

[facets]
disease   = "colorectal_screening"
biomarker = ["dmmr", "pmmr", "msi-h", "lynch"]
timepoint = ["diagnosis", "genetic-testing"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "diagnosis_date"
type = "text"
[[variables]]
name = "tumor_site"
type = "text"
[[variables]]
name = "specimen"
type = "enum"
options = ["colonoscopy-biopsy", "surgical-resection"]
[[variables]]
name = "mmr_result"
type = "enum"
options = ["mmr-proficient", "mmr-deficient", "pending"]
[[variables]]
name = "msi_result"
type = "text"
+++

# Source

- NCCN Colorectal Cancer Screening v2.2026, CSCR-11, p26
- Applies to an individual with a diagnosis of colorectal cancer (CRC)
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, CRC diagnosed ___ (diagnosis_date)
- Tumor site ___ (tumor_site)
- Specimen used for testing ___ (specimen)
- MMR result ___ (mmr_result)
- MSI result ___ (msi_result)

# Tumor testing for LS/dMMR

- Routine biomarker testing for Lynch syndrome (LS)/mismatch repair deficiency (dMMR) is recommended for all individuals with CRC
    - Preferably at the time of diagnosis
- Universal screening of all CRC tumors is recommended
    - To maximize sensitivity for dMMR and/or LS
    - To inform prognosis and care processes, in patients with or without LS
- Tumor testing for MMR and/or microsatellite instability (MSI) is the primary approach
    - For pathology-lab-based universal screening
    - To guide treatment decisions
- Choice of specimen: colonoscopy-based biopsies versus a surgical resection specimen
    - See pros and cons in the NCCN Guidelines for Genetic/Familial High-Risk Assessment: Colorectal, Endometrial, and Gastric

# Germline testing

- Germline multigene panel testing (MGPT) for evaluation of LS and other hereditary cancer syndromes is recommended for individuals with CRC <50 years of age
    - See NCCN Guidelines for Genetic/Familial High-Risk Assessment: Colorectal, Endometrial, and Gastric

# Next

- Record the tumor testing result
    - MMR-proficient
    - MMR-deficient
- Continue management under
    - NCCN Guidelines for Colon Cancer
    - NCCN Guidelines for Rectal Cancer
    - NCCN Guidelines for Genetic/Familial High-Risk Assessment: Colorectal, Endometrial, and Gastric
