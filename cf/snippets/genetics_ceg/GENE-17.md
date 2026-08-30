+++
id           = "genetics_ceg/GENE-17"
gid          = "genetics_ceg"
ref          = "GENE-17"
page         = 132
title        = "Cancer risk management for germline STK11 and TP53 pathogenic variants"
nccn_version = "1.2026"
nccn_date    = "06/16/26"
generated    = "2026-08-30"
see_also     = ["PJS-1", "PJS-2", "GENE-16", "GENE-18", "GENE-19"]

[facets]
disease   = "genetics_ceg"
biomarker = ["stk11", "tp53"]
timepoint = ["genetic-testing", "screening", "surveillance"]

[[variables]]
name = "gene_result"
type = "enum"
options = ["stk11", "tp53"]
[[variables]]
name = "variant"
type = "text"
[[variables]]
name = "polyp_count"
type = "number"
[[variables]]
name = "personal_cancer_history"
type = "text"
[[variables]]
name = "family_cancer_history"
type = "text"
[[variables]]
name = "prior_rt"
type = "text"
[[variables]]
name = "h_pylori"
type = "text"
+++

# Source

- NCCN Genetic/Familial High-Risk Assessment: Colorectal, Endometrial, Esophageal, and Gastric v1.2026, GENE-17, p132
- Cancer risk management based on genetic test results, for STK11 and TP53
- References on GENE-19
- All recommendations category 2A unless otherwise indicated

# Assessment

- Germline result ___ (gene_result)
- Variant ___ (variant)
- Cumulative polyp count ___ (polyp_count)
    - Polyposis is defined as ≥10 polyps
- Personal cancer history ___ (personal_cancer_history)
- Family cancer history, including the earliest known CRC and the earliest known gastric cancer in the family ___ (family_cancer_history)
- Prior whole body or abdominal therapeutic RT <20 y ___ (prior_rt)

# STK11 / Peutz-Jeghers syndrome - colon cancer and colorectal phenotype

- Absolute risk: 39% lifetime risk for CRC
- Management: Peutz-Jeghers syndrome (PJS-2)
- Strength of evidence: strong
- Colorectal phenotype: ≥2 Peutz-Jeghers-type hamartomatous polyps (colon and small intestine)

# STK11 - endometrial cancer

- Absolute risk: 9%–10%
- Management: Peutz-Jeghers syndrome (PJS-2)

# STK11 - gastric cancer

- Absolute risk: 29%
- Management: Peutz-Jeghers syndrome (PJS-2)

# STK11 - other cancer risks

- Well-established increased risk for
    - Breast
    - Pancreatic
    - Small intestine
    - Lung
    - Testicular
    - Gynecologic cancers
- See Peutz-Jeghers syndrome (PJS-2) for details regarding lifetime risk estimates and management

# STK11 - comments to act on

- STK11 is associated with characteristic mucocutaneous pigmentation
- Starting as children, patients are at increased risk for
    - Bleeding
    - Iron deficiency anemia
    - Small bowel obstruction and intussusception
    - Young age onset ovarian and testicular tumors
- See Peutz-Jeghers syndrome for additional details regarding clinical features and management

# TP53 / Li-Fraumeni syndrome - colon cancer and colorectal phenotype

- Absolute risk: 5%–20%
- Management
    - Colonoscopy every 2–5 y starting at 20–25 y, or 5 y before the earliest known CRC in the family
    - For patients who have received whole body or abdominal therapeutic RT <20 y, colonoscopy screening is recommended 5 y after treatment of disease
- Strength of evidence: strong
- Colorectal phenotype: no polyposis

# TP53 - endometrial cancer

- No evidence of increased risk

# TP53 - gastric cancer

- Absolute risk: 10.7%
- Management: upper endoscopy every 2–5 y starting at 20–25 y, or 5 y before the earliest known gastric cancer in the family (see comments)

# TP53 - other cancer risks

- Management: NCCN Guidelines for Genetic/Familial High-Risk Assessment: Breast, Ovarian, Pancreatic, and Prostate
- Classical LFS spectrum cancers
    - Breast
    - Soft tissue sarcoma
    - Osteosarcoma
    - CNS tumor
    - Adrenocortical carcinoma (ACC)
- Other cancers associated with LFS include melanoma and prostate
- See NCCN Guidelines for Genetic/Familial High-Risk Assessment: Breast, Ovarian, Pancreatic, and Prostate for details on evaluation and management

# TP53 - comments to act on

- TP53 carriers require evaluation and management of cancer risk at an early age
- Clinicians should be aware of and educate patients on the signs and symptoms of disease
- Manage in context of their overall gastric cancer risk
- The Panel recognizes the increased risk of gastric cancer associated with H. pylori in patients with a TP53 P/LP variant
- Given the lack of data regarding changes in risk of gastric cancer following treatment of infection, the Panel suggests consideration of testing and treatment for H. pylori on a case-by-case basis based on various risk factors
    - H. pylori testing and treatment decision ___ (h_pylori)

# Next

- STK11 pathogenic variant, manage as Peutz-Jeghers syndrome, go to PJS-2
- TP53 pathogenic variant, evaluation and management per NCCN Guidelines for Genetic/Familial High-Risk Assessment: Breast, Ovarian, Pancreatic, and Prostate
