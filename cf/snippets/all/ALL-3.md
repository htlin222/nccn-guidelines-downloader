+++
id           = "all/ALL-3"
gid          = "all"
ref          = "ALL-3"
page         = 14
title        = "Workup at ALL diagnosis, and assignment to an ALL subtype pathway"
nccn_version = "2.2026"
nccn_date    = "07/24/2026"
generated    = "2026-08-27"
see_also     = ["ALL-A", "ALL-B", "ALL-G", "ALL-4", "ALL-5", "ALL-6"]

[facets]
disease   = "all"
histology = "lymphoblastic"
biomarker = ["ph-positive", "ph-negative"]
timepoint = ["diagnosis", "workup"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "subtype"
type = "enum"
options = ["Ph+ B-ALL", "Ph- B-ALL", "T-ALL"]
[[variables]]
name = "neuro_symptoms"
type = "text"
[[variables]]
name = "cardiac_history"
type = "text"
[[variables]]
name = "extramedullary"
type = "text"
+++

# Source

- NCCN Acute Lymphoblastic Leukemia v2.2026, ALL-3, p14
- This list represents minimal recommendations; other testing may be warranted according to clinical symptoms and discretion of the clinician
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- ALL subtype ___ (subtype)
- Neurologic signs or symptoms at diagnosis ___ (neuro_symptoms)
- Suspected or confirmed extramedullary involvement ___ (extramedullary)
- Prior cardiac history, prior anthracycline exposure, or symptoms suggestive of cardiac dysfunction ___ (cardiac_history)

# History and laboratory workup

- History and physical (H&P) examination
- Complete blood count (CBC), differential, chemistry profile, liver function tests (LFTs)
- Disseminated intravascular coagulation (DIC) panel
    - d-dimer
    - fibrinogen
    - prothrombin time (PT)
    - partial thromboplastin time (PTT)
- Tumor lysis syndrome (TLS) panel
    - lactate dehydrogenase (LDH)
    - uric acid
    - potassium
    - calcium
    - phosphorus
    - see Tumor Lysis Syndrome in the NCCN Guidelines for B-Cell Lymphomas
- Hepatitis B/C testing
- Human immunodeficiency virus (HIV) testing
- Pregnancy testing
- Fertility counseling and preservation

# CNS and extramedullary evaluation

- CT/MRI of head with contrast, if neurologic symptoms
    - For patients with major neurologic signs or symptoms at diagnosis, appropriate imaging studies should be performed to detect meningeal disease, chloromas, or central nervous system (CNS) bleeding
    - See Evaluation and Treatment of Extramedullary Involvement (ALL-B)
- Lumbar puncture (LP) with intrathecal (IT) therapy
    - The Panel recommends first LP be performed at time of initial scheduled IT therapy, unless directed by symptoms to perform earlier
    - See Evaluation and Treatment of Extramedullary Involvement (ALL-B)
- CT of neck/chest/abdomen/pelvis with IV contrast, as indicated for symptoms
    - Recommend PET/CT (whole-body preferred) if lymphomatous involvement is suspected and/or confirmed by CT imaging
- Testicular examination, including scrotal ultrasound as indicated

# Infection, cardiac, and access

- Infection evaluation
    - Screen for opportunistic infections, as appropriate
    - NCCN Guidelines for Prevention and Treatment of Cancer-Related Infections
- Echocardiogram or cardiac nuclear medicine scan should be considered in all patients, since anthracyclines are important components of ALL therapy
    - Especially in patients with prior cardiac history and prior anthracycline exposure
    - Especially in patients with clinical symptoms suggestive of cardiac dysfunction
- Central venous access device of choice

# Transplant and predisposition

- Strongly consider early transplant evaluation and donor search (ALL-G)
- For patients with possible cancer predisposition syndromes, principles of cancer risk assessment and counseling should be taken into consideration
    - NCCN Guidelines for Genetic/Familial High-Risk Assessment: Breast, Ovarian, Pancreatic, and Prostate
    - ALL-A

# Next

- Ph+ B-ALL, go to Treatment (ALL-4)
- Ph- B-ALL, go to Treatment (ALL-5)
- T-ALL, go to Treatment (ALL-6)
