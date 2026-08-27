+++
id           = "hodgkins/HODG-14"
gid          = "hodgkins"
ref          = "HODG-14"
page         = 32
title        = "Second-line therapy and response-adapted management of biopsy-proven CHL relapse after 3 months or more in a candidate for HDT/ASCR"
nccn_version = "2.2026"
nccn_date    = "07/01/26"
generated    = "2026-08-27"
see_also     = ["HODG-12", "HODG-13", "HODG-15"]

[facets]
disease   = "hodgkins"
histology = "hodgkin"
stage     = "recurrent"
timepoint = ["relapsed-refractory", "transplant", "maintenance"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "relapse_interval"
type = "text"
[[variables]]
name = "biopsy_site"
type = "text"
[[variables]]
name = "prior_rt"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "prior_bv"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "second_line_regimen"
type = "text"
[[variables]]
name = "deauville"
type = "enum"
options = ["1-3", "4", "5"]
+++

# Source

- NCCN Hodgkin Lymphoma (Age >=18 years) v2.2026, HODG-14, p32
- Applies to classic Hodgkin lymphoma (CHL) with biopsy-proven relapse after 3 months or more, in a candidate for HDT/ASCR
- There are no data to support a superior outcome with any of the treatment modalities; individualized treatment is recommended
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, classic Hodgkin lymphoma
- Relapse biopsy-proven, site ___ (biopsy_site)
- Interval from completion of prior therapy to relapse ___ (relapse_interval), 3 months or more
- Candidate for HDT/ASCR
- Prior radiation therapy ___ (prior_rt)
- Prior BV exposure ___ (prior_bv)

# Second-line therapy

- Second-line systemic therapy, CPI-based therapy preferred
    - Regimen given ___ (second_line_regimen)
- Restage with FDG-PET/CT
    - Principles of FDG-PET/CT (HODG-A)
- Deauville score ___ (deauville)
    - FDG-PET 5-Point Scale (Deauville Criteria) (HODG-A, 2 of 2)

# Additional therapy by Deauville score

- Deauville 1-3
    - HDT/ASCR with or without ISRT
        - Principles of Radiation Therapy (HODG-C)
        - Strongly consider RT for selected sites that have not been previously irradiated
        - In patients without prior history of RT, TLI may be an appropriate component of HDT
        - Timing of RT may vary
    - Useful in certain circumstances: ISRT alone, for localized relapse and limited prior treatment only
        - Only for stage IA-IIA disease treated with abbreviated chemotherapy, 3-4 cycles, without prior RT
        - Only if relapse is at initial sites of disease alone
        - Principles of Radiation Therapy (HODG-C)
- Deauville 4
    - HDT/ASCR with or without ISRT, as above
    - Or RT, or subsequent systemic therapy with or without RT
        - Principles of Radiation Therapy (HODG-C)
        - Principles of Systemic Therapy for Relapsed or Refractory Disease: CHL (HODG-B, 5 of 8)
        - Subsequent systemic therapy options include second-line therapy options that were not previously used
        - Timing of RT may vary
- Deauville 5
    - RT, or subsequent systemic therapy with or without RT
        - Principles of Radiation Therapy (HODG-C)
        - Principles of Systemic Therapy for Relapsed or Refractory Disease: CHL (HODG-B, 5 of 8)
        - Subsequent systemic therapy options include second-line therapy options that were not previously used
        - Timing of RT may vary
    - If response, consider HDT/ASCR

# Maintenance therapy

- After HDT/ASCR, Deauville 1-3 or Deauville 4: observe, or consider BV maintenance
- After HDT/ASCR reached by way of Deauville 5 salvage: observe, or consider BV maintenance
- After ISRT alone in certain circumstances: observe
- BV maintenance is only for patients at high risk of relapse and with no prior BV exposure
    - High risk means 2 or more of the following risk factors
        - Remission duration <1 year
        - Extranodal involvement
        - FDG-PET-positive response at time of transplant
        - B symptoms
        - More than 1 second-line or subsequent therapy regimen
    - The role of maintenance BV has not been well-defined in patients who received BV prior to maintenance therapy
    - Utilize with caution in those with neuropathy
    - PJP prophylaxis is recommended for all BV containing regimens

# Next

- Treatment completed, go to follow-up (HODG-12)
