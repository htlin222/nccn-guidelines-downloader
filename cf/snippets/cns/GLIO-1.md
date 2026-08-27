+++
id           = "cns/GLIO-1"
gid          = "cns"
ref          = "GLIO-1"
page         = 12
title        = "Circumscribed glioma: surgery, pathology, and adjuvant treatment after an MRI compatible with low-grade glioma"
nccn_version = "2.2026"
nccn_date    = "06/10/26"
generated    = "2026-08-27"
see_also     = ["GLIO-2", "GLIO-4", "GLIO-5", "GLIO-6", "GLIO-7", "GLIO-12"]

[facets]
disease   = "cns"
biomarker = ["braf", "idh1", "idh2"]
timepoint = ["workup", "primary-treatment", "adjuvant", "surveillance"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "mri_findings"
type = "text"
[[variables]]
name = "resection_extent"
type = "enum"
options = ["gross total resection", "subtotal resection", "open biopsy", "stereotactic biopsy"]
[[variables]]
name = "pathology"
type = "text"
[[variables]]
name = "who_grade"
type = "enum"
options = ["1", "2", "3"]
[[variables]]
name = "braf_status"
type = "text"
+++

# Source

- NCCN Adult Glioma v2.2026, GLIO-1, p12
- Applies to a radiologic presentation of MRI compatible with a low-grade glioma
- Imaging: Principles of Brain and Spine Tumor Imaging (BRAIN-A)
- Surgery: Principles of Surgery (BRAIN-B)
- Biomarker testing: Principles of Brain Tumor Pathology (BRAIN-E)
- Management: Principles of Brain and Spine Tumor Management (BRAIN-D)
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- MRI ___ (mri_findings), compatible with a low-grade glioma
- Multidisciplinary discussion, or referral to a brain tumor center for consultation
    - Strongly recommended by the Panel for newly diagnosed, recurrent, or progressive glioma of any grade
    - Also strongly recommended if treatment with an IDH inhibitor is being considered for newly diagnosed oligodendroglioma or astrocytoma
- Clinical impression of whether maximal safe resection is feasible

# Surgery

- Maximal safe resection feasible
    - Gross total resection
- Maximal safe resection not feasible
    - Subtotal resection, or
    - Open biopsy, or
    - Stereotactic biopsy
- Postoperative brain MRI within 48 hours after surgery
- Actual procedure performed: ___ (resection_extent)

# Pathology

- ___ (pathology), WHO grade ___ (who_grade)
- Circumscribed glioma / glioneuronal tumors
    - WHO grade 1
        - Pilocytic astrocytoma (PA)
        - Subependymal giant cell astrocytoma (SEGA)
        - Ganglioglioma
        - Dysembryoplastic neuroepithelial tumor (DNET)
        - Grade 1 tumors with concurrent H3 and BRAF alterations may behave more aggressively (BRAIN-E)
    - WHO grade 2
        - Pleomorphic xanthoastrocytoma (PXA)
    - WHO grade 3
        - PXA, go to GLIO-12
- Recommended biomarker testing, see BRAIN-E
- BRAF alterations: ___ (braf_status)

# Adjuvant treatment

- PA, PXA, ganglioglioma / glioneuronal tumor
    - Complete resection: no further treatment indicated
    - Incomplete resection, biopsy, or surgically inaccessible location
        - Observation
        - Consider radiation therapy (RT) only if significant growth or neurologic symptom development
        - Consider BRAF and MEK inhibitors if BRAF alterations (GLIO-A)
- SEGA
    - Consider testing for tuberous sclerosis with referral for genetic counseling (BRAIN-F)
    - Consider treatment with an mTOR inhibitor (eg, everolimus) if symptomatic or growing (GLIO-A)
    - The need to treat SEGAs or other findings in the appropriate tuberous sclerosis patient population should be determined by the patient's symptoms and/or change on serial radiologic studies
    - Referral to medical genetics / brain tumor center is recommended

# Next

- Follow-up imaging per BRAIN-A
- Recurrence, go to GLIO-7
- If oligodendroglioma, grade 2, IDH1/2-mutant, 1p19q-codeleted, go to GLIO-2
- If IDH1/2-mutant astrocytoma, grade 2, go to GLIO-4
- If IDH1/2-mutant astrocytoma, grade 3, go to GLIO-5
- If IDH1/2-mutant astrocytoma, grade 4, go to GLIO-6
- If PXA, WHO grade 3, go to GLIO-12
