+++
id           = "antiemesis/PEDAE-13"
gid          = "antiemesis"
ref          = "PEDAE-13"
page         = 54
title        = "Emetogenic potential of pediatric radiopharmaceutical anticancer agents, moderate and minimal emetic risk"
nccn_version = "2.2026"
nccn_date    = "06/24/2026"
generated    = "2026-08-28"
see_also     = ["PEDAE-12", "PEDAE-14"]

[facets]
disease   = "antiemesis"
timepoint = ["prevention", "supportive"]

[[variables]]
name = "rp_agent"
type = "text"
[[variables]]
name = "risk_level"
type = "enum"
options = ["moderate", "minimal"]
[[variables]]
name = "amino_acid_product"
type = "text"
[[variables]]
name = "antiemetic_start"
type = "text"
[[variables]]
name = "glucocorticoid_planned"
type = "enum"
options = ["yes", "no"]
+++

# Source

- NCCN Pediatric Antiemesis v2.2026, PEDAE-13, p54
- Pediatric radiopharmaceutical anticancer agents, emetogenic potential
- Covers the moderate and the minimal emetic risk levels only
- All recommendations category 2A unless otherwise indicated

# Assessment

- Radiopharmaceutical agent: ___ (rp_agent)
- Emetic risk level of that agent: ___ (risk_level)
- Amino acid product accompanying the infusion, if any: ___ (amino_acid_product)
- Antiemetic given at: ___ (antiemetic_start)
- Glucocorticoid planned as antiemetic prophylaxis: ___ (glucocorticoid_planned)

# Moderate emetic risk level

- Moderate emetic risk is a frequency of emesis above 30% and up to 90%
- I-131 MIBG (Iodine-131 Metaiodobenzylguanidine)
- Lutetium Lu-177 dotatate
    - Nausea associated with therapy derives largely from the amino acid infusion accompanying the treatment
    - Variation in emetogenicity is reported between various compounded and commercially available amino acid products
    - Administer antiemetics 30 minutes prior to the start of the amino acid infusion
    - Avoid glucocorticoids as antiemetic prophylaxis, per the Panel
        - Glucocorticoids can induce down-regulation of SST2
        - The manufacturer recommends avoiding repeated administration of high doses of glucocorticoids during Lu-177 dotatate treatment
        - Other agents are available options: 5-HT3 RAs and NK1 RAs

# Minimal emetic risk level

- Minimal emetic risk is a frequency of emesis under 10%
- Sodium iodide I-131
- Yttrium-90 microspheres
