+++
id           = "aml/AML-5"
gid          = "aml"
ref          = "AML-5"
page         = 38
title        = "Follow-up after induction with lower intensity therapy, when intensive induction is ineligible or declined"
nccn_version = "5.2026"
nccn_date    = "07/15/26"
generated    = "2026-08-27"
see_also     = ["AML-4", "AML-7", "AML-9", "AML-E", "AML-H", "AML-I"]

[facets]
disease   = "aml"
histology = "myeloid"
timepoint = ["induction", "transplant", "maintenance", "relapsed-refractory"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "prior_regimen"
type = "text"
[[variables]]
name = "bm_date"
type = "text"
[[variables]]
name = "remission_status"
type = "enum"
options = ["response", "no-response", "progression"]
[[variables]]
name = "mrd"
type = "text"
[[variables]]
name = "hct_candidate"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "donor"
type = "enum"
options = ["available", "not-available"]
+++

# Source

- NCCN Acute Myeloid Leukemia (Age ≥18 years) v5.2026, AML-5, p38
- Applies to follow-up after induction therapy with lower intensity therapy, in patients ineligible for intensive induction or who decline it
- Lower intensity therapy per Principles of Systemic Therapy for AML (AML-E)
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Previous lower intensity therapy ___ (prior_regimen)
- Bone marrow aspirate and biopsy done ___ (bm_date)
- Remission status ___ (remission_status)
- MRD ___ (mrd)
- Candidate for HCT ___ (hct_candidate)
- Donor ___ (donor)

# Restaging after lower intensity induction

- Bone marrow aspirate and biopsy, to document remission status
    - Timing is dependent on agent
- Measurable (minimal) residual disease (MRD) assessment, see AML-H
- Response criteria, see AML-I

# Response

- Allogeneic HCT
    - Patients who are deemed as candidates for HCT and who have an available donor should be transplanted in first remission
- Continue on lower intensity regimen that was previously used for induction, per AML-4

# No response or progression

- Therapy for Relapsed/Refractory Disease (AML-9)
- Best supportive care
    - Hydroxyurea
    - Transfusion support
    - See NCCN Guidelines for Palliative Care

# Next

- Response, go to Allogeneic HCT or continue the previous lower intensity regimen (AML-4)
- Maintenance, go to AML-7
- No response or progression, go to AML-9
- No response or progression, best supportive care, see NCCN Guidelines for Palliative Care
