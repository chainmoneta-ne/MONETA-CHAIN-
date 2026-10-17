import { FadeIn } from "./FadeIn";
import { Link } from "react-router-dom";
import { BookOpen, GraduationCap, Award, Users, ShieldCheck, Cpu, Code2, Globe2, Layers, Zap, Database, MessageSquare, Headset, Settings, ListChecks, Blocks, TerminalSquare } from "lucide-react";

export function AcademyPage() {
  return (
    <div className="pt-24 pb-20 bg-white text-gray-900 min-h-screen">
      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <FadeIn>
            <div className="inline-flex items-center justify-center p-3 bg-electric-blue/10 rounded-full mb-6">
              <GraduationCap className="w-8 h-8 text-electric-blue" />
            </div>
            <h1 className="font-heading text-4xl md:text-6xl font-black mb-6 tracking-tight uppercase text-gray-900">
              Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-electric-blue">MONETA ACADEMY</span>
            </h1>
            <p className="text-xl text-gray-600 font-display font-medium uppercase tracking-widest mb-8">
              The Official Education Platform of the MONETA Consortium
            </p>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <p className="text-lg text-gray-700 font-display leading-relaxed text-left md:text-center">
              MONETA ACADEMY is the official education, training, certification, and research platform of the MONETA Consortium. It exists to equip individuals, developers, businesses, educational institutions, governments, and communities with the knowledge and practical skills required to confidently use, build on, and contribute to the MONETA blockchain ecosystem.
            </p>
            <p className="text-lg text-gray-700 font-display leading-relaxed text-left md:text-center mt-4">
              Our mission extends beyond teaching blockchain concepts. We provide structured learning experiences that help every learner understand how the entire MONETA ecosystem works—from digital identity and wallets to payments, smart contracts, decentralized applications, governance, APIs, enterprise integration, security, and future innovations.
            </p>
            <p className="text-lg text-gray-700 font-display leading-relaxed text-left md:text-center mt-4 font-semibold">
              Whether you are a beginner taking your first steps into blockchain technology or an experienced professional developing enterprise solutions, MONETA ACADEMY offers comprehensive, practical, and continuously updated learning resources designed to help you succeed.
            </p>
          </FadeIn>
        </div>

        {/* Under Development Banner */}
        <FadeIn delay={0.15} className="max-w-4xl mx-auto mb-16">
          <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-8 text-center shadow-sm">
            <h2 className="font-heading text-2xl font-black mb-4 uppercase text-yellow-800 flex items-center justify-center">
              🚧 Under Development
            </h2>
            <p className="text-yellow-900 text-lg">
              MONETA ACADEMY is currently under active development. The following learning programs and features will be available in future updates.
            </p>
          </div>
        </FadeIn>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
          <FadeIn delay={0.2} className="bg-gray-50 border border-gray-200 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-heading text-2xl font-black mb-4 uppercase text-electric-blue flex items-center">
              <Globe2 className="w-6 h-6 mr-3" /> Our Mission
            </h3>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              Our mission is to build secure, intelligent, and scalable digital technologies that empower individuals, businesses, communities, and governments to connect, transact, innovate, and grow with confidence. We are committed to delivering trusted blockchain infrastructure, digital identity, financial services, enterprise solutions, marketplaces, education, and emerging technologies that are accessible, inclusive, and designed to create lasting value for people everywhere.
            </p>
          </FadeIn>
          <FadeIn delay={0.3} className="bg-gray-50 border border-gray-200 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-heading text-2xl font-black mb-4 uppercase text-electric-blue flex items-center">
              <Zap className="w-6 h-6 mr-3" /> Our Vision
            </h3>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              To become the world's most trusted digital infrastructure, empowering billions of people, businesses, and governments to securely connect, innovate, transact, and prosper in a borderless digital economy. Through intelligent technology, decentralized infrastructure, and continuous innovation, MONETA will redefine trust, ownership, identity, commerce, and financial freedom for current and future generations.
            </p>
          </FadeIn>
        </div>

        {/* Core Objectives */}
        <FadeIn delay={0.4} className="max-w-4xl mx-auto mb-20">
          <h2 className="font-heading text-3xl font-black text-gray-900 uppercase tracking-wider mb-8 text-center">Core Objectives</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Educate users about every component of the MONETA ecosystem.",
              "Train developers to build blockchain applications on MONETA.",
              "Prepare businesses and institutions for enterprise integration.",
              "Promote blockchain security, transparency, and responsible innovation.",
              "Support research and continuous technological advancement.",
              "Build a certified workforce for the MONETA ecosystem.",
              "Foster collaboration among developers, businesses, educators, and community members."
            ].map((objective, i) => (
              <div key={i} className="flex items-start space-x-3 bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                <ShieldCheck className="w-5 h-5 text-electric-blue flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 font-medium text-sm">{objective}</span>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Learning Programs */}
        <FadeIn delay={0.5} className="max-w-6xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-black text-gray-900 uppercase tracking-wider mb-4">Learning Programs</h2>
            <p className="text-gray-600 font-display">MONETA ACADEMY offers structured learning pathways for every level of experience.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Foundation */}
            <div className="bg-gray-50 border-t-4 border-t-electric-blue border-l border-r border-b border-gray-200 p-6 rounded-b-xl shadow-sm">
              <h3 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                <BookOpen className="w-5 h-5 mr-2 text-electric-blue" /> Foundation Program
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Introduction to Blockchain</li>
                <li>• Distributed Ledger Technology</li>
                <li>• Cryptography Basics</li>
                <li>• Digital Assets</li>
                <li>• Blockchain Security</li>
                <li>• Web3 Fundamentals</li>
              </ul>
            </div>

            {/* Essentials */}
            <div className="bg-gray-50 border-t-4 border-t-electric-blue border-l border-r border-b border-gray-200 p-6 rounded-b-xl shadow-sm">
              <h3 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                <Layers className="w-5 h-5 mr-2 text-electric-blue" /> MONETA Essentials
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Creating and Verifying a MONETA Account</li>
                <li>• Wallet Management</li>
                <li>• Digital Identity</li>
                <li>• Payments and Transfers</li>
                <li>• Asset Management</li>
                <li>• Security Best Practices</li>
                <li>• Account Recovery</li>
              </ul>
            </div>

            {/* Ecosystem */}
            <div className="bg-gray-50 border-t-4 border-t-electric-blue border-l border-r border-b border-gray-200 p-6 rounded-b-xl shadow-sm">
              <h3 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                <Globe2 className="w-5 h-5 mr-2 text-electric-blue" /> Ecosystem Applications
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• MONETA Wallet & Chain</li>
                <li>• Digital Identity Services</li>
                <li>• Payment Network & Marketplace</li>
                <li>• NFTs</li>
                <li>• Community Platforms</li>
                <li>• Enterprise Services</li>
              </ul>
            </div>

            {/* Developer Academy */}
            <div className="bg-gray-50 border-t-4 border-t-electric-blue border-l border-r border-b border-gray-200 p-6 rounded-b-xl shadow-sm">
              <h3 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                <Code2 className="w-5 h-5 mr-2 text-electric-blue" /> Developer Academy
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Blockchain Architecture</li>
                <li>• Smart Contract Development</li>
                <li>• APIs and SDKs</li>
                <li>• Node Operations</li>
                <li>• Validator Infrastructure</li>
                <li>• Enterprise Integration</li>
                <li>• Testing and Deployment</li>
              </ul>
            </div>

            {/* Business */}
            <div className="bg-gray-50 border-t-4 border-t-electric-blue border-l border-r border-b border-gray-200 p-6 rounded-b-xl shadow-sm">
              <h3 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                <Users className="w-5 h-5 mr-2 text-electric-blue" /> Business & Enterprise
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Digital Transformation</li>
                <li>• Enterprise Blockchain Solutions</li>
                <li>• Compliance and Governance</li>
                <li>• Financial Services</li>
                <li>• Supply Chain Integration</li>
                <li>• Digital Identity Management</li>
                <li>• Cross-Organization Collaboration</li>
              </ul>
            </div>

            {/* Advanced */}
            <div className="bg-gray-50 border-t-4 border-t-electric-blue border-l border-r border-b border-gray-200 p-6 rounded-b-xl shadow-sm">
              <h3 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                <Cpu className="w-5 h-5 mr-2 text-electric-blue" /> Advanced Programs
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Blockchain Security</li>
                <li>• Consensus Mechanisms</li>
                <li>• Performance Optimization</li>
                <li>• Blockchain Analytics</li>
                <li>• Artificial Intelligence Integration</li>
                <li>• Tokenomics</li>
                <li>• Cross-Chain Technologies</li>
                <li>• Future MONETA Innovations</li>
              </ul>
            </div>
          </div>
        </FadeIn>

        {/* Certifications & Resources & Who Can Learn */}
        <FadeIn delay={0.6} className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          <div className="bg-white border border-gray-200 p-8 rounded-2xl shadow-sm">
            <h3 className="font-heading text-xl font-black mb-6 uppercase text-gray-900 flex items-center">
              <Award className="w-6 h-6 mr-2 text-electric-blue" /> Certifications
            </h3>
            <p className="text-sm text-gray-500 mb-4">Learners can earn official certifications, including:</p>
            <ul className="space-y-3 text-sm text-gray-700 font-medium">
              <li>🏆 Certified MONETA User</li>
              <li>🏆 Certified MONETA Developer</li>
              <li>🏆 Certified MONETA Smart Contract Developer</li>
              <li>🏆 Certified MONETA Security Specialist</li>
              <li>🏆 Certified MONETA Enterprise Integrator</li>
              <li>🏆 Certified MONETA Node Operator</li>
              <li>🏆 Certified MONETA Blockchain Architect</li>
              <li>🏆 Certified MONETA Instructor</li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 p-8 rounded-2xl shadow-sm">
            <h3 className="font-heading text-xl font-black mb-6 uppercase text-gray-900 flex items-center">
              <BookOpen className="w-6 h-6 mr-2 text-electric-blue" /> Learning Resources
            </h3>
            <p className="text-sm text-gray-500 mb-4">MONETA ACADEMY provides:</p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Interactive Courses</li>
              <li>• Video Lessons</li>
              <li>• Live Classes</li>
              <li>• Hands-on Labs</li>
              <li>• Developer Documentation</li>
              <li>• Technical Guides</li>
              <li>• Practice Assessments</li>
              <li>• Community Discussions</li>
              <li>• Research Publications</li>
              <li>• Innovation Workshops</li>
              <li>• Certification Exams</li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 p-8 rounded-2xl shadow-sm">
            <h3 className="font-heading text-xl font-black mb-6 uppercase text-gray-900 flex items-center">
              <Users className="w-6 h-6 mr-2 text-electric-blue" /> Who Can Learn?
            </h3>
            <p className="text-sm text-gray-500 mb-4">MONETA ACADEMY is designed for:</p>
            <div className="flex flex-wrap gap-2">
              {[
                "Students", "Developers", "Entrepreneurs", "Businesses", 
                "Financial Institutions", "Government Organizations", 
                "Universities", "Community Leaders", "Researchers", 
                "Blockchain Professionals", "Technology Enthusiasts"
              ].map((audience, i) => (
                <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full border border-gray-200 font-medium">
                  {audience}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Coming Soon Features */}
        <FadeIn delay={0.65} className="max-w-6xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-black text-gray-900 uppercase tracking-wider mb-4">Upcoming Features & Courses</h2>
            <p className="text-gray-600 font-display">These modules and platforms are currently in development.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="bg-gray-50 border border-gray-200 p-6 rounded-xl shadow-sm relative overflow-hidden group hover:border-electric-blue/30 transition-colors">
              <div className="absolute top-0 right-0 bg-yellow-100 text-yellow-800 text-[10px] font-bold px-2 py-1 rounded-bl-lg uppercase tracking-wider">Coming Soon</div>
              <h3 className="font-bold text-lg text-gray-900 mb-3 flex items-center">
                <BookOpen className="w-5 h-5 mr-2 text-electric-blue" /> Learning Paths
              </h3>
              <ul className="space-y-1.5 text-sm text-gray-600">
                <li>• Beginner</li>
                <li>• Intermediate</li>
                <li>• Advanced</li>
                <li>• Developer</li>
                <li>• Business & Enterprise</li>
              </ul>
            </div>

            <div className="bg-gray-50 border border-gray-200 p-6 rounded-xl shadow-sm relative overflow-hidden group hover:border-electric-blue/30 transition-colors">
              <div className="absolute top-0 right-0 bg-yellow-100 text-yellow-800 text-[10px] font-bold px-2 py-1 rounded-bl-lg uppercase tracking-wider">Coming Soon</div>
              <h3 className="font-bold text-lg text-gray-900 mb-3 flex items-center">
                <Layers className="w-5 h-5 mr-2 text-electric-blue" /> Blockchain Fundamentals
              </h3>
              <ul className="space-y-1.5 text-sm text-gray-600">
                <li>• What is Blockchain?</li>
                <li>• How Blockchain Works</li>
                <li>• Consensus Mechanisms</li>
                <li>• Cryptography Basics</li>
                <li>• Smart Contracts</li>
                <li>• Decentralized Applications (dApps)</li>
              </ul>
            </div>

            <div className="bg-gray-50 border border-gray-200 p-6 rounded-xl shadow-sm relative overflow-hidden group hover:border-electric-blue/30 transition-colors">
              <div className="absolute top-0 right-0 bg-yellow-100 text-yellow-800 text-[10px] font-bold px-2 py-1 rounded-bl-lg uppercase tracking-wider">Coming Soon</div>
              <h3 className="font-bold text-lg text-gray-900 mb-3 flex items-center">
                <Globe2 className="w-5 h-5 mr-2 text-electric-blue" /> The MONETA Ecosystem
              </h3>
              <ul className="space-y-1.5 text-sm text-gray-600">
                <li>• Ecosystem Overview</li>
                <li>• MONETA Architecture</li>
                <li>• Ecosystem Components</li>
                <li>• How Components Work Together</li>
                <li>• Governance</li>
                <li>
                  <Link to="/roadmap" className="text-electric-blue hover:underline font-medium">
                    • Ecosystem Roadmap →
                  </Link>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 border border-gray-200 p-6 rounded-xl shadow-sm relative overflow-hidden group hover:border-electric-blue/30 transition-colors">
              <div className="absolute top-0 right-0 bg-yellow-100 text-yellow-800 text-[10px] font-bold px-2 py-1 rounded-bl-lg uppercase tracking-wider">Coming Soon</div>
              <h3 className="font-bold text-lg text-gray-900 mb-3 flex items-center">
                <Blocks className="w-5 h-5 mr-2 text-electric-blue" /> Products & Services
              </h3>
              <p className="text-xs text-gray-500 mb-2">Dedicated courses for:</p>
              <ul className="space-y-1.5 text-sm text-gray-600">
                <li>• MONETA Wallet & Token</li>
                <li>• Payment Platform</li>
                <li>• Identity System</li>
                <li>• Marketplace & Exchange</li>
                <li>• Developer Platform & APIs</li>
              </ul>
            </div>

            <div className="bg-gray-50 border border-gray-200 p-6 rounded-xl shadow-sm relative overflow-hidden group hover:border-electric-blue/30 transition-colors">
              <div className="absolute top-0 right-0 bg-yellow-100 text-yellow-800 text-[10px] font-bold px-2 py-1 rounded-bl-lg uppercase tracking-wider">Coming Soon</div>
              <h3 className="font-bold text-lg text-gray-900 mb-3 flex items-center">
                <ShieldCheck className="w-5 h-5 mr-2 text-electric-blue" /> User Guides
              </h3>
              <ul className="space-y-1.5 text-sm text-gray-600">
                <li>• Creating a MONETA Account</li>
                <li>• Identity Verification</li>
                <li>• Wallet Setup</li>
                <li>• Sending & Receiving Assets</li>
                <li>• Security Best Practices</li>
                <li>• Backup, Recovery & Troubleshooting</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 border border-gray-200 p-6 rounded-xl shadow-sm relative overflow-hidden group hover:border-electric-blue/30 transition-colors">
              <div className="absolute top-0 right-0 bg-yellow-100 text-yellow-800 text-[10px] font-bold px-2 py-1 rounded-bl-lg uppercase tracking-wider">Coming Soon</div>
              <h3 className="font-bold text-lg text-gray-900 mb-3 flex items-center">
                <TerminalSquare className="w-5 h-5 mr-2 text-electric-blue" /> Developer Academy
              </h3>
              <ul className="space-y-1.5 text-sm text-gray-600">
                <li>• APIs & SDKs</li>
                <li>• Smart Contract Development</li>
                <li>• Building dApps</li>
                <li>• Testing & Deployment</li>
                <li>• Developer Documentation</li>
              </ul>
            </div>

            <div className="bg-gray-50 border border-gray-200 p-6 rounded-xl shadow-sm relative overflow-hidden group hover:border-electric-blue/30 transition-colors">
              <div className="absolute top-0 right-0 bg-yellow-100 text-yellow-800 text-[10px] font-bold px-2 py-1 rounded-bl-lg uppercase tracking-wider">Coming Soon</div>
              <h3 className="font-bold text-lg text-gray-900 mb-3 flex items-center">
                <Users className="w-5 h-5 mr-2 text-electric-blue" /> Business & Enterprise
              </h3>
              <ul className="space-y-1.5 text-sm text-gray-600">
                <li>• Accepting MONETA Payments</li>
                <li>• Enterprise Integration</li>
                <li>• Business Solutions</li>
                <li>• Institutional Use Cases</li>
                <li>• Compliance Guidance & Best Practices</li>
              </ul>
            </div>

            <div className="bg-gray-50 border border-gray-200 p-6 rounded-xl shadow-sm relative overflow-hidden group hover:border-electric-blue/30 transition-colors">
              <div className="absolute top-0 right-0 bg-yellow-100 text-yellow-800 text-[10px] font-bold px-2 py-1 rounded-bl-lg uppercase tracking-wider">Coming Soon</div>
              <h3 className="font-bold text-lg text-gray-900 mb-3 flex items-center">
                <Award className="w-5 h-5 mr-2 text-electric-blue" /> Certification Process
              </h3>
              <ul className="space-y-1.5 text-sm text-gray-600">
                <li>• Course Quizzes</li>
                <li>• Assignments</li>
                <li>• Practical Projects</li>
                <li>• Final Assessments</li>
                <li>• Official MONETA Certificates</li>
              </ul>
            </div>

            <div className="bg-gray-50 border border-gray-200 p-6 rounded-xl shadow-sm relative overflow-hidden group hover:border-electric-blue/30 transition-colors">
              <div className="absolute top-0 right-0 bg-yellow-100 text-yellow-800 text-[10px] font-bold px-2 py-1 rounded-bl-lg uppercase tracking-wider">Coming Soon</div>
              <h3 className="font-bold text-lg text-gray-900 mb-3 flex items-center">
                <Database className="w-5 h-5 mr-2 text-electric-blue" /> Knowledge Base
              </h3>
              <ul className="space-y-1.5 text-sm text-gray-600">
                <li>• Frequently Asked Questions (FAQs)</li>
                <li>• Blockchain Glossary</li>
                <li>• Technical Documentation</li>
                <li>• Tutorials</li>
                <li>• Release Notes</li>
              </ul>
            </div>

            <div className="bg-gray-50 border border-gray-200 p-6 rounded-xl shadow-sm relative overflow-hidden group hover:border-electric-blue/30 transition-colors">
              <div className="absolute top-0 right-0 bg-yellow-100 text-yellow-800 text-[10px] font-bold px-2 py-1 rounded-bl-lg uppercase tracking-wider">Coming Soon</div>
              <h3 className="font-bold text-lg text-gray-900 mb-3 flex items-center">
                <MessageSquare className="w-5 h-5 mr-2 text-electric-blue" /> Community
              </h3>
              <ul className="space-y-1.5 text-sm text-gray-600">
                <li>• Community Forum</li>
                <li>• Events & Live Webinars</li>
                <li>• Ambassador Program</li>
                <li>• Community Challenges</li>
              </ul>
            </div>

            <div className="bg-gray-50 border border-gray-200 p-6 rounded-xl shadow-sm relative overflow-hidden group hover:border-electric-blue/30 transition-colors">
              <div className="absolute top-0 right-0 bg-yellow-100 text-yellow-800 text-[10px] font-bold px-2 py-1 rounded-bl-lg uppercase tracking-wider">Coming Soon</div>
              <h3 className="font-bold text-lg text-gray-900 mb-3 flex items-center">
                <Headset className="w-5 h-5 mr-2 text-electric-blue" /> Support
              </h3>
              <ul className="space-y-1.5 text-sm text-gray-600">
                <li>• Help Center</li>
                <li>• Contact Support</li>
                <li>• Report Issues</li>
                <li>• Submit Feedback</li>
              </ul>
            </div>

            <div className="bg-gray-50 border border-gray-200 p-6 rounded-xl shadow-sm relative overflow-hidden group hover:border-electric-blue/30 transition-colors">
              <div className="absolute top-0 right-0 bg-yellow-100 text-yellow-800 text-[10px] font-bold px-2 py-1 rounded-bl-lg uppercase tracking-wider">Coming Soon</div>
              <h3 className="font-bold text-lg text-gray-900 mb-3 flex items-center">
                <Settings className="w-5 h-5 mr-2 text-electric-blue" /> Instructor Dashboard
              </h3>
              <ul className="space-y-1.5 text-sm text-gray-600">
                <li>• Course & Content Management</li>
                <li>• Student Progress Tracking</li>
                <li>• Learning Analytics</li>
                <li>• Certificate Management</li>
              </ul>
            </div>

          </div>
        </FadeIn>

        {/* Course Structure */}
        <FadeIn delay={0.68} className="max-w-4xl mx-auto mb-20">
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h3 className="font-heading text-2xl font-black mb-6 uppercase text-gray-900 text-center flex items-center justify-center">
              <ListChecks className="w-6 h-6 mr-3 text-electric-blue" /> Course Structure (Coming Soon)
            </h3>
            <p className="text-gray-600 text-center mb-6">Every MONETA ACADEMY course will include:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Introduction", "Learning Objectives", "Video Lessons", "Reading Materials",
                "Practical Exercises", "Interactive Quiz", "Assignment", "Final Assessment",
                "Certificate of Completion"
              ].map((step, i) => (
                <span key={i} className="px-4 py-2 bg-gray-50 text-gray-800 text-sm font-medium rounded-lg border border-gray-200 flex items-center">
                  <span className="w-5 h-5 rounded-full bg-electric-blue/20 text-electric-blue flex items-center justify-center text-xs mr-2">{i+1}</span>
                  {step}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Commitment */}
        <FadeIn delay={0.7} className="max-w-4xl mx-auto text-center border-t border-gray-200 pt-16">
          <h2 className="font-heading text-3xl font-black mb-6 uppercase tracking-wide text-gray-900">Building the Future of Blockchain Education</h2>
          <div className="bg-electric-blue/5 border border-electric-blue/20 p-10 rounded-2xl">
            <p className="text-lg text-gray-800 font-display mb-6">
              MONETA ACADEMY is being built to become the official education and certification platform of the MONETA Consortium. New courses, learning materials, developer resources, and certification programs will be released as development progresses.
            </p>
            <p className="text-lg text-electric-blue font-bold font-display uppercase tracking-wider">
              Through education, certification, research, and innovation, we aim to build a secure, skilled, and collaborative global community that supports the long-term success of the MONETA Consortium.
            </p>
          </div>
        </FadeIn>

      </div>
    </div>
  );
}
