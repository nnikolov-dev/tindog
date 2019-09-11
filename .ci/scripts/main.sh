#!/bin/bash

echo "Stage: CodeQualityChecks"
echo -e "\tJob: Lint Code"
yarn lint

echo -e "\tJob: Test Code"
yarn test

echo "Stage: Security Checks"
echo -e "\tJob: Code Analysis"
./.ci/scripts/ssca.sh
echo -e "\tJob: Audit Dependencies"
./.ci/scripts/audit.sh
echo -e "\tJob: Key Check"
./.ci/scripts/check-leaks.sh

echo "Done."