# TEST FILE = docker-compose-test.yml
# - fix backtick , host not define
# COMANDI: docker-compose -f docker-compose-test.yml -f docker-compose-infrastructure.yml up -d
# SERVIZI FUNZIONANTI : web-ui / (quote e like-service) non funzionano, ma per un problema di config dei parametri

# TEST FILE = docker-compose-local.yml
# COMANDI: docker-compose -f docker-compose-local.yml -f docker-compose-infrastructure.yml up -d 
# SERVIZI FUNZIONANTI: mogo-express(db ui), redis-commander(db ui), reverse-proxy, porte esposte 

# TEST FILE = docker-compose-prod.yml
# COMANDI: docker-compose -f docker-compose-prod.yml -f docker-compose-infrastructure-prod.yml up -d
# SERVIZI FUNZIONANTI: quote e like servizi sono raggiugibili, mente i servizi ui di : mongo-express, redi-commande, traefik non sono raggiungibili 
