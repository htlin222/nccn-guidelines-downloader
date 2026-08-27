+++
id           = "growthfactors/MGF-1"
gid          = "growthfactors"
ref          = "MGF-1"
page         = 7
title        = "Febrile neutropenia risk assessment and prophylactic G-CSF before the first chemotherapy cycle"
nccn_version = "3.2026"
nccn_date    = "12/05/25"
generated    = "2026-08-28"
see_also     = ["MGF-2", "MGF-3", "MGF-A", "MGF-B", "MGF-C"]

[facets]
disease   = "growthfactors"
timepoint = "supportive"
intent    = ["curative", "palliative"]

[[variables]]
name = "disease"
type = "text"
[[variables]]
name = "regimen"
type = "text"
[[variables]]
name = "dose_intensity"
type = "enum"
options = ["high-dose", "dose-dense", "standard-dose"]
[[variables]]
name = "patient_risk_factors"
type = "text"
[[variables]]
name = "treatment_intent"
type = "enum"
options = ["curative", "palliative"]
[[variables]]
name = "fn_risk"
type = "enum"
options = ["high", "intermediate", "low"]
+++

# Source

- NCCN Hematopoietic Growth Factors v3.2026, MGF-1, p7
- Evaluation prior to first chemotherapy cycle
- Applies to evaluation of risk for febrile neutropenia following chemotherapy in adult patients with solid tumors and non-myeloid malignancies
- These guidelines were formulated in reference to adult patients
- Not this page for the following, use the disease-specific guidelines instead
    - Myelodysplastic syndromes (MDS), see the NCCN Guidelines for Myelodysplastic Syndromes
    - Acute myeloid leukemia (AML), see the NCCN Guidelines for Acute Myeloid Leukemia
    - Chronic myeloid leukemia (CML), see the NCCN Guidelines for Chronic Myeloid Leukemia
    - Chronic lymphocytic leukemia/small lymphocytic lymphoma (CLL/SLL), see the NCCN Guidelines for Chronic Lymphocytic Leukemia/Small Lymphocytic Lymphoma
    - Other cancer types, refer to the appropriate Guidelines
- Patients receiving cytotoxic chemotherapy as part of a clinical trial may be evaluated for prophylaxis with myeloid growth factors (MGFs) as clinically indicated, unless precluded by trial specifications
- All recommendations category 2A unless otherwise indicated

# Assessment

- Disease ___ (disease)
- Chemotherapy regimen ___ (regimen)
- Regimen intensity ___ (dose_intensity)
- Patient risk factors ___ (patient_risk_factors)
- Treatment intent ___ (treatment_intent)
- Overall febrile neutropenia risk ___ (fn_risk)
- First chemotherapy cycle not yet given

# Febrile neutropenia definition

- Single temperature ≥38.3 °C orally, or ≥38.0 °C over 1 hour
- And neutropenia
    - <500 neutrophils/mcL, or
    - <1000 neutrophils/mcL and a predicted decline to ≤500 neutrophils/mcL over the next 48 hours
- See NCCN Guidelines for Prevention and Treatment of Cancer-Related Infections

# Risk assessment for febrile neutropenia

- Many factors need to be evaluated to determine the risk categorization
- Disease
- Chemotherapy regimen, type of regimen (MGF-A)
    - High-dose therapy
    - Dose-dense therapy
        - In general, dose-dense regimens require MGF support to maintain dose intensity and schedule
    - Standard-dose therapy
- Patient risk factors (MGF-2)
- Treatment intent (curative vs. palliative)

# Prophylactic use of G-CSFs for febrile neutropenia

- Setting is curative/adjuvant or palliative
    - Toxicity Risks with MGFs (MGF-C)
- Before any prophylactic G-CSF
    - G-CSFs for Prophylaxis of Febrile Neutropenia and Maintenance of Scheduled Dose Delivery (MGF-B)
    - Antibody-drug conjugates (ADCs) have a significantly longer half-life than the naked chemotherapy drug, and the cycle day for administration of MGFs to optimize safety and efficacy has not been systematically determined
    - MGFs should not be withheld for neutropenia/cytopenia associated with bispecific T-cell engagers and monoclonal antibodies, regardless of timing during the cycle of administration
- Overall risk high (>20%)
    - Granulocyte colony-stimulating factors (G-CSFs) (category 1)
- Overall risk intermediate (10%–20%)
    - Consider G-CSFs based on patient risk factors
- Overall risk low (<10%)
    - G-CSFs are not routinely recommended, but may be considered for patients with risk factors
    - G-CSFs may be considered for patients receiving low-risk regimens who have ≥2 patient-related risk factors (MGF-2)
    - Use of G-CSF in this setting is based on clinical judgment

# Next

- High risk, G-CSFs given, go to evaluation prior to second and subsequent chemotherapy cycles (MGF-3)
- Intermediate risk, go to evaluation of patient risk factors for prophylactic use (MGF-2)
- Low risk, go to evaluation of patient risk factors for prophylactic use (MGF-2)
