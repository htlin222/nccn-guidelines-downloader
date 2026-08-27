+++
id           = "aml/APL-6"
gid          = "aml"
ref          = "APL-6"
page         = 21
title        = "Therapy for relapsed APL, and additional therapy after second remission"
nccn_version = "5.2026"
nccn_date    = "07/15/26"
generated    = "2026-08-27"
see_also     = ["APL-3", "APL-5", "APL-7", "APL-B"]

[facets]
disease   = "aml"
histology = "myeloid"
stage     = "recurrent"
timepoint = ["recurrence", "relapsed-refractory", "consolidation", "transplant"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "relapse_type"
type = "enum"
options = ["morphologic", "molecular"]
[[variables]]
name = "prior_therapy"
type = "text"
[[variables]]
name = "interval_months"
type = "number"
[[variables]]
name = "bm_pcr"
type = "enum"
options = ["negative", "positive", "pending"]
[[variables]]
name = "transplant_candidate"
type = "enum"
options = ["yes", "no"]
+++

# Source

- NCCN Acute Myeloid Leukemia v5.2026, APL-6, p21
- Acute Promyelocytic Leukemia, age 18 years and older
- Applies to first relapse, morphologic or molecular
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo APL, first relapse
- Relapse is ___ (relapse_type)
- Molecular panel documented, to verify relapsed APL versus therapy-related AML
- Prior therapy ___ (prior_therapy)
- Interval from that therapy ___ (interval_months) months
- BM quantitative PCR ___ (bm_pcr)
- Transplant candidate ___ (transplant_candidate)

# Additional therapy for first relapse

- Early relapse (<6 mo) after ATRA and arsenic trioxide, no anthracycline
    - Anthracycline-based regimen as per APL-3, or gemtuzumab ozogamicin
    - Following the first cycle of consolidation, if the disease is not in molecular remission by quantitative PCR on a BM sample, consider matched sibling or alternative donor HCT (haploidentical, unrelated donor, or cord blood), or clinical trial
        - Test at least 2-3 weeks after completion of arsenic trioxide, to avoid false positives
    - Outcomes are uncertain in patients who received arsenic trioxide during initial induction/consolidation therapy
- No prior exposure to arsenic trioxide, or early relapse (<6 mo) after ATRA plus an anthracycline-containing regimen
    - Arsenic trioxide, with or without ATRA, with or without gemtuzumab ozogamicin
    - Following the first cycle of consolidation, if the disease is not in molecular remission by quantitative PCR on a BM sample, consider matched sibling or alternative donor HCT (haploidentical, unrelated donor, or cord blood), or clinical trial
        - Test at least 2-3 weeks after completion of arsenic trioxide, to avoid false positives
    - Outcomes are uncertain in patients who received arsenic trioxide during initial induction/consolidation therapy
- Late relapse (6 mo or more) after an arsenic trioxide-containing regimen
    - Arsenic trioxide, with or without ATRA, with or without anthracycline or gemtuzumab ozogamicin
        - A small randomized trial suggests the addition of ATRA does not confer any benefit over arsenic trioxide alone (Raffoux E, et al. J Clin Oncol 2003;21:2326-2334)
    - Following the first cycle of consolidation, if the disease is not in molecular remission by quantitative PCR on a BM sample, consider matched sibling or alternative donor HCT (haploidentical, unrelated donor, or cord blood), or clinical trial
        - Test at least 2-3 weeks after completion of arsenic trioxide, to avoid false positives
    - Outcomes are uncertain in patients who received arsenic trioxide during initial induction/consolidation therapy

# Second remission, morphologic

- Consider CNS prophylaxis with intrathecal (IT) chemotherapy, methotrexate or cytarabine
- PCR negative by BM
    - Transplant candidate, autologous HCT
        - See NCCN Guidelines for Hematopoietic Cell Transplantation
    - Not a transplant candidate, arsenic trioxide consolidation, total of 6 cycles
- PCR positive by BM
    - Transplant candidate, matched sibling or alternative donor HCT
        - See NCCN Guidelines for Hematopoietic Cell Transplantation
    - Not a transplant candidate, clinical trial

# No remission

- Clinical trial, or matched sibling or alternative donor HCT
    - See NCCN Guidelines for Hematopoietic Cell Transplantation

# Next

- Details on regimens, see references on APL-7 and APL-B 5 of 6
