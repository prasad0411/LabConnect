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
- **Account management** — Deleting a profile removes the user account, profile, and all applications, then redirects to registration

---

## Screenshots

### Register
![Register](docs/screenshots/register.png)

### Sign In
![Sign In](docs/screenshots/signin.png)

### Browse Labs
![Browse Labs](docs/screenshots/browse_labs.png)

### Lab Detail (Student View)
![Lab Detail](docs/screenshots/lab_detail.png)

### Lab Form (Professor View)
![Lab Form](docs/screenshots/lab_form.png)

### Complete Your Profile
![Profile Form](docs/screenshots/profile_form.png)

### Profile View
![Profile View](docs/screenshots/profile_view.png)

### Application Form
![Application Form](docs/screenshots/application_form.png)

### My Applications
![Applications List](docs/screenshots/applications_list.png)

### Application Review (Professor View)
![Application Review](docs/screenshots/application_review.png)

---

## Tech Stack

- **Backend:** Node.js, Express 5, MongoDB Atlas (native driver)
- **Authentication:** Passport.js (passport-local), express-session, bcryptjs
- **Frontend:** React 19, React Router, Vite
- **Code Quality:** ESLint, Prettier

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

## Role-Based Access

| Feature                        | Student | Professor |
| ------------------------------ | ------- | --------- |
| Browse labs                    | ✓       | ✓         |
| See skill-match percentage     | ✓       |           |
| Create / edit profile          | ✓       |           |
| Apply to labs                  | ✓       |           |
| View own applications          | ✓       |           |
| Withdraw application           | ✓       |           |
| Post a lab listing             |         | ✓         |
| Edit / delete lab listings     |         | ✓         |
| Accept / decline applications  |         | ✓         |
| Delete account                 | ✓       | ✓         |

---

## API Endpoints

### Authentication

| Method   | Endpoint             | Description                                    |
| -------- | -------------------- | ---------------------------------------------- |
| `POST`   | `/api/auth/register` | Register a new user (student or professor)     |
| `POST`   | `/api/auth/login`    | Sign in with email and password                |
| `POST`   | `/api/auth/logout`   | Sign out and destroy session                   |
| `GET`    | `/api/auth/me`       | Get the currently authenticated user           |
| `DELETE` | `/api/auth/account`  | Delete account, profile, and all applications  |

### Labs

| Method   | Endpoint        | Description                                                  |
| -------- | --------------- | ------------------------------------------------------------ |
| `GET`    | `/api/labs`     | List all labs (filterable by department, skill, funding, search) |
| `GET`    | `/api/labs/:id` | Get a single lab                                             |
| `POST`   | `/api/labs`     | Create a lab listing                                         |
| `PUT`    | `/api/labs/:id` | Update a lab listing                                         |
| `DELETE` | `/api/labs/:id` | Delete a lab listing                                         |

### Profiles

| Method   | Endpoint             | Description                              |
| -------- | -------------------- | ---------------------------------------- |
| `GET`    | `/api/profiles/me`   | Get the authenticated user's profile     |
| `GET`    | `/api/profiles`      | List all profiles                        |
| `GET`    | `/api/profiles/:id`  | Get a profile by ID                      |
| `POST`   | `/api/profiles`      | Create a profile (linked to auth user)   |
| `PUT`    | `/api/profiles/:id`  | Update a profile (owner only)            |
| `DELETE` | `/api/profiles/:id`  | Delete a profile (owner only)            |

### Applications

| Method    | Endpoint                          | Description                                         |
| --------- | --------------------------------- | --------------------------------------------------- |
| `GET`     | `/api/applications`               | List applications (filterable by labId, mine=true)   |
| `GET`     | `/api/applications/check/:labId`  | Check if current user already applied to a lab       |
| `GET`     | `/api/applications/:id`           | Get a single application                             |
| `POST`    | `/api/applications`               | Submit an application (one per lab per user)          |
| `PUT`     | `/api/applications/:id`           | Update application statement (owner only)            |
| `PATCH`   | `/api/applications/:id/status`    | Accept or decline (professor only)                   |
| `DELETE`  | `/api/applications/:id`           | Withdraw an application (owner only)                 |

---

## MongoDB Collections

| Collection     | Records  | Description                    |
| -------------- | -------- | ------------------------------ |
| `users`        | dynamic  | Registered user accounts       |
| `labs`         | 1050+    | Research lab listings (seeded) |
| `profiles`     | dynamic  | Student profiles               |
| `applications` | dynamic  | Lab applications               |

---

## License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

---

<p align="center">Made by Prasad Kanade & Saurabh Lohokare</p>