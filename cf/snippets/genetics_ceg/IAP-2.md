+++
id           = "genetics_ceg/IAP-2"
gid          = "genetics_ceg"
ref          = "IAP-2"
page         = 108
title        = "Surveillance and management for a family history of adenomatous polyposis with no PV identified (idiopathic adenomatous polyposis)"
nccn_version = "1.2026"
nccn_date    = "06/16/26"
generated    = "2026-08-30"
see_also     = ["IAP-1", "FAP-1", "AFAP-1", "POLYP-1", "GENE-1"]

[facets]
disease   = "genetics_ceg"
biomarker = ["apc", "mutyh", "fap", "afap"]
timepoint = ["screening", "surveillance", "genetic-testing"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "relative_adenoma_count"
type = "number"
[[variables]]
name = "relative_age_at_burden"
type = "number"
[[variables]]
name = "affected_relative_tested"
type = "enum"
options = ["tested", "not tested"]
[[variables]]
name = "patient_gene_result"
type = "text"
[[variables]]
name = "personal_adenoma_count"
type = "number"
[[variables]]
name = "prior_cancer_therapy"
type = "text"
+++

# Source

- NCCN Genetic/Familial High-Risk Assessment: Colorectal, Endometrial, Esophageal, and Gastric v1.2026, IAP-2, p108
- Idiopathic adenomatous polyposis (IAP) is defined as an individual with cumulative lifetime >=10 to 20 adenomas without a PV identified in a polyposis gene
- This page holds the surveillance/management recommendations for IAP, by phenotype based on cumulative lifetime adenomas
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Cumulative lifetime adenoma count in the first-degree relative ___ (relative_adenoma_count)
- Age in the affected relative at which that cumulative adenoma burden was reached ___ (relative_age_at_burden)
- Affected family member ___ (affected_relative_tested)
- Genetic testing result in this individual ___ (patient_gene_result)
- Personal cumulative adenoma count to date ___ (personal_adenoma_count)
- Prior treatment for a childhood or young adult cancer ___ (prior_cancer_therapy)

# Before assigning a diagnosis of IAP

- Consider therapy-associated polyposis attributable to treatment for childhood and young adult cancer as a potential explanation for otherwise unexplained polyposis
    - See NCCN Guidelines for Colorectal Cancer Screening
- Multigene testing including all polyposis and CRC genes should be strongly considered prior to managing as IAP
    - PVs associated with adenomatous polyposis include, but are not limited to, monoallelic PVs in APC, GREM1, POLE, POLD1, and AXIN2
    - And biallelic PVs in NTHL1, MUTYH, MBD4, MLH3, and MSH3
    - Updated genetic testing may be considered in patients who have previously had limited genetic testing as clinically indicated
    - CRC/polyposis gene list (HRS-A)
    - Surveillance recommendations (GENE-1)

# Family history of >=100 adenomas in a first-degree relative

- Meets one of the following criteria
    - Affected family member tested, with no PV identified
    - Or affected family member not tested, and the unaffected individual with family history has been tested, with no PV identified
- Recommend genetic testing in the family member affected with polyposis (POLYP-1)
- There are limited data to suggest definitive recommendations for when to initiate screening or the interval of screening
- High-quality colonoscopy every 12 mo beginning at age 10-15 y
    - In some families, based on clinical judgment, initiating colonoscopy beginning in late teens, then every 2 y may be appropriate
- If no adenomas, then can lengthen interval to every 2 y
    - If multiple surveillance exams without adenomas on follow-up, may lengthen interval further based on clinical judgment
- If >=100 adenomas found, manage based on Classical FAP Treatment and Surveillance: Personal History (FAP-1)
- If <100 adenomas found, manage based on AFAP Treatment and Surveillance: Personal History, Adenoma/Polyp Burden (AFAP-1)

# Family history of 20 to <100 adenomas in a first-degree relative

- Meets one of the following criteria
    - Affected family member tested, with no PV identified
    - Or affected family member not tested, and the unaffected individual with family history has been tested, with no PV identified
- Recommend genetic testing in the family member affected with polyposis (POLYP-1)
- There are limited data to suggest definitive recommendations for when to initiate screening or the interval of screening
- Initiation age and frequency of colonoscopy should be modified based on clinical judgment
    - Take into account the first-degree relative's history with respect to age and cumulative adenoma burden
- Consider high-quality colonoscopy beginning in late teens, then every 2 y
- Initiation age should be modified if cumulative family history of 20 to <100 adenomas was reached later in life in the affected relative
- If multiple surveillance exams without adenomas on follow-up, may lengthen interval further based on clinical judgment
- If adenomas found, manage based on AFAP Treatment and Surveillance: Personal History, Adenoma/Polyp Burden (AFAP-1)

# Family history of 10-19 adenomas in a first-degree relative

- Meets one of the following criteria
    - Affected family member tested, with no PV identified
    - Or affected family member not tested, and the unaffected individual with family history has been tested, with no PV identified
- Manage based on clinical judgment
- Frequency of surveillance may be modified based on personal, cumulative history of adenomas
    - Take into account current polyp surveillance guidelines, see NCCN Guidelines for Colorectal Cancer Screening
    - And take into account the family history

# Next

- >=100 adenomas found on surveillance, go to Classical FAP Treatment and Surveillance: Personal History (FAP-1)
- <100 adenomas found on surveillance, go to AFAP Treatment and Surveillance: Personal History, Adenoma/Polyp Burden (AFAP-1)
- Family member affected with polyposis, recommend genetic testing (POLYP-1)
- Surveillance recommendations by gene (GENE-1)
