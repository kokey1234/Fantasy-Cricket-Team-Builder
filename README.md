# Select Your XI - A Fantasy Cricket Team Builder 🏏

A dynamic web application that allows cricket enthusiasts to build their own fantasy cricket team. Users can browse a list of international players, select their favorite ones while managing a virtual budget, and assemble their dream team.

### 🔗 **Live Demo:** [https://fantasy-cricket-team-builder.vercel.app/](https://fantasy-cricket-team-builder.vercel.app/)

-----

## Application Preview

*A snapshot of the player selection interface, showing available and selected players.*

-----

## Key Features

This project showcases a variety of features designed for a seamless user experience:

  * **Player Roster:** Browse a list of available cricket players fetched from a data source, with details like price, role, and rating.
  * **Team Selection:** Select up to 11 players to form your team, with a validation to now allow more than 11 players.
  * **Budget Management:** Manage a virtual budget; player prices are deducted from your coin balance upon selection.
  * **Remove Players:** Easily remove players from your team, and the cost is instantly refunded to your budget.
  * **State Persistence:** Your coin balance and selected team are automatically saved in your browser's local storage, so your progress is never lost.
  * **User-Friendly Validation:** Get clear alerts for insufficient funds, selecting a player who is already on the team, or trying to add more than 11 players.
  * **Responsive Design:** The interface is fully responsive, providing a great experience on both desktop and mobile devices.
  * **Modern UI:** A clean, dark-themed UI built with a modern tech stack.

-----

## Technology Stack

This project was built using the following technologies:

  * **Frontend Library:** [React](https://reactjs.org/)
  * **Build Tool:** [Vite](https://vitejs.dev/)
  * **Styling:** [Tailwind CSS](https://tailwindcss.com/) & [daisyUI](https://daisyui.com/)
  * **State Management:** React Hooks (`useState`, `useEffect`)
  * **Routing:** [React Router](https://reactrouter.com/)
  * **Animations:** [Motion](https://motion.dev/)
  * **Icons:** [React Icons](https://react-icons.github.io/react-icons/)
  * **Notifications:** [React Toastify](https://fkhadra.github.io/react-toastify/introduction/)

-----

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

  * npm
    ```sh
    npm install npm@latest -g
    ```

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/md8-habibullah/Fantasy-Cricket-Team-Builder.git
    ```
2.  **Navigate to the project directory:**
    ```sh
    cd Fantasy-Cricket-Team-Builder
    ```
3.  **Install NPM packages:**
    ```sh
    npm install
    ```
4.  **Start the development server:**
    ```sh
    npm run dev
    ```
    The application will be available at `http://localhost:5173` (or the next available port).

-----

## Available Scripts

In the project directory, you can run:

  * `npm run dev`: Runs the app in the development mode.
  * `npm run build`: Builds the app for production to the `dist` folder.
  * `npm run lint`: Lints the project files using ESLint.
  * `npm run preview`: Serves the production build locally for preview.

-----

## Author

**MD Habibullah**

  * **GitHub:** [suspicious link removed]