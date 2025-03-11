# Login Component  

## Overview  
This component provides a **user authentication form** for logging in.  
It includes email and password inputs, a "Remember Me" checkbox, validation, and error handling.  

## Component Structure  
- `Login.js`: The main login form component.  
- `Button.js`: A reusable button component used for form submission.  

## State Management  
- `useState` is used to track:  
  - `loggedIn`: Stores email, password, and remember me checkbox state.  
  - `errors`: Stores validation errors for form fields.  
  - `authError`: Displays authentication failure messages.  

## Validation & Error Handling  
- **Client-side validation**:  
  - Email and password are required.  
  - Password must be at least 6 characters.  
- **Authentication error handling**:  
  - Displays "Invalid email or password" when login fails.  

## How to Use  
1. Import the component in your Next.js page:  
   ```jsx
   import Login from "@/components/Login";

   export default function Page() {
     return <Login />;
   }
