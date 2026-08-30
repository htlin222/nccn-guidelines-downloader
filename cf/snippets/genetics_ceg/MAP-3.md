+++
id           = "genetics_ceg/MAP-3"
gid          = "genetics_ceg"
ref          = "MAP-3"
page         = 106
title        = "Genetic testing and surveillance for an at-risk family member when the familial MUTYH pathogenic variant is known"
nccn_version = "1.2026"
nccn_date    = "06/16/26"
generated    = "2026-08-30"
see_also     = ["MAP-1", "MAP-2", "FAP-C"]

[facets]
disease   = "genetics_ceg"
biomarker = "mutyh"
timepoint = ["genetic-testing", "screening", "surveillance"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "relationship_to_proband"
type = "text"
[[variables]]
name = "familial_pv"
type = "text"
[[variables]]
name = "mutyh_result"
type = "enum"
options = ["biallelic", "monoallelic", "no MUTYH PV", "not tested"]
[[variables]]
name = "colonoscopy_findings"
type = "text"
+++

# Source

- NCCN Genetic/Familial High-Risk Assessment: Colorectal, Endometrial, and Gastric v1.2026, MAP-3, p106
- Applies to a family history of MUTYH-associated polyposis with the familial pathogenic variant known
- Applies to an asymptomatic family member at risk
    - A family member at risk can be defined as a sibling of an affected individual and/or proband
    - Other individuals in a family may also be at risk of having MAP or a monoallelic MUTYH PV
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Asymptomatic
- Relationship to the proband: ___ (relationship_to_proband)
- Known PV in the family: ___ (familial_pv)
- MUTYH testing result: ___ (mutyh_result)
- Colonoscopy findings: ___ (colonoscopy_findings)

# Genetic testing

- Recommend MUTYH testing for the familial PVs
    - Siblings of a patient with MAP are recommended to have site-specific testing for the familial PVs
    - Full sequencing of MUTYH may be considered in an unaffected parent when the other parent has MAP
        - If the unaffected parent is found to not have a MUTYH PV, genetic testing in the children is not necessary to determine MAP status
        - If the unaffected parent is not tested, comprehensive testing of MUTYH should be considered in the adult children
        - If the unaffected parent is found to have one MUTYH PV, testing the adult children for the familial MUTYH PVs is indicated

# Surveillance if biallelic MUTYH PV

- Manage as MAP, see MAP-2

# Surveillance if sibling of a patient with MAP, not tested

- Discuss advantages of genetic testing, including avoidance of costs, burdens, and risks associated with frequent colonoscopy if biallelic mutation ruled out
- If genetic testing not completed
    - Begin high-quality colonoscopy no later than age 25–30 y
    - Repeat every 1–2 y if no polyps
    - If multiple surveillance exams without polyps on follow-up, may lengthen interval further based on clinical judgment
    - If polyps are found, see MAP-2
- Consider upper endoscopy beginning at age 30–35 y
    - Include complete visualization of the ampulla of Vater
        - Cap-assisted endoscopy may be adequate for visualization of the ampulla
    - See FAP-C for follow-up of duodenoscopic findings

# Surveillance if monoallelic (single copy) MUTYH PV / heterozygote (carrier)

- Manage per GENE-11

# Surveillance if no MUTYH PVs

- Follow the NCCN Guidelines for Colorectal Cancer Screening

# Next

- Biallelic MUTYH PV, go to MAP-2
- Not tested and polyps found, go to MAP-2
- Monoallelic (single copy) MUTYH PV / heterozygote (carrier), go to GENE-11
- No MUTYH PVs, go to the NCCN Guidelines for Colorectal Cancer Screening
