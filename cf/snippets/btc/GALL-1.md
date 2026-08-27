+++
id           = "btc/GALL-1"
gid          = "btc"
ref          = "GALL-1"
page         = 7
title        = "Incidental finding of a suspicious mass during surgery: intraoperative staging, resection, or unresectable pathway"
nccn_version = "1.2026"
nccn_date    = "03/10/26"
generated    = "2026-08-27"
see_also     = ["GALL-2", "GALL-6", "GALL-A", "GALL-B", "BIL-A", "BIL-B", "BIL-C", "BIL-D"]

[facets]
disease   = "btc"
timepoint = ["staging", "primary-treatment", "workup"]
intent    = ["curative", "palliative"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "operation"
type = "text"
[[variables]]
name = "hpb_expertise"
type = "enum"
options = ["available", "unavailable"]
[[variables]]
name = "resectability"
type = "enum"
options = ["resectable", "unresectable", "unclear"]
[[variables]]
name = "cea"
type = "text"
[[variables]]
name = "ca19_9"
type = "text"
+++

# Source

- NCCN Gallbladder Cancer v1.2026, GALL-1, p7
- Applies to an incidental finding of a suspicious mass during surgery
- Refer to the NCCN Distress Thermometer and Problem List, which includes social determinants of health; it can be utilized throughout the patient's care continuum (DIS-A)
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Suspicious mass found incidentally during ___ (operation)
- Hepatobiliary surgery expertise ___ (hpb_expertise)
- Resectability ___ (resectability)
- CEA ___ (cea) / CA 19-9 ___ (ca19_9)

# Intraoperative decision

- Hepatobiliary surgery expertise available
    - Intraoperative staging, with or without biopsy
        - Principles of Surgery (GALL-A)
        - Principles of Pathology (GALL-B)
        - Core biopsy is preferred over fine-needle aspiration (FNA)
- Hepatobiliary surgery expertise unavailable, or resectability unclear
    - Visually inspect the abdomen
    - Document all findings
    - Refer to surgeon with hepatobiliary expertise, and/or proceed with staging

# Primary treatment, resectable

- Resectable on intraoperative staging (Principles of Pathology, GALL-B)
- Cholecystectomy (Principles of Surgery, GALL-A)
- En bloc hepatic resection (Principles of Pathology, GALL-B)
- Lymphadenectomy
- With or without bile duct excision, for malignant involvement

# Primary treatment, unresectable

- Biopsy, if not previously performed (Principles of Pathology, GALL-B)
    - Core biopsy is preferred over fine-needle aspiration (FNA)
- Biomarker testing (Principles of Biomarker Testing, BIL-B)
    - For patients with mismatch repair deficient (dMMR)/microsatellite instability-high (MSI-H) tumors, consider germline testing and/or referral to a genetic counselor
    - For patients with a family history suggestive of BRCA1/2 pathogenic variants (PVs), consider germline testing and/or referral to a genetic counselor
- Then see Postoperative workup below

# Postoperative workup

- Principles of Imaging (BIL-A)
- Multiphasic abdomen/pelvis CT/MRI with IV contrast
- Chest CT, with or without contrast
- Consider carcinoembryonic antigen (CEA) and CA 19-9

# Options after postoperative workup, unresectable

- Order does not indicate preference; the choice of treatment modality may depend on extent/location of disease and institutional capabilities
- Systemic therapy (preferred), Principles of Systemic Therapy (BIL-C)
- Clinical trial (preferred)
- Palliative radiation therapy (RT), Principles of Radiation Therapy (BIL-D)
- Best supportive care, see NCCN Guidelines for Palliative Care

# Next

- Hepatobiliary surgery expertise unavailable, go to GALL-2
- After resection and postoperative workup, adjuvant treatment and surveillance (GALL-6)
- After treatment of unresectable disease, assess for response and either
    - Reconsider resection or locoregional therapy, or
    - Subsequent-line systemic therapy if progression on or after systemic therapy (BIL-C)
- Other clinical presentations, see GALL-3, GALL-4, and GALL-5
