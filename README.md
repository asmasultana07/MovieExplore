# 🎬 Movie Explorer

**Project Name :** MovieExplore  — A Movie Library
> **Objective:** Build a responsive **Movie Explorer Application** using React. Users should be able to browse movies, search for specific titles, and view detailed information in an interactive modal.

**Github Repo Link :**    
**Live URL :**   

---

## Technology Stack

| Layer                      | Technology                    |
|--------------              |-------------------------------|
| **Frontend**               | React.js, JavaScript               |
| **Styling**                | Tailwind CSS  |
| **Routing**                | React Router      | 
| **Version Ctrl**           | Git, GitHub       |
| **Deployment**             | Vercel       |
| **Data:**                  | [Free Movie Database API](https://www.tvmaze.com/api)       |

---

## Features

###  1. Home Page

The Home Page serves as the landing page and must include the following sections:

####  Navbar 

####  Hero Banner
 
####  Footer 

**📐 UI Wireframe Example:**
```text
╭──────────────────────────────────────────────────────╮
│  🎬 MovieExplorer                        [ Movies ]  │
├──────────────────────────────────────────────────────┤
│                                                      │
│                 DISCOVER MOVIES                      │
│                                                      │
│        Explore and discover your favorite            │
│        movies from around the world.                 │
│                                                      │
│                 [   Explore Now ]                    │
│                                                      │
╰──────────────────────────────────────────────────────╯
```

---

###  2. Movie Listing Page

Create a dedicated page where users can browse and search for movies.

####  Search Functionality
 
** UI Wireframe Example:**
```text
╭──────────────────────────────────────────────────────╮
│  🔍 Search for a movie...                            │
╰──────────────────────────────────────────────────────╯
```
### Search Shows

**Endpoint:** `GET /search/shows?q=:query`

**Example:**
```bash
GET https://api.tvmaze.com/search/shows?q=girls
```

#### 🌐 API Integration & State Management
Fetch movie data from your chosen **Free Movie Database API**. 

#### 🎬 Movie Cards
 

** UI Wireframe Example:**
```text
╭─────────────────────╮
│                     │
│       Poster        │
│                     │
├─────────────────────┤
│  Movie Title        │
│  ⭐ 8.5  •  📅2024 │
│                     │
│  [ See Details ]    │
╰─────────────────────╯
```

---

### All Shows/Movie

**Endpoint:**  
`GET /shows`

**Example:**  
```bash
GET https://api.tvmaze.com/shows
```
 


### 🎞️ 3. Movie Details Modal

When a user clicks the **See Details** button, open a modal overlay displaying in-depth information about the selected movie.

**Modal Contents:**
 
** UI Wireframe Example:**
```text
╭──────────────────────────────────────────────╮
│                                      [ ✕ ]   │
├──────────────────────────────────────────────┤
│                                              │
│               MOVIE BACKDROP                 │
│                                              │
├──────────────────────────────────────────────┤
│  Movie Title                                 │
│  ⭐ Rating: 8.5   |   📅 Release: 2024      │
│                                              │
│  Overview:                                   │
│  Movie description goes here...              │
│                                              │
│                              [ ❌ Close ]    │
╰──────────────────────────────────────────────╯
```
 

---
## Getting Started

### Prerequisites
Make sure you have  npm installed.

### Installation & Local Setup

1. **Clone the Repository:**
   ```bash
   git clone [https://github.com/your-username/MovieExplore.git] 
   cd MovieExplore
2. **Install Dependencies:**
   ```bash
   npm install
3. **Run the Development Server:**
   ```bash
   npm run dev
---
 