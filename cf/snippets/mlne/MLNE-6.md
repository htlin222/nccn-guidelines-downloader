+++
id           = "mlne/MLNE-6"
gid          = "mlne"
ref          = "MLNE-6"
page         = 12
title        = "Treatment and monitoring of myeloid/lymphoid neoplasms with eosinophilia and PDGFRB rearrangement"
nccn_version = "2.2026"
nccn_date    = "08/05/26"
generated    = "2026-08-27"
see_also     = ["MLNE-4", "MLNE-D"]

[facets]
disease   = "mlne"
histology = ["myeloid", "lymphoid"]
timepoint = ["primary-treatment", "induction", "surveillance", "relapsed-refractory"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "phase"
type = "enum"
options = ["chronic phase", "blast phase"]
[[variables]]
name = "eos"
type = "text"
[[variables]]
name = "blast_pct"
type = "number"
[[variables]]
name = "cardiac"
type = "text"
[[variables]]
name = "imatinib_dose"
type = "number"
[[variables]]
name = "response"
type = "text"
+++

# Source

- NCCN Myeloid/Lymphoid Neoplasms with Eosinophilia and Tyrosine Kinase Gene Fusions v2.2026, MLNE-6, p12
- Applies to myeloid/lymphoid neoplasms with eosinophilia and PDGFRB rearrangement
- Eosinophilia is not always present
- Diagnosis and staging considerations: MLNE-4
- In some cases the diagnostic testing may not reveal the PDGFRB rearrangement
    - Imatinib may be considered for patients with a clinical picture consistent with this diagnostic group
- Response criteria: MLNE-D
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Phase ___ (phase)
- Eosinophil count ___ (eos)
- Blasts in BM and/or PB ___ (blast_pct) %
- Cardiac involvement: symptoms/signs including troponinemia and/or abnormal ECHO findings ___ (cardiac)
- Current response status ___ (response)

# Blast phase definition

- Blast phase is any of the following
    - Blasts in the BM and/or PB at or above 20%
        - May present as AML, ALL, or mixed phenotype acute leukemias
    - Extramedullary myeloid sarcoma
    - T-cell or B-cell lymphoblastic lymphoma
    - Myeloid/T-cell or B-cell lymphoid mixed phenotype acute leukemias
- Blast phase may also present as an EMD with an "MPN-like" picture in blood and marrow

# Chronic phase treatment

- Imatinib 100–400 mg daily, actual dose ___ (imatinib_dose) mg daily
    - 400 mg daily generally used as induction dose
    - Concurrent administration of corticosteroids for 7–10 days in patients with symptoms/signs of cardiac involvement including troponinemia and/or abnormal ECHO findings
    - Consultation with a cardiologist is recommended
- Monitor CBC and eosinophilia
- Imaging to document target organ response, including EMD, if clinically indicated
- At 3 months, PB or BM standard cytogenetics and/or FISH
- RT-PCR (if available) to document molecular responses

# Blast phase treatment

- Imatinib 100–400 mg daily
    - 400 mg daily generally used as induction dose
    - Concurrent administration of corticosteroids for 7–10 days in patients with symptoms/signs of cardiac involvement including troponinemia and/or abnormal ECHO findings
    - Consultation with cardiologist is recommended
- In some patients with blast phase disease, PDGFRB rearrangement may only be identified after induction chemotherapy
    - Imatinib can be added to AML-type induction chemotherapy, see NCCN Guidelines for Acute Myeloid Leukemia
    - Imatinib can be added to ALL-type induction chemotherapy, see NCCN Guidelines for Acute Lymphoblastic Leukemia
    - Or imatinib monotherapy could be considered

# On complete response

- Complete hematologic and cytogenetic response by standard cytogenetics and/or FISH
- Molecular response, if RT-PCR is available
- Continue imatinib 100–400 mg daily
    - CHR by 1 month and CCyR by standard cytogenetics and/or FISH by 3 months is achieved in a vast majority of patients
    - Continue to monitor hematologic and cytogenetic response by FISH every 3–6 months
    - Monitor molecular response by RT-PCR every 3–6 months, if available
    - Reduction of imatinib to 100 mg daily can be considered after achievement of CHR and complete cytogenetic/FISH response

# On loss of response

- Loss of complete hematologic and/or FISH and/or molecular (RT-PCR) response
- Evaluate adherence
- Evaluate for cytogenetic/molecular clonal evolution, including mutations in PDGFRB
- If resistance mutation found, consider TKI with potential activity or refer for clinical trial

# Next

- Complete hematologic and cytogenetic response, and molecular response if RT-PCR available, continue imatinib 100–400 mg daily
- Loss of complete hematologic and/or FISH and/or molecular response, evaluate adherence and clonal evolution including PDGFRB mutations
- Resistance mutation found, consider TKI with potential activity or refer for clinical trial
