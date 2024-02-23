# Creating React - Mongo - Node App

### Procedure for Full Stack Application [MERN]

### Create Two Modules

- React - for Client / Frontend
- Node - for Server / Backend



## Backend & Database

- Create Node Module [Server]

  - Create `server.js` [Main JS File]

  - Install Node and necessary dependencies
    ```bash
    npm init
    npm i nodemon express mongoose dotenv
    ```

  - Create file `.env` for adding environment variables

  - Add file `.gitignore` for ignoring files from the GitHub repository



- Create Model for Database-related Files

  - Create `Schema.js`

  - Create `ConnectToDB.js`



- Create Server

  - Setup APIs, Router



- Create `ConnectToDB.js` file

  - Create a function to connect to MongoDB, export it.

  - Create a schema to create a collection in MongoDB

    ```javascript
    const EmployeeSchema = new mongoose.Schema({ /* ...configuration */ });
    ```

  - Create a constant for the model specifying the model

    ```javascript
    const EmployeeModel = mongoose.model("Employee", EmployeeSchema, "Employee");
    ```
    - Export it `module.exports = { EmployeeModel };`




> **Note**: Actions for manipulating data in the database will be performed via `EmployeeModel`.



- Create APIs Like GET, POST, PUT, DELETE


  - **GET:**
    1. Getting All Employee Data
    2. Getting Single Employee Data By ID


  - **POST:**
    Creating New Employee on MongoDB


  - **PUT:**
    Updating Specific Employee by ID


  - **DELETE:**
    Deleting Specific Employee





## Frontend

- **Create React App [Client]**

  - Run the following command:
    ```
    npx create-react-app client
    ```



- **Installed Libraries**

  - axios
  - React-icons
  - Taiilwind CSS



- **Creted Routes for Navigation**

  - List Of All Employees

  - Page to Create new Employee



- Added functionality to Deleted & Edit Employees

  - Delete Employee

  - Edit Employee




## Integration - Full Stack

*This is an full stack web A*


