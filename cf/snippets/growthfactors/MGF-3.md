+++
id           = "growthfactors/MGF-3"
gid          = "growthfactors"
ref          = "MGF-3"
page         = 9
title        = "Secondary prophylaxis with MGFs, evaluated prior to second and subsequent chemotherapy cycles"
nccn_version = "3.2026"
nccn_date    = "12/05/25"
generated    = "2026-08-28"
see_also     = ["MGF-1", "MGF-B"]

[facets]
disease   = "growthfactors"
timepoint = "supportive"

[[variables]]
name = "cycle_number"
type = "number"
[[variables]]
name = "regimen"
type = "text"
[[variables]]
name = "temp_max"
type = "number"
[[variables]]
name = "anc_nadir"
type = "number"
[[variables]]
name = "prior_gcsf"
type = "enum"
options = ["yes", "no"]
+++

# Source

- NCCN Hematopoietic Growth Factors v3.2026, MGF-3, p9
- Evaluation prior to second and subsequent chemotherapy cycles
- Applies to the secondary prophylaxis decision, after the first cycle has been given
- All recommendations are category 2A unless otherwise indicated

# Assessment

- Evaluating prior to cycle ___ (cycle_number)
- Chemotherapy regimen ___ (regimen)
- Highest single temperature since the previous cycle ___ (temp_max) degrees C
- Neutrophil nadir since the previous cycle ___ (anc_nadir) neutrophils/mcL
- Prior use of G-CSFs ___ (prior_gcsf)

# Event since the previous cycle

- Febrile neutropenia
    - Single temperature, either
        - 38.3 degrees C or higher orally
        - or 38.0 degrees C or higher over 1 hour
    - And neutropenia, either
        - fewer than 500 neutrophils/mcL
        - or fewer than 1000 neutrophils/mcL with a predicted decline to 500 neutrophils/mcL or fewer over the next 48 hours
    - See NCCN Guidelines for Prevention and Treatment of Cancer-Related Infections
- Dose-limiting neutropenic event
    - Could be a nadir count, or a day of treatment count, that could otherwise impact the planned dose of chemotherapy

# Secondary prophylaxis, if febrile neutropenia or a dose-limiting neutropenic event occurred

- Prior use of G-CSFs
    - Consider chemotherapy dose reduction
    - Or consider a change in treatment regimen
- No prior use of G-CSFs
    - Consider G-CSFs
    - Risk Assessment for Febrile Neutropenia, MGF-1
- Applies to every G-CSF decision on this page
    - G-CSFs for Prophylaxis of Febrile Neutropenia and Maintenance of Scheduled Dose Delivery (MGF-B)
    - ADCs have a significantly longer half-life than the naked chemotherapy drug
    - The cycle day for administration of MGFs to optimize safety and efficacy has not been systematically determined
    - MGFs should not be withheld for neutropenia or cytopenia associated with bispecific T-cell engagers and monoclonal antibodies, regardless of timing during the cycle of administration

# Next

- Febrile neutropenia or dose-limiting neutropenic event, go to secondary prophylaxis above
- No prior use of G-CSFs and considering G-CSFs, go to MGF-1
- No febrile neutropenia and no dose-limiting neutropenic event, repeat assessment after each subsequent cycle
