+++
id           = "histiocytic_neoplasms/MHN-1A"
gid          = "histiocytic_neoplasms"
ref          = "MHN-1A"
page         = 28
title        = "Tissue biopsy analysis for malignant histiocytic neoplasms"
nccn_version = "2.2026"
nccn_date    = "07/15/26"
generated    = "2026-08-27"
see_also     = ["MHN-1", "MHN-2", "HIST-H"]

[facets]
disease   = "histiocytic_neoplasms"
biomarker = ["pd-l1", "alk", "cd30", "bcl2"]
timepoint = ["diagnosis", "workup"]

[[variables]]
name = "biopsy_site"
type = "text"
[[variables]]
name = "biopsy_type"
type = "enum"
options = ["surgical", "multiple-cores"]
[[variables]]
name = "morphology"
type = "text"
[[variables]]
name = "ihc_result"
type = "text"
[[variables]]
name = "pdl1_result"
type = "text"
[[variables]]
name = "ngs_result"
type = "text"
[[variables]]
name = "fusion_result"
type = "text"
+++

# Source

- NCCN Histiocytic Neoplasms v2.2026, Malignant Histiocytic Neoplasms, MHN-1A, p28
- Tissue biopsy analysis for malignant histiocytic neoplasms (MHN-1)
- All recommendations category 2A unless otherwise indicated

# Assessment

- Tissue biopsy from ___ (biopsy_site)
    - Surgical biopsy preferred
    - ___ (biopsy_type)
- Morphology ___ (morphology)
- IHC ___ (ihc_result)
- PD-L1 expression ___ (pdl1_result)
- Target capture NGS ___ (ngs_result)
- RNA-based fusion testing ___ (fusion_result)

# Tissue biopsy

- Surgical biopsy (preferred)
- Multiple cores in separate cassettes, if surgical biopsy is not feasible
- Biopsy of additional sites may be needed if clinical suspicion of secondary concomitant malignancy

# Morphology

- Pleomorphic, epithelioid to spindled
- If lymphoid infiltrate also present, rule out concomitant lymphoma
    - See NCCN Guidelines for Acute Lymphoblastic Leukemia
    - See NCCN Guidelines for B-Cell Lymphomas

# Immunohistochemistry

- At minimum, the IHC panel should include CD163, CD1a, Langerin, S100, +/- CD68, +/- CD4
- Histiocytic sarcoma
    - Positive for at least 2 histiocytic markers (eg, CD163, CD68, lysozyme)
    - AND negative for CD1a, Langerin
- Langerhans cell sarcoma
    - Positive for S100, CD1a, Langerin
- Interdigitating dendritic cell sarcoma
    - Positive for S100
    - Positive for hematolymphoid lineage (eg, CD45, CD43)
    - Negative for histiocytic markers, Langerhans cell markers
- PU.1 can be used as part of a panel to support histiocytic lineage
    - Less specific than CD163 and CD68
    - Also expressed by lymphomas
- Consider PD-L1 expression testing for treatment guidance
    - Ravindran A, et al. Leuk Lymphoma 2025;66:2675-2684

# Exclude other poorly differentiated malignancies as indicated

- Histopathologic features overlap with other poorly differentiated malignancies (pleomorphic, epithelioid to spindled cells)
- Myeloid sarcoma/acute myeloid leukemia (MS/AML)
    - CD34, CD117, MPO
    - MS/AML often show monocytic differentiation and may be negative for CD34, CD117, and MPO
    - Consider AML-appropriate molecular testing and bone marrow biopsy, see NCCN Guidelines for Acute Myeloid Leukemia
- Malignant melanoma
    - SOX-10, MelanA (MART1), HMB45
    - Especially for S100+ diagnoses
- Follicular dendritic cell sarcoma
    - Positive for CD21, CD23, and/or CD35
- Carcinoma
    - Pankeratins
- Large cell or anaplastic lymphomas
    - CD30, B/T lineage markers
- ALK+ neoplasms
    - ALK

# Molecular testing

- Target capture, NGS study including MAPK and related pathway mutations
- RNA-based NGS to detect gene fusions
- Lymphoma-associated MHNs may also carry lymphoma-associated rearrangements
    - IGH::BCL2
    - Clonal immunoglobulin gene rearrangements
- Principles of Molecular Testing (HIST-H)
