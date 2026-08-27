+++
id           = "amyloidosis/AMYL-1"
gid          = "amyloidosis"
ref          = "AMYL-1"
page         = 5
title        = "Initial diagnostic workup for systemic light chain amyloidosis"
nccn_version = "2.2026"
nccn_date    = "03/16/26"
generated    = "2026-08-27"
see_also     = ["AMYL-2", "AMYL-3", "AMYL-4"]

[facets]
disease   = "amyloidosis"
histology = "plasma-cell"
biomarker = "amyloid"
timepoint = ["diagnosis", "workup"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "organs"
type = "text"
[[variables]]
name = "orthostatic_vitals"
type = "text"
[[variables]]
name = "monoclonal_protein"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "tissue_confirmed"
type = "enum"
options = ["yes", "no"]
[[variables]]
name = "amyloid_subtype"
type = "text"
[[variables]]
name = "suspicion_pattern"
type = "enum"
options = ["systemic", "localized", "isolated-cardiac"]
+++

# Source

- NCCN Systemic Light Chain Amyloidosis v2.2026, AMYL-1, p5
- Initial diagnostic workup for suspected systemic light chain amyloidosis (SLCA)
- Frailty assessment should be considered in older adults, see NCCN Guidelines for Older Adult Oncology
- All recommendations category 2A unless stated otherwise

# Assessment

- ___ (age) yo
- Organ system(s) prompting the suspicion: ___ (organs)
- Orthostatic vital signs: ___ (orthostatic_vitals)
- Monoclonal protein or elevated light chains present: ___ (monoclonal_protein)
- Amyloid deposition confirmed in tissue: ___ (tissue_confirmed)
- Amyloid subtype on mass spectrometry: ___ (amyloid_subtype)
- Pattern of suspicion: ___ (suspicion_pattern)

# Clinical and amyloid-related assessment

- History and physical (H&P)
- Orthostatic vital signs
- Whole-body low-dose CT or FDG-PET/CT
    - Skeletal survey is acceptable in certain circumstances
    - Skeletal survey is significantly less sensitive than whole-body low-dose CT and FDG-PET/CT
    - Skeletal survey is not needed if FDG-PET/CT or whole-body low-dose CT has been performed
    - For Principles of Imaging, refer to NCCN Guidelines for Multiple Myeloma
- Electrocardiogram (ECG)
- Echocardiogram with global longitudinal strain assessment
- 6-minute walk test
    - Used to assess aerobic capacity and endurance
    - Serves as a predictor of cardiac function

# Pathologic evaluation

- Bone marrow aspirate + biopsy
    - Congo red staining for amyloid
    - Congo stain does not differentiate between types of amyloid
- Plasma cell fluorescence in situ hybridization (FISH) on bone marrow aspirate
- Abdominal fat pad sampling and/or involved organ biopsy as clinically indicated
    - Alternate sites could include rectal or minor salivary gland biopsy
- Amyloid tissue subtyping with mass spectrometry (MS)
- If lymphoplasmacytic clone is present, then test for MYD88 L265P mutation
- Confirm primary SLCA rather than hereditary amyloidosis, wild-type transthyretin-related (amyloid transthyretin [ATTR]) cardiac amyloidosis, or secondary amyloidosis
    - Confirm the amyloid deposits are composed of light chains, using immunohistochemistry or MS
    - Perform immunohistochemistry for transthyretin or serum amyloid A component if kappa and lambda stains are negative
    - In the absence of monoclonal protein or elevated light chains, 99mTc-pyrophosphate (pyrophosphate scintigraphy [PYP]) scan can help diagnose ATTR
- Identification of light chains in the serum or urine without confirmation of the amyloid deposition in tissue is not adequate
    - Patients with other forms of amyloidosis may have an unrelated monoclonal gammopathy of undetermined significance (MGUS)

# Laboratory evaluation to assess plasma cell markers

- Complete blood count (CBC), differential, platelet count
- Peripheral blood smear
- Serum quantitative immunoglobulins
- Serum protein electrophoresis (SPEP)
- Serum immunofixation electrophoresis (SIFE)
- Serum free light chain (FLC) assay

# Laboratory evaluation to assess organ involvement

- Heart
    - NT-proBNP/BNP
        - If N-terminal prohormone of B-type natriuretic peptide (NT-proBNP) is not available, B-type natriuretic peptide (BNP) can be performed
    - Troponin T (TnT)
        - If TnT is not available, then troponin I is acceptable
    - Lipid panel
- Kidney
    - 24-h urine for total protein
    - Urine protein electrophoresis (UPEP)
    - Urine immunofixation electrophoresis (UIFE)
    - Serum blood urea nitrogen (BUN)/creatinine
    - Electrolytes
    - Albumin
    - Calcium
    - Serum uric acid
    - Serum lactate dehydrogenase (LDH)
    - Beta-2 microglobulin
    - Creatinine clearance, calculated or measured directly
- Liver
    - Alkaline phosphatase (ALP)
    - Aspartate aminotransferase (AST)
    - Alanine aminotransferase (ALT)
    - Bilirubin
- Coagulation system
    - Comprehensive coagulation studies if indicated
    - Prothrombin time (PT)
    - Partial thromboplastin time (PTT)
    - Factor X

# Next

- Organ involvement, go to AMYL-2
- Clinical suspicion of localized amyloidosis, go to AMYL-3
- Clinical suspicion of isolated cardiac amyloidosis, go to AMYL-4
