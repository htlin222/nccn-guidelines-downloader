+++
id           = "prostate/PROS-2"
gid          = "prostate"
ref          = "PROS-2"
page         = 13
title        = "Initial risk stratification and staging workup for clinically localized disease"
nccn_version = "6.2026"
nccn_date    = "07/28/26"
generated    = "2026-08-27"
see_also     = ["ST-1", "PROS-3", "PROS-4", "PROS-5", "PROS-6", "PROS-E", "PROS-F"]

[facets]
disease   = "prostate"
timepoint = ["workup", "staging"]

[[variables]]
name = "ct"
type = "text"
[[variables]]
name = "grade_group"
type = "text"
[[variables]]
name = "psa"
type = "number"
[[variables]]
name = "cores_positive"
type = "text"
[[variables]]
name = "life_expectancy"
type = "text"
[[variables]]
name = "bone_symptoms"
type = "text"
[[variables]]
name = "risk_group"
type = "enum"
options = ["low", "favorable-intermediate", "unfavorable-intermediate", "high", "very-high"]
+++

# Source

- NCCN Prostate Cancer v6.2026, PROS-2, p13
- Applies to clinically localized disease
- Risk group is assigned from clinical/pathologic features (Staging, ST-1)
- Tumor-based molecular assays and germline genetic testing are other tools that can assist with risk stratification
    - Candidate for germline genetic testing, see CRIT-6 in the NCCN Guidelines for Genetic/Familial High-Risk Assessment: Breast, Ovarian, Pancreatic, and Prostate
    - Candidate for germline genetic testing, see HRS-3 in the NCCN Guidelines for Genetic/Familial High-Risk Assessment: Colorectal, Endometrial, and Gastric
    - Candidate for tumor-based molecular assays, see Principles of Risk Stratification and Biomarkers (PROS-H)
- Footnotes on PROS-2A
- All recommendations category 2A unless otherwise indicated

# Assessment

- Clinical T stage ___ (ct)
- Grade Group ___ (grade_group)
- PSA ___ (psa) ng/mL
- Positive biopsy cores ___ (cores_positive)
- Life expectancy ___ (life_expectancy)
- Symptoms consistent with bone metastases ___ (bone_symptoms)
- Assigned risk group ___ (risk_group)

# Risk group

- Low, has all of the following
    - cT1–cT2a
    - Grade Group 1
    - PSA <10 ng/mL
    - If asymptomatic with life expectancy ≤5 years, no imaging or treatment is indicated until the patient becomes symptomatic
        - At that time imaging can be performed, see Principles of Imaging (PROS-E)
        - Androgen deprivation therapy (ADT) should be given, see Principles of Androgen Deprivation Therapy (PROS-G)
- Intermediate, has all of the following
    - No high-risk group features
    - No very-high-risk group features
    - Has one or more intermediate risk factors (IRFs)
        - cT2b–cT2c
        - Grade Group 2 or 3
        - PSA 10–20 ng/mL
    - If asymptomatic with life expectancy ≤5 years, no imaging or treatment is indicated until the patient becomes symptomatic
        - At that time imaging can be performed, see Principles of Imaging (PROS-E)
        - Androgen deprivation therapy (ADT) should be given, see Principles of Androgen Deprivation Therapy (PROS-G)
- Favorable intermediate, has all of the following
    - 1 IRF
    - Grade Group 1 or 2
    - <50% biopsy cores positive (eg, <6 of 12 cores)
        - Percentage of positive cores is based on biopsies that include systematic biopsies with or without targeted MRI-guided biopsies
        - The Panel considers biopsies from a single region of interest (ROI) to count as a single sample
- Unfavorable intermediate, has one or more of the following
    - 2 or 3 IRFs
    - Grade Group 3
    - ≥50% biopsy cores positive (eg, ≥6 of 12 cores)
        - Percentage of positive cores is based on biopsies that include systematic biopsies with or without targeted MRI-guided biopsies
        - The Panel considers biopsies from a single region of interest (ROI) to count as a single sample
- High, has one or more high-risk features, but does not meet criteria for very high risk
    - cT3–cT4
    - Grade Group 4 or Grade Group 5
    - PSA >20 ng/mL
- Very high, has at least two of the following
    - cT3–cT4
    - Grade Group 4 or 5
    - PSA >40 ng/mL

# Additional evaluation

- Bone imaging should be performed for any patient with symptoms consistent with bone metastases, whatever the risk group
- All imaging per Principles of Imaging (PROS-E)
- Low
    - Confirmatory testing can be used to assess the appropriateness of active surveillance (PROS-F 2 of 5)
- Favorable intermediate
    - Confirmatory testing can be used to assess the appropriateness of active surveillance (PROS-F 2 of 5)
- Unfavorable intermediate
    - Soft tissue imaging
    - Consider bone imaging
- High
    - Bone imaging
    - Soft tissue imaging
- Very high
    - Bone imaging
    - Soft tissue imaging

# Next

- Low, initial therapy PROS-3
- Favorable intermediate, initial therapy PROS-4
- Unfavorable intermediate, initial therapy PROS-5
- High, initial therapy PROS-6
- Very high, initial therapy PROS-6
- After imaging in unfavorable intermediate, high, or very high risk
    - If regional metastases are found, see PROS-7
    - If distant metastases are found, see PROS-14 for low-volume M1 (metachronous or synchronous) or synchronous oligometastatic CSPC
        - See Number of Metastatic Sites in the Principles of MDT (PROS-M)
    - If distant metastases are found, see PROS-15 for high-volume M1 CSPC
