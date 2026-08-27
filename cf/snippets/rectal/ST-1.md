+++
id           = "rectal/ST-1"
gid          = "rectal"
ref          = "ST-1"
page         = 83
title        = "AJCC 8th edition TNM definitions for rectal cancer"
nccn_version = "2.2026"
nccn_date    = "04/07/26"
generated    = "2026-08-27"
see_also     = ["REC-1", "REC-2", "REC-3"]

[facets]
disease   = "rectal"
stage     = "any"
timepoint = "staging"

[[variables]]
name = "staging_basis"
type = "enum"
options = ["clinical", "pathologic"]
[[variables]]
name = "t_category"
type = "text"
[[variables]]
name = "n_category"
type = "text"
[[variables]]
name = "positive_nodes"
type = "text"
[[variables]]
name = "tumor_deposits"
type = "text"
[[variables]]
name = "m_category"
type = "text"
[[variables]]
name = "v_classification"
type = "text"
[[variables]]
name = "l_classification"
type = "text"
[[variables]]
name = "pn"
type = "text"
+++

# Source

- NCCN Rectal Cancer v2.2026, ST-1, p83
- American Joint Committee on Cancer (AJCC) TNM Staging Classification for Rectal Cancer, 8th ed., 2017
- Table 1, definitions for T, N, M
- Used with permission of the American College of Surgeons, Chicago, Illinois
- Original source is the AJCC Cancer Staging Manual, Eighth Edition (2017)

# Assessment

- Staging basis ___ (staging_basis)
- T ___ (t_category)
- N ___ (n_category)
- Positive regional lymph nodes ___ (positive_nodes)
- Tumor deposits ___ (tumor_deposits)
- M ___ (m_category)
- Vascular invasion, V classification ___ (v_classification)
- Lymphatic invasion, L classification ___ (l_classification)
- Perineural invasion, PN prognostic factor ___ (pn)

# T primary tumor

- TX, primary tumor cannot be assessed
- T0, no evidence of primary tumor
- Tis, carcinoma in situ, intramucosal carcinoma
    - Involvement of lamina propria with no extension through muscularis mucosae
- T1, tumor invades the submucosa
    - Through the muscularis mucosa but not into the muscularis propria
- T2, tumor invades the muscularis propria
- T3, tumor invades through the muscularis propria into pericolorectal tissues
- T4, tumor invades the visceral peritoneum, or invades or adheres to adjacent organ or structure
    - T4a, tumor invades through the visceral peritoneum
        - Includes gross perforation of the bowel through tumor
        - Includes continuous invasion of tumor through areas of inflammation to the surface of the visceral peritoneum
    - T4b, tumor directly invades or adheres to adjacent organs or structures
- Direct invasion in T4 includes invasion of other organs or other segments of the colorectum as a result of direct extension through the serosa, as confirmed on microscopic examination
    - For example, invasion of the sigmoid colon by a carcinoma of the cecum
    - For cancers in a retroperitoneal or subperitoneal location, direct invasion of other organs or structures by virtue of extension beyond the muscularis propria
        - For example, a tumor on the posterior wall of the descending colon invading the left kidney or lateral abdominal wall
        - For example, a mid or distal rectal cancer with invasion of prostate, seminal vesicles, cervix, or vagina
- Tumor that is adherent to other organs or structures, grossly, is classified cT4b
    - However, if no tumor is present in the adhesion, microscopically, the classification should be pT1-4a depending on the anatomical depth of wall invasion

# N regional lymph nodes

- NX, regional lymph nodes cannot be assessed
- N0, no regional lymph node metastasis
- N1, one to three regional lymph nodes are positive, or any number of tumor deposits are present and all identifiable lymph nodes are negative
    - A positive lymph node means tumor in the lymph node measuring 0.2 mm or more
    - N1a, one regional lymph node is positive
    - N1b, two or three regional lymph nodes are positive
    - N1c, no regional lymph nodes are positive, but there are tumor deposits in the subserosa, mesentery, or nonperitonealized pericolic, or perirectal/mesorectal tissues
- N2, four or more regional lymph nodes are positive
    - N2a, four to six regional lymph nodes are positive
    - N2b, seven or more regional lymph nodes are positive

# M distant metastasis

- M0, no distant metastasis by imaging, etc.; no evidence of tumor in distant sites or organs
    - This category is not assigned by pathologists
- M1, metastasis to one or more distant sites or organs, or peritoneal metastasis is identified
    - M1a, metastasis to one site or organ is identified without peritoneal metastasis
    - M1b, metastasis to two or more sites or organs is identified without peritoneal metastasis
    - M1c, metastasis to the peritoneal surface is identified alone or with other site or organ metastases

# Invasion classifications recorded separately

- The V classification is used to identify the presence or absence of vascular invasion
- The L classification is used to identify the presence or absence of lymphatic invasion
- The PN prognostic factor is used for perineural invasion
