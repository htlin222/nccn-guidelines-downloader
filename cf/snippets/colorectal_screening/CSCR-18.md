+++
id           = "colorectal_screening/CSCR-18"
gid          = "colorectal_screening"
ref          = "CSCR-18"
page         = 33
title        = "Increased risk based on personal history of childhood, adolescent, and young adult cancer: when to start colonoscopy and how often to repeat it"
nccn_version = "2.2026"
nccn_date    = "04/23/2026"
generated    = "2026-08-30"
see_also     = ["CSCR-1", "CSCR-3", "CSCR-15", "CSCR-16"]

[facets]
disease   = "colorectal_screening"
timepoint = ["screening", "surveillance", "survivorship"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "cancer_diagnosis"
type = "text"
[[variables]]
name = "age_at_diagnosis"
type = "number"
[[variables]]
name = "chemotherapy"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "abdominopelvic_rt"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "age_at_treatment"
type = "number"
[[variables]]
name = "gi_polyp_count"
type = "number"
[[variables]]
name = "mgpt_result"
type = "text"
[[variables]]
name = "last_colonoscopy_date"
type = "text"
+++

# Source

- NCCN Colorectal Cancer Screening v2.2026, CSCR-18, p33
- Applies to increased risk based on a personal history of childhood, adolescent, or young adult cancer
    - The adolescent and young adult (AYA) oncology patient is defined as an individual 15–39 years of age at the time of initial cancer diagnosis
    - This definition is based on the National Cancer Institute (NCI) Progress Review Group recommendations for a national agenda to advance AYA oncology
    - See NCCN Guidelines for Adolescent and Young Adult (AYA) Oncology
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Childhood, adolescent, or young adult cancer: ___ (cancer_diagnosis)
- Age at initial cancer diagnosis: ___ (age_at_diagnosis)
- History of chemotherapy: ___ (chemotherapy)
- History of radiation therapy involving abdominopelvic field: ___ (abdominopelvic_rt)
    - Abdominopelvic field, ie, abdomen, pelvis, spine (lumbar, sacral, whole) or total body irradiation (TBI)
    - Counts regardless of dose, with or without chemotherapy
- Age at treatment: ___ (age_at_treatment)
- Cumulative number of GI polyps, inclusive of the entire GI tract: ___ (gi_polyp_count)
- Multigene panel testing result: ___ (mgpt_result)
- Date of last colonoscopy: ___ (last_colonoscopy_date)

# Risk status, surveillance modality and schedule

- History of chemotherapy (without radiation therapy)
    - Colonoscopy starting at 35 or 10 y after age of chemotherapy, whichever occurs last
        - Biller L, et al. Cancer Prev Res 2020;13:291-298
    - Continue every 5 y
    - Initiate colonoscopy no later than age 45
    - Children's Oncology Group Long-Term Follow-up Guidelines for Survivors of Childhood, Adolescent, and Young Adult Cancers – Version 6.0-October 2023
- History of radiation therapy involving abdominopelvic field, regardless of dose, with or without chemotherapy
    - Abdominopelvic field, ie, abdomen, pelvis, spine (lumbar, sacral, whole) or total body irradiation (TBI)
    - Colonoscopy starting at age 30 or 5 y after treatment, whichever occurs last
    - Continue every 5 y
    - Initiate colonoscopy no later than age 45
    - Children's Oncology Group Long-Term Follow-up Guidelines for Survivors of Childhood, Adolescent, and Young Adult Cancers – Version 6.0-October 2023
- No history of chemotherapy or radiation therapy involving abdominopelvic field
    - Average-risk screening guidelines starting at age 45 (CSCR-3)
    - Children's Oncology Group Long-Term Follow-up Guidelines for Survivors of Childhood, Adolescent, and Young Adult Cancers – Version 6.0-October 2023

# Therapy-associated polyposis

- Individual meets the following criteria for therapy-associated polyposis
    - Therapy-associated polyposis is an acquired phenotype that presents years after exposure to chemotherapy and/or radiotherapy
    - Cumulative incidence of ≥10 GI polyps of any type (adenoma[s], SSP/SSL[s], hamartoma[s]), inclusive of the entire GI tract
    - History of systemic therapy and/or radiotherapy for a childhood or young adult cancer
    - Multigene panel testing (MGPT) for hereditary polyposis and CRC genes without an identified pathogenic variant (PV)
        - Germline MGPT should include at minimum the following CRC risk-associated genes: APC, MUTYH, MLH1, MSH2, MSH6, PMS2, EPCAM, BMPR1A, SMAD4, PTEN, STK11, and TP53
        - PVs associated with adenomatous polyposis include, but are not limited to, monoallelic PVs in APC, GREM1, POLE, POLD1, and AXIN2, and biallelic PVs in MUTYH, NTHL1, and MSH3
- If criteria are met
    - Consider baseline upper endoscopy if colonic polyposis identified
    - See Colonic Adenomatous Polyposis of Unknown Etiology (CPUE-1) in the NCCN Guidelines for Genetic/Familial High-Risk Assessment: Colorectal, Endometrial, and Gastric

# Next

- Chemotherapy without radiation therapy, colonoscopy starting at 35 or 10 y after age of chemotherapy (whichever occurs last), then every 5 y
- Radiation therapy involving abdominopelvic field, colonoscopy starting at age 30 or 5 y after treatment (whichever occurs last), then every 5 y
- No chemotherapy or radiation therapy involving abdominopelvic field, average-risk screening guidelines starting at age 45, go to CSCR-3
- Criteria for therapy-associated polyposis met, see CPUE-1 in the NCCN Guidelines for Genetic/Familial High-Risk Assessment: Colorectal, Endometrial, and Gastric
