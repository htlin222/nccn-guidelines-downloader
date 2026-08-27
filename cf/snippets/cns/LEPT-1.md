+++
id           = "cns/LEPT-1"
gid          = "cns"
ref          = "LEPT-1"
page         = 79
title        = "Workup, diagnosis, and risk status for leptomeningeal metastases"
nccn_version = "2.2026"
nccn_date    = "06/10/26"
generated    = "2026-08-27"
see_also     = ["LEPT-2", "LEPT-3"]

[facets]
disease   = "cns"
timepoint = ["workup", "diagnosis", "metastatic"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "primary_malignancy"
type = "text"
[[variables]]
name = "symptoms"
type = "text"
[[variables]]
name = "kps"
type = "number"
[[variables]]
name = "neuro_findings"
type = "text"
[[variables]]
name = "mri_findings"
type = "text"
[[variables]]
name = "opening_pressure"
type = "text"
[[variables]]
name = "csf_result"
type = "text"
+++

# Source

- NCCN CNS Cancers v2.2026, LEPT-1, p79
- Applies to signs and symptoms suggestive of leptomeningeal disease
- Multidisciplinary review for treatment planning, once pathology is available (BRAIN-D)
- Imaging per Principles of Brain and Spine Tumor Imaging (BRAIN-A)
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Known malignancy: ___ (primary_malignancy)
- Signs and symptoms suggestive of leptomeningeal disease: ___ (symptoms)
- KPS ___ (kps)
- Candidate for active treatment

# Workup

- Physical exam with careful neurologic evaluation
    - ___ (neuro_findings)
- Brain and spine MRI, if patient is a candidate for active treatment (BRAIN-A)
    - ___ (mri_findings)
- CSF analysis
    - Lumbar puncture should be done after MRI of spine is performed, to avoid a false-positive imaging result
    - Caution is indicated in patients who are anticoagulated, thrombocytopenic, or who have a bulky intracranial mass
    - When available, assess CSF, circulating tumor cells (CTC), and tDNA, which increases sensitivity of tumor cell detection and assessment of response to treatment
    - Record opening pressure: ___ (opening_pressure)
        - Consider palliative CSF diversion for symptomatic benefit or hydrocephalus
    - For patients receiving immunotherapy, CSF sampling rather than just MRI enhancement is suggested as evidence of leptomeningeal metastases, in order to exclude immune-related aseptic meningitis
    - Volume-dependent test: ideally send at least 10 mL for cytologic analysis
    - Result: ___ (csf_result)

# Diagnosis

- CSF positive for tumor cells, or
- Positive radiologic findings with supportive clinical findings, or
- Signs and symptoms with suggestive CSF in a patient known to have a malignancy
    - Suggestive CSF includes high white blood cell (WBC) count, low glucose, and high protein
    - If CSF is not positive for tumor cells, a second lumbar puncture is sometimes helpful

# Risk status

- Good risk
    - KPS at least 60
    - No major neurologic deficits
    - Minimal systemic disease
    - Reasonable systemic treatment options, if needed
    - Patients with a good risk status who do not desire further therapy may be treated with palliative and/or best supportive care
- Poor risk
    - KPS below 60
    - Multiple, serious, major neurologic deficits
    - Extensive systemic disease with few treatment options
    - Bulky CNS disease
    - Encephalopathy
    - Patients with tumors that are highly sensitive to systemic therapy or targeted therapy may be treated

# Next

- Good risk, treatment, go to LEPT-2
- Poor risk, treatment, go to LEPT-2
- Response assessment, see LEPT-3
