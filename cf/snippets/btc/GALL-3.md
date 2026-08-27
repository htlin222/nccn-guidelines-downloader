+++
id           = "btc/GALL-3"
gid          = "btc"
ref          = "GALL-3"
page         = 9
title        = "Gallbladder cancer found incidentally on pathologic review: postoperative workup and primary treatment"
nccn_version = "1.2026"
nccn_date    = "03/10/26"
generated    = "2026-08-27"
see_also     = ["GALL-4", "GALL-5", "GALL-6", "GALL-A", "GALL-B", "BIL-A", "BIL-B", "BIL-C", "BIL-D"]

[facets]
disease   = "btc"
biomarker = ["dmmr", "msi-h", "brca"]
timepoint = ["workup", "primary-treatment"]
intent    = ["curative", "palliative"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "t_stage"
type = "text"
[[variables]]
name = "margin_status"
type = "enum"
options = ["negative", "positive"]
[[variables]]
name = "cystic_duct_node"
type = "enum"
options = ["negative", "positive", "not assessed"]
[[variables]]
name = "resectability"
type = "enum"
options = ["resectable", "unresectable"]
+++

# Source

- NCCN Gallbladder Cancer v1.2026, GALL-3, p9
- Applies to gallbladder cancer as an incidental finding on pathologic review
- Consider multidisciplinary review
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, incidental finding on pathologic review
- Pathologic T category ___ (t_stage)
- Margins ___ (margin_status)
- Cystic duct node ___ (cystic_duct_node)
- Resectability ___ (resectability)

# Postoperative workup

- T1a with negative margins
    - No further workup listed, observe
- Cystic duct node positive
    - Multiphasic abdomen/pelvis CT or MRI with IV contrast (BIL-A)
    - Chest CT with or without contrast (BIL-A)
    - Consider staging laparoscopy (Butte JM, et al. HPB (Oxford) 2011;13:463-472)
- T1b or greater, and/or T1a with positive margins
    - Multiphasic abdomen/pelvis CT or MRI with IV contrast (BIL-A)
    - Chest CT with or without contrast (BIL-A)
    - Consider staging laparoscopy (Butte JM, et al. HPB (Oxford) 2011;13:463-472)

# Primary treatment

- Biomarker testing (BIL-B)
    - For patients with dMMR/MSI-H tumors, or a family history suggestive of BRCA1/2 PVs, consider germline testing and/or referral to a genetic counselor
- Resectable (GALL-A)
    - Hepatic resection (GALL-A) with lymphadenectomy (GALL-B)
        - Add bile duct excision for malignant involvement
    - Or consider neoadjuvant systemic therapy (BIL-C)
        - For locoregionally advanced disease, to rule out rapid progression and avoid futile surgery
        - Limited clinical trial data to define a standard regimen or definitive benefit
    - Or clinical trial
    - After systemic therapy, assess for response and
        - Reconsider resection, or
        - Locoregional therapy, or
        - Subsequent-line systemic therapy if progression on or after systemic therapy (BIL-C)
- Unresectable
    - Options, order does not indicate preference
        - Choice of treatment modality may depend on extent/location of disease and institutional capabilities
        - Systemic therapy (BIL-C), preferred
        - Clinical trial, preferred
        - Palliative RT (BIL-D)
- Best supportive care, see NCCN Guidelines for Palliative Care

# Next

- T1a with negative margins, observe
- After hepatic resection with lymphadenectomy, adjuvant treatment and surveillance (GALL-6)
- Other clinical presentations, GALL-4 and GALL-5
