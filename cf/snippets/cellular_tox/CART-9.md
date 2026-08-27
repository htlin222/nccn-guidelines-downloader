+++
id           = "cellular_tox/CART-9"
gid          = "cellular_tox"
ref          = "CART-9"
page         = 16
title        = "Treatment of CAR T-cell-related neurotoxicity by grade, with and without concurrent CRS"
nccn_version = "2.2026"
nccn_date    = "11/11/2025"
generated    = "2026-08-28"
see_also     = ["CART-4", "CART-8", "CART-9A"]

[facets]
disease   = "cellular_tox"
timepoint = "supportive"

[[variables]]
name = "neurotox_grade"
type = "enum"
options = ["1", "2", "3", "4"]
[[variables]]
name = "cognitive_assessment"
type = "text"
[[variables]]
name = "motor_weakness"
type = "text"
[[variables]]
name = "crs_grade"
type = "text"
[[variables]]
name = "neuroimaging"
type = "text"
[[variables]]
name = "eeg"
type = "text"
[[variables]]
name = "electrolytes"
type = "text"
+++

# Source

- NCCN Management of CAR T-Cell-Related Toxicities v2.2026, CART-9, p16
- Applies to CAR T-cell-related neurotoxicity (ICANS), all grades
- Footnotes on CART-9A
- All recommendations category 2A unless otherwise indicated

# Assessment

- Neurotoxicity grade ___ (neurotox_grade)
- Cognitive assessment ___ (cognitive_assessment)
- Motor weakness ___ (motor_weakness)
- Concurrent CRS ___ (crs_grade)
- Brain MRI or CT ___ (neuroimaging)
- EEG ___ (eeg)
- Electrolytes ___ (electrolytes)

# Assessment and supportive care, all grades

- Neurologic assessment and grading at least twice a day
    - Include cognitive assessment
    - Include motor weakness
- MRI of the brain with and without contrast for grade 2 or higher neurotoxicity
    - Brain CT if MRI is not feasible
- Neurology consultation at first sign of neurotoxicity
- Electroencephalogram (EEG) for seizure activity for grade 2 or higher neurotoxicity
- Aspiration precautions
- IV hydration
- Consider prophylactic anakinra for patients at high risk of developing high-grade ICANS
- Follow and correct electrolyte abnormalities
- Use caution when prescribing medications that can cause central nervous system (CNS) depression
    - Aside from those needed for seizure prophylaxis or treatment
- See CART-4 for Non-ICANS neurotoxicity associated with anti-BCMA CAR T-cell therapy

# Treatment, no concurrent CRS

- If dexamethasone is used for prophylaxis of CRS, there may be an increased risk of grade 4 and prolonged neurologic toxicities
- Grade 1
    - Supportive care
    - Consider 1 dose of IV dexamethasone 10 mg and reassess
- Grade 2
    - Supportive care
    - 1 dose of IV dexamethasone 10 mg and reassess
    - Can repeat every 6-12 hours if no improvement
- Grade 3
    - Assess for papilledema or other signs of elevated intracranial pressure (ICP)
        - If ICP is excluded, a diagnostic lumbar puncture may be considered for grade 3-4 neurotoxicity
    - ICU care is recommended
    - IV dexamethasone 10 mg every 6 hours, or IV methylprednisolone 1 mg/kg every 12 hours
        - For axicabtagene ciloleucel or brexucabtagene autoleucel, IV methylprednisolone 1 g daily for 3-5 days may be preferable
        - Strongly consider antifungal prophylaxis and close monitoring for breakthrough infections per institutional guidelines while on steroids
    - If not responsive to steroids or worsening symptoms, consider adding anakinra 100 mg every 6 hours
    - Consider repeat neuroimaging (CT or MRI) every 2-3 days if persistent grade 3 or higher neurotoxicity
- Grade 4
    - Assess for papilledema or other signs of elevated intracranial pressure (ICP)
        - If ICP is excluded, a diagnostic lumbar puncture may be considered for grade 3-4 neurotoxicity
    - ICU care, consider mechanical ventilation for airway protection
    - High-dose steroids
        - For example, IV methylprednisolone 1000 mg/day (may consider twice a day) for 3 days
        - Followed by rapid taper at 250 mg every 12 hours for 2 days, 125 mg every 12 hours for 2 days, and 60 mg every 12 hours for 2 days
        - Strongly consider antifungal prophylaxis and close monitoring for breakthrough infections per institutional guidelines while on steroids
    - If not responsive to steroids, consider adding anakinra 100 mg every 6 hours
    - Consider repeat neuroimaging (CT or MRI) every 2-3 days if persistent grade 3 or higher neurotoxicity
    - Treat convulsive status epilepticus per institutional guidelines

# Additional therapy if concurrent CRS

- Grade 1: IV tocilizumab 8 mg/kg over 1 hour, not to exceed 800 mg/dose
    - Assess for history of clinically active diverticular disease before starting, and use with caution in those patients, due to increased risk of GI perforation with IL-6 inhibitors
    - An FDA-approved biosimilar is an appropriate substitute
    - Under limited tocilizumab availability, consider one of the following conservation strategies
        - Limit tocilizumab use to a maximum of 2 doses during a CRS episode
        - Consider using steroids more aggressively during a CRS episode when there is concurrent ICANS
        - If necessary, consider replacing the second dose of tocilizumab with siltuximab or anakinra, although evidence for this is very limited
    - Repeat tocilizumab every 8 hours PRN if not responsive to IV fluids or increasing supplemental oxygen
        - Limit to a maximum of 3 doses in a 24-hour period
        - Maximum total of 4 doses
- Grade 2: anti-IL-6 therapy as per grade 1
    - Consider transferring patient to ICU if neurotoxicity associated with grade 2 or higher CRS
- Grade 3: anti-IL-6 therapy as per grade 1
- Grade 4: anti-IL-6 therapy as per grade 1

# Next

- Non-ICANS neurotoxicity with anti-BCMA CAR T-cell therapy, see CART-4
- Footnotes, see CART-9A
