+++
id           = "genetics_ceg/GENE-12"
gid          = "genetics_ceg"
ref          = "GENE-12"
page         = 127
title        = "Cancer risk management for a germline NTHL1 biallelic or PALB2 pathogenic variant"
nccn_version = "1.2026"
nccn_date    = "06/16/26"
generated    = "2026-08-30"
see_also     = ["GENE-11", "GENE-13", "GENE-18", "GENE-19"]

[facets]
disease   = "genetics_ceg"
biomarker = ["nthl1", "palb2"]
timepoint = ["genetic-testing", "screening", "surveillance"]

[[variables]]
name = "gene_result"
type = "text"
[[variables]]
name = "zygosity"
type = "enum"
options = ["biallelic", "heterozygous"]
[[variables]]
name = "age"
type = "number"
[[variables]]
name = "polyp_count"
type = "number"
[[variables]]
name = "polyp_histology"
type = "text"
[[variables]]
name = "last_colonoscopy"
type = "text"
[[variables]]
name = "menopausal_status"
type = "enum"
options = ["premenopausal", "postmenopausal"]
[[variables]]
name = "uterine_bleeding"
type = "text"
[[variables]]
name = "personal_cancer_history"
type = "text"
[[variables]]
name = "family_cancer_history"
type = "text"
+++

# Source

- NCCN Genetic/Familial High-Risk Assessment: Colorectal, Endometrial, Esophageal, and Gastric v1.2026, GENE-12, p127
- Cancer risk management based on genetic test results, for NTHL1 biallelic pathogenic variants / NTHL1 tumor syndrome and for PALB2
- Footnotes on GENE-18, references on GENE-19
- All recommendations category 2A unless otherwise indicated

# Assessment

- Germline result ___ (gene_result)
- Zygosity ___ (zygosity)
- Age ___ (age) y
- Cumulative polyp count ___ (polyp_count)
- Polyp histology ___ (polyp_histology)
- Last colonoscopy ___ (last_colonoscopy)
- Menopausal status ___ (menopausal_status)
- Abnormal uterine or postmenopausal bleeding ___ (uterine_bleeding)
- Personal cancer history ___ (personal_cancer_history)
- Family cancer history ___ (family_cancer_history)

# NTHL1 biallelic pathogenic variants, colon cancer and colorectal phenotype

- Estimated absolute risk: more than 20% risk
- Management
    - Begin high-quality colonoscopy at age 25-30 y
    - Repeat every 2-3 y if negative
    - If polyps are found, colonoscopy every 1-2 y
        - Consider surgery if the polyp burden becomes unmanageable
    - Surgical evaluation if appropriate
- Strength of evidence: limited
- Colorectal phenotype: 1-100 polyps
    - Adenomas most frequent
    - Serrated, sessile serrated, and hyperplastic polyps less frequent
    - Polyposis is defined as 10 or more polyps

# NTHL1 biallelic pathogenic variants, endometrial cancer

- Absolute risk: increased
- Management
    - Education regarding the importance of prompt reporting of any abnormal uterine bleeding or postmenopausal bleeding
    - Evaluation of symptoms with endometrial biopsy
    - Transvaginal ultrasound can be considered at the clinician's discretion in postmenopausal patients
        - Has not been shown to be sufficiently sensitive or specific to be recommended

# NTHL1 biallelic pathogenic variants, other sites

- Gastric cancer: no evidence of increased risk
- Other cancers
    - Absolute risk: 6%-56% for extracolonic tumor by age 60 y
    - Breast cancer most common
    - Endometrial premalignancies and malignancies, urothelial carcinomas, brain tumors, hematologic malignancies, basal cell carcinomas, head and neck squamous cell carcinomas, and cervical cancers in multiple individuals
    - Management, breast cancer: risk may be elevated; however, there are not yet enough data to support increased breast cancer surveillance
- Comment
    - NTHL1 heterozygote cancer risks are unclear
    - Duodenal polyps have been observed

# PALB2

- Colon cancer: no evidence of increased risk
- Endometrial cancer: no evidence of increased risk
- Gastric cancer
    - Absolute risk: insufficient data to define
    - Management: insufficient evidence to recommend routine surveillance, see comments
- Other cancers: see NCCN Guidelines for Genetic/Familial High-Risk Assessment: Breast, Ovarian, Pancreatic, and Prostate
- Comment
    - Evidence is insufficient to specify gastric cancer surveillance; however, clinicians should be aware of and educate patients on the signs and symptoms of disease
    - Manage in context of their overall gastric cancer risk
    - The Panel recognizes the increased risk of gastric cancer associated with H. pylori in patients with a PALB2 P/LP variant
    - Given the lack of data regarding changes in risk of gastric cancer following treatment of infection, the Panel suggests consideration of testing and treatment for H. pylori on a case-by-case basis based on various risk factors
