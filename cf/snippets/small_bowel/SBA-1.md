+++
id           = "small_bowel/SBA-1"
gid          = "small_bowel"
ref          = "SBA-1"
page         = 7
title        = "Workup of small bowel adenocarcinoma, and the branch by clinical location and MMR status"
nccn_version = "2.2026"
nccn_date    = "04/07/26"
generated    = "2026-08-27"
see_also     = ["SBA-2", "SBA-3", "SBA-4", "SBA-5"]

[facets]
disease   = "small_bowel"
histology = "adenocarcinoma"
biomarker = ["dmmr", "pmmr", "msi-h", "mss", "pole", "pold1", "tmb-high", "dpyd"]
timepoint = ["workup", "staging"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "location"
type = "enum"
options = ["duodenum", "jejunum", "ileum", "ampulla"]
[[variables]]
name = "mmr"
type = "enum"
options = ["pMMR/MSS", "dMMR/MSI-H", "POLE/POLD1 mutation"]
[[variables]]
name = "ca199"
type = "text"
[[variables]]
name = "cea"
type = "text"
+++

# Source

- NCCN Small Bowel Adenocarcinoma v2.2026, SBA-1, p7
- Applies to small bowel adenocarcinoma, and to ampullary cancer at presentation
- Imaging and endoscopy on this page are per Principles of Imaging and Endoscopy (SBA-A)
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Small bowel adenocarcinoma (SBA), clinical location ___ (location)
- MMR/MSI ___ (mmr)
- CA 19-9 ___ (ca199)
- CEA ___ (cea)

# Workup

- Abdomen/pelvis CT or MRI
- Chest CT
- FDG-positron emission tomography (PET)/CT is not indicated
- EGD with EUS, duodenum only
    - EUS should be considered when needed to discern duodenal malignancy from ampullary, distal common bile duct, or pancreatic head malignancy
    - Also consider EUS if other radiologic imaging is insufficient for clinical staging
- Complete blood count (CBC)
- Chemistry profile
- CA 19-9
- Carcinoembryonic antigen (CEA)
- Consider studies for celiac disease
- Biopsy with pathology review
    - Principles of Pathologic Review (SBA-B)
    - Depending on tumor location and patient history, celiac disease or Crohn's disease may need to be assessed
- Mismatch repair (MMR) or microsatellite instability (MSI) testing
    - Principles of Pathologic Review (SBA-B)
- Refer to the NCCN Distress Thermometer and Problem List, which includes social determinants of health
    - See NCCN Guidelines for Distress Management (DIS-A)
- For information on DPYD testing and fluoropyrimidine-associated toxicity, see the NCCN Guidelines for Colon Cancer

# Familial risk assessment

- All patients with small bowel adenocarcinoma (SBA) should be counseled for familial malignancies and considered for risk assessment
    - Lynch syndrome (hereditary non-polyposis colorectal cancer [HNPCC])
    - Familial adenomatous polyposis (FAP)
    - Other polypoid mutations
    - Refer to the NCCN Guidelines for Genetic/Familial High-Risk Assessment: Colorectal, Endometrial, and Gastric

# Next

- Duodenum, pMMR/MSS, go to SBA-2
- Duodenum, dMMR/MSI-H or POLE/POLD1 mutation with ultra-hypermutated phenotype (eg, TMB>50 mut/Mb), go to SBA-3
- Jejunum/ileum, pMMR/MSS, go to SBA-4
- Jejunum/ileum, dMMR/MSI-H or POLE/POLD1 mutation with ultra-hypermutated phenotype (eg, TMB>50 mut/Mb), go to SBA-5
- Ampullary cancer, see NCCN Guidelines for Ampullary Adenocarcinoma
