# ovh-move-failover

TODO publish sample.


'''bash
ovh-move-failover  --help
Usage: ovh-move-failover [options] [source] [destination]

Migrate IP from source to destination, source can be any failover ip or service, if omit paral list available values

Options:
  -V, --version            output the version number
  -c, --cache <cacheFile>  cache cert in file
  -h, --help               display help for command
'''

```bash
./bin/ovh-move-failover  --cache ../../../move.json
```
