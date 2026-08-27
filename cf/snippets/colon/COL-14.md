+++
id           = "colon/COL-14"
gid          = "colon"
ref          = "COL-14"
page         = 23
title        = "dMMR/MSI-H or POLE/POLD1 findings and treatment for suspected or proven metastatic synchronous adenocarcinoma"
nccn_version = "2.2026"
nccn_date    = "04/07/26"
generated    = "2026-08-27"
see_also     = ["COL-8", "COL-16", "COL-A", "COL-C", "COL-D", "COL-E"]

[facets]
disease   = "colon"
histology = "adenocarcinoma"
stage     = "IV"
biomarker = ["dmmr", "msi-h", "tmb-high"]
timepoint = ["metastatic", "adjuvant"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "mmr_msi"
type = "text"
[[variables]]
name = "tmb"
type = "text"
[[variables]]
name = "met_sites"
type = "text"
[[variables]]
name = "resectability"
type = "text"
[[variables]]
name = "obstruction_status"
type = "text"
[[variables]]
name = "immunotherapy_candidate"
type = "enum"
options = ["yes", "no"]
+++

# Source

- NCCN Colon Cancer v2.2026, COL-14, p23
- Applies to dMMR/MSI-H or POLE/POLD1 mutation with ultrahypermutated phenotype (eg, TMB >50 mut/Mb)
- Clinical presentation: suspected or proven metastatic synchronous adenocarcinoma, any T, any N, M1
- Patients who are not candidates for immunotherapy should be treated as recommended for pMMR/MSS disease
- For immunotherapy toxicity, see NCCN Guidelines for Management of Immune Checkpoint Inhibitor-Related Toxicities
- Resectability and surgical decisions follow Principles of Surgery and Locoregional Therapies (COL-C)
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Suspected or proven metastatic synchronous adenocarcinoma, any T, any N, M1
- MMR or MSI status ___ (mmr_msi), confirmed dMMR/MSI-H or POLE/POLD1 mutation with ultrahypermutated phenotype
- TMB ___ (tmb) (eg, TMB >50 mut/Mb)
- Sites of synchronous metastases ___ (met_sites)
- Resectability of metastatic disease ___ (resectability)
    - Judged per Principles of Surgery and Locoregional Therapies (COL-C)
- Obstruction status ___ (obstruction_status)
- Candidate for immunotherapy ___ (immunotherapy_candidate)
    - If no, treat as recommended for pMMR/MSS disease

# Finding: resectable synchronous liver only and/or lung only metastases

- Resectable per Principles of Surgery and Locoregional Therapies (COL-C)
- Treatment, one of the two options below
- Option 1: checkpoint inhibitor immunotherapy (preferred) (COL-D 5 of 17), followed by surgery
    - Data are limited and the risk of early progression may be higher than with chemotherapy
    - Followed by synchronous or staged colectomy
        - Hepatic artery infusion ± systemic chemotherapy (VEGF inhibitor contraindicated) (category 2B) is also an option at institutions with experience in both the surgical and medical oncologic aspects of this procedure
    - And resection (preferred) and/or local therapy of metastatic disease
        - Resection is preferred over locally ablative procedures for liver metastases
        - For small liver lesions (≤3 cm), thermal ablation is equivalent to resection
        - Other local techniques can be considered for liver oligometastases when thermal ablation is not indicated (COL-C and COL-E)
        - For lung metastases, surgery, thermal ablation, and SBRT can be considered (COL-C and COL-E)
- Option 2: synchronous or staged colectomy with liver or lung resection and/or local therapy
    - Colectomy
        - Hepatic artery infusion ± systemic chemotherapy (VEGF inhibitor contraindicated) (category 2B) is also an option at institutions with experience in both the surgical and medical oncologic aspects of this procedure
    - Liver or lung resection and/or local therapy
        - Resection is preferred over locally ablative procedures for liver metastases
        - For small liver lesions (≤3 cm), thermal ablation is equivalent to resection
        - Other local techniques can be considered for liver oligometastases when thermal ablation is not indicated (COL-C and COL-E)
        - For lung metastases, surgery, thermal ablation, and SBRT can be considered (COL-C and COL-E)

# Adjuvant treatment of resected metastatic disease

- Up to 6 mo perioperative treatment
- Principles of Imaging (COL-A)
- One of the following
    - FOLFOX
    - CAPEOX
    - FOLFOX + atezolizumab
        - The role of adjuvant immunotherapy for those who received neoadjuvant immunotherapy is not defined
    - CAPEOX + atezolizumab
        - The role of adjuvant immunotherapy for those who received neoadjuvant immunotherapy is not defined
- Then surveillance (COL-8)

# Finding: synchronous abdominal/peritoneal metastases

- Nonobstructing (COL-16)
- Obstructed or imminent obstruction, one of the following, then (COL-16)
    - Colon resection
        - Per Principles of Surgery and Locoregional Therapies (COL-C)
        - Consider colon resection only if imminent risk of obstruction, significant bleeding, perforation, or other significant tumor-related symptoms
    - Diverting ostomy
    - Bypass of impending obstruction
    - Stenting

# Finding: synchronous unresectable metastases

- Go to (COL-16)
- Consider colon resection only if imminent risk of obstruction, significant bleeding, perforation, or other significant tumor-related symptoms
- Patients who are not candidates for immunotherapy should be treated as recommended for pMMR/MSS disease

# Next

- Resectable liver only and/or lung only metastases, after treatment go to adjuvant treatment of resected metastatic disease, then surveillance (COL-8)
- Abdominal/peritoneal metastases, nonobstructing, go to COL-16
- Abdominal/peritoneal metastases, obstructed or imminent obstruction, locoregional intervention then go to COL-16
- Synchronous unresectable metastases, go to COL-16
- Not a candidate for immunotherapy, treat as recommended for pMMR/MSS disease
