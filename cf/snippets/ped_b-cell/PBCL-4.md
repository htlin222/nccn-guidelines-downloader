+++
id           = "ped_b-cell/PBCL-4"
gid          = "ped_b-cell"
ref          = "PBCL-4"
page         = 9
title        = "Assigning stage by the International Pediatric Non-Hodgkin Lymphoma Staging System"
nccn_version = "1.2026"
nccn_date    = "03/20/26"
generated    = "2026-08-28"
see_also     = ["PBCL-5"]

[facets]
disease   = "ped_b-cell"
stage     = ["I", "II", "III", "IV"]
timepoint = "staging"

[[variables]]
name = "extranodal_sites"
type = "text"
[[variables]]
name = "nodal_areas"
type = "text"
[[variables]]
name = "intrathoracic"
type = "text"
[[variables]]
name = "intraabdominal"
type = "text"
[[variables]]
name = "paraspinal"
type = "text"
[[variables]]
name = "bone_lesion"
type = "text"
[[variables]]
name = "cns"
type = "text"
[[variables]]
name = "marrow"
type = "text"
[[variables]]
name = "assigned_stage"
type = "enum"
options = ["I", "II", "III", "IV"]
+++

# Source

- NCCN Pediatric Aggressive Mature B-Cell Lymphomas v1.2026, PBCL-4, p9
- International Pediatric Non-Hodgkin Lymphoma Staging System
    - Adapted with permission from Rosolen A, Perkins SL, Pinkerton CR, et al. Revised International Pediatric Non-Hodgkin Lymphoma Staging System. J Clin Oncol 2015;33:2112-2118
    - This is a revised version of the Murphy's St. Jude Staging from Murphy SB. Classification, staging and end results of treatment of childhood non-Hodgkin's lymphomas: dissimilarities from lymphomas in adults. Semin Oncol 1980;7:332-339
- All recommendations are category 2A unless otherwise indicated

# Assessment

- Extranodal tumor site(s): ___ (extranodal_sites)
- Nodal area(s) involved, and their side of the diaphragm: ___ (nodal_areas)
- Intrathoracic involvement (mediastinal, hilar, pulmonary, pleural, or thymic): ___ (intrathoracic)
- Intra-abdominal or retroperitoneal involvement (liver, spleen, ovary, and/or kidney): ___ (intraabdominal)
- Paraspinal or epidural tumor: ___ (paraspinal)
- Bone lesion: ___ (bone_lesion)
- CNS involvement: ___ (cns)
- Bone marrow involvement: ___ (marrow)
- Assigned stage: ___ (assigned_stage)

# Stage I

- Single tumor (extranodal), with exclusion of mediastinum and abdomen
- Single anatomical area (nodal), with exclusion of mediastinum and abdomen

# Stage II

- A single extranodal tumor with regional node involvement
- Two or more nodal areas on the same side of the diaphragm
- A primary gastrointestinal tract tumor, usually in the ileocecal area, with or without involvement of associated mesenteric nodes, that is completely resectable
    - If ascites or extension of the tumor to adjacent organs, it should be regarded as stage III

# Stage III

- Two or more extranodal tumors, including bone or skin
- Two or more nodal areas above and below the diaphragm
- Any intrathoracic tumor (mediastinal, hilar, pulmonary, pleural, or thymic)
- Intra-abdominal and retroperitoneal disease, including liver, spleen, ovary, and/or kidney localizations, regardless of degree of resection
- Any paraspinal or epidural tumor, whether or not other sites are involved
- Single bone lesion with concomitant involvement of extra-nodal and/or non-regional nodal sites

# Stage IV

- Any of the above findings with initial involvement of the CNS, bone marrow, or both
- The CNS is considered involved if one or more of the following applies
    - Any lymphoma cells by cytology in CSF
    - Any CNS tumor mass by imaging
    - Cranial nerve palsy, if not explained by extracranial tumor
    - Clinical spinal cord compression
    - Parameningeal extension: cranial and/or spinal
- Stage IV disease due to bone marrow involvement is defined by morphologic evidence of any lymphoma cells in a bone marrow aspirate

# Next

- For risk group definitions, see PBCL-5
