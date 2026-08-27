+++
id           = "infections/INF-4"
gid          = "infections"
ref          = "INF-4"
page         = 10
title        = "Prevention of CMV reactivation or disease in patients at high risk"
nccn_version = "1.2026"
nccn_date    = "03/11/2026"
generated    = "2026-08-28"
see_also     = ["INF-3", "INF-5", "INF-A", "FEV-C"]

[facets]
disease   = "infections"
timepoint = ["prevention", "transplant", "supportive"]

[[variables]]
name = "disease_therapy"
type = "text"
[[variables]]
name = "day_post_hct"
type = "number"
[[variables]]
name = "cmv_igg"
type = "enum"
options = ["seropositive", "seronegative", "unknown"]
[[variables]]
name = "gvhd"
type = "text"
[[variables]]
name = "alemtuzumab_last_dose"
type = "text"
[[variables]]
name = "cmv_pcr"
type = "text"
+++

# Source

- NCCN Prevention and Treatment of Cancer-Related Infections v1.2026, INF-4, p10
- Applies to overall infection risk in patients with cancer who are at high risk for CMV
- Categories of risk are based on several factors, including underlying malignancy, whether disease is in remission, duration of neutropenia, prior exposure to chemotherapy, CMV serostatus, and intensity of IST
- For infection concerns and recommended prophylaxis for immune-targeted agents, see INF-A
- All recommendations category 2A unless stated otherwise

# Assessment

- ___ (disease_therapy)
- Allogeneic HCT recipient, day ___ (day_post_hct) post-HCT
- CMV IgG serostatus ___ (cmv_igg)
- GVHD requiring therapy ___ (gvhd)
- Alemtuzumab, last dose ___ (alemtuzumab_last_dose)
- Most recent quantitative CMV viral load by PCR ___ (cmv_pcr)

# High risk for CMV

- Allogeneic HCT recipients
    - Higher risk transplant subgroups may exist and require different management strategies
- CMV IgG seropositive cases
- GVHD requiring therapy
- Alemtuzumab

# Surveillance period

- Weekly quantitative CMV viral load by polymerase chain reaction (PCR) testing for up to 12 months post-HCT
- For a minimum of 2 months after alemtuzumab
- CMV surveillance consists of weekly monitoring by PCR
    - Thresholds for treatment vary at individual sites

# For prophylaxis

- Consider letermovir as primary prophylaxis for up to day 100 to 200 post-HCT in allogeneic HCT recipients who are CMV seropositive
    - Some centers consider the use of letermovir through day 100 post-HCT and continue CMV surveillance for patients at high risk for CMV reactivation
    - In certain circumstances, up to day 200 can be considered
    - Letermovir lacks HSV and VZV coverage, and HSV/VZV prophylaxis should be continued
    - See Antiviral Agents (FEV-C) for dosing, spectrum, and specific comments/cautions

# For preemption

- Preemptive therapy is the administration of antiviral agents to patients who are asymptomatic with laboratory markers of viremia, in order to prevent CMV disease in patients who are at high risk
- Clinically significant CMV reactivation detected
    - Consider testing for drug resistance if clinically significant breakthrough infection is detected
- Valganciclovir (PO) or Ganciclovir (IV) or Foscarnet (IV)
    - Typically therapy is initiated with oral valganciclovir unless there are absorption or toxicity issues
    - Some centers prefer IV ganciclovir over PO valganciclovir
    - Choice of agent may depend on institutional preference and/or concern for myelosuppression and nephrotoxicity
    - See Antiviral Agents (FEV-C) for dosing, spectrum, and specific comments/cautions
- Duration of antiviral therapy is for at least 2 weeks and until CMV is no longer detected
- For refractory or resistant infections, an infectious disease (ID) consultation is recommended

# Next

- Clinically significant CMV reactivation detected, start preemptive therapy above
- Refractory or resistant infection, obtain infectious disease consultation
- Antiviral agent dosing, spectrum, and specific comments/cautions, see FEV-C
- Prophylaxis for immune-targeted agents, see INF-A
