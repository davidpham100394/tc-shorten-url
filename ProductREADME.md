# Product README: URL Shortening Web App

## Critical Product Parts & Prioritization Criteria

This product is a URL shortening web application built with TypeScript and React, integrating with the CleanURI API. To deliver a robust and user-friendly product, the following parts are prioritized as most critical:

### 1. Responsive Layout & Accessibility

- **Description:** The app should look good and function well on both desktop and mobile devices, matching the provided designs.
- **Reason for Priority:** Ensures the product is usable by all target users and meets modern web standards.

### 2. URL Shortening Functionality

- **Description:** Users must be able to input a URL and receive a shortened version using the CleanURI API.
- **Reason for Priority:** This is the core feature; without it, the product does not fulfill its main purpose.
- **Problems:** CleanURI having CORS error therefore we have to create an independent express project to use it

### 3. Receive an error message when the form is submitted if empty
- **Description:** An error message should be displayed when users submit the form with an empty or invalid URL.
- **Reason for Priority:** This is an acceptance criterion aimed at improving the user experience by providing immediate feedback on incorrect or missing input.
- **Approach:** Utilize Zod for client-side form validation to ensure the URL is present and correctly formatted before submission.

### 4. Copy-to-Clipboard Functionality

// TODO

### 5. Persistence of Shortened Links

// TODO

## Note on Libraries and Tools

The project already leverages React, TypeScript, React Query, React Hook Form, and Zod for schema validation, among others.
UI library: Tailwind CSS
API library: TanStack Query

---
