# Humble Superhero Registry

A full-stack application that celebrates the humility of team members through a superhero registry system.

## Project Overview

This project consists of a NestJS backend API and a React frontend interface that allows users to:
- Add new superheroes with their superpowers and humility scores
- View a sorted list of superheroes based on their humility scores

## Tech Stack

### Backend
- NestJS
- TypeScript
- Jest (Testing)
- Class Validator

### Frontend
- React
- TypeScript
- Material-UI
- Context API
- Axios

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- Yarn or npm
- Git

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/humble-superhero-registry.git
cd humble-superhero-registry
```

2. Backend Setup:
```bash
# Navigate to backend directory
cd humble-superhero-api

# Install dependencies
yarn install

# Start the development server
yarn start:dev
```
The backend will run on http://localhost:3001

3. Frontend Setup:
```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
yarn install

# Start the development server
yarn start
```
The frontend will run on http://localhost:3000

## API Endpoints

### `POST /superheroes`
Creates a new superhero.

Request body:
```json
{
  "name": "string",
  "superpower": "string",
  "humilityScore": number (1-10)
}
```

### `GET /superheroes`
Returns a list of superheroes sorted by humility score in descending order.

## Features

- ✅ In-memory storage for superhero data
- ✅ Real-time updates in the frontend
- ✅ Input validation (1-10 humility score)
- ✅ Sorted display by humility score
- ✅ Clean and intuitive UI
- ✅ Comprehensive test coverage
- ✅ Error handling and loading states

## Testing

### Backend Tests
```bash
# Unit tests
yarn test

# E2E tests
yarn test:e2e

# Test coverage
yarn test:cov
```

## Team Collaboration Notes

### Code Review Process
1. Review PR descriptions for clarity
2. Check for proper test coverage
3. Verify input validation
4. Ensure error handling
5. Review documentation updates

### Development Workflow
1. Create feature branch
2. Write tests first (TDD approach)
3. Implement feature
4. Add documentation
5. Create PR with detailed description
6. Address review comments
7. Merge after approval

## If I Had More Time

1. **Technical Improvements**
   - Add database persistence (PostgreSQL/MongoDB)
   - Implement authentication and authorization
   - Add more CRUD operations
   - Implement caching
   - Add WebSocket for real-time updates
   - Add Swagger documentation

2. **Feature Enhancements**
   - Add superhero categories/teams
   - Implement user profiles
   - Add avatar upload functionality
   - Add search and filtering
   - Implement pagination
   - Add superhero achievements tracking

3. **Testing & Quality**
   - Add frontend unit tests
   - Implement E2E tests with Cypress
   - Add performance testing
   - Implement CI/CD pipeline
   - Add error tracking (Sentry)

4. **UX Improvements**
   - Add dark mode
   - Implement responsive design
   - Add animations
   - Improve accessibility
   - Add keyboard shortcuts

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Project Structure

```
humble-superhero-registry/
├── humble-superhero-api/        # Backend
│   ├── src/
│   │   ├── superheroes/
│   │   │   ├── dto/
│   │   │   │   ├── superheroes.dto.ts
│   │   │   │   └── superheroes.interfaces.ts
│   │   │   │   ├── superheroes.controller.ts
│   │   │   │   ├── superheroes.service.ts
│   │   │   │   └── superheroes.module.ts
│   │   │   └── app.module.ts
│   │   └── main.ts
│   └── test/
│       └── superheroes.e2e-spec.ts
└── frontend/                    # Frontend
    ├── src/
    │   ├── components/
    │   │   ├── SuperheroForm.tsx
    │   │   └── SuperheroList.tsx
    │   ├── context/
    │   │   └── SuperheroContext.tsx
    │   └── App.tsx
    └── package.json
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

* Thanks to the team for the opportunity to work on this challenge
* Inspired by the importance of humility in team collaboration
* Built with ❤️ and humility
