+++
id           = "cutaneous_melanoma/ME-8"
gid          = "cutaneous_melanoma"
ref          = "ME-8"
page         = 33
title        = "Initial treatment, response assessment, and adjuvant treatment for unresectable or borderline resectable clinical satellite/in-transit stage III melanoma"
nccn_version = "2.2026"
nccn_date    = "04/17/26"
generated    = "2026-08-27"
see_also     = ["ME-7", "ME-8A", "ME-11"]

[facets]
disease   = "cutaneous_melanoma"
stage     = "III"
timepoint = ["primary-treatment", "adjuvant"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "primary_site"
type = "text"
[[variables]]
name = "lesion_type"
type = "enum"
options = ["satellite", "in-transit", "both"]
[[variables]]
name = "distance_from_primary"
type = "text"
[[variables]]
name = "disease_volume"
type = "enum"
options = ["low-volume", "higher-volume"]
[[variables]]
name = "limb_only"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "prior_systemic"
type = "text"
[[variables]]
name = "resectability"
type = "enum"
options = ["unresectable", "borderline resectable"]
+++

# Source

- NCCN Melanoma: Cutaneous v2.2026, ME-8, p33
- Applies to clinical stage III with clinical satellite/in-transit disease that is unresectable or borderline resectable
- Additional footnotes on ME-8A
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, primary melanoma site ___ (primary_site)
- Lymphatic metastases type: ___ (lesion_type)
    - Satellite metastases: dermal and/or subcutaneous metastases occurring within 2 cm from the primary melanoma
    - In-transit metastases: identified between 2 cm from the primary melanoma and the regional nodal basin
    - Distance from primary melanoma ___ (distance_from_primary)
    - The 2-cm cutoff is consistent with AJCC staging definitions, but satellite and in-transit lymphatic metastases are biologically and prognostically similar
    - Metastases may be clinically, radiologically, or pathologically detectable
- Disease volume: ___ (disease_volume)
- Limb-only disease: ___ (limb_only)
- Resectability: ___ (resectability)
- Prior systemic therapy for cutaneous melanoma, as active treatment or adjuvant therapy: ___ (prior_systemic)

# Initial treatment - systemic therapy (preferred)

- Systemic therapy, preferred
    - See Principles of Metastatic or Unresectable Systemic Therapy (MELSYS-1 of 10)
    - For low-volume in-transit disease, the high risk of toxicities associated with certain combination regimens (nivolumab/ipilimumab or nivolumab and relatlimab) may outweigh the benefit
    - If previously treated with systemic therapy, selection of regimen should be informed by response to prior systemic therapies
        - Progression during or shortly after a prior therapy, consider agents of a different class
        - Disease control (CR, PR, or SD) on a prior systemic therapy, no residual toxicity, but progression/relapse >3 months after treatment discontinuation, systemic therapy with the same agent or same class of agents may be considered

# Initial treatment - local therapy options

- Intralesional injection options
    - Preferred regimens
        - T-VEC (category 1)
            - T-VEC was associated with a response rate lasting >=6 months of 16% in highly selected patients with unresectable metastatic melanoma
            - Efficacy was demonstrated in AJCC 7th Edition stage IIIB and IIIC disease, and was more likely to be seen in patients who were treatment naive
            - T-VEC has shown similar efficacy across clinically detected/macroscopic AJCC 8th Edition stage III disease
    - Useful in certain circumstances
        - Interleukin-2 (IL-2) (category 2B)
- Consider RT (category 2B)
    - See Principles of Radiation Therapy (ME-H)
    - Definitive or palliative RT can be considered for unresectable melanoma, depending on the goal of treatment
        - Definitive RT has the intent of durable irradiated tumor control
        - Palliative RT has the intent of relieving symptoms caused by tumor
- Palliation of symptomatic disease
    - Limited excision
    - Local ablation therapy (category 2B)

# Initial treatment - regional therapy options

- Isolated limb infusion/perfusion (ILI/ILP) with melphalan-based regimen
    - Primarily used for patients with limb-only disease with progression on, or contraindications to, standard therapies
    - Should only be done at centers with experience with ILI/ILP

# Response assessment

- Clinical assessment
- Pathologic assessment, as applicable
- Imaging, as applicable, to determine treatment response or progression
    - See Principles of Imaging - Treatment Response Assessment (ME-D 3 of 5)

# Next

- Residual or progressive unresectable disease
- Residual resectable disease, see Initial Treatment for Limited Resectable Disease (ME-7)
- NED after local or regional therapy
    - Consider adjuvant systemic therapy, see Principles of Adjuvant Systemic Therapy (ADJSYS-1 of 2)
        - Selection should be informed by response to prior systemic therapies, if previously treated
        - The choice of adjuvant systemic treatment versus observation should take into consideration the patient's risk of melanoma recurrence and the risk of treatment toxicity, see Adjuvant Systemic Therapy Considerations (ADJSYS-2 of 2)
    - or Observation (ME-11)
- NED after systemic therapy, Observation (ME-11), (SYSCON-1 of 2)
