+++
id           = "hodgkins/HODG-13"
gid          = "hodgkins"
ref          = "HODG-13"
page         = 31
title        = "Primary refractory CHL or relapse within 3 months, in a candidate for HDT/ASCR"
nccn_version = "2.2026"
nccn_date    = "07/01/26"
generated    = "2026-08-27"
see_also     = ["HODG-12", "HODG-A", "HODG-B", "HODG-C"]

[facets]
disease   = "hodgkins"
histology = "hodgkin"
stage     = "refractory"
timepoint = ["relapsed-refractory", "transplant", "maintenance"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "disease_status"
type = "enum"
options = ["primary refractory", "relapse within 3 months"]
[[variables]]
name = "prior_cpi"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "prior_bv"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "prior_rt_sites"
type = "text"
[[variables]]
name = "deauville"
type = "enum"
options = ["1-3", "4", "5"]
[[variables]]
name = "risk_factors"
type = "text"
+++

# Source

- NCCN Hodgkin Lymphoma (Age 18 years and older) v2.2026, HODG-13, p31
- Applies to biopsy-proven primary refractory classic Hodgkin lymphoma, or relapse within 3 months
    - Primary refractory refers to inability to achieve CR following front-line therapy
- Applies only to a candidate for high-dose therapy and autologous stem cell rescue (HDT/ASCR)
- FDG-PET/CT performed per Principles of FDG-PET/CT (HODG-A)
- Deauville score read on the FDG-PET 5-Point Scale (Deauville Criteria) (HODG-A 2 of 2)
- RT per Principles of Radiation Therapy (HODG-C)
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Classic Hodgkin lymphoma, ___ (disease_status)
- Relapse or refractory status is biopsy-proven
- Candidate for HDT/ASCR
- Prior CPI exposure ___ (prior_cpi)
- Prior BV exposure ___ (prior_bv)
- Sites previously irradiated ___ (prior_rt_sites)

# Initial approach

- Clinical trial, if available
- Refer to or consult a center with expertise

# Second-line therapy

- Second-line systemic therapy
    - Per Principles of Systemic Therapy for Relapsed or Refractory Disease: CHL (HODG-B 5 of 8)
    - CPI-based therapy preferred if no prior CPI exposure
- Timing of RT may vary
- Then restage with FDG-PET/CT (HODG-A)
    - Deauville score ___ (deauville)

# Additional therapy - Deauville 1-3

- HDT/ASCR with or without RT (category 1)
    - RT per Principles of Radiation Therapy (HODG-C)
    - Strongly consider RT for selected sites that have not been previously irradiated
    - In patients without prior history of RT, total lymphoid irradiation (TLI) may be an appropriate component of HDT
    - Timing of RT may vary
- Then Maintenance therapy

# Additional therapy - Deauville 4

- HDT/ASCR with or without RT
    - RT per Principles of Radiation Therapy (HODG-C)
    - Timing of RT may vary
- Then Maintenance therapy

# Additional therapy - Deauville 5

- RT (HODG-C)
- Or subsequent systemic therapy, with or without RT
    - Subsequent systemic therapy options include second-line therapy options that were not previously used (HODG-B 5 of 8)
    - RT per Principles of Radiation Therapy (HODG-C)
    - Timing of RT may vary
- If response, consider HDT/ASCR
- Then Maintenance therapy for patients who underwent HDT/ASCR

# Maintenance therapy

- Observe
- Or consider BV maintenance for patients with high risk of relapse and no prior BV exposure
    - High risk is 2 or more of the following risk factors: ___ (risk_factors)
        - Remission duration less than 1 year
        - Extranodal involvement
        - FDG-PET-positive response at time of transplant
        - B symptoms
        - More than 1 second-line or subsequent therapy regimen
        - AETHERA Trial: Moskowitz CH, et al. Blood 2018;132:2639-2642
    - Utilize with caution in those with neuropathy
    - PJP prophylaxis is recommended for all BV containing regimens
    - The role of maintenance BV has not been well-defined in patients who received BV prior to maintenance therapy

# Next

- After HDT/ASCR for Deauville 1-3 or Deauville 4, go to Maintenance therapy, then Follow-up (HODG-12)
- Deauville 5 with response to RT or subsequent systemic therapy, consider HDT/ASCR
- After maintenance therapy or observation, go to Follow-up (HODG-12)
