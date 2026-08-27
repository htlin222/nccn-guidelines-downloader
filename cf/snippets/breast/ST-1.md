+++
id           = "breast/ST-1"
gid          = "breast"
ref          = "ST-1"
page         = 115
title        = "AJCC TNM staging: definitions of the primary tumor (T) category"
nccn_version = "6.2026"
nccn_date    = "07/29/26"
generated    = "2026-08-27"
see_also     = ["BINV-1"]

[facets]
disease   = "breast"
timepoint = "staging"

[[variables]]
name = "tumor_size_mm"
type = "number"
[[variables]]
name = "size_basis"
type = "enum"
options = ["clinical", "pathological", "both"]
[[variables]]
name = "prior_neoadjuvant"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "t_category"
type = "text"
+++

# Source

- NCCN Breast Cancer v6.2026, ST-1, p115
- American Joint Committee on Cancer (AJCC) TNM Staging System for Breast Cancer
- Table 1, definitions for T, N, M; this page covers the primary tumor (T) only, continued on the next staging page
- The T category is defined by the same criteria regardless of whether it is based on clinical or pathological criteria, or both
- Used with the permission of the American College of Surgeons; original source is the AJCC Cancer Staging Manual, Eighth Edition (2017)

# Assessment

- Size of the invasive component ___ (tumor_size_mm) mm in greatest dimension
- Size taken from ___ (size_basis) findings
- Neoadjuvant treatment given before this measurement ___ (prior_neoadjuvant)
- Assigned T category ___ (t_category)

# Measuring the primary tumor

- Base the T category primarily on the size of the invasive component of the cancer
- Use the maximum size of a tumor focus as the estimate of disease volume
- Use the largest contiguous dimension of a tumor focus
    - Do not add small satellite foci of noncontiguous tumor to the size
- Include the cellular fibrous reaction to invasive tumor cells when measuring a tumor prior to treatment
- Do not include the dense fibrosis observed following neoadjuvant treatment in the pathological measurement
    - Its extent may overestimate the residual tumor volume
- Clinical tumor size (cT) is based on the clinical findings judged to be most accurate for the particular case
    - Clinical findings: physical examination and imaging modalities, such as mammography, ultrasound, and MR imaging
    - Pathological findings: gross and microscopic measurements
    - cT may still be somewhat inaccurate, because tumor extent is not always apparent with current imaging techniques, and because tumors are composed of varying proportions of noninvasive and invasive disease that these techniques cannot distinguish

# Rounding the measurement

- Measure size to the nearest millimeter
- If the size is slightly less than or greater than a cutoff for a given T classification, round to the millimeter reading that is closest to the cutoff
    - A reported size of 4.9 mm is reported as 5 mm
    - A reported size of 2.04 cm is reported as 2.0 cm (20 mm)
- Exception to the rounding rule: a breast tumor sized between 1.0 and 1.4 mm is rounded up to 2 mm
    - Rounding down would categorize the cancer as microinvasive carcinoma (T1mi), defined as a size of 1.0 mm or less

# T category definitions

- TX, primary tumor cannot be assessed
- T0, no evidence of primary tumor
- Tis (DCIS), ductal carcinoma in situ
    - Lobular carcinoma in situ (LCIS) is a benign entity and is removed from TNM staging in the AJCC Cancer Staging Manual, 8th Edition
- Tis (Paget), Paget disease of the nipple NOT associated with invasive carcinoma and/or carcinoma in situ (DCIS) in the underlying breast parenchyma
    - Carcinomas in the breast parenchyma associated with Paget disease are categorized based on the size and characteristics of the parenchymal disease
    - Still note the presence of Paget disease
- T1, tumor ≤20 mm in greatest dimension
    - T1mi, tumor ≤1 mm in greatest dimension
    - T1a, tumor >1 mm but ≤5 mm in greatest dimension
        - Round any measurement >1.0–1.9 mm to 2 mm
    - T1b, tumor >5 mm but ≤10 mm in greatest dimension
    - T1c, tumor >10 mm but ≤20 mm in greatest dimension
- T2, tumor >20 mm but ≤50 mm in greatest dimension
- T3, tumor >50 mm in greatest dimension
- T4, tumor of any size with direct extension to the chest wall and/or to the skin (ulceration or macroscopic nodules)
    - Invasion of the dermis alone does not qualify as T4
    - T4a, extension to the chest wall
        - Invasion or adherence to pectoralis muscle in the absence of invasion of chest wall structures does not qualify as T4
    - T4b, ulceration and/or ipsilateral macroscopic satellite nodules and/or edema (including peau d'orange) of the skin that does not meet the criteria for inflammatory carcinoma
    - T4c, both T4a and T4b are present
    - T4d, inflammatory carcinoma
