+++
id           = "colorectal_screening/CSCR-6"
gid          = "colorectal_screening"
ref          = "CSCR-6"
page         = 17
title        = "Blood-based screening: bb-ctDNA testing in an average-risk individual, and what to do with the result"
nccn_version = "2.2026"
nccn_date    = "04/23/2026"
generated    = "2026-08-30"
see_also     = ["CSCR-1", "CSCR-1A", "CSCR-3", "CSCR-4", "CSCR-7A"]

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
name = "willing_other_modality"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "bb_ctdna_result"
type = "enum"
options = ["positive", "negative"]
[[variables]]
name = "test_date"
type = "text"
+++

# Source

- NCCN Colorectal Cancer Screening v2.2026, CSCR-6, p17
- Applies to individuals whose risk status is average risk (CSCR-1)
    - CRC screening is recommended in adults aged 45–75 years who might have a life expectancy of ≥10 years
    - Age 76–85 years: individualize the decision, discussing risks and benefits based on comorbidity status and estimated life expectancy; eligible individuals not previously screened are most likely to benefit in this age group
    - Age <50 years: the Panel agrees the data are stronger to support beginning screening at 50 years, but lower-level evidence supports a benefit for screening earlier
    - When initiating screening, discuss potential harms/risks and benefits, and consider all recommended CRC screening options
    - Advanced SSP/SSL(s) are generally considered to have a comparable cancer risk and are managed similarly to advanced adenomas, rather than high-risk adenomas, a definition that includes multiplicity
- Footnotes on CSCR-7A
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Risk status confirmed as average risk (CSCR-1)
- Estimated life expectancy ___ (life_expectancy)
- Willing to undergo screening through another modality: ___ (willing_other_modality)
- bb-ctDNA test date ___ (test_date)
- bb-ctDNA result: ___ (bb_ctdna_result)

# Screening modality and schedule

- Blood-based circulating tumor DNA (bb-ctDNA) testing
- This test is only recommended for individuals who would not be willing to undergo screening through another modality
    - Modest performance in CRC detection
    - Modest performance in polyp detection, particularly among advanced precancerous lesions
- Screening should be individualized
    - Include a discussion of the risks and benefits of each modality
    - See Screening Modality and Schedule (CSCR-A)
- For details on classification, see footnote c on CSCR-1A
- For definitions of commonly used terms, see CSRC-GLOS 1 of 7

# Evaluation of screening findings

- Positive bb-ctDNA
    - Colonoscopy as soon as possible and no later than within 9 mo
    - If colonoscopy is incomplete or the preparation is suboptimal, repeat it as soon as possible and no later than 1 year after the index procedure
    - For patients who have had incomplete colonoscopy, consider CTC or balloon-assisted colonoscopy or capsule colonoscopy as alternative exams for completing the screening
- Negative bb-ctDNA
    - Rescreen with any modality in 3 y
    - The choice of that modality is again individualized, with a discussion of the risks and benefits of each modality (CSCR-A)

# Next

- Positive bb-ctDNA, follow the colonoscopy pathway (CSCR-4)
- Negative bb-ctDNA, rescreen with any modality in 3 y
