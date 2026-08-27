+++
id           = "gtn/GTN-4"
gid          = "gtn"
ref          = "GTN-4"
page         = 13
title        = "Primary treatment, monitoring, and additional treatment for high-risk GTN"
nccn_version = "2.2026"
nccn_date    = "11/21/25"
generated    = "2026-08-28"
see_also     = ["GTN-1", "GTN-B", "GTN-C", "GTN-D", "GTN-E", "ST-1", "ST-2"]

[facets]
disease   = "gtn"
stage     = ["IV", "any"]
timepoint = ["primary-treatment", "surveillance", "relapsed-refractory"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "hcg"
type = "text"
[[variables]]
name = "figo_stage"
type = "text"
[[variables]]
name = "prognostic_score"
type = "number"
[[variables]]
name = "metastatic_sites"
type = "text"
[[variables]]
name = "brain_mets"
type = "enum"
options = ["yes", "no"]
+++

# Source

- NCCN Gestational Trophoblastic Neoplasia v2.2026, GTN-4, p13
- Applies to high-risk GTN confirmed: prognostic score >=7, or Stage IV
    - See FIGO Staging System for GTN (ST-1)
    - See Prognostic Scoring Index for GTN (ST-2)
- Consider consultation with a clinician or center with expertise in management of gestational trophoblastic diseases
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- hCG ___ (hcg)
- FIGO stage ___ (figo_stage)
- Prognostic score ___ (prognostic_score)
- Sites of metastatic disease ___ (metastatic_sites)
- Brain metastases ___ (brain_mets)

# Primary treatment for high-risk GTN

- EMA-CO
    - See Systemic Therapy for GTN (GTN-D) for specific recommendations
- If brain metastases: increase Methotrexate and Leucovorin doses
    - For dosing modifications for brain metastases, see Systemic Therapy for GTN (GTN-D 2 of 7)
- If extensive metastatic disease with prognostic score >12: consider induction low-dose EP, as noted in GTN-D, for 1-3 cycles prior to starting EMA-CO
    - See FIGO Staging System for GTN (ST-1) and Prognostic Scoring Index for GTN (ST-2)

# Monitoring during treatment

- hCG assay every 2 weeks during treatment

# Response assessment

- Post-treatment imaging is not routinely recommended for follow-up after hCG normalization in patients with post-molar GTN or choriocarcinoma, where hCG is a reliable tumor marker
- It may be necessary to follow patients with brain metastases with MRI brain with contrast for 2-3 years
    - See Principles of Imaging (GTN-B)
- See Principles of Gynecologic Survivorship (GTN-E)

# Additional treatment

- EMA-EP or EP-EMA
    - See Systemic Therapy for GTN (GTN-D) for specific recommendations
- Consider alternative therapy for patients who are intolerant to EP-EMA
    - Platinum-based regimens with bleomycin, ifosfamide, or paclitaxel
    - See Systemic Therapy for GTN (GTN-D) for specific recommendations
    - Additional Agents/Regimens Shown to Have Some Activity in Treating Multiagent Chemotherapy-Resistant GTN (GTN-D 6 of 7)
- and Consider resection for chemotherapy-resistant disease, if feasible
    - Consider surgery, especially hysterectomy with salpingectomy and pulmonary resection, for chemotherapy-resistant disease
    - See Principles of Surgical Management (GTN-C)

# Next

- Normal hCG levels: continue systemic therapy regimen for 3-4 cycles
    - Then hCG assay every month for 12 months
- Good response followed by hCG plateau at low levels: additional treatment
- Relapse from remission: additional treatment
- Incomplete response to treatment: additional treatment
