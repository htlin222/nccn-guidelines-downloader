+++
id           = "bladder/BL-2"
gid          = "bladder"
ref          = "BL-2"
page         = 9
title        = "Risk stratification of NMIBC after initial TURBT, and when to repeat the TURBT"
nccn_version = "2.2026"
nccn_date    = "06/22/26"
generated    = "2026-08-27"
see_also     = ["BL-1", "BL-3", "BL-D"]

[facets]
disease   = "bladder"
timepoint = ["staging", "primary-treatment"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "turbt_date"
type = "text"
[[variables]]
name = "grade"
type = "enum"
options = ["low-grade", "high-grade"]
[[variables]]
name = "t_stage"
type = "enum"
options = ["Ta", "T1", "CIS"]
[[variables]]
name = "size_cm"
type = "number"
[[variables]]
name = "lesions"
type = "number"
[[variables]]
name = "resection"
type = "enum"
options = ["visually complete", "visually incomplete"]
[[variables]]
name = "muscle_in_specimen"
type = "enum"
options = ["present", "absent"]
[[variables]]
name = "recurrence_history"
type = "text"
[[variables]]
name = "prior_intravesical"
type = "text"
[[variables]]
name = "lvi"
type = "enum"
options = ["present", "absent", "not reported"]
[[variables]]
name = "subtype"
type = "text"
+++

# Source

- NCCN Bladder Cancer v2.2026, BL-2, p9
- Applies once initial TURBT shows NMIBC (BL-1)
- Within each of these risk strata an individual patient may have more or fewer concerning features that can influence care
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Initial TURBT ___ (turbt_date)
- Grade ___ (grade)
- T category ___ (t_stage)
- Largest tumor ___ (size_cm) cm
- Number of lesions ___ (lesions)
- Resection ___ (resection)
- Muscle in specimen ___ (muscle_in_specimen)
- Recurrence history ___ (recurrence_history)
- Prior intravesical therapy ___ (prior_intravesical)
- Lymphovascular invasion ___ (lvi)
- Histopathologic subtype ___ (subtype)

# Repeat TURBT

- Low-grade NMIBC with visually complete resection goes straight to risk stratification, no repeat TURBT
- Repeat TURBT for visually incomplete resection
- Repeat TURBT for high-volume tumor
    - High-volume tumors are large or highly multifocal, and are at high risk of residual tumor
- Repeat TURBT for carcinoma in situ (CIS) or T1
- Consider repeat TURBT for select Ta
    - Consider for high-grade Ta particularly if large, and/or no muscle in specimen
- Muscle should be present in repeat TURBT pathology specimen if possible
- Repeat TURBT showing residual NMIBC or no residual cancer goes to risk stratification
- Repeat TURBT showing MIBC leaves this pathway

# Low risk

- Papillary urothelial neoplasm of low malignant potential
- Low grade urothelial carcinoma, and all of
    - Ta
    - ≤3 cm
    - Solitary
- Adapted with permission from the AUA/SUO guideline, Chang SS, Boorjian SA, Chou R, et al. J Urol 2016

# Intermediate risk

- Baseline intermediate risk eligibility factors, any one of
    - Ta low grade tumor that is recurrent
    - Ta low grade tumor that is multifocal
    - Ta low grade tumor that is ≥3 cm
    - Any T1 low grade (G1–G2) tumor
    - Any Ta G2 tumor, regardless of recurrence status
- Patients are then further stratified by the number of adverse risk factors
    - Multifocal tumors (>1 lesion)
    - Early recurrence (<1 year)
    - Frequent recurrence (>1 recurrence/year)
    - Tumor size ≥3 cm
    - Failure of prior intravesical therapy
- Intermediate risk subgroups
    - Lower risk: 0 risk factors
    - Intermediate risk: 1–2 factors
    - Higher risk: ≥3 factors
- Per Tan WS, et al. Eur Urol Oncol 2022

# High risk

- High grade urothelial carcinoma, and any of
    - CIS
    - T1
    - >3 cm
    - Multifocal
- Adapted with permission from the AUA/SUO guideline, Chang SS, Boorjian SA, Chou R, et al. J Urol 2016
- Very high risk features, any of
    - BCG unresponsive, per Kamat AM, et al. J Clin Oncol 2016
        - Recurrent T1 high grade ≥3 months after adequate BCG induction
        - High grade Ta/T1 ≤6 months after last BCG dose
        - CIS ≤12 months after last BCG dose
    - Certain histopathologic subtypes, see aggressive subtype histologies listed on Bladder Cancer: Non-Urothelial and Urothelial with Subtype Histology (BL-D)
    - Lymphovascular invasion
    - Prostatic urethral invasion

# Next

- Low risk, management per NMIBC risk group (BL-3)
- Intermediate risk, management per NMIBC risk group (BL-3)
- High risk, management per NMIBC risk group (BL-3)
