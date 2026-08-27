+++
id           = "infections/FEV-1"
gid          = "infections"
ref          = "FEV-1"
page         = 29
title        = "Initial evaluation of fever and neutropenia"
nccn_version = "1.2026"
nccn_date    = "03/11/2026"
generated    = "2026-08-28"
see_also     = ["FEV-2", "FEV-3", "INF-1"]

[facets]
disease   = "infections"
timepoint = ["workup", "supportive"]

[[variables]]
name = "temp"
type = "number"
[[variables]]
name = "anc"
type = "number"
[[variables]]
name = "comorbid"
type = "text"
[[variables]]
name = "last_chemo"
type = "text"
[[variables]]
name = "prior_infections"
type = "text"
[[variables]]
name = "recent_abx"
type = "text"
[[variables]]
name = "medications"
type = "text"
[[variables]]
name = "devices"
type = "text"
[[variables]]
name = "exposures"
type = "text"
+++

# Source

- NCCN Prevention and Treatment of Cancer-Related Infections v1.2026, FEV-1, p29
- Applies to the initial evaluation of a patient who has both fever and neutropenia
- All recommendations category 2A unless otherwise indicated

# Assessment

- Fever, highest temperature ___ (temp)
    - Single temperature equivalent to 38.3°C or higher orally
    - Or equivalent to 38.0°C or higher orally over a 1-hour period
- Neutropenia, absolute neutrophil count ___ (anc) neutrophils/mcL
    - 500 neutrophils/mcL or fewer
    - Or 1000 neutrophils/mcL or fewer and a predicted decline to 500/mcL or fewer over the next 48 hours

# History and physical

- Complete history and physical (H&P), including supplemental history
    - Major comorbid illness ___ (comorbid)
    - Type and time since last chemotherapy ___ (last_chemo)
    - History of prior significant infections ___ (prior_infections)
    - Recent antibiotic therapy/prophylaxis ___ (recent_abx)
    - Medications ___ (medications)
    - Use of devices ___ (devices)
- Epidemiologically relevant exposures ___ (exposures)

# Laboratory and radiology assessment

- Complete blood count (CBC) with differential
- Comprehensive metabolic panel
- Consider chest x-ray based on symptoms
- Consider urinalysis based on symptoms

# Microbiologic evaluation

- Blood culture x at least 2 sets (one set = 2 bottles)
    - One peripheral + one catheter, preferred but not required
    - The peripheral plus catheter pair is preferred for distinguishing catheter-related infections from secondary sources
- Urine culture, only if patient has symptoms or abnormal urinalysis
    - Exercise caution in interpreting results if a urinary catheter is present
- Site-specific diagnostics
    - Diarrhea, Clostridioides difficile assay
        - For patients in the community or recently admitted, additional testing for enteric pathogens can be considered
    - Skin, aspirate/biopsy of skin lesions or drainage
- Viral diagnostics
    - PCR- and/or direct fluorescence antibody (DFA)-based tests for vesicular/ulcerated lesions on skin or mucosa
    - Throat or nasopharynx for respiratory virus symptoms, especially during outbreaks

# Next

- Initial risk assessment, go to FEV-2
