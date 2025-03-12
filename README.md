# GitHub Issues Kanban Board

This project is a **Kanban board for GitHub issues**, allowing users to **fetch issues from any public repository** and manage them by dragging and dropping them across different columns.

## 🚀 Features

- 📌 **Enter a GitHub repository URL** (e.g., `https://github.com/facebook/react`) and press "Load".
- 🔄 **Fetch issues using the GitHub API** and display them in a Kanban board.
- 📝 **Three columns**:
  - **ToDo** → All new issues.
  - **In Progress** → Opened issues with an assignee.
  - **Done** → Closed issues.
- 🎯 **Drag & Drop** issues between columns and reorder them.
- 💾 **Persistent state**: Issue positions are saved between browser sessions.
- 🔗 **Visit repository and owner profiles** directly from the UI.

## 🛠️ Technologies Used

- **React 19** with **Hooks**
- **TypeScript**
- **Chakra UI** (for styling)
- **Redux Toolkit** (for state management)
- **@dnd-kit/core** (for Drag & Drop)
- **Vite** (for fast development & build)
- **LocalStorage API** (for storing state between sessions)

## 📦 Setup & Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/YOUR_USERNAME/test-task-github-kanban.git

