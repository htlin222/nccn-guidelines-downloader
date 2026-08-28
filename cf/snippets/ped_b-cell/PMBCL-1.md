+++
id           = "ped_b-cell/PMBCL-1"
gid          = "ped_b-cell"
ref          = "PMBCL-1"
page         = 17
title        = "Induction therapy and end-of-treatment response assessment for primary mediastinal large B-cell lymphoma"
nccn_version = "1.2026"
nccn_date    = "03/20/26"
generated    = "2026-08-28"
see_also     = ["PMBCL-2", "PBCL-B", "PBCL-C", "DIS-A"]

[facets]
disease   = "ped_b-cell"
histology = "large-cell"
timepoint = ["induction", "primary-treatment", "surveillance"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "diagnosis_status"
type = "enum"
options = ["confirmed", "pending"]
[[variables]]
name = "regimen"
type = "text"
[[variables]]
name = "cycles_given"
type = "number"
[[variables]]
name = "deauville"
type = "enum"
options = ["1", "2", "3", "4", "5"]
[[variables]]
name = "residual_mass"
type = "enum"
options = ["present", "absent"]

+++

# Source

- NCCN Pediatric Aggressive Mature B-Cell Lymphomas v1.2026, PMBCL-1, p17
- Applies to primary mediastinal large B-cell lymphoma (PMBCL), induction therapy / initial treatment
- Definitive diagnosis may not be feasible before beginning treatment
    - Short course of COP regimen can be used while waiting to confirm the diagnosis of PMBCL
- Response Criteria (PBCL-C)
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Diagnosis of PMBCL: ___ (diagnosis_status)
- Induction regimen given: ___ (regimen)
- Cycles completed: ___ (cycles_given)
- EOT FDG-PET/CT Deauville score: ___ (deauville)
- Residual mediastinal mass: ___ (residual_mass)

# Induction therapy / initial treatment

- Clinical trial (preferred)
    - Optimal treatment has not been established
    - Enrollment in a clinical trial is recommended
- In the absence of a clinical trial, suggested regimens include
    - Dose-adjusted EPOCH + rituximab (preferred) (6 cycles)
        - Principles of Systemic Therapy (PBCL-B)
        - An FDA-approved biosimilar is an appropriate substitute for any recommended systemic biologic therapy
    - CHOP + rituximab (6 cycles), with or without radiation therapy (RT)
        - Principles of Systemic Therapy (PBCL-B)
        - An FDA-approved biosimilar is an appropriate substitute for any recommended systemic biologic therapy
        - Avoidance of RT is strongly preferred in pediatric patients, to reduce the risk of late complications from normal tissue damage
        - There are not enough data on the use of RT in pediatric patients with PMBCL
        - When RT is used, deliver it with advanced RT techniques to minimize dose to organs at risk (OARs): heart, cardiac substructures, lungs, breast, spinal cord
        - See Principles of Radiation Therapy in the NCCN Guidelines for Pediatric Hodgkin Lymphoma
        - Normal tissue dose constraints are in Principles of Radiation Therapy in the NCCN Guidelines for Hodgkin Lymphoma
    - LMB-modified B/C chemotherapy + rituximab
        - Principles of Systemic Therapy (PBCL-B)
        - An FDA-approved biosimilar is an appropriate substitute for any recommended systemic biologic therapy
        - Remission assessment was performed after the second consolidation course
        - At the EOT, if PET/CT is positive, or a large residual tumor remains, then biopsy/removal of the residual mass is recommended
        - No treatment decisions were to be based on PET/CT results only

# Response assessment at EOT

- PET/CT scan is essential at EOT
- Residual mediastinal masses are common
- Biopsy of PET-positive mass is recommended if additional systemic treatment is contemplated
- Score the response by Response Criteria (PBCL-C)
- CR: PET negative, Deauville 1–3
- Less than CR: PET positive, Deauville 4–5
    - Consider repeat FDG-PET/CT or CT in 6–8 weeks
    - If repeat FDG-PET/CT is positive, or there is increase in size of residual mass, then biopsy of PET-positive mass is recommended

# Follow-up after CR

- H&P
    - Every 1–3 months for 1 year
    - Every 3 months for year 2
    - Every 6 months for year 3 and annually thereafter
- CBC with differential as clinically indicated
- No surveillance scans needed
- Watch for relapse
    - In the vast majority of patients, relapse occurs within 18 months of diagnosis
    - EOT PET scan can have a fair number of false positives
    - Biopsy is warranted to confirm relapse

# Late effects monitoring

- Attention to cardiac function
- Attention to gonadal function
- Attention to neurocognitive function
- Attention to bone health
- Attention to risk of secondary leukemia
- See Children's Oncology Group Survivorship Guidelines; see also the NCCN Guidelines for Survivorship
- Psychosocial support and counseling: assess for distress
    - Refer to NCCN Distress Thermometer and Problem List, which includes social determinants of health
    - See NCCN Guidelines for Distress Management (DIS-A)

# Next

- Less than CR (PET positive; Deauville 4–5), relapse or refractory disease (PMBCL-2)
- Relapse after CR (PMBCL-2)
