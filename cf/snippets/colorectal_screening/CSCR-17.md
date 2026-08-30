+++
id           = "colorectal_screening/CSCR-17"
gid          = "colorectal_screening"
ref          = "CSCR-17"
page         = 32
title        = "Increased risk based on positive family history: when to begin colonoscopy and how often to repeat it"
nccn_version = "2.2026"
nccn_date    = "04/23/2026"
generated    = "2026-08-30"
see_also     = ["CSCR-1", "CSCR-8", "CSCR-9"]

[facets]
disease   = "colorectal_screening"
timepoint = ["screening", "surveillance"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "affected_relatives"
type = "text"
[[variables]]
name = "closest_degree"
type = "enum"
options = ["first-degree", "second-degree", "third-degree"]
[[variables]]
name = "earliest_crc_age"
type = "number"
[[variables]]
name = "relative_advanced_polyp_age"
type = "number"
[[variables]]
name = "last_colonoscopy_date"
type = "text"
[[variables]]
name = "last_colonoscopy_findings"
type = "text"
+++

# Source

- NCCN Colorectal Cancer Screening v2.2026, CSCR-17, p32
- Applies to increased risk based on positive family history
    - Not meeting criteria for consideration of a hereditary cancer syndrome, or appropriate testing negative for a hereditary cancer syndrome
    - If the patient meets the criteria for an inherited colorectal syndrome, see General Criteria for Testing and Genetic Evaluation for Hereditary Syndromes Associated with Colorectal, Endometrial, and Gastric Cancer (HRS-1) in the NCCN Guidelines for Genetic/Familial High-Risk Assessment: Colorectal, Endometrial, and Gastric
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Affected relatives with CRC: ___ (affected_relatives)
- Closest degree of relationship affected: ___ (closest_degree)
- Earliest age of CRC diagnosis in the family: ___ (earliest_crc_age)
- Age of onset of advanced adenoma(s), advanced SSP/SSL(s), or TSA(s) in a first-degree relative: ___ (relative_advanced_polyp_age)
- Date of last colonoscopy: ___ (last_colonoscopy_date)
- Findings at last colonoscopy: ___ (last_colonoscopy_findings)

# Family history criterion: 1 or more first-degree relative with CRC at any age

- Begin colonoscopy at age 40 y, or 10 y before the earliest diagnosis of CRC, whichever is first
- Repeat every 5 y
    - Or sooner depending on the size, number, and pathology of polyps removed on each exam
    - Multiple (2 or more) negative colonoscopies may support stepwise lengthening in the colonoscopy interval

# Family history criterion: second- and third-degree relatives with CRC at any age

- Begin colonoscopy at age 45 y
- Repeat every 10 y, or if positive, repeat per colonoscopy findings
- Current risk estimates for a family history of CRC in only second- and third-degree relatives may not be sufficiently elevated to recommend increased screening
    - There are some data showing that having a second-degree, and to a lesser degree a third-degree, relative with early-onset (<50 years old) CRC increases risk of both CRC and early-onset CRC
    - Some combinations of affected first-, second-, and third-degree relatives may increase risk sufficiently to alter screening guidelines
    - If there are multiple distant relatives affected, consider evaluation for an inherited colorectal syndrome in the family

# Family history criterion: first-degree relative with confirmed advanced adenoma(s) or advanced SSP/SSL(s) at any age

- Advanced adenoma(s) defined as high-grade dysplasia, 1 cm or larger, villous or tubulovillous histology, or TSA
- Advanced SSP/SSL(s) defined as 1 cm or larger with any dysplasia
    - Advanced SSP/SSL(s) are generally considered to have a comparable cancer risk and are managed similarly to advanced adenomas
    - Data concerning the specific risk of CRC in first-degree relatives of individuals with advanced serrated polyps are limited; it is reasonable to follow the same recommendations used for first-degree relatives of those with advanced adenomas
- Begin colonoscopy at age 40 y, or at the age of onset of advanced adenoma(s), advanced SSP/SSL(s), or TSA(s) in the relative, whichever is first
- Repeat every 5-10 y, or if positive, repeat per colonoscopy findings
    - Multiple (2 or more) negative colonoscopies may support stepwise lengthening in the colonoscopy interval

# Factors that modify age to begin screening and colonoscopy intervals

- Colonoscopy intervals may be further modified based on personal and family history as well as on individual preferences
- Age of the individual undergoing screening
- Specifics of the family history
    - Number and age of onset of all affected relatives
    - Whether relatives had an inciting cause such as IBD
- Size of the family
- Completeness of the family history
- Participation in screening
- Colonoscopy findings in family members

# Communicating the recommendation to relatives

- For a patient with advanced adenoma(s) or advanced SSP/SSL(s), the endoscopist should add specific recommendations for first-degree relatives (ie, siblings, parents, children) to the endoscopy report
    - Alternatively, generate a letter meant to be shared with first-degree relatives, to increase adherence when this applies
    - Examples of patient letters can be found at the National Colorectal Cancer Roundtable

# Next

- 1 or more first-degree relative with CRC: colonoscopy from age 40 y or 10 y before the earliest CRC diagnosis, then every 5 y
- Second- and third-degree relatives with CRC only: colonoscopy from age 45 y, then every 10 y or per colonoscopy findings
- First-degree relative with advanced adenoma(s) or advanced SSP/SSL(s): colonoscopy from age 40 y or the relative's age of onset, then every 5-10 y or per colonoscopy findings
- Meets criteria for an inherited colorectal syndrome: see HRS-1 in the NCCN Guidelines for Genetic/Familial High-Risk Assessment: Colorectal, Endometrial, and Gastric
