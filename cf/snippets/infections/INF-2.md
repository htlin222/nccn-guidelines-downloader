+++
id           = "infections/INF-2"
gid          = "infections"
ref          = "INF-2"
page         = 8
title        = "Which patients get antifungal prophylaxis, with which agent, and for how long"
nccn_version = "1.2026"
nccn_date    = "03/11/2026"
generated    = "2026-08-28"
see_also     = ["INF-1", "INF-6", "INF-A", "FEV-B"]

[facets]
disease   = "infections"
timepoint = ["prevention", "supportive", "transplant"]

[[variables]]
name = "disease_therapy"
type = "text"
[[variables]]
name = "remission"
type = "text"
[[variables]]
name = "neutropenic"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "neutropenia_days"
type = "number"
[[variables]]
name = "prior_chemo"
type = "text"
[[variables]]
name = "cmv"
type = "text"
[[variables]]
name = "mucositis"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "gvhd"
type = "text"
[[variables]]
name = "ist"
type = "text"
[[variables]]
name = "center_risk"
type = "text"
[[variables]]
name = "interacting_drugs"
type = "text"
+++

# Source

- NCCN Prevention and Treatment of Cancer-Related Infections v1.2026, INF-2, p8
- Prevention of fungal infections
- Overall infection risk in patients with cancer on this page is intermediate to high
    - Categories of risk are based on several factors, including underlying malignancy, whether disease is in remission, duration of neutropenia, prior exposure to chemotherapy, CMV serostatus, and intensity of IST
- Consider antifungal prophylaxis based on patient- and center-specific risk factors
- Antifungal agent dosing, spectrum, and specific comments/cautions: FEV-B
- Antipneumocystis prophylaxis: INF-6
- All recommendations category 2A unless otherwise indicated

# Assessment

- Disease or therapy ___ (disease_therapy)
- Disease in remission ___ (remission)
- Neutropenic ___ (neutropenic)
- Duration of neutropenia ___ (neutropenia_days) days
- Prior exposure to chemotherapy ___ (prior_chemo)
- CMV serostatus ___ (cmv)
- Mucositis ___ (mucositis)
    - Mucositis is a risk factor for candidemia in patients with hematologic malignancies and HCT recipients not receiving antifungal prophylaxis
- Significant acute GVHD, especially grade 3/4 ___ (gvhd)
- Intensity of immunosuppressive therapy (IST) ___ (ist)
- Patient- and center-specific risk factors ___ (center_risk)
- Cancer agents with CYP3A4 interaction, or risk of QTc prolongation ___ (interacting_drugs)

# Acute lymphoblastic leukemia (ALL)

- Fluconazole or an echinocandin
- Amphotericin B products (category 2B)
- Duration: typically until resolution of neutropenia

# MDS or AML, neutropenic

- Posaconazole (category 1)
- Alternatives, all category 2B
    - Voriconazole
    - Isavuconazole
    - An echinocandin
    - Amphotericin B products
    - Fluconazole, only if mold activity is not needed
- Duration: typically until resolution of neutropenia

# Autologous HCT

- With mucositis
    - Fluconazole or an echinocandin (both category 1)
    - Duration: typically until resolution of neutropenia
- Without mucositis
    - No prophylaxis (category 2B)
    - Duration: not applicable

# Allogeneic HCT, neutropenic

- Fluconazole or an echinocandin (both category 1)
- Alternatives, all category 2B
    - Voriconazole
    - Posaconazole
    - Isavuconazole
    - Amphotericin B products
- Duration: continue during neutropenia
    - Some studies/centers continue prophylaxis for up to day 75
    - Prophylaxis may be extended based on individual risk

# Immune and targeted treatments

- See Immune and Targeted Treatments (INF-A) for infection concerns and recommended prophylaxis for immune-targeted agents
- Duration: depends on nature and duration of treatment

# Significant acute GVHD, especially grade 3/4, receiving IST

- Posaconazole (category 1)
- Alternatives, all category 2B
    - Voriconazole
    - An echinocandin
    - Amphotericin B products
    - Isavuconazole
- Duration: until resolution of significant GVHD

# Antifungal agents

- See Antifungal Agents (FEV-B) for dosing, spectrum, and specific comments/cautions
- Azoles
    - Itraconazole, voriconazole, and posaconazole are more potent inhibitors of hepatic cytochrome P450 3A4 isoenzymes than fluconazole
    - They may significantly decrease the clearance of several agents used to treat cancer (eg, vincristine)
    - In select circumstances when standard therapy is contraindicated, due to drug interactions or the risk of QTc prolongation, some centers consider using echinocandins, amphotericin B at prophylactic doses, or isavuconazole
- Echinocandins
    - The three agents in the class (micafungin, caspofungin, and anidulafungin) are considered by many to be interchangeable
    - Active against Candida and Aspergillus
    - Experience with the newer echinocandin, rezafungin, is currently limited
- Amphotericin B products
    - A lipid formulation of amphotericin is generally preferred based on less toxicity

# Next

- Antipneumocystis prophylaxis, go to INF-6
- Immune and targeted treatments, go to INF-A
- Antifungal agent dosing and spectrum, go to FEV-B
