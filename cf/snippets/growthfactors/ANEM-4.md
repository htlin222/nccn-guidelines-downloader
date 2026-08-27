+++
id           = "growthfactors/ANEM-4"
gid          = "growthfactors"
ref          = "ANEM-4"
page         = 34
title        = "Evaluation of iron deficiency and management by iron status in the anemic patient with cancer"
nccn_version = "3.2026"
nccn_date    = "12/05/25"
generated    = "2026-08-28"
see_also     = ["ANEM-3", "ANEM-B"]

[facets]
disease   = "growthfactors"
timepoint = "supportive"

[[variables]]
name = "diagnosis"
type = "text"
[[variables]]
name = "hb"
type = "text"
[[variables]]
name = "serum_iron"
type = "text"
[[variables]]
name = "tibc"
type = "text"
[[variables]]
name = "ferritin"
type = "text"
[[variables]]
name = "tsat"
type = "text"
[[variables]]
name = "on_esa"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "fasting"
type = "enum"
options = ["yes", "no"]
+++

# Source

- NCCN Hematopoietic Growth Factors v3.2026, ANEM-4, p34
- Applies to evaluation of iron deficiency and management by iron status in patients with cancer
- ESAs work optimally in patients who have adequate iron stores, so determination of iron stores and management of iron storage status is necessary
- See Discussion for clinical examples of iron status
- Parenteral iron preparations: ANEM-B
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (diagnosis)
- Hb ___ (hb)
- Currently receiving an ESA: ___ (on_esa)
- Serum iron ___ (serum_iron)
- Total iron-binding capacity ___ (tibc)
- Serum ferritin ___ (ferritin)
- Transferrin saturation (TSAT) ___ (tsat)
- Fasting at the time of iron studies: ___ (fasting)

# Iron studies

- Iron panel
    - Serum iron
    - Total iron-binding capacity
    - Serum ferritin
- Interpretation cautions
    - In general, the lower the level of ferritin, the higher the probability of true iron deficiency anemia
    - In the cancer setting, a chronic inflammatory state may falsely elevate the serum ferritin
    - If serum iron studies are not performed while the patient is fasting, or if the patient has taken a recent oral iron tablet, serum iron may be falsely elevated, and thus also falsely elevate the percent TSAT
    - Fasting is preferred when testing for serum iron and total iron-binding capacity

# Iron status and management

- Absolute iron deficiency: ferritin <30 ng/mL AND TSAT <20%
    - If ferritin and TSAT are discordant, the low ferritin value takes precedence in determining whether IV iron will be of benefit
    - Consider IV or oral iron supplementation
        - IV iron has superior efficacy and should be considered for supplementation
        - Oral iron has been more commonly used but is less effective
        - Parenteral iron preparations: ANEM-B
- Functional iron deficiency in patients receiving ESAs: ferritin 30–500 ng/mL AND TSAT <50%
    - Consider IV iron supplementation with erythropoietic therapy
    - A higher response rate to IV iron plus an ESA is seen for patients with a TSAT <20%
    - For patients who received IV iron with baseline TSAT >20%, the response rate is both diminished and prolonged as the TSAT increased from 20% to 50%, so reserve IV iron for those in whom benefits are likely to outweigh risks
    - Only one of six studies of IV iron therapy in patients with cancer provided a TSAT guideline for monitoring
    - Eligibility criteria in the six randomized controlled trials of IV iron with an ESA generally ranged from >10 to <900 ng/mL for serum ferritin and >15% to <60% for TSAT
- Possible functional iron deficiency: ferritin >500–800 ng/mL AND TSAT <50%
    - No iron supplementation needed, or
    - Consider IV iron supplementation for select patients
    - There are insufficient data to support the routine use of IV iron in this setting
    - Administration of IV iron to such patients should be individualized, with the goal of avoiding allogeneic transfusion
- No iron deficiency: ferritin >800 ng/mL OR TSAT ≥50%
    - IV or oral iron supplementation is not needed

# Next

- Hb increases after 4 wks, go to periodic evaluation (repeat ferritin and TSAT)
- No Hb increase after 4 wks, go to the pathway for functional iron deficiency
