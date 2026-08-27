+++
id           = "gastric/GAST-3"
gid          = "gastric"
ref          = "GAST-3"
page         = 13
title        = "Response assessment and additional management after primary treatment in medically fit patients"
nccn_version = "3.2026"
nccn_date    = "06/03/26"
generated    = "2026-08-27"
see_also     = ["GAST-3A", "GAST-5", "GAST-7", "GAST-9"]

[facets]
disease   = "gastric"
biomarker = ["msi-h", "dmmr"]
timepoint = ["neoadjuvant", "primary-treatment"]
intent    = ["curative", "palliative"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "primary_treatment"
type = "enum"
options = ["perioperative systemic therapy", "neoadjuvant or perioperative ICI"]
[[variables]]
name = "cycles"
type = "text"
[[variables]]
name = "msi_mmr"
type = "enum"
options = ["MSI-H/dMMR", "MSS/pMMR", "unknown"]
[[variables]]
name = "restaging_imaging"
type = "text"
[[variables]]
name = "imaging_date"
type = "text"
[[variables]]
name = "egd_result"
type = "text"
+++

# Source

- NCCN Gastric Cancer v3.2026, GAST-3, p13
- Applies to patients who are medically fit, after primary treatment
- Footnotes d, f, q, r, s, v, w, x, y, z for this page are on GAST-3A
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, gastric cancer, medically fit
- Primary treatment received: ___ (primary_treatment)
- Cycles completed: ___ (cycles)
- MSI-H/dMMR status: ___ (msi_mmr)
- Restaging imaging performed: ___ (restaging_imaging)
- Date of restaging imaging: ___ (imaging_date)
- EGD and biopsy result: ___ (egd_result)

# Primary treatment given

- Perioperative systemic therapy (category 1)
    - Qualified by footnote r on GAST-3A
- Neoadjuvant or perioperative ICI, if tumor is microsatellite instability-high (MSI-H) / mismatch repair deficient (dMMR)
    - Qualified by footnotes r and s on GAST-3A

# Response assessment after perioperative systemic therapy

- Chest/abdomen/pelvis CT with oral and IV contrast
- FDG-PET/CT as clinically indicated

# Outcome and additional management after perioperative systemic therapy

- Resectable disease
    - Surgery (preferred), qualified by footnotes d, f, q on GAST-3A
    - or Palliative Management (GAST-9)
- Unresectable or metastatic disease
    - Palliative Management (GAST-9)

# Response assessment after neoadjuvant or perioperative ICI

- Chest/abdomen CT with oral and IV contrast
    - Not required if FDG-PET/CT is done
    - Qualified by footnotes v and w on GAST-3A
- FDG-PET/CT as clinically indicated
    - Qualified by footnote x on GAST-3A
- EGD and biopsy
    - Qualified by footnote y on GAST-3A

# Outcome and additional management after neoadjuvant or perioperative ICI

- No evidence of disease, qualified by footnotes s and y on GAST-3A
    - Observation
    - or Surgery, qualified by footnotes d, f, z on GAST-3A
- Persistent local disease, qualified by footnote s on GAST-3A
    - Surgery (preferred), qualified by footnotes d, f, z on GAST-3A
    - or Palliative Management (GAST-9)
- New metastatic disease
    - Palliative Management (GAST-9)

# Next

- After surgery, go to Surgical Outcomes for Patients Who Have Received Systemic Therapy (GAST-5)
- After observation for no evidence of disease, go to Follow-up (GAST-7)
- If palliative management, go to GAST-9
