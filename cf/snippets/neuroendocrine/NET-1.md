+++
id           = "neuroendocrine/NET-1"
gid          = "neuroendocrine"
ref          = "NET-1"
page         = 18
title        = "Clinical evaluation and first-line treatment of a gastric neuroendocrine tumor, by gastrin level and gastric pH"
nccn_version = "1.2026"
nccn_date    = "04/21/2026"
generated    = "2026-08-28"
see_also     = ["NET-8", "NET-9", "NET-13", "PDNEC-1"]

[facets]
disease   = "neuroendocrine"
histology = "neuroendocrine"
timepoint = ["workup", "diagnosis", "primary-treatment"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "tumor_size"
type = "text"
[[variables]]
name = "grade"
type = "enum"
options = ["1", "2"]
[[variables]]
name = "gastrin"
type = "text"
[[variables]]
name = "gastric_ph"
type = "text"
[[variables]]
name = "atrophic_gastritis"
type = "enum"
options = ["present", "absent", "unknown"]
[[variables]]
name = "ppi_use"
type = "enum"
options = ["none", "current", "long-term"]
+++

# Source

- NCCN Neuroendocrine Tumors v1.2026, NET-1, p18
- Applies to well-differentiated grade 1/2 neuroendocrine tumors of the gastrointestinal tract, lung, and thymus
- This page covers gastric location
- Footnotes for this page: NET-1A
- All recommendations category 2A unless stated otherwise

# Assessment

- ___ (age) yo, gastric neuroendocrine tumor
- Tumor size ___ (tumor_size)
- Grade ___ (grade), well-differentiated
- Serum gastrin ___ (gastrin)
- Gastric pH ___ (gastric_ph)
- Atrophic gastritis ___ (atrophic_gastritis)
- Proton pump inhibitor use ___ (ppi_use)

# Clinical evaluation

- Pathology reviewed per Principles of Pathology (NE-E)
- Esophagogastroduodenoscopy (EGD)
- Gastric biopsy
    - Minimum standard is at least two biopsies from the antrum, lesser and greater curvature
    - One biopsy from the incisura (angularis)
    - Two biopsies from the gastric body, lesser and greater curvature
- Serum gastrin level
    - Serum gastrin can be falsely elevated with proton pump inhibitor (PPI) use
    - To confirm diagnosis, ideally check when fasting and off PPI for more than 1 week
    - However, continue PPI in patients with overt clinical symptoms of gastrinoma and/or risks of complications
- Consider gastric pH, as appropriate
- Biochemical evaluation as clinically indicated (NE-A)
- Classify by gastrin level and gastric pH
    - Elevated gastrin levels are usually suggestive of type 1 or type 2 tumors

# Hypergastrinemic / Type 1 (atrophic gastritis, or high gastric pH)

- Vitamin B12 level
- After baseline gastrin, following gastrin and CgA levels is not recommended
- For rare, greater than 2 cm, type 1 gastric tumors, workup should include multiphasic CT or MRI of the abdomen
- First-line treatment: endoscopic treatment (NE-C)

# Hypergastrinemic / Type 2 (Zollinger-Ellison; no atrophic gastritis, low gastric pH)

- Multiphasic abdomen CT or MRI (NE-B)
    - Multiphasic imaging is performed with IV contrast in arterial and portal venous phases
- SSTR-PET/CT or SSTR-PET/MRI (NE-B)
    - Skull vertex to mid-thigh, with multiphase IV contrast when possible
    - Data are limited on the optimal timing of scans following administration of SSAs
    - SSTR-PET tracers: 68Ga-DOTATATE, 64Cu-DOTATATE, and 68Ga-DOTATOC
- First-line treatment: endoscopic treatment (NE-C)
    - And multidisciplinary approach to treat the underlying gastrinoma
    - See PanNET-3 for identification and treatment of the gastrin-producing tumor

# Normal gastrin / Type 3 (normal gastric pH)

- Type 3 gastric NETs (gNETs) are sporadic and unifocal
- Endoscopic ultrasound (EUS) to determine depth of invasion and assess for lymphadenopathy
- Multiphasic abdomen CT or MRI (NE-B)
    - Multiphasic imaging is performed with IV contrast in arterial and portal venous phases
- SSTR-PET/CT or SSTR-PET/MRI (NE-B)
    - Skull vertex to mid-thigh, with multiphase IV contrast when possible
    - Data are limited on the optimal timing of scans following administration of SSAs
    - SSTR-PET tracers: 68Ga-DOTATATE, 64Cu-DOTATATE, and 68Ga-DOTATOC
- First-line treatment: partial or total gastrectomy, based on tumor location, with regional lymphadenectomy (preferred) (NE-D)
- Or, if no evidence of regional lymphadenopathy on EUS or other imaging
    - Consider endoscopic resection (NE-C)
        - Reserve endoscopic resection for small, less than 1 cm, superficial, low-grade tumors
    - Or surgical wedge resection (NE-D)

# PPI-induced

- Increasing evidence that patients on long-term PPI therapy may be at increased risk of developing gNETs
    - These appear to have a much lower propensity to metastasize than sporadic type 3 tumors
- First-line treatment: endoscopic treatment (NE-C)

# Next

- Type 1 or type 2 with metastatic disease, go to NET-9
- Type 3 after resection, surveillance, go to NET-8
- Type 2, gastrin-producing tumor identification and treatment, see PanNET-3
