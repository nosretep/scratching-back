# Keycloak

### Realms and Users

```bash
# realms and initial users are imported through docker-compose
--import-realm
```

&nbsp;

### Initial Users
Initial users can be used to login to frontend

Initial users are used for [cypress e2e testing](../testing/README.md)
- **mary fullcrud** (mary:admin) has full CRUD permissions
- **joe readonly** (joe:admin) has read permissions

&nbsp;

### Warning

Initial users, and all other Keycloak realm/client configs, are wiped out each time docker-compose is re-run.