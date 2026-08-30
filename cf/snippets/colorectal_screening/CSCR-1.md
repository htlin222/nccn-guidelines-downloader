+++
id           = "colorectal_screening/CSCR-1"
gid          = "colorectal_screening"
ref          = "CSCR-1"
page         = 11
title        = "Risk assessment for colorectal cancer, sorting average risk from increased risk"
nccn_version = "2.2026"
nccn_date    = "04/23/2026"
generated    = "2026-08-30"
see_also     = ["CSCR-2", "CSCR-3", "CSCR-8", "CSCR-17"]

[facets]
disease   = "colorectal_screening"
timepoint = ["screening", "prevention"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "life_expectancy"
type = "text"
[[variables]]
name = "personal_history"
type = "text"
[[variables]]
name = "family_history"
type = "text"
[[variables]]
name = "prior_screening"
type = "text"
[[variables]]
name = "risk_category"
type = "enum"
options = ["average", "increased"]
+++

# Source

- NCCN Colorectal Cancer Screening v2.2026, CSCR-1, p11
- Primary and secondary prevention of colorectal cancer, risk assessment
- Footnotes on CSCR-1A
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Estimated life expectancy ___ (life_expectancy)
- Personal history ___ (personal_history)
- Family history ___ (family_history)
- Prior screening ___ (prior_screening)
- Risk category ___ (risk_category)

# Average risk, all of the following

- Age 45-75 years
    - Screening is recommended in adults aged 45-75 years who might have a life expectancy of 10 years or more
    - Between ages 76-85 years the decision to screen should be individualized
        - Discuss risks and benefits based on comorbidity status and estimated life expectancy
        - Eligible individuals who have not been previously screened are most likely to benefit in this age group
- No personal history of adenoma or sessile serrated polyp/sessile serrated lesion (SSP/SSL[s])
    - Sessile serrated polyp (SSP), sessile serrated lesion (SSL), and sessile serrated adenoma are synonymous
    - SSP/SSL(s) are a type of serrated polyp that are not dysplastic, but can develop foci of dysplasia and are then termed SSP/SSL with dysplasia (SSP/SSL-d)
    - SSP/SSL(s) are in general managed like tubular adenomas
    - SSP/SSL-d with any grade dysplasia are managed like high-risk adenomas, but may need even more frequent surveillance
    - Classification systems for serrated lesions are evolving; see CSCR-GLOS 3 of 7
- No personal history of CRC
- No personal history of inflammatory bowel disease (IBD)
- No personal history of high-risk CRC hereditary syndromes
    - List of syndromes on CSCR-2
- No personal history of cystic fibrosis
- No personal history of childhood cancer
- Negative family history of confirmed advanced adenoma in first-degree relatives
    - Advanced adenoma defined as 1 cm or larger, villous or tubulovillous histology, or high-grade dysplasia
- Negative family history of an advanced SSP/SSL(s) in first-degree relatives
    - Advanced SSP/SSL defined as 1 cm or larger, any dysplasia
    - Advanced SSP/SSL(s) are generally considered to have a comparable cancer risk and are managed similarly to advanced adenomas, rather than high-risk adenomas, a definition that includes multiplicity
- Negative family history of CRC
    - Current risk estimates for a family history of CRC in only second- and third-degree relatives may not be sufficiently elevated to recommend increased screening
    - There are some data that a second-, and to a lesser degree a third-degree relative with early-onset (younger than 50 years old) CRC increases risk of both CRC and early-onset CRC
    - Some combinations of affected first-, second-, and third-degree relatives may increase risk sufficiently to alter screening guidelines
    - If there are multiple distant relatives affected, consider evaluation for an inherited CRC syndrome in the family

# Increased risk, any of the following

- Personal history of adenoma(s) or SSP/SSL(s)
- Personal history of CRC
- Personal history of IBD
    - Ulcerative colitis
    - Crohn's colitis
- Personal history of cystic fibrosis
- Personal history of childhood, adolescent, and young adult cancer
    - Includes individuals who meet criteria for therapy-associated polyposis
- Positive family history

# Choice of screening modality

- For individuals at average risk, the choice of a particular screening modality should include a conversation with the patient concerning their preference and local modality availability
- For individuals at increased risk, colonoscopy is the preferred method

# Next

- Average risk, go to average-risk screening and evaluation (CSCR-3)
- Personal history of adenoma(s) or SSP/SSL(s), go to follow-up of clinical findings, polyp found at colonoscopy (CSCR-8)
- Personal history of CRC, go to diagnosis of colorectal cancer (CSCR-11)
- Personal history of IBD, go to increased risk screening based on personal history of inflammatory bowel disease (CSCR-12)
- Personal history of cystic fibrosis, go to increased risk based on personal history of cystic fibrosis (CSCR-16)
- Personal history of childhood, adolescent, and young adult cancer, go to increased risk based on personal history of childhood, adolescent, and young adult cancer (CSCR-18)
- Positive family history, go to increased risk based on positive family history (CSCR-17)
