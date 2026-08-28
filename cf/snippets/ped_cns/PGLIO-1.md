+++
id           = "ped_cns/PGLIO-1"
gid          = "ped_cns"
ref          = "PGLIO-1"
page         = 8
title        = "Radiologic presentation of suspected pediatric diffuse high-grade glioma, surgery, and pathologic triage"
nccn_version = "1.2026"
nccn_date    = "11/25/25"
generated    = "2026-08-28"
see_also     = ["PGLIO-A", "PGLIO-B", "PGLIO-C", "PGLIO-2", "PGLIO-3"]

[facets]
disease   = "ped_cns"
timepoint = ["diagnosis", "workup", "primary-treatment"]
biomarker = ["idh1", "idh2"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "mri_findings"
type = "text"
[[variables]]
name = "mass_effect"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "resection_plan"
type = "enum"
options = ["maximal safe resection", "subtotal resection", "stereotactic biopsy", "open biopsy", "no biopsy"]
[[variables]]
name = "pathology"
type = "text"
+++

# Source

- NCCN Pediatric Diffuse High-Grade Gliomas v1.2026, PGLIO-1, p8
- Applies to a brain MRI suggestive of high-grade glioma
- Neuroimaging per Principles of Neuroimaging (PGLIO-A)
- Neuropathology per Principles of Neuropathology (PGLIO-B)
- Surgery per Principles of Surgery (PGLIO-C)
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Brain MRI (PGLIO-A) suggestive of high-grade glioma: ___ (mri_findings)
- Symptomatic due to mass effect: ___ (mass_effect)
- Planned surgical approach: ___ (resection_plan)
- Pathology and molecular result (PGLIO-B): ___ (pathology)
- Multidisciplinary input for treatment planning obtained, if feasible

# Surgery

- Goals of surgery (PGLIO-C)
    - Obtain a pathologic diagnosis and molecular genetic characterization
    - Alleviate symptoms related to increased intracranial pressure or tumor mass effect
    - Increase survival
    - Decrease corticosteroid dose requirements
- Maximal safe resection feasible with goal of image-verified complete resection
    - Maximal safe resection
    - Postoperative brain MRI (PGLIO-A), ideally between 24-48 hours
- Symptomatic due to mass effect, but complete resection not feasible
    - Subtotal resection (STR) for tissue diagnosis and debulking
    - Postoperative brain MRI (PGLIO-A), ideally between 24-48 hours
- Clinically beneficial cytoreduction not feasible
    - Stereotactic biopsy, or
    - Open biopsy
- Clinical and radiographic features consistent with diffuse intrinsic pontine glioma (DIPG) and no tissue available for histologic confirmation, or decision not to biopsy
    - Encourage biopsy if atypical features on MRI are present
    - Encourage biopsy if patient is <3 years of age
    - Encourage biopsy if biopsy is standard of care at the institution

# Pathology and clinical impression

- Pathology reviewed per Principles of Neuropathology (PGLIO-B)
- Pediatric diffuse high-grade gliomas, EXCEPT diffuse midline glioma, H3 K27-altered
    - Diagnoses include diffuse hemispheric glioma, H3 G34-mutant
    - Diagnoses include pediatric diffuse high-grade glioma, H3 wild-type and IDH wild-type
    - Diagnoses include infant-type hemispheric glioma
    - Diagnoses include other high-grade glial entities
- Diffuse midline glioma, H3 K27-altered
- Oligodendroglioma, IDH1/2-mutant and 1p/19q-codeleted, WHO grade 3
- Astrocytoma, IDH1/2-mutant, WHO grade 3 or grade 4

# Next

- Pediatric diffuse high-grade gliomas, EXCEPT diffuse midline glioma, H3 K27-altered, go to PGLIO-2
- Diffuse midline glioma, H3 K27-altered, go to PGLIO-3
- DIPG by clinical and radiographic features with no tissue, or decision not to biopsy, go to PGLIO-3
- Oligodendroglioma, IDH1/2-mutant and 1p/19q-codeleted, WHO grade 3, see GLIO-2 in NCCN Guidelines for Central Nervous System Cancers (Adults)
- Astrocytoma, IDH1/2-mutant, WHO grade 3 or grade 4, see GLIO-2 in NCCN Guidelines for Central Nervous System Cancers (Adults)
