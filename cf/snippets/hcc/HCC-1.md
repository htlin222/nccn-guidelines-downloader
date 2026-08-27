+++
id           = "hcc/HCC-1"
gid          = "hcc"
ref          = "HCC-1"
page         = 7
title        = "Who to screen for HCC, with what test, and when to repeat it"
nccn_version = "1.2026"
nccn_date    = "03/10/26"
generated    = "2026-08-27"
see_also     = ["HCC-2", "HCC-A"]

[facets]
disease   = "hcc"
timepoint = "screening"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "sex"
type = "enum"
options = ["man", "woman"]
[[variables]]
name = "etiology"
type = "text"
[[variables]]
name = "ctp"
type = "enum"
options = ["A", "B", "C", "no cirrhosis"]
[[variables]]
name = "us_finding"
type = "text"
[[variables]]
name = "afp"
type = "text"
+++

# Source

- NCCN Hepatocellular Carcinoma v1.2026, HCC-1, p7
- Applies to patients at risk for HCC, entering or continuing HCC screening
- Principles of Imaging: HCC-A
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo ___ (sex)
- Liver disease etiology ___ (etiology)
- Cirrhosis, Child-Turcotte-Pugh (CTP) class ___ (ctp)
- Ultrasound (US) ___ (us_finding)
- AFP ___ (afp)

# At risk for HCC, screen

- CTP A or B cirrhosis, any etiology
    - Enroll in an HCC screening program
    - Hepatitis B or C
        - Outcomes improve when the HBV/HCV is successfully treated; consider referral to a hepatologist for comprehensive care
    - Alcohol-associated cirrhosis
    - Metabolic dysfunction-associated steatohepatitis
    - Other etiologies
        - Includes metabolic dysfunction-associated steatotic liver disease (MASLD); outcomes improve when it is successfully treated, consider referral to a hepatologist
- CTP C cirrhosis, only if a transplant candidate
    - Enroll in an HCC screening program
- Without cirrhosis, hepatitis B
    - Chronic hepatitis B (CHB) viral infection should be enrolled in an HCC screening program
    - Additional risk factors in this group
        - Platelet, age, and gender-HBV score at least 10
        - Family history of HCC
        - Man from endemic country over 40 years old
        - Woman from endemic country over 50 years old
        - Person from Africa, at earlier age

# Screening test

- Ultrasound (US) plus alpha-fetoprotein (AFP)
    - Most clinical practice guidelines recommend US for HCC screening
    - US exams should be done by qualified sonographers or physicians
    - Liver dynamic CT or dynamic MRI may be performed as an alternative to US, if US does not detect nodules or if visualization is poor

# Next

- AFP positive, or US nodule(s) 10 mm or larger, go to additional workup (HCC-2)
    - Positive or rising AFP should prompt CT or MRI regardless of US results
- US nodule(s) under 10 mm, repeat US + AFP in 3-6 mo
- US negative, repeat US + AFP in 6 mo
    - US negative means no observation, or only definitely benign observation(s)
