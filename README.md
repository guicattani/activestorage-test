## Setup

### Prerequisites

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

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

