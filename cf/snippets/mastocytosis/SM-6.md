+++
id           = "mastocytosis/SM-6"
gid          = "mastocytosis"
ref          = "SM-6"
page         = 11
title        = "Treatment for aggressive systemic mastocytosis, and what to do at inadequate response"
nccn_version = "3.2026"
nccn_date    = "07/10/26"
generated    = "2026-08-27"
see_also     = ["SM-5", "SM-D", "SM-G", "SM-I", "SM-J", "SM-K", "SM-L"]

[facets]
disease   = "mastocytosis"
histology = "mastocytosis"
biomarker = ["kit", "pdgfra"]
timepoint = ["primary-treatment", "transplant", "relapsed-refractory"]

[[variables]]
name = "c_findings"
type = "text"
[[variables]]
name = "platelets"
type = "number"
[[variables]]
name = "kit_d816v"
type = "enum"
options = ["positive", "negative", "unknown"]
[[variables]]
name = "fip1l1_pdgfra"
type = "enum"
options = ["present", "absent", "not tested"]
[[variables]]
name = "tryptase"
type = "number"
[[variables]]
name = "organomegaly"
type = "text"
+++

# Source

- NCCN Systemic Mastocytosis v3.2026, SM-6, p11
- Applies to ASM, coming from SM-5
- ASM = 1 or more "C-findings" per WHO, ICC criteria, or eligible organ damage findings per clinical trial response criteria
    - Diagnostic criteria for the variants of SM: SM-D
    - IWG-MRT-ECNM and modified IWG-MRT-ECNM criteria establish eligible organ damage findings for clinical trial enrollment and adjudicate response to therapy
    - The proposed ECNM-AIM response criteria use the same organ damage to assess response (SM-G)
    - B- and C-findings are used for the diagnosis of the WHO subtype of SM (SM-D, SM-E, SM-F)
- Adverse prognostic variables and risk stratification in SM: SM-I
- All recommendations category 2A unless stated otherwise

# Assessment

- C-findings / eligible organ damage findings: ___ (c_findings)
- Platelet count ___ (platelets) x 10^9/L
- KIT D816V ___ (kit_d816v)
- FIP1L1::PDGFRA gene fusion ___ (fip1l1_pdgfra)
- Serum tryptase ___ (tryptase)
- Hepatomegaly / splenomegaly ___ (organomegaly)

# Supportive care for every patient

- Referral to specialized centers with expertise in mastocytosis is strongly recommended
- Counsel patients regarding signs and symptoms of disease
    - Counsel about the signs/symptoms and potential triggers of mast cell activation (SM-J)
    - Multidisciplinary collaboration with subspecialists is recommended (SM-L)
        - Anesthesia for procedures/surgery
        - High-risk obstetrics for pregnancy
    - Taylor F, et al. Leuk Res 2021
- Avoid known triggers of mast cell activation
- Carry injectable epinephrine (2 auto injectors) to manage anaphylaxis
    - Anti-mediator drug therapy approaches for mast cell activation symptoms: SM-K

# Treatment, preferred

- Clinical trial
- Avapritinib
    - Only if platelets 50 x 10^9/L or higher
    - Not recommended for patients with platelet counts below 50 x 10^9/L
    - Refer to the package insert for full prescribing information, dose modifications, and monitoring for adverse reactions
- Midostaurin
    - Refer to the package insert for full prescribing information, dose modifications, and monitoring for adverse reactions

# Treatment, other recommended

- Cladribine
    - May be useful when rapid debulking of disease is required in advanced SM
- Peginterferon alfa-2a, with or without prednisone
    - Cytostatic mechanism of action, may be more suitable for slowly progressive disease without the need for rapid cytoreduction
    - If peginterferon alfa-2a is unavailable, use of other available pegylated interferons is appropriate, eg, ropeginterferon alfa-2b-njft

# Treatment, useful in certain circumstances

- Imatinib
    - For KIT D816V mutation negative or unknown
    - WDSM eosinophilia is present with FIP1L1::PDGFRA gene fusion

# Response assessment

- See organ damage assessment and response criteria (SM-G)
- Clinical benefit may not reach the threshold of the clinical trial response criteria
- Adequate response
    - Continue treatment
    - And/or consider evaluation for allogeneic HCT
- Inadequate response, or intolerance / no response, or loss of response
    - Return or progression of SM-related organ damage
    - Symptomatic or progressive hepatomegaly or splenomegaly
    - Progressive disease-related symptoms
    - Intolerance to drug therapy

# Next

- Adequate response, continue treatment and/or consider evaluation for allogeneic HCT
- Inadequate response, intolerance, no response, or loss of response, re-stage
    - Perform as clinically indicated, if supported by increased symptoms and signs of progression
        - Bone marrow aspirate and biopsy
        - Serum tryptase level
        - Additional staging studies
    - Then consider subsequent-line therapy
    - And consider allogeneic HCT
