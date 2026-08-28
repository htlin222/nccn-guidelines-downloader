+++
id           = "neuroblastoma/NEUROB-11"
gid          = "neuroblastoma"
ref          = "NEUROB-11"
page         = 17
title        = "Post-consolidation therapy in high-risk disease, and what follows at the end-of-post-consolidation evaluation"
nccn_version = "2.2026"
nccn_date    = "04/28/26"
generated    = "2026-08-28"
see_also     = ["NEUROB-10", "NEUROB-D", "NEUROB-F", "NEUROB-G"]

[facets]
disease   = "neuroblastoma"
timepoint = ["consolidation", "maintenance", "surveillance", "relapsed-refractory"]

[[variables]]
name = "full_evaluation_result"
type = "enum"
options = ["no disease progression", "PD"]
[[variables]]
name = "residual_disease_at_start"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "mibg_avid"
type = "enum"
options = ["avid", "non-avid"]
[[variables]]
name = "end_postconsolidation_response"
type = "text"
[[variables]]
name = "last_audiogram"
type = "text"
+++

# Source

- NCCN Neuroblastoma v2.2026, NEUROB-11, p17
- Applies to high-risk disease, at post-consolidation therapy
- Entry is the full disease evaluation, scored by INRC response criteria (NEUROB-G)
- Systemic therapy options are defined in Principles of Systemic Therapy (NEUROB-D)
- All recommendations category 2A unless otherwise indicated

# Assessment

- Full disease evaluation completed
- INRC response criteria applied (NEUROB-G)
- Result of the full disease evaluation ___ (full_evaluation_result)
- Residual disease present at start of post-consolidation ___ (residual_disease_at_start)
- MIBG status of the disease ___ (mibg_avid)

# No disease progression

- Post-consolidation therapy containing anti-GD2 antibody (NEUROB-D)
    - Isotretinoin / sargramostim + dinutuximab (category 1)
    - See Principles of Systemic Therapy (NEUROB-D 9 of 13)
- Disease evaluation during post-consolidation therapy
    - I-123 MIBG scan recommended after the first 3 cycles of post-consolidation therapy
        - FDG-PET instead, if MIBG non-avid
    - Additional disease evaluations if residual disease was present at start of post-consolidation
        - Anatomic imaging of primary site
        - And/or bone marrow evaluation

# End of post-consolidation disease evaluation

- INRC response criteria applied (NEUROB-G)
- Response at end of post-consolidation ___ (end_postconsolidation_response)

# Continuation therapy

- Eflornithine is a treatment option for patients in remission and with a disease response to prior therapy (category 2B)
    - See Principles of Systemic Therapy (NEUROB-D 6 of 13 and NEUROB-D 9 of 13)
    - Serial monitoring of hearing is essential, at 6-month intervals or as clinically indicated
        - Audiograms or brainstem auditory evoked response
        - Most patients with high-risk neuroblastoma are at a critical age for language development
        - Date and result of last hearing assessment ___ (last_audiogram)

# Progressive disease (PD)

- Chemoimmunotherapy, see Principles of Systemic Therapy (NEUROB-D)
- Or clinical trial
- For relapsed/refractory neuroblastoma, treatment decisions are scenario-specific
    - Repeat tumor biomarker profiling should be performed if feasible
    - Consultation with a neuroblastoma specialist should be considered (NEUROB-D 10 of 13)

# Next

- No disease progression, give post-consolidation therapy, then re-evaluate at end of post-consolidation
- After the end-of-post-consolidation evaluation, continuation therapy
- Disease surveillance / follow-up after completion of treatment (NEUROB-F)
- PD, chemoimmunotherapy or clinical trial
