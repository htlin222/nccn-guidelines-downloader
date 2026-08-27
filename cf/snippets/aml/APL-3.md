+++
id           = "aml/APL-3"
gid          = "aml"
ref          = "APL-3"
page         = 18
title        = "Induction and consolidation for high-risk APL"
nccn_version = "5.2026"
nccn_date    = "07/15/26"
generated    = "2026-08-27"
see_also     = ["APL-1", "APL-4", "APL-5"]

[facets]
disease   = "aml"
histology = "myeloid"
timepoint = ["induction", "consolidation"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "cardiac_issues"
type = "enum"
options = ["none", "present"]
[[variables]]
name = "arsenic_available"
type = "enum"
options = ["available", "not-available", "contraindicated"]
[[variables]]
name = "regimen"
type = "text"
[[variables]]
name = "day28_bm"
type = "text"
+++

# Source

- NCCN Acute Promyelocytic Leukemia (Age 18 years and older) v5.2026, APL-3, p18
- Applies to APL treatment induction, high risk
- For patients with cardiac issues, see APL-4
- Regimen details: APL-B 2 of 6 and APL-B 3 of 6; references on APL-7
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, high-risk APL
- Cardiac issues: ___ (cardiac_issues)
    - If present, see APL-4
- Arsenic trioxide status: ___ (arsenic_available)
    - Regimens containing ATRA and arsenic trioxide should be administered unless there is a contraindication based on extenuating patient circumstances
- Regimen selected: ___ (regimen)
    - Use the regimen consistently through all components; do not mix induction from one trial with consolidation from another
- Treatment setting reviewed
    - For patients with APL being treated at a community center, collaborate with a center with expertise, which has been shown to reduce induction mortality
- Principles of Supportive Care for APL reviewed (APL-A)
- Early mortality risks counselled
    - Bleeding
    - Differentiation syndrome
    - Infection
    - Persistent disease is rare

# Induction, preferred regimens

- ATRA + idarubicin + arsenic trioxide
    - Begin prophylaxis with prednisone; the optimal duration of steroid prophylaxis is unknown
    - If differentiation syndrome develops, change to dexamethasone
- or ATRA + daily arsenic trioxide + gemtuzumab ozogamicin
- or ATRA + intermittent arsenic trioxide + gemtuzumab ozogamicin
    - Begin prophylaxis with prednisone; the optimal duration of steroid prophylaxis is unknown
    - If differentiation syndrome develops, change to dexamethasone
- For all of the above, lower doses of ATRA (25 mg/m2) in divided doses until clinical remission may be used in children and adolescents

# Induction, useful in certain circumstances

- Applies if arsenic is not available or contraindicated during induction
- ATRA + daunorubicin x 4 days + cytarabine
- or ATRA + daunorubicin x 3 days + cytarabine
- or ATRA + idarubicin
- For all of the above, lower doses of ATRA (25 mg/m2) in divided doses until clinical remission may be used in children and adolescents

# Remission assessment

- BM aspirate and biopsy at day 28 to document remission: ___ (day28_bm)
    - If no evidence of morphologic disease (<5% blasts and no abnormal promyelocytes), discontinue ATRA and arsenic trioxide to allow for peripheral blood recovery, since arsenic trioxide can be associated with significant myelosuppression
    - If evidence of morphologic disease, continue ATRA and arsenic trioxide and repeat BM 1 week later
    - The presence of measurable cytogenetic and molecular markers post-induction does not carry prognostic or therapeutic implications
- For all patients with high-risk APL, consider LP before proceeding with consolidation (APL-A)
- For regimens using high cumulative doses of cardiotoxic agents, consider reassessing cardiac function prior to each anthracycline/mitoxantrone-containing course

# Next

- Document remission, then proceed with consolidation
- Continue consolidation as per protocol, see references and APL-B 2 of 6 (preferred regimens)
- Continue consolidation as per protocol, see references and APL-B 3 of 6 (useful in certain circumstances regimens, if arsenic is not available or contraindicated during induction)
- Post-Consolidation Therapy, go to APL-5
