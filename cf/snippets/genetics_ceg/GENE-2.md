+++
id           = "genetics_ceg/GENE-2"
gid          = "genetics_ceg"
ref          = "GENE-2"
page         = 117
title        = "Cancer risk management for APC promoter 1B pathogenic variants and GAPPS"
nccn_version = "1.2026"
nccn_date    = "06/16/26"
generated    = "2026-08-30"
see_also     = ["GENE-1", "GENE-3", "FAP-1", "HGAST-1"]

[facets]
disease   = "genetics_ceg"
biomarker = "apc"
timepoint = ["genetic-testing", "surveillance", "risk-reduction"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "variant_type"
type = "enum"
options = ["point-mutation-promoter-1b", "deletion-or-indel-including-promoter-1b", "not-characterized"]
[[variables]]
name = "family_history_colorectal"
type = "text"
[[variables]]
name = "family_history_gastric"
type = "text"
[[variables]]
name = "gastric_polyp_burden"
type = "text"
[[variables]]
name = "gastric_polyp_distribution"
type = "text"
[[variables]]
name = "gastric_dysplasia"
type = "enum"
options = ["present", "absent", "not-assessed"]
[[variables]]
name = "duodenal_polyposis"
type = "enum"
options = ["present", "absent", "not-assessed"]
[[variables]]
name = "colonoscopy_findings"
type = "text"
[[variables]]
name = "gastrectomy_status"
type = "enum"
options = ["done", "not-done", "under-discussion"]
+++

# Source

- NCCN Genetic/Familial High-Risk Assessment: Colorectal, Endometrial, Esophageal, and Gastric v1.2026, GENE-2, p117
- Cancer risk management based on genetic test results
- Applies to APC promoter 1B pathogenic variants, and to gastric adenocarcinoma and proximal polyposis of the stomach (GAPPS)
- Polyposis defined as ≥10 polyps
- All recommendations category 2A unless otherwise indicated
- References on GENE-19

# Assessment

- ___ (age) yo
- APC promoter 1B variant type: ___ (variant_type)
- Family history of colorectal polyps and cancer: ___ (family_history_colorectal)
- Family history of gastric cancer: ___ (family_history_gastric)
- Gastric polyp burden on endoscopy: ___ (gastric_polyp_burden)
- Distribution of gastric polyps: ___ (gastric_polyp_distribution)
- Dysplasia in gastric polyps: ___ (gastric_dysplasia)
- Duodenal polyposis: ___ (duodenal_polyposis)
- Colonoscopy findings: ___ (colonoscopy_findings)
- Risk-reducing total gastrectomy: ___ (gastrectomy_status)

# Colon cancer and colorectal phenotype

- Estimated absolute risk: insufficient data to define
- Management
    - Consider a colonoscopy at age 25 y
    - Earlier than age 25 y based on family history of colorectal polyps and cancer
- Strength of evidence: limited
- Colorectal phenotype: rare, based on limited evidence

# Endometrial cancer

- No evidence of increased risk

# Gastric cancer

- Polyposis of stomach
    - Gastric polyps restricted to body and fundus, with no evidence of duodenal polyposis
    - >100 polyps carpeting the proximal stomach in the index case, or >30 polyps in a first-degree relative
    - And family history of gastric cancer or dysplastic fundic gland polyposis
    - Predominantly FGP, some having regions of dysplasia
- Absolute risk: stomach cancer 30%
- Management
    - Consider risk-reducing total gastrectomy from the third decade
    - Annual EGD from age 15 y
        - Early surgical consideration if advanced pathology is found
    - Consideration of total gastrectomy is warranted for patients with GAPPS with dysplastic gastric polyps on endoscopy

# Other risks

- Other cancers: unknown or insufficient evidence

# How the variant type changes the colon question

- Point mutations in promoter 1B of the APC gene
    - Associated with GAPPS
    - Rarely associated with colonic polyposis
- Deletions and indels that include all or some of promoter 1B and portions of the APC gene
    - Associated with colonic polyposis
- Because available evidence is limited, baseline colonoscopy at age 25 is suggested to assess for the presence of colonic polyposis in patients with APC promoter 1B PVs
