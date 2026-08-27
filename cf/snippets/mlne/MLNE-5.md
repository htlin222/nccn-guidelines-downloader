+++
id           = "mlne/MLNE-5"
gid          = "mlne"
ref          = "MLNE-5"
page         = 11
title        = "Treatment and response monitoring of myeloid/lymphoid neoplasms with eosinophilia and FIP1L1::PDGFRA or other PDGFRA rearrangement"
nccn_version = "2.2026"
nccn_date    = "08/05/26"
generated    = "2026-08-27"
see_also     = ["MLNE-4", "MLNE-D"]

[facets]
disease   = "mlne"
histology = ["myeloid", "lymphoid"]
biomarker = "pdgfra"
timepoint = ["primary-treatment", "relapsed-refractory"]

[[variables]]
name = "phase"
type = "enum"
options = ["chronic", "blast"]
[[variables]]
name = "pdgfra_status"
type = "enum"
options = ["fip1l1-pdgfra", "other-pdgfra", "not-detected"]
[[variables]]
name = "eos"
type = "text"
[[variables]]
name = "blast_pct"
type = "number"
[[variables]]
name = "cardiac_signs"
type = "text"
[[variables]]
name = "troponin"
type = "text"
[[variables]]
name = "echo"
type = "text"
[[variables]]
name = "imatinib_dose"
type = "text"
+++

# Source

- NCCN Myeloid/Lymphoid Neoplasms with Eosinophilia and Tyrosine Kinase Gene Fusions v2.2026, MLNE-5, p11
- Applies to myeloid/lymphoid neoplasms with eosinophilia and the FIP1L1::PDGFRA or other PDGFRA rearrangement
- Diagnosis and staging considerations for this group: MLNE-4
- In some cases the diagnostic testing may not reveal the PDGFRA rearrangement; imatinib may be considered for patients with a clinical picture consistent with this diagnostic group
- Response criteria: MLNE-D
- All recommendations category 2A unless stated otherwise

# Assessment

- ___ (phase) phase
- PDGFRA rearrangement ___ (pdgfra_status)
- CBC and eosinophilia ___ (eos)
- Blasts in the BM and/or PB ___ (blast_pct)
- Symptoms/signs of cardiac involvement ___ (cardiac_signs)
- Troponin ___ (troponin)
- ECHO findings ___ (echo)
- Current imatinib dose ___ (imatinib_dose)

# Blast phase definition

- 20% or more blasts in the BM and/or PB
    - May present as AML, ALL, or mixed phenotype acute leukemias
- And/or extramedullary myeloid sarcoma
- And/or T-cell or B-cell lymphoblastic lymphoma
- And/or myeloid/T-cell or B-cell lymphoid mixed phenotype acute leukemias
- May also present as an EMD with an MPN-like picture in blood and marrow
- How blast phase arises
    - FIP1L1::PDGFRA has been identified in patients with AML or ALL with eosinophilia at diagnosis, or unmasked after induction chemotherapy
    - May also develop as progression from chronic phase disease due to cytogenetic/molecular clonal evolution, including mutations associated with development of resistance to imatinib (PDGFRA T674I and D842V)

# Chronic phase treatment

- Imatinib 100 mg daily
    - Give concurrent corticosteroids for 7–10 days in patients with symptoms/signs of cardiac involvement, including troponinemia and/or abnormal ECHO findings
    - Consultation with a cardiologist is recommended
- Monitor CBC and eosinophilia
- Imaging to document target organ response, including EMD, if clinically indicated
- At 3 months, PB or BM FISH
- RT-PCR (if available) to document molecular responses

# Blast phase treatment

- Imatinib 100–400 mg daily
    - Give concurrent corticosteroids for 7–10 days in patients with symptoms/signs of cardiac involvement, including troponinemia and/or abnormal ECHO findings
    - Consultation with a cardiologist is recommended
- In patients with acute leukemia where FIP1L1::PDGFRA is discovered after induction chemotherapy
    - Imatinib can be added to AML-type induction chemotherapy, see NCCN Guidelines for Acute Myeloid Leukemia
    - Imatinib can be added to ALL-type induction chemotherapy, see NCCN Guidelines for Acute Lymphoblastic Leukemia
    - Or imatinib monotherapy could be considered

# Response achieved

- Complete hematologic and cytogenetic response (FISH)
- Molecular response, if RT-PCR is available
- Continue imatinib 100 mg daily
    - Complete hematologic response (CHR) by 1 month and complete cytogenetic response (CCyR; FISH) by 3 months is achieved in a vast majority of patients
    - In patients with ongoing CHR and CCyR (FISH), maintenance doses of imatinib as low as 100–200 mg weekly have been used with sustained responses
    - Continue to monitor hematologic and cytogenetic response (by FISH) every 3–6 months
    - If available, molecular response by RT-PCR at these same time points

# Loss of response

- Trigger: loss of complete hematologic and/or cytogenetic (FISH) and/or molecular (RT-PCR) response
- Evaluate adherence
- Evaluate for cytogenetic/molecular clonal evolution, especially for mutations associated with development of resistance to imatinib
    - PDGFRA T674I and D842V mutations are resistant to imatinib
- Consider hematopoietic cell transplant (HCT) evaluation
- If resistance mutation found, consider TKI with potential activity or refer for clinical trial
    - Avapritinib is approved for indolent SM (ISM), advanced SM (aggressive SM, SM with an associated hematologic neoplasm, and mast cell leukemia), and for unresectable or metastatic gastrointestinal stromal tumors harboring a PDGFRA exon 18 mutation, including D842V mutations
    - This suggests a possible role for avapritinib in FIP1L1::PDGFRA-positive myeloid/lymphoid neoplasms with eosinophilia harboring a PDGFRA D842V mutation resistant to imatinib
    - If this mutation is identified, a clinical trial of avapritinib is preferred (if available), rather than off-label use

# Next

- Response achieved, continue imatinib and monitor; response criteria at MLNE-D
- Loss of response, go to the resistance and clonal evolution evaluation on this page
- Blast phase presenting as acute leukemia, see NCCN Guidelines for Acute Myeloid Leukemia or Acute Lymphoblastic Leukemia
