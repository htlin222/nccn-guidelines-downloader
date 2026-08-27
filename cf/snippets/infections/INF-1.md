+++
id           = "infections/INF-1"
gid          = "infections"
ref          = "INF-1"
page         = 7
title        = "Antimicrobial prophylaxis based on overall infection risk in patients with cancer"
nccn_version = "1.2026"
nccn_date    = "03/11/2026"
generated    = "2026-08-28"
see_also     = ["INF-2", "INF-3", "INF-4", "INF-5", "INF-6"]

[facets]
disease   = "infections"
timepoint = ["prevention", "supportive"]

[[variables]]
name = "malignancy"
type = "text"
[[variables]]
name = "therapy"
type = "text"
[[variables]]
name = "remission"
type = "text"
[[variables]]
name = "anc"
type = "number"
[[variables]]
name = "neutropenia_days"
type = "number"
[[variables]]
name = "prior_chemo"
type = "text"
[[variables]]
name = "cmv"
type = "text"
[[variables]]
name = "ist"
type = "text"
[[variables]]
name = "prior_hsv"
type = "text"
[[variables]]
name = "allergy"
type = "text"
[[variables]]
name = "risk"
type = "enum"
options = ["low", "intermediate", "high"]
+++

# Source

- NCCN Prevention and Treatment of Cancer-Related Infections v1.2026, INF-1, p7
- Applies to assigning an overall infection risk category and the prophylaxis that follows from it
- Antibacterial agent dosing, spectrum, and specific comments/cautions: FEV-A
- Infection concerns and recommended prophylaxis for immune-targeted agents: INF-A
- All recommendations category 2A unless otherwise indicated

# Assessment

- Underlying malignancy ___ (malignancy)
- Current disease/therapy ___ (therapy)
- Disease in remission ___ (remission)
- Absolute neutrophil count ___ (anc) neutrophils/mcL
    - Neutropenia is 500 neutrophils/mcL or fewer
    - Or 1000 neutrophils/mcL or fewer with a predicted decline to 500/mcL or fewer over the next 48 hours
- Anticipated duration of neutropenia ___ (neutropenia_days) days
- Prior exposure to chemotherapy ___ (prior_chemo)
- CMV serostatus ___ (cmv)
- Intensity of immunosuppressive therapy (IST) ___ (ist)
- Prior herpes simplex virus (HSV) episode ___ (prior_hsv)
- Allergy history ___ (allergy)
    - If an allergy history is present, a careful reassessment of the allergy is recommended
- Overall infection risk ___ (risk)
    - Risk category is based on several factors, including underlying malignancy, whether disease is in remission, duration of neutropenia, prior exposure to chemotherapy, CMV serostatus, and intensity of IST

# Low risk: disease/therapy examples

- Standard chemotherapy regimens for most solid tumors
- Anticipated neutropenia under 7 days

# Low risk: antimicrobial prophylaxis

- Bacterial: none
- Fungal: none
- Viral: none, unless prior HSV episode

# Intermediate risk: disease/therapy examples

- Autologous hematopoietic cell transplant (HCT)
- Lymphoma
    - Heterogenous disease, so treatment modalities and the type of malignancy affect risk level
- Multiple myeloma
    - Heterogenous disease, so treatment modalities and the type of malignancy affect risk level
- Chronic lymphocytic leukemia (CLL)
    - Heterogenous disease, so treatment modalities and the type of malignancy affect risk level
- Purine analog therapy (ie, fludarabine, clofarabine, nelarabine, cladribine)
- Anticipated neutropenia 7 to 10 days
- Chimeric antigen receptor (CAR) T-cell therapy
    - See Immune and Targeted Treatments (INF-A)

# Intermediate risk: antimicrobial prophylaxis

- Bacterial: consider fluoroquinolone prophylaxis during neutropenia
    - If intolerant to fluoroquinolone, consider TMP/SMX or an oral third-generation cephalosporin (category 2B)
- Fungal: consider prophylaxis during neutropenia and for anticipated mucositis (INF-2)
- Consider Pneumocystis jirovecii pneumonia (PJP) prophylaxis (INF-6)
- Viral: during neutropenia and longer depending on risk (INF-3, INF-4, INF-5)

# High risk: disease/therapy examples

- Allogeneic HCT, including cord blood
- Acute leukemia
    - Induction
    - Consolidation/maintenance
- Alemtuzumab therapy
- Moderate to severe graft-versus-host-disease (GVHD)
- Anticipated neutropenia over 10 days

# High risk: antimicrobial prophylaxis

- Bacterial: consider fluoroquinolone prophylaxis during neutropenia
    - If intolerant to fluoroquinolone, consider TMP/SMX or an oral third-generation cephalosporin (category 2B)
- Fungal: consider prophylaxis during neutropenia (INF-2)
- Consider PJP prophylaxis (INF-6)
- Viral: during neutropenia and longer depending on risk (INF-3, INF-4, INF-5)
- Length of prophylaxis depends on immune reconstitution
- Additional prophylaxis may be necessary in patients at high risk
    - For example, consider penicillin and trimethoprim/sulfamethoxazole (TMP/SMX) for allogeneic HCT recipients with chronic GVHD

# Next

- Fungal prophylaxis during neutropenia and for anticipated mucositis, go to INF-2
- PJP prophylaxis, go to INF-6
- Viral prophylaxis, go to INF-3, INF-4, INF-5
- Immune and targeted treatments, go to INF-A
- Antibacterial agent dosing and spectrum, go to FEV-A
