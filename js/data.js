/* ============================================================
   Eldrin David Asuncion — Cybersecurity Portfolio
   data.js  ·  All portfolio content in one place
   Edit this file to update the portfolio.
   ============================================================ */

const PORTFOLIO = {

  /* ── Personal Info ─────────────────────────────────────── */
  name:     'Eldrin David Asuncion',
  location: 'Toronto, ON',
  phone:    '(647) 509-7186',
  email:    'eldrindavid.asuncion@georgebrown.ca',
  linkedin: 'https://linkedin.com/in/eldrindavidasuncion/',
  tagline:  'Security Analyst Candidate',
  title:    'Cybersecurity Specialist',
  bio:      'Computer Engineering graduate pursuing a Post-Graduate Certificate in Cybersecurity at George Brown College. Building specialized expertise in network security, threat detection, and incident response — driven by an analytical mindset and hands-on lab experience.',

  /* ── Skills ────────────────────────────────────────────── */
  skills: [
    {
      icon: '🛡️',
      category: 'Security & Networking',
      tags: ['TCP/IP','Subnetting','VLANs','VPN','Firewalls','IDS/IPS','DNS/DHCP','HTTP/S','SSH','Incident Response']
    },
    {
      icon: '🔍',
      category: 'Security Tools',
      tags: ['Wireshark','SIEM (Sumo Logic)','Cisco Packet Tracer','Log Analysis','Traffic Analysis','Threat Detection']
    },
    {
      icon: '💻',
      category: 'Systems & Cloud',
      tags: ['Windows Server 2019','Active Directory','VMware','VirtualBox','Azure Fundamentals','Linux']
    },
    {
      icon: '⌨️',
      category: 'Programming & Scripting',
      tags: ['PowerShell','Bash','C#','Python','SQL','Java','HTML/CSS','Git/GitHub']
    },
    {
      icon: '🔧',
      category: 'Development Tools',
      tags: ['Visual Studio','VS Code','REST API','.NET','Git']
    },
    {
      icon: '📋',
      category: 'Soft Skills',
      tags: ['Root Cause Analysis','Documentation','Incident Triage','Team Collaboration','Prioritization']
    }
  ],

  /* ── Experience ─────────────────────────────────────────── */
  experience: [
    {
      role:    'Associate Software Engineer',
      company: 'Accenture · Philippines',
      dates:   'Apr 2025 – Dec 2025',
      bullets: [
        'Automated repetitive tasks with PowerShell scripting, reducing manual effort by 80% and improving operational efficiency.',
        'Identified and resolved bugs in automation scripts, maintaining system reliability and consistent workflow execution.',
        'Collaborated with team members to test, document, and improve scripts and system workflows to ensure reliability and consistency.'
      ]
    },
    {
      role:    'Customer Service Representative',
      company: 'ePerformax Contact Centers and BPO · Philippines',
      dates:   'Jul 2023 – Mar 2024',
      bullets: [
        'Managed 60+ daily cases with strong incident triaging, prioritization, and record-keeping — skills directly applicable to SOC analyst roles.',
        'Investigated operational issues through systematic root cause analysis and cross-team escalation processes.',
        'Handled sensitive customer data in strict compliance with company policies, ensuring confidentiality and regulatory adherence.',
        'Translated complex technical and operational issues into clear, accessible communications for stakeholders.'
      ]
    },
    {
      role:    'Graphic Designer',
      company: 'ClutchPoint Inc.',
      dates:   'Jan 2019 – Jan 2020',
      bullets: [
        'Managed digital assets for public platforms with a focus on data integrity and secure content handling procedures.',
        'Adhered to strict editorial guidelines and workflows, building discipline in following policies and quality standards.',
        'Operated in high-velocity, deadline-driven environments, developing precision and attention to detail.'
      ]
    }
  ],

  /* ── Education ──────────────────────────────────────────── */
  education: [
    {
      degree:  'Post-Graduate Certificate — Cybersecurity',
      school:  'George Brown College · Toronto, ON',
      dates:   'Jan 2026 – Dec 2026 (Expected)',
      bullets: [
        'Configured network segmentation with firewall rules in lab environments to simulate secure network architectures.',
        'Used Wireshark to analyze network traffic and scan for vulnerabilities.',
        'Documented network configurations and security findings from hands-on lab exercises.'
      ]
    },
    {
      degree:  'Bachelor of Science — Computer Engineering',
      school:  'University of Baguio · Philippines',
      dates:   'Aug 2015 – May 2023',
      bullets: [
        'Built an electronic testing system, web-based attendance monitoring system, and a quadruped robot.',
        'Developed system components using HTML, CSS, JavaScript, PHP, and electronic hardware.',
        'Led front-end design and contributed to back-end logic, database integration, testing, and debugging.'
      ]
    }
  ],

  /* ── Certifications ─────────────────────────────────────── */
  certifications: [
    { icon: '🔐', name: 'Cisco CCNA',                               status: 'In Progress · Expected 2026' },
    { icon: '🛡️', name: 'ISC2 Certified in Cybersecurity (CC)',     status: 'In Progress · Expected 2026' },
    { icon: '✅', name: 'CompTIA Security+',                         status: 'In Progress · Expected 2026' },
    { icon: '🌐', name: 'CompTIA Network+',                          status: 'In Progress · Expected 2026' },
    { icon: '📊', name: 'Splunk Core Certified Power User',          status: 'In Progress · Expected 2026' },
    { icon: '⚔️', name: 'EC-Council CEH',                            status: 'In Progress · Expected 2026' },
    { icon: '🏆', name: 'ISC2 CISSP',                                status: 'In Progress · Expected 2026' },
    { icon: '💀', name: 'Offensive Security OSCP',                   status: 'In Progress · Expected 2026' },
    { icon: '🔎', name: 'CompTIA CySA+',                             status: 'In Progress · Expected 2026' }
  ]

};
