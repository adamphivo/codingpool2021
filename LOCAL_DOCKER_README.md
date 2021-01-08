#Local Docker Compose

## Dependency :
This Docker Compose stack needs Adimeo's local docker environnement. It can be found there : https://github.com/Core-Techs-Git/adimeo_docker_local

## Docker Compose global commands

### Start stack (in background with "-d")
    docker-compose up -d

### Stop stack
    docker-compose down

##DB common commands

###Access MySql CLI
    docker-compose run -it db coding_pool_2021 -hcoding_pool_2021_db -uroot -proot

### To dump DB
    docker exec coding_pool_2021_db sh -c 'exec mysqldump -uroot -proot coding_pool_2021' > $PWD/dump.sql

### To restore DB
    docker exec -i coding_pool_2021_db sh -c 'exec mysql -uroot -proot coding_pool_2021' < $PWD/dump.sql


## Composer and Drush common commands

### Access PHP container shell
    docker exec -it coding_pool_2021_php sh

### Launch Composer commands
    docker exec coding_pool_2021_php composer install
    docker exec coding_pool_2021_php composer require drupal/module_name
    ...

### Launch Drush commands
    docker exec coding_pool_2021_php drush cr
    docker exec coding_pool_2021_php drush updb
    ...
