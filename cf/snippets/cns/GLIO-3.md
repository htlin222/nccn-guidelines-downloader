+++
id           = "cns/GLIO-3"
gid          = "cns"
ref          = "GLIO-3"
page         = 15
title        = "Adjuvant treatment and follow-up for WHO grade 3 oligodendroglioma, IDH1/2-mutant, 1p19q-codeleted"
nccn_version = "2.2026"
nccn_date    = "06/10/26"
generated    = "2026-08-27"
see_also     = ["GLIO-A", "BRAIN-A", "BRAIN-C", "BRAIN-D", "BRAIN-E", "GLIO-13"]

[facets]
disease   = "cns"
biomarker = ["idh1", "idh2"]
timepoint = ["adjuvant", "surveillance"]

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
name = "kps"
type = "number"
[[variables]]
name = "ps_group"
type = "enum"
options = ["good", "poor"]
[[variables]]
name = "kps_reason"
type = "enum"
options = ["neurologic-deficit-from-brain-tumor", "other-reasons-such-as-medical-comorbidities"]
+++

# Source

- NCCN Adult Glioma v2.2026, GLIO-3, p15
- Applies to WHO grade 3 oligodendroglioma, IDH1/2-mutant, 1p19q-codeleted
- For recommended biomarker testing, see Principles of Brain or Tumor Pathology (BRAIN-E)
- Systemic therapy options: GLIO-A
- Radiation therapy: Principles of Radiation Therapy for Brain and Spinal Cord (BRAIN-C)
- All recommendations category 2A unless stated otherwise

# Assessment

- ___ (age) yo
- WHO grade 3 oligodendroglioma
- IDH1/2 ___ (idh_status)
- 1p19q ___ (codeletion_status)
- KPS ___ (kps)
- Performance status group ___ (ps_group)
- Multidisciplinary discussion done, or referral to a brain tumor center for consultation (BRAIN-D)
    - Panel strongly recommends this for patients with newly diagnosed or recurrent or progressive gliomas of any grade
    - Panel strongly recommends this again if treatment with an IDH inhibitor is being considered for newly diagnosed oligodendroglioma or astrocytoma

# Adjuvant treatment, good PS (KPS ≥60)

- Consider clinical trial
- RT (BRAIN-C) and neoadjuvant or adjuvant PCV (category 1) (GLIO-A)
    - Panel recommends PCV be administered after RT, as per EORTC 26951
    - The intensive PCV regimen given prior to RT (RTOG 9402) was not tolerated as well
- RT (BRAIN-C) with concurrent and adjuvant temozolomide (GLIO-A)
- RT (BRAIN-C) and adjuvant temozolomide (GLIO-A)
- IDH inhibitor (category 2B) (GLIO-A)
    - Requires multidisciplinary discussion or referral to a brain tumor center (BRAIN-D)
    - Some Panel members felt that, given the relatively slow growth rate of oligodendrogliomas, in certain circumstances it would be reasonable to first try treatment with an IDH inhibitor
    - Other Panel members expressed concern about possible undertreatment by postponing radiation and cytotoxic chemotherapy, which have been shown to improve survival in newly diagnosed grade 3 oligodendroglioma
    - If started, follow closely with brain MRI

# Adjuvant treatment, poor PS (KPS <60)

- Reason for KPS <60 ___ (kps_reason)
- Consider clinical trial
- RT (BRAIN-C), hypofractionated preferred, with or without concurrent and/or adjuvant temozolomide (GLIO-A)
    - RT + temozolomide is the preferred treatment if the KPS <60 is due to neurologic deficits from the brain tumor
- Temozolomide (category 2B) (GLIO-A)
- IDH inhibitor (category 2B) (GLIO-A)
    - Reasonable if the KPS <60 is for other reasons, such as medical comorbidities, since it may be tolerated better than radiation and/or cytotoxic chemotherapy
    - Requires multidisciplinary discussion or referral to a brain tumor center (BRAIN-D)
    - If started, follow closely with brain MRI
- Palliative/best supportive care

# Follow-up

- Principles of Brain and Spine Tumor Imaging (BRAIN-A)
    - Within the first 3 months after completion of RT and concomitant temozolomide, diagnosis of recurrence can be indistinguishable from pseudoprogression on neuroimaging

# Next

- Recurrence, go to GLIO-13
