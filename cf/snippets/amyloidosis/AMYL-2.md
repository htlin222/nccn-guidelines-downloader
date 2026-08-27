+++
id           = "amyloidosis/AMYL-2"
gid          = "amyloidosis"
ref          = "AMYL-2"
page         = 6
title        = "Organ-directed diagnostic workup and treatment path once organ involvement is established"
nccn_version = "2.2026"
nccn_date    = "03/16/26"
generated    = "2026-08-27"
see_also     = ["AMYL-1", "AMYL-3", "AMYL-4", "AMYL-B", "AMYL-C", "AMYL-D"]

[facets]
disease   = "amyloidosis"
biomarker = "amyloid"
timepoint = ["workup", "primary-treatment", "transplant", "relapsed-refractory"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "organs_involved"
type = "text"
[[variables]]
name = "consensus_criteria_met"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "disease_status"
type = "enum"
options = ["newly-diagnosed", "relapsed-refractory"]
[[variables]]
name = "hct_candidate"
type = "enum"
options = ["yes", "no", "pending"]
+++

# Source

- NCCN Systemic Light Chain Amyloidosis v2.2026, AMYL-2, p6
- Special testing based on organ system involvement, after the initial diagnostic workup (AMYL-1)
- Frailty assessment should be considered in older adults, for both the workup and the treatment of newly diagnosed SLCA (See NCCN Guidelines for Older Adult Oncology)
- All recommendations category 2A unless stated otherwise

# Assessment

- ___ (age) yo with systemic light chain amyloidosis (SLCA)
- Organ systems involved: ___ (organs_involved)
- Organ involvement based on amyloidosis consensus criteria met: ___ (consensus_criteria_met)
    - Definition of organ involvement based on amyloidosis consensus criteria (AMYL-C)
- Disease status: ___ (disease_status)
- HCT candidate: ___ (hct_candidate)

# Special testing - cardiac

- Cardiovascular magnetic resonance (CMR) imaging, in certain circumstances
    - Cardiac MRI with and without contrast
    - Characteristic findings on cardiac MRI
        - Global subendocardial late gadolinium enhancement (subendocardial or transmural involvement)
        - Abnormal myocardial and blood-pool gadolinium kinetics
    - When appropriate, imaging should be done with contrast unless contraindicated
- Transthoracic echocardiogram with global longitudinal strain imaging, in patients where CMR is not feasible or not optimal

# Special testing - liver and gastrointestinal tract

- Gastric emptying scan, if gastroparesis present
- Abdominal ultrasound or abdominal CT to document craniocaudal liver span, as clinically indicated
- Upper and lower endoscopies, if symptoms suggestive of GI involvement

# Special testing - peripheral nervous system

- Electromyography (EMG)/nerve conduction studies, if clinically significant peripheral neuropathy

# Special testing - other

- Endocrine testing
    - Thyroid-stimulating hormone (TSH)
    - Cortisol
- Pulmonary testing
    - Pulmonary function tests
- Chest CT without contrast, as indicated

# Next

- If there is organ involvement based on amyloidosis consensus criteria (AMYL-C), treat as newly diagnosed SLCA
    - Definition of organ and hematologic response and progression criteria (AMYL-D)
    - Clinical trial
    - Evaluate for hematopoietic cell transplant (HCT) candidacy
        - In those patients with very low tumor burden, induction therapy may not be required
        - If not a candidate for HCT at initial diagnosis, reassess after initiating systemic therapy
        - Patients eligible for HCT can elect to collect stem cells and delay transplant to a later line of therapy
    - Therapy for newly diagnosed disease (AMYL-B), with organ transplant as clinically indicated
        - and Best supportive care (See NCCN Guidelines for Palliative Care and NCCN Guidelines for Survivorship)
- Relapsed or refractory SLCA
    - Therapy for relapsed/refractory disease (AMYL-B)
        - and Best supportive care (See NCCN Guidelines for Palliative Care)
