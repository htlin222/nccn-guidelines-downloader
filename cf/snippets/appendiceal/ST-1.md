+++
id           = "appendiceal/ST-1"
gid          = "appendiceal"
ref          = "ST-1"
page         = 36
title        = "AJCC TNM staging classification for appendix cancer, 9th ed., 2022"
nccn_version = "2.2026"
nccn_date    = "04/10/26"
generated    = "2026-08-27"
see_also     = ["APP-1", "APP-2"]

[facets]
disease   = "appendiceal"
timepoint = "staging"

[[variables]]
name = "t"
type = "text"
[[variables]]
name = "n"
type = "text"
[[variables]]
name = "nodes_positive"
type = "number"
[[variables]]
name = "tumor_deposits"
type = "enum"
options = ["none", "subserosa", "mesentery"]
[[variables]]
name = "m"
type = "text"
[[variables]]
name = "acellular_mucin"
type = "enum"
options = ["absent", "present with tumor cells", "present without identifiable tumor cells"]
+++

# Source

- NCCN Appendiceal Neoplasms and Cancers v2.2026, ST-1, p36
- American Joint Committee on Cancer (AJCC) TNM Staging Classification for Appendix Cancer, 9th ed., 2022
- Table 1, definitions for T, N, M

# Assessment

- T category ___ (t)
- N category ___ (n)
    - Regional lymph nodes with tumor involvement ___ (nodes_positive)
    - Tumor deposits in the subserosa or mesentery ___ (tumor_deposits)
- M category ___ (m)
- Acellular mucin ___ (acellular_mucin)
    - For specimens containing acellular mucin without identifiable tumor cells, efforts should be made to obtain additional tissue for thorough histologic examination to evaluate for cellularity

# T Primary tumor

- TX, primary tumor cannot be assessed
- T0, no evidence of primary tumor
- Tis, carcinoma in situ
    - Intramucosal carcinoma
    - Invasion of the lamina propria, or extension into but not through the muscularis mucosae
- Tis(LAMN), low-grade appendiceal mucinous neoplasm confined to the muscularis propria
    - Acellular mucin or mucinous epithelium may invade into the muscularis propria
    - T1 and T2 are not applicable to LAMN
    - Acellular mucin or mucinous epithelium that extends into the subserosa should be classified as T3
    - Acellular mucin or mucinous epithelium that extends into the serosa should be classified as T4a
- T1, tumor invades the submucosa, through the muscularis mucosa but not into the muscularis propria
- T2, tumor invades the muscularis propria
- T3, tumor invades through the muscularis propria into the subserosa or the mesoappendix
- T4, tumor invades the visceral peritoneum, and/or directly invades adjacent organs or structures
    - Includes acellular mucin or mucinous epithelium involving the serosa of the appendix or mesoappendix
    - T4a, tumor invades the visceral peritoneum, including acellular mucin or mucinous epithelium involving the serosa of the appendix or serosa of the mesoappendix
    - T4b, tumor directly invades or adheres to adjacent organs or structures

# N Regional lymph nodes

- NX, regional lymph nodes cannot be assessed
- N0, no tumor involvement of regional lymph node(s)
- N1, tumor involvement of one to three regional lymph nodes
    - Tumor in lymph node measuring greater than or equal to 0.2 mm
    - Also N1 if any number of tumor deposits is present with no tumor involvement in all identifiable lymph nodes
    - N1a, tumor involvement of one regional lymph node
    - N1b, tumor involvement of two or three regional lymph nodes
    - N1c, no tumor involvement of regional lymph nodes, but there are tumor deposits in the subserosa or mesentery
- N2, tumor involvement of four or more regional lymph nodes

# M Distant metastasis

- cM0, no distant metastasis
- cM1, distant metastasis
    - cM1c, metastasis to sites other than peritoneum
- pM1, microscopic confirmation of distant metastasis
    - pM1a, intraperitoneal acellular mucin, without identifiable tumor cells in the disseminated peritoneal mucinous deposits
        - For specimens containing acellular mucin without identifiable tumor cells, efforts should be made to obtain additional tissue for thorough histologic examination to evaluate for cellularity
    - pM1b, intraperitoneal metastasis only, including peritoneal mucinous deposits containing tumor cells
    - pM1c, microscopic confirmation of metastasis to sites other than peritoneum
