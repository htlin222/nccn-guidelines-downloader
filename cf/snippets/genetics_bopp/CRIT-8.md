+++
id           = "genetics_bopp/CRIT-8"
gid          = "genetics_bopp"
ref          = "CRIT-8"
page         = 36
title        = "Testing criteria for Cowden syndrome/PTEN hamartoma tumor syndrome"
nccn_version = "3.2026"
nccn_date    = "02/19/26"
generated    = "2026-08-30"
see_also     = ["CRIT-1", "CRIT-8A", "GENE-1"]

[facets]
disease   = "genetics_bopp"
biomarker = "pten"
timepoint = "genetic-testing"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "known_pten_variant"
type = "enum"
options = ["yes", "no", "unknown"]
[[variables]]
name = "macrocephaly"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "personal_history"
type = "text"
[[variables]]
name = "major_criteria"
type = "text"
[[variables]]
name = "minor_criteria"
type = "text"
[[variables]]
name = "family_history"
type = "text"
+++

# Source

- NCCN Hereditary Cancer Testing Criteria v3.2026, CRIT-8, p36
- Testing criteria for Cowden syndrome (CS)/PTEN hamartoma tumor syndrome (PHTS)
- These are testing criteria; clinical diagnostic criteria can be found on CRIT-8A
- Major and minor criteria are on CRIT-8A
- If two criteria involve the same structure/organ/tissue, both may be included as criteria
- Current evidence does not support testing for succinate dehydrogenase (SDH) gene P/LP variants in patients with PHTS
- For further details regarding the nuances of genetic counseling and testing, see EVAL-A
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Known PTEN P/LP variant in the family: ___ (known_pten_variant)
- Macrocephaly: ___ (macrocephaly)
- Personal history: ___ (personal_history)
- Major criteria present (CRIT-8A): ___ (major_criteria)
- Minor criteria present (CRIT-8A): ___ (minor_criteria)
- Family history: ___ (family_history)

# Testing is clinically indicated in the following scenarios

- See General Testing Criteria on CRIT-1
- Individual from a family with a known PTEN P/LP variant
    - When PTEN is included as part of a multigene panel, an individual does not need to meet these testing criteria if testing criteria on other testing criteria pages are met
- Individual with a personal history of Bannayan-Riley-Ruvalcaba syndrome (BRRS)
- Individual meeting clinical diagnostic criteria for CS/PHTS
    - Clinical diagnostic criteria are on CRIT-8A (Pilarski R, et al. J Natl Cancer Inst 2013)
- Individual not meeting clinical diagnostic criteria for CS/PHTS, with a personal history of any one of:
    - Adult Lhermitte-Duclos disease (cerebellar tumors)
    - Autism spectrum disorder and macrocephaly
    - Two or more biopsy-proven trichilemmomas
    - Two or more major criteria, one of which must be macrocephaly
    - Three major criteria, without macrocephaly
    - One major and ≥3 minor criteria
        - If an individual has two or more major criteria, such as breast cancer and nonmedullary thyroid cancer, but does not have macrocephaly, one of the major criteria may be included as one of the three minor criteria to meet testing criteria
    - ≥4 minor criteria
- Individual with a relative with a clinical diagnosis of CS/PHTS or BRRS for whom testing has not been performed
    - Individual must have any one major criterion, or
    - Individual must have two minor criteria
- PTEN P/LP variant detected by tumor genomic testing on any tumor type in the absence of germline analysis
    - This should prompt a careful evaluation of personal and family history of the individual to determine the yield of germline sequencing
    - Somatic PTEN P/LP variants are common in many tumor types in absence of germline P/LP variant

# Family history criteria

- For an individual who is unaffected, or affected but does not meet the criteria above
    - Individual with a first-degree or second-degree untested, deceased blood relative meeting any of the criteria listed above

# Next

- CS/PHTS testing criteria met, go to GENE-1
    - Individualized recommendations according to personal and family history
- If CS/PHTS testing criteria not met, consider testing criteria for other hereditary syndromes, if appropriate
