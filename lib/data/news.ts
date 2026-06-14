export interface NewsItem {
  id: number;
  image: string;
  tag?: string;
  category: string;
  title: string;
  summary: string;
  content: string;
  date: string;
  readTime: string;
}

export const newsData: NewsItem[] = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1638029202288-451a89e0d55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGNvZGluZyUyMGhhY2thdGhvbnxlbnwxfHx8fDE3ODEzNzY1OTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tag: 'Achievement',
    category: 'Achievement',
    title: 'UNIBEN Data Science Students Win Regional Analytics Challenge',
    summary: 'A team of five undergraduate students from the Department of Data Science emerged victorious at the West African Data Analytics Competition, showcasing exceptional skills in machine learning and predictive modeling.',
    content: `A team of five undergraduate students from the Department of Data Science at the University of Benin has won first place at the 2026 West African Data Analytics Competition (WADAC). 

    The competition, which drew participation from 24 universities across West Africa, challenged teams to build predictive models that address agricultural crop diseases using satellite and weather data. 
    
    The UNIBEN team, comprising Praise Adeyemi, Kosi Nwosu, David Ibrahim, Amina Bello, and Tobi Alao, designed a novel multi-modal neural network architecture that outperformed the runner-up team's model by a substantial margin in predictive accuracy.
    
    The head of the department, Prof. Adebayo Okonkwo, remarked: "We are immensely proud of our students. This victory demonstrates not only their technical skill but also their capacity to apply data science to solve critical real-world challenges in the African context."
    
    The team was awarded a cash prize of $5,000 and has secured summer research fellowships at top AI research labs in Europe and North America.`,
    date: 'June 10, 2026',
    readTime: '5 min read'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjBBSSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzgxMzc2NTg0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    tag: 'AI Research',
    category: 'Research',
    title: 'Breakthrough in Natural Language Processing for African Languages',
    summary: 'Department researchers publish groundbreaking work on low-resource language translation models at ACL 2026.',
    content: `Researchers at the Department of Data Science have published a breakthrough paper at the 57th Annual Meeting of the Association for Computational Linguistics (ACL 2026) in Toronto.
    
    The research, co-authored by Dr. Tunde Adeleke and PhD student Amaka Obi, introduces "YorubaBERT," a specialized transformer model trained on curated corpora of low-resource West African languages.
    
    Translation models historically suffer from lack of digitized text for training. Dr. Adeleke's team resolved this bottleneck by employing active learning algorithms and compiling native oral transcripts.
    
    "Our model increases translation accuracy and semantic alignment by over 14% compared to baseline commercial systems," explained Dr. Adeleke. "This is a huge step toward digital inclusivity for regional languages."`,
    date: 'June 5, 2026',
    readTime: '4 min read'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1644088379091-d574269d422f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9ja2NoYWluJTIwdGVjaG5vbG9neSUyMGFic3RyYWN0fGVufDF8fHx8MTc4MTM3NjU5NHww&ixlib=rb-4.1.0&q=80&w=1080',
    tag: 'Blockchain',
    category: 'Partnership',
    title: 'Department Explores Blockchain Applications in Supply Chain Management',
    summary: 'Joint initiative launched with local agriculture cooperatives to track distribution pipelines.',
    content: `The Department of Data Science is embarking on a new pilot project to implement decentralized ledger systems in Edo State's agricultural sector.
    
    Led by Dr. Chioma Eze, the program aims to trace produce distribution from regional farms to regional markets, reducing waste and assuring price transparency.
    
    "By layering analytics on top of tamper-proof blockchain ledgers, we can isolate bottlenecks in transport routes and forecast market demand with extreme precision," said Dr. Eze. 
    
    The project is funded by a development grant and involves cooperation from five regional farm coalitions.`,
    date: 'June 3, 2026',
    readTime: '6 min read'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwY29uZmVyZW5jZSUyMHByZXNlbnRhdGlvbnxlbnwxfHx8fDE3ODEzNzY1ODN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tag: 'Conference',
    category: 'Event',
    title: 'Annual Data Science Symposium 2026 Set to Hold in August',
    summary: 'Symposium to gather leading researchers, industry giants, and policymakers in Benin City.',
    content: `UNIBEN will host the 4th Annual Data Science Symposium (DSS 2026) from August 12 to 14, themed "AI for Sustainable Development in Africa."
    
    This year's event will feature keynote speeches from global experts at Google AI, Microsoft Research, and the African Union commission. Plenary tracks include machine learning, health informatics, and ethics in AI.
    
    A student hackathon sponsored by local tech giants will run concurrently, with internships and computing hardware as prizes.
    
    Registration is now open for students and researchers. Submission of papers closes on July 1.`,
    date: 'June 1, 2026',
    readTime: '3 min read'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGFuYWx5dGljcyUyMGRhc2hib2FyZHxlbnwxfHx8fDE3ODEzNzY1ODN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tag: 'Analytics',
    category: 'Analytics',
    title: 'New Course on Advanced Data Visualization Introduced',
    summary: 'Department introduces cutting-edge curriculum focused on modern visualization techniques and tools.',
    content: `Starting next semester, B.Sc. students will have access to a brand new course: "DSC 308: Advanced Data Visualization and Visual Analytics."
    
    The course, designed by Dr. Oluwaseun Ibrahim, will guide students through the psychological principles of graphic design, dashboard construction with Tableau, and custom visualizations using D3.js.
    
    "Our goal is to ensure students can communicate their analytical models clearly to non-technical stakeholders," remarked Dr. Ibrahim.`,
    date: 'May 28, 2026',
    readTime: '4 min read'
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1627556704290-2b1f5853ff78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFkdWF0aW9uJTIwY2VyZW1vbnklMjBjZWxlYnJhdGlvbnxlbnwxfHx8fDE3ODEzNzY1ODR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tag: 'Alumni',
    category: 'Alumni',
    title: 'Class of 2026 Celebrates Post-Graduation Employment Success',
    summary: 'Graduating students secure positions at top tech companies prior to formal convocation.',
    content: `The department is delighted to announce that over 85% of our graduating Class of 2026 have secured employment or postgraduate pathways prior to the formal convocation ceremony.
    
    Graduates have taken up roles as Junior Data Scientists, Systems Engineers, and Data Analysts at leading companies such as Flutterwave, OPay, Interswitch, Google Lagos, and several international institutions.
    
    We congratulate our students and wish them the best of success in their careers.`,
    date: 'May 25, 2026',
    readTime: '3 min read'
  },
  {
    id: 7,
    image: 'https://images.unsplash.com/photo-1614935151651-0bea6508db6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNlYXJjaCUyMGxhYm9yYXRvcnklMjBzY2llbnRpc3R8ZW58MXx8fHwxNzgxMzc2NTg1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    tag: 'Research',
    category: 'Research',
    title: 'AI Lab Expansion Project Completed',
    summary: 'State-of-the-art server resources and GPU nodes now available for postgraduate students.',
    content: `The expansion of our AI Research Laboratory has been finalized.
    
    Thanks to support from university leadership and corporate sponsors, the lab has been outfitted with four new NVIDIA GPU servers, doubling the computational power available for research.
    
    These systems will support complex deep learning simulations in NLP, remote sensing, and reinforcement learning.`,
    date: 'May 22, 2026',
    readTime: '2 min read'
  },
  {
    id: 8,
    image: 'https://images.unsplash.com/photo-1621241484978-6f60fdb68f1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwdW5pdmVyc2l0eSUyMGNhbXB1cyUyMG1vZGVybnxlbnwxfHx8fDE3ODEzNzY1ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tag: 'Campus',
    category: 'Campus',
    title: 'Campus Innovation Hub Opens',
    summary: 'New collaborative space for data science project development and startups.',
    content: `The Faculty of Physical Sciences has officially commissioned the Innovation Hub.
    
    This space is designed to encourage cooperative projects, hackathons, and entrepreneurship. It is equipped with collaborative whiteboards, workspaces, and presentation setups.
    
    Students from all levels are welcome to utilize this facility for their group projects.`,
    date: 'May 20, 2026',
    readTime: '3 min read'
  }
];
