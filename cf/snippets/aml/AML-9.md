+++
id           = "aml/AML-9"
gid          = "aml"
ref          = "AML-9"
page         = 43
title        = "Therapy options for relapsed or refractory AML"
nccn_version = "5.2026"
nccn_date    = "07/15/26"
generated    = "2026-08-27"
see_also     = ["AML-E", "AML-J", "AML-3", "AML-8"]

[facets]
disease   = "aml"
histology = "myeloid"
stage     = "refractory"
biomarker = ["flt3", "idh1", "idh2", "npm1", "any"]
timepoint = "relapsed-refractory"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "disease_status"
type = "enum"
options = ["relapsed", "refractory"]
[[variables]]
name = "molecular"
type = "text"
[[variables]]
name = "flt3"
type = "enum"
options = ["itd", "tkd", "none"]
[[variables]]
name = "idh1"
type = "text"
[[variables]]
name = "idh2"
type = "text"
[[variables]]
name = "npm1"
type = "text"
[[variables]]
name = "kmt2a"
type = "text"
[[variables]]
name = "cd33"
type = "enum"
options = ["positive", "negative"]
[[variables]]
name = "first_remission"
type = "text"
[[variables]]
name = "intensive_eligible"
type = "enum"
options = ["eligible", "not-eligible"]
[[variables]]
name = "prior_hma"
type = "enum"
options = ["hma-naive", "prior-hma-exposure"]
[[variables]]
name = "prior_targeted"
type = "text"
+++

# Source

- NCCN Acute Myeloid Leukemia (Age ≥18 years) v5.2026, AML-9, p43
- Applies to therapy for relapsed/refractory disease
- Principles of Systemic Therapy for AML: AML-E
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Disease ___ (disease_status)
- Molecular profiling ___ (molecular)
    - Consider molecular profiling if not done at diagnosis, or repeat it to determine clonal evolution
- FLT3 ___ (flt3)
- IDH1 ___ (idh1)
- IDH2 ___ (idh2)
- NPM1 ___ (npm1)
- KMT2A rearrangement ___ (kmt2a)
- CD33 ___ (cd33)
- Duration of first remission ___ (first_remission)
- Eligible for intensive therapy ___ (intensive_eligible)
- Prior HMA exposure ___ (prior_hma)
    - Disease that progressed to AML from MDS after significant exposure to HMAs (ie, azacitidine, decitabine) may be less likely to derive benefit from continued treatment with HMAs compared to patients who are HMA-naive
    - Alternative treatment strategies should be considered
- Targeted agents already given ___ (prior_targeted)
    - Targeted therapies may be retried if the agents were not administered continuously and were not stopped due to development of clinical resistance

# Clinical trial

- Clinical trial
    - There are promising ongoing clinical trials investigating targeted therapies based on molecular mutations for relapsed/refractory disease

# Targeted therapy

- Applies with these caveats
    - There have been trials conducted combining targeted therapies with other agents
    - Best sequencing of targeted therapies is unknown at this time and depends on clinical context
- Therapy for AML with FLT3-ITD mutation
    - Gilteritinib (category 1)
    - HMAs (azacitidine or decitabine) + sorafenib
    - Quizartinib (category 2B)
- Therapy for AML with FLT3-TKD mutation
    - Gilteritinib (category 1)
- Therapy for AML with IDH2 mutation
    - Enasidenib
- Therapy for AML with IDH1 mutation
    - Ivosidenib
    - Olutasidenib
- Therapy for CD33-positive AML
    - Gemtuzumab ozogamicin
- Therapy for AML with lysine methyltransferase 2A gene (KMT2A) rearrangement
    - Revumenib
- Therapy for AML with NPM1 mutation
    - Revumenib
    - Ziftomenib

# Intensive therapy for appropriate patients

- Confirm the patient is an appropriate candidate
    - Appropriate patients include those eligible for intensive therapy and with relatively short first remission
    - For patients with long first remission, reinduction therapy may be appropriate
    - Reinduction applies primarily to cytotoxic chemotherapy and excludes the re-use of targeted agents due to the potential development of resistance
    - There are no data regarding re-induction with dual-drug liposomal encapsulation of cytarabine and daunorubicin
    - If a second CR is achieved, then consolidation with allogeneic HCT should be considered
- Cladribine + cytarabine + G-CSF, with or without (mitoxantrone or idarubicin)
- Cytarabine, with or without (daunorubicin or idarubicin or mitoxantrone)
- Fludarabine + cytarabine + G-CSF, with or without idarubicin, with or without venetoclax
    - Principles of Venetoclax Use with HMA or LDAC: AML-J
- Etoposide + cytarabine, with or without mitoxantrone
- Clofarabine, with or without cytarabine, with or without idarubicin
- CLIA (cladribine + idarubicin + cytarabine) + venetoclax (category 2B)

# Less intensive therapy

- HMAs (azacitidine or decitabine)
    - Less likely to benefit disease that progressed to AML from MDS after significant HMA exposure
- LDAC (category 2B)
- (HMA or LDAC) + venetoclax
    - Less likely to benefit disease that progressed to AML from MDS after significant HMA exposure
    - Principles of Venetoclax Use with HMA or LDAC: AML-J
