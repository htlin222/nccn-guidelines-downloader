+++
id           = "rectal/REC-2A"
gid          = "rectal"
ref          = "REC-2A"
page         = 12
title        = "Workup for rectal cancer with suspected or proven distant metastases"
nccn_version = "2.2026"
nccn_date    = "04/07/26"
generated    = "2026-08-27"
see_also     = ["REC-A", "REC-B", "REC-7", "REC-15"]

[facets]
disease   = "rectal"
stage     = "IV"
biomarker = ["kras", "nras", "braf", "erbb2", "dmmr", "msi-h", "pmmr", "mss", "pole", "pold1", "ret", "ntrk"]
timepoint = ["workup", "metastatic"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "met_sites"
type = "text"
[[variables]]
name = "resectability"
type = "enum"
options = ["potentially resectable", "not resectable", "to be determined"]
[[variables]]
name = "cea"
type = "text"
[[variables]]
name = "kras"
type = "text"
[[variables]]
name = "nras"
type = "text"
[[variables]]
name = "braf"
type = "text"
[[variables]]
name = "her2"
type = "text"
[[variables]]
name = "mmr_msi"
type = "text"
+++

# Source

- NCCN Rectal Cancer v2.2026, REC-2A, p12
- Applies to rectal cancer with suspected or proven distant metastases
- Imaging choices follow Principles of Imaging (REC-A)
- Biomarker testing follows Principles of Pathologic Review (REC-B)
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Rectal cancer with suspected or proven distant metastases
- Sites of distant metastases ___ (met_sites)
- Resectability of metastatic disease ___ (resectability)
- CEA ___ (cea)
- KRAS ___ (kras) / NRAS ___ (nras) / BRAF V600E ___ (braf)
- HER2 (ERBB2) ___ (her2)
- MMR or MSI status ___ (mmr_msi)

# Clinical presentation

- Counsel for family history, for all patients with rectal cancer
    - For suspected LS, FAP, and attenuated FAP, see the NCCN Guidelines for Genetic/Familial High-Risk Assessment: Colorectal, Endometrial, and Gastric
- For melanoma histology, see the NCCN Guidelines for Melanoma: Cutaneous
- For tools to aid optimal assessment and care of older adults with cancer, see the NCCN Guidelines for Older Adult Oncology

# Workup

- Colonoscopy
- Consider proctoscopy
- Chest CT and abdominal CT or MRI (REC-A)
- Pelvis MRI with or without contrast (REC-A)
- CBC
- Chemistry profile
- CEA
- Biopsy, if clinically indicated
- Consider FDG-PET/CT, skull base to mid-thigh (REC-A)
    - Only if potentially surgically curable M1 disease, in selected cases
- Consider MRI of liver for patients who have potentially resectable disease
- For information on DPYD testing and fluoropyrimidine-associated toxicity, see the NCCN Guidelines for Colon Cancer

# Biomarker testing

- Order as rapidly as possible following diagnosis (REC-B)
- KRAS, NRAS, and BRAF V600E mutations
- HER2 (ERBB2) overexpression/amplification
- MMR or MSI status, if not previously done
- Conduct testing as part of multigene panel testing (MGPT)
    - MGPT would identify rare and actionable mutations and gene fusions such as POLE/POLD1, RET, and NTRK 1/2/3
    - Tissue- or blood-based analysis using MGPT have the ability to pick up rare and actionable mutations and fusions

# If potentially resectable

- Multidisciplinary team evaluation
    - Including a surgeon experienced in the resection of hepatobiliary or lung metastases

# Next

- Proficient MMR (pMMR)/microsatellite stable (MSS), go to REC-7
- MMR deficient (dMMR)/MSI-high (MSI-H), go to REC-15
- POLE/POLD1 mutation with ultra-hypermutated phenotype (eg, TMB >50 mut/Mb), go to REC-15
