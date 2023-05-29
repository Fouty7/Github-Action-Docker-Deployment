# Workflow Node.js App
This project contains a GitHub Actions workflow script (workflow.yaml) for automating the deployment and provisioning of a Node.js application using Docker, SonarCloud analysis, AWS EC2, and Ansible.

## Workflow Description
The workflow consists of the following jobs:

### SonarCloud
Name: SonarCloud
Runs on: ubuntu-latest
Description: This job scans the code using SonarCloud for static code analysis and checks the quality gate status.
### Get EC2 IP
Name: Get EC2 IP
Runs on: ubuntu-latest
Needs: SonarCloud
Description: This job retrieves the public IP address of the EC2 instances using AWS CLI and saves it to a file called inventory. The file is then persisted as an artifact.
### Run Ansible
Name: Run Ansible
Runs on: ubuntu-latest
Needs: Get EC2 IP
Description: This job installs Ansible, downloads the inventory file from the artifact, configures SSH keys, and executes an Ansible playbook (docker-ansible.yaml) to provision and run Docker containers on the EC2 instances.
### Usage
To use this workflow, follow these steps:

Set up SonarCloud and obtain the necessary tokens (e.g., SONAR_TOKEN, GITHUB_TOKEN) in your GitHub repository secrets.

Configure AWS credentials by adding AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, and AWS_DEFAULT_REGION to your GitHub repository secrets.

Provide the necessary SSH key in the repository secrets (AWS_PRIVATE_KEY) to access the EC2 instances.

Customize the playbook docker-ansible.yaml according to your application's requirements.

Uncomment the desired steps in the workflow file (workflow.yaml) by removing the # characters.

Commit and push the changes to your repository's main branch.

The workflow will be triggered automatically on every push to the main branch or when a pull request is opened, synchronized, or reopened.

### Notes
The workflow includes optional steps for building and pushing Docker images. Uncomment and customize these steps if needed.

The rtCamp/action-slack-notify action is used for reporting job status to a Slack channel. Make sure to configure the SLACK_WEBHOOK secret and adjust the desired conditions for reporting success or failure.

Feel free to explore and adapt this workflow to fit your specific needs. Happy coding!
