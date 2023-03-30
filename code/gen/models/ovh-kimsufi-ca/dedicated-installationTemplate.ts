import {Schema} from '../../src/schema';

// imported from https://ca.api.kimsufi.com:443/1.0/dedicated/installationTemplate.json

export const schema: Schema = {
  "apiVersion": "1.0",
  "apis": [
    {
      "description": "List the dedicated.installationTemplate.Templates objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "OVH operating system installation templates",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [],
          "responseType": "string[]"
        }
      ],
      "path": "/dedicated/installationTemplate"
    },
    {
      "description": "Available installation templates",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [
            {
              "dataType": "string",
              "description": "This template name",
              "fullType": "string",
              "name": "templateName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicated.installationTemplate.Templates"
        }
      ],
      "path": "/dedicated/installationTemplate/{templateName}"
    },
    {
      "description": "List the dedicated.installationTemplate.templatePartitioningSchemes objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Partitioning schemes available on this template",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:dedicatedInstallationTemplate/partitionScheme/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "This template name",
              "fullType": "string",
              "name": "templateName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/dedicated/installationTemplate/{templateName}/partitionScheme"
    },
    {
      "description": "Partitioning schemes available on this template",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:dedicatedInstallationTemplate/partitionScheme/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "This partitioning scheme name",
              "fullType": "string",
              "name": "schemeName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "This template name",
              "fullType": "string",
              "name": "templateName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicated.installationTemplate.templatePartitioningSchemes"
        }
      ],
      "path": "/dedicated/installationTemplate/{templateName}/partitionScheme/{schemeName}"
    },
    {
      "description": "List the dedicated.installationTemplate.hardwareRaid objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Hardware RAIDs defined in this partitioning scheme",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:dedicatedInstallationTemplate/partitionScheme/hardwareRaid/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "This partitioning scheme name",
              "fullType": "string",
              "name": "schemeName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "This template name",
              "fullType": "string",
              "name": "templateName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/dedicated/installationTemplate/{templateName}/partitionScheme/{schemeName}/hardwareRaid"
    },
    {
      "description": "Hardware RAID defined in this partitioning scheme",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:dedicatedInstallationTemplate/partitionScheme/hardwareRaid/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Hardware RAID name",
              "fullType": "string",
              "name": "name",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "This partitioning scheme name",
              "fullType": "string",
              "name": "schemeName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "This template name",
              "fullType": "string",
              "name": "templateName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicated.installationTemplate.hardwareRaid"
        }
      ],
      "path": "/dedicated/installationTemplate/{templateName}/partitionScheme/{schemeName}/hardwareRaid/{name}"
    },
    {
      "description": "List the dedicated.installationTemplate.templatePartitions objects",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Partitions defined in this partitioning scheme",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:dedicatedInstallationTemplate/partitionScheme/partition/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "This partitioning scheme name",
              "fullType": "string",
              "name": "schemeName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "This template name",
              "fullType": "string",
              "name": "templateName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "string[]"
        }
      ],
      "path": "/dedicated/installationTemplate/{templateName}/partitionScheme/{schemeName}/partition"
    },
    {
      "description": " Partitions defined in this partitioning scheme",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get this object properties",
          "httpMethod": "GET",
          "iamActions": [
            "account:apiovh:dedicatedInstallationTemplate/partitionScheme/partition/get"
          ],
          "noAuthentication": false,
          "parameters": [
            {
              "dataType": "string",
              "description": "Partition mount point",
              "fullType": "string",
              "name": "mountpoint",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "This partitioning scheme name",
              "fullType": "string",
              "name": "schemeName",
              "paramType": "path",
              "required": true
            },
            {
              "dataType": "string",
              "description": "This template name",
              "fullType": "string",
              "name": "templateName",
              "paramType": "path",
              "required": true
            }
          ],
          "responseType": "dedicated.installationTemplate.templatePartitions"
        }
      ],
      "path": "/dedicated/installationTemplate/{templateName}/partitionScheme/{schemeName}/partition/{mountpoint}"
    },
    {
      "description": "Get details about available distributions for dedicated servers",
      "operations": [
        {
          "apiStatus": {
            "description": "Stable production version",
            "value": "PRODUCTION"
          },
          "description": "Get details about available distributions for dedicated servers",
          "httpMethod": "GET",
          "noAuthentication": true,
          "parameters": [],
          "responseType": "dedicated.TemplateOsInfo[]"
        }
      ],
      "path": "/dedicated/installationTemplate/templateInfos"
    }
  ],
  "basePath": "https://ca.api.kimsufi.com/1.0",
  "models": {
    "complexType.UnitAndValue<T>": {
      "description": "A numeric value tagged with its unit",
      "generics": [
        "T"
      ],
      "id": "UnitAndValue",
      "namespace": "complexType",
      "properties": {
        "unit": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "value": {
          "canBeNull": false,
          "readOnly": false,
          "required": false,
          "type": "T"
        }
      }
    },
    "dedicated.TemplateOsHardwareRaidEnum": {
      "description": "Hardware RAID enum",
      "enum": [
        "raid0",
        "raid1",
        "raid10",
        "raid5",
        "raid50",
        "raid6",
        "raid60"
      ],
      "enumType": "string",
      "id": "TemplateOsHardwareRaidEnum",
      "namespace": "dedicated"
    },
    "dedicated.TemplateOsInfo": {
      "description": "A structure describing some interesting facts about an OS template",
      "id": "TemplateOsInfo",
      "namespace": "dedicated",
      "properties": {
        "category": {
          "canBeNull": false,
          "description": "OS Category (also called OS usage)",
          "readOnly": false,
          "required": false,
          "type": "dedicated.TemplateOsUsageEnum"
        },
        "description": {
          "canBeNull": false,
          "description": "OS long name",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "endOfInstall": {
          "canBeNull": true,
          "description": "OS template end of install at OVH date",
          "readOnly": false,
          "required": false,
          "type": "date"
        },
        "family": {
          "canBeNull": false,
          "description": "OS family (also called OS type)",
          "readOnly": false,
          "required": false,
          "type": "dedicated.TemplateOsTypeEnum"
        },
        "license": {
          "canBeNull": true,
          "description": "OS template license details",
          "readOnly": false,
          "required": false,
          "type": "dedicated.TemplateOsInfoLicense"
        },
        "project": {
          "canBeNull": true,
          "description": "OS template project details",
          "readOnly": false,
          "required": false,
          "type": "dedicated.TemplateOsInfoProject"
        },
        "subfamily": {
          "canBeNull": false,
          "description": "OS subfamily",
          "readOnly": false,
          "required": false,
          "type": "dedicated.TemplateOsSubfamilyEnum"
        },
        "templateName": {
          "canBeNull": false,
          "description": "OS template name",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "dedicated.TemplateOsInfoLicense": {
      "description": "A structure describing some interesting facts about an OS template licensing",
      "id": "TemplateOsInfoLicense",
      "namespace": "dedicated",
      "properties": {
        "os": {
          "canBeNull": true,
          "description": "OS template license OS details",
          "readOnly": false,
          "required": false,
          "type": "dedicated.TemplateOsInfoLicenseItem"
        },
        "usage": {
          "canBeNull": true,
          "description": "OS template license usage details",
          "readOnly": false,
          "required": false,
          "type": "dedicated.TemplateOsInfoLicenseItem"
        }
      }
    },
    "dedicated.TemplateOsInfoLicenseItem": {
      "description": "A structure describing some interesting facts about an OS template license item",
      "id": "TemplateOsInfoLicenseItem",
      "namespace": "dedicated",
      "properties": {
        "name": {
          "canBeNull": true,
          "description": "OS template license item names",
          "readOnly": false,
          "required": false,
          "type": "dedicated.TemplateOsInfoLicenseItemEnum[]"
        },
        "url": {
          "canBeNull": true,
          "description": "OS template license item url",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "dedicated.TemplateOsInfoLicenseItemEnum": {
      "description": "Standard license name according to SPDX",
      "enum": [
        "0BSD",
        "AAL",
        "ADSL",
        "AFL-1.1",
        "AFL-1.2",
        "AFL-2.0",
        "AFL-2.1",
        "AFL-3.0",
        "AGPL-1.0-only",
        "AGPL-1.0-or-later",
        "AGPL-3.0-only",
        "AGPL-3.0-or-later",
        "AMDPLPA",
        "AML",
        "AMPAS",
        "ANTLR-PD",
        "ANTLR-PD-fallback",
        "APAFML",
        "APL-1.0",
        "APSL-1.0",
        "APSL-1.1",
        "APSL-1.2",
        "APSL-2.0",
        "Abstyles",
        "Adobe-2006",
        "Adobe-Glyph",
        "Afmparse",
        "Aladdin",
        "Apache-1.0",
        "Apache-1.1",
        "Apache-2.0",
        "Artistic-1.0",
        "Artistic-1.0-Perl",
        "Artistic-1.0-cl8",
        "Artistic-2.0",
        "BSD-1-Clause",
        "BSD-2-Clause",
        "BSD-2-Clause-Patent",
        "BSD-2-Clause-Views",
        "BSD-3-Clause",
        "BSD-3-Clause-Attribution",
        "BSD-3-Clause-Clear",
        "BSD-3-Clause-LBNL",
        "BSD-3-Clause-Modification",
        "BSD-3-Clause-No-Nuclear-License",
        "BSD-3-Clause-No-Nuclear-License-2014",
        "BSD-3-Clause-No-Nuclear-Warranty",
        "BSD-3-Clause-Open-MPI",
        "BSD-4-Clause",
        "BSD-4-Clause-Shortened",
        "BSD-4-Clause-UC",
        "BSD-Protection",
        "BSD-Source-Code",
        "BSL-1.0",
        "BUSL-1.1",
        "Bahyph",
        "Barr",
        "Beerware",
        "BitTorrent-1.0",
        "BitTorrent-1.1",
        "BlueOak-1.0.0",
        "Borceux",
        "C-UDA-1.0",
        "CAL-1.0",
        "CAL-1.0-Combined-Work-Exception",
        "CATOSL-1.1",
        "CC-BY-1.0",
        "CC-BY-2.0",
        "CC-BY-2.5",
        "CC-BY-3.0",
        "CC-BY-4.0",
        "CC-BY-NC-1.0",
        "CC-BY-NC-2.0",
        "CC-BY-NC-2.5",
        "CC-BY-NC-3.0",
        "CC-BY-NC-4.0",
        "CC-BY-NC-ND-1.0",
        "CC-BY-NC-ND-2.0",
        "CC-BY-NC-ND-2.5",
        "CC-BY-NC-ND-3.0",
        "CC-BY-NC-ND-4.0",
        "CC-BY-NC-SA-1.0",
        "CC-BY-NC-SA-2.0",
        "CC-BY-NC-SA-2.5",
        "CC-BY-NC-SA-3.0",
        "CC-BY-NC-SA-4.0",
        "CC-BY-ND-1.0",
        "CC-BY-ND-2.0",
        "CC-BY-ND-2.5",
        "CC-BY-ND-3.0",
        "CC-BY-ND-4.0",
        "CC-BY-SA-1.0",
        "CC-BY-SA-2.0",
        "CC-BY-SA-2.5",
        "CC-BY-SA-3.0",
        "CC-BY-SA-4.0",
        "CC-PDDC",
        "CC0-1.0",
        "CDDL-1.0",
        "CDDL-1.1",
        "CDLA-Permissive-1.0",
        "CDLA-Sharing-1.0",
        "CECILL-1.0",
        "CECILL-1.1",
        "CECILL-2.0",
        "CECILL-2.1",
        "CECILL-B",
        "CECILL-C",
        "CERN-OHL-1.1",
        "CERN-OHL-1.2",
        "CERN-OHL-P-2.0",
        "CERN-OHL-S-2.0",
        "CERN-OHL-W-2.0",
        "CNRI-Jython",
        "CNRI-Python",
        "CNRI-Python-GPL-Compatible",
        "CPAL-1.0",
        "CPL-1.0",
        "CPOL-1.02",
        "CUA-OPL-1.0",
        "Caldera",
        "ClArtistic",
        "Condor-1.1",
        "Crossword",
        "CrystalStacker",
        "Cube",
        "D-FSL-1.0",
        "DFSG",
        "DOC",
        "DRL-1.0",
        "DSDP",
        "Dotseqn",
        "ECL-1.0",
        "ECL-2.0",
        "EFL-1.0",
        "EFL-2.0",
        "EPICS",
        "EPL-1.0",
        "EPL-2.0",
        "EUDatagrid",
        "EUPL-1.0",
        "EUPL-1.1",
        "EUPL-1.2",
        "Entessa",
        "ErlPL-1.1",
        "Eurosym",
        "FSFAP",
        "FSFUL",
        "FSFULLR",
        "FTL",
        "Fair",
        "Frameworx-1.0",
        "FreeBSD-DOC",
        "FreeImage",
        "GD",
        "GFDL-1.1-invariants-only",
        "GFDL-1.1-invariants-or-later",
        "GFDL-1.1-no-invariants-only",
        "GFDL-1.1-no-invariants-or-later",
        "GFDL-1.1-only",
        "GFDL-1.1-or-later",
        "GFDL-1.2-invariants-only",
        "GFDL-1.2-invariants-or-later",
        "GFDL-1.2-no-invariants-only",
        "GFDL-1.2-no-invariants-or-later",
        "GFDL-1.2-only",
        "GFDL-1.2-or-later",
        "GFDL-1.3-invariants-only",
        "GFDL-1.3-invariants-or-later",
        "GFDL-1.3-no-invariants-only",
        "GFDL-1.3-no-invariants-or-later",
        "GFDL-1.3-only",
        "GFDL-1.3-or-later",
        "GL2PS",
        "GLWTPL",
        "GPL-1.0-only",
        "GPL-1.0-or-later",
        "GPL-2.0-only",
        "GPL-2.0-or-later",
        "GPL-3.0-only",
        "GPL-3.0-or-later",
        "Giftware",
        "Glide",
        "Glulxe",
        "HPND",
        "HPND-sell-variant",
        "HTMLTIDY",
        "HaskellReport",
        "Hippocratic-2.1",
        "IBM-pibs",
        "ICU",
        "IJG",
        "IPA",
        "IPL-1.0",
        "ISC",
        "ImageMagick",
        "Imlib2",
        "Info-ZIP",
        "Intel",
        "Intel-ACPI",
        "Interbase-1.0",
        "JPNIC",
        "JSON",
        "JasPer-2.0",
        "LAL-1.2",
        "LAL-1.3",
        "LGPL-2.0-only",
        "LGPL-2.0-or-later",
        "LGPL-2.1-only",
        "LGPL-2.1-or-later",
        "LGPL-3.0-only",
        "LGPL-3.0-or-later",
        "LGPLLR",
        "LPL-1.0",
        "LPL-1.02",
        "LPPL-1.0",
        "LPPL-1.1",
        "LPPL-1.2",
        "LPPL-1.3a",
        "LPPL-1.3c",
        "Latex2e",
        "Leptonica",
        "LiLiQ-P-1.1",
        "LiLiQ-R-1.1",
        "LiLiQ-Rplus-1.1",
        "Libpng",
        "Linux-OpenIB",
        "MIT",
        "MIT-0",
        "MIT-CMU",
        "MIT-Modern-Variant",
        "MIT-advertising",
        "MIT-enna",
        "MIT-feh",
        "MIT-open-group",
        "MITNFA",
        "MPL-1.0",
        "MPL-1.1",
        "MPL-2.0",
        "MPL-2.0-no-copyleft-exception",
        "MS-PL",
        "MS-RL",
        "MTLL",
        "MakeIndex",
        "MirOS",
        "Motosoto",
        "MulanPSL-1.0",
        "MulanPSL-2.0",
        "Multics",
        "Mup",
        "NAIST-2003",
        "NASA-1.3",
        "NBPL-1.0",
        "NCGL-UK-2.0",
        "NCSA",
        "NGPL",
        "NIST-PD",
        "NIST-PD-fallback",
        "NLOD-1.0",
        "NLPL",
        "NOSL",
        "NPL-1.0",
        "NPL-1.1",
        "NPOSL-3.0",
        "NRL",
        "NTP",
        "NTP-0",
        "Naumen",
        "Net-SNMP",
        "NetCDF",
        "Newsletr",
        "Nokia",
        "Noweb",
        "O-UDA-1.0",
        "OCCT-PL",
        "OCLC-2.0",
        "ODC-By-1.0",
        "ODbL-1.0",
        "OFL-1.0",
        "OFL-1.0-RFN",
        "OFL-1.0-no-RFN",
        "OFL-1.1",
        "OFL-1.1-RFN",
        "OFL-1.1-no-RFN",
        "OGC-1.0",
        "OGDL-Taiwan-1.0",
        "OGL-Canada-2.0",
        "OGL-UK-1.0",
        "OGL-UK-2.0",
        "OGL-UK-3.0",
        "OGTSL",
        "OLDAP-1.1",
        "OLDAP-1.2",
        "OLDAP-1.3",
        "OLDAP-1.4",
        "OLDAP-2.0",
        "OLDAP-2.0.1",
        "OLDAP-2.1",
        "OLDAP-2.2",
        "OLDAP-2.2.1",
        "OLDAP-2.2.2",
        "OLDAP-2.3",
        "OLDAP-2.4",
        "OLDAP-2.5",
        "OLDAP-2.6",
        "OLDAP-2.7",
        "OLDAP-2.8",
        "OML",
        "OPL-1.0",
        "OSET-PL-2.1",
        "OSL-1.0",
        "OSL-1.1",
        "OSL-2.0",
        "OSL-2.1",
        "OSL-3.0",
        "OpenSSL",
        "PDDL-1.0",
        "PHP-3.0",
        "PHP-3.01",
        "PSF-2.0",
        "Parity-6.0.0",
        "Parity-7.0.0",
        "Plexus",
        "PolyForm-Noncommercial-1.0.0",
        "PolyForm-Small-Business-1.0.0",
        "PostgreSQL",
        "Python-2.0",
        "QPL-1.0",
        "Qhull",
        "RHeCos-1.1",
        "RPL-1.1",
        "RPL-1.5",
        "RPSL-1.0",
        "RSA-MD",
        "RSCPL",
        "Rdisc",
        "Ruby",
        "SAX-PD",
        "SCEA",
        "SGI-B-1.0",
        "SGI-B-1.1",
        "SGI-B-2.0",
        "SHL-0.5",
        "SHL-0.51",
        "SISSL",
        "SISSL-1.2",
        "SMLNJ",
        "SMPPL",
        "SNIA",
        "SPL-1.0",
        "SSH-OpenSSH",
        "SSH-short",
        "SSPL-1.0",
        "SWL",
        "Saxpath",
        "Sendmail",
        "Sendmail-8.23",
        "SimPL-2.0",
        "Sleepycat",
        "Spencer-86",
        "Spencer-94",
        "Spencer-99",
        "SugarCRM-1.1.3",
        "TAPR-OHL-1.0",
        "TCL",
        "TCP-wrappers",
        "TMate",
        "TORQUE-1.1",
        "TOSL",
        "TU-Berlin-1.0",
        "TU-Berlin-2.0",
        "UCL-1.0",
        "UPL-1.0",
        "Unicode-DFS-2015",
        "Unicode-DFS-2016",
        "Unicode-TOU",
        "Unlicense",
        "VOSTROM",
        "VSL-1.0",
        "Vim",
        "W3C",
        "W3C-19980720",
        "W3C-20150513",
        "WTFPL",
        "Watcom-1.0",
        "Wsuipa",
        "X11",
        "XFree86-1.1",
        "XSkat",
        "Xerox",
        "Xnet",
        "ZPL-1.1",
        "ZPL-2.0",
        "ZPL-2.1",
        "Zed",
        "Zend-2.0",
        "Zimbra-1.3",
        "Zimbra-1.4",
        "Zlib",
        "blessing",
        "bzip2-1.0.5",
        "bzip2-1.0.6",
        "copyleft-next-0.3.0",
        "copyleft-next-0.3.1",
        "curl",
        "diffmark",
        "dvipdfm",
        "eGenix",
        "etalab-2.0",
        "freeware",
        "gSOAP-1.3b",
        "gnuplot",
        "iMatix",
        "libpng-2.0",
        "libselinux-1.0",
        "libtiff",
        "mpich2",
        "proprietary",
        "psfrag",
        "psutils",
        "unknown",
        "xinetd",
        "xpp",
        "zlib-acknowledgement"
      ],
      "enumType": "string",
      "id": "TemplateOsInfoLicenseItemEnum",
      "namespace": "dedicated"
    },
    "dedicated.TemplateOsInfoProject": {
      "description": "A structure describing some interesting facts about an OS template project",
      "id": "TemplateOsInfoProject",
      "namespace": "dedicated",
      "properties": {
        "os": {
          "canBeNull": true,
          "description": "OS template project OS details",
          "readOnly": false,
          "required": false,
          "type": "dedicated.TemplateOsInfoProjectItem"
        },
        "usage": {
          "canBeNull": true,
          "description": "OS template project usage details",
          "readOnly": false,
          "required": false,
          "type": "dedicated.TemplateOsInfoProjectItem"
        }
      }
    },
    "dedicated.TemplateOsInfoProjectItem": {
      "description": "A structure describing some interesting facts about an OS template project item",
      "id": "TemplateOsInfoProjectItem",
      "namespace": "dedicated",
      "properties": {
        "governance": {
          "canBeNull": true,
          "description": "OS template project item governance",
          "readOnly": false,
          "required": false,
          "type": "string[]"
        },
        "releaseNotes": {
          "canBeNull": true,
          "description": "OS template project item release notes",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "url": {
          "canBeNull": true,
          "description": "OS template project item url",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "version": {
          "canBeNull": true,
          "description": "OS template project item version",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "dedicated.TemplateOsInput": {
      "description": "A structure describing input questions for the specific OS template",
      "id": "TemplateOsInput",
      "namespace": "dedicated",
      "properties": {
        "default": {
          "canBeNull": true,
          "description": "Default value",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "description": {
          "canBeNull": true,
          "description": "Input question description",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "enum": {
          "canBeNull": false,
          "description": "When type is enum: name of the possible enum values",
          "readOnly": false,
          "required": false,
          "type": "string[]"
        },
        "mandatory": {
          "canBeNull": false,
          "description": "Whether answering to that question is mandatory in order to trigger an install with that specific OS or not",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        },
        "name": {
          "canBeNull": false,
          "description": "Input question name",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "type": {
          "canBeNull": false,
          "description": "Input type",
          "readOnly": false,
          "required": false,
          "type": "dedicated.TemplateOsInputTypeEnum"
        }
      }
    },
    "dedicated.TemplateOsInputTypeEnum": {
      "description": "Template OS Input type enum",
      "enum": [
        "boolean",
        "date",
        "email",
        "enum",
        "hexstring",
        "ip",
        "keyValue",
        "number",
        "string",
        "text",
        "time",
        "url",
        "uuid"
      ],
      "enumType": "string",
      "id": "TemplateOsInputTypeEnum",
      "namespace": "dedicated"
    },
    "dedicated.TemplateOsLanguageEnum": {
      "description": "all language available",
      "enum": [
        "ar",
        "bg",
        "cs",
        "da",
        "de",
        "el",
        "en",
        "es",
        "et",
        "fi",
        "fr",
        "he",
        "hr",
        "hu",
        "it",
        "ja",
        "ko",
        "lt",
        "lv",
        "nb",
        "nl",
        "no",
        "pl",
        "pt",
        "ro",
        "ru",
        "sk",
        "sl",
        "sr",
        "sv",
        "th",
        "tr",
        "tu",
        "uk",
        "zh-Hans-CN",
        "zh-Hans-HK"
      ],
      "enumType": "string",
      "id": "TemplateOsLanguageEnum",
      "namespace": "dedicated"
    },
    "dedicated.TemplateOsProperties": {
      "description": "A structure describing properties customizables about this dedicated installation template",
      "id": "TemplateOsProperties",
      "namespace": "dedicated",
      "properties": {
        "customHostname": {
          "canBeNull": true,
          "description": "Set up the server using the provided hostname instead of the default hostname",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "postInstallationScriptLink": {
          "canBeNull": true,
          "description": "Indicate the URL where your postinstall customisation script is located",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "postInstallationScriptReturn": {
          "canBeNull": true,
          "description": "indicate the string returned by your postinstall customisation script on successful execution. Advice: your script should return a unique validation string in case of succes. A good example is \"loh1Xee7eo OK OK OK UGh8Ang1Gu",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "sshKeyName": {
          "canBeNull": true,
          "description": "Name of the ssh key that should be installed. Password login will be disabled",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "useDistributionKernel": {
          "canBeNull": true,
          "description": "Use the distribution's native kernel instead of the recommended OVH Kernel",
          "readOnly": false,
          "required": false,
          "type": "boolean"
        }
      }
    },
    "dedicated.TemplateOsSubfamilyEnum": {
      "description": "Os subfamily definition",
      "enum": [
        "alma",
        "aos",
        "arch",
        "byoi",
        "centos",
        "cloudlinux",
        "coreos",
        "debian",
        "dgx",
        "esxi",
        "fedora",
        "freebsd",
        "gentoo",
        "hyperv",
        "omnios",
        "openio",
        "openmediavault",
        "opensuse",
        "ovh",
        "pcs",
        "power",
        "proxmox",
        "rhel",
        "rocky",
        "slackware",
        "sles-sap",
        "smartos",
        "solusvm",
        "ubuntu",
        "windows-server-core",
        "windows-server-desktop-exp",
        "xcp",
        "xen"
      ],
      "enumType": "string",
      "id": "TemplateOsSubfamilyEnum",
      "namespace": "dedicated"
    },
    "dedicated.TemplateOsTypeEnum": {
      "description": "Os type",
      "enum": [
        "bsd",
        "custom",
        "ibm",
        "linux",
        "solaris",
        "unix",
        "windows"
      ],
      "enumType": "string",
      "id": "TemplateOsTypeEnum",
      "namespace": "dedicated"
    },
    "dedicated.TemplateOsUsageEnum": {
      "description": "Os usage definition",
      "enum": [
        "basic",
        "customer",
        "database",
        "erp",
        "hosting",
        "management",
        "other",
        "readyToUse",
        "virtualisation",
        "virtualization"
      ],
      "enumType": "string",
      "id": "TemplateOsUsageEnum",
      "namespace": "dedicated"
    },
    "dedicated.TemplatePartitionTypeEnum": {
      "description": "partition type",
      "enum": [
        "logical",
        "lv",
        "primary"
      ],
      "enumType": "string",
      "id": "TemplatePartitionTypeEnum",
      "namespace": "dedicated"
    },
    "dedicated.installationTemplate.Templates": {
      "description": "Available installation templates",
      "id": "Templates",
      "namespace": "dedicated.installationTemplate",
      "properties": {
        "availableLanguages": {
          "canBeNull": false,
          "description": "list of all language available for this template",
          "fullType": "dedicated.TemplateOsLanguageEnum[]",
          "readOnly": true,
          "required": false,
          "type": "dedicated.TemplateOsLanguageEnum[]"
        },
        "bitFormat": {
          "canBeNull": false,
          "description": "this template bit format",
          "fullType": "dedicated.server.BitFormatEnum",
          "readOnly": true,
          "required": false,
          "type": "dedicated.server.BitFormatEnum"
        },
        "category": {
          "canBeNull": false,
          "description": "category of this template (informative only)",
          "fullType": "dedicated.TemplateOsUsageEnum",
          "readOnly": true,
          "required": false,
          "type": "dedicated.TemplateOsUsageEnum"
        },
        "customization": {
          "canBeNull": true,
          "description": "Customizable template properties ",
          "fullType": "dedicated.TemplateOsProperties",
          "readOnly": false,
          "required": false,
          "type": "dedicated.TemplateOsProperties"
        },
        "defaultLanguage": {
          "canBeNull": false,
          "description": "the default language of this template",
          "fullType": "dedicated.TemplateOsLanguageEnum",
          "readOnly": false,
          "required": false,
          "type": "dedicated.TemplateOsLanguageEnum"
        },
        "description": {
          "canBeNull": false,
          "description": "information about this template",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "distribution": {
          "canBeNull": false,
          "description": "the distribution this template is based on",
          "fullType": "string",
          "readOnly": true,
          "required": false,
          "type": "string"
        },
        "endOfInstall": {
          "canBeNull": false,
          "description": "after this date, install of this template will not be possible at OVH",
          "fullType": "date",
          "readOnly": true,
          "required": false,
          "type": "date"
        },
        "family": {
          "canBeNull": false,
          "description": "this template family type",
          "fullType": "dedicated.TemplateOsTypeEnum",
          "readOnly": true,
          "required": false,
          "type": "dedicated.TemplateOsTypeEnum"
        },
        "filesystems": {
          "canBeNull": false,
          "description": "list of all filesystems available for this template",
          "fullType": "dedicated.server.FileSystemEnum[]",
          "readOnly": true,
          "required": false,
          "type": "dedicated.server.FileSystemEnum[]"
        },
        "hardRaidConfiguration": {
          "canBeNull": true,
          "description": "This distribution supports hardware raid configuration through the OVH API",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "inputs": {
          "canBeNull": true,
          "description": "Inputs",
          "fullType": "dedicated.TemplateOsInput[]",
          "readOnly": true,
          "required": false,
          "type": "dedicated.TemplateOsInput[]"
        },
        "license": {
          "canBeNull": true,
          "description": "This distribution licensing details",
          "fullType": "dedicated.TemplateOsInfoLicense",
          "readOnly": true,
          "required": false,
          "type": "dedicated.TemplateOsInfoLicense"
        },
        "lvmReady": {
          "canBeNull": true,
          "description": "This distribution supports Logical Volumes (Linux LVM)",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "noPartitioning": {
          "canBeNull": false,
          "description": "Partitioning customization is not available for this OS template",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "project": {
          "canBeNull": true,
          "description": "This distribution project details",
          "fullType": "dedicated.TemplateOsInfoProject",
          "readOnly": true,
          "required": false,
          "type": "dedicated.TemplateOsInfoProject"
        },
        "softRaidOnlyMirroring": {
          "canBeNull": false,
          "description": "Partitioning customization is available but limited to mirroring for this OS template",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "subfamily": {
          "canBeNull": false,
          "description": "this template subfamily type",
          "fullType": "dedicated.TemplateOsSubfamilyEnum",
          "readOnly": true,
          "required": false,
          "type": "dedicated.TemplateOsSubfamilyEnum"
        },
        "supportsDistributionKernel": {
          "canBeNull": true,
          "description": "This distribution supports installation using the distribution's native kernel instead of the recommended OVH kernel",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "supportsGptLabel": {
          "canBeNull": true,
          "description": "This distribution supports the GUID Partition Table (GPT), providing up to 128 partitions that can have more than 2 TB",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "supportsRTM": {
          "canBeNull": false,
          "description": "This distribution supports RTM software",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "supportsSqlServer": {
          "canBeNull": true,
          "description": "This distribution supports the microsoft SQL server",
          "fullType": "boolean",
          "readOnly": true,
          "required": false,
          "type": "boolean"
        },
        "templateName": {
          "canBeNull": false,
          "description": "This template name",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "dedicated.installationTemplate.hardwareRaid": {
      "description": "Hardware RAID defined in this partitioning scheme",
      "id": "hardwareRaid",
      "namespace": "dedicated.installationTemplate",
      "properties": {
        "disks": {
          "canBeNull": false,
          "description": "Disk list",
          "fullType": "string[]",
          "readOnly": false,
          "required": false,
          "type": "string[]"
        },
        "mode": {
          "canBeNull": false,
          "description": "RAID mode",
          "fullType": "dedicated.TemplateOsHardwareRaidEnum",
          "readOnly": false,
          "required": false,
          "type": "dedicated.TemplateOsHardwareRaidEnum"
        },
        "name": {
          "canBeNull": false,
          "description": "Hardware RAID name",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "step": {
          "canBeNull": false,
          "description": "Specifies the creation order of the hardware RAID",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        }
      }
    },
    "dedicated.installationTemplate.templatePartitioningSchemes": {
      "description": "Partitioning schemes available on this template",
      "id": "templatePartitioningSchemes",
      "namespace": "dedicated.installationTemplate",
      "properties": {
        "name": {
          "canBeNull": false,
          "description": "This partitioning scheme name",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "priority": {
          "canBeNull": false,
          "description": "on a reinstall, if a partitioning scheme is not specified, the one with the higher priority will be used by default, among all the compatible partitioning schemes (given the underlying hardware specifications)",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        }
      }
    },
    "dedicated.installationTemplate.templatePartitions": {
      "description": " Partitions defined in this partitioning scheme",
      "id": "templatePartitions",
      "namespace": "dedicated.installationTemplate",
      "properties": {
        "filesystem": {
          "canBeNull": false,
          "description": "Partition filesytem",
          "fullType": "dedicated.server.FileSystemEnum",
          "readOnly": false,
          "required": false,
          "type": "dedicated.server.FileSystemEnum"
        },
        "mountpoint": {
          "canBeNull": false,
          "description": "Partition mount point",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        },
        "order": {
          "canBeNull": false,
          "description": "specifies the creation order of the partition on the disk",
          "fullType": "long",
          "readOnly": false,
          "required": false,
          "type": "long"
        },
        "raid": {
          "canBeNull": true,
          "description": "Partition raid",
          "fullType": "dedicated.server.PartitionRaidEnum",
          "readOnly": false,
          "required": false,
          "type": "dedicated.server.PartitionRaidEnum"
        },
        "size": {
          "canBeNull": false,
          "description": "Partition size (unit: MB GB TB, MB by default), 0 => rest of the space",
          "fullType": "complexType.UnitAndValue<long>",
          "readOnly": false,
          "required": false,
          "type": "complexType.UnitAndValue<long>"
        },
        "type": {
          "canBeNull": false,
          "description": "Partition type",
          "fullType": "dedicated.TemplatePartitionTypeEnum",
          "readOnly": false,
          "required": false,
          "type": "dedicated.TemplatePartitionTypeEnum"
        },
        "volumeName": {
          "canBeNull": true,
          "description": "Logical volume name (required if type is lv) or optional zpool name if filesystem is ZFS",
          "fullType": "string",
          "readOnly": false,
          "required": false,
          "type": "string"
        }
      }
    },
    "dedicated.server.BitFormatEnum": {
      "description": "Available os bit format",
      "enum": [
        "32",
        "64"
      ],
      "enumType": "long",
      "id": "BitFormatEnum",
      "namespace": "dedicated.server"
    },
    "dedicated.server.FileSystemEnum": {
      "description": "FileSystems",
      "enum": [
        "btrfs",
        "ext3",
        "ext4",
        "fat16",
        "none",
        "ntfs",
        "reiserfs",
        "swap",
        "ufs",
        "vmfs5",
        "vmfs6",
        "vmfsl",
        "xfs",
        "zfs"
      ],
      "enumType": "string",
      "id": "FileSystemEnum",
      "namespace": "dedicated.server"
    },
    "dedicated.server.PartitionRaidEnum": {
      "description": "partition raid type",
      "enum": [
        "0",
        "1",
        "10",
        "5",
        "6",
        "7"
      ],
      "enumType": "string",
      "id": "PartitionRaidEnum",
      "namespace": "dedicated.server"
    }
  },
  "resourcePath": "/dedicated/installationTemplate"
}