# Image Vibe

Image Vibe is a Next.js project designed to provide a seamless image viewing experience. This README file will guide you through the setup and usage of the project.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Scripts](#scripts)
- [Contributing](#contributing)
- [License](#license)

## Installation

To get started with Image Vibe, clone the repository and install the dependencies:

```bash
git clone https://github.com/adityakkpk/image-vibe.git
cd image-vibe
npm install
```

## Usage

To run the development server, use the following command:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

To build the project for production, use:

```bash
npm run build
```

To start the production server, use:

```bash
npm start
```

To Show the live preview follow the below link:

```
https://image-vibe.vercel.app/
```

## Project Structure

The project structure is as follows:

```
/image-vibe
├── .next/                  # Next.js build output
├── node_modules/           # Node.js modules
├── public/                 # Public assets
├── src/                    # Source files
│   ├── components/         # React components
│   ├── pages/              # Next.js pages
│   ├── styles/             # CSS styles
│   └── utils/              # Utility functions
├── .gitignore              # Git ignore file
├── package.json            # NPM package configuration
├── README.md               # Project README file
└── next.config.js          # Next.js configuration
```

## Scripts

The following scripts are available in the project:

- `dev`: Runs the development server.
- `build`: Builds the project for production.
- `start`: Starts the production server.
- `lint`: Runs ESLint to check for linting errors.
- `postinstall`: Generates prisma schema files

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.