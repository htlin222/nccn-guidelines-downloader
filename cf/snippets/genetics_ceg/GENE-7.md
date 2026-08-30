+++
id           = "genetics_ceg/GENE-7"
gid          = "genetics_ceg"
ref          = "GENE-7"
page         = 122
title        = "Cancer risk management for an EPCAM 3' deletion without MSH2 involvement, and for GALNT12"
nccn_version = "1.2026"
nccn_date    = "06/16/26"
generated    = "2026-08-30"
see_also     = ["GENE-6", "GENE-8", "LS-C", "GENE-19"]

[facets]
disease   = "genetics_ceg"
biomarker = ["epcam", "lynch", "msh2"]
timepoint = ["genetic-testing", "screening", "surveillance"]

[[variables]]
name = "gene_result"
type = "text"
[[variables]]
name = "deletion_extent"
type = "enum"
options = ["3prime-epcam-only", "extends-into-msh2", "not-characterized"]
[[variables]]
name = "variant_type"
type = "enum"
options = ["large-deletion", "single-lof-variant", "not-characterized"]
[[variables]]
name = "family_cancer_history"
type = "text"
[[variables]]
name = "personal_cancer_history"
type = "text"
[[variables]]
name = "polyp_count"
type = "number"
[[variables]]
name = "colonoscopy_findings"
type = "text"
[[variables]]
name = "partner_mmr_status"
type = "text"
+++

# Source

- NCCN Genetic/Familial High-Risk Assessment: Colorectal, Endometrial, Esophageal, and Gastric v1.2026, GENE-7, p122
- Cancer risk management based on genetic test results
- Covers EPCAM 3' deletion without MSH2 involvement / Lynch syndrome, and GALNT12
- Polyposis is defined as ≥10 polyps
- All recommendations category 2A unless otherwise indicated
- References on GENE-19

# Assessment

- Genetic test result ___ (gene_result)
- EPCAM variant type ___ (variant_type)
    - Only large deletions including the 3' untranslated regions of EPCAM cause LS
    - Single loss of function (LOF) PVs do not cause LS, but are carriers of an autosomal recessive condition called congenital tufting enteropathy
- Extent of the EPCAM deletion ___ (deletion_extent)
    - The risks in this table relate only to a pathogenic germline deletion in the 3' end of EPCAM, not extending to the MSH2 gene
- Family cancer history ___ (family_cancer_history)
- Personal cancer history ___ (personal_cancer_history)
- Cumulative polyp count ___ (polyp_count)
- Colonoscopy findings ___ (colonoscopy_findings)
- Partner tested for a PV in the same MMR gene ___ (partner_mmr_status)

# EPCAM 3' deletion without MSH2 involvement - colon cancer and colorectal phenotype

- Absolute risk: 75%
- Management: Lynch syndrome (LS-C)
- Strength of evidence: very strong
- Colorectal phenotype: no polyposis
    - Polyp spectrum can include adenomas and sessile serrated lesions

# EPCAM 3' deletion without MSH2 involvement - endometrial cancer

- Absolute risk: 12%–25%
- Management: Lynch syndrome (LS-C)
- Strength of evidence: very strong

# EPCAM 3' deletion without MSH2 involvement - gastric cancer

- Absolute risk: minimal data, but case series data suggest increased risk

# EPCAM 3' deletion without MSH2 involvement - other risks

- Other cancers: Lynch syndrome (LS-C)

# EPCAM counseling and caveats

- Counsel for the risk of the rare autosomal recessive condition CMMRD syndrome in offspring
    - CMMRD can occur if both parents are a carrier of a PV in the same MMR gene
- The Panel emphasizes the relative lack of data for EPCAM-associated LS
    - The risk estimates above are based on a small number of older studies that likely have ascertainment biases
- Differential cancer risks by deletion extent, from Kempers MJ, et al. Lancet Oncol 2011;12:4955
    - A deletion encompassing the 3' end of EPCAM and extending into the MSH2 gene, including the 5' UTR, the promoter, or the coding region, induces epigenetic silencing of MSH2
    - That group has cancer risks on par with MSH2-associated LS, particularly with regard to endometrial cancer risk
    - The Panel recommends that such individuals be managed the same as standard MSH2-associated LS

# GALNT12 - colon cancer and colorectal phenotype

- Estimated absolute risk: 5%–10%
- Management
    - Evidence insufficient to provide specialized CRC screening recommendations
    - Manage based on family history
    - See NCCN Guidelines for Colorectal Cancer Screening
- Strength of evidence: limited
- Colorectal phenotype: no polyposis

# GALNT12 - other organs

- Endometrial cancer: no evidence of increased risk
- Gastric cancer: no evidence of increased risk
- Other cancers: unknown or insufficient evidence

# Next

- Pathogenic germline deletion in the 3' end of EPCAM, not extending to MSH2, manage as Lynch syndrome (LS-C)
- Deletion of the 3' end of EPCAM extending into the MSH2 gene, manage the same as standard MSH2-associated LS
- Single loss of function EPCAM PV, does not cause LS, counsel as a carrier of congenital tufting enteropathy
- GALNT12 pathogenic variant, manage based on family history, see NCCN Guidelines for Colorectal Cancer Screening
