import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 1,
    title: 'AI-Enabled Car Parking',
    description: 'An intelligent system that uses computer vision and machine learning to optimize parking space allocation and management in real-time.',
    image: 'https://images.pexels.com/photos/1004403/pexels-photo-1004403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'ai-ml',
    technologies: ['Python', 'TensorFlow', 'OpenCV', 'React'],
    github: 'https://github.com/username/ai-car-parking',
    demo: 'https://ai-car-parking-demo.example.com'
  },
  {
    id: 2,
    title: 'iOS Todo List App',
    description: 'A minimalist yet powerful task management application for iOS that helps users organize their day with intuitive gestures and smart suggestions.',
    image: 'https://images.pexels.com/photos/4383926/pexels-photo-4383926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'mobile',
    technologies: ['Swift', 'SwiftUI', 'Core Data', 'CloudKit'],
    github: 'https://github.com/username/ios-todo-list',
    demo: null
  },
  {
    id: 3,
    title: 'Neural Network Visualization',
    description: 'An interactive web application that visualizes neural network architectures and training processes, making deep learning concepts more accessible.',
    image: 'https://images.pexels.com/photos/177598/pexels-photo-177598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'ai-ml',
    technologies: ['JavaScript', 'D3.js', 'TensorFlow.js', 'React'],
    github: 'https://github.com/username/neural-network-viz',
    demo: 'https://neural-viz-demo.example.com'
  },
  {
    id: 4,
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform with product management, shopping cart, payment processing, and order tracking capabilities.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'web',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
    github: 'https://github.com/username/ecommerce-platform',
    demo: 'https://ecommerce-demo.example.com'
  },
  {
    id: 5,
    title: 'Sentiment Analysis Tool',
    description: 'A natural language processing tool that analyzes text data from social media and customer reviews to determine sentiment and extract insights.',
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'ai-ml',
    technologies: ['Python', 'NLTK', 'Scikit-learn', 'Flask'],
    github: 'https://github.com/username/sentiment-analysis',
    demo: 'https://sentiment-analysis-demo.example.com'
  },
  {
    id: 6,
    title: 'Fitness Tracker App',
    description: 'A cross-platform mobile application that tracks workouts, nutrition, and progress towards fitness goals with personalized recommendations.',
    image: 'https://images.pexels.com/photos/4325/fitness-museum-shoes-shoe.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'mobile',
    technologies: ['React Native', 'Firebase', 'Redux', 'HealthKit'],
    github: 'https://github.com/username/fitness-tracker',
    demo: null
  }
];