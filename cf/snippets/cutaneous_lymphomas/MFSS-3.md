+++
id           = "cutaneous_lymphomas/MFSS-3"
gid          = "cutaneous_lymphomas"
ref          = "MFSS-3"
page         = 21
title        = "TNMB classification of mycosis fungoides and Sezary syndrome"
nccn_version = "2.2026"
nccn_date    = "02/13/26"
generated    = "2026-08-27"
see_also     = ["MFSS-2", "MFSS-3A", "MFSS-4"]

[facets]
disease   = "cutaneous_lymphomas"
histology = "t-cell"
timepoint = "staging"

[[variables]]
name = "skin_lesion"
type = "enum"
options = ["patch", "plaque/papule", "tumor", "erythroderma"]
[[variables]]
name = "bsa"
type = "number"
[[variables]]
name = "ln_size"
type = "number"
[[variables]]
name = "blood_count"
type = "number"
[[variables]]
name = "clone_match"
type = "enum"
options = ["negative or equivocal", "positive and identical to skin", "positive but different from skin", "not assessed"]
[[variables]]
name = "t_class"
type = "text"
[[variables]]
name = "n_class"
type = "text"
[[variables]]
name = "m_class"
type = "text"
[[variables]]
name = "b_class"
type = "text"
+++

# Source

- NCCN Mycosis Fungoides/Sezary Syndrome v2.2026, MFSS-3, p21
- TNMB classification and staging of mycosis fungoides and Sezary syndrome
- Originally published in Olsen EA, Whittaker S, Willemze R, et al. Primary cutaneous lymphoma: recommendations for clinical trial design and staging update from the ISCL, USCLC, and EORTC. Blood 2022;140:419-437
- Changes or confirmation of staging are noted in bold in the table on this page and described further on MFSS-3A
- Footnotes for this page are on MFSS-3A
- All recommendations are category 2A unless otherwise indicated

# Assessment

- Skin lesion type: ___ (skin_lesion)
- Skin involvement: ___ (bsa) % BSA
- Largest abnormal LN, longest diameter (LDi): ___ (ln_size) cm
- CD4+/CD26- or CD4+/CD7- cells in blood: ___ (blood_count) /uL
- Clone in blood, LN, or viscera compared with skin clone: ___ (clone_match)
- TNMB: T ___ (t_class) / N ___ (n_class) / M ___ (m_class) / B ___ (b_class)

# Skin (T)

- T0: absence of clinically suspicious lesions
    - T0 is used for clinical trials in order to track clearance of lesions in the skin compartment
    - No patient with cutaneous lymphoma at time of diagnosis should be T0
- T1: patches, plaques, or papules covering less than 10% BSA
    - T1A: patch only lesions
    - T1B: plaque/papule with or without patch lesions
- T2: patches, plaques, or papules covering 10% BSA or more
    - T2A: patch only
    - T2B: plaque with or without patch
- T3: one or more tumors 1 cm or more in diameter
    - Tumor = at least one lesion 1 cm or more in diameter, solid or nodular, with evidence of depth and/or vertical growth
    - Note total number of lesions, total volume of lesions, largest size lesion, and region of body involved
    - Note if histologic evidence of LCT has occurred
    - Phenotyping for CD30 is encouraged
- T4: confluence of erythema covering 80% BSA or more
    - The BSA of 80% is used to define erythroderma in MF/SS at study entry
    - Any decrease in BSA during the study does not affect the entry classification
    - Patients with both erythroderma and tumors may be designated as T4(T3)
- Patch = any size skin lesion without significant elevation or induration
    - Note presence/absence of hypo- or hyperpigmentation, scale, crusting, and/or poikiloderma
- Plaque = any size skin lesion that is elevated or indurated
    - Note presence or absence of scale, crusting, and/or poikiloderma
    - Document histologic features such as folliculotropism or LCT, defined as 25% or more large cells
    - Document CD30+ or CD30-
    - Document clinical features such as ulceration

# Node (N)

- Abnormal LNs are those now more than 1.5 cm longest diameter (LDi) according to the Lugano classification and confirmed by imaging
    - The pathological findings of a representative abnormal LN may apply to all abnormal LNs
- N0: no clinically abnormal LN; no biopsy necessary
- N1: Dutch grade 1, or NCI LN 0-2
    - N1A: clone negative or equivocal
    - N1B: clone positive and identical to skin
- N2: Dutch grade 2, NCI LN3
    - N2A: clone negative or equivocal
    - N2B: clone positive and identical to skin
- N3: Dutch grade 3-4, NCI LN4
    - N3A: clone negative or equivocal
    - N3B: clone positive and identical to skin
- NX: clinically abnormal peripheral or central lymph node but no pathologic determination of representative LN
    - Other surrogate means of determining involvement may be determined by Tri-Society consensus
- Dutch Criteria for Lymph Nodes are on MFSS-5
- NCI Lymph Node Classification is on MFSS-5

# Visceral (M)

- M0: no visceral involvement
- M1a: BM only involvement
    - Clone positive and identical to skin
    - Clone negative or indeterminate
- M1b: non-BM visceral involvement
    - Clone positive and identical to skin
    - Clone negative or indeterminate
- MX: visceral involvement is neither confirmed nor refuted by available pathologic or imaging assessment

# Blood (B)

- B0: absence of significant blood involvement
    - B0A: clone negative or equivocal
    - B0B: clone positive and identical to skin
- B1: low blood tumor burden
    - B1A: clone negative or equivocal
    - B1B: clone positive and identical to skin
- B2: high blood tumor burden
    - B2A: clone negative or equivocal
    - B2B: clone positive and identical to skin
- BX: unable to quantify blood involvement according to agreed upon guidelines
    - BXA: clone negative or equivocal
    - BXB: clone positive and identical to skin
- Blood staging for MF/SS is defined currently by CD4+/CD26- or CD4+/CD7- cells
    - B0 is set at 250/uL of CD4+/CD26- or CD4+/CD7- cells
    - B1 does not meet criteria for B0 or B2
    - B2 is 1000/uL or more of CD4+/CD26- or CD4+/CD7- cells, or other aberrant population of lymphocytes identified by flow cytometry
    - Patients with high blood tumor burden (B2) are expected to have a clone in the blood that is identical to that in the skin
    - Nonidentical T-cell clones are often detected in peripheral blood with increasing age and are of unknown clinical significance
    - Patients with lymphopenia, defined as fewer than 1000 absolute lymphocytes, may potentially have an underestimation of aberrant lymphocyte burden if assessed only by the absolute number and not also by the percentage of immunophenotypically abnormal lymphocytes
- Sezary syndrome is defined by B2 blood involvement and a clonal rearrangement of TCR in the blood
    - Clones should be relevant to clone in the skin

# Clonality designation

- Clonality may be characterized further by designation as A or B
    - A: clone negative or equivocal
    - B: clone positive and identical to skin
- If a clone in LN or viscera is detected but different from that identified in the skin, another concurrent lymphoproliferative process should be considered

# Next

- For clinical staging of MF and SS from this TNMB classification, go to MFSS-4
- For the footnotes and the further description of staging changes, see MFSS-3A
