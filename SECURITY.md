# Security Policy

## Supported Versions

We actively support the following versions of ElectronForge with security updates:

| Version | Supported          |
| ------- | ------------------ |
| 1.x.x   | :white_check_mark: |
| < 1.0   | :x:                |

## Reporting a Vulnerability

We take the security of ElectronForge seriously. If you believe you have found a security vulnerability, please report it to us as described below.

### How to Report

**Please do not report security vulnerabilities through public GitHub issues.**

Instead, please report them via one of the following methods:

1. **Email**: Send an email to [security@yourproject.com] with the subject line "Security Vulnerability Report"
2. **GitHub Security Advisories**: Use GitHub's private vulnerability reporting feature
3. **Direct Message**: Contact the project maintainers directly

### What to Include

Please include the following information in your report:

- Type of issue (e.g., buffer overflow, SQL injection, cross-site scripting, etc.)
- Full paths of source file(s) related to the manifestation of the issue
- The location of the affected source code (tag/branch/commit or direct URL)
- Any special configuration required to reproduce the issue
- Step-by-step instructions to reproduce the issue
- Proof-of-concept or exploit code (if possible)
- Impact of the issue, including how an attacker might exploit the issue

### Response Timeline

We will acknowledge receipt of your vulnerability report within 48 hours and will send a more detailed response within 72 hours indicating the next steps in handling your report.

After the initial reply to your report, we will:

- Confirm the problem and determine the affected versions
- Audit code to find any potential similar problems
- Prepare fixes for all supported releases
- Release patched versions as soon as possible

### Disclosure Policy

We follow a coordinated disclosure policy:

1. **Investigation**: We investigate and confirm the vulnerability
2. **Fix Development**: We develop and test a fix
3. **Release**: We release the fix in a new version
4. **Public Disclosure**: We publicly disclose the vulnerability details after the fix is available

### Security Best Practices

When using ElectronForge, please follow these security best practices:

#### Electron Security

- Always use the latest stable version of Electron
- Enable context isolation in your renderer processes
- Disable Node.js integration in renderer processes
- Use secure defaults for webSecurity
- Validate all IPC inputs
- Use Content Security Policy (CSP)

#### Development Security

- Keep all dependencies up to date
- Use npm audit to check for known vulnerabilities
- Implement proper input validation
- Use HTTPS for all external communications
- Store sensitive data securely
- Implement proper authentication and authorization

#### Build and Distribution

- Sign your applications with valid certificates
- Use secure distribution channels
- Implement automatic updates securely
- Verify the integrity of downloaded updates

### Known Security Considerations

#### Electron-Specific Risks

- **Remote Code Execution**: Improper IPC handling can lead to RCE
- **File System Access**: Unrestricted file system access from renderer
- **Network Requests**: Unvalidated network requests
- **External Content**: Loading untrusted external content

#### Mitigation Strategies

ElectronForge implements several security measures:

- Context isolation is enabled by default
- Node.js integration is disabled in renderer processes
- Secure IPC communication patterns
- Content Security Policy implementation
- Input validation and sanitization

### Security Updates

Security updates will be released as patch versions and will be clearly marked in the changelog. We recommend:

- Subscribe to release notifications
- Regularly update to the latest version
- Monitor security advisories
- Test updates in a staging environment

### Third-Party Dependencies

We regularly audit our dependencies for security vulnerabilities:

- Automated dependency scanning with GitHub Dependabot
- Regular security audits with npm audit
- Prompt updates for security-related dependencies
- Evaluation of new dependencies for security implications

### Contact Information

For security-related questions or concerns:

- **Security Email**: [security@yourproject.com]
- **General Contact**: [contact@yourproject.com]
- **GitHub**: Create a private security advisory

### Acknowledgments

We appreciate the security research community and will acknowledge researchers who responsibly disclose vulnerabilities to us.

---

**Note**: This security policy is subject to change. Please check back regularly for updates.