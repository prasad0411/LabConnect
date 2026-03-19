# LabConnect

> Research Lab Discovery and Matching Platform for Graduate Students

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-v18+-green)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green)](https://www.mongodb.com/atlas)

---

## Authors

- **Prasad Kanade** — Lab Listings & Skill Matching
- **Saurabh Lohokare** — Student Profiles, Applications & Authentication

---

## Course

[Web Development — Spring 2026](https://northeastern.instructure.com/courses/245751)
Northeastern University — Instructor: John Alexis Guerra Gomez

---

## Project Objective

LabConnect solves the painful process graduate students face when searching for research labs. The current workflow — browsing outdated faculty pages and cold-emailing dozens of professors — is inefficient and discouraging.

LabConnect lets professors post lab listings with required skills, open positions, and funding status. Students create profiles listing their technical skills and research interests. The platform calculates a skill-match percentage between each student and each lab, ranks results by relevance, and lets students apply directly with a personal statement. Professors review incoming applications with match scores attached, making it easy to surface the strongest candidates.

Users register as either a **student** or **professor**, and the interface adapts to show role-specific features. Students see profile management, skill matching, and application tools. Professors see lab posting, listing management, and applicant review tools.

### Key Features

- **Role-based authentication** — Students and professors see different UI controls and have different API permissions
- **Skill-match scoring** — Students see a match percentage and highlighted skills on every lab card and detail page; professors see clean listings without match data
- **Duplicate application prevention** — Students can apply to each lab only once; the button changes to "Applied" after submission
- **Application lifecycle** — Students submit and withdraw; only professors can accept or decline
- **Account management** — Deleting an account removes the user, profile, and all applications, then redirects to registration

---

## Screenshots

### Sign In

![Sign In](docs/screenshots/signin.png)

### Register

![Register](docs/screenshots/register.png)

### Browse Labs — Student View (with skill-match badges)

![Browse Labs Student](docs/screenshots/browse_labs_student.png)

> Searching "Reinforcement" in Computer Science — 8 labs found. The **Reinforcement Learning Initiative** shows a **25% match** badge because the student has Python, which is 1 of 4 required skills.

### Lab Detail — Student View (with match badge and highlighted skills)

![Lab Detail Student](docs/screenshots/lab_detail_student.png)

> **Reinforcement Learning Initiative** by Dr. Derek Pham. Skills needed: MongoDB, GraphQL, MySQL, Python. **Python ✓** is highlighted green because the student has it. 25% match badge shown. 3 openings, Partially Funded.

### Application Form

![Application Form](docs/screenshots/application_form.png)

> Applying to **Reinforcement Learning Initiative** — Dr. Derek Pham, Computer Science. Match badge shows 25%. Python is highlighted. Personal statement filled in with 321/50 minimum characters. Submit Application button.

### My Applications — Student View

![My Applications](docs/screenshots/applications_list.png)

> Two applications: **Computational Biology Studio** (50% match, PENDING) and **Reinforcement Learning Initiative** (25% match, PENDING). Both applied 3/19/2026 with Withdraw buttons.

### Withdraw Confirmation Dialog

![Withdraw Confirm](docs/screenshots/withdraw_confirm.png)

> Browser confirmation dialog: "Withdraw this application?" before deletion.

### My Profile — Student View

![Profile View](docs/screenshots/profile_view.png)

> Student profile: name, email (kanade.pra@northeastern.edu), skills (sql, Python, Biology, Physics), research interests (NLP, Robotics), GPA 3.5–4.0, Full-time, resume link. Edit Profile and Delete Account buttons.

### Edit Profile

![Edit Profile](docs/screenshots/edit_profile.png)

> Profile edit form pre-populated with existing data. Skill tags with × remove buttons. Update Profile and Cancel buttons.

### Delete Account Confirmation Dialog

![Delete Account](docs/screenshots/delete_account_confirm.png)

> Browser confirmation: "This will permanently delete your account, profile, and all applications. Are you sure?"

### Browse Labs — Professor View (no match badges)

![Browse Labs Professor](docs/screenshots/browse_labs_professor.png)

> Professor logged in as "Dummy prof account". Searching "Studio" in Biomedical Engineering, Funded — 7 results. No match badges shown. Labs include Intelligent Systems Studio (Dr. Ana Rodriguez), Computational Biology Studio (Dr. James Wilson), Blockchain Studio (Dr. Samantha Reed), and more.

### Lab Detail — Professor View

![Lab Detail Professor](docs/screenshots/lab_detail_professor.png)

> **Intelligent Systems Studio** — Dr. Ana Rodriguez, Biomedical Engineering. Skills: Java, Pandas, GANs, Deep Learning, Cryptography, BERT, Python. 5 openings, Funded. Professor sees Edit Listing, View Applications, and Delete buttons — no Apply button.

### Edit Lab Listing — Professor View

![Lab Form Edit](docs/screenshots/lab_form_edit.png)

> Edit form for Intelligent Systems Studio pre-populated with all existing data. Skill tags with × remove buttons. Update Listing and Cancel buttons.

### Delete Lab Confirmation Dialog

![Delete Lab](docs/screenshots/delete_lab_confirm.png)

> Browser confirmation: "Are you sure you want to delete this lab listing?"

### Application Review — Professor View

![Application Review](docs/screenshots/application_review.png)

> Applications for Intelligent Systems Studio: All (0), Pending (0), Accepted (0), Declined (0). Filter tabs shown. When applications exist, Accept and Decline buttons appear per applicant card.

---

## Tech Stack

| Layer              | Technology                                              |
| ------------------ | ------------------------------------------------------- |
| **Backend**        | Node.js v18+, Express 5                                 |
| **Database**       | MongoDB Atlas (native driver — no Mongoose)             |
| **Authentication** | Passport.js (passport-local), express-session, bcryptjs |
| **Frontend**       | React 19, React Router v7, Vite                         |
| **HTTP Client**    | Native Fetch API (no Axios)                             |
| **Code Quality**   | ESLint, Prettier                                        |
| **Deployment**     | Render                                                  |
| **License**        | MIT                                                     |

---

## Role-Based Access

| Feature                             | Student | Professor |
| ----------------------------------- | ------- | --------- |
| Browse labs                         | ✓       | ✓         |
| See skill-match percentage          | ✓       |           |
| Create / edit profile               | ✓       |           |
| Apply to labs                       | ✓       |           |
| View own applications               | ✓       |           |
| Withdraw application (pending only) | ✓       |           |
| Post a lab listing                  |         | ✓         |
| Edit / delete lab listings          |         | ✓         |
| View all applications for their lab |         | ✓         |
| Accept / decline applications       |         | ✓         |
| Delete account                      | ✓       | ✓         |

---

## API Endpoints

### Authentication

| Method   | Endpoint             | Description                                   |
| -------- | -------------------- | --------------------------------------------- |
| `POST`   | `/api/auth/register` | Register a new user (student or professor)    |
| `POST`   | `/api/auth/login`    | Sign in with email and password               |
| `POST`   | `/api/auth/logout`   | Sign out and destroy session                  |
| `GET`    | `/api/auth/me`       | Get the currently authenticated user          |
| `DELETE` | `/api/auth/account`  | Delete account, profile, and all applications |

### Labs

| Method   | Endpoint        | Description                                                      |
| -------- | --------------- | ---------------------------------------------------------------- |
| `GET`    | `/api/labs`     | List all labs (filterable by department, skill, funding, search) |
| `GET`    | `/api/labs/:id` | Get a single lab                                                 |
| `POST`   | `/api/labs`     | Create a lab listing                                             |
| `PUT`    | `/api/labs/:id` | Update a lab listing                                             |
| `DELETE` | `/api/labs/:id` | Delete a lab listing                                             |

### Profiles

| Method   | Endpoint            | Description                            |
| -------- | ------------------- | -------------------------------------- |
| `GET`    | `/api/profiles/me`  | Get the authenticated user's profile   |
| `GET`    | `/api/profiles`     | List all profiles                      |
| `GET`    | `/api/profiles/:id` | Get a profile by ID                    |
| `POST`   | `/api/profiles`     | Create a profile (linked to auth user) |
| `PUT`    | `/api/profiles/:id` | Update a profile (owner only)          |
| `DELETE` | `/api/profiles/:id` | Delete a profile (owner only)          |

### Applications

| Method   | Endpoint                         | Description                                        |
| -------- | -------------------------------- | -------------------------------------------------- |
| `GET`    | `/api/applications`              | List applications (filterable by labId, mine=true) |
| `GET`    | `/api/applications/check/:labId` | Check if current user already applied to a lab     |
| `GET`    | `/api/applications/:id`          | Get a single application                           |
| `POST`   | `/api/applications`              | Submit an application (one per lab per user)       |
| `PUT`    | `/api/applications/:id`          | Update application statement (owner only)          |
| `PATCH`  | `/api/applications/:id/status`   | Accept or decline (professor only)                 |
| `DELETE` | `/api/applications/:id`          | Withdraw an application (owner only)               |

---

## MongoDB Collections

| Collection     | Records | Description                    |
| -------------- | ------- | ------------------------------ |
| `users`        | dynamic | Registered user accounts       |
| `labs`         | 1,050+  | Research lab listings (seeded) |
| `profiles`     | dynamic | Student profiles               |
| `applications` | dynamic | Lab applications               |

---

## Instructions to Build

### Prerequisites

- Node.js v18 or higher
- npm v9 or higher
- MongoDB Atlas account (free tier works)

### Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/prasad0411/LabConnect.git
   cd LabConnect
   ```

2. **Install backend dependencies**

   ```bash
   npm install
   ```

3. **Install frontend dependencies**

   ```bash
   cd client
   npm install
   cd ..
   ```

4. **Configure environment variables**

   Copy `.env.example` to `.env` and fill in your values:

   ```bash
   cp .env.example .env
   ```

   ```env
   MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/labconnect
   SESSION_SECRET=your-random-secret-string-here
   PORT=3000
   ```

5. **Seed the database**

   ```bash
   npm run seed
   ```

6. **Build the frontend**

   ```bash
   cd client
   npm run build
   cd ..
   ```

7. **Start the server**

   ```bash
   npm start
   ```

8. **Open in browser**

   ```
   http://localhost:3000
   ```

### Development Mode

Run the backend and frontend dev servers in two separate terminals:

```bash
# Terminal 1 — backend
npm run dev
```

```bash
# Terminal 2 — frontend
cd client && npm run dev
```

The Vite dev server proxies `/api` requests to the backend on port 3000.

---

## Live Deployment

[https://labconnect-w18c.onrender.com](https://labconnect-w18c.onrender.com)

---

## License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

---

<p align="center">Made by Prasad Kanade & Saurabh Lohokare — Northeastern University, Spring 2026</p>
