+++
id           = "cutaneous_lymphomas/ST-1"
gid          = "cutaneous_lymphomas"
ref          = "ST-1"
page         = 67
title        = "Classification of cutaneous B-cell lymphomas across WHO-EORTC 2018, ICC 2022, and WHO 2024"
nccn_version = "2.2026"
nccn_date    = "02/13/26"
generated    = "2026-08-27"
see_also     = ["ST-2", "CUTB-1", "CUTB-2"]

[facets]
disease   = "cutaneous_lymphomas"
histology = ["marginal-zone", "follicular", "dlbcl", "large-cell"]
timepoint = "diagnosis"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "reported_entity"
type = "text"
[[variables]]
name = "classification_system"
type = "enum"
options = ["WHO-EORTC 2018", "ICC 2022", "WHO 5th edition 2024"]
+++

# Source

- NCCN Cutaneous Lymphomas v2.2026, ST-1, p67
- Table 1: Classification of Cutaneous B-Cell Lymphomas
- Use when reconciling the entity name on a pathology report with the classification system it was written under
- Table 2: Classification of Cutaneous T-Cell Lymphomas is a separate table (ST-2)

# Assessment

- ___ (age) yo
- Entity as named on the pathology report ___ (reported_entity)
- Classification system the report used ___ (classification_system)

# Classification systems compared in this table

- WHO-EORTC Classification for Primary Cutaneous Lymphomas (2018)
    - Entities listed under the heading Cutaneous B-Cell Lymphomas
    - Willemze R, Cerroni L, Kempf W, et al. The 2018 update of the WHO-EORTC classification for primary cutaneous lymphomas. Blood 2019;133:1703-1714
- The International Consensus Classification (ICC) of Mature Lymphoid Neoplasms (2022)
    - Entities listed under the heading Mature B-Cell Neoplasms
    - Arber DA, Borowitz MJ, Cook JR, et al. The International Consensus Classification of Myeloid and Lymphoid Neoplasms. 1st ed. Philadelphia, PA: Lippincott Williams and Wilkins; 2025
- WHO Classification of Hematolymphoid Tumors: Lymphoid Neoplasms (5th edition, 2024)
    - Entities listed under the heading Mature B-Cell Neoplasms, each nested under a broader family
    - WHO Classification of Tumours Editorial Board. Haematolymphoid tumours. (WHO classification of tumours series, 5th ed.; vol. 11). Lyon (France): International Agency for Research on Cancer; 2024
    - Reproduced with permission

# Marginal zone entity

- WHO-EORTC 2018: Primary cutaneous marginal zone lymphoma
- ICC 2022: Primary cutaneous marginal zone lymphoproliferative disorder
    - Named a lymphoproliferative disorder, not a lymphoma, in this classification
- WHO 5th edition 2024, under the family Marginal zone lymphoma
    - Primary cutaneous marginal zone lymphoma

# Follicle center entity

- WHO-EORTC 2018: Primary cutaneous follicle center lymphoma
- ICC 2022: Primary cutaneous follicle center lymphoma
- WHO 5th edition 2024, under the family Cutaneous follicle center lymphoma
    - Primary cutaneous follicle center lymphoma

# Large B-cell entities

- Primary cutaneous DLBCL, leg type
    - WHO-EORTC 2018: Primary cutaneous DLBCL, leg type
    - ICC 2022: Primary cutaneous DLBCL, leg type
    - WHO 5th edition 2024, under the family Large B-cell lymphomas
- Intravascular large B-cell lymphoma
    - WHO-EORTC 2018: Intravascular large B-cell lymphoma
    - ICC 2022: Intravascular large B-cell lymphoma
    - WHO 5th edition 2024, under the family Large B-cell lymphomas

# EBV-positive entity

- WHO-EORTC 2018: EBV+ mucocutaneous ulcer
    - Provisional entity in this classification
- ICC 2022: EBV-positive mucocutaneous ulcer
- WHO 5th edition 2024, under the family Lymphoid proliferations and lymphomas associated with immune deficiency and dysregulation
    - EBV-positive mucocutaneous ulcer

# Next

- For the classification of cutaneous T-cell lymphomas, go to Table 2 (ST-2)
