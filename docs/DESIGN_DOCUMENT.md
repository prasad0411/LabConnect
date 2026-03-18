python3 << 'PYEOF'
content = '''---
title: 'LabConnect - Design Document'
subtitle: 'Research Lab Discovery and Matching Platform for Graduate Students'
author:
  - Prasad Kanade
  - Saurabh Lohokare
date: 'Spring 2026'
geometry: margin=1in
fontsize: 12pt
toc: true
toc-depth: 3
numbersections: true
---

# Project Description

## Overview

LabConnect is a research lab discovery and matching platform for graduate students at Northeastern University. Every semester, MS and PhD students face the same struggle: finding a professor or research lab to work with. The current process is painful — browse department websites with outdated info, cold-email 20 professors, get 2 replies.

LabConnect fixes this by letting professors list their labs with current openings, required skills, project descriptions, and funding status. Students create profiles with their technical skills, research interests, and availability. The platform calculates a skill-match percentage between a student and each lab, ranks labs by relevance, and lets students apply directly with a personal statement. Professors see incoming applications with match scores, making it easy to identify strong candidates.

## Problem Statement

Graduate students at Northeastern face three core problems when searching for research opportunities:

- **No centralized listings:** Lab openings are scattered across faculty pages that are rarely updated.
- **Cold outreach failure:** Students send dozens of emails with low response rates because there is no signal of mutual fit.
- **No skill alignment:** Professors receive applications from students who lack the required technical background, wasting time on both sides.

## Solution

LabConnect provides four core capabilities:

1. **Lab Listings** — Professors post labs with description, required skills, openings, funding status, and website.
2. **Student Profiles** — Students list their skills, research interests, GPA range, availability, and resume link.
3. **Skill Match Scoring** — The platform calculates a match percentage between each student and each lab, highlighting matching skills.
4. **Direct Applications** — Students apply with a personal statement; professors review applications with match scores attached.

## Target Audience

Northeastern University MS and PhD students searching for research labs, and faculty running labs with open positions.

---

# User Personas

## Persona 1: Priya — Skill-Seeking Grad Student

| Attribute       | Detail                                                                 |
| --------------- | ---------------------------------------------------------------------- |
| **Name**        | Priya Sharma                                                           |
| **Age**         | 23                                                                     |
| **Program**     | MS in Computer Science, Northeastern University                        |
| **Skills**      | Python, Machine Learning, TensorFlow, SQL                              |
| **Frustration** | Has emailed 15 professors with zero replies. No way to signal fit.     |
| **Goal**        | Find labs that need her ML skills and apply where she has highest match.|

## Persona 2: Dr. Marcus — Research Lab Director

| Attribute       | Detail                                                                        |
| --------------- | ----------------------------------------------------------------------------- |
| **Name**        | Dr. Marcus Chen                                                                |
| **Age**         | 42                                                                             |
| **Role**        | Professor, NLP Lab                                                             |
| **Frustration** | Receives generic emails from students who have not read his research.          |
| **Goal**        | Post openings with specific skill requirements and see only qualified applicants.|

## Persona 3: Aisha — Exploring Student

| Attribute       | Detail                                                                             |
| --------------- | ---------------------------------------------------------------------------------- |
| **Name**        | Aisha Johnson                                                                       |
| **Age**         | 22                                                                                  |
| **Program**     | MS in Data Science, second semester                                                 |
| **Frustration** | Unsure whether to pursue research or industry. No easy way to explore lab options.  |
| **Goal**        | Browse labs casually, read project descriptions, see skill match before committing. |

---

# User Stories

## Lab Listings and Skill Matching (Prasad Kanade)

**US-1.1 — Create a Lab Listing**
As a professor, I want to create a lab listing with my name, department, research description, required skills, number of openings, and funding status, so qualified students can discover my lab.

**US-1.2 — Edit or Delete a Lab Listing**
As a professor, I want to edit or delete my lab listing, so I can update openings and requirements as positions fill.

**US-1.3 — Browse Lab Listings**
As a student, I want to browse all lab listings and filter by department, required skill, and funding status, so I can find labs relevant to me.

**US-1.4 — Skill Match Percentage**
As a student, I want to see a skill-match percentage between my profile and each lab, so I can prioritize where I am the strongest fit.

**US-1.5 — Sorted and Highlighted Results**
As a student, I want labs sorted by match score with matching skills highlighted, so the best opportunities surface first.

**US-1.6 — Keyword Search**
As a student, I want to search labs by keyword such as machine learning or NLP, so I can quickly find labs in my area of interest.

## Student Profiles and Applications (Saurabh Lohokare)

**US-2.1 — Create a Profile**
As a student, I want to create a profile with my name, email, skills, research interests, GPA range, availability, and resume link, so professors can evaluate me.

**US-2.2 — Edit or Delete a Profile**
As a student, I want to edit or delete my profile, so my information stays current.

**US-2.3 — Apply to a Lab**
As a student, I want to apply to a lab with a personal statement, so the professor understands why I am interested and what I can contribute.

**US-2.4 — Track Applications**
As a student, I want to view my submitted applications and their status, so I can track my progress.

**US-2.5 — Review Applications**
As a professor, I want to view all applications for my lab with each applicant's skills, match score, and statement, so I can evaluate candidates efficiently.

**US-2.6 — Accept or Decline Applications**
As a professor, I want to accept or decline applications, so students get timely responses instead of silence.

---

# Design Mockups

## Screenshots

### Browse Labs
![Browse Labs](screenshots/browse_labs.png)

The main lab discovery page. Students can filter by department, funding status, and keyword search. Each lab card shows the match percentage based on the student profile.

### Lab Detail
![Lab Detail](screenshots/lab_detail.png)

Full lab details including research description, required skills with match highlights, openings, funding status, and action buttons to apply, edit, or review applications.

### Lab Form
![Lab Form](screenshots/lab_form.png)

Form for professors to create or edit a lab listing. Includes dynamic skill tag input, department dropdown, funding status, and optional website URL.

### Profile Form
![Profile Form](screenshots/profile_form.png)

Student profile creation and editing form. Captures name, email, skills, research interests, GPA range, availability, and resume link.

### Profile View
![Profile View](screenshots/profile_view.png)

Displays the student profile with all skills, research interests, GPA range, availability badge, and resume link. Includes edit and delete actions.

### Application Form
![Application Form](screenshots/application_form.png)

Application submission page. Shows the lab info, skill match badge, matching skill tags, and a personal statement textarea with character count.

### My Applications
![Applications List](screenshots/applications_list.png)

Student view of all submitted applications with lab name, match score, statement preview, submission date, status badge, and withdraw option for pending applications.

### Application Review
![Application Review](screenshots/application_review.png)

Professor view of all applications for a lab. Filterable by status. Each card shows student name, match score, personal statement, and accept or decline buttons.

---

# Data Model

## Collections

### labs

| Field          | Type            | Description                        |
| -------------- | --------------- | ---------------------------------- |
| _id            | ObjectId        | Primary key                        |
| name           | String          | Lab name                           |
| professor      | String          | Professor or PI name               |
| department     | String          | Department                         |
| description    | String          | Research description               |
| skills_needed  | Array of String | Required technical skills          |
| openings       | Number          | Number of open positions           |
| funding_status | String          | funded, partially_funded, unfunded |
| website        | String          | Optional lab website URL           |
| created_at     | Date            | Listing creation timestamp         |

### profiles

| Field              | Type            | Description                  |
| ------------------ | --------------- | ---------------------------- |
| _id                | ObjectId        | Primary key                  |
| name               | String          | Student full name            |
| email              | String          | Student email                |
| skills             | Array of String | Technical skills             |
| researchInterests  | Array of String | Research interest areas      |
| gpaRange           | String          | GPA range bracket            |
| availability       | String          | Full-time, Part-time, etc.   |
| resume_url         | String          | Optional resume link         |
| createdAt          | Date            | Profile creation timestamp   |

### applications

| Field       | Type     | Description                        |
| ----------- | -------- | ---------------------------------- |
| _id         | ObjectId | Primary key                        |
| profileId   | String   | Reference to profiles              |
| labId       | String   | Reference to labs                  |
| studentName | String   | Denormalized student name          |
| labName     | String   | Denormalized lab name              |
| statement   | String   | Personal statement                 |
| matchScore  | Number   | Skill match percentage at apply time|
| status      | String   | pending, accepted, declined        |
| createdAt   | Date     | Application submission timestamp   |

---

# API Design

## REST Endpoints Summary

| Resource     | Method | Endpoint                          | Description                        |
| ------------ | ------ | --------------------------------- | ---------------------------------- |
| Labs         | GET    | /api/labs                         | List all labs with filters         |
| Labs         | GET    | /api/labs/:id                     | Get a single lab                   |
| Labs         | POST   | /api/labs                         | Create a lab listing               |
| Labs         | PUT    | /api/labs/:id                     | Update a lab listing               |
| Labs         | DELETE | /api/labs/:id                     | Delete a lab listing               |
| Profiles     | GET    | /api/profiles                     | List all profiles                  |
| Profiles     | GET    | /api/profiles/:id                 | Get a profile                      |
| Profiles     | POST   | /api/profiles                     | Create a profile                   |
| Profiles     | PUT    | /api/profiles/:id                 | Update a profile                   |
| Profiles     | DELETE | /api/profiles/:id                 | Delete a profile                   |
| Applications | GET    | /api/applications                 | List applications (filter by lab or profile) |
| Applications | GET    | /api/applications/:id             | Get a single application           |
| Applications | POST   | /api/applications                 | Submit an application              |
| Applications | PUT    | /api/applications/:id             | Update application statement       |
| Applications | PATCH  | /api/applications/:id/status      | Accept or decline                  |
| Applications | DELETE | /api/applications/:id             | Withdraw an application            |

---

# Technology Decisions

| Decision     | Choice                  | Rationale                          |
| ------------ | ----------------------- | ---------------------------------- |
| Runtime      | Node.js v18+            | Course requirement; async I/O      |
| Framework    | Express.js 5            | Lightweight, matches course        |
| Database     | MongoDB Atlas (native)  | NoSQL flexibility; free tier       |
| Frontend     | React 19 + Vite         | Course requirement for Project 3   |
| State        | React Hooks             | useState, useEffect, useCallback   |
| Routing      | React Router v7         | Client-side SPA routing            |
| Hosting      | Render                  | Free auto-deploy from GitHub       |
| Code Quality | ESLint + Prettier       | Consistency and error catching     |
| License      | MIT                     | Open-source, meets rubric          |
'''
with open('docs/DESIGN_DOCUMENT.md', 'w') as f:
    f.write(content)
print("Done")
PYEOF