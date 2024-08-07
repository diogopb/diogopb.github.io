import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects: React.FC = () => {
  return (
    <div>
      <h1>Meus Projetos</h1>
      <ProjectCard title="Projeto 1" description="Descrição do projeto 1" link="https://github.com/seu-usuario/projeto1" />
      <ProjectCard title="Projeto 2" description="Descrição do projeto 2" link="https://github.com/seu-usuario/projeto2" />
    </div>
  );
};

export default Projects;