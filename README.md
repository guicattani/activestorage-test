Rails ActiveStorage test with a React SPA and a Docker setup

### Installation
If you're using an M1/2 Mac OS, please consider creating this environment variable:
`CPU_ARCH=arm64`

```shell
docker-compose build
docker-compose run api rake db:setup
docker-compose run api rake db:migrate
```

## Usage
### Tests

```shell
docker-compose run api rake db:migrate RAILS_ENV=test
docker-compose run api rspec
```

### Run

```shell
docker-compose up
open http://localhost:8000
```

