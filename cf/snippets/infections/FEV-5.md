+++
id           = "infections/FEV-5"
gid          = "infections"
ref          = "FEV-5"
page         = 33
title        = "Initial inpatient empiric antibiotic therapy for fever and neutropenia"
nccn_version = "1.2026"
nccn_date    = "03/11/2026"
generated    = "2026-08-28"
see_also     = ["FEV-2", "FEV-4", "FEV-6", "FEV-7", "FEV-8", "FEV-9", "FEV-11"]

[facets]
disease   = "infections"
timepoint = "supportive"

[[variables]]
name = "risk_level"
type = "enum"
options = ["low", "high"]
[[variables]]
name = "infection_site"
type = "text"
[[variables]]
name = "mdro_status"
type = "text"
[[variables]]
name = "organ_dysfunction"
type = "text"
[[variables]]
name = "drug_allergy"
type = "text"
[[variables]]
name = "prior_antibiotics"
type = "text"
[[variables]]
name = "quinolone_prophylaxis"
type = "enum"
options = ["yes", "no"]
+++

# Source

- NCCN Prevention and Treatment of Cancer-Related Infections v1.2026, FEV-5, p33
- Applies to initial inpatient empiric therapy for fever and neutropenia
- Dosing, spectrum, and specific comments/cautions for antibacterial agents: FEV-A
- All recommendations category 2A unless otherwise indicated

# Assessment

- Infection risk assessment ___ (risk_level), see FEV-2
- Site of infection ___ (infection_site)
- Colonization with or prior infection with multidrug-resistant organisms (MDROs) ___ (mdro_status)
    - MDROs are defined as microorganisms that are resistant to one or more classes of antimicrobial agents
    - Methicillin-resistant Staphylococcus aureus (MRSA) is an example of an MDRO
- Organ dysfunction ___ (organ_dysfunction)
- Drug allergy ___ (drug_allergy)
- Previous antibiotic therapy ___ (prior_antibiotics)
- Prior quinolone prophylaxis ___ (quinolone_prophylaxis)

# Basis for initial antibiotic therapy

- Infection risk assessment (FEV-2)
- Broad-spectrum coverage including antipseudomonal activity
- Colonization with or prior infection with MDROs
- Site of infection
- Local antibiotic susceptibility patterns
- Organ dysfunction/drug allergy
- Previous antibiotic therapy

# IV antibiotic therapy

- Choice of antibiotic may depend on local antibiotic susceptibility patterns and individual patient syndromes
- Typically monotherapy
    - Cefepime (category 1)
    - Imipenem/cilastatin (category 1)
    - Meropenem (category 1)
    - Piperacillin/tazobactam (category 1)
    - Ceftazidime (category 2B)
        - Weak Gram-positive coverage and increased breakthrough infections limit utility
- IV combination therapy could be considered where antimicrobial resistance is suspected
- Patients with high risk of anaphylaxis, consider ID/allergy consultation
    - For severe beta-lactam allergy, consider vancomycin and aztreonam while further evaluation is carried out with ID/allergy consultation

# Oral antibiotic therapy

- Consider oral antibiotic therapy for select patients at low risk
    - Ciprofloxacin + amoxicillin/clavulanate (category 1)
        - Use clindamycin in place of amoxicillin-clavulanate for patients who are allergic to penicillin
    - Moxifloxacin (category 1)
        - Insufficient activity against P. aeruginosa
        - Recommended for patients at low risk who may not require P. aeruginosa coverage
    - Levofloxacin
- Oral antibiotic regimen not recommended if patient received prior quinolone prophylaxis

# Next

- Site-specific evaluation and therapy
    - Mouth, esophagus, and sinus/nasal, see FEV-6
    - Abdominal pain, perirectal pain, diarrhea, and urinary tract symptoms, see FEV-7
    - Cellulitis, vascular access devices (VADs), vesicular lesions, disseminated papules or other lesions, and CNS symptoms, see FEV-8
    - Lung infiltrates, see FEV-9
- Follow-up, see FEV-11
- Or follow-up, see FEV-4
