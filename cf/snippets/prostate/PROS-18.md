+++
id           = "prostate/PROS-18"
gid          = "prostate"
ref          = "PROS-18"
page         = 35
title        = "Systemic therapy for M1 CRPC adenocarcinoma, chosen by prior ARPI and prior docetaxel exposure"
nccn_version = "6.2026"
nccn_date    = "07/28/26"
generated    = "2026-08-27"
see_also     = ["PROS-17", "PROS-16", "ST-1"]

[facets]
disease   = "prostate"
histology = "adenocarcinoma"
stage     = "IV"
biomarker = ["brca", "msi-h", "dmmr"]
timepoint = ["metastatic", "relapsed-refractory"]
intent    = "palliative"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "psa"
type = "text"
[[variables]]
name = "met_sites"
type = "text"
[[variables]]
name = "visceral_mets"
type = "enum"
options = ["present", "absent"]
[[variables]]
name = "symptoms"
type = "text"
[[variables]]
name = "ecog"
type = "number"
[[variables]]
name = "life_expectancy"
type = "text"
[[variables]]
name = "prior_arpi"
type = "text"
[[variables]]
name = "prior_docetaxel"
type = "text"
[[variables]]
name = "brca"
type = "text"
[[variables]]
name = "hrr"
type = "text"
[[variables]]
name = "msi"
type = "text"
[[variables]]
name = "psma"
type = "text"
+++

# Source

- NCCN Prostate Cancer v6.2026, PROS-18, p35
- Applies to M1 CRPC, adenocarcinoma
- Document castrate levels of testosterone if progression occurs on ADT
    - Consider metastatic lesion biopsy
    - If small cell neuroendocrine is found, see PROS-17
- ARPI therapies include abiraterone, enzalutamide, darolutamide, or apalutamide
    - Abiraterone given as part of neoadjuvant/concomitant/adjuvant ADT with EBRT is not considered post-ARPI
- For details on the use of ADT and ARPIs, see Principles of Androgen Deprivation Therapy (PROS-G) and Discussion
- Principles of Imaging (PROS-E)
- Patients can continue through all treatment options listed
- Best supportive care, which can include androgen-directed therapy or steroid, is always an appropriate option
- All recommendations category 2A unless stated otherwise
- Footnotes on PROS-18A

# Assessment

- ___ (age) yo, M1 CRPC, adenocarcinoma
- PSA ___ (psa)
- Sites of metastases ___ (met_sites)
- Visceral metastases ___ (visceral_mets)
- Symptoms ___ (symptoms)
- ECOG performance status ___ (ecog)
- Life expectancy ___ (life_expectancy)
- Prior ARPI ___ (prior_arpi)
- Prior docetaxel ___ (prior_docetaxel)
- BRCA mutation ___ (brca)
- HRRm other than BRCA1/2 ___ (hrr)
- MSI-H/dMMR ___ (msi)
- PSMA-positive metastases ___ (psma)

# Pre-ARPI

- Preferred
    - Abiraterone (category 1)
    - Enzalutamide (category 1)
- Useful in certain circumstances
    - Molecular biomarker-directed therapy
        - PARP inhibitors with or without ARPI have different biomarker and previous treatment requirements, see Principles of Non-Hormonal Systemic Therapy (PROS-N)
        - BRCA mutation
            - Niraparib/abiraterone (category 1)
            - Olaparib/abiraterone (category 1)
            - Olaparib (category 1)
            - Talazoparib/enzalutamide (category 1)
        - HRRm (other than BRCA1/2)
            - Talazoparib/enzalutamide (category 1)
    - Disease state-specific therapy
        - Bone metastases
            - Radium-223/enzalutamide
                - Radium-223 should not be used in patients with visceral metastases
                - Concurrent use with systemic therapies other than enzalutamide should be pursued with caution
                - Concomitant use of denosumab or zoledronic acid is recommended
                - Principles of Radiation Therapy (PROS-J)
- Other recommended
    - Docetaxel (category 1)
        - For details on the efficacy and safety of these agents, see Principles of Non-Hormonal Systemic Therapy (PROS-N)

# Post-ARPI / pre-docetaxel

- Preferred
    - Docetaxel (category 1)
- Useful in certain circumstances
    - Molecular biomarker-directed therapy
        - PARP inhibitors with or without ARPI have different biomarker and previous treatment requirements, see Principles of Non-Hormonal Systemic Therapy (PROS-N)
        - BRCA mutation
            - Olaparib (category 1, preferred)
            - Rucaparib (category 1, preferred)
            - Niraparib/abiraterone (category 2B)
            - Talazoparib/enzalutamide (category 2B)
        - HRRm (other than BRCA1/2)
            - Talazoparib/enzalutamide (category 2B)
    - Disease state-specific therapy
        - PSMA-positive metastases
            - Lutetium Lu 177 vipivotide tetraxetan (Lu-177-PSMA-617)
                - For patients with at least 1 PSMA-positive lesion and/or metastatic disease that is predominately PSMA-positive, and with no dominant PSMA-negative metastatic lesions
                - Who have been treated previously with androgen receptor-directed therapy and a taxane-based chemotherapy, or are considered appropriate to delay a taxane-based chemotherapy
                - Principles of Radiation Therapy (PROS-J)
        - Aggressive variant
            - Cabazitaxel/carboplatin
                - Cabazitaxel 20 or 25 mg/m² plus carboplatin AUC 4 mg/mL per min with growth factor support, for fit patients
                - Aggressive variant is visceral metastases, low PSA and bulky disease, high LDH, high CEA, lytic bone metastases, NEPC histology
                - Or unfavorable genomics, defects in at least 2 of PTEN, TP53, and RB1
                - For details on the efficacy and safety of these agents, see Principles of Non-Hormonal Systemic Therapy (PROS-N)

# Post-ARPI / post-docetaxel

- Preferred
    - Cabazitaxel (category 1)
    - Docetaxel rechallenge
    - For details on the efficacy and safety of these agents, see Principles of Non-Hormonal Systemic Therapy (PROS-N)
- Useful in certain circumstances
    - Molecular biomarker-directed therapy
        - PARP inhibitors with or without ARPI have different biomarker and previous treatment requirements, see Principles of Non-Hormonal Systemic Therapy (PROS-N)
        - BRCA mutation
            - Olaparib (category 1)
            - Rucaparib
        - HRRm (other than BRCA1/2)
            - Olaparib
        - Other FDA-approved agents for tissue agnostic indications
    - Disease state-specific therapy
        - PSMA-positive metastases
            - Lu-177-PSMA-617 (category 1)
                - For patients with at least 1 PSMA-positive lesion and/or metastatic disease that is predominately PSMA-positive, and with no dominant PSMA-negative metastatic lesions
                - Principles of Radiation Therapy (PROS-J)
        - Aggressive variant
            - Cabazitaxel/carboplatin
                - Cabazitaxel 20 or 25 mg/m² plus carboplatin AUC 4 mg/mL per min with growth factor support, for fit patients
        - Palliation for symptomatic patients unable to tolerate other therapies
            - Mitoxantrone

# Additional options irrespective of prior ARPI or prior docetaxel, useful in certain circumstances

- Disease state-specific therapy
    - Asymptomatic without visceral metastases
        - Sipuleucel-T
            - Recommended only for asymptomatic or minimally symptomatic, no liver metastases, life expectancy >6 months, and ECOG performance status 0–1
            - Benefit has not been reported in patients with visceral metastases, and it is not recommended if visceral metastases are present
            - There are limited data to support its efficacy in the post-chemotherapy setting
            - Not recommended for patients with small cell prostate cancer/NEPC
    - Oligometastatic/oligoprogressive disease
        - Metastasis-directed therapy with mCRPC systemic therapy
            - Principles of MDT (PROS-M)
            - See Number of Metastatic Sites in the Principles of MDT (PROS-M)
    - Symptomatic bone-predominant metastases
        - Radium-223 (category 1)
            - Radium-223 should not be used in patients with visceral metastases
            - Concurrent use with systemic therapies other than enzalutamide should be pursued with caution
            - Concomitant use of denosumab or zoledronic acid is recommended
            - Principles of Radiation Therapy (PROS-J)
- Molecular biomarker-directed therapy
    - MSI-High (MSI-H)/dMMR
        - Pembrolizumab (category 2B)
            - For details on the efficacy and safety of these agents, see Principles of Non-Hormonal Systemic Therapy (PROS-N)

# Next

- Patients can continue through all treatment options listed
- Best supportive care is always an appropriate option, and can include androgen-directed therapy or steroid
- Small cell neuroendocrine found on metastatic lesion biopsy, go to PROS-17
