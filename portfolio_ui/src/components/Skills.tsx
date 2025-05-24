import { useState } from 'react';

const Skills = () => {
  const [skillCategories] = useState([
    {
      id: 1,
      title: 'Frontend',
      skills: [
        { name: 'React', level: 95 },
        { name: 'Angular', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'CSS/SCSS', level: 90 },
        { name: 'Tailwind CSS', level: 95 },
      ]
    },
    {
      id: 2,
      title: 'Backend',
      skills: [
        { name: 'Django', level: 85 },
        { name: 'FastAPI', level: 90 },
        { name: 'Node.js', level: 80 },
        { name: 'PostgreSQL', level: 85 },
        { name: 'MongoDB', level: 75 },
      ]
    },
    {
      id: 3,
      title: 'AI & Data',
      skills: [
        { name: 'Python', level: 90 },
        { name: 'TensorFlow', level: 80 },
        { name: 'Streamlit', level: 85 },
        { name: 'Pandas', level: 85 },
        { name: 'Scikit-learn', level: 75 },
      ]
    }
  ]);

  return (
    <div className="container mx-auto px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-playfair font-medium mb-16">SKILLS</h2>
        
        <div className="mb-16">
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl">
            With expertise spanning frontend, backend, and AI technologies, I bring a comprehensive 
            skillset to every project. Here's an overview of my technical proficiencies:
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {skillCategories.map((category) => (
            <div key={category.id}>
              <h3 className="text-2xl font-medium mb-6">{category.title}</h3>
              <div className="space-y-6">
                {category.skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="h-1 w-full bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gray-800 transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;