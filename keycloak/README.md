# Keycloak

### Realms and Users

1. Export existing realms, clients, and users json files from running Keycloak.

```bash
# export realm from running Keycloak
$ docker exec keycloak /opt/keycloak/bin/kc.sh export --dir /tmp/exports
$ docker cp keycloak:/tmp/exports /path/to/keycloak/config/realms/import
```

2. Import files during Keyloak startup.

```bash
# snippet from docker-compose.yml
...
volumes:
    - /path/to/keycloak/config/realms/import:/opt/keycloak/data/import
...
entrypoint: [
    "--import-realm",

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