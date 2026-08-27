+++
id           = "vte/HIT-1"
gid          = "vte"
ref          = "HIT-1"
page         = 54
title        = "Workup and management for suspected heparin-induced thrombocytopenia"
nccn_version = "1.2026"
nccn_date    = "05/05/26"
generated    = "2026-08-28"
see_also     = ["HIT-2", "HIT-A"]

[facets]
disease   = "vte"
timepoint = ["workup", "supportive"]

[[variables]]
name = "heparin_exposure"
type = "text"
[[variables]]
name = "platelets"
type = "number"
[[variables]]
name = "score_tool"
type = "enum"
options = ["4t", "hep", "cpb"]
[[variables]]
name = "score_value"
type = "number"
[[variables]]
name = "hit_probability"
type = "enum"
options = ["low", "intermediate", "high"]
[[variables]]
name = "elisa_result"
type = "enum"
options = ["positive", "negative", "pending"]
[[variables]]
name = "sra_pea_result"
type = "enum"
options = ["positive", "negative", "pending"]
+++

# Source

- NCCN Cancer-Associated Venous Thromboembolic Disease v1.2026, HIT-1, p54
- Workup and management for suspected heparin-induced thrombocytopenia (HIT)
- HIT Probability Assessment Tools: HIT-A
- All recommendations category 2A unless otherwise indicated

# Assessment

- Suspected HIT, heparin exposure: ___ (heparin_exposure)
- Platelet count: ___ (platelets)
- Calculate HIT pretest probability with one of the tools below (HIT-A): ___ (score_tool)
    - 4T Score
        - 4T score: 0–3 low probability of HIT, 4–5 intermediate probability of HIT, 6–8 high probability of HIT
        - The 4T score has not been validated in patients with cancer, so it may have less utility, particularly in patients receiving chemotherapy who have alternative causes for thrombocytopenia
    - HIT Expert Probability (HEP) Score
        - HEP score 1st cutoff: ≥2 positive for HIT, <2 negative for HIT (sensitivity 1.00 [0.56–1.00], specificity 0.60 [0.45–0.75])
        - HEP score 2nd cutoff: ≥5 positive for HIT, <5 negative for HIT (sensitivity 0.86 [0.42–0.99], specificity 0.88 [0.74–0.96])
    - Post cardiopulmonary bypass (CPB) HIT probability Score, only for patients with CPB
        - CPB score: <2 low probability of HIT, ≥2 high probability of HIT
- Score: ___ (score_value)
- HIT probability: ___ (hit_probability)

# Low HIT probability (4T Score <4, HEP Score <3, or CPB Score <2)

- A low pre-test probability score combined with a negative antibody test is useful in ruling out a diagnosis of HIT; a positive test increases the suspicion for HIT
- In patients without cancer with 4T scores of 1–3, the risk of HIT is small but not zero, but this has not been validated in patients with cancer
- Continue UFH/LMWH
- Consider alternative causes of thrombocytopenia
- Monitor clinical status
- Consider HIT antibody test (ELISA) in select patients: ___ (elisa_result)
    - Cutoff for ELISA HIT antibody test may vary depending on the specific assay used
    - Based on clinical judgment, HIT antibody testing and initiation of argatroban/bivalirudin or fondaparinux in place of UFH/LMWH may be warranted in select patients
- HIT antibody negative, continue UFH/LMWH and monitor clinical status
- HIT antibody positive
    - Recommend serotonin release assay (SRA) testing or P-selectin expression assay (PEA) testing: ___ (sra_pea_result)
        - Consider institution-specific ELISA optical density (OD) value thresholds when determining whether to send SRA/PEA
    - Reassess risks and benefits of UFH/LMWH versus alternative non-heparin anticoagulant, see Initial Treatment for Suspected or Confirmed HIT (HIT-2)

# Intermediate/high HIT probability (4T Score ≥4, HEP Score ≥3, or CPB Score ≥2)

- Send HIT antibody test (ELISA) to confirm diagnosis: ___ (elisa_result)
    - Cutoff for ELISA HIT antibody test may vary depending on the specific assay used
- Treat as HIT while waiting for ELISA results
    - Eliminate UFH/LMWH exposure from all sources
        - Treatment
        - Prophylaxis
        - Line flushes
        - Coated catheters
    - Discontinue and reverse warfarin (and other vitamin K antagonists) with vitamin K
    - Start alternative non-heparin anticoagulant, see Initial Treatment for Suspected or Confirmed HIT (HIT-2)
        - For patients without an indication for therapeutic anticoagulation who are judged to be at high risk of bleeding and moderate risk of HIT, a prophylactic dose of a non-heparin anticoagulant could be considered while awaiting the results of initial testing
    - Avoid platelet transfusions unless patient is actively bleeding or at high risk of bleeding

# Next

- Low probability, HIT antibody negative, continue UFH/LMWH and monitor clinical status
- Low probability, HIT antibody positive, SRA/PEA positive, treat as HIT (HIT-2)
- Low probability, HIT antibody positive, SRA/PEA negative
- Intermediate/high probability, HIT antibody positive and 4T score intermediate or high, or HEP/CPB Score high, treat as HIT (HIT-2)
- Intermediate/high probability, HIT antibody negative and 4T/HEP/CPB Score high
    - Recommend continuing alternative non-heparin anticoagulant (HIT-2)
    - Recommend SRA/PEA or repeat HIT antibody test (ELISA)
        - SRA/PEA or repeat HIT antibody positive, treat as HIT (HIT-2)
        - SRA/PEA or repeat HIT antibody negative
- Intermediate/high probability, HIT antibody negative and 4T score intermediate
    - Reconsider diagnosis of HIT and other causes of thrombocytopenia
    - Consider resumption of UFH/LMWH
