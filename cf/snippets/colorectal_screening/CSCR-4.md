+++
id           = "colorectal_screening/CSCR-4"
gid          = "colorectal_screening"
ref          = "CSCR-4"
page         = 15
title        = "Endoscopy-based screening at average risk: colonoscopy or flexible sigmoidoscopy, and the rescreen interval each finding earns"
nccn_version = "2.2026"
nccn_date    = "04/23/2026"
generated    = "2026-08-30"
see_also     = ["CSCR-1", "CSCR-1A", "CSCR-7A", "CSCR-8"]

[facets]
disease   = "colorectal_screening"
timepoint = "screening"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "life_expectancy"
type = "text"
[[variables]]
name = "modality"
type = "enum"
options = ["colonoscopy", "flexible-sigmoidoscopy"]
[[variables]]
name = "exam_date"
type = "text"
[[variables]]
name = "exam_complete"
type = "enum"
options = ["complete", "incomplete"]
[[variables]]
name = "prep_quality"
type = "enum"
options = ["adequate", "suboptimal"]
[[variables]]
name = "finding"
type = "enum"
options = ["negative-no-polyp", "hyperplastic-under-1cm", "adenoma-or-ssp-ssl", "hyperplastic-1cm-or-larger"]
[[variables]]
name = "serrated_count"
type = "number"
+++

# Source

- NCCN Colorectal Cancer Screening v2.2026, CSCR-4, p15
- Applies to endoscopy-based screening of individuals at average risk (CSCR-1)
- Footnotes on CSCR-7A
- For details on classification, see footnote c on CSCR-1A
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, average risk (CSCR-1)
- Estimated life expectancy: ___ (life_expectancy)
- Screening modality performed: ___ (modality)
- Date of examination: ___ (exam_date)
- Examination was ___ (exam_complete)
- Bowel preparation was ___ (prep_quality)
- Finding: ___ (finding)
- Number of serrated polyps found at colonoscopy: ___ (serrated_count)

# Eligibility and the screening discussion

- CRC screening is recommended in adults aged 45–75 years who might have a life expectancy of ≥10 years
- The decision to screen between ages 76–85 years should be individualized
    - Include a discussion of the risks and benefits based on comorbidity status and estimated life expectancy
    - Eligible individuals who have not been previously screened are most likely to benefit in this age group
- For beginning screening at age <50 years in average-risk individuals
    - The Panel agrees the data are stronger to support beginning screening at 50 years
    - The Panel acknowledges that lower-level evidence supports a benefit for screening earlier
- When initiating screening for all eligible individuals
    - Discuss the potential harms/risks and benefits
    - Consider all recommended CRC screening options
- Screening should be individualized and include a discussion of the risks and benefits of each modality

# Screening modality and schedule

- See Screening Modality and Schedule (CSCR-A)
- Colonoscopy
    - If colonoscopy is incomplete or the preparation is suboptimal, repeat it as soon as possible and no later than 1 year after the index procedure
    - For patients who have had incomplete colonoscopy, consider CTC or balloon-assisted colonoscopy or capsule colonoscopy as alternative exams for completing the screening
- or Flexible sigmoidoscopy
    - Alternative strategies have been recommended with flexible sigmoidoscopy, including flexible sigmoidoscopy every 10 years combined with annual FIT

# Evaluation of screening findings after colonoscopy

- Polyp(s) here refers to both polyp(s) and nonpolypoid (flat) lesions
- Negative/No polyp
    - Rescreen with any modality in 10 y
- Polyp(s)
    - Polypectomy
        - If polypectomy is unable to be performed, refer the patient to a provider who can perform endoscopy with polypectomy
    - Hyperplastic polyp(s) <1 cm in size
        - Rescreen with any modality in 10 y
        - If >20 serrated polyps are found at colonoscopy, consider a diagnosis of serrated polyposis syndrome, see NCCN Guidelines for Genetic/Familial High-Risk Assessment: Colorectal, Endometrial, and Gastric
    - Adenoma(s) or SSP/SSL(s) of any size, or hyperplastic polyp(s) ≥1 cm in size
        - Advanced SSP/SSL(s) are generally considered to have a comparable cancer risk and are managed similarly to advanced adenomas, rather than high-risk adenomas, a definition that includes multiplicity
        - Histologic differentiation of sessile serrated lesions (SSLs) from hyperplastic polyps (HPs) is challenging, and misclassification is not uncommon
        - Large (≥1 cm) HPs are often reclassified as SSLs on expert review and may be managed similarly for surveillance
        - Data are mixed for smaller (<1 cm) proximal HPs
        - If expert GI pathology review is unavailable and endoscopic features such as appearance, size, and/or location suggest SSL(s), follow-up recommendations based on SSL guidelines is reasonable
        - Follow-up of clinical findings: Polyp found at colonoscopy (CSCR-8)

# Evaluation of screening findings after flexible sigmoidoscopy

- Polyp(s) here refers to both polyp(s) and nonpolypoid (flat) lesions
- Negative/No polyp
    - Rescreen with any modality in 5 y
- Polyp(s)
    - Polypectomy
        - If polypectomy is unable to be performed, refer the patient to a provider who can perform endoscopy with polypectomy
    - Hyperplastic polyp(s) <1 cm in size
        - Rescreen with any modality in 5 y
    - Adenoma(s) or SSP/SSL(s) of any size, or hyperplastic polyps ≥1 cm in size
        - Advanced SSP/SSL(s) are generally considered to have a comparable cancer risk and are managed similarly to advanced adenomas, rather than high-risk adenomas, a definition that includes multiplicity
        - Histologic differentiation of sessile serrated lesions (SSLs) from hyperplastic polyps (HPs) is challenging, and misclassification is not uncommon
        - Large (≥1 cm) HPs are often reclassified as SSLs on expert review and may be managed similarly for surveillance
        - Data are mixed for smaller (<1 cm) proximal HPs
        - If expert GI pathology review is unavailable and endoscopic features such as appearance, size, and/or location suggest SSL(s), follow-up recommendations based on SSL guidelines is reasonable
        - Colonoscopy as soon as possible and no later than within 9 months
        - Then follow-up of clinical findings: Polyp found at colonoscopy (CSCR-8)

# Next

- Colonoscopy, negative/no polyp or hyperplastic polyp(s) <1 cm in size: rescreen with any modality in 10 y
- Colonoscopy, adenoma(s) or SSP/SSL(s) of any size or hyperplastic polyp(s) ≥1 cm in size: follow-up of clinical findings, polyp found at colonoscopy, go to CSCR-8
- Flexible sigmoidoscopy, negative/no polyp or hyperplastic polyp(s) <1 cm in size: rescreen with any modality in 5 y
- Flexible sigmoidoscopy, adenoma(s) or SSP/SSL(s) of any size or hyperplastic polyps ≥1 cm in size: colonoscopy as soon as possible and no later than within 9 months, then follow-up of clinical findings, polyp found at colonoscopy, go to CSCR-8
- Every screening interval above is individualized with a discussion of the risks and benefits of each modality
