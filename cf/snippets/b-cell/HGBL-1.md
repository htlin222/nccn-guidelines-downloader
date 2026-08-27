+++
id           = "b-cell/HGBL-1"
gid          = "b-cell"
ref          = "HGBL-1"
page         = 91
title        = "Classification and treatment options for high-grade B-cell lymphomas"
nccn_version = "4.2026"
nccn_date    = "05/20/26"
generated    = "2026-08-27"
see_also     = ["BCEL-1", "BCEL-7", "BCEL-8", "HGBL-A"]

[facets]
disease   = "b-cell"
histology = ["dlbcl", "large-cell"]
biomarker = ["myc", "bcl2", "bcl6", "double-hit"]
timepoint = ["primary-treatment", "induction", "consolidation", "relapsed-refractory"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "ps"
type = "text"
[[variables]]
name = "comorbidities"
type = "text"
[[variables]]
name = "myc"
type = "text"
[[variables]]
name = "bcl2"
type = "text"
[[variables]]
name = "bcl6"
type = "text"
[[variables]]
name = "classification"
type = "enum"
options = [
  "HGBL with MYC and BCL2 rearrangements with or without BCL6 rearrangements (ICC)",
  "DLBCL/HGBL with MYC and BCL2 rearrangements (WHO5)",
  "HGBL with MYC and BCL6 rearrangements (ICC)",
  "HGBL-NOS (ICC and WHO5)",
]
[[variables]]
name = "tdt"
type = "text"
[[variables]]
name = "ldh"
type = "text"
[[variables]]
name = "marrow"
type = "text"
[[variables]]
name = "cns"
type = "text"
[[variables]]
name = "ipi"
type = "text"
[[variables]]
name = "extent"
type = "enum"
options = ["localized", "early-stage", "advanced"]
+++

# Source

- NCCN B-Cell Lymphomas v4.2026, HGBL-1, p91
- High-Grade B-Cell Lymphomas (HGBL): classification and treatment options
- TdT expression has prognostic implications but does not change therapy
- References on HGBL-A
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Performance status ___ (ps)
- Comorbidities ___ (comorbidities)
- MYC rearrangement ___ (myc)
- BCL2 rearrangement ___ (bcl2)
- BCL6 rearrangement ___ (bcl6)
- Classification ___ (classification)
- TdT expression ___ (tdt)
- LDH ___ (ldh)
- Bone marrow involvement ___ (marrow)
- CNS involvement ___ (cns)
- IPI score ___ (ipi)
- Disease extent ___ (extent)

# Classification

- HGBL with MYC and BCL2 rearrangements with or without BCL6 rearrangements (ICC)
    - Same disease as DLBCL/HGBL with MYC and BCL2 rearrangements (WHO5)
    - Rearrangements detected by FISH
    - LBCL with MYC and BCL2 or BCL6 rearrangements are known as double-hit lymphomas
    - If all three rearrangements are present, they are referred to as triple-hit lymphomas
    - The vast majority are GCB-like lymphomas
    - Patients often present with poor prognostic variables: elevated LDH, bone marrow and CNS involvement, high IPI score
- HGBL with MYC and BCL6 rearrangements (ICC)
    - Rearrangements detected by FISH
    - Also within the double-hit definition
- HGBL-NOS (ICC and WHO5)
    - Includes cases that appear blastoid, or cases intermediate between DLBCL and BL
    - Must lack MYC and BCL2 with or without BCL6 rearrangement
    - Excludes HGBL with MYC and BCL2 with or without BCL6 rearrangement
    - Excludes clear DLBCL
    - Patients often present with poor prognostic parameters: elevated LDH, bone marrow and CNS involvement, high IPI score

# Treatment options, HGBL with MYC and BCL2 rearrangements with or without BCL6 rearrangements

- Clinical trial is recommended
- Consolidative ISRT is preferred for localized disease
    - Principles of Radiation Therapy (NHODG-D)
- The optimal treatment approach is not established; the following induction regimens have been used
    - DA-EPOCH + Rituximab
    - CHOP + Rituximab
        - May be associated with a suboptimal outcome
        - Could be considered for patients with low risk disease (IPI <2)
    - Mini-CHOP + Rituximab, may be considered for patients who are frail or older
    - Potentially toxic regimens; performance status and comorbidities should be considered
        - HyperCVAD + Rituximab
        - CODOX-M alternating with IVAC + Rituximab
- An FDA-approved biosimilar is an appropriate substitute for any recommended systemic biologic therapy
- Rituximab and hyaluronidase human injection for subcutaneous use may be substituted for rituximab, after the patient has received the first full dose of rituximab by intravenous infusion
- Special Considerations for Adolescent and Young Adult (AYA) Patients with B-Cell Lymphomas (NHODG-B 4 of 5)

# Treatment options, HGBL with MYC and BCL6 rearrangements

- Manage as DLBCL (BCEL-1)
- HGBL with BCL6 and MYC rearrangements appear to have outcomes equivalent to DLBCL NOS
    - However many of these patients were managed with DA-EPOCH + Rituximab
    - Therefore the optimal chemotherapy regimen remains uncertain

# Treatment options, HGBL-NOS

- Clinical trial is recommended
- Consider consolidative ISRT for early-stage disease
    - Principles of Radiation Therapy (NHODG-D)
- The optimal treatment approach is not established; the following induction regimens have been used
    - DA-EPOCH + Rituximab
    - Pola-R-CHP (category 2B)
    - CHOP + Rituximab
    - Mini-CHOP + Rituximab, may be considered for patients who are frail or older
    - Potentially toxic regimens; performance status and comorbidities should be considered
        - HyperCVAD + Rituximab
        - CODOX-M alternating with IVAC + Rituximab
- An FDA-approved biosimilar is an appropriate substitute for any recommended systemic biologic therapy
- Rituximab and hyaluronidase human injection for subcutaneous use may be substituted for rituximab, after the patient has received the first full dose of rituximab by intravenous infusion
- Special Considerations for Adolescent and Young Adult (AYA) Patients with B-Cell Lymphomas (NHODG-B 4 of 5)

# Next

- Relapsed or refractory disease at <12 months, go to BCEL-7
- Relapsed or refractory disease at >12 months, go to BCEL-8
