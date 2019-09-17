#!/bin/bash

out=$(yarn audit --json)
code=$(echo $out | jq 'select(.data.vulnerabilities.low != null)|.data.vulnerabilities.low' -r -M)

exit $code