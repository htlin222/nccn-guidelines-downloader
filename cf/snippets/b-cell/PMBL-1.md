+++
id           = "b-cell/PMBL-1"
gid          = "b-cell"
ref          = "PMBL-1"
page         = 84
title        = "First-line therapy, response assessment, and follow-up for primary mediastinal large B-cell lymphoma"
nccn_version = "4.2026"
nccn_date    = "05/20/26"
generated    = "2026-08-27"
see_also     = ["DIAG-1", "BCEL-1"]

[facets]
disease   = "b-cell"
histology = "dlbcl"
timepoint = ["primary-treatment", "surveillance", "relapsed-refractory"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "other_sites"
type = "text"
[[variables]]
name = "regimen"
type = "text"
[[variables]]
name = "cycles_completed"
type = "text"
[[variables]]
name = "pet_5ps"
type = "enum"
options = ["1", "2", "3", "4", "5", "not done"]
[[variables]]
name = "residual_mass"
type = "text"
+++

# Source

- NCCN B-Cell Lymphomas v4.2026, PMBL-1, p84
- Applies to primary mediastinal large B-cell lymphoma (PMBL)
- Optimal first-line therapy for PMBL is more controversial than other subtypes; the most commonly used treatment options are listed below
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- PMBL, primary site of disease in the anterior mediastinum
    - With or without other sites: ___ (other_sites)
    - Histology of DLBCL
    - Clinical pathologic correlation is required to establish the diagnosis
    - PMBL overlaps with MGZL, which has intermediate features between Hodgkin lymphoma and PMBL and unique diagnostic characteristics, see Mediastinal Gray Zone Lymphoma (BCEL-B 2 of 2)
    - For an adolescent or young adult, see Special Considerations for Adolescent and Young Adult (AYA) Patients with B-Cell Lymphomas (NHODG-B 4 of 5)
- First-line regimen given: ___ (regimen)
- Cycles completed: ___ (cycles_completed)
- Restaging PET/CT 5-PS score: ___ (pet_5ps)
- Residual mediastinal mass: ___ (residual_mass)

# Before starting first-line therapy

- Consider prophylaxis for tumor lysis syndrome (NHODG-B)
- See monoclonal antibody and viral reactivation (NHODG-B)
- An FDA-approved biosimilar is an appropriate substitute for any recommended systemic biologic therapy in the NCCN Guidelines
- Rituximab and hyaluronidase human injection for subcutaneous use may be substituted for rituximab, only after the patient has received the first full dose of rituximab by intravenous infusion

# First-line therapy

- Dose-adjusted EPOCH + rituximab (DA-EPOCH-R) x 6 cycles
- or RCHOP-14 x 4–6 cycles
- or RCHOP-21 x 6 cycles
- or RCHOP-14 x 4 cycles, followed by consolidation with ICE x 3 cycles ± rituximab (category 2B)
- Then restage with PET/CT
    - Interpret the PET/CT via the PET 5-PS (NHODG-C 3 of 3)
    - Response defined by the Lugano Response Criteria for Non-Hodgkin Lymphoma (NHODG-C)

# Response assessment

- Complete response, PET negative (5-PS 1–3)
    - After DA-EPOCH + R x 6 cycles, active surveillance
    - After RCHOP-14 x 6 cycles, ISRT or active surveillance
    - After RCHOP-21 x 6 cycles, ISRT or active surveillance
    - After RCHOP-14 x 4 cycles followed by consolidation with ICE x 3 cycles ± rituximab, ISRT or active surveillance
    - ISRT per Principles of Radiation Therapy (NHODG-D)
- Partial response, PET positive (5-PS 4)
    - Persistent PET/CT positive masses at end of treatment after DA-EPOCH-R, 5-PS 4 and on visual inspection demonstrating minimal uptake above liver, can be observed with follow-up scans without biopsy
    - Otherwise repeat biopsy
        - Residual mediastinal masses are common, and post-treatment PET/CT is essential
        - Biopsy of a PET/CT positive mass is recommended if additional systemic treatment is contemplated
        - Biopsy negative, ISRT followed by restaging with PET/CT
        - Biopsy positive, relapsed/refractory therapy
- No response or progressive disease, PET positive (5-PS 5)
    - Repeat biopsy
        - Biopsy of a PET/CT positive mass is recommended if additional systemic treatment is contemplated
    - Relapsed/refractory therapy

# Follow-up

- Clinical
    - H&P and labs, every 3–6 mo for 5 y, and then annually or as clinically indicated
- Imaging
    - C/A/P CT scan with contrast, no more often than every 6 mo for 2 y after completion of treatment, then only as clinically indicated
    - Surveillance imaging is used for monitoring asymptomatic patients
    - When a site of disease can only be visualized on PET/CT scan (eg, bone), it is appropriate to proceed with PET/CT scans for surveillance

# Next

- Complete response, go to active surveillance and follow-up above
- Relapse, or relapsed/refractory disease, relapsed/refractory therapy
    - Pembrolizumab
    - or Nivolumab ± brentuximab vedotin (category 2B)
        - Responses with BV have been seen in patients with a low level of CD30 positivity, and any level of CD30 positivity is acceptable for the use of BV-based regimens
    - or manage as relapsed/refractory DLBCL
        - Relapse <12 mo, go to BCEL-7
        - Relapse >12 mo, go to BCEL-8
