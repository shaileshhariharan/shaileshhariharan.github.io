interface Experience {
  url: string | undefined;
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
}

interface ExperienceItemProps {
  experience: Experience;
}

const ExperienceItem = ({ experience }: ExperienceItemProps) => {
  return (
    <div className="group relative">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/4">
          <div className="text-sm text-gray-500 uppercase tracking-wider mb-1">
            {experience.period}
          </div>
          <div className="font-medium text-xl mb-2">{experience.role}</div>
          <a
            href={experience.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:underline"
          >
            {experience.company}
          </a>
        </div>

        <div className="md:w-3/4">
          <p className="text-gray-600 mb-4">{experience.description}</p>

          <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-3">
            Key Achievements
          </h4>
          <ul className="space-y-2">
            {experience.achievements.map((achievement, index) => (
              <li key={index} className="flex items-start">
                <span className="text-gray-400 mr-2">•</span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExperienceItem;
