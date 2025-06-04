import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import type { Project } from "@/lib/types";

const projects: Project[] = [
  {
    id: "1",
    title: "Enterprise Oracle Reports & Teradata  Migration",
    description:
      "Led enterprise migration of legacy Oracle Reports and Teradata systems to modern Azure cloud architecture. Migrated 2TB+ data with zero downtime, implemented Delta Lake with Databricks for ACID transactions, and built automated ETL pipelines reducing processing time by 65%. Achieved 99.9% data accuracy with comprehensive quality validation frameworks.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
    technologies: [
      "Azure Data Factory",
      "Databricks",
      "ADLS Gen2",
      "Azure Synapse Warehousing",
      "Power BI",
    ],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: "2",
    title: "Real-time Analytics Platform",
    description:
      "Architected enterprise-scale real-time analytics platform processing 10M+ daily events with sub-second query response times. Built interactive Power BI dashboards with custom visuals, implemented Azure Synapse dedicated SQL pools for complex analytics workloads, and established automated data refresh pipelines serving 500+ business users across multiple departments.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
    technologies: [
      "Azure Synapse",
      "Power BI",
      "PowerOn Visuals",
      "Azure Data Factory",
    ],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: "4",
    title: "ETL Pipeline Automation",
    description:
      "Designed and implemented enterprise ETL automation framework using Azure Data Factory with dynamic parameter-driven pipelines. Built self-healing data workflows with automatic retry logic and error handling, reducing manual processing time by 90% and eliminating data inconsistencies. Integrated CI/CD pipelines with Azure DevOps for seamless deployment across environments.",
    image:
      "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
    technologies: ["Azure Data Factory", "Python", "Azure DevOps"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-[hsl(var(--text))] max-w-3xl mx-auto">
            A selection of my recent data engineering projects spanning
            enterprise data platforms, analytics solutions, and cloud
            migrations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="project-card bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
            >
              <img
                src={project.image}
                alt={`${project.title} Screenshot`}
                className="w-full h-48 object-cover"
              />

              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {project.title}
                </h3>
                <p className="text-[hsl(var(--text))] mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-[hsl(var(--accent))] text-white px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center text-[hsl(var(--accent))] hover:text-indigo-700 font-medium text-lg"
          >
            View All Projects
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
