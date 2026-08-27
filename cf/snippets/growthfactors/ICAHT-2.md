+++
id           = "growthfactors/ICAHT-2"
gid          = "growthfactors"
ref          = "ICAHT-2"
page         = 29
title        = "Post-treatment assessment and management of suspected ICAHT after IEC therapy"
nccn_version = "3.2026"
nccn_date    = "12/05/25"
generated    = "2026-08-28"
see_also     = ["ICAHT-1", "TGF-1"]

[facets]
disease   = "growthfactors"
timepoint = "supportive"

[[variables]]
name = "iec_therapy"
type = "text"
[[variables]]
name = "days_post_infusion"
type = "number"
[[variables]]
name = "platelet_count"
type = "text"
[[variables]]
name = "transfusion_or_gf_dependence"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "neutropenia"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "car_hematotox_score"
type = "number"
+++

# Source

- NCCN Hematopoietic Growth Factors v3.2026, ICAHT-2, p29
- Applies to suspected ICAHT in patients receiving IEC therapies
- ICAHT is defined per European Hematology Association/European Society for Blood and Marrow Transplantation (EHA-EBMT) consensus criteria as grade 4 thrombocytopenia (platelets <25,000/mcL) persistent for >7 days, or that requires transfusion or growth factor dependence
- All recommendations category 2A unless otherwise indicated

# Assessment

- IEC therapy received: ___ (iec_therapy)
- Day ___ (days_post_infusion) post-infusion
- Platelets ___ (platelet_count)
- Requires transfusion or growth factor dependence: ___ (transfusion_or_gf_dependence)
- Neutropenia: ___ (neutropenia)
- CAR-HEMATOTOX score: ___ (car_hematotox_score)

# Evaluate for other potential causes

- Other potential causes of thrombocytopenia (TGF-1)
- IEC-associated toxicities
    - Macrophage activation syndrome (MAS), also called IEC-associated hemophagocytic lymphohistiocytosis-like syndrome (IEC-HS)
    - Relapse of hematologic malignancy, and secondary malignancies
    - Therapy-associated MDS
- Treat underlying cause(s) as indicated

# Risk factors for ICAHT

- Bone marrow involvement by tumor
- High tumor burden
    - Represented by elevated serum LDH, or bulky disease by disease-specific staging criteria
- Preexisting cytopenias
- Preexisting inflammatory state
    - Represented by elevated CRP or ferritin
- Active infection
- Prior hematopoietic cell transplant
- Receipt of bridging therapy
    - Defined as cancer-directed therapy received between leukapheresis and lymphodepletion chemotherapy
- CAR-HEMATOTOX score ≥2

# Management, if ≥1 risk factors and/or cytopenias beyond 21 days post-infusion

- Consider clinical trial of TPO-RA
- Consider G-CSFs for neutropenia (see ICAHT-1)
- Consider eltrombopag
    - Has been evaluated with efficacy in patients with prolonged thrombocytopenia post-allogeneic transplant and poor graft function
    - Has also been evaluated with efficacy in patients with prolonged thrombocytopenia post-IEC/CAR T-cell therapy
- Consider hematopoietic cell boost
    - Only if cryopreserved autologous stem cells are available

# Next

- Other causes of thrombocytopenia, go to TGF-1
- Neutropenia management with G-CSFs, go to ICAHT-1
