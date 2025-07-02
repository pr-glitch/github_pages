import React from 'react';
import { Code2, Palette, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code that stands the test of time'
    },
    {
      icon: Palette,
      title: 'Design Thinking',
      description: 'Creating intuitive user experiences with attention to every detail'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Building fast, optimized applications that users love'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-slate-800 mb-6">
              Passionate about creating digital experiences that matter
            </h3>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              With over 5 years of experience in full-stack development, I specialize in 
              building modern web applications using React, Node.js, and cloud technologies. 
              My background in both development and design allows me to create solutions that 
              are not only functional but also beautiful and user-friendly.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              When I'm not coding, you'll find me exploring new technologies, contributing to 
              open-source projects, or hiking in the mountains. I believe in continuous learning 
              and staying up-to-date with the latest industry trends.
            </p>
            
            <div className="flex flex-wrap gap-3">
              {['JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'AWS'].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {highlights.map(({ icon: Icon, title, description }, index) => (
              <div
                key={title}
                className="flex items-start space-x-4 p-6 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors duration-300"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Icon className="text-orange-600" size={24} />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-800 mb-2">{title}</h4>
                  <p className="text-slate-600">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;