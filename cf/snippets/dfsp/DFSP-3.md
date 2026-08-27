+++
id           = "dfsp/DFSP-3"
gid          = "dfsp"
ref          = "DFSP-3"
page         = 7
title        = "Follow-up after treatment, and therapy for recurrence or metastasis"
nccn_version = "1.2027"
nccn_date    = "08/21/2026"
generated    = "2026-08-28"
see_also     = ["DFSP-1", "DFSP-2", "DFSP-B", "DFSP-C"]

[facets]
disease   = "dfsp"
timepoint = ["surveillance", "recurrence", "metastatic"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "site"
type = "text"
[[variables]]
name = "prior_treatment"
type = "text"
[[variables]]
name = "prior_rt"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "pdema_used"
type = "enum"
options = ["mohs", "other pdema", "not used", "unknown"]
[[variables]]
name = "margin_status"
type = "text"
[[variables]]
name = "interval"
type = "text"
[[variables]]
name = "exam_finding"
type = "text"
[[variables]]
name = "status"
type = "enum"
options = ["no evidence of disease", "recurrence", "metastasis"]
+++

# Source

- NCCN Dermatofibrosarcoma Protuberans v1.2027, DFSP-3, p7
- Covers follow-up after treatment, and therapy for recurrence or metastasis
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, primary site ___ (site)
- Prior treatment ___ (prior_treatment)
- Prior RT given ___ (prior_rt)
- Mohs or other form of PDEMA used at prior resection ___ (pdema_used)
- Margins at prior resection ___ (margin_status)
- Interval since prior treatment ___ (interval)
- Physical exam of primary site ___ (exam_finding)
- Current status ___ (status)

# Follow-up

- Physical exam with focus on primary site every 6–12 months
- Patient education about regular self-exam
- Consider MRI surveillance when clinical exam is insufficient to assess local recurrence

# Therapy for recurrence

- Re-resection if feasible (preferred)
    - The most commonly used form of PDEMA is Mohs
        - See Principles of PDEMA Technique in NCCN Guidelines for Squamous Cell Skin Cancer
    - When anatomic structures at the deep margin (eg, major vessels, nerves, bone) preclude complete histologic evaluation of the marginal surface, Mohs or other forms of PDEMA should be used to evaluate as much of the marginal surface as feasible
        - Treatment considerations for non-visualized areas may be the subject of multidisciplinary discussion
    - If PDEMA is unavailable, consider wide excision
        - Wide undermining is discouraged prior to confirmation of clear margins, due to the difficulty of interpreting subsequent re-excised margins, and the risk of concealing residual tumor below mobilized tissue
    - See Principles of Surgery (DFSP-B)
- RT, if not given previously and resection is not feasible
    - When Mohs or other forms of PDEMA are utilized and margins are negative, RT is not recommended
    - When Mohs or other forms of PDEMA are not utilized, consider RT if margins are considered narrow by the treating physicians and further resection would not be feasible upon recurrence
    - See Principles of Radiation Therapy (DFSP-C)
- Consider imatinib in cases where disease is unresectable, or unacceptable functional or cosmetic outcomes will occur with resection
    - Confirm COL1A1::PDGFB gene fusion by fluorescence in situ hybridization (FISH)

# Therapy for metastasis

- Multidisciplinary consultation
    - See Synchronous STAGE IV (EXTSARC-5) in NCCN Guidelines for Soft Tissue Sarcoma

# Next

- No recurrence, continue follow-up above
- Recurrence, go to therapy for recurrence above
- Metastasis, go to multidisciplinary consultation, see Synchronous STAGE IV (EXTSARC-5) in NCCN Guidelines for Soft Tissue Sarcoma
