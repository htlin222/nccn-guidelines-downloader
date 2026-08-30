+++
id           = "genetics_ceg/SPS-1"
gid          = "genetics_ceg"
ref          = "SPS-1"
page         = 115
title        = "Serrated polyposis syndrome: clinical diagnosis, and surveillance for the patient and first-degree relatives"
nccn_version = "1.2026"
nccn_date    = "06/16/26"
generated    = "2026-08-30"
see_also     = ["POLYP-1", "POLYP-1A", "MAP-1", "GENE-1"]

[facets]
disease   = "genetics_ceg"
biomarker = ["serrated-polyposis", "mutyh"]
timepoint = ["diagnosis", "genetic-testing", "surveillance"]

[[variables]]
name = "serrated_polyp_count"
type = "number"
[[variables]]
name = "proximal_polyp_count"
type = "number"
[[variables]]
name = "largest_polyp_size_mm"
type = "number"
[[variables]]
name = "polyp_histology"
type = "text"
[[variables]]
name = "adenomas_present"
type = "text"
[[variables]]
name = "family_history_crc"
type = "text"
[[variables]]
name = "prior_childhood_cancer"
type = "text"
[[variables]]
name = "age_youngest_sps_diagnosis"
type = "number"
[[variables]]
name = "age_earliest_family_crc"
type = "number"
+++

# Source

- NCCN Genetic/Familial High-Risk Assessment: Colorectal, Endometrial, and Gastric v1.2026, SPS-1, p115
- Serrated polyposis syndrome (SPS), previously known as hyperplastic polyposis
- These guidelines are based on expert opinion on the current data available
- Definition per WHO Classification of Tumours: Digestive System Tumours, IARC 2019:532-534, and Dekker E, et al. Gastroenterology 2020;158:1520-1523
- Final classification of SPS awaits more definitive genetic/epigenetic molecular characterization
    - These lesions are considered premalignant
    - Until more data are available, manage them similarly to adenomas
- All recommendations category 2A unless otherwise indicated

# Assessment

- Total serrated lesions/polyps to date: ___ (serrated_polyp_count)
- Serrated lesions/polyps proximal to the rectum: ___ (proximal_polyp_count)
- Largest serrated lesion/polyp: ___ (largest_polyp_size_mm) mm
- Histologic subtypes seen: ___ (polyp_histology)
- Adenomas also present: ___ (adenomas_present)
- Family history of CRC or of serrated polyposis: ___ (family_history_crc)
- Prior treatment for Hodgkin lymphoma or other childhood/young adulthood cancer: ___ (prior_childhood_cancer)

# Clinical diagnosis of serrated polyposis

- A clinical diagnosis is considered in an individual who meets at least one of the following empiric criteria
    - Criterion 1: at least 5 serrated lesions/polyps proximal to the rectum
        - All at least 5 mm in size
        - At least 2 being at least 10 mm in size
    - Criterion 2: more than 20 serrated lesions/polyps of any size distributed throughout the large bowel
        - At least 5 being proximal to the rectum
- Counting rules
    - Any histologic subtype of serrated lesion/polyp is included in the final polyp count
        - Hyperplastic polyp
        - Sessile serrated lesion without dysplasia
        - Sessile serrated lesion with dysplasia
        - Traditional serrated adenoma
        - Unclassified serrated adenoma
    - The polyp count is cumulative over multiple colonoscopies
- There may be other clinical scenarios that do not meet these criteria but still increase colon cancer risk and may require additional evaluation per clinical judgment
    - For example, a patient with between 5 and 10 serrated polyps, each less than 1 cm

# What is known about the syndrome

- For the majority of patients with SPS, no cause is identifiable
    - PVs in RNF43 have been identified as a rare cause
    - Biallelic PVs in MUTYH have been identified as a rare cause
    - Several studies have observed SPS occurring in patients who were previously treated for Hodgkin lymphoma and other childhood or young adulthood cancers
- Genetic testing may be favored based on
    - Patient preference
    - Family history of CRC
    - Presence of features that could overlap with other hereditary CRC syndromes, such as adenomas (POLYP-1)
- Adenomas may frequently be found in patients with SPS
- The risk for colon cancer in this syndrome is elevated, although the precise risk remains to be defined
- Extracolonic manifestations of SPS have not been consistently identified to date, but literature in this area may evolve
- Occasionally, more than one affected case of serrated polyposis is seen in a family

# Surveillance for the individual with serrated polyposis

- High-quality colonoscopy with polypectomy until all polyps at least 5 mm are removed
    - Clearing of all polyps is preferable but not always possible
- Then colonoscopy every 1 to 3 y, depending on number and size of polyps
- Consider surgical referral if colonoscopic treatment and/or surveillance is inadequate

# Surveillance for first-degree relatives

- The risk of CRC in first-degree relatives of individuals with serrated polyposis is elevated
- First-degree relatives are encouraged to have colonoscopy at the earliest of the following
    - Age 40 y
    - Same age as youngest diagnosis of serrated polyposis, if uncomplicated by cancer: ___ (age_youngest_sps_diagnosis)
        - Youngest diagnosis of serrated polyposis is defined as the time when the diagnostic criteria for serrated polyposis were met
    - Ten years earlier than earliest diagnosis in family with CRC secondary to serrated polyposis: ___ (age_earliest_family_crc)
        - Where it is unknown whether serrated polyposis may have preceded a CRC diagnosis, it is reasonable to assume that any CRC was precipitated by a serrated polyposis phenotype
- Following baseline exam
    - Repeat every 5 y if no polyps are found
    - If proximal serrated polyps or multiple adenomas are found, consider colonoscopy every 1 to 3 y
