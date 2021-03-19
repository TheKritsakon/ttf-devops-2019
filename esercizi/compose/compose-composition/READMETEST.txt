# TEST FILE = docker-compose-test.yml
# - fix backtick , host not define
# COMANDI: docker-compose -f docker-compose-test.yml -f docker-compose-infrastructure.yml up -d
# SERVIZI FUNZIONANTI : web-ui / (quote e like-service) non funzionano, ma per un problema di config dei parametri

# TEST FILE= docker-compose-local.yml
# COMANDI: docker-compose -f docker-compose-local.yml -f docker-compose-infrastructure.yml up -d 
# SERVIZI FUNZIONANTI: mogo-express(db ui), redis-commander(db ui), reverse-proxy, porte esposte 
