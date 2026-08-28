+++
id           = "ped_all/PEDALL-2"
gid          = "ped_all"
ref          = "PEDALL-2"
page         = 13
title        = "Workup of newly diagnosed pediatric acute lymphoblastic leukemia"
nccn_version = "1.2026"
nccn_date    = "08/11/25"
generated    = "2026-08-28"
see_also     = ["PEDALL-2A", "PEDALL-C", "PEDALL-D", "PEDALL-H", "PEDALL-3", "PEDALL-5", "PEDALL-6", "PEDALL-7"]

[facets]
disease   = "ped_all"
histology = "lymphoblastic"
biomarker = ["bcr-abl", "tp53"]
timepoint = ["diagnosis", "workup"]
population = "fertility"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "sex"
type = "enum"
options = ["male", "female"]
[[variables]]
name = "neuro_symptoms"
type = "text"
[[variables]]
name = "ll_suspected"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "anthracycline_planned"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "predisposition"
type = "text"
[[variables]]
name = "family_history"
type = "text"
[[variables]]
name = "lineage"
type = "text"
[[variables]]
name = "bcr_abl"
type = "text"
+++

# Source

- NCCN Pediatric Acute Lymphoblastic Leukemia v1.2026, PEDALL-2, p13
- Workup of pediatric acute lymphoblastic leukemia, before assignment to a treatment pathway
- Footnotes on PEDALL-2A
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, ___ (sex)
- Lineage ___ (lineage)
- BCR::ABL1 status ___ (bcr_abl)
- Neurologic signs or symptoms at diagnosis ___ (neuro_symptoms)
- Lymphoblastic lymphoma (LL) suspected ___ (ll_suspected)
- Anthracyclines planned as part of treatment plan ___ (anthracycline_planned)
- Predisposition syndrome suspected ___ (predisposition)
- Family history ___ (family_history)

# Essential

- History and physical (H&P)
- Complete blood count (CBC), differential
- Chemistry profile
- Liver function tests (LFTs)
- Tumor lysis syndrome (TLS) panel
    - Lactate dehydrogenase (LDH)
    - Uric acid
    - Potassium
    - Calcium
    - Phosphorus
    - See Tumor Lysis Syndrome in Principles of Supportive Care (PEDALL-C)
- Pregnancy testing as indicated
- CT/MRI of head with contrast, if neurologic symptoms
    - For patients with major neurologic signs or symptoms at diagnosis, appropriate imaging studies should be performed to detect meningeal disease, chloromas, or central nervous system (CNS) bleeding
- Chest x-ray to rule out mediastinal mass
- Whole body PET/CT if lymphoblastic lymphoma (LL) suspected
- Lumbar puncture (LP) with intrathecal (IT) chemotherapy
    - Timing of LP should be consistent with the chosen treatment regimen
    - Pediatric-inspired regimens typically include LP and prophylactic IT chemotherapy at the time of diagnostic workup
    - The Panel recommends that LP be done concurrently with initial IT therapy
    - Evaluation and Treatment of Extramedullary Involvement (PEDALL-D)
- Testicular exam, including scrotal ultrasound as indicated
- Assessment of left ventricular function, in all patients who will receive anthracyclines as part of treatment plan
    - Echocardiogram, or cardiac nuclear medicine scan
- Central venous access device of choice

# Additional evaluation

- Additional testing may be warranted according to clinical symptoms and clinician discretion
- Pharmacogenomic testing for TPMT, NUDT15 (Pharmacogenomics, PEDALL-H)
- Assess for predisposition syndromes
    - Down syndrome is an important ALL predisposition syndrome
    - For non-Down syndrome-related ALL the majority of patients do not have an identifiable leukemia predisposition syndrome
    - Low hypodiploid (32 to 39 chromosomes) ALL is an important exception, where pathologic germline TP53 variants are common and testing should be considered
    - Other pathologic germline variants associated with ALL risk have been reported
        - Genes for pathologic germline variants are often somatically mutated in ALL, particularly PAX5, ETV6, and IKZF1, and have been shown to confer predisposition to developing B-ALL
    - A complete family history can help identify risk for a cancer predisposition syndrome, although de novo variants have been reported
    - There are increasing data to suggest that ALL can present as a second malignancy
    - For patients with possible cancer predisposition syndromes, principles of cancer risk assessment and counseling should be taken into consideration
        - See also the NCCN Guidelines for Genetic/Familial High-Risk Assessment: Breast, Ovarian, Pancreatic, and Prostate
- Disseminated intravascular coagulation (DIC) panel
    - D-dimer
    - Fibrinogen
    - Prothrombin time (PT)
    - Partial thromboplastin time (PTT)
- Fertility counseling is recommended for all patients
    - Fertility preservation as clinically appropriate, see NCCN Guidelines for Adolescent and Young Adult (AYA) Oncology
    - Fertility preservation is an option for certain patients
    - Options: sperm cryopreservation
    - Options: oocyte cryopreservation
    - Options: harvesting of ovarian or testicular tissue for cryopreservation
    - Options: embryo cryopreservation
    - Referral to a fertility preservation/reproductive health program should be considered for certain patients
- Infection evaluation: screen for opportunistic infections, as appropriate
- Psychosocial assessment is encouraged
    - For AYA, see NCCN Guidelines for AYA Oncology
- For AYA, counseling on cessation of smoking, drugs/illicit substances, vaping, and alcohol is encouraged
    - See NCCN Guidelines for Smoking Cessation

# Next

- B-ALL BCR::ABL1-negative, or BCR::ABL1-like, go to PEDALL-3
    - BCR::ABL1-like ALL is classified using LDA, FISH, RT-PCR, and NGS
- B-ALL BCR::ABL1-positive, go to PEDALL-5
- T-cell ALL (T-ALL), go to PEDALL-6
- Infant ALL, go to PEDALL-7
