+++
id           = "head-and-neck/ETHM-2"
gid          = "head-and-neck"
ref          = "ETHM-2"
page         = 63
title        = "Primary and adjuvant treatment of newly diagnosed ethmoid sinus tumors"
nccn_version = "2.2026"
nccn_date    = "05/12/2026"
generated    = "2026-08-28"
see_also     = ["ETHM-1", "ETHM-3", "ADV-1", "ADV-3", "FOLL-A", "SALI-1"]

[facets]
disease   = "head-and-neck"
timepoint = ["primary-treatment", "induction", "adjuvant"]
intent    = "curative"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "histology"
type = "text"
[[variables]]
name = "ctnm"
type = "text"
[[variables]]
name = "neck_nodes"
type = "enum"
options = ["N0", "N+"]
[[variables]]
name = "surgical_candidate"
type = "enum"
options = ["yes", "no", "patient declines surgery"]
[[variables]]
name = "margins"
type = "text"
[[variables]]
name = "adverse_features"
type = "text"
[[variables]]
name = "induction_response"
type = "enum"
options = ["CR", "PR", "less than PR", "not applicable"]
+++

# Source

- NCCN Head and Neck Cancers v2.2026, ETHM-2, p63
- Ethmoid sinus tumors, newly diagnosed, by clinical presentation: primary treatment, adjuvant treatment, follow-up
- Surgery per Principles of Surgery (SURG-A)
- RT per Principles of Radiation Therapy (ETHM-A); for minor salivary gland tumors, see SALI-A
- Systemic therapy per Principles of Systemic Therapy for Non-Nasopharyngeal Cancers (SYST-A)
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, ethmoid sinus tumor
- Histology ___ (histology)
- ___ (ctnm)
- Neck nodes ___ (neck_nodes)
- Surgical candidate ___ (surgical_candidate)
- Margins ___ (margins)
- Adverse pathologic features ___ (adverse_features)
- Response to induction chemotherapy ___ (induction_response)

# Newly diagnosed T1, T2

- Resection (preferred)
    - See the salivary gland algorithm for management after resection (SALI-1)
    - N+ neck disease is uncommon in ethmoid cancers, but, if present, requires neck dissection and appropriate risk-based adjuvant therapy
    - Adjuvant treatment
        - Observe, for T1 only (category 2B), if pathologic features are
            - Negative margins
            - Favorable histology, including low grade
            - Not located along the cribriform plate or medial wall of the orbit
            - No perineural invasion and lymphovascular space invasion
        - or Consider systemic therapy/RT (category 2B) if adverse pathologic features
            - Positive margins
            - Close margins, tumors adjacent to the cribriform plate and/or medial wall of the orbit
            - Unfavorable histology, ie, adenoid cystic, high-grade tumors
            - Intracranial and/or intraorbital extension
            - Cribriform plate location
            - Medial wall of orbit location
            - Perineural invasion
            - Lymphovascular space invasion
    - Then Follow-up (FOLL-A, 1 of 2)
- or Definitive RT
    - Then Post systemic therapy/RT or RT neck evaluation (FOLL-A, 2 of 2)

# Newly diagnosed T3, T4a

- For SNUC with neuroendocrine features, small cell, high-grade olfactory esthesioneuroblastoma, or SNEC histologies, systemic therapy should be a part of the overall treatment
    - Consider a clinical trial and referral to a major medical center that specializes in these diseases (SYST-A)
- Resection
    - See the salivary gland algorithm for management after resection (SALI-1)
    - N+ neck disease is uncommon in ethmoid cancers, but, if present, requires neck dissection and appropriate risk-based adjuvant therapy
    - Adjuvant treatment
        - RT
        - or Consider systemic therapy/RT (category 2B) if adverse pathologic features
            - Positive margins
            - Close margins, tumors adjacent to the cribriform plate and/or medial wall of the orbit
            - Unfavorable histology, ie, adenoid cystic, high-grade tumors
            - Intracranial and/or intraorbital extension
            - Cribriform plate location
            - Medial wall of orbit location
            - Perineural invasion
            - Lymphovascular space invasion
- or RT
- or Induction chemotherapy
    - Nonsurgical RT-based treatment is an option in selected patients with disease that has a major response to induction therapy short of a CR
    - CR
        - Consider systemic therapy/RT
        - or RT (category 2B)
    - PR
        - Consider resection
        - or Concurrent systemic therapy/RT
    - Less than PR
        - Resection
            - See the salivary gland algorithm for management after resection (SALI-1)
            - Adjuvant treatment
                - Consider systemic therapy/RT, if adverse pathologic features post-resection
                - or RT (category 2B)

# Newly diagnosed T4b, or patient declines surgery

- Treatment of very advanced head and neck cancer (ADV-1)

# Next

- After resection-based treatment, Follow-up (FOLL-A, 1 of 2)
- After definitive systemic therapy/RT or RT, Post systemic therapy/RT or RT neck evaluation (FOLL-A, 2 of 2)
- Recurrent or persistent disease (ADV-3)
