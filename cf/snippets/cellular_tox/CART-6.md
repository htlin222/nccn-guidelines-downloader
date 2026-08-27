+++
id           = "cellular_tox/CART-6"
gid          = "cellular_tox"
ref          = "CART-6"
page         = 12
title        = "Grading and management of CRS related to CAR T-cell therapy, grades 1 and 2"
nccn_version = "2.2026"
nccn_date    = "11/11/2025"
generated    = "2026-08-28"
see_also     = ["CART-1", "CART-7", "CART-7A"]

[facets]
disease   = "cellular_tox"
timepoint = "supportive"

[[variables]]
name = "product"
type = "text"
[[variables]]
name = "days_post_infusion"
type = "number"
[[variables]]
name = "temp"
type = "number"
[[variables]]
name = "hypotension"
type = "text"
[[variables]]
name = "oxygen"
type = "text"
[[variables]]
name = "organ_toxicity"
type = "text"
[[variables]]
name = "crs_grade"
type = "enum"
options = ["1", "2", "3", "4"]
+++

# Source

- NCCN Management of CAR T-Cell-Related Toxicities v2.2026, CART-6, p12
- CRS related to CAR T-cell therapy, grading and management of all grades, Grade 1 and Grade 2
- Grading per ASTCT Consensus Grading for Cytokine Release Syndrome and Neurologic Toxicity Associated with Immune Effector Cells
- See CART-1 for Principles of Patient Monitoring
- Footnotes on CART-7A
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (product) CAR T-cell product
- ___ (days_post_infusion) days after infusion
- Temperature ___ (temp) °C
- Hypotension and vasopressor requirement ___ (hypotension)
- Hypoxia and oxygen delivery ___ (oxygen)
- Organ toxicities ___ (organ_toxicity)
- CRS grade ___ (crs_grade)

# Grading rules

- Fever is defined as temperature >38°C not attributable to any other cause
    - In patients who have CRS then receive antipyretics or anticytokine therapy such as tocilizumab or steroids, fever is not required to grade subsequent CRS severity
    - In that case, CRS grading is driven by hypotension or hypoxia
- CRS grade is determined by the more severe event, hypotension or hypoxia, not attributable to any other cause
    - Example: temperature of 39.5°C, hypotension requiring 1 vasopressor, and hypoxia requiring low-flow nasal cannula is classified as grade 3 CRS
- Low-flow nasal cannula is defined as oxygen delivered at ≤6 L/min
    - Low flow also includes blow-by oxygen delivery, sometimes used in pediatrics
    - High-flow nasal cannula is defined as oxygen delivered at >6 L/min
- Organ toxicities should receive a thorough workup and appropriate management
    - They may be graded according to Common Terminology Criteria for Adverse Events (CTCAE) v5.0, but they do not influence CRS grading
- If IEC-HS is suspected, refer to treatment options in Hines MR, et al. Transplant Cell Ther 2023

# All grades

- Prompt and urgent intervention to prevent progression of CRS is required
- Rule out other causes of systemic inflammatory response
    - Infection
    - Malignancy progression
- Empiric treatment for infection is warranted in the patient with neutropenia
- Symptomatic management of organ toxicities
- See prescribing information for each specific agent for detailed management recommendations

# Grade 1, fever (≥38°C)

- Consider IV dexamethasone 10 mg every 24 hours for early-onset CRS (<72 hours after infusion)
    - Alternative steroids at an equivalent dose may be considered
    - Strongly consider antifungal prophylaxis and close monitoring for breakthrough infections per institutional guidelines in patients receiving steroids for CRS and/or neurotoxicity
- Consider 1 dose of IV tocilizumab 8 mg/kg over 1 hour (not to exceed 800 mg)
    - Assess for a history of clinically active diverticular disease before starting, because of increased risk of GI perforation with IL-6 inhibitors, and use with caution in those patients
    - An FDA-approved biosimilar is an appropriate substitute for any recommended systemic biologic therapy
    - Under conditions of limited tocilizumab availability, consider conservation strategies: limit tocilizumab to a maximum of 2 doses during a CRS episode, use steroids more aggressively when there is concurrent ICANS, and if necessary replace the second dose of tocilizumab with siltuximab or anakinra, although there is very limited evidence for this approach
- Sepsis screen and empiric broad-spectrum antibiotics
    - Consider granulocyte colony-stimulating factor (G-CSF) if neutropenic
    - GM-CSF is not recommended in the setting of CAR T-cell therapy
- Maintenance IV fluids for hydration

# Grade 2, fever with hypotension not requiring vasopressors and/or hypoxia requiring low-flow nasal cannula or blow-by

- IV dexamethasone 10 mg every 12–24 hours depending on the product
    - Alternative steroids at an equivalent dose may be considered
    - Strongly consider antifungal prophylaxis and close monitoring for breakthrough infections per institutional guidelines in patients receiving steroids for CRS and/or neurotoxicity
- IV tocilizumab 8 mg/kg over 1 hour (not to exceed 800 mg/dose)
    - May be repeated in 8 hours if no improvement
    - No more than 3 doses in 24 hours, with a maximum of 4 doses total
    - After each dose, assess the need for subsequent dosing
    - Assess for a history of clinically active diverticular disease before starting, because of increased risk of GI perforation with IL-6 inhibitors, and use with caution in those patients
    - An FDA-approved biosimilar is an appropriate substitute for any recommended systemic biologic therapy
    - Under conditions of limited tocilizumab availability, consider conservation strategies: limit tocilizumab to a maximum of 2 doses during a CRS episode, use steroids more aggressively when there is concurrent ICANS, and if necessary replace the second dose of tocilizumab with siltuximab or anakinra, although there is very limited evidence for this approach
- IV fluid bolus as needed (PRN)
- For persistent refractory hypotension after two fluid boluses and anti–IL-6 therapy
    - Start vasopressors
    - Consider transfer to intensive care unit (ICU)
    - Consider echocardiogram
    - Initiate other methods of hemodynamic monitoring
    - Telemetry, electrocardiogram (ECG), troponin, and b-type natriuretic peptide (BNP) if persistent tachycardia
- Manage per Grade 3 if no improvement within 24 hours after starting anti–IL-6 therapy

# Next

- Grade 3 and Grade 4 CRS, go to CART-7
- See CART-1 for Principles of Patient Monitoring
