+++
id           = "cns/GLIO-2"
gid          = "cns"
ref          = "GLIO-2"
page         = 13
title        = "Adjuvant treatment of WHO grade 2 oligodendroglioma, IDH1/2-mutant and 1p19q-codeleted"
nccn_version = "2.2026"
nccn_date    = "06/10/26"
generated    = "2026-08-27"
see_also     = ["GLIO-1", "GLIO-3", "GLIO-4"]

[facets]
disease   = "cns"
timepoint = ["adjuvant", "surveillance"]
biomarker = ["idh1", "idh2"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "idh_status"
type = "text"
[[variables]]
name = "codeletion_status"
type = "text"
[[variables]]
name = "surgery"
type = "enum"
options = ["gross total resection", "resection", "biopsy"]
[[variables]]
name = "residual"
type = "enum"
options = ["none", "residual/measurable disease", "recurrent tumor"]
[[variables]]
name = "kps"
type = "number"
[[variables]]
name = "neuro_status"
type = "enum"
options = ["asymptomatic", "stable", "symptomatic"]
+++

# Source

- NCCN Adult Glioma v2.2026, GLIO-2, p13
- Applies to WHO grade 2 oligodendroglioma, IDH1/2-mutant, 1p19q-codeleted
- Footnotes on GLIO-2A
- All recommendations category 2A unless stated otherwise

# Assessment

- ___ (age) yo
- IDH1/2 mutation ___ (idh_status)
- 1p19q codeletion ___ (codeletion_status)
- Prior surgery ___ (surgery)
- Disease status after resection or biopsy ___ (residual)
- KPS ___ (kps)
- Neurologic status ___ (neuro_status)

# Pathology

- Recommended biomarker testing, see Principles of Brain Tumor Pathology (BRAIN-E)
- Multidisciplinary discussion, or referral to a brain tumor center for consultation, strongly recommended
    - Applies to newly diagnosed, recurrent, or progressive glioma of any grade
    - Also strongly recommended whenever treatment with an IDH inhibitor is being considered for newly diagnosed oligodendroglioma or astrocytoma
    - See Principles of Brain and Spine Tumor Management (BRAIN-D)

# Good performance status, KPS 60 or higher, no residual/measurable disease

- Observation
    - Regular follow-up is essential for patients receiving observation alone after resection
    - Reasonable for a patient who is neurologically asymptomatic or stable; close monitoring with brain MRI is important
    - Patients with newly diagnosed grade 2 oligodendroglioma after gross total resection might remain progression free for many years, so initially observing them is reasonable
- IDH inhibitor
    - Systemic Therapy Options (GLIO-A)
    - Vorasidenib is a dual inhibitor of IDH1 and IDH2
    - Ivosidenib is an IDH1 inhibitor and is a reasonable alternative if vorasidenib cannot be tolerated
    - Patients without residual disease were excluded from the phase 3 INDIGO study of vorasidenib versus placebo, so benefit of immediate treatment in this subset is unknown
    - The safety of long-term treatment with IDH inhibitors is unknown
    - Discuss the possible risks and benefits of starting an IDH inhibitor right away with these patients
- Consider clinical trial

# Good performance status, KPS 60 or higher, residual/measurable disease or recurrent tumor after resection or biopsy, when upfront RT and chemotherapy is not preferred

- IDH inhibitor
    - Systemic Therapy Options (GLIO-A)
    - Vorasidenib versus placebo in residual or recurrent grade 2 IDH1/2-mutant glioma, after surgery and no prior treatment, improved median progression-free survival 27.7 months versus 11.1 months
    - Overall survival data from that study are not yet available
    - Ivosidenib is a reasonable alternative if vorasidenib cannot be tolerated
- Observation
    - Regular follow-up is essential for patients receiving observation alone after resection
    - Reasonable for a patient who is neurologically asymptomatic or stable; close monitoring with brain MRI is important
- Consider clinical trial

# Good performance status, KPS 60 or higher, initial treatment with RT and chemotherapy preferred, or tumor progression on an IDH inhibitor

- Consider clinical trial
- RT plus adjuvant PCV, procarbazine/lomustine/vincristine (category 1)
    - RTOG 9802 showed a significant improvement in median overall survival in patients with high-risk low-grade glioma treated with RT followed by PCV x 6 cycles compared with RT alone, after a tissue diagnosis was made
    - That study did not address whether all of these patients should be treated right away
- RT plus adjuvant temozolomide
- RT plus concurrent and adjuvant temozolomide
- Radiation planning per Principles of Radiation Therapy for Brain and Spinal Cord (BRAIN-C)
- Systemic therapy per Systemic Therapy Options (GLIO-A)

# Poor performance status, KPS below 60

- IDH inhibitor
    - Reasonable if the KPS is low for reasons other than the tumor, such as medical comorbidities, since it may be tolerated better than radiation and/or cytotoxic chemotherapy
    - Systemic Therapy Options (GLIO-A)
- RT, hypofractionated preferred, with or without concurrent and/or adjuvant temozolomide
    - RT plus temozolomide is preferred if the KPS is low due to neurologic deficits from the brain tumor
- Temozolomide (category 2B)
- Palliative/best supportive care
- Consider clinical trial

# Follow-up

- Principles of Brain and Spine Tumor Imaging (BRAIN-A)
- Within the first 3 months after completion of RT and concomitant temozolomide, recurrence can be indistinguishable from pseudoprogression on neuroimaging

# Next

- Recurrence, go to GLIO-8
