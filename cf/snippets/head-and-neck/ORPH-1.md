+++
id           = "head-and-neck/ORPH-1"
gid          = "head-and-neck"
ref          = "ORPH-1"
page         = 17
title        = "Workup and clinical staging for cancer of the oropharynx"
nccn_version = "2.2026"
nccn_date    = "05/12/2026"
generated    = "2026-08-27"
see_also     = ["ORPH-B", "ORPH-2", "ORPHPV-1", "ADV-1", "ST-1"]

[facets]
disease   = "head-and-neck"
stage     = "any"
biomarker = ["pd-l1", "any"]
timepoint = ["workup", "staging"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "subsite"
type = "enum"
options = ["base of tongue", "tonsil", "posterior pharyngeal wall", "soft palate"]
[[variables]]
name = "ctnm"
type = "text"
[[variables]]
name = "p16"
type = "enum"
options = ["positive", "negative"]
[[variables]]
name = "pack_years"
type = "number"
[[variables]]
name = "alcohol_use"
type = "text"
[[variables]]
name = "pdl1_cps"
type = "text"
+++

# Source

- NCCN Head and Neck Cancers v2.2026, ORPH-1, p17
- Cancer of the oropharynx: base of tongue, tonsil, posterior pharyngeal wall, soft palate
- Covers workup and clinical staging, before treatment selection
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Primary subsite ___ (subsite)
- ___ (ctnm)
- p16 by IHC ___ (p16)
- Tobacco use, pack years smoked ___ (pack_years)
- Alcohol use ___ (alcohol_use)
- PD-L1 CPS ___ (pdl1_cps)

# Workup

- Tumor human papillomavirus (HPV) testing by p16 IHC, required
    - Principles of p16 Testing for HPV-Mediated Oropharyngeal Cancer (ORPH-B)
- H&P including a complete head and neck exam
    - Mirror and fiberoptic examination as clinically indicated
    - Document and quantify tobacco use history, in pack years smoked
    - Document alcohol use, and counsel
    - Advise every patient who currently smokes to quit
    - Advise those who formerly smoked to remain abstinent from smoking
    - Screen for distress, using the NCCN Distress Thermometer and Problem List, which includes social determinants of health (DIS-A)
- Biopsy of primary site, or fine-needle aspiration (FNA) of the neck
    - Image-guided (US or CT) needle biopsy of cystic neck nodes may offer better diagnostic yield than FNA by palpation alone for initial diagnosis
    - For unresectable or metastatic disease where there is a plan for systemic therapy, a core biopsy would allow for biomarker testing
- CT with contrast and/or MRI with and without contrast of primary and neck (IMG-A)
- Multidisciplinary consultation as clinically indicated

# As clinically indicated

- EUA with endoscopy
    - Prior to treatment, EUA with biopsy confirmation of the oropharyngeal primary site is recommended for patients presenting with a p16-positive cervical lymph node (SURG-A)
- Preanesthesia studies
- FDG-PET/CT (IMG-A)
- Chest CT, with or without contrast (IMG-A)
- Dental evaluation including Panorex (DENT-A)
- Nutrition, speech, and swallowing evaluation/therapy (NUTR-A)
- Audiogram
- Smoking cessation counseling
    - For additional cessation support, see the Smoking Cessation and Treatment Resources in the NCCN Guidelines for Smoking Cessation
- Fertility/reproductive counseling
    - See fertility and reproductive endocrine considerations in the NCCN Guidelines for Adolescent and Young Adult (AYA) Oncology
- Screening for hepatitis B
- PD-L1 testing by IHC (CPS)

# Clinical staging

- Clinical staging definitions are based on the AJCC 8th edition for oropharynx cancer
    - p16-negative, see ST-4
    - p16-positive, see ST-7
- Definitions for nodal staging criteria previously used in clinical trials (AJCC 7th edition) are included

# Next

- p16-negative
    - T1–2, N0–1, go to ORPH-2
    - T3–4a, N0–1, go to ORPH-3
    - T1–4a, N2–3, go to ORPH-4
    - T4b, N0–3, Treatment of Very Advanced Head and Neck Cancer (ADV-1)
- p16 (HPV)-positive
    - T1–2, N0, go to ORPHPV-1
    - T0–2, N1 (single node ≤3 cm), go to ORPHPV-2
    - T0–2, N1 (single node >3 cm, or 2 or more ipsilateral nodes ≤6 cm), or T1–2, N2, or T3, N0–2, go to ORPHPV-3
    - T0–3, N3, or T4, N0–3, go to ORPHPV-4
- Unresectable or unfit for surgery, or metastatic (M1) disease at initial presentation, Treatment of Very Advanced Head and Neck Cancer (ADV-2)
