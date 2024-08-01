# Todo (Using RTK)

- using json server for rendering json file (for CRUD operation)
- using fontawesome icons

## Process Using RTK

- createApi
- add the CRUD operations which we need to use
- wrap up the "App" component with "APIProvider" and pass the relevant apiSlice
- use the custom hooks provided by createApi and perform CRUD operation

Note: there is no need of store, but if we need to use store then we need to use *middleware* in the store

## Working with JSON

- Installation

```cmd
npm i json-server -g
```

- Build the file (db.json), and run the server using the following command:

```cmd
json-server --watch <path_of_file> --port <port_number>
```
