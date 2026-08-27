+++
id           = "infections/FEV-2"
gid          = "infections"
ref          = "FEV-2"
page         = 30
title        = "Initial risk assessment and site of care for patients with febrile neutropenia"
nccn_version = "1.2026"
nccn_date    = "03/11/2026"
generated    = "2026-08-28"
see_also     = ["FEV-1", "FEV-3", "FEV-5", "FEV-D", "INF-A"]

[facets]
disease   = "infections"
timepoint = "supportive"

[[variables]]
name = "fever_setting"
type = "enum"
options = ["outpatient", "inpatient"]
[[variables]]
name = "comorbidity"
type = "text"
[[variables]]
name = "anc"
type = "number"
[[variables]]
name = "neutropenia_days"
type = "number"
[[variables]]
name = "ecog"
type = "number"
[[variables]]
name = "aminotransferases"
type = "text"
[[variables]]
name = "crcl"
type = "number"
[[variables]]
name = "cancer_status"
type = "text"
[[variables]]
name = "mucositis_grade"
type = "text"
[[variables]]
name = "mascc"
type = "number"
[[variables]]
name = "cisne"
type = "number"
[[variables]]
name = "risk"
type = "enum"
options = ["low", "high"]
[[variables]]
name = "site_of_care"
type = "enum"
options = ["home", "ambulatory-clinic", "hospital"]
+++

# Source

- NCCN Prevention and Treatment of Cancer-Related Infections v1.2026, FEV-2, p30
- Applies to the initial evaluation of a patient with febrile neutropenia
- Risk categorization refers to risk of serious complications, including mortality, in patients with neutropenic fever
- Risk stratification is validated in adults
    - No generalizable, cross-validated, risk-stratified management exists for pediatric patients with febrile neutropenia
- Risk Assessment Resources: FEV-D
- All recommendations category 2A unless otherwise indicated

# Assessment

- Status at time of development of fever ___ (fever_setting)
- Associated acute comorbid illness ___ (comorbidity)
    - Does it independently indicate inpatient treatment or close observation
- Absolute neutrophil count ___ (anc) cells/mcL
- Anticipated duration of severe neutropenia ___ (neutropenia_days) days
- Performance status ECOG ___ (ecog)
- Aminotransferases ___ (aminotransferases) times upper limit of normal (ULN)
- Creatinine clearance (CrCl) ___ (crcl) mL/min
- Cancer status ___ (cancer_status)
- Mucositis grade ___ (mucositis_grade)
- MASCC Risk-Index Score ___ (mascc)
- CISNE score ___ (cisne)
- Allogeneic HCT
- Pneumonia or other complex infections at clinical presentation
- Use of certain immune and/or targeted treatments (INF-A)
- Initial risk assessment ___ (risk)

# Low risk: none of the high-risk factors and most of the following

- Outpatient status at time of development of fever
- No associated acute comorbid illness, independently indicating inpatient treatment or close observation
- Anticipated short duration of severe neutropenia
    - 100 cells/mcL or fewer for fewer than 7 days
- Good performance status (ECOG 0-1)
- No hepatic insufficiency
- No renal insufficiency
- MASCC Risk-Index Score of 21 or higher, or CISNE score of less than 3 (FEV-D)

# High risk: any factor listed below

- MASCC Risk-Index Score of less than 21, or CISNE score of 3 or higher (FEV-D)
- Inpatient status at time of development of fever
- Significant medical comorbidity or clinically unstable
- Allogeneic HCT
- Anticipated prolonged severe neutropenia
    - 100 cells/mcL or fewer and 7 days or longer
- Hepatic insufficiency
    - 5 times upper limit of normal (ULN) for aminotransferases
- Renal insufficiency
    - Creatinine clearance (CrCl) of less than 30 mL/min
- Uncontrolled/progressive cancer
    - Defined as any patients with leukemia not in complete remission, or patients with other cancers and evidence of disease progression after more than 2 courses of chemotherapy
- Pneumonia or other complex infections at clinical presentation
- Use of certain immune and/or targeted treatments (INF-A)
- Mucositis grade 3-4

# Site of care

- Site of care ___ (site_of_care)
- Low risk
    - Home for selected patients at low risk with adequate outpatient infrastructure established
    - or consider ambulatory clinic
    - or hospital
- High risk
    - Hospital

# Next

- Low risk, outpatient therapy for patients at low risk, go to FEV-3 and FEV-4
- High risk, initial inpatient empiric therapy for fever and neutropenia, go to FEV-5
