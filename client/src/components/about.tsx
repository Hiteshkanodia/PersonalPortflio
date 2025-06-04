import { Button } from "../components/ui/button";
import { Download } from "lucide-react";

const skills = [
  "Databricks",
  "Azure Synapse Analytics",
  "Azure Data Factory",
  "Power BI",
  "Azure Fabric",
  "PySpark",
  "SQL",
  "Python",
  "Azure Blob Storage",
  "ADLS Gen2",
  "Azure DevOps",
  "Data Modeling",
  "ETL/ELT",
  "Data Warehousing",
  "Machine Learning",
];

export default function About() {
  const handleDownloadResume = () => {
    // Convert Google Drive view link to direct download link
    const fileId = '16-z2GDQrQBqwQP3ug1dSbDNVOaBDuFyC';
    const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
    
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = "Hitesh_Kanodia_Resume.pdf";
    link.target = "_blank";
    link.click();
  };

  return (
    <section
      id="about"
      className="py-20"
      style={{ backgroundColor: "hsl(var(--neutral))" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">About Me</h2>
          <p className="text-xl text-[hsl(var(--text))] max-w-3xl mx-auto">
            I'm a passionate data engineer with 3.5+ years of experience
            building enterprise-scale data solutions and analytics platforms.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-primary mb-6">
              My Story
            </h3>
            <p className="text-[hsl(var(--text))] mb-6 leading-relaxed">
              Started my career in data engineering, specializing in Azure cloud
              technologies and big data analytics. I focus on building robust,
              scalable data pipelines that transform raw data into actionable
              business insights.
            </p>
            <p className="text-[hsl(var(--text))] mb-8 leading-relaxed">
              When I'm not architecting data solutions, you'll find me exploring
              emerging technologies in AI/ML, optimizing data workflows, or
              sharing knowledge with the data engineering community.
            </p>

            <Button
              onClick={handleDownloadResume}
              className="inline-flex items-center bg-[hsl(var(--accent))] text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors duration-300"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-primary mb-6">
              Skills & Technologies
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="skill-tag bg-white px-3 py-2 rounded-lg text-center shadow-sm border border-gray-200 cursor-pointer text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
