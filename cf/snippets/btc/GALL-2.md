+++
id           = "btc/GALL-2"
gid          = "btc"
ref          = "GALL-2"
page         = 8
title        = "Gallbladder cancer when hepatobiliary surgery expertise is unavailable: workup and primary treatment"
nccn_version = "1.2026"
nccn_date    = "03/10/26"
generated    = "2026-08-27"
see_also     = ["GALL-1", "GALL-6", "GALL-A", "GALL-B", "BIL-A", "BIL-B", "BIL-C", "BIL-D"]

[facets]
disease   = "btc"
biomarker = ["dmmr", "msi-h", "brca"]
timepoint = ["workup", "staging", "primary-treatment"]
intent    = ["curative", "palliative"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "presentation"
type = "text"
[[variables]]
name = "lfts"
type = "text"
[[variables]]
name = "cea"
type = "text"
[[variables]]
name = "ca199"
type = "text"
[[variables]]
name = "hepatic_reserve"
type = "text"
[[variables]]
name = "resectability"
type = "enum"
options = ["resectable", "unresectable"]
+++

# Source

- NCCN Gallbladder Cancer v1.2026, GALL-2, p8
- Applies when hepatobiliary surgery expertise is unavailable
- If expertise is unavailable or resectability is unclear
    - Visually inspect the abdomen
    - Document all findings
    - Refer to a surgeon with hepatobiliary expertise, and/or proceed with staging
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, gallbladder cancer
- Hepatobiliary surgery expertise unavailable at this site
- ___ (presentation)
- LFTs ___ (lfts)
- CEA ___ (cea)
- CA 19-9 ___ (ca199)
- Hepatic reserve ___ (hepatic_reserve)
- Resectability ___ (resectability)

# Workup

- History and physical (H&P)
- Multiphasic abdomen/pelvis CT/MRI with IV contrast
    - Principles of Imaging (BIL-A)
- Chest CT with or without contrast
- Liver function tests (LFTs)
- Surgical consultation
- Assessment of hepatic reserve
- Consider CEA and CA 19-9

# Primary treatment

- Intraoperative staging, with or without biopsy
    - Principles of Pathology (GALL-B)
    - Core biopsy is preferred over FNA
- End surgery and refer to specialist
    - Principles of Surgery (GALL-A)

# If resectable

- Cholecystectomy
    - Principles of Surgery (GALL-A)
- En bloc hepatic resection
    - Principles of Pathology (GALL-B)
- Lymphadenectomy
- Bile duct excision, for malignant involvement
- For locoregionally advanced disease, consider neoadjuvant systemic therapy
    - To rule out rapid progression and avoid futile surgery
    - Limited clinical trial data to define a standard regimen or definitive benefit
    - Principles of Systemic Therapy (BIL-C)

# If unresectable

- Biopsy, if not previously performed
    - Principles of Pathology (GALL-B)
    - Core biopsy is preferred over FNA
- Biomarker testing
    - Principles of Biomarker Testing (BIL-B)
    - For dMMR/MSI-H tumors, or a family history suggestive of BRCA1/2 PVs, consider germline testing and/or referral to a genetic counselor
- Options, order does not indicate preference
    - Choice of treatment modality may depend on extent/location of disease and institutional capabilities
    - Systemic therapy (preferred), Principles of Systemic Therapy (BIL-C)
    - Clinical trial (preferred)
    - Palliative RT, Principles of Radiation Therapy (BIL-D)
- Assess for response
    - Reconsider resection, or locoregional therapy, or
    - Subsequent-line systemic therapy, if progression on or after systemic therapy (BIL-C)
- Best supportive care, NCCN Guidelines for Palliative Care

# Next

- Hepatobiliary expertise unavailable intraoperatively, end surgery and refer to specialist (GALL-A)
- Resectable, after resection go to adjuvant treatment and surveillance (GALL-6)
- Unresectable, go to the options above and assess for response
