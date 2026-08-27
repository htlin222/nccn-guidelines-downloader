+++
id           = "cns/GLIO-4"
gid          = "cns"
ref          = "GLIO-4"
page         = 16
title        = "Adjuvant treatment and follow-up of WHO grade 2 IDH1/2-mutant astrocytoma"
nccn_version = "2.2026"
nccn_date    = "06/10/26"
generated    = "2026-08-27"
see_also     = ["GLIO-5", "GLIO-8", "GLIO-A", "BRAIN-A", "BRAIN-C", "BRAIN-D", "BRAIN-E"]

[facets]
disease   = "cns"
biomarker = ["idh1", "idh2"]
timepoint = ["adjuvant", "surveillance"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "idh"
type = "text"
[[variables]]
name = "prior_surgery"
type = "enum"
options = ["gross total resection", "resection", "biopsy"]
[[variables]]
name = "residual"
type = "enum"
options = ["none", "residual/measurable", "recurrent after resection or biopsy"]
[[variables]]
name = "kps"
type = "number"
+++

# Source

- NCCN Central Nervous System Cancers v2.2026, GLIO-4, p16
- Applies to WHO grade 2 IDH1/2-mutant astrocytoma, after resection or biopsy
- For recommended biomarker testing, see Principles of Brain Tumor Pathology (BRAIN-E)
- Multidisciplinary discussion, or referral to a brain tumor center for consultation, is strongly recommended for newly diagnosed, recurrent, or progressive glioma of any grade (BRAIN-D)
    - Also strongly recommended if treatment with an IDH inhibitor is being considered for newly diagnosed oligodendroglioma or astrocytoma
- Systemic therapy options: GLIO-A
- Radiation therapy principles: BRAIN-C
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, WHO grade 2 IDH1/2-mutant astrocytoma
- IDH mutation ___ (idh)
- Prior surgery ___ (prior_surgery)
- Disease status ___ (residual)
- KPS ___ (kps)

# Good PS (KPS ≥60), no residual/measurable disease

- Observation
    - Initial observation after gross total resection is reasonable, because grade 2 astrocytomas are relatively slow growing and may not require further treatment for several years
    - Regular follow-up is essential for patients receiving observation alone after resection
    - Reasonable for a patient who is neurologically asymptomatic or stable, with close monitoring by brain MRI
- IDH inhibitor
    - Vorasidenib is a dual inhibitor of IDH1 and IDH2
    - Ivosidenib is an IDH1 inhibitor and is a reasonable alternative if the patient cannot tolerate vorasidenib
    - Patients with newly diagnosed grade 2 or 3 oligodendroglioma/astrocytoma without residual disease were excluded from the phase 3 study of vorasidenib versus placebo, so it is unknown whether this subset benefits from immediate treatment
    - The safety of long-term treatment with IDH inhibitors is unknown
    - Discuss the possible risks and benefits of starting treatment right away
    - Grade 2 astrocytomas typically progress faster than grade 2 oligodendrogliomas, so delaying radiation and cytotoxic chemotherapy by starting an IDH inhibitor after gross total resection may also be reasonable
- Consider clinical trial

# Good PS (KPS ≥60), residual/measurable disease or recurrent tumor after resection or biopsy, when upfront treatment with RT and chemotherapy is not preferred

- IDH inhibitor (GLIO-A)
    - Vorasidenib improved median PFS 27.7 months versus 11.1 months compared with placebo, in residual or recurrent grade 2 IDH-mutant glioma after surgery and with no prior treatment
    - Overall survival data from that study are not yet available
    - Ivosidenib is a reasonable alternative if the patient cannot tolerate vorasidenib
- Observation
    - Regular follow-up is essential for patients receiving observation alone after resection
    - Reasonable for a patient who is neurologically asymptomatic or stable, with close monitoring by brain MRI
- Consider clinical trial

# Good PS (KPS ≥60), initial treatment with RT and chemotherapy is preferred, or tumor progression on an IDH inhibitor

- Consider clinical trial
- RT (BRAIN-C) + adjuvant PCV (GLIO-A)
    - RTOG 9802 showed a significant improvement in median overall survival in high-risk low-grade glioma treated with RT followed by PCV x 6 cycles compared with RT alone
    - That study did not address whether all of these patients should be treated right away
- RT (BRAIN-C) + adjuvant temozolomide (GLIO-A)
- RT (BRAIN-C) + concurrent and adjuvant temozolomide (GLIO-A)

# Poor PS (KPS <60)

- IDH inhibitor (GLIO-A)
    - Reasonable if the KPS <60 is due to other reasons such as medical comorbidities, since it may be tolerated better than radiation and/or cytotoxic chemotherapy
- RT (BRAIN-C), hypofractionated preferred, with or without concurrent and/or adjuvant temozolomide (GLIO-A)
    - If the KPS <60 is due to neurologic deficits from the brain tumor, RT + temozolomide is the preferred treatment
- Temozolomide (category 2B) (GLIO-A)
- Palliative/best supportive care
- Consider clinical trial

# Follow-up

- Imaging per Principles of Brain and Spine Tumor Imaging (BRAIN-A)
- Within the first 3 months after completion of RT and concomitant temozolomide, recurrence can be indistinguishable from pseudoprogression on neuroimaging

# Next

- Recurrence, go to GLIO-8
