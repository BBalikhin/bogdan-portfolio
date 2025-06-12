export default function Portfolio() {
  return (
    <main className="max-w-4xl mx-auto p-6 font-sans text-gray-900 space-y-10">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold">Bogdan Balikhin</h1>
        <p className="text-lg text-gray-700">
          Engineering Manager • Data Architect • Platform Leader
        </p>
        <a
          href="https://www.linkedin.com/in/bogdan-balikhin-42116b26/"
          className="text-blue-600 hover:underline"
          target="_blank"
        >
          LinkedIn Profile
        </a>
      </header>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Summary</h2>
        <p>
          Seasoned technology leader with 25+ years of experience across the full software development lifecycle. Expert in data
          platform architecture, backend development, and high-load systems. Proven track record in leading engineering
          teams, aligning technical solutions with business goals, and delivering complex systems in healthcare, finance,
          retail, and media domains.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Key Skills</h2>
        <ul className="list-disc ml-6 grid grid-cols-2 gap-x-6">
          <li>Data & Backend Architecture</li>
          <li>Python, PySpark, Kafka, SQL</li>
          <li>Data Modeling (Inmon, Kimball, Vault, Mesh)</li>
          <li>ClickHouse, Synapse, Redshift, PostgreSQL</li>
          <li>Airflow, dbt, Terraform, DevOps</li>
          <li>Azure, AWS, Kubernetes (data-centric)</li>
          <li>Engineering Leadership & Mentorship</li>
          <li>Data Governance, Compliance, Purview</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Experience Highlights</h2>
        <ul className="space-y-4">
          <li>
            <strong>Team Leader of DBA Team</strong> – Nuvem / 340Basics (2018–2025)  
            Led cloud data platform modernization in Azure for US-based healthcare org. Designed DWH, implemented CI/CD,
            Data Lake, and security/governance layers.
          </li>
          <li>
            <strong>System Architect</strong> – Shakuro (2015–2016)  
            Built analytics platform for investment firms using Redshift, ETL, and web scraping tools.
          </li>
          <li>
            <strong>Lead Data Engineer</strong> – Adotube / Exponential (2013–2016)  
            Designed high-throughput data pipelines using Hadoop, Hive, Spark, and AWS.
          </li>
          <li>
            <strong>Business/System Analyst</strong> – SolarLab (2017–2020)  
            Developed blockchain-based financial platform for mobile and interbank transactions.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Resume</h2>
        <a
          href="/resume/Resume_BogdanBalikhin_Engineering_Manager_2025.pdf"
          download
          className="text-blue-600 hover:underline"
        >
          Download PDF Resume
        </a>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Contact</h2>
        <p>Email: <a href="mailto:balikhin.bogdan@gmail.com" className="text-blue-600">balikhin.bogdan@gmail.com</a></p>
        <p>Telegram: <a href="https://t.me/Bogdan_Balikhin" className="text-blue-600">@Bogdan_Balikhin</a></p>
        <p>Location: Remote / EU timezone preferred</p>
      </section>
    </main>
  );
}
