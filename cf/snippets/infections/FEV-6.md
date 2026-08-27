+++
id           = "infections/FEV-6"
gid          = "infections"
ref          = "FEV-6"
page         = 34
title        = "Site-specific evaluation and treatment modifications for mouth/mucosal membrane, esophagus, and sinus/nasal findings"
nccn_version = "1.2026"
nccn_date    = "03/11/2026"
generated    = "2026-08-28"
see_also     = ["FEV-5", "FEV-7", "FEV-11", "FEV-A", "FEV-B", "FEV-C"]

[facets]
disease   = "infections"
timepoint = "supportive"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "diagnosis"
type = "text"
[[variables]]
name = "site"
type = "enum"
options = ["mouth", "esophagus", "sinus-nasal"]
[[variables]]
name = "finding"
type = "text"
[[variables]]
name = "broad_spectrum_abx"
type = "text"
[[variables]]
name = "fluconazole_refractory"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "high_risk"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "ampho_intolerance"
type = "enum"
options = ["yes", "no"]
+++

# Source

- NCCN Prevention and Treatment of Cancer-Related Infections v1.2026, FEV-6, p34
- Site-specific evaluation and therapy at initial clinical finding, presentation (day 0)
- All patients with febrile neutropenia should receive broad-spectrum antibiotics (FEV-5)
- All recommendations category 2A unless stated otherwise

# Assessment

- ___ (age) yo, ___ (diagnosis)
- Febrile neutropenia, broad-spectrum antibiotics started ___ (broad_spectrum_abx)
- Site of initial clinical finding ___ (site)
- Finding at presentation, day 0 ___ (finding)
- Refractory to fluconazole ___ (fluconazole_refractory)
- High risk for aspergillosis or mucormycosis ___ (high_risk)
- Intolerance to amphotericin B formulations ___ (ampho_intolerance)

# Mouth/mucosal membrane, necrotizing ulceration

- Evaluation
    - HSV, VZV diagnostics
    - Culture and Gram stains, fungal
    - Biopsy suspicious lesions
- Treatment modifications
    - Ensure adequate anaerobic coverage
        - See Antibacterial Agents (FEV-A) for dosing, spectrum, and specific comments/cautions
    - Consider anti-HSV/VZV therapy
        - See Antiviral Agents (FEV-C) for dosing, spectrum, and specific comments/cautions
        - The antivirals are not equal in terms of efficacy, side effects, and resistance
    - Consider systemic antifungal therapy
        - See Antifungal Agents (FEV-B) for dosing, spectrum, and specific comments/cautions

# Mouth/mucosal membrane, thrush

- Treatment modifications
    - Antifungal therapy
        - See Antifungal Agents (FEV-B) for dosing, spectrum, and specific comments/cautions
        - Fluconazole first-line therapy
        - Voriconazole, posaconazole, or echinocandin if refractory to fluconazole

# Mouth/mucosal membrane, vesicular lesions

- Evaluation
    - HSV, VZV diagnostics
- Treatment modifications
    - Anti-HSV therapy (category 1)
        - See Antiviral Agents (FEV-C) for dosing, spectrum, and specific comments/cautions
        - The antivirals are not equal in terms of efficacy, side effects, and resistance

# Esophagus

- Initial clinical finding
    - Retrosternal burning
    - Dysphagia/odynophagia
- Evaluation
    - HSV and CMV diagnostics
    - Fungal culture of suspicious oral lesions
    - Consider endoscopy, if no response to therapy
    - Histopathologic examination for viral and fungal pathogens
- Treatment modifications
    - Initial therapy (antifungal or antiviral) guided by clinical findings (eg, thrush or perioral HSV)
        - See Antifungal Agents (FEV-B) and Antiviral Agents (FEV-C) for dosing, spectrum, and specific comments/cautions
        - The antivirals are not equal in terms of efficacy, side effects, and resistance

# Sinus/nasal

- Initial clinical finding
    - Sinus tenderness
    - Periorbital cellulitis
    - Nasal ulceration
    - Unilateral eye tearing
- Evaluation
    - High-resolution sinus CT/orbit MRI
    - Ear, nose, and throat (ENT)/ophthalmologic urgent evaluation
    - Culture and stains/biopsy
- Treatment modifications
    - Consider adding MRSA and anaerobic coverage if periorbital cellulitis noted
        - See Antibacterial Agents (FEV-A) for dosing, spectrum, and specific comments/cautions
    - Add lipid amphotericin B preparation to cover possible aspergillosis and mucormycosis in patients at high risk with suspicious CT/MRI findings
        - Posaconazole or isavuconazonium sulfate can be considered for patients who have invasive, refractory infections or who have intolerance to amphotericin B formulations
        - See Antifungal Agents (FEV-B) for dosing, spectrum, and specific comments/cautions

# Next

- All patients with febrile neutropenia should receive broad-spectrum antibiotics, go to FEV-5
- Follow-up, go to FEV-11
