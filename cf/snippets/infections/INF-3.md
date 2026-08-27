+++
id           = "infections/INF-3"
gid          = "infections"
ref          = "INF-3"
page         = 9
title        = "Prevention of HSV and VZV reactivation or disease, by overall infection risk category"
nccn_version = "1.2026"
nccn_date    = "03/11/2026"
generated    = "2026-08-28"
see_also     = ["INF-4", "INF-5", "INF-7", "INF-A", "FEV-C"]

[facets]
disease   = "infections"
timepoint = ["prevention", "supportive"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "diagnosis"
type = "text"
[[variables]]
name = "therapy"
type = "text"
[[variables]]
name = "prior_hsv_episode"
type = "enum"
options = ["yes", "no", "unknown"]
[[variables]]
name = "risk_category"
type = "enum"
options = ["low", "intermediate", "high"]
[[variables]]
name = "cell_therapy_date"
type = "text"
[[variables]]
name = "cd4"
type = "number"
+++

# Source

- NCCN Prevention and Treatment of Cancer-Related Infections v1.2026, INF-3, p9
- Prevention of herpes simplex virus (HSV) and varicella zoster virus (VZV) reactivation or disease
- See Antiviral Agents (FEV-C) for dosing, spectrum, and specific comments/cautions
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- ___ (diagnosis)
- Current or planned therapy: ___ (therapy)
- Prior HSV episode: ___ (prior_hsv_episode)
- Date of autologous HCT, allogeneic HCT, or CAR T-cell therapy: ___ (cell_therapy_date)
- CD4 count, if on alemtuzumab therapy: ___ (cd4)
- Overall infection risk category: ___ (risk_category)
    - Categories of risk are based on several factors, including underlying malignancy, whether disease is in remission, duration of neutropenia, prior exposure to chemotherapy, CMV serostatus, and intensity of IST
    - For infection concerns and recommended prophylaxis for immune-targeted agents, see INF-A

# Low risk

- Disease/therapy examples
    - Standard chemotherapy regimens for solid tumors
- Minimum duration of antiviral prophylaxis
    - No prophylaxis unless prior HSV episode
    - If needed, treat during active therapy including periods of neutropenia
        - In pediatrics, HSV prophylaxis is indicated in children who are seropositive

# Intermediate risk

- Disease/therapy examples
    - Autologous HCT
    - Lymphoma
        - Heterogenous disease, so treatment modalities and the type of malignancy affect risk level
    - Multiple myeloma
        - Heterogenous disease, so treatment modalities and the type of malignancy affect risk level
    - CLL
        - Heterogenous disease, so treatment modalities and the type of malignancy affect risk level
    - Purine analog therapy (eg, fludarabine)
    - CAR T-cell therapy
    - Acute leukemia
- HSV prophylaxis
    - Consider during active therapy and possibly longer depending on degree of immunosuppression
    - In pediatrics, HSV prophylaxis is indicated in children who are seropositive
- VZV prophylaxis
    - Consider for at least 6–12 months after autologous HCT or CAR T-cell therapy
    - In pediatrics, prophylaxis for VZV is not routinely given unless there is a history of recurrent zoster infections or after a first zoster episode while on myelosuppressive therapy, even if seropositive or vaccinated

# High risk

- Disease/therapy examples
    - Proteasome inhibitors
    - Alemtuzumab therapy
    - Allogeneic HCT
    - GVHD requiring significant escalation of immunosuppression
- HSV prophylaxis during active therapy including periods of neutropenia
    - Minimum of 2 months after alemtuzumab and until CD4 ≥200 cells/mcL
    - In pediatrics, HSV prophylaxis is indicated in children who are seropositive
- VZV prophylaxis during active therapy including periods of neutropenia
    - Prophylaxis should be considered for at least 1 year after allogeneic HCT
    - In pediatrics, prophylaxis for VZV is not routinely given unless there is a history of recurrent zoster infections or after a first zoster episode while on myelosuppressive therapy, even if seropositive or vaccinated

# Next

- For CMV prophylaxis, see INF-4
- For HBV, HCV, and HIV prophylaxis, see INF-5
- For general vaccine recommendations, see INF-7
