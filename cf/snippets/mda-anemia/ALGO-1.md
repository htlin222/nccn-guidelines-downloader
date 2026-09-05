+++
id           = "mda-anemia/ALGO-1"
gid          = "mda-anemia"
ref          = "ALGO-1"
page         = 1
title        = "Assess hemoglobin level and cause of anemia to guide transfusion, monitoring, and ESA use"
nccn_version = "V8"
generated    = "2026-09-03"

[facets]
disease   = "mda-anemia"
timepoint = "supportive"

[[variables]]
name = "hb"
type = "number"
[[variables]]
name = "mcv"
type = "number"
[[variables]]
name = "cause"
type = "enum"
options = ["acute-bleed-unanticipated", "acute-bleed-tumor-related", "acute-bleed-anticipated-intraoperative", "related-to-cancer-no-treatment", "chemotherapy-and-or-radiation", "other-or-unknown"]
[[variables]]
name = "symptomatic"
type = "enum"
options = ["yes", "no"]
+++

# Source

- MD Anderson Anemia Assessment and Management, V8, ALGO-1, p1-2, approved 06/21/2022
- Do not use to treat pregnant women
- Hb = Hemoglobin, MCV = mean corpuscular volume, TIBC = total iron binding capacity, ESA = erythropoietin stimulating agents

# Assessment

- Hb ___ (hb) g/dL
- MCV ___ (mcv)
- Cause of anemia: ___ (cause)
- Is patient symptomatic? ___ (symptomatic)

# Acute bleed (unanticipated or tumor related)

- Hb less than or equal to 7 grams/dL (Anemia)
    - Transfuse patient to eliminate symptoms
    - Take into account any hemoglobinopathy
    - Laboratory tests to evaluate for nutritional deficiencies or hemolysis if indicated
        - MCV less than 80: serum iron, transferrin with TIBC, ferritin
        - MCV greater than 100: serum vitamin B12, folate and homocysteine levels
- Hb between 7 and 9 grams/dL
    - Is patient symptomatic?
        - Yes
            - Consider Gastroenterology and/or surgical consult
            - Monitor hemoglobin and hematocrit every 6 to 12 hours as clinically indicated

# Acute bleed - anticipated (intraoperative)

- Hb between 7 and 9 grams/dL
    - Is patient scheduled for anesthesia?
        - Yes
            - Transfuse to corrected Hb 8 grams/dL (Hb 9 grams/dL with underlying cardiovascular disease)
            - Considerations and associated risks in patients with anemia that receive anesthesia care
                - Under anesthesia, patients often experience systemic vasodilation and are at risk of significant hypotension, resulting in hypoperfusion and decreased tissue oxygenation
                - Use of vasopressors or IV fluid boluses to maintain adequate blood pressure invariably results in hemodilution and further decrease in Hb concentration (e.g. if baseline Hb 7 grams/dL, hemodilution will decrease Hb to below 7 grams/dL and increase risks for periprocedural complications)
        - No
            - Continue monitoring

# Related to cancer without any treatment

- Hb greater than or equal to 9 but less than 10 grams/dL
    - Monitor as clinically indicated
    - Laboratory tests to evaluate iron, vitamin B12 and folate nutritional deficiencies (replacement recommendations as indicated)
        - MCV less than 80: serum iron, transferrin with TIBC, ferritin
        - MCV greater than 100: serum vitamin B12, folate and homocysteine levels

# Related to chemotherapy and/or radiation

- Hb less than or equal to 7 grams/dL (Anemia)
    - Transfuse patient to eliminate symptoms
    - Take into account any hemoglobinopathy (follow care path A on Page 1 depending on hemoglobin level)
    - Laboratory tests to evaluate for nutritional deficiencies or hemolysis if indicated
        - MCV less than 80: serum iron, transferrin with TIBC, ferritin
        - MCV greater than 100: serum vitamin B12, folate and homocysteine levels
- Hb between 7 and 9 grams/dL, or Hb greater than or equal to 9 and less than 10 grams/dL
    - The use of ESA are contraindicated
        - ESAs may be considered for patients who refuse blood transfusions after discussing the risks, see FDA approved indications and CMS guidelines
    - Is patient symptomatic?
        - No
            - Curative myelosuppressive chemotherapy?
                - Yes: Continue laboratory monitoring
                - No
                    - Radiation treatment alone?
                        - Yes: Continue laboratory monitoring
                        - No: Use institutional ESA ordering tools (darbepoetin alfa, epoetin alfa)

# Other or unknown cause

- Hb greater than or equal to 9 and less than 10 grams/dL
    - Monitor as clinically indicated (follow care path A on Page 1 depending on hemoglobin level)
    - Laboratory tests to evaluate for nutritional deficiencies or hemolysis if indicated
        - MCV less than 80: serum iron, transferrin with TIBC, ferritin
        - MCV greater than 100: serum vitamin B12, folate and homocysteine levels
    - Recommended evaluation
        - Stool guaiac, obtain Gastroenterology consult if positive
        - Nutritional deficiencies, consider Nutrition consult
        - Hemolysis, premalignancy, or other suspected etiologies, obtain Hematology consult
