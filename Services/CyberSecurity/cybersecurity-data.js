/* ==========================================================================
   VOLTIX — Cybersecurity Products Data
   Add, remove, or edit products here. Do NOT edit the card component.
   ========================================================================== */

const CYBERSECURITY_CATEGORIES = [
  { id: 'all', name: 'All' },
  { id: 'web-security', name: 'Web Security' },
  { id: 'network-security', name: 'Network Security' },
  { id: 'application-security', name: 'Application Security' },
  { id: 'ethical-hacking', name: 'Ethical Hacking' },
  { id: 'penetration-testing', name: 'Penetration Testing' },
  { id: 'cloud-security', name: 'Cloud Security' },
  { id: 'cryptography', name: 'Cryptography' },
  { id: 'digital-forensics', name: 'Digital Forensics' },
  { id: 'security-tools', name: 'Security Tools' },
  { id: 'other', name: 'Other' }
];

const CYBERSECURITY_PRODUCTS = [
  /* ========== WEB SECURITY ========== */
  {
    id: 'web-audit-01',
    category: 'web-security',
    title: 'Web Application Audit',
    description: 'A comprehensive security audit of your web application identifying OWASP Top 10 vulnerabilities, misconfigurations, and attack surfaces.',
    image: '',
    tags: ['OWASP', 'Audit', 'Web']
  },
  {
    id: 'web-firewall-01',
    category: 'web-security',
    title: 'WAF Configuration Pack',
    description: 'A production-ready Web Application Firewall rule set with custom rules, rate limiting, and DDoS mitigation templates.',
    image: '',
    tags: ['WAF', 'DDoS', 'Rules']
  },
  {
    id: 'web-scan-01',
    category: 'web-security',
    title: 'Automated Web Scanner',
    description: 'An automated scanning pipeline that checks for XSS, SQL injection, CSRF, and header misconfigurations on every deploy.',
    image: '',
    tags: ['Scanner', 'CI/CD', 'XSS']
  },
  {
    id: 'web-secure-auth-01',
    category: 'web-security',
    title: 'Secure Auth Implementation',
    description: 'A hardened authentication system with MFA, password hashing, session management, and brute-force protection.',
    image: '',
    tags: ['Auth', 'MFA', 'Sessions']
  },

  /* ========== NETWORK SECURITY ========== */
  {
    id: 'net-segmentation-01',
    category: 'network-security',
    title: 'Network Segmentation Plan',
    description: 'A detailed network segmentation architecture with VLAN design, firewall zones, and zero-trust access policies.',
    image: '',
    tags: ['VLAN', 'Zero Trust', 'Firewall']
  },
  {
    id: 'net-ids-01',
    category: 'network-security',
    title: 'IDS/IPS Deployment Kit',
    description: 'A complete intrusion detection and prevention system setup with rules, alerts, and incident response playbooks.',
    image: '',
    tags: ['IDS', 'IPS', 'Monitoring']
  },
  {
    id: 'net-vpn-01',
    category: 'network-security',
    title: 'VPN & Remote Access Pack',
    description: 'Secure remote access configuration with site-to-site VPN, client VPN profiles, and access control lists.',
    image: '',
    tags: ['VPN', 'Remote', 'ACL']
  },
  {
    id: 'net-traffic-01',
    category: 'network-security',
    title: 'Network Traffic Analyzer',
    description: 'A traffic analysis dashboard with flow monitoring, anomaly detection, and threat intelligence integration.',
    image: '',
    tags: ['Traffic', 'SIEM', 'Analytics']
  },

  /* ========== APPLICATION SECURITY ========== */
  {
    id: 'app-secure-code-01',
    category: 'application-security',
    title: 'Secure Code Review',
    description: 'A structured secure code review framework with checklists, common vulnerability patterns, and remediation guidance.',
    image: '',
    tags: ['Code Review', 'SAST', 'Remediation']
  },
  {
    id: 'app-secrets-01',
    category: 'application-security',
    title: 'Secrets Management Setup',
    description: 'A secrets management implementation with vault configuration, rotation policies, and least-privilege access controls.',
    image: '',
    tags: ['Secrets', 'Vault', 'Rotation']
  },
  {
    id: 'app-api-01',
    category: 'application-security',
    title: 'API Security Hardening',
    description: 'API security hardening with authentication, rate limiting, input validation, and schema enforcement.',
    image: '',
    tags: ['API', 'REST', 'GraphQL']
  },
  {
    id: 'app-supply-chain-01',
    category: 'application-security',
    title: 'Supply Chain Security',
    description: 'Software supply chain security with dependency scanning, SBOM generation, and build pipeline integrity checks.',
    image: '',
    tags: ['SCA', 'SBOM', 'Pipeline']
  },

  /* ========== ETHICAL HACKING ========== */
  {
    id: 'hack-recon-01',
    category: 'ethical-hacking',
    title: 'Reconnaissance Toolkit',
    description: 'A curated reconnaissance toolkit with OSINT scripts, subdomain enumeration, and asset discovery workflows.',
    image: '',
    tags: ['OSINT', 'Recon', 'Footprinting']
  },
  {
    id: 'hack-exploit-01',
    category: 'ethical-hacking',
    title: 'Exploit Development Lab',
    description: 'A controlled exploit development environment with debugging tools, payload crafting scripts, and safe testing sandboxes.',
    image: '',
    tags: ['Exploit', 'Payload', 'Lab']
  },
  {
    id: 'hack-social-01',
    category: 'ethical-hacking',
    title: 'Social Engineering Simulator',
    description: 'A social engineering simulation framework with phishing templates, awareness metrics, and training scenarios.',
    image: '',
    tags: ['Phishing', 'Training', 'Awareness']
  },
  {
    id: 'hack-report-01',
    category: 'ethical-hacking',
    title: 'Penetration Test Report Template',
    description: 'A professional penetration test report template with executive summary, technical findings, and remediation roadmaps.',
    image: '',
    tags: ['Report', 'Findings', 'Template']
  },

  /* ========== PENETRATION TESTING ========== */
  {
    id: 'pentest-web-01',
    category: 'penetration-testing',
    title: 'Web App Penetration Test',
    description: 'A full web application penetration test covering injection flaws, broken authentication, sensitive data exposure, and more.',
    image: '',
    tags: ['Web', 'OWASP', 'Manual']
  },
  {
    id: 'pentest-mobile-01',
    category: 'penetration-testing',
    title: 'Mobile App Pen Test',
    description: 'Mobile application penetration testing for iOS and Android covering local storage, inter-process communication, and network traffic.',
    image: '',
    tags: ['Mobile', 'iOS', 'Android']
  },
  {
    id: 'pentest-red-01',
    category: 'penetration-testing',
    title: 'Red Team Engagement Kit',
    description: 'A red team engagement kit with attack simulation scenarios, lateral movement techniques, and detection evasion methods.',
    image: '',
    tags: ['Red Team', 'APT', 'Simulation']
  },
  {
    id: 'pentest-purple-01',
    category: 'penetration-testing',
    title: 'Purple Team Playbook',
    description: 'A purple team playbook aligning offensive testing with defensive detection rules for continuous security validation.',
    image: '',
    tags: ['Purple Team', 'Detection', 'Validation']
  },

  /* ========== CLOUD SECURITY ========== */
  {
    id: 'cloud-cspm-01',
    category: 'cloud-security',
    title: 'CSPM Configuration',
    description: 'Cloud Security Posture Management configuration with compliance checks, misconfiguration detection, and auto-remediation.',
    image: '',
    tags: ['CSPM', 'Compliance', 'AWS']
  },
  {
    id: 'cloud-iam-01',
    category: 'cloud-security',
    title: 'Cloud IAM Hardening',
    description: 'Cloud identity and access management hardening with least-privilege policies, MFA enforcement, and role-based access.',
    image: '',
    tags: ['IAM', 'RBAC', 'MFA']
  },
  {
    id: 'cloud-container-01',
    category: 'cloud-security',
    title: 'Container Security Pack',
    description: 'Container and Kubernetes security with image scanning, runtime protection, network policies, and secrets management.',
    image: '',
    tags: ['Kubernetes', 'Docker', 'DevSecOps']
  },
  {
    id: 'cloud-serverless-01',
    category: 'cloud-security',
    title: 'Serverless Security Audit',
    description: 'Serverless function security audit covering IAM permissions, event injection, dependency vulnerabilities, and logging.',
    image: '',
    tags: ['Serverless', 'Lambda', 'Functions']
  },

  /* ========== CRYPTOGRAPHY ========== */
  {
    id: 'crypto-encryption-01',
    category: 'cryptography',
    title: 'Encryption Implementation Guide',
    description: 'A guide to implementing AES-256, RSA, and ECC encryption with proper key management and secure random generation.',
    image: '',
    tags: ['AES', 'RSA', 'ECC']
  },
  {
    id: 'crypto-tls-01',
    category: 'cryptography',
    title: 'TLS Configuration Pack',
    description: 'Hardened TLS/SSL configuration with modern cipher suites, HSTS, certificate transparency, and perfect forward secrecy.',
    image: '',
    tags: ['TLS', 'SSL', 'Ciphers']
  },
  {
    id: 'crypto-hash-01',
    category: 'cryptography',
    title: 'Hashing & Integrity Library',
    description: 'A cryptographic hashing library with SHA-256, SHA-3, BLAKE2, and HMAC implementations with usage examples.',
    image: '',
    tags: ['SHA', 'HMAC', 'Integrity']
  },
  {
    id: 'crypto-blockchain-01',
    category: 'cryptography',
    title: 'Blockchain Security Audit',
    description: 'Smart contract and blockchain security audit with formal verification, gas optimization, and vulnerability assessment.',
    image: '',
    tags: ['Smart Contracts', 'Solidity', 'Audit']
  },

  /* ========== DIGITAL FORENSICS ========== */
  {
    id: 'forensics-disk-01',
    category: 'digital-forensics',
    title: 'Disk Forensics Toolkit',
    description: 'A disk forensics toolkit with image acquisition, file system analysis, deleted file recovery, and timeline reconstruction.',
    image: '',
    tags: ['Disk', 'Recovery', 'Analysis']
  },
  {
    id: 'forensics-memory-01',
    category: 'digital-forensics',
    title: 'Memory Forensics Lab',
    description: 'Memory forensics environment with dump analysis, process extraction, rootkit detection, and malware artifact hunting.',
    image: '',
    tags: ['Memory', 'RAM', 'Malware']
  },
  {
    id: 'forensics-network-01',
    category: 'digital-forensics',
    title: 'Network Forensics Analyzer',
    description: 'Network forensics analysis with PCAP processing, protocol decoding, anomaly detection, and evidence preservation.',
    image: '',
    tags: ['PCAP', 'Network', 'Evidence']
  },
  {
    id: 'forensics-incident-01',
    category: 'digital-forensics',
    title: 'Incident Response Playbook',
    description: 'An incident response playbook with containment, eradication, recovery, and lessons-learned workflows.',
    image: '',
    tags: ['IR', 'Playbook', 'Response']
  },

  /* ========== SECURITY TOOLS ========== */
  {
    id: 'tool-scanner-01',
    category: 'security-tools',
    title: 'Vulnerability Scanner Config',
    description: 'Nessus, OpenVAS, and Qualys scanner configurations with authenticated scanning, credential management, and report templates.',
    image: '',
    tags: ['Nessus', 'OpenVAS', 'Scanning']
  },
  {
    id: 'tool-siem-01',
    category: 'security-tools',
    title: 'SIEM Dashboard Pack',
    description: 'Security information and event management dashboards with correlation rules, alert tuning, and incident tracking.',
    image: '',
    tags: ['SIEM', 'Splunk', 'Elastic']
  },
  {
    id: 'tool-soc-01',
    category: 'security-tools',
    title: 'SOC Analyst Toolkit',
    description: 'A SOC analyst toolkit with threat intelligence feeds, IOC extraction, case management, and escalation workflows.',
    image: '',
    tags: ['SOC', 'Threat Intel', 'IOC']
  },
  {
    id: 'tool-compliance-01',
    category: 'security-tools',
    title: 'Compliance Checker',
    description: 'Automated compliance checking for GDPR, HIPAA, PCI-DSS, and ISO 27001 with gap analysis and remediation tracking.',
    image: '',
    tags: ['GDPR', 'PCI-DSS', 'ISO 27001']
  },

  /* ========== OTHER ========== */
  {
    id: 'sec-other-01',
    category: 'other',
    title: 'Security Policy Templates',
    description: 'A collection of security policy templates including acceptable use, data classification, incident response, and access control policies.',
    image: '',
    tags: ['Policies', 'Governance']
  },
  {
    id: 'sec-other-02',
    category: 'other',
    title: 'Security Awareness Training',
    description: 'An interactive security awareness training module with phishing simulations, quiz assessments, and progress tracking.',
    image: '',
    tags: ['Training', 'Awareness', 'Phishing']
  },
  {
    id: 'sec-other-03',
    category: 'other',
    title: 'Threat Modeling Framework',
    description: 'A threat modeling framework with STRIDE methodology, data flow diagrams, and risk prioritization matrices.',
    image: '',
    tags: ['STRIDE', 'Threat Model', 'Risk']
  }
];
