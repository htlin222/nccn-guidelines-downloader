+++
id           = "waldenstroms/LPL-3"
gid          = "waldenstroms"
ref          = "LPL-3"
page         = 9
title        = "Primary treatment of WM/LPL, and relapse management after primary treatment"
nccn_version = "1.2027"
nccn_date    = "08/11/26"
generated    = "2026-08-27"
see_also     = ["LPL-2", "BNS-1", "AL-1"]

[facets]
disease   = "waldenstroms"
timepoint = ["primary-treatment", "surveillance", "relapsed-refractory"]
intent    = "palliative"

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "igm"
type = "number"
[[variables]]
name = "hyperviscosity"
type = "enum"
options = ["absent", "symptomatic"]
[[variables]]
name = "cryoglobulin"
type = "enum"
options = ["absent", "severe cryoglobulin-related symptoms"]
[[variables]]
name = "neuropathy"
type = "enum"
options = ["absent", "present"]
[[variables]]
name = "prior_therapy"
type = "enum"
options = ["none", "fixed-duration chemoimmunotherapy", "BTK inhibitor regimen"]
[[variables]]
name = "status"
type = "enum"
options = ["responding", "persistent symptoms", "no response", "progressive disease", "transformation"]
+++

# Source

- NCCN Waldenström Macroglobulinemia/Lymphoplasmacytic Lymphoma v1.2027, WM/LPL-3, p9
- Covers primary treatment, and relapse management after primary treatment
- Intent of therapy should be based on palliation of symptoms, not necessarily levels of IgM, unless the patient is exhibiting evidence of symptomatic hyperviscosity
- Response criteria for WM/LPL: WM/LPL-C
- All recommendations category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, WM/LPL
- IgM ___ (igm) mg/dL
- Symptomatic hyperviscosity: ___ (hyperviscosity)
- Cryoglobulin-related symptoms: ___ (cryoglobulin)
- Neuropathy: ___ (neuropathy)
- Prior treatment: ___ (prior_therapy)
- Current disease status: ___ (status)

# Primary treatment

- Plasmapheresis for symptomatic hyperviscosity
    - Perform for symptomatic hyperviscosity, or for severe cryoglobulin-related symptoms
    - Perform before treatment with a rituximab-containing regimen in patients with IgM ≥4000 mg/dL
    - Monitor IgM closely in these patients thereafter
    - Consider plasmapheresis again if symptomatic hyperviscosity recurs, or if IgM is ≥4000 mg/dL while on rituximab-containing therapy
    - Red blood cell (RBC) transfusion, if indicated, should be done after plasmapheresis, to prevent added hyperviscosity load
- and Primary therapy, see WM/LPL-B
- or Clinical trial
- If transformation, see NCCN Guidelines for B-Cell Lymphomas, Histologic Transformation of Indolent Lymphomas to Diffuse Large B-Cell Lymphoma (DLBCL)

# Relapse management after primary treatment

- If treated with fixed-duration chemoimmunotherapy regimens
    - Observe until symptomatic progression of disease, by the response criteria for WM/LPL (WM/LPL-C)
    - Follow-up while observing: CBC, CMP, and IgM every 3 months for 2 years, then every 4–6 months for an additional 3 years, then every 6–12 months
    - Progression based on IgM levels alone, without symptoms, should not be a reason to re-treat
    - Maintenance rituximab may be considered in select patients after chemoimmunotherapy regimens
    - See NCCN Guidelines for Survivorship
- If treated with BTK inhibitor (BTKi) regimens
    - Continue treatment until symptomatic progression of disease, by the response criteria for WM/LPL (WM/LPL-C), beyond biochemical progression
    - Or until unacceptable toxicity

# Next

- Persistent symptoms
    - In patients with neuropathy, symptom stability might be the goal of therapy, as neuropathy symptoms take time to improve
    - Consider previously used regimens, if well tolerated and had a prolonged response, see WM/LPL-B
    - Choose alternative therapy, see WM/LPL-B
    - Caution should be used when re-treating with myelosuppressive regimens due to cumulative toxicities
- No response, or progressive disease by the response criteria for WM/LPL (WM/LPL-C)
    - Consider previously used regimens, if well tolerated and had a prolonged response, see WM/LPL-B
    - Choose alternative therapy, see WM/LPL-B
    - Caution should be used when re-treating with myelosuppressive regimens due to cumulative toxicities
- If transformation, see NCCN Guidelines for B-Cell Lymphomas, Histologic Transformation of Indolent Lymphomas to DLBCL
- If Bing Neel syndrome (BNS), see BNS-1
- If WM-related amyloidosis, see Therapy for WM-Related Systemic Light Chain Amyloidosis (WM/AL-1)
