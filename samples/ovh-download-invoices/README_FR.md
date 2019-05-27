# ovh-download-invoices

Ce code télécharge toutes les factures de votre compte OVH et les stocke dans un répertoire facile à utiliser, avec un fichier tsv résumé.

Ce fichier tsv peut être ouvert dans n’importe quel tableur afin d’extraire la TVA de votre comptabilité.

## Usage

```bash
$ node index.js --help
Usage: index [options]

Options:
  -V, --version               output the version number
  -u, --utc                   use UTC times, by defaut use localhost timezone
  -d, --dest <path>           destination directory
  -s, --split <type>          hierarchy model year/month/none default is month (default: "month")
  -c, --concurrency <number>  max concurent download
  -h, --help                  output usage information
```

### formats -s

- *month* créer un répertoire par mois, par exemple: 2019/01.
- *year* créer un répertoire par année par exemple: 2019/01.
- *none* ne créer auccun répertoire, place tous les pdf dans le meme répertoire.

### utc / locale -u

Si le flag *utc* est activé, convertit les date en convert en UTC.
Sinon, le script utilisera votre fuseau horaire actuel.

### destination -d

Choisiser un chemin local pour sauvegarder toutes les factures, un répertoire contenant le nic-handle sera créé dans cette répertoire pour éviter de mélanger les factures de différents comptes.

### concurrency -c

Téléchargez plusieurs factures en parallèle, n'utiliser pas de valeur trop élevée, sinon Ovh bloquera votre IP.

## Tree

Le répertoire de destination peut ressembler à ça:

```bash
nichandle-ovh
 - summary.tsv
 - 2019
    - 01
        - 2019-01-01_FR123406_12.99EUR.pdf
        - 2019-01-05_FR123407_2.99EUR.pdf
    - 02
        - 2019-02-05_FR123461_2.99EUR.pdf
    - 03
        - 2019-03-15_FR123801_299.99EUR.pdf
        - 2019-03-25_FR123802_2.99EUR.pdf
```
