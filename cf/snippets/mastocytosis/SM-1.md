+++
id           = "mastocytosis/SM-1"
gid          = "mastocytosis"
ref          = "SM-1"
page         = 6
title        = "Diagnostic algorithm for the patient presenting with signs or symptoms of mastocytosis"
nccn_version = "3.2026"
nccn_date    = "07/10/26"
generated    = "2026-08-27"
see_also     = ["SM-2", "SM-A", "SM-B", "SM-C", "SM-D", "SM-I", "SM-J", "SM-L"]

[facets]
disease   = "mastocytosis"
histology = "mastocytosis"
biomarker = ["kit", "pdgfra"]
timepoint = ["diagnosis", "workup"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "presenting_symptoms"
type = "text"
[[variables]]
name = "anaphylaxis"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "tryptase"
type = "text"
[[variables]]
name = "mis"
type = "enum"
options = ["present", "absent", "not-assessed"]
[[variables]]
name = "eosinophilia"
type = "enum"
options = ["present", "absent"]
[[variables]]
name = "kit_d816v"
type = "enum"
options = ["positive", "negative", "not-done"]
[[variables]]
name = "rema_score"
type = "number"
+++

# Source

- NCCN Systemic Mastocytosis v3.2026, SM-1, p6
- Applies to the patient presenting with signs or symptoms of mastocytosis
- Diagnosis of mastocytosis and its subtypes requires a combination of histopathologic, clinical, laboratory, and cytogenetic/molecular analyses
    - Classification of Mastocytosis (SM-A)
    - Diagnostic Criteria for Cutaneous Mastocytosis (SM-B)
    - Diagnostic Criteria for Systemic Mastocytosis (SM-C)
    - Diagnostic Criteria for the Variants of Systemic Mastocytosis (SM-D)
- All recommendations category 2A unless stated otherwise

# Assessment

- ___ (age) yo
- Suspected mast cell activation symptoms: ___ (presenting_symptoms)
- Anaphylaxis: ___ (anaphylaxis)
- Serum tryptase level: ___ (tryptase)
    - May be under 20 ng/mL, or only transiently elevated
- Biopsy-proven adult-onset mastocytosis in the skin (MIS): ___ (mis)
- Eosinophilia: ___ (eosinophilia)
- KIT D816V: ___ (kit_d816v)
- REMA score (SM-I): ___ (rema_score)

# Entry into the algorithm

- Suspected mast cell activation symptoms or anaphylaxis, and/or increased serum tryptase level
    - Counsel the patient about the signs/symptoms and potential triggers of mast cell activation (SM-J)
    - Multidisciplinary collaboration with subspecialists is recommended (SM-L)
        - Anesthesia for procedures/surgery
        - High-risk obstetrics for pregnancy
- or Biopsy-proven adult-onset mastocytosis in the skin (MIS)

# Evaluation for systemic mastocytosis

- Bone marrow biopsy, or biopsy of organ with suspected extracutaneous involvement
    - If no MIS and high-sensitivity KIT D816V mutation testing is negative in the peripheral blood, the REMA score (SM-I) may be a useful decision tool to decide if bone marrow evaluation is necessary
        - High-sensitivity testing means digital droplet polymerase chain reaction (ddPCR) or KIT D816V allele-specific PCR
        - Bone marrow biopsy should be considered if the REMA score is 2 or higher
- Molecular testing for KIT D816V (SM-2)
    - If needed, additional KIT gene sequencing
- Mast cell immunophenotyping using flow cytometry and/or immunohistochemistry (IHC)
    - Flow cytometry markers: CD117, CD25, CD30, CD2
    - IHC markers: CD117, CD25, CD30, CD2, tryptase
    - Also see SM-2
- Screen for FIP1L1::PDGFRA if eosinophilia is present and KIT D816V is negative
    - Fluorescence in situ hybridization (FISH) evaluation for other MLN tyrosine kinase (TK) gene fusions may be considered

# Diagnostic criteria and resulting diagnosis

- At least 1 major + 1 minor criteria, or 3 or more minor criteria, per WHO
    - or 1 major criterion, or 3 or more minor criteria, per ICC
    - Diagnosis: systemic mastocytosis (SM)
- Fewer than 3 minor SM criteria fulfilled (KIT D816V+ and/or CD25+ mast cells)
    - Diagnosis: monoclonal mast cell activation syndrome (MMAS), also referred to as primary mast cell activation syndrome (MCAS)
    - Specific criteria have been established for primary and secondary MCAS
- KIT wild-type and normal mast cell morphology/immunophenotype
    - Consider other causes for mast cell activation, eg, secondary MCAS: allergies, drugs, connective tissue disorders, infections
    - or Idiopathic MCAS/anaphylaxis
- WHO criteria for SM not fulfilled and MIS present
    - Diagnosis: cutaneous mastocytosis (CM)
    - Management of CM is not included in these guidelines
    - Referral to centers with expertise in CM is strongly recommended
- Any of the above may be accompanied by hereditary alpha-tryptasemia (HaT)
    - Multisystem disorder characterized by duplications and triplications in the TPSAB1 gene encoding alpha-tryptase
    - Associated with elevation of the basal serum tryptase level
    - Symptoms include cutaneous flushing and pruritus, dysautonomia, functional gastrointestinal symptoms, chronic pain, and connective tissue abnormalities including joint hypermobility
    - May be diagnosed alone, but is also enriched in patients with SM, especially indolent or smoldering SM (ISM/SSM)
    - May also be found in patients with CM
    - Associated with an increased risk of severe mediator symptoms/anaphylaxis

# Next

- Systemic mastocytosis, go to SM-2
- Monoclonal mast cell activation syndrome (MMAS/primary MCAS), no further pathway on this page
- Secondary MCAS or idiopathic MCAS/anaphylaxis, no further pathway on this page
- Cutaneous mastocytosis, refer to a center with expertise in CM
