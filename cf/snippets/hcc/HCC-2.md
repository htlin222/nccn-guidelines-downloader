+++
id           = "hcc/HCC-2"
gid          = "hcc"
ref          = "HCC-2"
page         = 8
title        = "Diagnosis of HCC after a positive imaging or AFP result"
nccn_version = "1.2026"
nccn_date    = "03/10/26"
generated    = "2026-08-27"
see_also     = ["HCC-1", "HCC-3", "HCC-A", "HCC-B", "HCC-C", "HCC-D"]

[facets]
disease   = "hcc"
timepoint = ["diagnosis", "screening"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "afp"
type = "text"
[[variables]]
name = "imaging"
type = "enum"
options = ["multiphasic CT", "MRI", "CEUS"]
[[variables]]
name = "observation"
type = "text"
+++

# Source

- NCCN Hepatocellular Carcinoma v1.2026, HCC-2, p8
- Applies to diagnosis of HCC, entered from one of the imaging or AFP triggers below
- Adapted with permission from Singal AG, et al. Hepatology 2023;78:1922-1965
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Entry trigger, at least one
    - Positive imaging result
    - Suspicious abnormality detected on imaging examination done for other reasons
    - Positive AFP ___ (afp)

# Imaging

- Diagnostic imaging performed: ___ (imaging)
    - Abdominal multiphasic CT (preferred)
    - MRI (preferred)
    - Contrast-enhanced US (CEUS)
- Principles of Imaging (HCC-A)

# Findings

- No observation detected
- Observation(s) detected: ___ (observation)
    - An observation is an area identified at imaging that is distinctive from background liver
    - It may be a mass or a pseudo lesion
    - Definitely HCC
        - Criteria for observations that are definitely HCC have been proposed by Liver Imaging Reporting and Data System (LI-RADS) and adopted by American Association for the Study of Liver Diseases (AASLD)
        - These criteria apply only to patients at high risk for HCC
        - Organ Procurement and Transplantation Network (OPTN) has proposed imaging criteria for HCC applicable in candidates for liver transplant
    - Not definitely HCC, not definitely benign
    - Definitely benign

# Additional workup

- Refer to the NCCN Distress Thermometer and Problem List, which includes social determinants of health
- See NCCN Guidelines for Distress Management (DIS-A)

# Individualized workup, if not definitely HCC and not definitely benign

- As informed by multidisciplinary discussion
- May include additional imaging (HCC-A)
- May include biopsy
    - Before biopsy, evaluate if patient is a resection or transplant candidate
    - If patient is a potential transplant candidate, consider referral to transplant center before biopsy
    - Principles of Core Needle Biopsy (HCC-B)
    - Principles of Mixed HCC-CCA (HCC-C)
    - Principles of Pathology (HCC-D)

# Next

- Definitely HCC, HCC confirmed, go to HCC-3
- Not definitely HCC, not definitely benign, individualized workup as above
- Definitely benign, return to screening in 6 mo (HCC-1)
- No observation detected, return to screening in 6 mo (HCC-1)
    - If no observations are detected at diagnostic imaging despite positive surveillance tests, then return to surveillance in 6 months if the most reasonable explanation is that surveillance tests were false positives
    - Consider imaging with an alternative method, with or without AFP, if there is reasonable suspicion that the diagnostic imaging test was false negative
