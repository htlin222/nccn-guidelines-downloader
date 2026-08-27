+++
id           = "infections/FEV-8"
gid          = "infections"
ref          = "FEV-8"
page         = 36
title        = "Day 0 evaluation and treatment modifications for skin, vascular access device, and CNS presentations"
nccn_version = "1.2026"
nccn_date    = "03/11/2026"
generated    = "2026-08-28"
see_also     = ["FEV-5", "FEV-11", "FEV-A", "FEV-B", "FEV-C"]

[facets]
disease   = "infections"
timepoint = ["workup", "supportive"]

[[variables]]
name = "presentation"
type = "enum"
options = ["cellulitis-skin-soft-tissue", "vesicular-lesions", "disseminated-papules-or-other-lesions", "vad-entry-or-site-inflammation", "vad-tunnel-or-port-pocket-infection", "septic-phlebitis", "cns-symptoms"]
[[variables]]
name = "lesion_site"
type = "text"
[[variables]]
name = "vad_site"
type = "text"
[[variables]]
name = "cns_findings"
type = "text"
[[variables]]
name = "mold_risk"
type = "text"
+++

# Source

- NCCN Prevention and Treatment of Cancer-Related Infections v1.2026, FEV-8, p36
- Applies to the initial clinical presentation (day 0) of febrile neutropenia with skin/soft tissue, vascular access device (VAD), or CNS findings
- All recommendations category 2A unless otherwise indicated

# Assessment

- Initial clinical presentation (day 0) ___ (presentation)
- Skin lesion site and description ___ (lesion_site)
- Vascular access device in place, type and site ___ (vad_site)
- CNS symptoms ___ (cns_findings)
- High risk for mold infection ___ (mold_risk)

# All patients

- All patients with febrile neutropenia should receive broad-spectrum antibiotics (FEV-5)

# Cellulitis/skin and soft tissue infections

- Evaluation
    - Consider aspirate or biopsy for culture
- Treatment modification
    - Add Gram-positive active agents
        - Consider for methicillin-resistant Staphylococcus aureus (MRSA)
        - See Antibacterial Agents (FEV-A) for dosing, spectrum, and specific comments/cautions

# Vesicular lesions

- Evaluation
    - Aspiration or scraping for PCR/DFA
    - HSV cultures if PCR unavailable
- Treatment modification
    - Consider acyclovir, famciclovir, or valacyclovir
        - See Antiviral Agents (FEV-C) for dosing, spectrum, and specific comments/cautions
        - The antivirals are not equal in terms of efficacy, side effects, and resistance

# Disseminated papules or other lesions

- Evaluation
    - Aspiration or biopsy for bacterial, fungal, and mycobacterial cultures and histopathology
    - Consider evaluation for VZV
- Treatment modification
    - Consider vancomycin or other Gram-positive coverage (FEV-A)
        - See Antibacterial Agents (FEV-A) for dosing, spectrum, and specific comments/cautions
    - Consider mold-active antifungal therapy in patients who are at high risk
        - See Antifungal Agents (FEV-B) for dosing, spectrum, and specific comments/cautions

# VADs, entry or site inflammation

- Evaluation
    - Swab entry site drainage (if present) for culture
    - Consider blood culture from VAD and a peripheral culture
- Treatment modification
    - Vancomycin initially, or add if site not responding after 48 hours of empiric therapy
        - See Antibacterial Agents (FEV-A) for dosing, spectrum, and specific comments/cautions

# VADs, tunnel infection/port pocket infection, septic phlebitis

- Evaluation
    - Consider blood culture from VAD and a peripheral culture
- Treatment modification
    - Remove catheter and culture surgical wound
    - Add vancomycin
        - See Antibacterial Agents (FEV-A) for dosing, spectrum, and specific comments/cautions

# CNS symptoms

- Evaluation
    - MRI (preferred) or CT scan
    - Lumbar puncture (if possible)
    - ID consult
    - Neurology consult
- Treatment modification
    - Initial empiric therapy of meningitis should include coverage of Pseudomonas aeruginosa and Listeria
        - See Antibacterial Agents (FEV-A) for dosing, spectrum, and specific comments/cautions
    - For encephalitis, add high-dose acyclovir with hydration and monitor renal function
        - See Antiviral Agents (FEV-C) for dosing, spectrum, and specific comments/cautions

# Next

- Follow-up, go to FEV-11
