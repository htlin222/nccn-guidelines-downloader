+++
id           = "wilms_tumor/WILMS-1"
gid          = "wilms_tumor"
ref          = "WILMS-1"
page         = 10
title        = "Presentation, initial evaluation, and where the findings send the patient next"
nccn_version = "1.2026"
nccn_date    = "05/04/2026"
generated    = "2026-08-28"
see_also     = ["WILMS-A", "WILMS-B", "WILMS-I", "WILMS-2"]

[facets]
disease   = "wilms_tumor"
timepoint = ["diagnosis", "workup"]

[[variables]]
name = "age"
type = "text"
[[variables]]
name = "presentation"
type = "enum"
options = ["abdominal swelling", "suspicious mass", "renal tumor discovered by imaging"]
[[variables]]
name = "mass_exam"
type = "text"
[[variables]]
name = "associated_findings"
type = "text"
[[variables]]
name = "blood_pressure"
type = "text"
[[variables]]
name = "pt_ptt"
type = "text"
[[variables]]
name = "predisposition"
type = "text"
[[variables]]
name = "laterality"
type = "enum"
options = ["unilateral", "bilateral", "no renal tumor"]
+++

# Source

- NCCN Wilms Tumor (Nephroblastoma) v1.2026, WILMS-1, p10
- Applies to a child with abdominal swelling and/or a suspicious mass, or a renal tumor discovered by imaging
- Initial evaluation follows Principles of Abdominal Mass Evaluation (WILMS-A)
- Refer to the NCCN Distress Thermometer and Problem List, which includes social determinants of health, see NCCN Guidelines for Distress Management (DIS-A)
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age)
- Presentation ___ (presentation)
- Abdominal mass on exam ___ (mass_exam)
    - Firm, non-tender, smooth
    - Avoid vigorous or frequent palpation
- With or without abdominal pain, fever, hematuria, hypertension ___ (associated_findings)
- Blood pressure ___ (blood_pressure)
- PT/PTT ___ (pt_ptt)
- Known condition predisposing to WT ___ (predisposition)
- Renal tumor on imaging ___ (laterality)

# Initial evaluation

- History and physical (H&P), including general health
    - Blood pressure
    - Prior medical history
    - Family history
- Complete blood count (CBC) and differential
- Comprehensive metabolic panel
- Urinalysis (UA)
- To rule out neuroblastoma, consider urine homovanillic acid (HVA) and vanillylmandelic acid (VMA)
- Assessment of coagulation
    - Consider PT/PTT
    - Consider screening for acquired von Willebrand disease if prothrombin time/partial thromboplastin time (PT/PTT) is abnormal
- Abdominal US, see Principles of Imaging (WILMS-B)
- Abdomen and pelvis CT with contrast or MRI, see Principles of Imaging (WILMS-B)
    - CT with multiplanar reconstruction or MRI with contrast is recommended
    - MRI may be used when bilateral disease is suspected, as it may help to distinguish between nephrogenic rests and WT
- Chest CT with or without contrast, see Principles of Imaging (WILMS-B)
- Assessment for congenital anomalies
- Screening for predisposition conditions
    - Genetic disorders that predispose to WT include Denys-Drash, WAGR, Beckwith-Wiedemann, Frasier, and Perlman syndromes
    - Contralateral nephrogenic rests in children <12 months also predispose
    - Ten percent to 33% of WT occurs in children with predisposing conditions
    - Children with known predisposing conditions should be screened for WT with PE and abdominal US every 3 months until 7 years of age (ie, all of year 6)
    - See Principles of Cancer Risk Assessment and Counseling (WILMS-I)
- Consider oncofertility counseling

# Findings that are not a malignant renal tumor

- Malignant renal tumor unlikely, benign conditions include
    - Adrenal hemorrhage
    - Angiomyolipoma
    - Cystic nephroma
    - Dysplastic kidney
    - Hydronephrosis
    - Metanephric tumors (eg, adenoma, stromal tumor, adenofibroma)
    - Multicystic kidney disease
    - Nephroblastomatosis
    - Polycystic kidney disease
    - Kidney hemorrhage
    - Renal vein thrombosis
- Malignant non-renal tumor likely
    - Neuroblastoma
    - Hepatoblastoma
    - Lymphoma
    - Extrarenal WT
    - Desmoplastic small round blue cell tumor
    - Other rare malignancy

# Next

- Unilateral renal tumor, go to treatment for unilateral renal tumor (WILMS-2)
- Bilateral renal tumors, go to treatment for bilateral renal tumor (WILMS-2)
- Malignant renal tumor unlikely, refer to appropriate specialist
- Malignant non-renal tumor likely, refer to appropriate specialist or NCCN Guidelines, if available
