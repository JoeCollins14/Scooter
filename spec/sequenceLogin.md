# ScooterApp

## Sequence Diagram - Login

The flow for a user logging into the ScooterApp.

```mermaid

sequenceDiagram
    User ->> ScooterApp: login
    activate ScooterApp

    alt check registerUsers & password
     ScooterApp -->> User: Username or password is incorrect
    else is registered and password correct
        ScooterApp -->> User: Logged in displayed to console
        deactivate ScooterApp
    end

```
