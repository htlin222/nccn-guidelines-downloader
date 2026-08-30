+++
id           = "hiv/HIV-3"
gid          = "hiv"
ref          = "HIV-3"
page         = 9
title        = "Classic Hodgkin lymphoma in people with HIV: treatment and supportive care considerations"
nccn_version = "2.2026"
nccn_date    = "12/17/25"
generated    = "2026-08-30"
see_also     = ["HIV-B", "HIV-F"]

[facets]
disease   = "hiv"
histology = "hodgkin"
stage     = "any"
timepoint = ["primary-treatment", "relapsed-refractory", "supportive"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "chl_histology"
type = "text"
[[variables]]
name = "stage"
type = "text"
[[variables]]
name = "b_symptoms"
type = "enum"
options = ["fever", "night sweats", "weight loss", "none"]
[[variables]]
name = "extranodal_sites"
type = "text"
[[variables]]
name = "marrow"
type = "enum"
options = ["involved", "not involved", "not assessed"]
[[variables]]
name = "cd4"
type = "number"
[[variables]]
name = "art_regimen"
type = "text"
[[variables]]
name = "performance_status"
type = "text"
[[variables]]
name = "kshv"
type = "enum"
options = ["known infection", "history of KSHV-associated disease", "none known"]
[[variables]]
name = "dlco"
type = "text"
+++

# Source

- NCCN Cancer in People with HIV v2.2026, HIV-3, p9
- Applies to classic Hodgkin lymphoma (CHL) in people with HIV (PWH)
- PWH are 5 to 14 times more likely to be diagnosed with CHL than individuals who are HIV-negative
- CHL accounts for approximately 4% of cancer diagnosed in the PWH population
- Treat as per the NCCN Guidelines for Hodgkin Lymphoma
    - Do not modify cancer treatment based solely on HIV status
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo person with HIV, classic Hodgkin lymphoma
- Histology ___ (chl_histology)
    - Mixed cellularity and lymphocyte-depleted histologies are more common in PWH than in people without HIV
- Stage ___ (stage)
    - PWH often present with more advanced disease
- Extranodal disease ___ (extranodal_sites)
- Bone marrow ___ (marrow)
    - Bone-marrow-only presentations sometimes occur
- B symptoms ___ (b_symptoms)
    - More common in this population
    - B symptoms should always prompt investigation of opportunistic infection
- CNS involvement
    - Rare with CHL, in contrast to NHL in PWH
- CD4+ T-cell count ___ (cd4)
- ART regimen ___ (art_regimen)
    - ART is recommended for all PWH
- Performance status ___ (performance_status)
    - Poor performance status in PWH and CHL may be from HIV, cancer, or other causes
    - Consider the reason for poor performance status when making treatment decisions
    - ART may improve performance status
- KSHV status ___ (kshv)
- Symptoms of pulmonary compromise, DLCO ___ (dlco)

# Imaging

- Interpretation of diagnostic and staging imaging may be complicated by the increased incidence of non-malignant lesions that may be mistaken for cancer spread or recurrence
- See Principles of Imaging (HIV-F)
- FDG-PET/CT-guided therapy in HIV-associated CHL is feasible
    - Take care to recognize potential confounding factors, ie, nonmalignant causes for PET-avid regions

# Systemic therapy options

- All of the standard CHL regimens have been studied in PWH
- ABVD
    - Less toxic in PWH than Stanford V or BEACOPP
    - Additional attention to possible drug-drug interactions and concurrent infection is important
    - In patients with symptoms of pulmonary compromise or a fall in DLCO, can consider dropping bleomycin after 2 cycles
        - Particularly with an FDG-PET/CT scan showing complete response
- Brentuximab vedotin with AVD (BV-AVD)
    - Safe and effective option in PWH, with attention to drug-drug interactions
    - Has been shown to increase CD4+ T-cell counts in individuals with HIV-associated CHL
- Nivolumab-AVD
    - Can be considered as a safe option in PWH on ART with advanced stage CHL
    - With attention to presence of concurrent KSHV and mycobacterial infections

# Supportive care during treatment

- Growth factors
    - Routine use is not recommended during ABVD in the NCCN Guidelines for Hodgkin Lymphoma, because of concerns with possible adverse interactions with bleomycin leading to lung toxicity
    - May be required in PWH, especially if CD4+ T-cell count is low, and in the setting of prolonged severe neutropenia or neutropenic fever
- Dose reduction
    - Not recommended for neutropenia with ABVD in the NCCN Guidelines for Hodgkin Lymphoma
    - May be appropriate in PWH with severe and prolonged cytopenias
- Pneumocystis jirovecii (PJP) prophylaxis is strongly recommended
- Prophylaxis for other opportunistic infections including gram-negative bacteria can be considered
    - Particularly for patients with more advanced immunosuppression
    - See Guidelines for the Prevention and Treatment of Opportunistic Infections in Adults and Adolescents with HIV

# Immune checkpoint inhibitor considerations

- Evolving data suggest that ICIs are generally safe and effective in PWH
- Concurrent KSHV infection
    - There may be increased risk of KSHV-associated inflammatory syndromes such as MCD or KICS when ICIs are used
    - If the patient has a history of KSHV-associated diseases, consider more frequent monitoring of signs and symptoms of KICS or MCD
    - Unexplained fevers should prompt workup of MCD and KICS
        - C-reactive protein
        - KSHV serum viral load
        - SPEP
        - IL-6
        - IL-10
        - Diagnosis of KICS requires excisional biopsy of lymphadenopathy to exclude MCD
- Mycobacterial disease
    - ICI use has been linked to opportunistic infections including TB reactivation and flare of mycobacterial disease
    - Screening for latent TB infection can be considered before administering an ICI, so the patient can be monitored for TB symptoms and treatment of mycobacterial infection can be expedited

# Antiretroviral therapy and drug interactions

- Consult both an HIV pharmacist and an oncology pharmacist
- Avoid whenever possible, adverse reactions due to drug interactions are more common with these
    - Ritonavir
    - Cobicistat
    - Protease inhibitors
- Integrase strand-transfer inhibitor (INSTI)-based regimens are preferred
- Selected non-nucleoside reverse transcriptase inhibitors (NNRTIs)
    - Drug interactions are likely to result in decreased efficacy, use with caution
- Avoid zidovudine, due to myelosuppression
- Avoid didanosine and stavudine, may cause additive peripheral neuropathy
    - Very few HIV combination pills contain one or more of these medications
- Only when alternate ART regimens are not available, consider holding ART until completion of course of chemotherapy
- See Principles of Systemic Therapy and Drug-Drug Interactions (HIV-B)

# Next

- Relapsed or refractory CHL, treat as per the NCCN Guidelines for Hodgkin Lymphoma based on currently available evidence
    - There is support for feasibility and efficacy of autologous and allogeneic hematopoietic cell transplant
