+++
id           = "cll/CSLL-4"
gid          = "cll"
ref          = "CSLL-4"
page         = 12
title        = "First-line therapy, response to therapy, and second-line/third-line therapy"
nccn_version = "1.2027"
nccn_date    = "08/20/26"
generated    = "2026-08-27"
see_also     = ["CSLL-3", "CSLL-5", "CSLL-5A"]

[facets]
disease   = "cll"
timepoint = ["primary-treatment", "relapsed-refractory"]

[[variables]]
name = "age"
type = "number"
[[variables]]
name = "diagnosis"
type = "enum"
options = ["cll", "sll"]
[[variables]]
name = "line"
type = "enum"
options = ["first-line", "second-line", "third-line"]
[[variables]]
name = "prior_therapy"
type = "text"
[[variables]]
name = "status"
type = "enum"
options = ["response after completion of treatment", "progression on treatment", "BCL2i intolerance", "cBTKi intolerance"]
+++

# Source

- NCCN Chronic Lymphocytic Leukemia/Small Lymphocytic Lymphoma v1.2027, CSLL-4, p12
- First-line therapy, response to therapy, and second-line/third-line therapy
- Clinical trial is preferred for all lines of therapy when available
- Suggested regimens for first-line therapy: CSLL-D 1 of 5
- Suggested regimens for second-line and subsequent therapy: CSLL-D 2 of 5
- Footnotes for this page are on CSLL-5A
- All recommendations are category 2A unless otherwise indicated

# Assessment

- ___ (age) yo, ___ (diagnosis)
- Line of therapy being decided: ___ (line)
- Prior therapy: ___ (prior_therapy)
- Status on that therapy: ___ (status)
- Clinical trial availability checked for this line

# First-line therapy

- Time-limited treatments
    - BCL2 inhibitor (BCL2i) + anti-CD20 monoclonal antibody (mAb), see Suggested Regimens (CSLL-D 1 of 5)
    - or BCL2i + covalent BTK inhibitor (cBTKi) with or without anti-CD20 mAb, see Suggested Regimens (CSLL-D 1 of 5)
- or Continuous treatment
    - cBTKi-based regimens with or without anti-CD20 mAb, see Suggested Regimens (CSLL-D 1 of 5)

# Response to first-line time-limited BCL2i + anti-CD20 mAb

- Response after completion of treatment
    - Observe until relapse with indication for treatment
    - At relapse with indication for treatment, second-line therapy is BCL2i-containing regimens or cBTKi
- BCL2i intolerance
    - Second-line therapy is cBTKi
- Progression on treatment
    - Second-line therapy is cBTKi

# Response to first-line time-limited BCL2i + cBTKi

- Response after completion of treatment
    - Observe until relapse with indication for treatment
    - At relapse with indication for treatment, second-line therapy is BCL2i-containing regimens or cBTKi
- BCL2i intolerance
    - Second-line therapy is cBTKi
- cBTKi intolerance
    - Second-line therapy is BCL2i + alternate cBTKi, or BCL2i with or without anti-CD20 mAb
- Progression on BCL2i + cBTKi
    - Continues on CSLL-5

# Second-line and third-line therapy

- See CSLL-D 2 of 5 for suggested treatment regimens
- BCL2i-containing regimens or cBTKi
- cBTKi
- BCL2i + alternate cBTKi, or BCL2i with or without anti-CD20 mAb, after cBTKi intolerance
- Relapsed or refractory disease after prior therapy with cBTKi-based regimens or noncovalent BTKi (ncBTKi)-based regimens and BCL2i-containing regimens
    - Noncovalent (reversible) BTKi (ncBTKi)
    - and Referral to evaluate eligibility for CAR T-cell therapy

# Sequencing therapy following HDMP + anti-CD20 mAb or CIT as first-line therapy

- See CSLL-D 1 of 5 for suggested treatment regimens
- Response after completion of CIT
    - Observation until relapse with indications for treatment is recommended
- Relapse after a period of remission, or progression on treatment
    - Time-limited treatment with BCL2i-containing regimens is an option
    - Continuous treatment with cBTKi-based regimens is an option

# Next

- Progression on BCL2i + cBTKi, continue on CSLL-5
- Relapsed or refractory disease after prior cBTKi-based or ncBTKi-based regimens and BCL2i-containing regimens, continue on CSLL-5A
- Response after completion of treatment, observe until relapse with indication for treatment
