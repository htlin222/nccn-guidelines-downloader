+++
id           = "cml/CML-5"
gid          = "cml"
ref          = "CML-5"
page         = 14
title        = "Choosing the next TKI after resistance, based on the BCR::ABL1 mutation profile"
nccn_version = "2.2027"
nccn_date    = "07/10/26"
generated    = "2026-08-27"
see_also     = ["CML-3", "CML-4", "CML-6"]

[facets]
disease   = "cml"
histology = "myeloid"
biomarker = "bcr-abl"
timepoint = "relapsed-refractory"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "phase"
type = "enum"
options = ["CP-CML", "AP-CML", "BP-CML"]
[[variables]]
name = "primary_tki"
type = "text"
[[variables]]
name = "prior_tki_count"
type = "number"
[[variables]]
name = "resistance_or_intolerance"
type = "text"
[[variables]]
name = "mutation"
type = "text"
+++

# Source

- NCCN Chronic Myeloid Leukemia v2.2027, CML-5, p14
- Applies to disease resistant to primary TKI treatment, when choosing an alternate TKI
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, ___ (phase)
- Primary treatment TKI ___ (primary_tki)
- Number of prior TKIs ___ (prior_tki_count)
- Resistance or intolerance ___ (resistance_or_intolerance)
- BCR::ABL1 kinase domain mutation status ___ (mutation)

# Choosing the alternate TKI

- Disease resistant to primary treatment with imatinib
    - Treat with an alternate TKI
    - Take BCR::ABL1 kinase domain mutation status into account
    - INS has been reported in patients with disease not responding to imatinib
        - There are not enough data to confirm that 2G TKIs could overcome this resistance
- Disease resistant to primary treatment with asciminib, bosutinib, dasatinib, or nilotinib
    - May be treated with an alternate TKI, other than imatinib
    - Take BCR::ABL1 kinase domain mutation status into account
- Subsequent therapy with an alternate TKI would be effective only in patients with identifiable BCR::ABL1 mutations that confer resistance to TKI therapy
- Ponatinib is preferred for patients with no identifiable BCR::ABL1 mutations
- Select BCR::ABL1 kinase domain mutations may be more sensitive to certain TKIs based on the IC50 values
    - See Discussion

# Asciminib as an option

- Option for CP-CML and AP-CML having the T315I mutation
- Option for previously treated CP-CML and AP-CML
- Contraindicated in patients with CML lacking ABL1 exon 2
    - eg, b2(e13)a3 isoform
    - eg, b3(e14)a3 isoform

# Ponatinib as an option

- Option for a T315I mutation in any phase
    - Preferred for AP-CML or BP-CML
- Option for CP-CML with resistance or intolerance to at least two prior TKIs
- Option for AP-CML or BP-CML for whom no other TKI is indicated
- To reduce the risk of cardiovascular toxicities
    - Initiation of ponatinib at lower doses is an appropriate strategy
    - Dose reduction, with close monitoring, in patients who achieve optimal responses is an appropriate strategy
    - See the Discussion section for Dose Modifications of TKI Therapy

# Contraindicated mutations, by therapy

- Mutations contraindicated for imatinib are too numerous to include
- Do NOT treat with asciminib
    - A337T
    - P465S
    - M244V
    - F359C/I/V
- Do NOT treat with bosutinib
    - T315I
    - V299L
    - G250E
    - F317L
        - Bosutinib has minimal activity against F317L mutation
        - Nilotinib may be preferred over bosutinib in patients with F317L mutation
- Do NOT treat with dasatinib
    - T315I/A
    - F317C/I/L/V
    - V299L
- Do NOT treat with nilotinib
    - T315I
    - Y253H
    - E255K/V
    - F359C/I/V
- Ponatinib or allogeneic HCT
    - No contraindicated mutations listed
    - Compound mutations, defined as harboring at least 2 mutations in the same BCR::ABL1 allele, can cause resistance to ponatinib
        - Uncommon following treatment with bosutinib, dasatinib, or nilotinib
