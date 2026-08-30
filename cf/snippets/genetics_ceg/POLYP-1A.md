+++
id           = "genetics_ceg/POLYP-1A"
gid          = "genetics_ceg"
ref          = "POLYP-1A"
page         = 84
title        = "Footnotes to the adenomatous polyposis testing criteria: what influences offering testing, what the panel must cover, and how to test relatives"
nccn_version = "1.2026"
nccn_date    = "06/16/26"
generated    = "2026-08-30"
see_also     = ["POLYP-1", "MAP-1"]

[facets]
disease   = "genetics_ceg"
biomarker = ["apc", "mutyh", "axin2", "grem1", "pole", "pold1", "msh3", "nthl1", "fap"]
timepoint = "genetic-testing"

[[variables]]
name = "age_of_onset"
type = "number"
[[variables]]
name = "family_history"
type = "text"
[[variables]]
name = "crc_history"
type = "text"
[[variables]]
name = "other_features"
type = "text"
[[variables]]
name = "somatic_apc"
type = "text"
[[variables]]
name = "polyp_type_in_relative"
type = "text"
[[variables]]
name = "parent_mutyh_status"
type = "text"
+++

# Source

- NCCN Genetic/Familial High-Risk Assessment: Colorectal, Endometrial, Esophageal, and Gastric v1.2026, POLYP-1A, p84
- Footnotes to the adenomatous polyposis testing criteria on POLYP-1
- All recommendations category 2A unless otherwise indicated

# Assessment

- Age of onset ___ (age_of_onset)
- Family history ___ (family_history)
- Personal history of CRC ___ (crc_history)
- Presence of other features ___ (other_features)
- P/LP APC variant reported on tumor somatic testing ___ (somatic_apc)

# The retinal finding, by its other name

- Also known as retinal pigment epithelium (RPE) hamartomas associated with FAP (RPEH-FAP)

# What may influence whether genetic testing is offered

- Age of onset
- Family history
- Personal history of CRC
- Presence of other features

# A P/LP APC variant identified on tumor somatic testing

- Prompt a careful evaluation of the personal and family history of the individual, to determine the yield of germline sequencing
- Somatic APC P/LP variants are common in many tumor types in the absence of a germline P/LP variant
- Mandelker D, et al. Ann Oncol 2019;30:1221-1231

# Genes beyond APC and MUTYH

- There are clinically relevant yet rarer genes that can cause a polyposis syndrome
    - May be phenotypically indistinguishable from APC/MUTYH polyposis
- Rare PVs associated with adenomatous polyposis include, but are not limited to
    - Monoallelic PVs in AXIN2, GREM1, POLE, and POLD1
    - Biallelic PVs in MLH3, MSH3, MBD4, and NTHL1

# What the testing must cover

- Additional testing may be indicated based on personal and family medical history
- MGPT should include all polyposis and CRC genes
    - Stanich P, et al. Clin Gastroenterol Hepatol 2019;17:2008-2015
- If the evaluation is based on family history of at least one relative with polyposis, the type of polyps in the affected relative may guide testing
    - Type of polyps in the affected relative, if known ___ (polyp_type_in_relative)

# Testing relatives of a patient with MUTYH-associated polyposis (MAP)

- Siblings of a patient with MAP
    - Site-specific testing for the familial PVs is recommended
- An unaffected parent, when the other parent has MAP
    - Full sequencing of MUTYH may be considered
    - If that unaffected parent is found to have one MUTYH PV, testing the adult offspring for the familial MUTYH PVs is indicated
    - If that unaffected parent is not tested, comprehensive testing of MUTYH should be considered in the adult offspring
- Adult offspring of MUTYH heterozygotes
    - MUTYH status of the other parent ___ (parent_mutyh_status)
    - Offer testing if the other parent is also a heterozygote
    - Testing could still be offered if the other parent is not a heterozygote and either
        - Management would change, if they have a first-degree relative affected with CRC
        - Or it would inform reproductive risks, since their future children could be at risk for MAP
