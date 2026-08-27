+++
id           = "esophageal/ESOPH-13"
gid          = "esophageal"
ref          = "ESOPH-13"
page         = 24
title        = "Primary treatment options for medically fit adenocarcinoma, cT1b through cT4b"
nccn_version = "3.2026"
nccn_date    = "06/03/26"
generated    = "2026-08-27"
see_also     = ["ESOPH-14", "ESOPH-15", "ESOPH-16", "ESOPH-17", "ESOPH-20", "ESOPH-21"]

[facets]
disease   = "esophageal"
histology = "adenocarcinoma"
biomarker = ["msi-h", "dmmr"]
timepoint = ["primary-treatment", "neoadjuvant"]
intent    = ["curative", "palliative"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "medically_fit"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "tumor_class"
type = "text"
[[variables]]
name = "tumor_size"
type = "text"
[[variables]]
name = "differentiation"
type = "text"
[[variables]]
name = "lvi"
type = "enum"
options = ["present", "absent"]
[[variables]]
name = "msi_mmr"
type = "text"
[[variables]]
name = "surgery_decision"
type = "enum"
options = ["accepts surgery", "declines surgery"]
+++

# Source

- NCCN Esophageal and Esophagogastric Junction Cancers v3.2026, ESOPH-13, p24
- Adenocarcinomas
- Primary treatment options for patients who are medically fit
- Footnotes c, d, h, p, q, u, v, x, y, z, ss, tt, uu for this page are on ESOPH-13A
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, adenocarcinoma
- Medically fit ___ (medically_fit)
- Tumor classification ___ (tumor_class)
- Tumor size ___ (tumor_size)
- Differentiation ___ (differentiation)
- LVI ___ (lvi)
- MSI/MMR status ___ (msi_mmr)
- Patient decision on surgery ___ (surgery_decision)

# Tumor classification

- cT1b–cT2, N0, low-risk lesions
    - <3 cm
    - Well differentiated
- cT2, N0, high-risk lesions
    - LVI
    - ≥3 cm
    - Poorly differentiated
- cT1b–cT2, N+ or cT3–cT4a, Any N
- cT4b

# Primary treatment, cT1b–cT2, N0 low-risk lesions

- Esophagectomy
    - Then Surgical Outcomes After Esophagectomy (ESOPH-17)

# Primary treatment, cT2 N0 high-risk lesions, or cT1b–cT2 N+, or cT3–cT4a Any N

- Perioperative systemic therapy (category 1) (preferred)
    - Then Response Assessment (ESOPH-14)
- or Preoperative chemoradiation
    - Then Response Assessment (ESOPH-14)
- or Consider neoadjuvant or perioperative immune checkpoint inhibitor(s) (ICI)
    - Only if tumor is MSI-high (MSI-H)/MMR deficient (dMMR)
    - Then Response Assessment (ESOPH-14)
- or Definitive chemoradiation
    - Only for patients who decline surgery
    - Then Response Assessment (ESOPH-15)

# Primary treatment, cT4b

- Definitive chemoradiation
    - Then Response Assessment (ESOPH-16)
- or Consider chemotherapy alone
    - Only in the setting of invasion of trachea, great vessels, or heart
    - Then Palliative Management (ESOPH-21)

# Next

- Esophagectomy performed, go to Surgical Outcomes After Esophagectomy (ESOPH-17)
- After perioperative systemic therapy, preoperative chemoradiation, or neoadjuvant or perioperative ICI, go to Response Assessment (ESOPH-14)
- After definitive chemoradiation in a patient who declines surgery, go to Response Assessment (ESOPH-15)
- After definitive chemoradiation for cT4b, go to Response Assessment (ESOPH-16)
- Follow-up (ESOPH-20)
- Palliative Management (ESOPH-21)
