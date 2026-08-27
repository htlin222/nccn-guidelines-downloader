+++
id           = "infections/FEV-7"
gid          = "infections"
ref          = "FEV-7"
page         = 35
title        = "Febrile neutropenia presenting with abdominal pain, perirectal pain, diarrhea, or urinary tract symptoms"
nccn_version = "1.2026"
nccn_date    = "03/11/2026"
generated    = "2026-08-28"
see_also     = ["FEV-5", "FEV-10", "FEV-11"]

[facets]
disease   = "infections"
timepoint = ["workup", "supportive"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "presentation"
type = "enum"
options = ["abdominal pain", "perirectal pain", "diarrhea", "urinary tract symptoms"]
[[variables]]
name = "current_antibiotics"
type = "text"
[[variables]]
name = "bowel_meds"
type = "text"
+++

# Source

- NCCN Prevention and Treatment of Cancer-Related Infections v1.2026, FEV-7, p35
- Applies to initial clinical presentation (day 0) of febrile neutropenia with abdominal pain, perirectal pain, diarrhea, or urinary tract symptoms
- All patients with febrile neutropenia should receive broad-spectrum antibiotics (FEV-5)
- Antibacterial agents, for dosing, spectrum, and specific comments/cautions: FEV-A
- Antifungal agents, for dosing, spectrum, and specific comments/cautions: FEV-B
- Antiviral agents, for dosing, spectrum, and specific comments/cautions: FEV-C
    - The antivirals are not equal in terms of efficacy, side effects, and resistance
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo with febrile neutropenia, initial clinical presentation (day 0)
- Presenting symptom ___ (presentation)
- Broad-spectrum antibiotics started (FEV-5), current regimen ___ (current_antibiotics)
- On laxatives, stool softeners, or tube feeds ___ (bowel_meds), which may cause diarrhea

# Abdominal pain

- Evaluation
    - Abdominal exam
    - Abdominal CT (preferred) or ultrasound
    - Alkaline phosphatase
    - Transaminases
    - Bilirubin
    - Amylase
    - Lipase
- Treatment modifications
    - Consider adding anaerobic coverage
    - Consider early surgical consultation as clinically indicated
    - Consider early other subspecialty consultation as clinically indicated
        - eg, gastroenterology
        - eg, interventional radiology

# Perirectal pain

- Evaluation
    - Perirectal inspection
    - Consider imaging such as abdomen/pelvis CT or MRI
- Treatment modifications
    - Ensure adequate anaerobic coverage
    - Consider local care

# Diarrhea

- Diarrhea from chemotherapy, or antibiotic-associated diarrhea, can be confused with true CDI
- Evaluation
    - C. difficile testing
        - Only if not on laxatives/stool softeners/tube feeds, which may cause diarrhea
    - Consider other medical causes of diarrhea
        - Neutropenic enterocolitis
        - GI GVHD
        - Mucositis
    - Colonoscopy may be required, to evaluate for colitis and determine etiology of diarrhea
    - Depending on clinical circumstances, consider diagnostic testing for pathogens
        - Viral
        - Bacterial
        - Parasitic

# Urinary tract symptoms

- Evaluation
    - Urine culture
- Treatment modifications
    - No additional therapy until specific pathogen identified

# Next

- Diarrhea, C. difficile infection (CDI) confirmed, go to FEV-10
- Diarrhea, CDI negative/other cause identified, treat as appropriate for clinical diagnosis
- Follow-up, go to FEV-11
