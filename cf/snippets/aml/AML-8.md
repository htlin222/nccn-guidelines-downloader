+++
id           = "aml/AML-8"
gid          = "aml"
ref          = "AML-8"
page         = 42
title        = "Surveillance after consolidation, and therapy choice at relapse or refractory disease"
nccn_version = "5.2026"
nccn_date    = "07/15/26"
generated    = "2026-08-27"
see_also     = ["AML-7", "AML-9", "AML-H", "AML-I"]

[facets]
disease   = "aml"
histology = "myeloid"
stage     = ["recurrent", "refractory"]
biomarker = ["flt3", "idh1", "idh2", "any"]
timepoint = ["surveillance", "relapsed-refractory", "transplant"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "time_since_consolidation"
type = "text"
[[variables]]
name = "cbc"
type = "text"
[[variables]]
name = "platelets"
type = "text"
[[variables]]
name = "smear"
type = "enum"
options = ["normal", "abnormal"]
[[variables]]
name = "cytopenias"
type = "enum"
options = ["present", "absent"]
[[variables]]
name = "molecular_status"
type = "text"
[[variables]]
name = "disease_status"
type = "enum"
options = ["remission", "relapse", "refractory"]
[[variables]]
name = "actionable_mutations"
type = "text"
[[variables]]
name = "donor_status"
type = "text"
+++

# Source

- NCCN Acute Myeloid Leukemia (Age ≥18 years) v5.2026, AML-8, p42
- Applies after completion of consolidation
- Measurable (minimal) residual disease assessment: AML-H
- Response criteria: AML-I
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Time since completion of consolidation ___ (time_since_consolidation)
- CBC ___ (cbc)
- Platelets ___ (platelets)
- Peripheral smear ___ (smear)
- Cytopenias ___ (cytopenias)
- Molecular remission status ___ (molecular_status)
- Disease status ___ (disease_status)
- Actionable gene mutation status ___ (actionable_mutations)
- Donor status ___ (donor_status)

# Surveillance

- Studies are ongoing to evaluate the role of molecular monitoring in the surveillance for early relapse in patients with AML (Discussion)
- CBC and platelets
    - Every 1–3 mo for 2 y
    - Then every 3–6 mo up to 5 y
- BM aspirate and biopsy
    - Only if peripheral smear is abnormal, or cytopenias develop
- Confirm molecular remission, if applicable (AML-H)
- Monitor for molecular relapse, if applicable (AML-H)

# At relapse

- Donor search initiated at first relapse
    - In appropriate patients
    - Concomitant with institution of other therapy
- Molecular profiling to determine mutation status of actionable genes
    - Molecular and cytogenetic analyses are suggested, as they may assist with selection of therapy and appropriate clinical trials (Discussion)
    - Include testing for IDH1/IDH2
    - Include testing for FLT3 mutations
    - Include testing for KMT2A rearrangements
    - Repeat molecular testing at each relapse or progression
- Response criteria: AML-I

# Options for relapsed/refractory disease

- Clinical trial (strongly preferred)
- Targeted therapy alone or in combination (AML-9), followed by allogeneic HCT
- Chemotherapy (AML-9), followed by allogeneic HCT
- Best supportive care, see NCCN Guidelines for Palliative Care
- Useful in Certain Circumstances
    - Allogeneic HCT
        - May be considered for patients who did not achieve CR following first induction therapy
        - May be considered for those with first relapse who had previously been scheduled for allogeneic HCT

# Next

- Targeted therapy or chemotherapy for relapsed/refractory disease, go to AML-9
- Measurable (minimal) residual disease assessment, go to AML-H
- Response assessment, go to AML-I
