/* ==========================================================================
   VOLTIX — Cybersecurity Products Data

   Add, remove, or edit products here. Do NOT edit the card component.

   ========================================================================== */

const CYBERSECURITY_CATEGORIES = [
  { id: 'all', name: 'All' },
  { id: 'security-assessment', name: 'Security Assessment' },
  { id: 'vulnerability-assessment', name: 'Vulnerability Assessment' },
  { id: 'network-security', name: 'Network Security' },
  { id: 'security-hardening', name: 'Security Hardening' },
  { id: 'security-monitoring', name: 'Security Monitoring' },
  { id: 'incident-response', name: 'Incident Response' },
  { id: 'endpoint-security', name: 'Endpoint Security' },
  { id: 'web-security', name: 'Web Security' }
];

const CYBERSECURITY_PRODUCTS = [

  /* ============================================================
     SECURITY ASSESSMENT
     ============================================================ */

  {
    id: 'security-assessment-01',
    category: 'security-assessment',
    title: 'Security Assessment',
    description:
      'A structured review of your security posture to identify weaknesses, security gaps, and areas that require improvement.',
    image: '',
    tags: ['Assessment', 'Security', 'Risk']
  },

  {
    id: 'security-config-review-01',
    category: 'security-assessment',
    title: 'Security Configuration Review',
    description:
      'Review security configurations across systems and infrastructure to identify misconfigurations and improve overall protection.',
    image: '',
    tags: ['Configuration', 'Review', 'Security']
  },


  /* ============================================================
     VULNERABILITY ASSESSMENT
     ============================================================ */

  {
    id: 'vulnerability-assessment-01',
    category: 'vulnerability-assessment',
    title: 'Vulnerability Assessment',
    description:
      'Identify and prioritize vulnerabilities across systems, applications, and infrastructure with actionable remediation recommendations.',
    image: '',
    tags: ['Vulnerability', 'Scanning', 'Risk']
  },


  /* ============================================================
     NETWORK SECURITY
     ============================================================ */

  {
    id: 'network-security-assessment-01',
    category: 'network-security',
    title: 'Network Security Assessment',
    description:
      'Assess network architecture, configurations, access controls, and exposed services to identify weaknesses and improve network security.',
    image: '',
    tags: ['Network', 'Firewall', 'Assessment']
  },

  {
    id: 'network-security-setup-01',
    category: 'network-security',
    title: 'Network Security Setup',
    description:
      'Configure essential network security controls including firewall rules, secure access policies, segmentation, and network protection.',
    image: '',
    tags: ['Firewall', 'Network', 'Configuration']
  },


  /* ============================================================
     SECURITY HARDENING
     ============================================================ */

  {
    id: 'security-hardening-01',
    category: 'security-hardening',
    title: 'Security Hardening',
    description:
      'Strengthen systems and infrastructure by reducing attack surfaces, applying secure configurations, and improving access controls.',
    image: '',
    tags: ['Hardening', 'Configuration', 'Security']
  },


  /* ============================================================
     SECURITY MONITORING
     ============================================================ */

  {
    id: 'security-monitoring-01',
    category: 'security-monitoring',
    title: 'Security Monitoring',
    description:
      'Monitor systems and network activity for suspicious behavior, security events, and potential threats with continuous visibility and alerting.',
    image: '',
    tags: ['Monitoring', 'SIEM', 'Alerts']
  },


  /* ============================================================
     INCIDENT RESPONSE
     ============================================================ */

  {
    id: 'incident-investigation-01',
    category: 'incident-response',
    title: 'Basic Incident Investigation',
    description:
      'Investigate basic security incidents by reviewing logs, identifying suspicious activity, assessing potential impact, and documenting findings.',
    image: '',
    tags: ['Incident Response', 'Investigation', 'Logs']
  },


  /* ============================================================
     ENDPOINT SECURITY
     ============================================================ */

  {
    id: 'endpoint-security-setup-01',
    category: 'endpoint-security',
    title: 'Endpoint Security Setup',
    description:
      'Configure essential endpoint protection controls to improve device security, reduce attack surfaces, and protect systems against common threats.',
    image: '',
    tags: ['Endpoint', 'Protection', 'Security']
  },


  /* ============================================================
     WEB SECURITY
     ============================================================ */

  {
    id: 'web-security-assessment-01',
    category: 'web-security',
    title: 'Web Security Assessment',
    description:
      'Review web applications for common security weaknesses, exposed attack surfaces, authentication issues, and configuration risks.',
    image: '',
    tags: ['Web', 'OWASP', 'Assessment']
  }

];