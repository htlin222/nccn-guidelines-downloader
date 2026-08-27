+++
id           = "cns/PCNS-1"
gid          = "cns"
ref          = "PCNS-1"
page         = 50
title        = "Diagnosis by tissue evaluation when brain MRI suggests primary CNS lymphoma"
nccn_version = "2.2026"
nccn_date    = "06/10/26"
generated    = "2026-08-27"
see_also     = ["PCNS-2", "BRAIN-A"]

[facets]
disease   = "cns"
timepoint = ["diagnosis", "workup"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "mri_findings"
type = "text"
[[variables]]
name = "steroid_status"
type = "text"
[[variables]]
name = "ocular_exam"
type = "text"
[[variables]]
name = "hiv_status"
type = "enum"
options = ["positive", "negative", "unknown"]
[[variables]]
name = "transplant_recipient"
type = "enum"
options = ["yes", "no"]
+++

# Source

- NCCN Central Nervous System Cancers v2.2026, PCNS-1, p50
- Applies to a brain MRI suggestive of primary central nervous system (CNS) lymphoma
- Includes primary CNS lymphoma of the brain, spine, CSF, and leptomeninges
- Brain MRI per Principles of Brain and Spine Tumor Imaging (BRAIN-A)
- For lymphoma with primary tumor outside the CNS, or involving only the eye, see NCCN Guidelines for B-Cell Lymphomas
- All recommendations category 2A unless stated otherwise

# Assessment

- ___ (age) yo
- Brain MRI: ___ (mri_findings)
- Ocular symptoms and/or ocular exam: ___ (ocular_exam)
- Steroids given so far: ___ (steroid_status)
- HIV status: ___ (hiv_status)
- Transplant recipient: ___ (transplant_recipient)

# Diagnosis by tissue evaluation

- Hold initiation of steroids, if possible, prior to diagnostic procedure
- Biopsy of brain lesion with least invasive approach
    - Brain biopsy is recommended as the primary procedure to obtain diagnosis
    - If stereotactic biopsy is not available, refer to a specialized center
- Vitreous fluid biopsy as a diagnostic option, if ocular symptoms and/or abnormal ocular exam
- Consider CSF sampling, if safe, and if it will not delay the diagnostic process or treatment
    - 15-20 mL spinal fluid to increase diagnostic yield
    - Use CSF analysis as an adjunct to diagnosis when brain biopsy is not feasible
    - CSF analysis should include flow cytometry
    - CSF analysis should include cytology
    - CSF analysis should include cell count
    - CSF analysis should include polymerase chain reaction (PCR) or next-generation sequencing (NGS) assays of MYD88
    - Possibly gene rearrangement testing, specifically the IgH heavy chain rearrangement

# Concurrent considerations

- If HIV positive, antiretroviral (ARV) therapy should be part of their treatment
    - ARVs can be administered safely with systemic therapy
    - Consultation with an HIV specialist or pharmacist is important to optimize compatibility
    - For more guidance on treatment of patients with primary CNS lymphoma who are living with HIV, see NCCN Guidelines for Cancer in People with HIV
- If a transplant recipient, for additional guidance on disease management see NCCN Guidelines for B-Cell Lymphomas, subalgorithm Post-Transplant Lymphoproliferative Disorders (PTLD-1)

# Next

- Primary vitreoretinal lymphoma / primary CNS lymphoma ocular variant, go to PCNS-2
- Positive diagnosis of primary CNS lymphoma
- Biopsy not diagnostic of primary CNS lymphoma, go to PCNS-2
- Other CNS tumor, see NCCN Guidelines for Central Nervous System Cancers, Table of Contents
