# Authentication-Authorization-and-Role-Based-Access-Control-RBAC-
This project implements a Role-Based Access Control (RBAC) system using Node.js, Express, JWT, and MongoDB. It provides secure authentication and authorization mechanisms, ensuring that users can only access resources based on their assigned roles. The system is designed to demonstrate core security principles like authentication, authorization, and role management, making it scalable and secure for modern web applications.
Key Features
Authentication:
Users can register, log in, and securely log out.
Passwords are hashed using bcrypt to ensure sensitive information is protected.
JSON Web Tokens (JWT) are used for stateless session management.
Authorization:
Access control is implemented based on user roles (e.g., Admin, User, Moderator).
Middleware ensures that only authorized users can access specific routes.
Role-Based Access Control (RBAC):
Roles are assigned to users during registration or by an administrator.
Middleware checks the user’s role and grants or denies access to endpoints based on predefined rules.
Flexibility to add new roles and permissions dynamically.
Security:
Tokens are signed and verified using a secret key.
Routes are protected against unauthorized access.
Secure error handling to prevent sensitive information leakage.
Scalability:
Modular architecture allows easy integration into larger systems.
MongoDB is used for persistent user data storage.
My Role in This Project
As the Lead Developer for this project, I was responsible for the end-to-end development and implementation of the Role-Based Access Control (RBAC) system. 
GitHub Repository - RBAC Middleware Project Repository
Live Deployment - RBAC Middleware API Live Demo
Testing Users and Roles
Register users with roles like Admin, Moderator, and User to test different access levels.
Use the respective endpoints to verify access restrictions for each role.
For any issues or questions during testing, feel free to contact me at sakchhipriya823@gmail.com.
