import React from 'react';
import Reveal from '../components/Reveal';
import { Mail, Award, BookOpen, Star, GraduationCap } from 'lucide-react';

const Faculty: React.FC = () => {
  const staff = [
    { name: "Dr. Eleanor Sterling", role: "Principal", qual: "PhD in Education", skills: ["Leadership", "Curriculum Design"], img: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { name: "Mr. James Anderson", role: "Vice Principal", qual: "M.Ed, M.Sc Physics", skills: ["Physics", "Administration"], img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { name: "Mrs. Sarah Jenkins", role: "Head of Sciences", qual: "M.Sc Chemistry", skills: ["Chemistry", "Lab Research"], img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { name: "Mr. Robert Chen", role: "Mathematics Dept.", qual: "M.Sc Mathematics", skills: ["Calculus", "Geometry"], img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { name: "Ms. Emily Watson", role: "English Literature", qual: "MA English", skills: ["Literature", "Debate"], img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { name: "Mr. David Miller", role: "Sports Director", qual: "B.PEd, National Player", skills: ["Athletics", "Team Management"], img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { name: "Mrs. Linda Garcia", role: "Arts & Culture", qual: "MFA", skills: ["Painting", "Art History"], img: "https://images.unsplash.com/photo-1598550832454-d14d38090757?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { name: "Mr. Michael Brown", role: "Computer Science", qual: "MCA, AI Specialist", skills: ["Python", "Robotics"], img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  ];

  const council = [
    { name: "Aarav Sharma", role: "Head Boy", grade: "Grade 12", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { name: "Zara Khan", role: "Head Girl", grade: "Grade 12", img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    { name: "Rohan Gupta", role: "Sports Captain", grade: "Grade 12", img: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  ];

  const toppers = [
    { name: "Ishaan Verma", achievement: "99.2% - Grade 12 Science", desc: "School Topper 2024" },
    { name: "Ananya Singh", achievement: "98.8% - Grade 12 Commerce", desc: "Regional Rank 3" },
    { name: "Vihaan Patel", achievement: "99% - Grade 10", desc: "Math Olympiad Gold" },
  ];

  return (
    <div className="bg-transparent">
       {/* Hero */}
       <div className="py-24 bg-primary-900 text-white text-center rounded-b-[3rem] relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524178232363-1fb2b075b955?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20"></div>
          <div className="relative z-10">
             <Reveal direction="down">
               <h1 className="text-5xl font-display font-bold mb-4">Leadership & Faculty</h1>
               <p className="text-xl text-primary-200">Guiding our students towards excellence.</p>
             </Reveal>
          </div>
       </div>

       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-24">
          
          {/* Teachers */}
          <section>
             <Reveal className="text-center mb-12">
               <h2 className="text-3xl font-display font-bold text-primary-900">Our Expert Mentors</h2>
               <p className="text-slate-600">Highly qualified professionals dedicated to nurturing talent.</p>
             </Reveal>
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {staff.map((member, index) => (
                   <Reveal key={index} delay={index * 0.05} direction="up" className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 group hover:-translate-y-2 transition-transform duration-300">
                      <div className="h-72 overflow-hidden relative bg-primary-50">
                         <img src={member.img} alt={member.name} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                         <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                            <p className="font-bold mb-2 text-accent-400">Specialities:</p>
                            <div className="flex flex-wrap gap-2">
                               {member.skills.map((skill, i) => (
                                  <span key={i} className="text-xs bg-white/20 px-2 py-1 rounded-full">{skill}</span>
                               ))}
                            </div>
                         </div>
                      </div>
                      <div className="p-6 text-center">
                         <h3 className="font-display font-bold text-lg text-primary-900">{member.name}</h3>
                         <p className="text-accent-600 font-bold text-sm mb-1">{member.role}</p>
                         <p className="text-xs text-slate-500 uppercase tracking-wide font-medium">{member.qual}</p>
                      </div>
                   </Reveal>
                ))}
             </div>
          </section>

          {/* Student Council */}
          <section>
             <Reveal className="text-center mb-12">
               <h2 className="text-3xl font-display font-bold text-primary-900">Student Council</h2>
               <p className="text-slate-600">The leaders of tomorrow, leading today.</p>
             </Reveal>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {council.map((student, i) => (
                  <Reveal key={i} delay={i * 0.1} className="bg-white p-6 rounded-3xl shadow-xl border-t-4 border-accent-500 flex items-center gap-6">
                     <img src={student.img} alt={student.name} className="w-24 h-24 rounded-full object-cover border-4 border-primary-50" />
                     <div>
                        <h3 className="text-xl font-bold text-primary-900">{student.name}</h3>
                        <div className="text-accent-600 font-bold uppercase text-sm tracking-wide mb-1">{student.role}</div>
                        <p className="text-slate-500 text-sm">{student.grade}</p>
                     </div>
                  </Reveal>
               ))}
             </div>
          </section>

          {/* Academic Toppers */}
          <section className="bg-primary-900 rounded-[3rem] p-12 text-white relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-accent-500/10 rounded-full blur-3xl"></div>
             <Reveal className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                   <Award className="text-accent-500" size={40} />
                   <h2 className="text-3xl font-display font-bold">Academic Toppers</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                   {toppers.map((topper, i) => (
                      <div key={i} className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                         <div className="flex justify-between items-start mb-4">
                            <h3 className="text-xl font-bold">{topper.name}</h3>
                            <Star className="text-accent-500 fill-accent-500" size={20} />
                         </div>
                         <div className="text-3xl font-display font-bold text-accent-400 mb-2">{topper.achievement}</div>
                         <p className="text-primary-200 text-sm uppercase tracking-wider">{topper.desc}</p>
                      </div>
                   ))}
                </div>
             </Reveal>
          </section>

       </div>
    </div>
  );
};

export default Faculty;