+++
id           = "ovarian/LCOC-5"
gid          = "ovarian"
ref          = "LCOC-5"
page         = 19
title        = "Adjuvant and post-adjuvant treatment of small cell carcinoma of the ovary (hypercalcemic type)"
nccn_version = "4.2026"
nccn_date    = "04/10/26"
generated    = "2026-08-27"
see_also     = ["LCOC-1", "LCOC-5A", "OV-A", "OV-D", "OV-F"]

[facets]
disease   = "ovarian"
histology = "small-cell"
stage     = ["I", "II", "III", "IV", "recurrent"]
timepoint = ["diagnosis", "adjuvant", "consolidation", "recurrence", "surveillance"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "prior_procedure"
type = "text"
[[variables]]
name = "stage"
type = "text"
[[variables]]
name = "smarca4_germline"
type = "enum"
options = ["positive", "negative", "pending", "not done"]
[[variables]]
name = "surgical_candidate"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "optimal_cytoreduction_likely"
type = "enum"
options = ["yes", "no"]
+++

# Source

- NCCN Ovarian Cancer v4.2026, Small Cell Carcinoma of the Ovary (Hypercalcemic Type), LCOC-5, p19
- Applies to a patient referred with newly diagnosed SCCOHT after a recent surgical procedure
- Pathologic diagnosis per WHO Histologic Classification (OV-F)
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, newly diagnosed SCCOHT
- Referred after recent surgical procedure: ___ (prior_procedure)
- Stage ___ (stage)
- Germline SMARCA4: ___ (smarca4_germline)
- Surgical candidate: ___ (surgical_candidate)
- Optimal cytoreduction likely: ___ (optimal_cytoreduction_likely)

# Pathologic diagnosis

- Newly diagnosed SCCOHT after recent surgical procedure
- Classify by WHO Histologic Classification (OV-F)
- Germline SMARCA4 testing, if not previously done

# Adjuvant treatment

- Stage IA–III, surgical candidate, optimal cytoreduction likely
    - Hysterectomy/BSO + comprehensive staging and debulking as needed
        - If germline SMARCA4 negative, fertility sparing surgery can be considered after appropriate counseling
        - There are limited data on the safety and feasibility of fertility sparing surgery
- Stage IV, or low likelihood of optimal cytoreduction, or poor surgical candidate
    - Systemic therapy, see primary therapy in LCOC-5A
        - See Principles of Systemic Therapy (OV-D) and Management of Drug Reactions (OV-E)
        - Consider early referral to stem cell transplant center for autologous stem cell collection at the time of cycle 1

# Post-adjuvant therapy

- Response
    - Hysterectomy/BSO + comprehensive staging and/or debulking as needed
        - If germline SMARCA4 negative, fertility sparing surgery can be considered after appropriate counseling
        - There are limited data on the safety and feasibility of fertility sparing surgery
    - Consider high-dose chemotherapy with autologous stem cell transplantation consolidation
        - Consider early referral to stem cell transplant center for autologous stem cell collection at the time of cycle 1
- Progressive or recurrent disease
    - Clinical trial (preferred)
    - or Systemic therapy regimens, see recurrence therapy in LCOC-5A
    - or Best supportive care, see NCCN Guidelines for Supportive Care

# Monitoring / follow-up

- Imaging studies as clinically indicated
- See Principles of Imaging (OV-A)

# Next

- Primary systemic therapy regimens, go to LCOC-5A
- Systemic therapy regimens for progressive or recurrent disease, go to LCOC-5A
