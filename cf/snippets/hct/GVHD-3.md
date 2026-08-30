+++
id           = "hct/GVHD-3"
gid          = "hct"
ref          = "GVHD-3"
page         = 34
title        = "First-line and additional therapy for acute GVHD grade II–IV"
nccn_version = "3.2026"
nccn_date    = "07/30/26"
generated    = "2026-08-30"
see_also     = ["GVHD-D", "GVHD-E"]

[facets]
disease   = "hct"
timepoint = "transplant"

[[variables]]
name = "gvhd_grade"
type = "enum"
options = ["II", "III", "IV"]
[[variables]]
name = "organs"
type = "text"
[[variables]]
name = "weight_kg"
type = "number"
[[variables]]
name = "current_immunosuppressant"
type = "text"
[[variables]]
name = "risk_status"
type = "text"
+++

# Source

- NCCN Graft-Versus-Host Disease v3.2026, GVHD-3, p34
- Management of acute GVHD, grade II–IV: first-line therapy and additional therapy
- All recommendations category 2A unless otherwise indicated

# Assessment

- Acute GVHD grade ___ (gvhd_grade)
- Organ involvement ___ (organs)
    - Upper GI only
    - Skin, lower GI, and/or liver
- Weight ___ (weight_kg) kg, for mg/kg dosing
- Original immunosuppressive agent ___ (current_immunosuppressant)
    - Did the GVHD develop during tapering of immunosuppressive therapy
- Clinical risk score and biomarker status ___ (risk_status)

# First-line therapy

- Continue or consider restarting the original immunosuppressive agent
    - If GVHD developed during tapering of immunosuppressive therapy, escalate dose to achieve therapeutic blood level
- Clinical trial
- or systemic corticosteroids ± topical steroids
    - Upper GI only: 0.5–1 mg/kg/day methylprednisolone (or prednisone dose equivalent) + topical steroids
        - In a phase III randomized controlled trial, initial treatment with systemic prednisone at 0.5 mg/kg/day in conjunction with GI topical steroids (beclomethasone dipropionate, available as a compounded agent, ± budesonide) was safe and effective for upper GI symptoms (nausea, vomiting, anorexia), with or without skin involvement (<50% BSA), in patients with diarrhea volumes of <1000 mL/day
        - Budesonide is less effective at treating the upper GI tract
    - Skin / lower GI / liver: 1–2 mg/kg/day methylprednisolone (or prednisone dose equivalent) ± topical steroids
        - Consider 1 mg/kg for grade II
        - There is no role for escalation of methylprednisolone dose beyond 2 mg/kg/day
    - Topical steroids, e.g., triamcinolone, clobetasol, and/or topical tacrolimus
        - Medium to high potency formulations are recommended
        - Except on the face or intertriginous areas, where low potency hydrocortisone can be used
    - Do not add other systemic agents in conjunction with systemic steroids as initial therapy for acute GVHD outside the context of a well-designed clinical trial
- or consider sirolimus for standard-risk acute GVHD
    - Standard-risk acute GVHD as defined by clinical risk score and biomarker status

# Response assessment

- Assess against the GVHD Steroid Response Definitions/Criteria (GVHD-D)
- Response: complete resolution of GVHD, or improvement in at least one organ without any progression in any other organs
- No response: steroid-refractory disease

# Additional therapy

- Response
    - Taper steroids as clinically feasible
        - Taper systemic steroids to mitigate long-term steroid side effects and risk of infection
- No response (steroid-refractory disease)
    - Clinical trial
        - Enrollment in well-designed clinical trials should be encouraged, since no standard, effective therapy for steroid-refractory GVHD has been identified
    - or addition of a systemic agent to corticosteroids, with steroid taper as clinically feasible
        - Select therapy based on physician experience, the agent's toxicity profile, the effect of prior treatment, drug interactions, convenience/accessibility, and patient tolerability

# Next

- Response: taper steroids as clinically feasible
- No response (steroid-refractory disease): see Suggested Systemic Agents for Steroid-Refractory GVHD (GVHD-E)
