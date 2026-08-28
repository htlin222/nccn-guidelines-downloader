+++
id           = "ped_hodgkin/PHL-4"
gid          = "ped_hodgkin"
ref          = "PHL-4"
page         = 15
title        = "Primary and additional treatment of stage I-II classical Hodgkin lymphoma with risk factors"
nccn_version = "1.2026"
nccn_date    = "05/13/2026"
generated    = "2026-08-28"
see_also     = ["PHL-2", "PHL-8", "PHL-9"]

[facets]
disease   = "ped_hodgkin"
histology = "hodgkin"
stage     = ["I", "II"]
timepoint = "primary-treatment"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "stage"
type = "text"
[[variables]]
name = "risk_factors"
type = "text"
[[variables]]
name = "regimen"
type = "text"
[[variables]]
name = "response"
type = "enum"
options = ["RER", "SER", "RRL", "SRL", "adequate", "inadequate"]
+++

# Source

- NCCN Pediatric Hodgkin Lymphoma v1.2026, PHL-4, p15, footnotes on PHL-4B
- Applies to classical Hodgkin lymphoma (CHL), stage I-II, with risk factors
- Regimens are based off of studies with pediatric data
- Principles of Systemic Therapy (PHL-E)
- For growth factor recommendations, see Select Principles of Supportive Care (PHL-G)
- Principles of Criteria for Response-Adapted Radiation Therapy (PHL-A)
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- CHL, stage ___ (stage)
- Risk factors present: ___ (risk_factors)
    - See PHL-2 for risk factors as defined by EuroNET-PHL and COG
- Regimen given: ___ (regimen)
- Response: ___ (response)
    - RER = rapid early response; SER = slow early response
    - RRL = rapidly responding lesion; SRL = slow responding lesion
    - LMA = large mediastinal adenopathy

# Preferred primary treatment

- Ongoing clinical trial
- or ABVE-PC x 2 cycles (category 1) (AHOD0031)
    - Not for stage IIBX
- or Bv-AVE-PC x 2 cycles (category 1) (AHOD1331)
    - Stage IIBX only
    - Pneumocystis jiroveci pneumonia (PJP) prophylaxis is recommended for all Bv-containing regimens

# Response assessment

- FDG-PET/CT or FDG-PET/MRI
- Contrast-enhanced diagnostic CT or MRI of original sites of disease, if not included with FDG-PET and treatment approach includes need for assessment of anatomic sites of disease for evaluation of response
- See Principles of Imaging (PHL-C)
- Same assessment applies at end of therapy assessment

# Additional treatment after ABVE-PC (AHOD0031)

- Adequate response (RER)
    - ABVE-PC x 2 cycles
    - ISRT, ISRT can safely replace IFRT (PHL-F)
    - End of therapy assessment
- Inadequate response (SER)
    - ABVE-PC x 2 cycles
    - If < complete response (CR), ISRT to all sites, ISRT can safely replace IFRT (PHL-F)
    - End of therapy assessment

# Additional treatment after Bv-AVE-PC (AHOD1331)

- Adequate response (RRL)
    - Bv-AVE-PC x 3 cycles
    - ISRT to sites of LMA (PHL-F)
    - End of therapy assessment
- Inadequate response (SRL)
    - Bv-AVE-PC x 3 cycles
    - ISRT to sites of LMA and SRL (PHL-F)
    - Boost to sites of inadequate response at end of systemic therapy (EOST)
    - End of therapy assessment

# Other recommended primary treatment (PHL-4A)

- OEPA x 2 cycles (category 1) (EuroNet-PHL-C1)
    - Adequate response
        - COPDAC x 2 cycles, not for stage IIBE
        - or COPDAC x 4 cycles (category 2B), stage IIBE and IIBX only
    - Inadequate response
        - COPDAC x 2 cycles, not for stage IIBE
        - or COPDAC x 4 cycles (category 2B), stage IIBE and IIBX only
- or AEPA x 2 cycles (HLHR13)
    - Stage IIB and IIBX only
    - PJP prophylaxis is recommended for all Bv-containing regimens
    - Adequate response, CAPDAC x 4 cycles
    - Inadequate response, CAPDAC x 4 cycles
- or ABVD
- or Consider additional adult regimens if aged >18 y, see NCCN Guidelines for Hodgkin Lymphoma (Adult)

# Radiation therapy for the other recommended regimens (PHL-4A)

- ISRT to all sites and boost to sites of inadequate response at end of chemotherapy (PHL-F)
- or Residual-node RT (RNRT) to sites of inadequate response (PHL-F)

# Next

- End of therapy assessment, see Follow-up (PHL-8)
- If concern for persistent disease, see Therapy for relapsed or refractory disease (PHL-9)
