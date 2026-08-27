+++
id           = "mds/MDS-1"
gid          = "mds"
ref          = "MDS-1"
page         = 6
title        = "Initial evaluation of cytopenia(s) with suspected myelodysplasia"
nccn_version = "3.2026"
nccn_date    = "01/12/26"
generated    = "2026-08-27"
see_also     = ["MDS-2", "MDS-3", "MDS-A", "MDS-B", "MDS-C", "MDS-D", "MDS-E"]

[facets]
disease   = "mds"
histology = "myelodysplastic"
timepoint = ["workup", "diagnosis"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "cytopenias"
type = "text"
[[variables]]
name = "pb_findings"
type = "text"
[[variables]]
name = "mds_type"
type = "enum"
options = ["primary", "therapy-related"]
[[variables]]
name = "transfusion_history"
type = "text"
+++

# Source

- NCCN Myelodysplastic Syndromes v3.2026, MDS-1, p6
- Applies to cytopenia(s) with suspected myelodysplasia
- Footnotes on MDS-1A
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo
- Cytopenia(s) ___ (cytopenias)
    - Cytopenias are defined as values lower than standard lab hematologic levels, being cognizant of age, sex, ethnic, and altitude norms
- Peripheral blood findings ___ (pb_findings)
    - MDS is also suspected in the presence of peripheral blood dysplasia, blasts, or MDS-associated cytogenetic abnormalities
- Primary or therapy-related ___ (mds_type)
    - Diagnostic features of primary and therapy-related MDS require cytopenia(s) and hematopoietic cell dysplasia (MDS-A)

# Initial evaluation

- History and physical (H&P)
- Complete blood count (CBC), platelets, differential, reticulocyte count
- Examination of peripheral blood smear
- Bone marrow aspiration with iron stain + biopsy + cytogenetics by standard karyotyping
    - Recommend testing the bone marrow sample with reticulin stain for fibrosis
    - If standard cytogenetics (with at least 20 metaphases) cannot be obtained, perform a chromosome microarray analysis (CMA; also known as chromosome genomic array testing [CGAT]) or an MDS-related fluorescence in situ hybridization (FISH) panel
    - If karyotype is normal, then consider CMA
    - CMA will detect not only somatic but also constitutional (germline) changes
    - Table of Common Cytogenetic Abnormalities in MDS (MDS-A)
- Genetic testing for somatic mutations (ie, acquired mutations) in genes associated with myelodysplastic syndromes (MDS)
    - If MDS is read out by the evaluating pathologist, reflex testing including cytogenetics and molecular testing should be performed as a standard practice
    - A unified report that includes molecular-genetic results with pathological description is required for appropriate diagnosis and therapy selection
    - Assay bone marrow or peripheral blood cells using gene panels that include the genes listed on MDS-C
    - These gene mutations can establish the presence of clonal hematopoiesis, which can help exclude benign causes of cytopenias in cases with non-diagnostic morphology
    - They do not establish a diagnosis of MDS in the absence of clinical diagnostic criteria
    - Clonal hematopoiesis is a frequent consequence of aging, so interpret mutations in MDS-associated genes with caution; in isolation they do not establish a diagnosis of MDS
    - The majority of patients with WHO-defined MDS have a somatic mutation detected in one of the commonly mutated MDS-associated genes
- Serum erythropoietin (EPO), drawn prior to red blood cell (RBC) transfusion
- Serum or RBC folate and vitamin B12 evaluation
    - RBC folate is a more representative measure of folate stores and is the preferred test to serum folate
    - Serum methylmalonic acid testing is an accurate way to assess B12 status and is mandatory to the vitamin B12 evaluation, particularly for patients with possible pernicious anemia
- Serum ferritin, iron, total iron-binding capacity (TIBC)
- Documentation of transfusion history ___ (transfusion_history)
- Thyroid-stimulating hormone (TSH)
- Lactate dehydrogenase (LDH)
- Recommend additional molecular and genetic testing for heritable hematologic malignancy predisposition in a subset of patients, particularly in patients <50 y
    - A heritable hematologic malignancy predisposition syndrome may account for cytopenias with or without MDS in some patients, whether presenting to pediatric or adult care centers (eg, GATA2 deficiency syndrome, Shwachman-Diamond syndrome, telomere biology disorders)
    - Functional laboratory studies
    - Constitutional (germline) genetic testing using large next-generation sequencing (NGS) panels to include genes listed on MDS-E
    - Whole exome or whole genome sequencing complemented with in silico copy number variant (CNV) calling
    - Laboratory analysis for CNVs, such as microarray testing
    - Recommended for patients as shown on MDS-D
- Human immunodeficiency virus (HIV) testing if clinically indicated
- Consider evaluation of copper deficiency in patients with gastrointestinal (GI) malabsorption, severe malnutrition, gastric bypass surgery, or patients on zinc supplementation
- Consider distinction from congenital sideroblastic anemia (CSA)
    - In patients <40 y, CSA is due to disordered mitochondrial heme synthesis, often with distinctive mutational and clinical features
    - Some of these patients will have disease that responds to pyridoxine or thiamine
    - CSA is not MDS
    - CSA may appear late due to lyonization in X-linked sideroblastic anemia

# Next

- Diagnostic criteria for MDS not met but cytopenias present, go to Spectrum of Indolent Myeloid Hematopoietic Disorders (MDS-2)
- Diagnosis of MDS established based on morphologic, cytogenetic, and clinical criteria, go to Additional Testing and Classification (MDS-3)
    - Confirm the diagnosis according to WHO/International Consensus Classification (ICC) criteria for classification (MDS-A), with application of the International Prognostic Scoring System (IPSS) or revised IPSS (IPSS-R) (MDS-B)
    - Report the percentage of marrow myeloblasts based on morphologic assessment, aspirate smears preferred
    - Flow cytometric estimation of blast percentage should not be used as a substitute for morphology in this context
    - In expert hands, expanded flow cytometry (FCM) may be a useful adjunct for diagnosis in difficult cases
    - Patients with karyotypes t(8;21), t(15;17), or inv(16) are considered to have AML even if the marrow blast count is less than 20%, see NCCN Guidelines for Acute Myeloid Leukemia
