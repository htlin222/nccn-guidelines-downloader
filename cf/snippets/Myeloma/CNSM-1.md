+++
id           = "Myeloma/CNSM-1"
gid          = "Myeloma"
ref          = "CNSM-1"
page         = 15
title        = "Multiple myeloma with CNS disease: workup, diagnosis, management, and response evaluation"
nccn_version = "5.2026"
nccn_date    = "01/09/26"
generated    = "2026-08-27"
see_also     = ["MYEL-G", "MYEL-H", "MYEL-4"]

[facets]
disease   = "Myeloma"
histology = "plasma-cell"
timepoint = ["workup", "diagnosis", "supportive"]

[[variables]]
name = "neuro_symptoms"
type = "text"
[[variables]]
name = "cns_timing"
type = "enum"
options = ["initial-presentation", "relapse"]
[[variables]]
name = "systemic_involvement"
type = "enum"
options = ["present", "absent"]
[[variables]]
name = "csf_cell_count"
type = "number"
[[variables]]
name = "csf_total_protein"
type = "number"
[[variables]]
name = "csf_flow"
type = "text"
[[variables]]
name = "mri_findings"
type = "text"
+++

# Source

- NCCN Multiple Myeloma v5.2026, CNSM-1, p15
- Applies to multiple myeloma with clinical presentation of CNS involvement
- CNS involvement may occur as part of initial myeloma presentation or relapse, with or without systemic involvement
- Extension of skull or spinal plasmacytoma without meningeal infiltration causing compressive neurologic disease is not considered CNS disease, and should be treated per treatment guidelines for MM (MYEL-G)
- All recommendations category 2A unless otherwise indicated

# Assessment

- Presenting neurologic findings ___ (neuro_symptoms)
    - Confusion
    - Headache
    - Visual symptoms
    - Weakness
    - Cranial nerve palsies
- CNS involvement occurring at ___ (cns_timing)
- Systemic myeloma involvement ___ (systemic_involvement)
- Neurologic presentations that are not considered CNS involvement, exclude first
    - Hyperammonemic encephalopathy, a rare presentation of myeloma, which resolves with systemic plasma cell-directed therapy
    - Hyperviscosity, which may cause neurologic symptoms
    - Hypercalcemia, which may cause neurologic symptoms

# Workup

- Essential
    - Brain and spine MRI with and without contrast
    - Lumbar puncture
        - Flow cytometry
        - Cytopathology
        - Cell count ___ (csf_cell_count)
        - Total protein ___ (csf_total_protein)
    - Workup for infections
    - Do not order CSF SPEP, it is not appropriate for diagnosis of CNS disease in patients with MM
- Useful in certain circumstances
    - Biopsy of affected tissue, if the above test results are negative and suspicion is high

# Diagnosis

- Definitive diagnosis, either of
    - Clonal plasma cells observed in CSF by immunophenotyping ___ (csf_flow)
    - Tissue diagnosis of plasma cell myeloma in affected CNS tissue
- Probable diagnosis
    - Leptomeningeal enhancement or parenchymal lesions on MRI without definitive clonal plasma cells demonstrated ___ (mri_findings)
- CSF SPEP is not appropriate for diagnosis of CNS disease in patients with MM

# Management

- Multimodality therapy (MYEL-H)
- And consider referral to palliative care specialist and supportive care for symptom management
    - See NCCN Guidelines for Palliative Care
    - See NCCN Guidelines for Supportive Care

# Response evaluation

- Lumbar puncture with flow cytometry, cytopathology, cell count
- And/or repeat MRI imaging for CNS evaluation, most often brain and spine

# Next

- Definitive or probable diagnosis of CNS disease, multimodality therapy (MYEL-H)
- Extension of skull or spinal plasmacytoma without meningeal infiltration causing compressive neurologic disease, treat per treatment guidelines for MM (MYEL-G)
