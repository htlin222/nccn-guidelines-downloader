+++
id           = "cellular_tox/ENGAGE-6"
gid          = "cellular_tox"
ref          = "ENGAGE-6"
page         = 23
title        = "Other toxicities related to T-cell-engaging bispecific antibody therapy, by cancer type and agent"
nccn_version = "2.2026"
nccn_date    = "11/11/2025"
generated    = "2026-08-28"
see_also     = ["ENGAGE-1", "ENGAGE-3", "ENGAGE-5"]

[facets]
disease   = "cellular_tox"
timepoint = "supportive"

[[variables]]
name = "cancer_type"
type = "text"
[[variables]]
name = "agent"
type = "text"
[[variables]]
name = "current_toxicity"
type = "text"
[[variables]]
name = "anc"
type = "number"
[[variables]]
name = "cd4"
type = "number"
[[variables]]
name = "igg"
type = "number"
+++

# Source

- NCCN Management of Lymphocyte Engager-Related Toxicities v2.2026, ENGAGE-6, p23
- Applies to patients on lymphocyte engager therapy (eg, T-cell-engaging bispecific antibodies)
- Covers infection considerations and common unique toxicities, by cancer type and approved agent
- All recommendations category 2A unless otherwise indicated

# Assessment

- Cancer type ___ (cancer_type)
- Lymphocyte engager in use ___ (agent)
- Toxicity present now ___ (current_toxicity)
- ANC ___ (anc) x 10^9/L
- CD4 count ___ (cd4) x 10^9/L
- IgG ___ (igg) mg/dL

# General principles

- Risks associated with each agent vary significantly
    - Refer to the individual FDA-approved prescribing information
    - Refer to the appropriate clinical trial protocols for guidance on toxicity management after initiation of lymphocyte engagers
- See disease-specific NCCN Guidelines for additional guidance on the management of common toxicities unique to each agent
- Low-grade toxicities are typically managed by dose interruption until resolution of the toxicity, followed by re-challenge at the same or lower dose
- Infection considerations follow the NCCN Guidelines for Prevention and Treatment of Cancer-Related Infections

# Multiple myeloma

- Approved agents
    - Elranatamab-bcmm
    - Talquetamab-tgvs
    - Teclistamab-cqyv
    - Linvoseltamab-gcpt
- Infection considerations
    - See NCCN Guidelines for Multiple Myeloma
- Common unique toxicities
    - Hypogammaglobulinemia
    - Specific to talquetamab-tgvs
        - Dysgeusia
        - Skin changes
        - Nail changes
    - Specific to linvoseltamab-gcpt
        - Musculoskeletal pain
        - Fatigue
        - Nausea
        - Headache
        - Dyspnea

# B-cell acute lymphoblastic leukemia

- Approved agent
    - Blinatumomab
- Infection considerations
    - See NCCN Guidelines for Acute Lymphoblastic Leukemia
- Common unique toxicities
    - See blinatumomab prescribing information, which includes
        - Hypogammaglobulinemia
        - Tumor lysis syndrome
        - Liver enzyme elevations
        - Others

# B-cell lymphomas

- Approved agents
    - Epcoritamab-bysp
    - Glofitamab-gxbm
    - Mosunetuzumab-axgb
- Infection considerations
    - Neutropenia
        - ANC <0.5 x 10^9/L or clinically indicated: provide fluoroquinolone and fluconazole prophylaxis
        - ANC <1 x 10^9/L or clinically indicated: provide support with G-CSF
    - PJP prophylaxis
        - Recommended until the end of therapy or until CD4 >0.2 x 10^9/L, whichever is longer
    - VZV prophylaxis
        - Recommended until the end of therapy or until CD4 >0.2 x 10^9/L, whichever is longer
    - Hypogammaglobulinemia
        - Monitor Ig levels regularly
        - Consider Ig replacement for individuals with recurrent, persistent, or severe infection and IgG <400 mg/dL
- Common unique toxicities
    - Hypogammaglobulinemia
- Reference for this row: Crombie JL, et al. Blood. 2024;143:1565-1575

# Small cell lung cancer

- Approved agent
    - Tarlatamab-dlle
- Infection considerations
    - Neutropenia
        - ANC <0.5 x 10^9/L or clinically indicated: provide fluoroquinolone and fluconazole prophylaxis
        - ANC <1 x 10^9/L or clinically indicated: provide support with G-CSF
- Common unique toxicities
    - Dysgeusia

# Uveal melanoma

- Approved agent
    - Tebentafusp-tebn
- Infection considerations
    - N/A
- Common unique toxicities
    - Rash
    - Elevated LFTs
