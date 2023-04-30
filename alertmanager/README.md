# AlertManager

## Opsgenie API Key

```bash
- alertmanager
  - alertmanager.yml
    # opsgenie_api_key_file: '/etc/alertmanager/opsgenie_api_key.txt'
  - opsgenie_api_key.txt
    # <OPSGENIE_API_KEY> by itself
    # - opsgenie integration using "API" integration type

#   from docker-compose.yml
#   alertmanager:
#     ...
#     volumes:
#       - ./alertmanager:/etc/alertmanager

#   from .gitignore
#   opsgenie_api_key.txt
```